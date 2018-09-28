var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AttendanceSchema = new Schema({
  date: Date,
  stuIds: [String]
})

var Attendance = mongoose.model("Attendance", AttendanceSchema);
module.exports.Student = Student;
