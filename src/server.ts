import Fastify from 'fastify';
import dotenv from 'dotenv';
import generateRoutes from './routes/generate';

dotenv.config();

const fastify = Fastify({ logger: true });

fastify.register(generateRoutes, { prefix: '/generate' });

fastify.get('/health', async () => {
  return { status: 'ok', service: 'ai-microservice' };
});

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3005;
    await fastify.listen({ port, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();