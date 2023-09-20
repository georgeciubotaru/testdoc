"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typecheck_1 = require("./typecheck");
function template(allTests) {
    const strings = templateGroup(allTests);
    return strings.join('\n');
}
exports.template = template;
function templateGroup(group, level = 1) {
    const headerLevel = Math.min(level, 6);
    const headerMarkup = new Array(headerLevel).fill('#').join('');
    const header = `${headerMarkup} ${group.name}`;
    if (group.children.length === 0) {
        return [
            header,
            'No tests'
        ];
    }
    const childGroups = group.children.filter(typecheck_1.isTestGroup);
    const childItems = group.children.filter(typecheck_1.isTestItem);
    const itemRender = templateItems(childItems);
    const groupRender = childGroups.reduce((acc, group) => [...acc, ...templateGroup(group, level + 1)], []);
    return [
        header,
        '',
        ...(childItems.length ? itemRender : []),
        ...(groupRender.length ? groupRender : []),
        ''
    ];
}
function templateItems(items) {
    return [
        "```",
        ...items.map(item => `✓ ${item.name}`),
        "```"
    ];
}
