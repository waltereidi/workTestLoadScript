import { KeyVault } from './keyVault.js';
import { SimpleLogger, SimpleLogger } from './simpleLogger.js';

export class DependencyInjection 
{
//** responsabilities:
//** Give the control of an object to another 
//** parameters on service request would increase flexibility 

//**? (IOC) Inversion of Control
//**? (OCP) Open and Close Principle

/**
 * An instanced object from class 
 * @returns @instance SimpleLogger
 */
getLogger(){
    const simpleLogger = new SimpleLogger()
    
    
    return simpleLogger;
}
/**
 * An instanced object from class 
 * @returns @instance KeyVault
 */
getKeyVault(){
    const keyVault = new KeyVault()
    return keyVault;
}


//*** overload
// getLogger(param){
//     const ComplexLogger = require('./simpleLogger.js')
//     return new ComplexLogger(); 
// }
}