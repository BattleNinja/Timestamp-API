var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});


router.get('/:time', function (req, res) {
    if (isNaN(req.params.time)) {    // date
        var unix = new Date(req.params.time).getTime();
        if(isNaN(unix)){
            res.json({unix:null,natural:null})
        }
        else{
            var data = {unix:unix/1000,natural:req.params.time};
            res.json(data)
        }
    }
    else {                          //unix
        var date = new Date(req.params.time * 1000);
        var result = {unix:req.params.time, natural:moment(date).format('LL')}
        res.json(result)

    }

});

module.exports = router;
