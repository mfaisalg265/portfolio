# Chat backend

Small Express server that calls the Anthropic API for the portfolio chatbot,
so the API key never reaches the browser.

```bash
npm install
cp .env.example .env     # Windows: copy .env.example .env
npm run dev              # http://localhost:3001
```

Put your key in `.env` as `ANTHROPIC_API_KEY=...` (never commit this file).
Change what the assistant knows by editing `SYSTEM_PROMPT` in `index.js`.

Deploy it anywhere that runs Node (Render, Railway, Fly.io). Set
`ANTHROPIC_API_KEY` in the host's environment settings, then set
`VITE_CHAT_API_URL=https://your-api-url/api/chat` for the frontend build.
