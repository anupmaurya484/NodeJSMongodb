import * as express from "express";
import errorHandler from "errorhandler";
import {inventoryController} from './routecontroller/inventory_controller';

var bodyParser = require('body-parser')

/* Router Controller */

import keys from './config/keys';

export default class Server {

    public app: express.Application;
    public router: express.Router;

    constructor(app: any) {
        this.router = express.Router();
        //create expressjs application
        this.app = app;

        //configure application
        this.config();

        //mount json form parser    
        this.app.use(bodyParser.json({ limit: '50mb' }));

        //add api For Rest API
        this.api();
    }

    public api() {
        this.router.get('/api', (req:any, res:any) => res.send("Server working...."));
        //User App router in the app
        this.app.use(this.router);
        new inventoryController(this.router)
    }

    public config() {

        var self = this;

        this.app.use((req:any, res:any, next:any) => {
            next();
        })
      
        //mount json form parser    
        this.app.use(bodyParser.json({ limit: '50mb' }));

        this.app.use(function (req:any, res:any, next:any) {
            res.header("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers,crossdomain,withcredentials,Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Origin,tenant,preflight,present");
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        });


        //mount query string parser
        this.app.use(bodyParser.urlencoded({ extended: true }));

        // catch 404 and forward to error handler
        this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });

        //error handling
        this.app.use(errorHandler());
    }
}

