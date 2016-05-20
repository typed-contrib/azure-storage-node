// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

/**
* Defines enums for use with the Queue service.
* @namespace QueueUtilities
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
    READ: string;
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
    * @default "p"
    */
    PROCESS: string;
};