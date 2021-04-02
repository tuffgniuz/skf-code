import fetch, { Response } from "node-fetch";
import { QuickPickItem, window } from "vscode";

export class ShowChecklistQuickPick {
    private static _url: string = 'https://demo.securityknowledgeframework.org/api/checklist_category/items';
    private _token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VySWQiOjQ3MDg4NiwiaWF0IjoxNjE2NzQyMjgxLCJwcml2aWxlZ2UiOiJlZGl0OnJlYWQiLCJleHAiOjE2MTY3NDk0ODF9.c4ZS7pm2pr02IOp0xeV57yk9Cf80cQ5j568oVVaHG_s';
    private _quickPickItems: any[] = [this._getChecklistItemById(1), this._getChecklistItemById(2), this._getChecklistItemById(3)];

    /**
     * Constructs the QuickPickItem
     */
    constructor() {
        Promise.all(this._quickPickItems)
            .then(items => {
                console.log(items)
                window.showQuickPick(items)
                window.setStatusBarMessage('OWASP Security Knowledge Framework Checklist Items', 5000)
            })
    }

    /**
     * 
     * @param url - the url to fetch data from
     * @param options - optional data
     * @returns JSON response
     */
    private async _response(url: string, options?: {}) {
        const response = await fetch(url, options);
        
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch Checklist items');
        }
    } 

    /**
     * 
     * @param id 
     */
    private async _getChecklistItemById(id: number) {
        try {
            const data = await this._response(ShowChecklistQuickPick._url, { headers: { 'Authorization': this._token } });
            const items = data.items;
            for (const item of items) {
                if (item.id === id) {
                    return `${item.id} ${item.name}`;
                }
            }
        } catch (err) {
            console.log(err);
        }
    } 

}