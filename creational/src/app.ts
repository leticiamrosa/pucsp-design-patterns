import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'src/database/index';

class App {
  public server: express.Application;

  public mongoose: typeof mongoose;

  public constructor() {
    this.server = express();
    this.mongoose = mongoose;

    this.middlewares();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }
}

export default new App().server;
