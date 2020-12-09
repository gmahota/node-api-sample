import {Router} from 'express';
import CustomersController from './controllers/CustomersController'

const routes = Router();

routes.get('/customers',CustomersController.index);

routes.get('/customers/:id',CustomersController.show);
routes.post('/customers',CustomersController.create);

export default routes;