export type AssetType = 'Futures' | 'Options'

export interface Asset{
    type : AssetType;
    name : String;
    underlying? : string; 
    strike? : number;
    expiration? : Date;

    //function???

}


/////////////////////// Class Futures//////////////

export class Futures implements Asset{
    public type : AssetType;
    public name : string;
    public price : number;
    public amount : number;
    public side : string;

    constructor(name: string, price: number, amount: number, side:string){
        this.type = 'Futures';
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.side = side;
    }
    ///What method do i need?

}

export class Options implements Asset{
    public type : AssetType;
    public name : string;
    public underlying: string;
    public strike: number
    public expiration : Date;
    public rate : number;
    public dividend : number;
    public volatility : number;
    public delta : number;
    public gamma : number;
    public vega : number;
    public theta : number;
    public rho : number;
    public impliedvolatitlity : number;
    public price : number;
    public amount : number;
    public side : string;

    constructor(name: string, price: number, amount: number, side:string){
        this.type = 'Futures';
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.side = side;
    }
}

////////////////////////////////////////////////////////////////////////////////
interface HistoricalData {
    Date: string;
    Open: number;
    High: number;
    Low: number;
    Close: number;
}

function loadHistoricalData(filename: string): Promise<HistoricalData[]> {
    return new Promise<HistoricalData[]>((resolve, reject) => {
        let prices: HistoricalData[] = [];
        csv.fromPath(filename, { headers: true}).on('data', (data: HistoricalData) => {
            prices.push(data);
        }).on('end', () => {
            resolve(prices);
        }).on('error', (error: any) => {
            reject(error);
        })
    });
}
////////////////////////////////////////////////////////////////////////////////
// Read data from file
const INPUT_FILE = './input/EURUSD.csv';
let fullPathFile: string = path.resolve(__dirname, INPUT_FILE);
loadHistoricalData(fullPathFile).then((data: HistoricalData[]) => {
let EURUSD = data; 
function findMaxDate():string{
    let max: number = 0;
    let index:string = '';
    for (let i of EURUSD){
    if( i.High > max){
        index = i.Date;}
    }
    return index; 
}
function findMax():number{
    let max: number = 0;
    for (let i of EURUSD){
        if (i.High > max){
        max = i.High;
        }
    }
    return max;
}
