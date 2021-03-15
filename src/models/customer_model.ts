const mongoose = require('mongoose');
const CustomerFactory = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    street: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    zip: { type: String, default: "" },
    creditLimit: { type: String, default: "" },
    areaCode: { type: String, default: "" },
    number: { type: String, default: "" },
    is_deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
})
export default mongoose.model('customer', CustomerFactory);
