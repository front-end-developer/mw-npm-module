/**
 * Created by Mark Webley on 08/01/2021.
 */
const fetchData = require("node-fetch");

function financialTimesService() {
    async function getDataService(urls:[]) {
        try {
            const urlResponse:any = await urls.map((url) => fetchData(url).catch(err => err));
            /*
            .catch(err => {
                console.log('url fetchData error: ', err);
                throw err;
            });
            */

            const experiment =
                {
                    "data": {
                        "items": [
                            {
                                "symbolInput": "GBPUSD",
                                "basic": {
                                    "symbol": "GBPUSD",
                                    "name": "UK Pound Sterling/US Dollar FX Spot Rate",
                                    "exchange": "SOURCE IS A THOMSON REUTERS CONTRIBUTOR",
                                    "exhangeCode": "RCT",
                                    "bridgeExchangeCode": "CUX"
                                },
                                "quote": {
                                    "lastPrice": 1.2879,
                                    "openPrice": 1.2881,
                                    "high": 1.2887,
                                    "low": 1.2868000000000002,
                                    "closePrice": 1.2881,
                                    "previousClosePrice": 1.2881,
                                    "change1Day": -0.00019999999999997797,
                                    "change1DayPercent": -0.015526744817947207,
                                    "change1Week": 0.010700000000000154,
                                    "change1WeekPercent": 0.83777012214219815,
                                    "ask": 1.288,
                                    "bid": 1.2879,
                                    "timeStamp": "2019-11-15T10:30:00",
                                    "volume": 0.0
                                }
                            }
                        ]
                    },
                    "timeGenerated": "2019-11-15T11:07:37"
                };

            const p1 = Promise.resolve(experiment);
            const p2 = Promise.resolve(experiment);
            const p3 = Promise.resolve(experiment);

            const result = await Promise.allSettled([p1,p2, p3]) //urlResponse
            .catch(err => console.log('url error detected: ', err));

            return result;

        }
        catch (err) {
            throw err;
        }
    }

    // getDataService().catch(err => console.log('Error:', err));

    return {
        getDataService
    }
}

module.exports = financialTimesService();
