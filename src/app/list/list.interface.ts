export interface IList {
    ListTitle:string,
    cards?:ICard[]
}

interface ICard{
    id:number,
    name:string
}