# Specimen — Literature-review agent

Portfolio project #7. Upload a corpus of papers; get a citation graph, synthesis brief, and drafted literature review. For PhD candidates and R&D scientists.

Live: https://specimen.raymnz.com

## Stack
- Next 16 · static export · Cloudflare Workers + Static Assets
- `@xyflow/react` for the citation graph
- EB Garamond + Spectral + Fira Code (next/font)
- framer-motion · lucide-react

## Portfolio context
Built by Rayen Manaa as part of an AI-SaaS portfolio. See `BRIEF.md` for the locked M0 design direction.

## Develop
```
pnpm install
pnpm dev
```

## Deploy
```
pnpm build
pnpm wrangler deploy
```
