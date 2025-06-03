import js from "@eslint/js";
import userscripts from "eslint-plugin-userscripts";
import globals from "globals";
import { defineConfig } from "eslint/config";

const userscriptGlobals = {
  GM_addStyle: "readonly",
  GM_deleteValue: "readonly",
  GM_getValue: "readonly",
  GM_listValues: "readonly",
  GM_notification: "readonly",
  GM_openInTab: "readonly",
  GM_registerMenuCommand: "readonly",
  GM_setValue: "readonly",
  GM_xmlhttpRequest: "readonly",
  GM_info: "readonly",
  GM_getResourceText: "readonly",
  GM: "readonly",
  unsafeWindow: "readonly",
  Tampermonkey: "readonly",
  Violentmonkey: "readonly",
};

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], rules: { "no-unused-vars": "warn" } },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  { files: ['**/*.user.js'], languageOptions: { globals: userscriptGlobals }, plugins: { userscripts: { rules: userscripts.rules } }, rules: { ...userscripts.configs.recommended.rules }, settings: { userscriptVersions: { violentmonkey: '*' } } }
]);