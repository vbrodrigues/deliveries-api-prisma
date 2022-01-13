import express from 'express';
import { routes } from './routes';


const app = express();

app.use(express.json());

app.use(routes);

app.get('/', (request, response) => {
    return response.json({
        success: true,
        status: 'ok'
    })
})

app.listen(5000, () => {
    console.log('Server started!');
});