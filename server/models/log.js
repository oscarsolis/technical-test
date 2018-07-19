const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
const lang = require('./../config/lang/');

const LogSchema = new Schema({
    user: {
       	type: Schema.Types.ObjectId,
        trim: true,
        ref: 'User',
        //required: [true, lang.validations.required]
    },
    ip: {
        type: String,
        trim: true,
        required: [true, lang.validations.required]
    },
    date: {
        type: Date,
        default: Date.now
    },
    action: {
        type: String,
        trim: true,
        required: [true, lang.validations.required],
    },
    nameCollection: {
    	type: String,
      trim: true,
      required: [true, lang.validations.required]
    }
}, {
    versionKey: false,
    timestamps: true,
    usePushEach: true
});
LogSchema.plugin(mongooseDelete, {
    'deletedAt': true,
    'deletedBy': true,
    'overrideMethods': 'all'
});

/**
 * Statics
 */
LogSchema.statics = {
	listNotDeleted: function(options) {
    options = Object.assign({ 'deleted': false }, options);
    return this.find(options)
    					.populate('user')
    					.exec();
  },
  listDeleted: function(options) {
    options = Object.assign({ 'deleted': true }, options);
    return this.find(options)
    					.populate('user')
    					.exec();
  },
  listAll: function(options) {
    return this.find(options)
    					.populate('user')
    					.exec();
  }
};

mongoose.model('Log', LogSchema);
