"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isTestItem(node) {
    return node.tag === 'TestItem';
}
exports.isTestItem = isTestItem;
function isTestGroup(node) {
    return ['TestGroup', 'TestSuite', 'AllTests'].includes(node.tag);
}
exports.isTestGroup = isTestGroup;
