import { Command, flags } from '@oclif/command';
declare class TestDoc extends Command {
    static description: string;
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        flow: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        outputFile: flags.IOptionFlag<string | undefined>;
        typescript: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    };
    static args: {
        name: string;
    }[];
    run(): Promise<void>;
}
export = TestDoc;
