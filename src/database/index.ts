import mongoose from 'mongoose';
import mongoConfig from '@config/mongo';

class Database {
  private static instance: Database;
  private mongoConnection: Promise<typeof import('mongoose')>;

  public constructor() {
    this.mongo();
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  private mongo(): void {
    this.mongoConnection = mongoose.connect(
      `mongodb+srv://${mongoConfig.username}:${mongoConfig.password}@${mongoConfig.host}${mongoConfig.database}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: false,
        useCreateIndex: true,
        useFindAndModify: false,
      },
    );
  }
}

export default new Database();
