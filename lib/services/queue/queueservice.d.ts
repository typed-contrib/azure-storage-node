// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

import { StorageServiceClient } from "../../common/common";

type ErrorOrResult<T> = StorageServiceClient.ErrorOrResult<T>;
type ErrorOrList<T> = StorageServiceClient.ErrorOrList<T>;

/**
* @class
* @extends {StorageServiceClient}
* The QueueService class is used to perform operations on the Microsoft Azure Queue Service.
* 
* For more information on using the Queue Service, as well as task focused information on using it from a Node.js application, see
* [How to Use the Queue Service from Node.js](http://azure.microsoft.com/en-us/documentation/articles/storage-nodejs-how-to-use-queues/).
*/
declare class QueueService extends StorageServiceClient {
    /** A flag indicating whether the message should be base-64 encoded. Default is true. */
    encodeMessage: boolean;
    /** The default timeout interval, in milliseconds, to use for request made via the Queue service. */
    defaultTimeoutIntervalInMs: number;
    /** The default maximum execution time across all potential retries, for requests made via the Queue service. */
    defaultMaximumExecutionTimeInMs: number;
    /** The default location mode for requests made via the Queue service. */
    defaultLocationMode: number;
    /**
     * Determines whether the Nagle algorithm is used for requests made via the Blob service; true to use the Nagle algorithm; otherwise, false. 
     * The default value is false.
     */
    useNagleAlgorithm: boolean;
    
    
    /**
    * Creates a new QueueService object using the AZURE_STORAGE_CONNECTION_STRING or AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables.
    * @constructor
    */
    constructor();
    /**
    * Creates a new QueueService object using the given connection string.
    *
    * @constructor
    * @param {string} connectionString                    The storage account or the connection string.
    */    
    constructor(connectionString: string);
    /**
    * Creates a new QueueService object using the given parameters.
    *
    * @constructor
    * @param {string} [storageAccount]                    The storage account.
    * @param {string} [storageAccessKey]                  The storage access key.
    * @param {string|object} [host]                       The host address. To define primary only, pass a string. 
    *                                                     Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
    * @param {string} [sasToken]                          The Shared Access Signature token.
    */
    constructor(storageAccount: string, storageAccessKey: string, host?: StorageServiceClient.HostConfiguration, sasToken?: string);
    
    
    // ***********************************************************
    // ** SERVICE METHODS
    // ***********************************************************
    
