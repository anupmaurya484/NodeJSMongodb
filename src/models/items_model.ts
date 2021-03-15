const mongoose = require('mongoose');
const itemsFactory = new mongoose.Schema({
    itemNo: { type: String, required: true },
    itemName: { type: String, required: true },
    unitPrice: { type: String, default: "" },
    qtyOnHand: { type: String, default: "" },
    recoderPoint: { type: String, default: "" },
    is_deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
});

export default mongoose.model('items', itemsFactory);


