/**
 * Created by Mark Webley on 08/01/2021.
 */
import { StockModel } from '../models/stockModel';

function createStockModel(items:any):StockModel[] {
    const stocks:StockModel[] = items.map((dataItem:any) => {
        let stock: StockModel = {};
        if (dataItem.status === 'fulfilled') {
            let dataSet = dataItem.value.data.items[0];
            stock.basic = dataSet.basic;
            stock.quote = dataSet.quote;
           return stock;
        }
    });
    return stocks;
}

function financialTimesController(service: any, urls: []) {
    function index(req: any, res: any) {
        (async function getSomeApiDATA(){
            const response = await service.getDataService(urls);
            const transformedData:StockModel[] = createStockModel(response);
            const option = {
                style: 'percent'

            };
            // optional number formatter
            const numberFormat = new Intl.NumberFormat("en-GB", option);

            res.render('index', {
                user: 'Mark',
                list: transformedData || [],
                numberFormat
            })
        }())
    }

    return {
        index
    }
}
module.exports = financialTimesController;
