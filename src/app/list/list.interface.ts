export interface IList {
    ListTitle:string,
    id:number,
    cards?:ICard[]
}

interface ICard{
    id:number,
    name:string,
    editMode:boolean,
}