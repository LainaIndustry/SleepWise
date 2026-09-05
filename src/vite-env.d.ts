/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ANALYTICS_ID?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_ADSENSE_PUBLISHER_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
