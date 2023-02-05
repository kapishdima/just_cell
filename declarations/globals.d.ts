import { Store } from "vuex";

declare global {
  interface Window {
    GLOBAL_P?: number;
    secret_num_client?: number;
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store;
  }
}

export {};
