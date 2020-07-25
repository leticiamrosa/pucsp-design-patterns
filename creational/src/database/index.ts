import mongoose from 'mongoose';
import PgMock2 from 'pgmock2';
import mongoConfig from '@config/mongo';
import postgresConfig from '@config/postgres';

class Database {
  private static instance: Database;
  private mongoConnection: Promise<typeof import('mongoose')>;
  private postgreConnection;

  public constructor() {
    this.mongo();
    this.postgre();
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
    console.log(`Database Mongo connect in ${mongoConfig.host}:${mongoConfig.port}`)
  };

  private postgre(): void {
    this.postgreConnection = new PgMock2();
    this.postgreConnection.connect();
    console.log(`Database Postgres connect in ${postgresConfig.host}:${postgresConfig.port}`);
  }
}

export default new Database();
