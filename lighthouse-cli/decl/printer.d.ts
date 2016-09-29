/// <reference path="../typings/index.d.ts" />
export declare type Mode = 'pretty' | 'json' | 'html';
export interface Results {
    url: string;
    aggregations: any[];
    audits: Object;
}
/**
 * An enumeration of acceptable output modes:
 * <ul>
 *   <li>'pretty': Pretty print the results</li>
 *   <li>'json': JSON formatted results</li>
 *   <li>'html': An HTML report</li>
 * </ul>
 * @enum {string}
 */
declare const OUTPUT_MODE: {
    pretty: string;
    json: string;
    html: string;
};
/**
 * Verify output mode.
 */
declare function checkOutputMode(mode: string): Mode;
/**
 * Verify output path to use, either stdout or a file path.
 */
declare function checkOutputPath(path: string): string;
/**
 * Creates the results output in a format based on the `mode`.
 */
declare function createOutput(results: Results, outputMode: Mode): string;
/**
 * Writes the results.
 */
declare function write(results: Results, mode: Mode, path: string): Promise<Results>;
export { checkOutputMode, checkOutputPath, createOutput, write, OUTPUT_MODE };
