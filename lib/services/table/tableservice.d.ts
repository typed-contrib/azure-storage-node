// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

import { StorageServiceClient } from "../../common/common";
import { StorageError } from "../../common/errors/errors";
import * as TableQuery from "./tablequery";
import * as TableBatch from "./tablebatch";

type ErrorOrResult<T> = StorageServiceClient.ErrorOrResult<T>;
type ErrorOrList<T> = StorageServiceClient.ErrorOrList<T>;

/**
* @class
* @extends {StorageServiceClient}
* The TableService object allows you to peform management operations with the Microsoft Azure Table Service.
* The Table Service stores data in rows of key-value pairs. A table is composed of multiple rows, and each row
* contains key-value pairs. There is no schema, so each row in a table may store a different set of keys.
*
* For more information on the Table Service, as well as task focused information on using it from a Node.js application, see
* [How to Use the Table Service from Node.js](http://azure.microsoft.com/en-us/documentation/articles/storage-nodejs-how-to-use-table-storage/).
*/
declare class TableService extends StorageServiceClient {
    /** The default timeout interval, in milliseconds, to use for request made via the Table service. */
    defaultTimeoutIntervalInMs: number;
    /** The default maximum execution time across all potential retries, for requests made via the Table service. */
    defaultMaximumExecutionTimeInMs: number;
    /** The default location mode for requests made via the Table service. */
    defaultLocationMode: number;
    /** The default payload format for requests made via the Table service. */
    defaultPayloadFormat: number;
    /**
     * Determines whether the Nagle algorithm is used for requests made via the Table service; true to use the Nagle algorithm; otherwise, false. 
     * The default value is false.
     */
    useNagleAlgorithm: boolean;
    
    
    /**
    * Creates a new TableService object using the AZURE_STORAGE_CONNECTION_STRING or AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables.
    * @constructor
    */
    constructor();
    /**
    * Creates a new TableService object using the given connection string.
    *
    * @constructor
    * @param {string} connectionString                    The storage account or the connection string.
    */    
    constructor(connectionString: string);
    /**
    * Creates a new TableService object using the given parameters.
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
    * Gets the service stats for a storage account’s Table service.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `[result]{@link ServiceStats}` will contain the stats and 
    *                                                               `response` will contain information related to this operation.
    */
    getServiceStats(callback: ErrorOrResult<StorageServiceClient.ServiceStats>): void;
    /**
    * Gets the service stats for a storage account’s Table service.
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
    // ** TABLE LIST METHODS
    // ***********************************************************
    
    /**
    * Lists a segment containing a collection of table items under the specified account.
    *
    * @param {object}             currentToken                                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {errorOrResult}      callback                                          `error` will contain information if an error occurs; 
    *                                                                               otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                               `entries`  gives a list of tables and the `continuationToken` is used for the next listing operation.
    *                                                                               `response` will contain information related to this operation.
    */
    listTablesSegmented(currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrResult<TableService.TableListResult>): void;
    /**
    * Lists a segment containing a collection of table items under the specified account.
    *
    * @param {object}             currentToken                                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                                           The create options or callback function.
    * @param {errorOrResult}      callback                                          `error` will contain information if an error occurs; 
    *                                                                               otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                               `entries`  gives a list of tables and the `continuationToken` is used for the next listing operation.
    *                                                                               `response` will contain information related to this operation.
    */
    listTablesSegmented(currentToken: StorageServiceClient.ContinuationToken, options: TableService.ListTableOptions, callback: ErrorOrResult<TableService.TableListResult>): void;
    
