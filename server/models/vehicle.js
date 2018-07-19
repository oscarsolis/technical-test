const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
const lang = require('./../config/lang/');

const VehicleSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: [true, lang.validations.required]
    },
    plate: {
        type: String,
        trim: true,
        required: [true, lang.validations.required]
    },
    dateSOAT: {
        type: Date,
        trim: true,
        required: [true, lang.validations.required]
    },
    model: {
        type: String,
        trim: true,
        required: [true, lang.validations.required],
    }
}, {
    versionKey: false,
    timestamps: true,
    usePushEach: true
});
VehicleSchema.plugin(mongooseDelete, {
    'deletedAt': true,
    'deletedBy': true,
    'overrideMethods': 'all'
});


/**
 * Statics
 */
VehicleSchema.statics = {
  listNotDeleted: function(options) {
    options = Object.assign({ 'deleted': false }, options);
    return this.find(options).exec();
  },
  listDeleted: function(options) {
    options = Object.assign({ 'deleted': true }, options);
    return this.find(options).exec();
  },
  listAll: function(options) {
    return this.find(options).exec();
  }
};

mongoose.model('Vehicle', VehicleSchema);
