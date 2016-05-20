// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

/**
* @class
* The Logger class is used to write log information.
*/
declare class Logger {
    /**
   * The log level. Refer to the Logger.LogLevels for available log levels. 
   * @name  Logger#level
   * @type  {string}
   * @see Logger.LogLevels
   */
    level: string;
    
    /**
    * @constructor
    * Creates a new Logger object
    * @param {string} [level]           The log level. Refer to Logger.LogLevels.
    * @param {object} [loggerFunction]  The function to write log information.
    */
    constructor(level?: string, loggerFunction?: (level: string, msg: string) => void);
    
    log(level: string, msg: string);
    emergency(msg: string);
    critical(msg: string);
    alert(msg: string);
    error(msg: string);
    warn(msg: string);
    notice(msg: string);
    info(msg: string);
    debug(msg: string);
     
    /**
    * The available log levels.
    *
    * @const
    * @enum {string}
    */
    static LogLevels: {
        /**
        * System is unusable.
        */
        EMERGENCY: 'emergency',

        /**
        * Action must be taken immediately.
        */
        ALERT : 'alert',

        /**
        * Critical condition.
        */
        CRITICAL : 'critical',

        /**
        * Error condition.
        */
        ERROR : 'error',

        /**
        * Warning condition.
        */
        WARNING : 'warning',

        /**
        * Normal but significant condition.
        */
        NOTICE : 'notice',

        /**
        * Purely informational message.
        */
        INFO : 'info',

        /**
        * Application debug messages.
        */
        DEBUG : 'debug'
    };
}

export = Logger;