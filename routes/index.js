var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var reqs_to_show = req.query.numberOfReq
  reqs_to_show ? number_of_requests = reqs_to_show : ""
  var reqs = ['uno', 'dos']
  var date = new Date();
  var current_hour = date.getHours();
  var client = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var request = {ip: client, timestamp: date}
  requests.push(request)
  var req_time = req._startTime
  res.render('index', {number_of_requests: number_of_requests, title: 'Express',
    reqs: requests.slice(Math.max(0,requests.length - number_of_requests),requests.length).reverse()});
});

router.post('/', function(req, res, next) {
  console.log(req)
  res.send('hola')
})

module.exports = router;
