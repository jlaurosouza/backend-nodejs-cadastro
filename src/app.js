import express from 'express';
import cors from 'cors';
import './database';
import appRoutes from './routes';

class App {
  constructor() {
    this.server = express();    
    this.routes();
    this.errors();
  }

  routes() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use('/api', appRoutes);
  }

  errors() {
    this.server.use((e, req, res, next) => {
      if (e) {
        return res.status(e.statusCode).json({ message: e.message });
      }

      console.error(e);

      return res.status(500).json({ message: 'Internal server error' });
    });
  }

}

export default new App().server;
