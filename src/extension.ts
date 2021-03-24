import { commands, ExtensionContext, Position } from 'vscode';
import { GetRequirements } from './skf';

export function activate(context: ExtensionContext) {
	
	let disposable = commands.registerCommand('skf.start', () => {
		// The code you place here will be executed every time your command is executed
		console.log('SKF')

		// let counter = 0;

		const requirements = new GetRequirements(new Position(0, 0))

	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
