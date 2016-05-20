// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

export class ArgumentError extends Error {
    argumentName: string;
    
    constructor(argumentName: string, message: string);
}

export class ArgumentNullError extends Error {
    argumentName: string;
    
    constructor(argumentName: string, message: string);
}

export class StorageError extends Error {
    [key: string]: any;
    
    code: string;
    statusCode: number;
    requestId: string;
    path: string;
    
    constructor(message: string, properties: Object);
}

export class TimeoutError extends Error {
    constructor(message: string);
}
