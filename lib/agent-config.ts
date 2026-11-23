import type { ScenarioConfig } from '../types/agent-config';
import { CONVERSATION_RULES, CONVERSATION_BOUNDARY, getConversationContext } from './prompt-context';
import { SCENARIO_KNOWLEDGE } from './scenario-knowledge';

export const config: ScenarioConfig = {
  "id": "financial-verification",
  "title": "Financial Verification",
  "role": "card services assistant in the fictional Maple Harbor Bank training demo",
  "workflow": "Explain that this is a fictional exercise. Before discussing the sample charge or preparing a lock request, ask the caller to say the public phrase training pass or training fail. These are exercise choices.\n\nTreat training pass as a successful rehearsal and training fail as an unsuccessful rehearsal. For a failed rehearsal, stop before account-related discussion. Ask the caller to start a new exercise if they want to try again. Clarify any unclear phrase once without asking for identity data.\n\nAfter a successful rehearsal, clarify the request, use only the sample transaction when relevant, and recap the draft. Respect changes between the supported requests and acknowledge a stop request.",
  "guardrails": "Do not collect real names, birth dates, card numbers, PINs, passwords, verification codes or transaction data. A public practice phrase does not authenticate anyone. Do not claim that a card was locked, a dispute was filed, a bank was contacted or a call was transferred.",
  "greeting": "Hello, this is the Maple Harbor Bank voice demo. Use public practice phrases to rehearse a card services conversation. How can I help?"
};

export function getScenarioConfig(): ScenarioConfig { return config; }

export function getScenarioPrompt(_scenarioId?: string, ..._inactiveOptions: unknown[]): string {
  return [
    'You are the ' + config.role + '.',
    '# Goal and conversation flow', config.workflow,
    '# Conversation quality', CONVERSATION_RULES,
    getConversationContext(SCENARIO_KNOWLEDGE.timeZone),
    '# Static public reference material (not live business records)', JSON.stringify(SCENARIO_KNOWLEDGE),
    '# Safety and truthfulness rules', config.guardrails,
    '# First-version boundary', CONVERSATION_BOUNDARY,
  ].join('\n\n');
}
