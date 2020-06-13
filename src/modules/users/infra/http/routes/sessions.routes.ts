import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const sesionsController = new SessionsController();
const sessionsRouter = Router();

sessionsRouter.post('/', sesionsController.create);

export default sessionsRouter;
