const mongoose = require('mongoose');
const ordersFactory = new mongoose.Schema({
    ordersNo: { type: String, required: true },
    ordersDate: { type: String, required: true },
    totalAmount: { type: String, required: true },
    tax: { type: String, default: "Male" },
    street: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    zip: { type: String, default: "" },
    areaCode: { type: String, default: "" },
    number: { type: String, default: "" },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'customer' },
    is_deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
});

export default mongoose.model('orders', ordersFactory);


