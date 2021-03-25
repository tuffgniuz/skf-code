import { commands, ExtensionContext, Position } from 'vscode';
import { GetRequirements } from './GetRequirements';

export function activate(context: ExtensionContext) {
	
	let disposable = commands.registerCommand('skf.start', () => {
		
		const requirements = new GetRequirements();

	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
