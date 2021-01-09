/**
 * Created by Mark Webley on 08/01/2021.
 */
function financialTimesController(service: any, urls: []) {
    function index(req: any, res: any) {
        (async function getSomeApiDATA(){
            const response = await service.getDataService(urls);
            console.log( 'resultresult: ', JSON.stringify(response,  null,5));
            res.render('index', {
                user: 'Mark',
                list: [] // response.list
            })
        }())
    }

    return {
        index
    }
}
module.exports = financialTimesController;
