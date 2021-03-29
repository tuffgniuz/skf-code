import { commands, ExtensionContext, Position } from 'vscode';
import { Requirements } from './Requirements';

export function activate(context: ExtensionContext) {

	let disposable = commands.registerCommand('skf.start', () => {
		console.log('hello')
		// requirements.getChecklistCategories()
		// const comment = new Comment();
		// const requirements = new Requirements();

	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
