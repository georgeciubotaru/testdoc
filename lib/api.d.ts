import { ParserPlugin } from '@babel/parser';
export interface Options {
    fileMatch: string;
    outputFile: string;
    parsers?: ParserPlugin[];
}
export declare function testDoc(options: Options): Promise<void>;
