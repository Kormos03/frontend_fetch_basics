export interface Quote{     //Ez egy darab object
    id:number;
    quote:string;
    author:string;
}

export interface AllQuotes{     //és ez az összes
    quotes:Quote[];
}