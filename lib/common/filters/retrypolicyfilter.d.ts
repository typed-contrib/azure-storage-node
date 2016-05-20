// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

/**
* @class
* The RetryPolicyFilter allows you to retry operations,
* using a custom retry policy. Users are responsible to 
* define the shouldRetry method.
* To apply a filter to service operations, use `withFilter`
* and specify the filter to be used when creating a service.
*/
declare class RetryPolicyFilter implements RetryPolicyFilter.IRetryFilter {
    retryCount: number;
    retryInterval: number;

    /**
    * @constructor
    * @param {number} [retryCount=30000]    The client retry count.
    * @param {number} [retryInterval=3]     The client retry interval, in milliseconds.
    */
    constructor(retryCount?: number, retryInterval?: number);

    /**
    * Represents the default client retry interval, in milliseconds.
    */
    static DEFAULT_CLIENT_RETRY_INTERVAL: number;

    /**
    * Represents the default client retry count.
    */
    static DEFAULT_CLIENT_RETRY_COUNT: number;

    /**
    * Handles an operation with a retry policy.
    *
    * @param {Object}   requestOptions The original request options.
    * @param {function} next           The next filter to be handled.
    */
    handle(requestOptions: any, next: RetryPolicyFilter.HandleCallback): void;

    /**
    * Implements a should-retry policy. TO BE IMPLEMENTED!
    * @abstract
    * @param {number} statusCode       The request status code.
    * @param {Object}   requestOptions The original request options.
    */
    /*abstract*/ shouldRetry(statusCode: number, requestOptions: any): RetryPolicyFilter.RetryInfo;

    /**
    * Handles an operation with a retry policy.
    *
    * @param {Object}   requestOptions The original request options.
    * @param {function} next           The next filter to be handled.
    */
    static _handle(self: RetryPolicyFilter, requestOptions: any, next: RetryPolicyFilter.HandleCallback): void;

    static __shouldRetryOnError(statusCode: number, requestOptions: any): RetryPolicyFilter.RetryInfo;
}

declare namespace RetryPolicyFilter {
    export interface IRetryFilter {
        retryCount?: number;
        retryInterval?: number;

        handle(requestOptions: any, next: HandleCallback): void;
        shouldRetry(statusCode: number, requestOptions: any): RetryInfo;
    }
    
    export interface ReturnObject {
        error?: Error;
        retryable?: boolean;
        response?: any;
    }

    export interface RetryInfo {
        retryCount?: number;
        retryInterval?: number;
        locationMode?: string;
        currentLocation?: string;
        error?: Error;
        lastServerError?: boolean;
        ignore?: boolean;
        retryable?: boolean;
    }
    
    export interface NextCallback {
        (returnObject: ReturnObject): void;
    }

    export interface HandleCallback {
        (returnObject: ReturnObject, finalCallback: NextCallback, next: NextCallback): void;
    }
}

export = RetryPolicyFilter;