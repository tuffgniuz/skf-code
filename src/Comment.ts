import { SnippetString, TextEditor, window } from "vscode";
// import { GetRequirements } from "./GetRequirements";


export class Comment {
    private static readonly editor: TextEditor;

    public insertBlockComment(response: Promise<any>): void {
        window.activeTextEditor!.insertSnippet(new SnippetString('$START_BLOCK_COMMENT\n'))
        response.then(data => data.items)
            .then(items => {
                items.forEach((item: { id: any; name: any; }) => {
                    window.activeTextEditor!.insertSnippet(new SnippetString(`${item.id}. ${item.name}`));
                })
            })
        window.activeTextEditor!.insertSnippet(new SnippetString('$END_BLOCK_COMMENT\n'))
    }
}