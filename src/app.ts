import express from "express";
import { IRoutes } from "./interfaces/routes.interface";
import path from "path";
import { errorHandler } from "./middlewares/error.middleware";

class App {
  public app: express.Application;
  public port: number;
  // public env: string;

  constructor(routes: IRoutes[]) {
    this.app = express();
    this.port = 8000;
    // this.env = process.env.NODE_ENV
    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App is running on http://localhost:${this.port}`);
    });
  }

  private connectToDatabase() {
    console.log("Database connected!");
  }

  private initializeMiddlewares() {
    this.app.set("views", path.join(__dirname, "/views"));
    // this.app.use(morgan(config.get('log.format'), { stream }));
    // this.app.use(cors({ origin: config.get('cors.origin'), credentials: config.get('cors.credentials') }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: IRoutes[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorHandler);
  }
}

export default App;
