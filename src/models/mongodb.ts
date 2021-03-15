import env_config from '../config/keys';
import customer from './customer_model';
import contains from './contains_model';
import items from './items_model';
import orders from './order_model';
import supplier from './supplier_model';
import supplies from './supplies_modal';

const mongoose = require('mongoose');
mongoose.set('debug', true);

const connection = () => {
    return new Promise((resolve: any, reject: any) => {
        mongoose.connect(env_config.mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true }, function (err: any, db: any) {
            if (err) reject(err)
            resolve(true);
        });
    });
}


export default {
    connection: connection,
    ObjectId: mongoose.Types.ObjectId,
    customer : customer,
    contains : contains,
    items : items,
    orders : orders,
    supplier : supplier,
    supplies : supplies
}