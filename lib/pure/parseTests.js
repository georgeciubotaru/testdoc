"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const traverse_1 = __importDefault(require("@babel/traverse"));
function aggregateGroups(groups) {
    return {
        tag: 'AllTests',
        name: 'Test Suite',
        children: groups
    };
}
exports.aggregateGroups = aggregateGroups;
function parseGroup(ast, topLevel = false, name) {
    const group = {
        tag: topLevel ? 'TestSuite' : 'TestGroup',
        name: name || ast.file.path,
        children: []
    };
    function appendGroup(path) {
        const name = extractTitle(path);
        group.children.push(parseGroup({ ...ast, path }, false, name));
    }
    function appendItem(path) {
        const name = extractTitle(path);
        group.children.push({ tag: 'TestItem', name });
    }
    const visitors = {
        CallExpression(path) {
            if (isGroup(path.node.callee)) {
                path.skip();
                appendGroup(path);
            }
            else if (isItem(path.node.callee)) {
                path.skip();
                appendItem(path);
            }
        }
    };
    if (ast.path.type === 'File') {
        traverse_1.default(ast.path, {
            ...visitors
        });
    }
    else {
        // Recursive calls need to have the scope and parentpath threaded back through
        const path = ast.path;
        traverse_1.default(path.node, {
            ...visitors
        }, path.scope, undefined, path.parentPath);
    }
    return group;
}
exports.parseGroup = parseGroup;
function isGroup(exp) {
    return isIdentifier(exp) && exp.name === 'describe';
}
function isItem(exp) {
    return isIdentifier(exp) && (exp.name === 'test' || exp.name === 'it');
}
function isIdentifier(exp) {
    return exp.type === 'Identifier';
}
function extractTitle(path) {
    const nameArg = path.node.arguments[0];
    return (nameArg && nameArg.type === 'StringLiteral')
        ? nameArg.value
        : 'test';
}
