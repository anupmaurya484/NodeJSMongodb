const mongoose = require('mongoose');
const containsFactory = new mongoose.Schema({
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'items' },
    ordersId: { type: mongoose.Schema.Types.ObjectId, ref: 'orders' },
    quantity :{ type: String},
    is_deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
});

export default mongoose.model('contains', containsFactory);


