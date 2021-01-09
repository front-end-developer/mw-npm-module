/**
 * Created by Mark Webley on 08/01/2021.
 */
import express = require('express');
const financialTimes = express.Router();
const financialTimesController = require('../controllers/financialTimesController');
const financialTimesService = require('../services/financialTimesService');

const urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

function router() {
    const { index } = financialTimesController(financialTimesService, urls);
    financialTimes.route('/').get(index);
    return financialTimes;
}

module.exports = router;
