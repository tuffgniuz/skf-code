import { Position, TextEditor, window, workspace, WorkspaceEdit } from "vscode"
import fetch from 'node-fetch';

// TODO: check for file extensions and insert the corrent comment notation
// TODO: a way to calculate the position where the comment should be inserted

export class GetRequirements {
    private readonly _url: string;
    private _editor: TextEditor;
    
    constructor(private _pos: Position) {
        this._url = 'https://icanhazdadjoke.com/';
        this._editor = window.activeTextEditor!;

        this._response(this._url).then(data => {
            this._insertComment(this._editor, _pos, `// REQUIREMENTS: ${data.joke}`);
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

    private _insertComment(editor: TextEditor, pos: Position, comment: string): Thenable<boolean> {
        const edit: WorkspaceEdit = new WorkspaceEdit();
        edit.insert(editor.document.uri, pos, comment);

        return workspace.applyEdit(edit);
    }
}

