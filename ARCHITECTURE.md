# Financial Verification Assistant architecture

The browser uses Agora RTC for media and RTM for transcripts and Agent events. Next.js routes sign tokens and start or stop the managed Agent. The Invite route supplies the scenario prompt and uses the empty list from `lib/agent-tools.ts`.

The [workflow](lib/agent-config.ts) combines the scenario instructions with [fictional reference material](lib/scenario-knowledge.ts) and shared conversational guidance. [Presentation](lib/presentation.ts) provides the user-facing description and practice request.

The Agent keeps the current draft in conversational context. Do not collect real names, birth dates, card numbers, PINs, passwords, verification codes or transaction data. A public practice phrase does not authenticate anyone. Do not claim that a card was locked, a dispute was filed, a bank was contacted or a call was transferred.

The canonical offline check is `pnpm run verify`. Live acceptance uses a configured Agora project and checks the prompt behavior in a browser call.
