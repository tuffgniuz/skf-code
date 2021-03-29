import fetch from 'node-fetch';
import { SnippetString, window } from 'vscode';

export class Requirements {
    private static readonly _token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VySWQiOjQ3MDg4NiwiaWF0IjoxNjE2NzQyMjgxLCJwcml2aWxlZ2UiOiJlZGl0OnJlYWQiLCJleHAiOjE2MTY3NDk0ODF9.c4ZS7pm2pr02IOp0xeV57yk9Cf80cQ5j568oVVaHG_s';

    constructor() {}

    async getChecklistTypes(id: string): Promise<any> {
        const data = await this._getResponse(`https://demo.securityknowledgeframework.org/api/checklist/items/${id}`);

        return data;
    }
    
    async getChecklistCategories(): Promise<any> {
        const data = await this._getResponse('https://demo.securityknowledgeframework.org/api/checklist_category/items');
        
        return data;
    } 
    
    private async _getResponse(url: string): Promise<any> {
        const response = await fetch(url, { headers: { 'Authorization': `${GetRequirements._token}` }});
        
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch API response');
        }
    }
}

