import { SnippetString, window } from "vscode";
import { ChecklistCategory, ChecklistType } from "./QuickPickItems";
import { SecurityKnowledgeFrameworkAPI } from "./SecurityKnowledgeFrameworkAPI";

class SKFQuickPick {
    private _skf: SecurityKnowledgeFrameworkAPI;
    private static _categories: ChecklistCategory[] = [];
    // private static _types: ChecklistType[] = []

    constructor() {
        this._skf = new SecurityKnowledgeFrameworkAPI('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VySWQiOjYyODQ5OSwiaWF0IjoxNjE3NTQyMzUyLCJwcml2aWxlZ2UiOiJlZGl0OnJlYWQiLCJleHAiOjE2MTc1NDk1NTJ9.Ga7WqblSfgo6k2Ae5fDGRtpJRd6z9LP1O3ng18ltKdY')        
    }

    async showCategories() {
        const categories: ChecklistCategory[] = [];

        for (const item of await this._skf.getChecklistCategory()) {
            categories.push(new ChecklistCategory(item.id, item.name, item.description))
        }

        return Promise.all(categories)
            .then(items => window.showQuickPick(items))
            .then(category => this.showTypesFromCategory(category!.id))
    }

    async showTypesFromCategory(id: number) {
        const types: ChecklistType[] = [];

        for (const item of await this._skf.getChecklistTypes(id)) {
            types.push(new ChecklistType(item.id, item.title))    
        }

        return Promise.all(types)
            .then(items => window.showQuickPick(items))
            .then(async checklistItem => {
                window.activeTextEditor!.insertSnippet(new SnippetString(`$LINE_COMMENT CHECKLIST ITEMS FOR - ${checklistItem!.label}\n`))
                console.log(checklistItem)

                for (const item of await this._skf.getChecklistItems(checklistItem!.id)) {
                    // console.log(`${item.checklist_items_id} ${item.checklist_items_content}`)
                    window.activeTextEditor!.insertSnippet(new SnippetString(`$LINE_COMMENT ${item.checklist_items_id} ${item.checklist_items_content}\n`))
                }
                
            })
    }
}

export const skfQuickPick = new SKFQuickPick();

