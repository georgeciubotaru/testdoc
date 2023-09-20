"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ast_1 = require("./pure/ast");
const parseTests_1 = require("./pure/parseTests");
const template_1 = require("./pure/template");
const read_1 = require("./effects/read");
const write_1 = require("./effects/write");
async function testDoc(options) {
    const filePaths = await read_1.getPaths(options.fileMatch);
    const babelOpts = {
        sourceType: 'module',
        plugins: options.parsers
    };
    const parses = filePaths.map((path) => read_1.readOne(path)
        .then(file => ast_1.getAST(file, babelOpts))
        .then(ast => parseTests_1.parseGroup(ast, true)));
    const testSuites = await Promise.all(parses);
    const result = parseTests_1.aggregateGroups(testSuites);
    const documentation = template_1.template(result);
    await write_1.write(options.outputFile, documentation);
}
exports.testDoc = testDoc;
