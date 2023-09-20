"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const fs_1 = require("fs");
const glob_1 = __importDefault(require("glob"));
async function getPaths(match) {
    return util_1.promisify(glob_1.default)(match);
}
exports.getPaths = getPaths;
async function readOne(path) {
    return {
        path,
        contents: await fs_1.promises.readFile(path, {
            encoding: 'utf8'
        })
    };
}
exports.readOne = readOne;
