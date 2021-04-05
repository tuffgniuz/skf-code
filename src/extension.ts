import { commands, ExtensionContext, window, workspace } from 'vscode';
import { skfQuickPick } from './ChecklistQuickPick';

export function activate(context: ExtensionContext) {

	let disposable = commands.registerCommand('skf.start', () => {

		skfQuickPick.showCategories();
	
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
