import { Router } from 'express';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { AuthenticateClientController } from './modules/accounts/useCases/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/accounts/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/createClientController';
import { FindClientDeliveriesController } from './modules/clients/useCases/findClientDeliveries/FindClientDeliveriesController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllOpenDeliveriesController } from './modules/deliveries/useCases/findAllOpenDeliveries/FindAllOpenDeliveriesController';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateUseCaseController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { FindDeliverymanDeliveriesController } from './modules/deliveryman/useCases/findDeliverymanDeliveries/FindDeliverymanDeliveriesController';


const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findClientDeliveriesController = new FindClientDeliveriesController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const findDeliverymanDeliveriesController = new FindDeliverymanDeliveriesController();
const createDeliveryController = new CreateDeliveryController();
const findAllOpenDeliveriesController = new FindAllOpenDeliveriesController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post('/clients', createClientController.handle);
routes.post('/clients/authenticate', authenticateClientController.handle);
routes.get('/clients/deliveries', ensureAuthenticateClient, findClientDeliveriesController.handle);
routes.post('/deliveryman', createDeliverymanController.handle);
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle);
routes.get('/deliveryman/deliveries', ensureAuthenticateDeliveryman, findDeliverymanDeliveriesController.handle);
routes.post('/deliveries', ensureAuthenticateClient, createDeliveryController.handle);
routes.get('/deliveries/open', ensureAuthenticateDeliveryman, findAllOpenDeliveriesController.handle);
routes.put('/deliveries/update-deliveryman/:delivery_id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
routes.put('/deliveries/update-enddate/:delivery_id', ensureAuthenticateDeliveryman, updateEndDateController.handle);

export { routes };