import { ParserOptions } from '@babel/parser';
import { File } from '@babel/types';
import { NodePath } from '@babel/traverse';
export interface AST {
    path: NodePath | File;
    file: FileRef;
}
export declare function getAST(file: FileRef, babelOptions: ParserOptions): AST;
