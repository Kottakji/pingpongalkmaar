"use client";
import { useState } from "react";
import ENCommon from "@/locales/en/common.json";

const FILES = {
  en: {
    common: ENCommon,
  },
};

export default function useTranslation(file = "common") {
  const [language, setLanguage] = useState("en");

  const t = (key) => translate(key, language, file);

  return { t, language, setLanguage };
}

export function translate(key, language = "en", file = "common") {
  if (!key) {
    return null;
  }

  // Search for exact match, or fall back to default if key is not found
  const result = key.split(".").reduce((p, c) => (p && p[c]) || (p && p["default"]) || null, FILES?.[language]?.[file] || {}) || null;

  // Search with default preferred, to allow default to contain most information and only overwrite specific key values
  return result || key.split(".").reduce((p, c) => (p && p["default"]) || (p && p[c]) || null, FILES?.[language]?.[file] || {}) || null;
}
