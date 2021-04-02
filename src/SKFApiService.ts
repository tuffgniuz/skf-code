import fetch from 'node-fetch';
// import { ChecklistType } from './RequirementsProvider';

const token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VySWQiOjQ3MDg4NiwiaWF0IjoxNjE2NzQyMjgxLCJwcml2aWxlZ2UiOiJlZGl0OnJlYWQiLCJleHAiOjE2MTY3NDk0ODF9.c4ZS7pm2pr02IOp0xeV57yk9Cf80cQ5j568oVVaHG_s';

export const response = async (url: string) => {
    const res = await fetch(url, { headers: { 'Authorization': token } })
    
    if (res.status === 200) {
        return res.json()
    } else {
        throw new Error('Unable to fetch API')
    } 
}

const getChecklistCategories = async () => {
    const data = await response('https://demo.securityknowledgeframework.org/api/checklist_category/items');
    
    return data.items;
}

export const getChecklistType =  async () => {
    const items = await getChecklistCategories();
    
}



// response();

// export class SKFApiService {
//     private readonly _token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VySWQiOjQ3MDg4NiwiaWF0IjoxNjE2NzQyMjgxLCJwcml2aWxlZ2UiOiJlZGl0OnJlYWQiLCJleHAiOjE2MTY3NDk0ODF9.c4ZS7pm2pr02IOp0xeV57yk9Cf80cQ5j568oVVaHG_s';

//     constructor(url: string) {
//         this._getResponse(url)
//     }

//     private async _getResponse(url: string): Promise<string> {
//         const response = await fetch(url, { headers: { 'Authorization': `${this._token}` }});
        
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch API response');
//         }
//     }
// }