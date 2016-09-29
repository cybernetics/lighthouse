/// <reference path="../typings/index.d.ts" />
import * as childProcess from 'child_process';
declare class ChromeLauncher {
    prepared: Boolean;
    pollInterval: number;
    autoSelectChrome: Boolean;
    TMP_PROFILE_DIR: string;
    outFile: number;
    errFile: number;
    pidFile: string;
    chrome: childProcess.ChildProcess;
    constructor(opts?: {
        autoSelectChrome?: Boolean;
    });
    flags(): string[];
    prepare(): void;
    run(): Promise<any[]>;
    spawn(execPath: string): Promise<any[]>;
    cleanup(client: any): void;
    isDebuggerReady(): Promise<undefined>;
    waitUntilReady(): Promise<undefined>;
    kill(): Promise<undefined>;
    destroyTmp(): void;
}
export { ChromeLauncher };
