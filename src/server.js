import express from 'express';
import { routes } from './routes';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json())

routes.forEach(route => {
    app[route.method](route.path, route.handler);
})

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});