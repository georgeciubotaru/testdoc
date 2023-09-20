"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("@babel/parser");
function getAST(file, babelOptions) {
    return {
        path: parser_1.parse(file.contents, babelOptions),
        file
    };
}
exports.getAST = getAST;
