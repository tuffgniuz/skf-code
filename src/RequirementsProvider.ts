/**
 * Provides security requirements from Security Knowledge Framework
 */

import { TreeDataProvider, TreeItem } from "vscode";
import { Requirements } from "./Requirements";

export class SKFRequirementsProvider implements TreeDataProvider<Requirements> {
    
    getTreeItem(element: Requirements): TreeItem {
        return element.getChecklistCategories()
    }

}