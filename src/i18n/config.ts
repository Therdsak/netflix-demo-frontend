// src/i18n/config.ts
export const languages = ["en", "th"] as const;
export type Language = (typeof languages)[number];
