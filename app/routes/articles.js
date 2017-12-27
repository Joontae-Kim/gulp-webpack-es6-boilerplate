'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.send('articles');
});

router.get('/read/:id', function (req, res) {
    res.send('You are reading article ' + req.params.id);
});

module.exports = router;