    /**
    * Lists a segment containing a collection of table items under the specified account.
    *
    * @param {string}             prefix                                            The prefix of the table name.
    * @param {object}             currentToken                                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {errorOrResult}      callback                                          `error` will contain information if an error occurs; 
    *                                                                               otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                               `entries`  gives a list of tables and the `continuationToken` is used for the next listing operation.
    *                                                                               `response` will contain information related to this operation.
    */
    listTablesSegmentedWithPrefix(prefix: string, currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrResult<TableService.TableListResult>): void;
    /**
    * Lists a segment containing a collection of table items under the specified account.
    *
    * @param {string}             prefix                                            The prefix of the table name.
    * @param {object}             currentToken                                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                                           The create options or callback function.
    * @param {errorOrResult}      callback                                          `error` will contain information if an error occurs; 
    *                                                                               otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                               `entries`  gives a list of tables and the `continuationToken` is used for the next listing operation.
    *                                                                               `response` will contain information related to this operation.
    */
    listTablesSegmentedWithPrefix(prefix: string, currentToken: StorageServiceClient.ContinuationToken, options: TableService.ListTableOptions, callback: ErrorOrResult<TableService.TableListResult>): void;
    
    
    // ***********************************************************
    // ** TABLE METHODS
    // ***********************************************************
    
    /**
    * Gets the queue's ACL.
    *
    * @param {string}             table                                       The table name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link TableResult}` will contain
    *                                                                         information for the table.
    *                                                                         `response` will contain information related to this operation.
    */
    getTableAcl(table: string, callback: ErrorOrResult<TableService.TableResult>): void;
    /**
    * Gets the table's ACL.
    *
    * @param {string}             table                                       The table name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link TableResult}` will contain
    *                                                                         information for the table.
    *                                                                         `response` will contain information related to this operation.
    */
    getTableAcl(table: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<TableService.TableResult>): void;
    
    /**
    * Updates the table's ACL.
    *
    * @param {string}             table                                       The table name.
    * @param {Object.<string, AccessPolicy>} signedIdentifiers                The container ACL settings. See `[AccessPolicy]{@link AccessPolicy}` for detailed information.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link TableResult}` will contain
    *                                                                         information for the table.
    *                                                                         `response` will contain information related to this operation.
    */
    setTableAcl(table: string, signedIdentifiers: StorageServiceClient.SignedIdentifiers, callback: ErrorOrResult<TableService.TableResult>): void;
    /**
    * Updates the table's ACL.
    *
    * @param {string}             table                                       The table name.
    * @param {Object.<string, AccessPolicy>} signedIdentifiers                The container ACL settings. See `[AccessPolicy]{@link AccessPolicy}` for detailed information.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link TableResult}` will contain
    *                                                                         information for the table.
    *                                                                         `response` will contain information related to this operation.
    */
    setTableAcl(table: string, signedIdentifiers: StorageServiceClient.SignedIdentifiers, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<TableService.TableResult>): void;
    
    /**
    * Retrieves a shared access signature token.
    *
    * @param {string}                   table                                               The table name.
    * @param {object}                   sharedAccessPolicy                                  The shared access policy.
    * @return {string}
    */
    generateSharedAccessSignature(table: string, sharedAccessPolicy: TableService.SharedAccessPolicy): string;
    
    /**
    * Checks whether or not a table exists on the service.
    *
    * @param {string}             table                                   The table name.
    * @param {errorOrResult}      callback                                `error` will contain information if an error occurs; 
    *                                                                     otherwise `result` will contain the table information including `exists` boolean member. 
    *                                                                     `response` will contain information related to this operation.
    */
    doesTableExist(table: string, callback: ErrorOrResult<TableService.TableResult>): void;
    /**
    * Checks whether or not a table exists on the service.
    *
    * @param {string}             table                                   The table name.
    * @param {object}             options                                 The request options.
    * @param {errorOrResult}      callback                                `error` will contain information if an error occurs; 
    *                                                                     otherwise `result` will contain the table information including `exists` boolean member. 
    *                                                                     `response` will contain information related to this operation.
    */
    doesTableExist(table: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<TableService.TableResult>): void;
    
