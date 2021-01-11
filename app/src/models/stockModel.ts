/**
 * Created by Mark Webley
 */
interface BasicStockModel {
    symbol?: string;
    name?: string;
    exchange?: string;
    exhangeCode?: string;
    bridgeExchangeCode?: string;
};

interface QuoteModel {
        lastPrice?: number;
        openPrice?: number;
        high?: number;
        low?: bigint;
        closePrice?: number;
        previousClosePrice?: number;
        change1Day?: number;
        change1DayPercent?: number;
        change1Week?: number;
        change1WeekPercent?: number;
        ask?: number;
        bid?: number;
        timeStamp?: string;
        volume?: number;
};

export interface StockModel {
    status?: string;
    basic?: BasicStockModel;
    quote?: QuoteModel;
    timeGenerated?: string;
}
