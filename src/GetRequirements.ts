import { languages, Position, TextEditor, window, workspace, WorkspaceEdit } from "vscode"
import fetch, { Response } from 'node-fetch';

// DONE: check for file extensions and insert the correct comment syntax 
// TODO: a way to calculate the position where the comment should be inserted

export class GetRequirements {
    private static _baseAPIUrl: string = 'https://demo.securityknowledgeframework.org';
    // private static _checkListCategoryAPI: string = `${GetRequirements._baseAPIUrl}/api/checklist_category/items`;
    // private static _checkListTypesAPI: string = `${GetRequirements._baseAPIUrl}/api/checklist_types/types`;
    private _editor: TextEditor;
    
    constructor() { 
        this._editor = window.activeTextEditor!;

        this._response(GetRequirements._url).then(data => {
            this._insertComment(new Position(0, 0), data.joke);
        })
    }
    
    private async _response(url: string): Promise<any> {
        const response = await fetch(url, { headers: { 'Accept': 'application/json' } });
        
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch API response');
        }
    }

    private _insertComment(pos: Position, comment: string): Thenable<boolean> {
        const edit: WorkspaceEdit = new WorkspaceEdit();

        switch (this._editor.document.languageId) {
            case 'python' || 'ruby' || 'r':
                edit.insert(this._editor.document.uri, pos, `# ${comment}`);
            default:
                // Most languages use "//" for single line comments 
                edit.insert(this._editor.document.uri, pos, `// ${comment}`);           
        }
    
        return workspace.applyEdit(edit);
    }
}

