import { FastifyInstance } from 'fastify';
import OpenAI from 'openai';
import { CoverLetterBody, VacancyBody } from '../types';
import { verifySecret } from '../hooks/auth';

export default async function generateRoutes(fastify: FastifyInstance) {
  const openai = new OpenAI({
    apiKey: process.env.NVIDIA_API_KEY,
    baseURL: 'https://integrate.api.nvidia.com/v1',
  });

  const MODEL = process.env.MODEL_NAME || 'openai/gpt-oss-20b';

  fastify.addHook('preHandler', verifySecret);

  fastify.post<{ Body: CoverLetterBody }>('/cover-letter', async (request, reply) => {
    const { vacancyTitle, vacancyDescription, candidateAbout, candidateSkills, candidateExperience } = request.body;

    const skillsText = candidateSkills && candidateSkills.length > 0
      ? candidateSkills.join(', ')
      : 'Not explicitly specified.';

    const prompt = `
      Job Title: ${vacancyTitle}
      Job Description: ${vacancyDescription}
      My Skills: ${skillsText}
      My Experience: ${candidateExperience || 'Not specified'}
      About Me (Bio/Motivation): ${candidateAbout || 'Not specified'}
    `;

    try {
      const completion = await openai.chat.completions.create({
        model: MODEL,
        temperature: 0.7,
        max_tokens: 1024,
        messages: [
          {
            role: "system",
            content: "You are an expert career coach writing a cover letter for a web platform. START IMMEDIATELY with the greeting (e.g., 'Dear Hiring Manager,'). NEVER include a standard document header (no physical addresses, no dates, no phone numbers at the top). Focus entirely on matching the candidate's profile to the job description. End with a simple 'Sincerely,'."
          },
          { role: "user", content: prompt }
        ]
      });
      return { text: completion.choices[0]?.message?.content || '' };
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ error: 'Failed to generate cover letter' });
    }
  });

  fastify.post<{ Body: VacancyBody }>('/vacancy', async (request, reply) => {
    const { jobTitle, keywords } = request.body;

    try {
      const completion = await openai.chat.completions.create({
        model: MODEL,
        temperature: 0.6,
        max_tokens: 1024,
        messages: [
          { role: "system", content: "You are an expert IT Recruiter. Write a clear, professional job description. Return STRICTLY the text of the job description. DO NOT include any conversational filler, greetings, or introductory phrases like 'Here is the description'." },
          { role: "user", content: `Job Title: ${jobTitle}\nKeywords: ${keywords.join(', ')}` }
        ]
      });
      return { text: completion.choices[0]?.message?.content || '' };
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ error: 'Failed to generate job description' });
    }
  });
}