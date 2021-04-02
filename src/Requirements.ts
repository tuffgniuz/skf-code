import fetch from 'node-fetch';
import { SnippetString, TreeItem, TreeItemCollapsibleState, window } from 'vscode';

// export class ChecklistItem extends TreeItem {
    

    // private static readonly _token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VySWQiOjQ3MDg4NiwiaWF0IjoxNjE2NzQyMjgxLCJwcml2aWxlZ2UiOiJlZGl0OnJlYWQiLCJleHAiOjE2MTY3NDk0ODF9.c4ZS7pm2pr02IOp0xeV57yk9Cf80cQ5j568oVVaHG_s';
    // private static _response: string;
    // readonly _id: string;
     

    
    
    // // private readonly _label: string;

    // constructor(label: string, public readonly collapsibleState: TreeItemCollapsibleState) {
    //     super(label, collapsibleState);
    //     this._id = checklistResponse.id
    //     this.label = checklistResponse.name

    // }

    // async getChecklistTypes(id: string): Promise<string> {
    //     const data = await this._getResponse(`https://demo.securityknowledgeframework.org/api/checklist/items/${id}`);

    //     return data;
    // }
    
    // async getChecklistCategories(): Promise<string> {
    //     const data = await this._getResponse('https://demo.securityknowledgeframework.org/api/checklist_category/items');
        
    //     return data
    // } 
    
    // private async _getResponse(url: string): Promise<string> {
    //     const response = await fetch(url, { headers: { 'Authorization': `${Requirements._token}` }});
        
    //     if (response.status === 200) {
    //         return response.json();
    //     } else {
    //         throw new Error('Unable to fetch API response');
    //     }
    // }
// }