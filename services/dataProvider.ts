import { stringify } from 'query-string';
const apiUrl:string = 'http://localhost:9987';
interface IListParams {
    pagination: {
        page: number,
        perPage: number
    },
    sort: {
        field: string,
        order: string,
    },
    filter: {
        [x:string]: string;
     } | {},
}

interface IIdParams {
    id: number,
}

interface ICreateParams {
    [x:string]: string | null | number;
}
const headers: any= {
        'content-type': 'application/json',
        'Accept': 'application/json' 
}; 
export default {
    getList: async (resource:string, params: IListParams): Promise<any>=>{
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url:string = `${apiUrl}/${resource}?${stringify(query)}`;
        const token = localStorage.getItem('token');
        if(token){
            headers["Authorization"] = `Bearer ${token}`
        }
        return fetch(url, {
            method: 'GET',
            headers,
        }).then((response: Response)=>{
            return response.json()
        }).then((data:Array<any>)=> (
            data
        ))
    },
    getOne: async (resource: string, params: IIdParams) => {
        const url: string =  `${apiUrl}/${resource}/${params.id}`;
        const token = localStorage.getItem('token');
        if(token){
            headers["Authorization"] = `Bearer ${token}`
        }
        return fetch(url, {
            method: "GET",
            headers,
        }).then((response: Response) => {
            return response.json();
        }).then((data:any) => (
            data
        ))
    }, 
    create: async (resource: string, params: ICreateParams): Promise<any> => {
        const url: string =  `${apiUrl}/${resource}`;
        const token = localStorage.getItem('token');
        if(token){
            headers["Authorization"] = `Bearer ${token}`
        }
        return fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(params),
        }).then((response: Response) => {
            return response.json();
        }).then((data:any) => data)
    }



}