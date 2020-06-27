import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import mongoConfig from 'src/config/mongo';

class App {
  public server: express.Application;

  public mongoose: typeof mongoose;

  public constructor() {
    this.server = express();
    this.mongoose = mongoose;

    this.middlewares();
    this.database();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private database(): void {
    this.mongoose.connect(
      `mongodb://${mongoConfig.username}:${mongoConfig.password}@${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: false,
        useCreateIndex: true,
        useFindAndModify: false,
      },
    );
  }
}

export default new App().server;
