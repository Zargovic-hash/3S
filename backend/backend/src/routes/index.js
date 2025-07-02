import { Router } from 'express';
import IndexController from '../controllers/index.js';

const router = Router();
const indexController = new IndexController();

export default function setRoutes(app) {
    app.use('/api/data', router);
    router.get('/', indexController.getData.bind(indexController));
    router.post('/', indexController.postData.bind(indexController));
}