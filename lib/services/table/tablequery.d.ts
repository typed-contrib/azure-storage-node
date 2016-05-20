// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

declare class TableQuery {
    /**
     * @constructor
     * Creates a new TableQuery object.
     */
    constructor();
    
    /**
    * Specifies the select clause. If no arguments are given, all fields will be selected.
    *
    * @param {array} fields The fields to be selected.
    * @return {TableQuery} A table query object with the select clause.
    */
    select(...fields: string[]): this;
    
    /**
     * Specifies the top clause.
     *
     * @param {int} top The number of items to fetch.
     * @return {TableQuery} A table query object with the top clause.
     */
    top(top: number): this;
    
    /**
     * Specifies the where clause.
     *
     * Valid type specifier strings include: ?string?, ?bool?, ?int32?, ?double?, ?date?, ?guid?, ?int64?, ?binary?
     * A type must be specified for guid, int64, and binaries or the filter produced will be incorrect.
     *
     * @param {string}       condition   The condition string.
     * @param {string|array} values      Value(s) to insert in question mark (?) parameters.
     * @return {TableQuery}  A table query object with the where clause.
     */
    where(condition: string, ...values: TableQuery.QueryValue[]): this;
    
    /**
     * Generates a property filter condition string for an 'int' value.
     *
     * @param {string}       propertyName   A string containing the name of the property to compare.
     * @param {string}       operation      A string containing the comparison operator to use. 
     *                                      See Constants.TableConstants.QueryComparisons for a list of allowed operations.
     * @param {string|int}   value          An 'int' containing the value to compare with the property.
     * @return {string} A string containing the formatted filter condition.
     */
    static int32Filter(propertyName: string, operation: string, value: string | number): string;
    
    /**
     * Generates a property filter condition string for an 'int64' value.
     *
     * @param {string}       propertyName   A string containing the name of the property to compare.
     * @param {string}       operation      A string containing the comparison operator to use. 
     *                                      See Constants.TableConstants.QueryComparisons for a list of allowed operations.
     * @param {string|int64} value          An 'int64' containing the value to compare with the property.
     * @return {string} A string containing the formatted filter condition.
     */
    static int64Filter(propertyName: string, operation: string, value: string | number): string;
    
    /**
     * Generates a property filter condition string for a 'double' value.
     *
     * @param {string}       propertyName   A string containing the name of the property to compare.
     * @param {string}       operation      A string containing the comparison operator to use. 
     *                                      See Constants.TableConstants.QueryComparisons for a list of allowed operations.
     * @param {string|double}value          A 'double' containing the value to compare with the property.
     * @return {string} A string containing the formatted filter condition.
     */
    static doubleFilter(propertyName: string, operation: string, value: string | number): string;
    
    /**
     * Generates a property filter condition string for a 'boolean' value.
     *
     * @param {string}       propertyName   A string containing the name of the property to compare.
     * @param {string}       operation      A string containing the comparison operator to use. 
     *                                      See Constants.TableConstants.QueryComparisons for a list of allowed operations.
     * @param {string|boolean}value         A 'boolean' containing the value to compare with the property.
     * @return {string} A string containing the formatted filter condition.
     */
    static booleanFilter(propertyName: string, operation: string, value: string | boolean): string;
    
    /**
     * Generates a property filter condition string for a 'date' value.
     *
     * @param {string}       propertyName   A string containing the name of the property to compare.
     * @param {string}       operation      A string containing the comparison operator to use. 
     *                                      See Constants.TableConstants.QueryComparisons for a list of allowed operations.
     * @param {string|date}  value          A 'datetime' containing the value to compare with the property.
     * @return {string} A string containing the formatted filter condition.
     */
    static dateFilter(propertyName: string, operation: string, value: string | Date): string;
    
    /**
     * Generates a property filter condition string for a 'guid' value.
     *
     * @param {string}       propertyName   A string containing the name of the property to compare.
     * @param {string}       operation      A string containing the comparison operator to use. 
     *                                      See Constants.TableConstants.QueryComparisons for a list of allowed operations.
     * @param {string|guid}  value          An 'guid' containing the value to compare with the property.
     * @return {string} A string containing the formatted filter condition.
     */
    static guidFilter(propertyName: string, operation: string, value: string): string;
    
    /**
     * Generates a property filter condition string for a 'binary' value.
     *
     * @param {string}       propertyName   A string containing the name of the property to compare.
     * @param {string}       operation      A string containing the comparison operator to use. 
     *                                      See Constants.TableConstants.QueryComparisons for a list of allowed operations.
     * @param {string|Buffer}value          A 'binary' containing the value to compare with the property.
     * @return {string} A string containing the formatted filter condition.
     */
    static binaryFilter(propertyName: string, operation: string, value: string | Buffer): string;
    
    /**
     * Generates a property filter condition string for a 'string' value.
     *
     * @param {string}       propertyName   A string containing the name of the property to compare.
     * @param {string}       operation      A string containing the comparison operator to use. 
     *                                      See Constants.TableConstants.QueryComparisons for a list of allowed operations.
     * @param {string}       value          A 'string' containing the value to compare with the property.
     * @return {string} A string containing the formatted filter condition.
     */
    static stringFilter(propertyName: string, operation: string, value: string): string;
    
    /**
     * Creates a filter condition using the specified logical operator on two filter conditions.
     *
     * @param {string}       filterA          A string containing the first formatted filter condition.
     * @param {string}       operatorString   A string containing the operator to use (AND, OR).
     * @param {string}       filterB          A string containing the second formatted filter condition.
     * @return {string} A string containing the combined filter expression.
     */
    static combineFilters(filterA: string, operatorString: string, filterB: string): string;
    
    /**
     * Specifies an AND where condition.
     *
     * Valid type specifier strings include: ?string?, ?bool?, ?int32?, ?double?, ?date?, ?guid?, ?int64?, ?binary?
     * A type must be specified for guid, int64, and binaries or the filter produced will be incorrect.
     *
     * @param {string}       condition   The condition string.
     * @param {string|array} values      Value(s) to insert in question mark (?) parameters.
     * @return {TableQuery}  A table query object with the where clause.
     */
    and(condition: string, ...values: TableQuery.QueryValue[]): this;
    
    /**
     * Specifies an OR where condition.
     *
     * Valid type specifier strings include: ?string?, ?bool?, ?int32?, ?double?, ?date?, ?guid?, ?int64?, ?binary?
     * A type must be specified for guid, int64, and binaries or the filter produced will be incorrect.
     *
     * @param {string}       condition   The condition string.
     * @param {string|array} values      Value(s) to insert in question mark (?) parameters.
     * @return {TableQuery}  A table query object with the where clause.
     */
    or(condition: string, ...values: TableQuery.QueryValue[]): this;
    
    /**
     * Returns the query string object for the query.
     *
     * @return {object} JSON object representing the query string arguments for the query.
     */
    toQueryObject(): TableQuery.QueryObject;
}

declare namespace TableQuery {
    export type QueryValue = string | number | boolean | Date | Buffer;
    
    export interface QueryObject {
        $select: string;
        $filter: string;
        $top: number;
    }
}

export = TableQuery;