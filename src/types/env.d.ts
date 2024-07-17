declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    USERNAME: string;
    PORT?: string;
    PASSWORD: string;
    DB: string;
  }
}
