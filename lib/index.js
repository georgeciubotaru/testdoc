"use strict";
const command_1 = require("@oclif/command");
const api_1 = require("./api");
class TestDoc extends command_1.Command {
    async run() {
        const { args, flags } = this.parse(TestDoc);
        const parsers = ['jsx'];
        if (flags.flow)
            parsers.push('flow');
        if (flags.typescript)
            parsers.push('typescript');
        await api_1.testDoc({
            fileMatch: args.files,
            outputFile: flags.outputFile || 'TESTS.md',
            parsers
        });
    }
}
TestDoc.description = 'Turns JavaScript tests into documentation';
TestDoc.flags = {
    help: command_1.flags.help({
        char: 'h',
        description: 'show help'
    }),
    flow: command_1.flags.boolean({
        char: 'f',
        description: 'Parse Flow files'
    }),
    outputFile: command_1.flags.string({
        char: 'o',
        description: 'Destination for the generated document'
    }),
    typescript: command_1.flags.boolean({
        char: 't',
        description: 'Parse TypeScript files'
    }),
};
TestDoc.args = [{ name: 'files' }];
module.exports = TestDoc;
