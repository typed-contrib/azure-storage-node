// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

import * as RetryPolicyFilter from "./retrypolicyfilter";

/**
* @class
* The LinearRetryPolicyFilter allows you to retry operations,
* using an linear back-off interval between retries.
* To apply a filter to service operations, use `withFilter`
* and specify the filter to be used when creating a service.
*/
declare class LinearRetryPolicyFilter implements RetryPolicyFilter.IRetryFilter {
    retryCount: number;
    retryInterval: number;

    /**
    * @constructor
    * @param {number} [retryCount=3]            The client retry count.
    * @param {number} [retryInterval=30000]     The client retry interval, in milliseconds.
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
    
    handle(requestOptions: any, next: RetryPolicyFilter.HandleCallback): void;
    shouldRetry(statusCode: number, requestOptions: any): RetryPolicyFilter.RetryInfo;
}

export = LinearRetryPolicyFilter;