    /**
    * Creates a new table within a storage account.
    *
    * @param {string}             table                                   The table name.
    * @param {errorOrResult}      callback                                `error` will contain information if an error occurs; 
    *                                                                     otherwise `result` will contain the new table information.
    *                                                                     `response` will contain information related to this operation.
    */
    createTable(table: string, callback: ErrorOrResult<TableService.TableResult>): void;
    /**
    * Creates a new table within a storage account.
    *
    * @param {string}             table                                   The table name.
    * @param {object}             options                                 The request options.
    * @param {errorOrResult}      callback                                `error` will contain information if an error occurs; 
    *                                                                     otherwise `result` will contain the new table information.
    *                                                                     `response` will contain information related to this operation.
    */
    createTable(table: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<TableService.TableResult>): void;
    
    /**
    * Creates a new table within a storage account if it does not exists.
    *
    * @param {string}             table                                   The table name.
    * @param {errorOrResult}      callback                                `error` will contain information if an error occurs; 
    *                                                                     otherwise `result` will contain the new table information.
    *                                                                     `response` will contain information related to this operation.
    */
    createTableIfNotExists(table: string, callback: ErrorOrResult<TableService.TableResult>): void;
    /**
    * Creates a new table within a storage account if it does not exists.
    *
    * @param {string}             table                                   The table name.
    * @param {object}             options                                 The request options.
    * @param {errorOrResult}      callback                                `error` will contain information if an error occurs; 
    *                                                                     otherwise `result` will contain the new table information.
    *                                                                     `response` will contain information related to this operation.
    */
    createTableIfNotExists(table: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<TableService.TableResult>): void;
    
