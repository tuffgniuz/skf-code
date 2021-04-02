import fetch from 'node-fetch';
import { promises } from 'node:dns';
import { commands, ExtensionContext, window, workspace } from 'vscode';
import { ShowChecklistQuickPick } from './RequirementsProvider';

const request = require('postman-request');


const url = 'https://demo.securityknowledgeframework.org/api/checklist_category/items';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VySWQiOjQ3MDg4NiwiaWF0IjoxNjE2NzQyMjgxLCJwcml2aWxlZ2UiOiJlZGl0OnJlYWQiLCJleHAiOjE2MTY3NDk0ODF9.c4ZS7pm2pr02IOp0xeV57yk9Cf80cQ5j568oVVaHG_s';

export function activate(context: ExtensionContext) {

	let disposable = commands.registerCommand('skf.start', () => {
		new ShowChecklistQuickPick();
		// const quickpickItems: any[] = [getChecklistItemsById(1), getChecklistItemsById(2), getChecklistItemsById(3)];
		
		// Promise.all(quickpickItems)
		// 	.then(results => {
		// 		window.showQuickPick(results)
		// 	})
	});

	context.subscriptions.push(disposable);
}

const getChecklistItemsById = async (id: number) => {
	return fetch(url, { headers: { 'Authentication': token }})
		.then(response => response.json())
		.then(data => data.items)
		.then(items => {
			for (const item of items) {
				if (item.id === id) {
					return `item.name`;
				}
			}
		})
}

export function deactivate() {}
