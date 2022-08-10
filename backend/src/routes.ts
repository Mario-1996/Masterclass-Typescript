import { Router } from 'express';

const routes = Router();

import UserController from './controllers/UserController';

routes.get('/Users', UserController.index)
routes.post('/Users', UserController.create)

export default routes;