
const Doctor = require('../models/DoctorModel');
// const Helper = require('./Helper');
class DoctorController{
  index = (req, res)=>{
    Doctor.getAll((err, data) => {
      if (err)
        res.status(500).send({
        message:
          err.message
        });
      else{
        var string = JSON.stringify(data);
        data =  JSON.parse(string);
        res.render('user/doctor',{data});
      } 
    });
  }
  detail = (req, res)=>{
    var request = req.query.ID;
    Doctor.getElement(request, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message
        });
      else{
        var string = JSON.stringify(data);
        data =  JSON.parse(string);
        res.send(data[0]);
      } 
    });
  }
  filter = (req, res) => {
    var region = req.query.Type;
    Doctor.getFilter(region, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message
        });
      else{
        var string = JSON.stringify(data);
        data =  JSON.parse(string);
        res.render('user/doctor',{data});
      } 
    });
  }
}

module.exports = new DoctorController;
