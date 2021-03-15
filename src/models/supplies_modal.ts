const mongoose = require('mongoose');
const suppliesFactory = new mongoose.Schema({
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'supplier' },
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'items' },
    unitCost :{ type: String},
    is_deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
})

export default mongoose.model('supplies', suppliesFactory);


