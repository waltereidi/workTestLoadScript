import { SimpleLogger, SimpleLogger } from './simpleLogger.js';

export class DependencyInjection 
{
//** responsabilities:
//** Give the control of an object to another 
//** parameters on service request would increase flexibility 

//**? (IOC) Inversion of Control
//**? (OCP) Open and Close Principle

getLogger(){
    const simpleLogger = new SimpleLogger()
    
    
    return simpleLogger;
}
getKeyVault(){

}

getKeyVault = ( param ) => this
    .getKeyVault()
    .find(x=>x.key == param) ?? undefined
    

//*** overload
// getLogger(param){
//     const ComplexLogger = require('./simpleLogger.js')
//     return new ComplexLogger(); 
// }
}