const mongoose = require('mongoose');
const supplierFactory = new mongoose.Schema({
    supplierNo: { type: String, required: true },
    supplierName: { type: String, required: true },
    totalAmount: { type: String, required: true },
    tax: { type: String, default: "" },
    street: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    zip: { type: String, default: "" },
    country: { type: String, default: "" },
    contactName: { type: String, default: "" },
    countryCode: { type: String, default: "" },
    areaCode: { type: String, default: "" },
    number: { type: String, default: "" },
    ordersId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'orders' }],
    is_deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
})

export default mongoose.model('supplier', supplierFactory);


