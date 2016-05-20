// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

declare class TableBatch {
    operations: TableBatch.Operation[];
    pk: string;
    retrieve: boolean;
    
    /**
    * @constructor
    * Creates a new TableBatch.
    */
    constructor();
    
    // ***********************************************************
    // ** BATCH
    // ***********************************************************
    
    /**
    * Removes all of the operations from the batch.
    */
    clear();
    
    /**
    * Returns a boolean value indicating weather there are operations in the batch.
    * @return {Boolean} True if there are operations queued up; false otherwise.
    */
    hasOperations(): boolean;
    
    /**
    * Returns the number of operations in the batch.
    * @return {number} The number of operations in the batch.
    */
    size(): number;
    
    /**
    * Adds an operation to the batch after performing checks.
    * @param {string}             operationType       The type of operation to perform. See Constants.TableConstants.Operations
    * @param {object}             entity              The entity.
    * @param {object}             [options]           The request options.
    */
    addOperation(operationType: string, entity: any, options?: Object): void;
    
    /**
    * Adds an operation to the batch after performing checks.
    * @param {number}             index           The index of the operation in the operations array.
    * @return {object}                            The found operation.
    */
    getOperation(index: number): TableBatch.Operation;
    
    /**
    * Adds an operation to the batch after performing checks.
    * @param {number}             index           The index in the operations array at which to remove an element.
    * @return {object}                            The removed operation.
    */
    removeOperation(index: number): TableBatch.Operation;
    
    
    // ***********************************************************
    // ** OPERATIONS
    // ***********************************************************
    
    /**
    * Adds a retrieve operation to the batch. Note that this must be the only operation in the batch.
    * @param {string}             partitionKey        The partition key.
    * @param {string}             rowKey              The row key.
    * @param {object}             [options]           The request options.
    */
    retrieveEntity(partitionKey: string, rowKey: string, options?: TableBatch.RetrieveOptions): void;
    
    /**
    * Adds an insert operation to the batch.
    * @param {object}             entity              The entity.
    * @param {object}             [options]           The request options.
    */
    insertEntity(entity: any, options?: TableBatch.InsertOptions): void;
    
    /**
    * Adds a delete operation to the batch.
    * @param {object}             entity              The entity.
    */
    deleteEntity(entity: any, options?: TableBatch.InsertOptions): void;
    
    /**
    * Adds a merge operation to the batch.
    * @param {object}             entity              The entity.
    */
    mergeEntity(entity: any, options?: TableBatch.InsertOptions): void;
    
    /**
    * Adds a replace operation to the batch.
    * @param {object}             entity              The entity.
    */
    replaceEntity(entity: any, options?: TableBatch.InsertOptions): void;
    
    /**
    * Adds an insertOrReplace operation to the batch.
    * @param {object}             entity              The entity.
    */
    insertOrReplaceEntity(entity: any, options?: TableBatch.InsertOptions): void;
    
    /**
    * Adds an insertOrMerge operation to the batch.
    * @param {object}             entity              The entity.
    */
    insertOrMergeEntity(entity: any, options?: TableBatch.InsertOptions): void;
}

declare namespace TableBatch {
    export interface Operation {
        type: string;
        entity: any;
        options: any;
    }
    
    export interface IProperty<T> {
        _: T;
        $: string;
    }
    
    export interface RetrieveOptions {
        /** The payload format to use for the request. */
        payloadFormat?: string;
        
        /**
         * Given the partition key, row key, property name, property value, and the property Edm type if given by the service, returns the Edm type of the property.
         * @param {object}  pk          The partition key.
         * @param {object}  rk          The row key.
         * @param {string}  name        The property name.
         * @param {object}  value       The property value.
         * @param {string}  type        The EDM type.
         */
        propertyResolver?: (pk: IProperty<string>, rk: IProperty<string>, name: string, value: any, type?: string) => string;
        
        /**
         * The entity resolver. Given the single entity, returns a modified object.
         * @param {object}  entity      The entity to resolve.
         */
        entityResolver?: (entity: any) => any;
    }
    
    export interface InsertOptions extends RetrieveOptions {
        /** Whether or not to return the entity upon a successful insert. Inserts only, default to false. */
        echoContent?: boolean;
    }
}

export = TableBatch;