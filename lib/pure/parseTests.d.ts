import { AST } from './ast';
export declare function aggregateGroups(groups: Array<TestGroup>): TestGroup;
export declare function parseGroup(ast: AST, topLevel?: boolean, name?: string): TestGroup;
