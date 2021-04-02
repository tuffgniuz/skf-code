import { commands, ExtensionContext, window, workspace } from 'vscode';
import { ShowChecklistQuickPick } from './ChecklistQuickPick';

export function activate(context: ExtensionContext) {

	let disposable = commands.registerCommand('skf.start', () => {
		
		new ShowChecklistQuickPick();
	
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
