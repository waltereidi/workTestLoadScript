//**? This contract ensures this class can be executed empirically
//** Principles to achieve 
//** the entire execution should be capable to be exchanged
//** from inherited classes with ease
 
//** LSP (Liskov Substitution Principle)
//** DIP (Dependency Inversion Principle)
import DependencyInjection from "../dependencyInjection/dependencyInjection";

export default class ReCaptchaAdapter
{
     
    constructor(renderFunction , getResultFunction , destroyFunction )
    {
        const di = new DependencyInjection(); 
        this.logger = di.getLogger();

        this.initialialize = renderFunction 
        this.logger.addLog( typeof(renderFunction) == 'function' 
            ,typeof(renderFunction) == 'function' ? "renderFunction added" : "invalid method", "constructor" );

        this.getResult = getResultFunction ;
        this.logger.addLog( typeof(getResultFunction) == 'function' 
        ,typeof(getResultFunction) == 'function' ? "getResultFunction added" : "invalid method", "constructor" );

        this.destroy = destroyFunction;
        this.logger.addLog( typeof(getResultFunction) == 'function' 
        ,typeof(getResultFunction) == 'function' ? "getResultFunction added" : "invalid method", "constructor" );
        
        //**! throws a execption if an error exists
        this.logger.hasError()
    }
    //**? Will be used from iterator
    getResult = null 
    initialialize = null 
    destroy = null 
    logger = null
}