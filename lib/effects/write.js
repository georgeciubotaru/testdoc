"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const process_1 = __importDefault(require("process"));
function write(filepath, contents) {
    const dest = path_1.default.relative(process_1.default.cwd(), filepath);
    return fs_1.promises.writeFile(dest, contents, {
        encoding: 'utf8'
    });
}
exports.write = write;
