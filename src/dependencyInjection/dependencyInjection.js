

export default class DependencyInjection 
{
//** responsabilities:
//** Give the control of an object to another 
//** parameters on service request would increase flexibility 

//**? (IOC) Inversion of Control
//**? (OCP) Open and Close Principle

getLogger(){
    const SimpleLogger = require('@/dependencyInjection/simpleLogger')
    
    
    return SimpleLogger;
}
//*** overload
// getLogger(param){
//     const ComplexLogger = require('./simpleLogger.js')
//     return new ComplexLogger(); 
// }
}