/**
 * Created by Mark Webley on 08/01/2021.
 */
const fetchData = require("node-fetch");

function financialTimesService() {
    async function getDataService(urls:[]) {
        try {
            const urlResponse:any = await Promise.all(urls.map((url) => fetchData(url)
                .then((response:any) => response.json())
                .catch((err:any) => err)));
            const result = await Promise.allSettled(urlResponse)
            .catch(err => console.log('url error detected: ', err));
            return result;
        }
        catch (err:any) {
            throw err;
        }
    }
    return {
        getDataService
    }
}

module.exports = financialTimesService();
