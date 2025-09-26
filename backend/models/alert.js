// import mongoose from "mongoose";

// const alertSchema = new mongoose.Schema({
//   senderAgency: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Agency',
//     required: true,
//   },
//   recipientAgency: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Agency',
//     required: true,
//   },
//   severity: {
//     type: String,
//     required: true,
//   },
//   timestamp: {
//     type: Date,
//     default: Date.now,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
// });

// export default mongoose.model("Alerts",alertSchema)

// Inside alert.js (or your alert model file)
import mongoose from "mongoose";

const alertSchema = new mongoose.Schema({
    senderAgency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agency',
        required: true,
    },
    recipientAgency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agency',
        required: true,
    },
    severity: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
        required: true,
    },
    // New fields for resource request
    requestedResources: [{
        resourceName: { type: String, required: true },
        quantity: { type: Number, required: true },
    }],
    urgency: {
        type: String,
        enum: ['High', 'Medium', 'Low'], // You can define urgency levels
        required: true
    }
});

export default mongoose.model("Alerts", alertSchema);