const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
const lang = require('./../config/lang/');

const DriverSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, lang.validations.required]
    },
    paternalSurname: {
        type: String,
        trim: true,
        required: [true, lang.validations.required]
    },
    maternalSurname: {
        type: String,
        trim: true,
    },
    typeDocument: {
        type: String,
        trim: true,
        required: [true, lang.validations.required],
    },
    numberDocument: {
        type: String,
        trim: true,
        required: [true, lang.validations.required]
    },
    gender: {
        type: String,
        trim: true,
        required: [true, lang.validations.required]
    }
}, {
    versionKey: false,
    timestamps: true,
    usePushEach: true
});
DriverSchema.plugin(mongooseDelete, {
  'deletedAt': true,
  'deletedBy': true,
  'overrideMethods': 'all'
});


/**
 * Statics
 */
DriverSchema.statics = {
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

mongoose.model('Driver', DriverSchema);
