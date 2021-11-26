const Accept = require('../models/Accept');
class AcceptController{
    index = (req, res)=>{
      Accept.getAll((err, data) => {
        if (err)
          res.status(500).send({
          message:
            err.message
          });
        else{
          var string = JSON.stringify(data);
          data =  JSON.parse(string);
          res.render('volunteer/accept',{data});
        } 
      });
    }
    
    /*
    get_list = (req,res)=>{
      Accept.get_list(function(data){
      res.send({result : data});
      });
    }
    get_detail = (req,res)=>{
      var data = {"id":req.params.id,"name":"Book name 1"};
      
      res.send({result : data});
    }
    */
  }
  module.exports = new AcceptController;

