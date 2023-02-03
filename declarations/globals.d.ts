export {};

declare global {
  interface Window {
    GLOBAL_P?: number;
    secret_num_client?: number;
  }
}
