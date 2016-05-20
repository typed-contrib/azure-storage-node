// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

/**
* Blob upload/download speed summary
*/
declare class SpeedSummary {
    name: string;
    _startTime: Date;
    _timeWindowInSeconds: number;
    _timeWindow: number;
    _totalWindowSize: number;
    _speedTracks: any[];
    _speedTrackPtr: number;
    totalSize: number;
    completeSize: number;
    
    constructor(name?: string);
    
    /** Get running seconds. */
    getElapsedSeconds(): number;
    /** Get running seconds. */
    getElapsedSeconds(humanReadable: boolean): number | string;
    
    /**
    * Get complete percentage.
    * @param {int} len The number of digits after the decimal point.
    */
    getCompletePercent(len?: number): number;
    
    /** Get average upload/download speed. */
    getAverageSpeed(): number;
    /** Get average upload/download speed. */
    getAverageSpeed(humanReadable: boolean): number | string;
    
    /** Get instant upload/download speed. */
    getSpeed(): number;
    /** Get instant upload/download speed. */
    getSpeed(humanReadable: boolean): number | string;
    
    /** Increment the complete data size. */
    increment(len: number): number;
    
    /** Get auto increment function. */
    getAutoIncrementFunction(size: number): (err: Error, result: any) => void;
    
    /** Get total size. */
    getTotalSize(): number;
    /** Get total size. */
    getTotalSize(humanReadable: boolean): number | string;
    
    /** Get completed data size. */
    getCompleteSize(): number;
    /** Get completed data size. */
    getCompleteSize(humanReadable: boolean): number | string;
}

export = SpeedSummary;