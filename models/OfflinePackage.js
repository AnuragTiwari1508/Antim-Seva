import mongoose from 'mongoose';

const OfflinePackageSchema = new mongoose.Schema({
  tokenNumber: {
    type: String,
    required: true,
    unique: true
  },
  shopId: {
    type: String,
    required: true
  },
  shopName: {
    type: String,
    required: true
  },
  packageId: {
    type: String,
    required: true
  },
  packageName: {
    type: String,
    required: true
  },
  packagePrice: {
    type: Number,
    required: true
  },
  packageItems: [{
    name: String,
    nameHindi: String,
    quantity: {
      type: Number,
      default: 1
    }
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // Allow non-registered users
  },
  customerDetails: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: false
    }
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'preparing', 'ready', 'collected', 'cancelled'],
    default: 'pending'
  },
  bookingDate: {
    type: Date,
    default: Date.now
  },
  preferredCollectionDate: {
    type: Date,
    required: false
  },
  actualCollectionDate: {
    type: Date,
    required: false
  },
  notes: {
    type: String,
    required: false
  },
  repeatBooking: {
    type: Boolean,
    default: false
  },
  originalTokenNumber: {
    type: String,
    required: false // For repeat bookings
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'partial', 'refunded'],
    default: 'pending'
  },
  specialRequests: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

// Create indexes
OfflinePackageSchema.index({ tokenNumber: 1 });
OfflinePackageSchema.index({ shopId: 1 });
OfflinePackageSchema.index({ userId: 1 });
OfflinePackageSchema.index({ 'customerDetails.email': 1 });
OfflinePackageSchema.index({ status: 1 });
OfflinePackageSchema.index({ bookingDate: 1 });

const OfflinePackage = mongoose.models.OfflinePackage || mongoose.model('OfflinePackage', OfflinePackageSchema);

export default OfflinePackage;