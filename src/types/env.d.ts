declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    USER: string;
    PORT?: string;
    PASSWORD: string;
    DB: string;
  }
}
