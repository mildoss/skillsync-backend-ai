# SkillSync Backend - AI Service

A TypeScript-based AI microservice built with Fastify and OpenAI integration for the SkillSync platform.

## Overview

The SkillSync AI Service is a backend microservice responsible for AI-powered content generation, intelligent recommendations, and natural language processing features. It leverages the OpenAI API to provide advanced AI capabilities for the SkillSync platform.

## Features

- **AI Content Generation**: Generate intelligent content using OpenAI models
- **OpenAI Integration**: Seamless integration with OpenAI API for advanced AI capabilities
- **RESTful API**: Built with Fastify for high-performance API endpoints
- **Health Checks**: Service health monitoring and status endpoints
- **Environment Configuration**: Flexible configuration via environment variables
- **TypeScript Support**: Fully typed codebase for better development experience

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Fastify 5.8.5
- **Language**: TypeScript
- **AI Provider**: OpenAI SDK 6.36.0
- **Build Tool**: TypeScript Compiler (TSC)

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- OpenAI API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mildoss/skillsync-backend-ai.git
cd skillsync-backend-ai
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3005
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
```

## Usage

### Development

Start the development server with hot reload:
```bash
npm run dev
```

The service will start on `http://localhost:3005` by default.

### Production Build

Build the TypeScript code:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## API Endpoints

### Health Check

- **GET** `/health`
  - Returns the service status
  - Response: `{ "status": "ok", "service": "ai-microservice" }`

### Generate Routes

All AI generation-related endpoints are prefixed with `/generate`. For detailed documentation of generation endpoints, see the routes configuration in `src/routes/generate.ts`.

## Project Structure

```
src/
├── server.ts              # Main server entry point
├── routes/
│   └── generate.ts        # AI generation API routes
└── ...
```

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Service port | `3005` |
| `OPENAI_API_KEY` | OpenAI API key | Required |
| `NODE_ENV` | Environment (development/production) | `development` |

## Dependencies

### Production
- **fastify** (^5.8.5) - Web framework for building APIs
- **openai** (^6.36.0) - OpenAI API client library
- **dotenv** (^17.4.2) - Environment variable management

### Development
- **typescript** (^6.0.3) - TypeScript compiler
- **@types/node** (^25.6.0) - Node.js type definitions
- **tsx** (^4.21.0) - TypeScript runtime and watcher

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Start production server |

## Development

### Setting Up for Development

1. Install dependencies: `npm install`
2. Configure environment variables in `.env`
3. Ensure your OpenAI API key is valid
4. Run `npm run dev` to start the development server

### Code Guidelines

The project is written in TypeScript. Follow these best practices:
- Use strict typing throughout the codebase
- Configure TypeScript compiler options in `tsconfig.json`
- Run the compiler before committing: `npm run build`
- Leverage TypeScript's type system for better error detection

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the package.json file for details.

## Support

For issues, questions, or contributions, please open an issue on the [GitHub repository](https://github.com/mildoss/skillsync-backend-ai).

## Related Projects

This is part of the SkillSync platform ecosystem. Other related services include:
- [SkillSync Backend - Payment Service](https://github.com/mildoss/skillsync-backend-payment)
- SkillSync Backend (main service)
- SkillSync Frontend
- Other microservices

## OpenAI Integration

This service uses the OpenAI API for AI-powered features. Make sure you have:
- A valid OpenAI API key
- Sufficient API credits
- Understanding of OpenAI's usage policies and pricing

---

**Last Updated**: 2026-05-15
