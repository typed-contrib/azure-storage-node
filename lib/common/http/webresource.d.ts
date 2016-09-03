// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

type Map<T> = { [key: string]: T };

/**
* This class provides an abstraction over a REST call by being library / implementation agnostic and wrapping the necessary
* properties to initiate a request.
*/
declare class WebResource {
    rawResponse: boolean;
    headersOnly: boolean;
    queryString: Map<any>;
    properties: Map<string>;
    headers: Map<any>;
    body: any;
    /**
    * @constructor
    * Creates a new WebResource object.
    */
    constructor();
    
    /**
    * Creates a new put request web resource.
    *
    * @param {string} [path] The path for the put operation.
    * @return {WebResource} A new webresource with a put operation for the given path.
    */
    static put(path?: string): WebResource;
    
    /**
    * Creates a new get request web resource.
    *
    * @param {string} [path] The path for the get operation.
    * @return {WebResource} A new webresource with a get operation for the given path.
    */
    static get(path?: string): WebResource;
    
    /**
    * Creates a new head request web resource.
    *
    * @param {string} [path] The path for the head operation.
    * @return {WebResource} A new webresource with a head operation for the given path.
    */
    static head(path?: string): WebResource;
    
    /**
    * Creates a new del request web resource.
    *
    * @param {string} [path] The path for the del operation.
    * @return {WebResource} A new webresource with a del operation for the given path.
    */
    static del(path?: string): WebResource;
    
    /**
    * Creates a new post request web resource.
    *
    * @param {string} [path] The path for the post operation.
    * @return {WebResource} A new webresource with a post operation for the given path.
    */
    static post(path?: string): WebResource;
    
    /**
    * Creates a new merge request web resource.
    *
    * @param {string} [path] The path for the merge operation.
    * @return {WebResource} A new webresource with a merge operation for the given path.
    */
    static merge(path?: string): WebResource;
    
    /**
    * Specifies a custom property in the web resource.
    *
    * @param {string} name  The property name.
    * @param {string} value The property value.
    * @return {WebResource} The webresource.
    */
    withProperty(name: string, value: string): this;
    
    /**
    * Specifies that the response should not be parsed.
    * @return {WebResource} The webresource.
    */
    withRawResponse(): this;
    /**
    * Specifies if the response should be parsed or not.
    *
    * @param {bool} rawResponse true if the response should not be parsed; false otherwise.
    * @return {WebResource} The webresource.
    */
    withRawResponse(rawResponse?: boolean): this;
        
    /**
    * Specifies that the response should contains only headers.
    * @return {WebResource} The webresource.
    */
    withHeadersOnly(): this;
    /**
    * Specifies if the response should be contains only headers or not.
    *
    * @param {bool} headersOnly true if the response should contains only headers; false otherwise.
    * @return {WebResource} The webresource.
    */
    withHeadersOnly(headersOnly?: boolean): this;
    
    /**
    * Adds an optional query string parameter.
    *
    * @param {Object} name          The name of the query string parameter.
    * @param {Object} value         The value of the query string parameter.
    * @param {Object} [defaultValue]The default value for the query string parameter to be used if no value is passed.
    * @return {WebResource} The web resource.
    */
    withQueryOption(name: string, value: any, defaultValue?: any): this;
    
    /**
    * Adds optional query string parameters.
    * Additional arguments will be the needles to search in the haystack. 
    *
    * @param {Object} object  The haystack of query string parameters.
    * @return {WebResource} The web resource.
    */
    withQueryOptions(options: Map<any>, ...properties: string[]): this;
    
    /**
    * Adds an optional header parameter.
    *
    * @param {Object} name  The name of the header parameter.
    * @param {Object} value The value of the header parameter.
    * @return {WebResource} The web resource.
    */
    withHeader(name: string, value: any): this;
    
    /**
    * Adds optional header parameters.
    *
    * Additional arguments will be the needles to search in the haystack. 
    *
    * @param {Object} object  The haystack of headers.
    * @return {Object} The web resource.
    */
    withHeaders(options: Map<any>, ...properties: string[]): this;

    /**
    * Adds an optional body.
    *
    * @param {Object} body  The request body.
    * @return {WebResource} The web resource.
    */
    withBody(body: any): this;
    
    addOptionalMetadataHeaders(metadata: Map<any>): this;
    
    static validResponse(statusCode: number): boolean;
    
    /**
    * Hook up the given input stream to a destination output stream if the WebResource method
    * requires a request body and a body is not already set.
    *
    * @param {Stream} inputStream the stream to pipe from
    * @param {Stream} outputStream the stream to pipe to
    *
    * @return destStream
    */
    pipeInput(inputStream: NodeJS.ReadableStream, outputStream: NodeJS.WritableStream): typeof outputStream;   
}

export = WebResource;