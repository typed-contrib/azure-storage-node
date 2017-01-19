// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

/**
* Defines constants; enums; and utility functions for use with the Table service.
* @namespace TableUtilities
*/

/**
  * Permission types.
  *
  * @const
  * @enum {string}
  */
export const SharedAccessPermissions: {
    /**
    * @const
    * @default "r"
    */
    QUERY: string;
    /**
    * @const
    * @default "a"
    */
    ADD: string;
    /**
    * @const
    * @default "u"
    */
    UPDATE: string;
    /**
    * @const
    * @default "d"
    */
    DELETE: string;
};

/**
* Payload Format.
*
* @const
* @enum {string}
*/
export const PayloadFormat: {
    /**
    * @const
    * @default "application/json;odata=fullmetadata"
    */
    FULL_METADATA: string;
    /**
    * @const
    * @default "application/json;odata=minimalmetadata"
    */
    MINIMAL_METADATA: string;
    /**
    * @const
    * @default "application/json;odata=nometadata"
    */
    NO_METADATA: string;
};

/**
* Defines the set of Boolean operators for constructing queries.
*
* @const
* @enum {string}
*/
export const TableOperators: {
    /**
    * @const
    * @default "and"
    */
    AND: string;
    /**
    * @const
    * @default "not"
    */
    NOT: string;
    /**
    * @const
    * @default "or"
    */
    OR: string;
};

/**
* Filter property comparison operators.
*
* @const
* @enum {string}
*/
export const QueryComparisons: {
    /**
    * @const
    * @default "eq"
    */
    EQUAL: string;
    /**
    * @const
    * @default "ne"
    */
    NOT_EQUAL: string;
    /**
    * @const
    * @default "gt"
    */
    GREATER_THAN: string;
    /**
    * @const
    * @default "ge"
    */
    GREATER_THAN_OR_EQUAL: string;
    /**
    * @const
    * @default "lt"
    */
    LESS_THAN: string;
    /**
    * @const
    * @default "le"
    */
    LESS_THAN_OR_EQUAL: string;
};

/**
* Edm types.
*
* @const
* @enum {string}
*/
export const EdmType: {
    /**
    * @const
    * @default "Edm.String"
    */
    STRING: string;
    /**
    * @const
    * @default "Edm.Binary"
    */
    BINARY: string;
    /**
    * @const
    * @default "Edm.Int64"
    */
    INT64: string;
    /**
    * @const
    * @default "Edm.Int32"
    */
    INT32: string;
    /**
    * @const
    * @default "Edm.Double"
    */
    DOUBLE: string;
    /**
    * @const
    * @default "Edm.DateTime"
    */
    DATETIME: string;
    /**
    * @const
    * @default "Edm.Guid"
    */
    GUID: string;
    /**
    * @const
    * @default "Edm.Boolean"
    */
    BOOLEAN: string;
};

/**
* A helper to create table entities.
*/
export namespace entityGenerator {
    export class EntityProperty<T> {
        _: T;
        $: string;

        constructor(value: T, type?: string);
    }
    export interface EntityPropertyInterface {
        <T>(): EntityProperty<T>;
    }

    export function Int32(value: string | number): EntityProperty<number>;
    export function Int64(value: string | number): EntityProperty<number>;
    export function Binary(value: string | Buffer): EntityProperty<Buffer>;
    export function Boolean(value: string | boolean): EntityProperty<boolean>;
    export function String(value: any): EntityProperty<string>;
    export function Guid(value: string): EntityProperty<string>;
    export function Double(value: string | number): EntityProperty<number>;
    export function DateTime(value: string | Date): EntityProperty<Date>;
}
