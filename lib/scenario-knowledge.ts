export const SCENARIO_KNOWLEDGE = {
  "business": "Maple Harbor Bank",
  "timeZone": "America/New_York",
  "practicePassPhrase": "training pass",
  "practiceFailPhrase": "training fail",
  "sampleTransaction": {
    "merchant": "Pine Street Books",
    "amountUsd": 42
  },
  "supportedRequests": [
    "unfamiliar sample charge",
    "lost sample card",
    "sample card lock request"
  ]
} as const;
