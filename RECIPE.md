# Agora Financial Verification Demo

## 1. What you build

Use public practice phrases to rehearse a card services conversation.

## 2. Prerequisites

Use Node.js 24, pnpm 9.15.9 and an Agora project with Conversational AI enabled.

## 3. Configure the app

Copy `env.local.example` to `.env.local`. Enter the App ID and App Certificate in the fields listed in [README.md](README.md).

## 4. Run the app

Run `pnpm install --frozen-lockfile` and `pnpm dev`. Open the local page and allow microphone access.

## 5. Try a conversation

Say “I would like to practice reporting an unfamiliar card charge.” Then say “Switch the practice scenario to a lost card and a lock request instead.” Ask for a recap of the corrected draft.

## 6. Understand the boundary

The browser session uses fictional reference data and a spoken draft. Do not collect real names, birth dates, card numbers, PINs, passwords, verification codes or transaction data. A public practice phrase does not authenticate anyone. Do not claim that a card was locked, a dispute was filed, a bank was contacted or a call was transferred.

## 7. Customize the scenario

Edit [the workflow](lib/agent-config.ts), [the fictional reference](lib/scenario-knowledge.ts) or [the UI copy](lib/presentation.ts).

## 8. Verify

Run `pnpm run verify`. Exercise the initial request and correction in a real browser call to validate speech behavior.