    /**
    * Gets the service stats for a storage account’s Queue service.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `[result]{@link ServiceStats}` will contain the stats and 
    *                                                               `response` will contain information related to this operation.
    */
    getServiceStats(callback: ErrorOrResult<StorageServiceClient.ServiceStats>): void;
    /**
    * Gets the service stats for a storage account’s Queue service.
    * @param {object}         options                               The request options.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `[result]{@link ServiceStats}` will contain the stats and 
    *                                                               `response` will contain information related to this operation.
    */
    getServiceStats(options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<StorageServiceClient.ServiceStats>): void;
    
    
    /**
    * Gets the properties of a storage account’s service, including Azure Storage Analytics.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `result` will contain the properties 
    *                                                               and `response` will contain information related to this operation.
    */
    getServiceProperties(callback: StorageServiceClient.ErrorOrResult<StorageServiceClient.ServiceProperties>): void;
    /**
    * Gets the properties of a storage account’s service, including Azure Storage Analytics.
    * @param {object}       options                                 The request options.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `result` will contain the properties 
    *                                                               and `response` will contain information related to this operation.
    */
    getServiceProperties(options: StorageServiceClient.ServiceOptions, callback: StorageServiceClient.ErrorOrResult<StorageServiceClient.ServiceProperties>): void;
    
    
    /**
    * Sets the properties of a storage account’s service, including Azure Storage Analytics.
    * You can also use this operation to set the default request version for all incoming requests that do not have a version specified.
    *
    * @param {ServiceProperties}  serviceProperties                        The service properties.
    * @param {ServiceOptions}     options                                  The request options.
    * @param {errorOrResponse}    callback                                 `error` will contain information
    *                                                                      if an error occurs; otherwise, `response`
    *                                                                      will contain information related to this operation.
    */
    setServiceProperties(serviceProperties: StorageServiceClient.ServiceProperties, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Sets the properties of a storage account’s service, including Azure Storage Analytics.
    * You can also use this operation to set the default request version for all incoming requests that do not have a version specified.
    *
    * @param {ServiceProperties}  serviceProperties                        The service properties.
    * @param {errorOrResponse}    callback                                 `error` will contain information
    *                                                                      if an error occurs; otherwise, `response`
    *                                                                      will contain information related to this operation.
    */
    setServiceProperties(serviceProperties: StorageServiceClient.ServiceProperties, options: StorageServiceClient.ServiceOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    
    // ***********************************************************
    // ** LIST QUEUE METHODS
    // ***********************************************************
    
    /**
    * Lists a segment containing a collection of queue items whose names begin with the specified prefix under the given account.
    *
    * @param {object}             currentToken                                A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                         `entries`  gives a list of `[queues]{@link QueueResult}` and the `continuationToken` is used for the next listing operation.
    *                                                                         `response` will contain information related to this operation.
    */
    listQueuesSegmented(currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrList<QueueService.QueueResult>): void;
    /**
    * Lists a segment containing a collection of queue items whose names begin with the specified prefix under the given account.
    *
    * @param {object}             currentToken                                A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                         `entries`  gives a list of `[queues]{@link QueueResult}` and the `continuationToken` is used for the next listing operation.
    *                                                                         `response` will contain information related to this operation.
    */
    listQueuesSegmented(currentToken: StorageServiceClient.ContinuationToken, options: QueueService.ListQueueOptions, callback: ErrorOrList<QueueService.QueueResult>): void;
    
    /**
    * Lists a segment containing a collection of queue items  under the given account.
    *
    * @param {string}             prefix                                      The prefix of the queue name.
    * @param {object}             currentToken                                A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                         `entries`  gives a list of `[queues]{@link QueueResult}` and the `continuationToken` is used for the next listing operation.
    *                                                                         `response` will contain information related to this operation.
    */
    listQueuesSegmentedWithPrefix(prefix: string, currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrList<QueueService.QueueResult>): void;
    /**
    * Lists a segment containing a collection of queue items  under the given account.
    *
    * @param {string}             prefix                                      The prefix of the queue name.
    * @param {object}             currentToken                                A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                         `entries`  gives a list of `[queues]{@link QueueResult}` and the `continuationToken` is used for the next listing operation.
    *                                                                         `response` will contain information related to this operation.
    */
    listQueuesSegmentedWithPrefix(prefix: string, currentToken: StorageServiceClient.ContinuationToken, options: QueueService.ListQueueOptions, callback: ErrorOrList<QueueService.QueueResult>): void;
    
    
    // ***********************************************************
    // ** QUEUE METHODS
    // ***********************************************************
    
    /**
    * Checks to see if a queue exists.
    *
    * @param {string}             queue                                       The queue name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise, `[result]{@link QueueResult}` will contain
    *                                                                         the queue information including `exists` boolean member.
    *                                                                         `response` will contain information related to this operation.
    */
    doesQueueExist(queue: string, callback: ErrorOrResult<QueueService.QueueResult>): void;
    /**
    * Checks to see if a queue exists.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise, `[result]{@link QueueResult}` will contain
    *                                                                         the queue information including `exists` boolean member.
    *                                                                         `response` will contain information related to this operation.
    */
    doesQueueExist(queue: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<QueueService.QueueResult>): void;
    
    /**
    * Creates a new queue under the given account.
    *
    * @param {string}             queue                                       The queue name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueResult}` will contain
    *                                                                         the queue information.
    *                                                                         `response` will contain information related to this operation.
    */
    createQueue(queue: string, callback: ErrorOrResult<QueueService.QueueResult>): void;
    /**
    * Creates a new queue under the given account.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueResult}` will contain
    *                                                                         the queue information.
    *                                                                         `response` will contain information related to this operation.
    */
    createQueue(queue: string, options: QueueService.CreateQueueOptions, callback: ErrorOrResult<QueueService.QueueResult>): void;
    
    /**
    * Creates a new queue under the given account if it doesn't exist.
    *
    * @param {string}             queue                                       The queue name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueResult}` will contain
    *                                                                         the queue information.
    *                                                                         `response` will contain information related to this operation.
    */
    createQueueIfNotExists(queue: string, callback: ErrorOrResult<QueueService.QueueResult>): void;
    /**
    * Creates a new queue under the given account if it doesn't exist.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueResult}` will contain
    *                                                                         the queue information.
    *                                                                         `response` will contain information related to this operation.
    */
    createQueueIfNotExists(queue: string, options: QueueService.CreateQueueOptions, callback: ErrorOrResult<QueueService.QueueResult>): void;
    
    /**
    * Permanently deletes the specified queue.
    *
    * @param {string}             queue                                       The queue name.
    * @param {errorOrResponse}    callback                                    `error` will contain information if an error occurs; 
    *                                                                         `response` will contain information related to this operation.
    */
    deleteQueue(queue: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Permanently deletes the specified queue.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResponse}    callback                                    `error` will contain information if an error occurs; 
    *                                                                         `response` will contain information related to this operation.
    */
    deleteQueue(queue: string, options: StorageServiceClient.ServiceClientOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Permanently deletes the specified queue if it exists.
    *
    * @param {string}             queue                                       The queue name.
    * @param {errorOrResponse}    callback                                    `error` will contain information if an error occurs; 
    *                                                                         `response` will contain information related to this operation.
    */
    deleteQueueIfExists(queue: string, callback: ErrorOrResult<boolean>): void;
    /**
    * Permanently deletes the specified queue if it exists.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResponse}    callback                                    `error` will contain information if an error occurs; 
    *                                                                         `response` will contain information related to this operation.
    */
    deleteQueueIfExists(queue: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<boolean>): void;
    
    /**
    * Returns queue properties, including user-defined metadata.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             queue                                       The queue name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueResult}` will contain
    *                                                                         the queue information.
    *                                                                         `response` will contain information related to this operation.
    */
    getQueueMetadata(queue: string, callback: ErrorOrResult<QueueService.QueueResult>): void;
    /**
    * Returns queue properties, including user-defined metadata.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueResult}` will contain
    *                                                                         the queue information.
    *                                                                         `response` will contain information related to this operation.
    */
    getQueueMetadata(queue: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<QueueService.QueueResult>): void;
    
    /**
    * Sets user-defined metadata on the specified queue. Metadata is associated with the queue as name-value pairs.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             metadata                                    The metadata key/value pairs.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueResult}` will contain
    *                                                                         the queue information.
    *                                                                         `response` will contain information related to this operation.
    */
    setQueueMetadata(queue: string, metadata: Object, callback: ErrorOrResult<QueueService.QueueResult>): void;
    /**
    * Sets user-defined metadata on the specified queue. Metadata is associated with the queue as name-value pairs.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             metadata                                    The metadata key/value pairs.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueResult}` will contain
    *                                                                         the queue information.
    *                                                                         `response` will contain information related to this operation.
    */
    setQueueMetadata(queue: string, metadata: Object, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<QueueService.QueueResult>): void;
    
    
    // ***********************************************************
    // ** QUEUE MESSAGE METHODS
    // ***********************************************************
    
    /**
    * Adds a new message to the back of the message queue. 
    * The encoded message can be up to 64KB in size for versions 2011-08-18 and newer, or 8KB in size for previous versions. 
    * Unencoded messages must be in a format that can be included in an XML request with UTF-8 encoding. 
    * Queue messages are encoded by default. See queueService.encodeMessage to set encoding defaults. 
    * 
    * @param {string}             queue                                       The queue name.
    * @param {string|Buffer}      messageText                                 The message text.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `response` will contain information related to this operation.
    */
    createMessage(queue: string, messageText: string | Buffer, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Adds a new message to the back of the message queue. 
    * The encoded message can be up to 64KB in size for versions 2011-08-18 and newer, or 8KB in size for previous versions. 
    * Unencoded messages must be in a format that can be included in an XML request with UTF-8 encoding. 
    * Queue messages are encoded by default. See queueService.encodeMessage to set encoding defaults. 
    * 
    * @param {string}             queue                                       The queue name.
    * @param {string|Buffer}      messageText                                 The message text.
    * @param {object}             options                                     The request options.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `response` will contain information related to this operation.
    */
    createMessage(queue: string, messageText: string | Buffer, options: QueueService.CreateMessageOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Retrieve messages from the queue and makes them invisible to other consumers.
    *
    * @param {string}             queue                                       The queue name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain
    *                                                                         a list of `[messages]{@link QueueMessageResult}`.
    *                                                                         `response` will contain information related to this operation.
    */
    getMessages(queue: string, callback: ErrorOrResult<QueueService.QueueMessageResult[]>): void;
    /**
    * Retrieve messages from the queue and makes them invisible to other consumers.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain
    *                                                                         a list of `[messages]{@link QueueMessageResult}`.
    *                                                                         `response` will contain information related to this operation.
    */
    getMessages(queue: string, options: QueueService.GetMessagesOptions, callback: ErrorOrResult<QueueService.QueueMessageResult[]>): void;
    
    /**
    * Retrieves a message from the queue and makes it invisible to other consumers.
    *
    * @param {string}             queue                                       The queue name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain
    *                                                                         a list of `[messages]{@link QueueMessageResult}`.
    *                                                                         `response` will contain information related to this operation.
    */
    getMessage(queue: string, callback: ErrorOrResult<QueueService.QueueMessageResult>): void;
    /**
    * Retrieves a message from the queue and makes it invisible to other consumers.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain
    *                                                                         a list of `[messages]{@link QueueMessageResult}`.
    *                                                                         `response` will contain information related to this operation.
    */
    getMessage(queue: string, options: QueueService.GetMessageOptions, callback: ErrorOrResult<QueueService.QueueMessageResult>): void;
    
    
    /**
    * Retrieves messages from the front of the queue, without changing the messages visibility.
    *
    * @param {string}             queue                                       The queue name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain
    *                                                                         a list of `[messages]{@link QueueMessageResult}`.
    *                                                                         `response` will contain information related to this operation.
    */
    peekMessages(queue: string, callback: ErrorOrResult<QueueService.QueueMessageResult[]>): void;
    /**
    * Retrieves messages from the front of the queue, without changing the messages visibility.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain
    *                                                                         a list of `[messages]{@link QueueMessageResult}`.
    *                                                                         `response` will contain information related to this operation.
    */
    peekMessages(queue: string, options: QueueService.PeekMessagesOptions, callback: ErrorOrResult<QueueService.QueueMessageResult[]>): void;
    
    /**
    * Retrieves a message from the front of the queue, without changing the message visibility.
    *
    * @param {string}             queue                                       The queue name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain
    *                                                                         a list of `[messages]{@link QueueMessageResult}`.
    *                                                                         `response` will contain information related to this operation.
    */
    peekMessage(queue: string, callback: ErrorOrResult<QueueService.QueueMessageResult>): void;
    /**
    * Retrieves a message from the front of the queue, without changing the message visibility.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain
    *                                                                         a list of `[messages]{@link QueueMessageResult}`.
    *                                                                         `response` will contain information related to this operation.
    */
    peekMessage(queue: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<QueueService.QueueMessageResult>): void;
    
    /**
    * Deletes a specified message from the queue.
    *
    * @param {string}             queue                                       The queue name.
    * @param {string}             messageId                                   The message identifier of the message to delete.
    * @param {string}             popReceipt                                  A valid pop receipt value returned from an earlier call to the Get Messages or Update Message operation
    * @param {errorOrResponse}    callback                                    `error` will contain information if an error occurs; 
    *                                                                         `response` will contain information related to this operation.
    */
    deleteMessage(queue: string, messageId: string, popReceipt: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Deletes a specified message from the queue.
    *
    * @param {string}             queue                                       The queue name.
    * @param {string}             messageId                                   The message identifier of the message to delete.
    * @param {string}             popReceipt                                  A valid pop receipt value returned from an earlier call to the Get Messages or Update Message operation
    * @param {object}             options                                     The request options.
    * @param {errorOrResponse}    callback                                    `error` will contain information if an error occurs; 
    *                                                                         `response` will contain information related to this operation.
    */
    deleteMessage(queue: string, messageId: string, popReceipt: string, options: StorageServiceClient.ServiceClientOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Clears all messages from the queue.
    *
    * @param {string}             queue                                       The queue name.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise 
    *                                                                         `response` will contain information related to this operation.
    */
    clearMessages(queue: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Clears all messages from the queue.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise 
    *                                                                         `response` will contain information related to this operation.
    */
    clearMessages(queue: string, options: StorageServiceClient.ServiceClientOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Updates the visibility timeout of a message. You can also use this operation to update the contents of a message.
    * A message must be in a format that can be included in an XML request with UTF-8 encoding, and the encoded message can be up to 64KB in size.
    *
    * @param {string}             queue                                       The queue name.
    * @param {string}             messageId                                   The message identifier of the message to update.
    * @param {string}             popReceipt                                  A valid pop receipt value returned from an earlier call to the Get Messages or Update Message operation
    * @param {int}                visibilityTimeout                           Specifies the new visibility timeout value, in seconds, relative to server time. The new value must be larger than or 
    *                                                                         equal to 0, and cannot be larger than 7 days. The visibility timeout of a message can be set to a value later than 
    *                                                                         the expiry time.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueMessageResult}` will contain
    *                                                                         the message result information.
    *                                                                         `response` will contain information related to this operation.
    */
    updateMessage(queue: string, messageId: string, popReceipt: string, visibilityTimeout: number, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Updates the visibility timeout of a message. You can also use this operation to update the contents of a message.
    * A message must be in a format that can be included in an XML request with UTF-8 encoding, and the encoded message can be up to 64KB in size.
    *
    * @param {string}             queue                                       The queue name.
    * @param {string}             messageId                                   The message identifier of the message to update.
    * @param {string}             popReceipt                                  A valid pop receipt value returned from an earlier call to the Get Messages or Update Message operation
    * @param {int}                visibilityTimeout                           Specifies the new visibility timeout value, in seconds, relative to server time. The new value must be larger than or 
    *                                                                         equal to 0, and cannot be larger than 7 days. The visibility timeout of a message can be set to a value later than 
    *                                                                         the expiry time.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueMessageResult}` will contain
    *                                                                         the message result information.
    *                                                                         `response` will contain information related to this operation.
    */
    updateMessage(queue: string, messageId: string, popReceipt: string, visibilityTimeout: number, options: QueueService.UpdateMessageOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    
    // ***********************************************************
    // ** QUEUE ACL METHODS
    // ***********************************************************
    
    /**
    * Gets the queue's ACL.
    *
    * @param {string}             queue                                       The queue name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueResult}` will contain
    *                                                                         information for the queue.
    *                                                                         `response` will contain information related to this operation.
    */
    getQueueAcl(queue: string, callback: ErrorOrResult<QueueService.QueueResult>): void;
    /**
    * Gets the queue's ACL.
    *
    * @param {string}             queue                                       The queue name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueResult}` will contain
    *                                                                         information for the queue.
    *                                                                         `response` will contain information related to this operation.
    */
    getQueueAcl(queue: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<QueueService.QueueResult>): void;
    
    /**
    * Updates the queue's ACL.
    *
    * @param {string}             queue                                       The queue name.
    * @param {Object.<string, AccessPolicy>} signedIdentifiers                The container ACL settings. See `[AccessPolicy]{@link AccessPolicy}` for detailed information.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueResult}` will contain
    *                                                                         information for the queue.
    *                                                                         `response` will contain information related to this operation.
    */
    setQueueAcl(queue: string, signedIdentifiers: StorageServiceClient.SignedIdentifiers, callback: ErrorOrResult<QueueService.QueueResult>): void;
    /**
    * Updates the queue's ACL.
    *
    * @param {string}             queue                                       The queue name.
    * @param {Object.<string, AccessPolicy>} signedIdentifiers                The container ACL settings. See `[AccessPolicy]{@link AccessPolicy}` for detailed information.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link QueueResult}` will contain
    *                                                                         information for the queue.
    *                                                                         `response` will contain information related to this operation.
    */
    setQueueAcl(queue: string, signedIdentifiers: StorageServiceClient.SignedIdentifiers, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<QueueService.QueueResult>): void;
    
    
    /**
    * Retrieves a shared access signature token.
    *
    * @param {string}                   queue                                               The queue name.
    * @param {object}                   sharedAccessPolicy                                  The shared access policy.
    * @return {string}                                                                      The shared access signature query string. Note this string does not contain the leading "?".
    */
    generateSharedAccessSignature(queue: string, sharedAccessPolicy: StorageServiceClient.SharedAccessPolicy): string;
}

declare namespace QueueService {
    
    // ***********************************************************
    // ** RESULTS
    // ***********************************************************
    
    export interface QueueResult {
        /** The queue name. */
        name: string;
        /** The metadata key/value pair. */
        metadata?: any;
        /** The approximate number of messages in the queue. This number is not lower than the actual number of messages in the queue, but could be higher. */
        approximateMessageCount?: number;
        /** The container ACL settings. See AccessPolicy for detailed information. */
        signedIdentifiers?: StorageServiceClient.SignedIdentifiersResult;
        /** Does the queue exists? Available after a doesQueueExist call. */
        exists?: boolean;
        /** Was queue created ? Available after a createQueueIfNotExists call. */
        created?: boolean;
    }
    
    export interface QueueMessageResult {
        /** The queue name. */
        name: string;
        /** The message id. */
        messageId?: string;
        /** The pop receipt. */
        popReceipt?: string;
        /** The message text. */
        messageText?: string;
        /** The time next visible. */
        timeNextVisible?: string;
        /** The insertion time. */
        insertionTime?: string;
        /** The expiration time. */
        expirationTime?: string;
        /** The dequeue count. */
        dequeueCount?: string;
    }
    
    // ***********************************************************
    // ** OPTIONS
    // ***********************************************************
    
    export interface ListQueueOptions extends StorageServiceClient.ServiceClientOptions {
        /** Specifies the maximum number of queues to return per call to Azure storage. This does NOT affect list size returned by this function. (maximum: 5000) */
        maxResults?: number;
        /** 
         * Include this parameter to specify that the queue's metadata be returned as part of the response body. (allowed values: '', 'metadata').
         * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
         */
        include?: string;
    }
    
    export interface CreateQueueOptions extends StorageServiceClient.ServiceClientOptions {
        /** The metadata key/value pairs. */
        metadata?: Object;
    }
    
    export interface CreateMessageOptions extends GetMessageOptions {
        /** The time-to-live interval for the message, in seconds. The maximum time-to-live allowed is 7 days. If this parameter is omitted, the default time-to-live is 7 days */
        messageTimeToLive?: number;
    }
    
    export interface GetMessageOptions extends StorageServiceClient.ServiceClientOptions {
        /** 
         * Specifies the new visibility timeout value, in seconds, relative to server time. The new value must be larger than or equal to 0, and cannot be larger than 7 days. 
         * The visibility timeout of a message cannot be set to a value later than the expiry time. visibilitytimeout should be set to a value smaller than the time-to-live value.
         */
        visibilityTimeout?: number;
    }
    
    export interface GetMessagesOptions extends GetMessageOptions {
        /** A nonzero integer value that specifies the number of messages to retrieve from the queue, up to a maximum of 32. By default, a single message is retrieved from the queue with this operation. */
        numOfMessages?: number;
        /** 
         * Specifies the new visibility timeout value, in seconds, relative to server time. The new value must be larger than or equal to 0, and cannot be larger than 7 days. 
         * The visibility timeout of a message cannot be set to a value later than the expiry time. visibilitytimeout should be set to a value smaller than the time-to-live value.
         */
        visibilityTimeout?: number;
    }
    
    export interface PeekMessagesOptions extends StorageServiceClient.ServiceClientOptions {
        /** A nonzero integer value that specifies the number of messages to retrieve from the queue, up to a maximum of 32. By default, a single message is retrieved from the queue with this operation. */
        numOfMessages?: number;
    }
    
    export interface UpdateMessageOptions extends StorageServiceClient.ServiceClientOptions {
        /** The new message text. */
        messageText?: string;
    }
}

export = QueueService;