    /**
    * Deletes a table from a storage account.
    *
    * @param {string}             table                                   The table name.
    * @param {errorOrResponse}    callback                                `error` will contain information if an error occurs;
    *                                                                     `response` will contain information related to this operation.
    */
    deleteTable(table: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Deletes a table from a storage account.
    *
    * @param {string}             table                                   The table name.
    * @param {object}             options                                 The request options.
    * @param {errorOrResponse}    callback                                `error` will contain information if an error occurs;
    *                                                                     `response` will contain information related to this operation.
    */
    deleteTable(table: string, options: StorageServiceClient.ServiceClientOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Deletes a table from a storage account, if it exists.
    *
    * @param {string}             table                                   The table name.
    * @param {errorOrResponse}    callback                                `error` will contain information if an error occurs; 
    *                                                                     `result` will be `true` if table was deleted, false otherwise
    *                                                                     `response` will contain information related to this operation.
    */
    deleteTableIfExists(table: string, callback: ErrorOrResult<boolean>): void;
    /**
    * Deletes a table from a storage account, if it exists.
    *
    * @param {string}             table                                   The table name.
    * @param {object}             options                                 The request options.
    * @param {errorOrResponse}    callback                                `error` will contain information if an error occurs; 
    *                                                                     `result` will be `true` if table was deleted, false otherwise
    *                                                                     `response` will contain information related to this operation.
    */
    deleteTableIfExists(table: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<boolean>): void;
    
    
    // ***********************************************************
    // ** TABLE ENTITY METHODS
    // ***********************************************************
    
    /**
    * Queries data in a table. To retrieve a single entity by partition key and row key, use retrieve entity.
    *
    * @param {string}             table                                                The table name.
    * @param {TableQuery}         tableQuery                                           The query to perform. Use null, undefined, or new TableQuery() to get all of the entities in the table.
    * @param {object}             currentToken                                         A continuation token returned by a previous listing operation. 
    *                                                                                  Please use 'null' or 'undefined' if this is the first operation.
    * @param {QueryResponse}      callback                                             `error` will contain information if an error occurs; 
    *                                                                                  otherwise `entities` will contain the entities returned by the query. 
    *                                                                                  If more matching entities exist, and could not be returned,
    *                                                                                  `queryResultContinuation` will contain a continuation token that can be used
    *                                                                                  to retrieve the next set of results.
    *                                                                                  `response` will contain information related to this operation.
    */
    queryEntities(table: string, tableQuery: TableQuery, currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrResult<TableService.TableQueryResult<TableService.TableEntity>>): void;
    /**
    * Queries data in a table. To retrieve a single entity by partition key and row key, use retrieve entity.
    *
    * @param {string}             table                                                The table name.
    * @param {TableQuery}         tableQuery                                           The query to perform. Use null, undefined, or new TableQuery() to get all of the entities in the table.
    * @param {object}             currentToken                                         A continuation token returned by a previous listing operation. 
    *                                                                                  Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                                              The request options.
    * @param {QueryResponse}      callback                                             `error` will contain information if an error occurs; 
    *                                                                                  otherwise `entities` will contain the entities returned by the query. 
    *                                                                                  If more matching entities exist, and could not be returned,
    *                                                                                  `queryResultContinuation` will contain a continuation token that can be used
    *                                                                                  to retrieve the next set of results.
    *                                                                                  `response` will contain information related to this operation.
    */
    queryEntities(table: string, tableQuery: TableQuery, currentToken: StorageServiceClient.ContinuationToken, options: TableService.GetEntityOptions, callback: ErrorOrResult<TableService.TableQueryResult<TableService.TableEntity>>): void;
    /**
    * Queries data in a table. To retrieve a single entity by partition key and row key, use retrieve entity.
    *
    * @param {string}             table                                                The table name.
    * @param {TableQuery}         tableQuery                                           The query to perform. Use null, undefined, or new TableQuery() to get all of the entities in the table.
    * @param {object}             currentToken                                         A continuation token returned by a previous listing operation. 
    *                                                                                  Please use 'null' or 'undefined' if this is the first operation.
    * @param {QueryResponse}      callback                                             `error` will contain information if an error occurs; 
    *                                                                                  otherwise `entities` will contain the entities returned by the query. 
    *                                                                                  If more matching entities exist, and could not be returned,
    *                                                                                  `queryResultContinuation` will contain a continuation token that can be used
    *                                                                                  to retrieve the next set of results.
    *                                                                                  `response` will contain information related to this operation.
    */
    queryEntities<T extends TableService.TableEntity>(table: string, tableQuery: TableQuery, currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrResult<TableService.TableQueryResult<T>>): void;
    /**
    * Queries data in a table. To retrieve a single entity by partition key and row key, use retrieve entity.
    *
    * @param {string}             table                                                The table name.
    * @param {TableQuery}         tableQuery                                           The query to perform. Use null, undefined, or new TableQuery() to get all of the entities in the table.
    * @param {object}             currentToken                                         A continuation token returned by a previous listing operation. 
    *                                                                                  Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                                              The request options.
    * @param {QueryResponse}      callback                                             `error` will contain information if an error occurs; 
    *                                                                                  otherwise `entities` will contain the entities returned by the query. 
    *                                                                                  If more matching entities exist, and could not be returned,
    *                                                                                  `queryResultContinuation` will contain a continuation token that can be used
    *                                                                                  to retrieve the next set of results.
    *                                                                                  `response` will contain information related to this operation.
    */
    queryEntities<T extends TableService.TableEntity>(table: string, tableQuery: TableQuery, currentToken: StorageServiceClient.ContinuationToken, options: TableService.GetEntityOptions, callback: ErrorOrResult<TableService.TableQueryResult<T>>): void;
    
    /**
    * Retrieves an entity from a table.
    *
    * @param {string}             table                                           The table name.
    * @param {string}             partitionKey                                    The partition key.
    * @param {string}             rowKey                                          The row key.
    * @param {errorOrResult}  callback                                            `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will be the matching entity.
    *                                                                             `response` will contain information related to this operation.
    */
    retrieveEntity(table: string, partitionKey: string, rowKey: string, callback: ErrorOrResult<TableService.TableEntity>): void;
    /**
    * Retrieves an entity from a table.
    *
    * @param {string}             table                                           The table name.
    * @param {string}             partitionKey                                    The partition key.
    * @param {string}             rowKey                                          The row key.
    * @param {object}             options                                         The request options.
    * @param {errorOrResult}  callback                                            `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will be the matching entity.
    *                                                                             `response` will contain information related to this operation.
    */
    retrieveEntity(table: string, partitionKey: string, rowKey: string, options: TableService.GetEntityOptions, callback: ErrorOrResult<TableService.TableEntity>): void;
    
    /**
    * Retrieves an entity from a table.
    *
    * @param {string}             table                                           The table name.
    * @param {string}             partitionKey                                    The partition key.
    * @param {string}             rowKey                                          The row key.
    * @param {errorOrResult}  callback                                            `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will be the matching entity.
    *                                                                             `response` will contain information related to this operation.
    */
    retrieveEntity<T extends TableService.TableEntity>(table: string, partitionKey: string, rowKey: string, callback: ErrorOrResult<T>): void;
    /**
    * Retrieves an entity from a table.
    *
    * @param {string}             table                                           The table name.
    * @param {string}             partitionKey                                    The partition key.
    * @param {string}             rowKey                                          The row key.
    * @param {object}             options                                         The request options.
    * @param {errorOrResult}  callback                                            `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will be the matching entity.
    *                                                                             `response` will contain information related to this operation.
    */
    retrieveEntity<T extends TableService.TableEntity>(table: string, partitionKey: string, rowKey: string, options: TableService.GetEntityOptions, callback: ErrorOrResult<T>): void;
    
    /**
    * Inserts a new entity into a table.
    *
    * @param {string}             table                                           The table name.
    * @param {object}             entityDescriptor                                The entity descriptor.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain the entity information.
    *                                                                             `response` will contain information related to this operation.
    */
    insertEntity<T extends TableService.TableEntity>(table: string, entityDescriptor: T, callback: ErrorOrResult<T>): void;
    /**
    * Inserts a new entity into a table.
    *
    * @param {string}             table                                           The table name.
    * @param {object}             entityDescriptor                                The entity descriptor.
    * @param {object}             options                                         The request options.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain the entity information.
    *                                                                             `response` will contain information related to this operation.
    */
    insertEntity<T extends TableService.TableEntity>(table: string, entityDescriptor: T, options: TableService.InsertEntityOptions, callback: ErrorOrResult<T>): void;
    
    /**
    * Inserts or updates a new entity into a table.
    *
    * @param {string}             table                                           The table name.
    * @param {object}             entityDescriptor                                The entity descriptor.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain the entity information.
    *                                                                             `response` will contain information related to this operation.
    */
    insertOrReplaceEntity<T extends TableService.TableEntity>(table: string, entityDescriptor: T, callback: ErrorOrResult<T>): void;
    /**
    * Inserts or updates a new entity into a table.
    *
    * @param {string}             table                                           The table name.
    * @param {object}             entityDescriptor                                The entity descriptor.
    * @param {object}             options                                         The request options.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain the entity information.
    *                                                                             `response` will contain information related to this operation.
    */
    insertOrReplaceEntity<T extends TableService.TableEntity>(table: string, entityDescriptor:T, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<T>): void;
    
    /**
    * Replaces an existing entity within a table. To replace conditionally based on etag, set entity['.metadata']['etag'].
    *
    * @param {string}             table                                           The table name.
    * @param {object}             entityDescriptor                                The entity descriptor.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain the entity information.
    *                                                                             `response` will contain information related to this operation.
    */
    replaceEntity<T extends TableService.TableEntity>(table: string, entityDescriptor: T, callback: ErrorOrResult<T>): void;
    /**
    * Replaces an existing entity within a table. To replace conditionally based on etag, set entity['.metadata']['etag'].
    *
    * @param {string}             table                                           The table name.
    * @param {object}             entityDescriptor                                The entity descriptor.
    * @param {object}             options                                         The request options.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain the entity information.
    *                                                                             `response` will contain information related to this operation.
    */
    replaceEntity<T extends TableService.TableEntity>(table: string, entityDescriptor: T, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<T>): void;
    
    /**
    * Updates an existing entity within a table by merging new property values into the entity. To merge conditionally based on etag, set entity['.metadata']['etag'].
    *
    * @param {string}             table                                           The table name.
    * @param {object}             entityDescriptor                                The entity descriptor.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain the entity information.
    *                                                                             `response` will contain information related to this operation.
    */
    mergeEntity<T extends TableService.TableEntity>(table: string, entityDescriptor: T, callback: ErrorOrResult<T>): void;
    /**
    * Updates an existing entity within a table by merging new property values into the entity. To merge conditionally based on etag, set entity['.metadata']['etag'].
    *
    * @param {string}             table                                           The table name.
    * @param {object}             entityDescriptor                                The entity descriptor.
    * @param {object}             options                                         The request options.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain the entity information.
    *                                                                             `response` will contain information related to this operation.
    */
    mergeEntity<T extends TableService.TableEntity>(table: string, entityDescriptor: T, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<T>): void;
    
    /**
    * Inserts or updates an existing entity within a table by merging new property values into the entity.
    *
    * @param {string}             table                                           The table name.
    * @param {object}             entityDescriptor                                The entity descriptor.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain the entity information.
    *                                                                             `response` will contain information related to this operation.
    */
    insertOrMergeEntity<T extends TableService.TableEntity>(table: string, entityDescriptor: T, callback: ErrorOrResult<T>): void;
    /**
    * Inserts or updates an existing entity within a table by merging new property values into the entity.
    *
    * @param {string}             table                                           The table name.
    * @param {object}             entityDescriptor                                The entity descriptor.
    * @param {object}             options                                         The request options.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain the entity information.
    *                                                                             `response` will contain information related to this operation.
    */
    insertOrMergeEntity<T extends TableService.TableEntity>(table: string, entityDescriptor: T, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<T>): void;
    
    /**
    * Deletes an entity within a table. To delete conditionally based on etag, set entity['.metadata']['etag'].
    *
    * @param {string}             table                                           The table name.
    * @param {object}             entityDescriptor                                The entity descriptor.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain the entity information.
    *                                                                             `response` will contain information related to this operation.
    */
    deleteEntity<T extends TableService.TableEntity>(table: string, entityDescriptor: T, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Deletes an entity within a table. To delete conditionally based on etag, set entity['.metadata']['etag'].
    *
    * @param {string}             table                                           The table name.
    * @param {object}             entityDescriptor                                The entity descriptor.
    * @param {object}             options                                         The request options.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain the entity information.
    *                                                                             `response` will contain information related to this operation.
    */
    deleteEntity<T extends TableService.TableEntity>(table: string, entityDescriptor: T, options: StorageServiceClient.ServiceClientOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Executes the operations in the batch.
    *
    * @param {string}             table                                           The table name.
    * @param {TableBatch}         batch                                           The table batch to execute.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain responses for each operation executed in the batch;
    *                                                                             `result.entity` will contain the entity information for each operation executed.
    *                                                                             `result.response` will contain the response for each operations executed.
    *                                                                             `response` will contain information related to this operation.
    */
    executeBatch(table: string, batch: TableBatch, callback: ErrorOrResult<TableService.BatchResult[]>): void;
    /**
    * Executes the operations in the batch.
    *
    * @param {string}             table                                           The table name.
    * @param {TableBatch}         batch                                           The table batch to execute.
    * @param {object}             options                                         The create options or callback function.
    * @param {errorOrResult}      callback                                        `error` will contain information if an error occurs; 
    *                                                                             otherwise `result` will contain responses for each operation executed in the batch;
    *                                                                             `result.entity` will contain the entity information for each operation executed.
    *                                                                             `result.response` will contain the response for each operations executed.
    *                                                                             `response` will contain information related to this operation.
    */
    executeBatch(table: string, batch: TableBatch, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<TableService.BatchResult[]>): void;
}

declare namespace TableService {
    
    export type QueryResponse<T extends TableService.TableEntity> = ErrorOrResult<TableQueryResult<T>>;
    
    // ***********************************************************
    // ** RESULTS
    // ***********************************************************
    
    export interface TableResult {
        /** The table name. */
        name: string;
        /** The table name. */
        TableName?: string;
        /** The table ACL settings. See AccessPolicy for detailed information. */
        signedIdentifiers?: StorageServiceClient.SignedIdentifiersResult;
        /** Does the table exists? Available after a doesTableExists call. */
        exists?: boolean;
        /** Was the table created? Available after a createTableIfNotExists call. */
        created?: boolean;
    }
    
    export interface TableListResult {
        entries: TableResult[];
        continuationToken: TableContinuationToken;
    }
    
    export interface TableQueryResult<T extends TableService.TableEntity> {
        entries: T[];
        continuationToken: EntityContinuationToken;
    }
    
    export interface BatchResult {
        entity: TableEntity;
        response: StorageServiceClient.ServiceResponse;
    }
    
    export interface TableEntity {
        PartitionKey: EntityProperty<string>;
        RowKey: EntityProperty<string>;
        Timestamp?: EntityProperty<Date>;
        Etag?: EntityProperty<string>;
    }
    
    export interface EntityProperty<T> {
        _: T;
        $?: string;
    }
    
    export interface SharedAccessPolicy {
        Id?: string;
        AccessPolicy?: AccessPolicy;
    }
    
    export interface AccessPolicy extends StorageServiceClient.AccessPolicy {
        /** The starting Partition Key for which the SAS will be valid. */
        StartPk?: string;
        /** The ending Partition Key for which the SAS will be valid. */
        EndPk?: string;
        /** The starting Row Key for which the SAS will be valid. */
        StartRk?: string;
        /** The ending Row Key for which the SAS will be valid. */
        EndRk?: string;
    }
    
    export interface TableContinuationToken {
        nextTableName: string;
        targetLocation: string;
    }
    
    export interface EntityContinuationToken {
        nextPartitionKey: string;
        nextRowKey: string;
        targetLocation: string;
    }
    
    /**
     * Given the partition key, row key, property name, property value, and the property Edm type if given by the service, returns the Edm type of the property.
     * @param {object}  pk          The partition key.
     * @param {object}  rk          The row key.
     * @param {string}  name        The property name.
     * @param {object}  value       The property value.
     * @param {string}  type        The EDM type.
     */
    export type PropertyResolver = (pk: EntityProperty<string>, rk: EntityProperty<string>, name: string, value: any, type?: string) => string;
        
    /**
     * The entity resolver. Given the single entity, returns a modified object.
     * @param {object}  entity      The entity to resolve.
     */
    export type EntityResolver = (entity: any) => any;
    
    // ***********************************************************
    // ** OPTIONS
    // ***********************************************************
    
    export interface ListTableOptions extends StorageServiceClient.ServiceClientOptions {
        /** Specifies the maximum number of tables to return per call to Azure ServiceClient. */
        maxResults?: number;
    }
    
    export interface GetEntityOptions extends StorageServiceClient.ServiceClientOptions {
        /** The payload format to use for the request. */
        payloadFormat?: string;
        /** If true, guess at all property types. */
        autoResolveProperties?: boolean;
        /** The entity resolver. Given a single entity returned by the query, returns a modified object which is added to the entities array. */
        entityResolver?: EntityResolver;
        /** The property resolver. Given the partition key, row key, property name, property value, and the property Edm type if given by the service, returns the Edm type of the property. */
        propertyResolver?: PropertyResolver;
    }
    
    export interface InsertEntityOptions extends GetEntityOptions {
        /** Whether or not to return the entity upon a successful insert. Inserts only, default to false. */
        echoContent?: boolean;
    }
}

export = TableService;