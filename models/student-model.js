var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  stuFirNam: String,
  stuLasNam: String,
  stuEmail: String,
  stuPhone: String,
  createdAt: {type: Date, Default: Date.now}
})

var Student = mongoose.model('Student', StudentSchema);
module.exports.Student = Student;
