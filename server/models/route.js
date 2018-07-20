const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
const lang = require('./../config/lang/');

const RouteSchema = new Schema({
  driver: {
   	type: Schema.Types.ObjectId,
    trim: true,
    ref: 'Driver',
    required: [true, lang.validations.required]
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    trim: true,
    ref: 'Vehicle',
    required: [true, lang.validations.required]
  },
  startPoint: {
    type: {
			type: String,
			default: 'Point'
		},
		coordinates: {
			type: [Number],
			required: [true, lang.validations.required]
		}
  },
  endPoint: {
    type: {
			type: String,
			default: 'Point'
		},
		coordinates: {
			type: [Number],
			required: [true, lang.validations.required]
		}
  },
  startTime: {
  	type: Date,
    required: [true, lang.validations.required]
  },
  endTime: {
  	type: Date,
    required: [true, lang.validations.required]
  },
  passengers: {
    type: Number,
    required: [true, lang.validations.required]
  },
  company: {
  	type: String,
    trim: true,
    required: [true, lang.validations.required]
  },
  status: {
  	type: String,
  	trim: true,
  	default: 'active'
  }
}, {
    versionKey: false,
    timestamps: true,
    usePushEach: true
});
RouteSchema.plugin(mongooseDelete, {
  'deletedAt': true,
  'deletedBy': true,
  'overrideMethods': 'all'
});

/**
 * Statics
 */
RouteSchema.statics = {
	listNotDeleted: function(options) {
    options = Object.assign({ 'deleted': false }, options);
    return this.find(options)
    					.populate('driver')
    					.populate('vehicle')
    					.exec();
  },
  listDeleted: function(options) {
    options = Object.assign({ 'deleted': true }, options);
    return this.find(options)
    					.populate('driver')
    					.populate('vehicle')
    					.exec();
  },
  listAll: function(options) {
    return this.find(options)
    					.populate('driver')
    					.populate('vehicle')
    					.exec();
  },
  listActives: function(options) {
  	options = Object.assign({ 'deleted': false, 'status': 'active' }, options);
  	return this.find(options)
	  						.populate('driver')
	    					.populate('vehicle')
	    					.exec();
  }
};

mongoose.model('Route', RouteSchema);

