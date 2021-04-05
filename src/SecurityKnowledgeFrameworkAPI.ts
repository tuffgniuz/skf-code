import fetch from "node-fetch";


export class SecurityKnowledgeFrameworkAPI {
    private static readonly _baseAPIUrl: string = 'https://demo.securityknowledgeframework.org/api'
    private _token: string;

    constructor(token: string) {
        this._token = token;
    }

    public get token() {
        return this._token;
    }
    
    async getResponse(url: string, options?: {}) {
        const response = await fetch(url, options);

        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch API');
        }
    }

    async getChecklistCategory(): Promise<any> {
        const data = await this.getResponse(`${SecurityKnowledgeFrameworkAPI._baseAPIUrl}/checklist_category/items`, { 
            headers: { 'Authorization': this._token} 
        });
        
        return data.items;
    }

    async getChecklistTypes(id: number) {
        const data = await this.getResponse(`${SecurityKnowledgeFrameworkAPI._baseAPIUrl}/checklist_types/types/${id}`, { 
            headers: { 'Authorization': this._token } 
        });
        
        return data.items;
    }

    async getChecklistItems(id: number) {
        const data = await this.getResponse(`${SecurityKnowledgeFrameworkAPI._baseAPIUrl}/checklist/items/${id}`, { 
            headers: { 'Authorization': this._token } 
        });
        
        return data.items;
    }

}