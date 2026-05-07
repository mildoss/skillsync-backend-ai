import { FastifyRequest, FastifyReply } from 'fastify';

export const verifySecret = async (request: FastifyRequest, reply: FastifyReply) => {
  const secret = request.headers['x-gateway-secret'];
  const expectedSecret = process.env.GATEWAY_SECRET;

  if (!secret || secret !== expectedSecret) {
    reply.code(401).send({ error: 'Unauthorized: Invalid or missing service secret' });
  }
};