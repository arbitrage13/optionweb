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
