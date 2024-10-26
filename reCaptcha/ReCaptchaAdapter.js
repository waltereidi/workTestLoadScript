//**? This contract ensures this class can be executed empirically
//** Principles to achieve 
//** the entire execution should be capable to be exchanged
//** from inherited classes with ease
 
//** LSP (Liskov Substitution Principle)
//** DIP (Dependency Inversion Principle)
export default class ReCaptchaAdapter
{
     
    constructor(renderFunction , getResultFunction , destroyFunction )
    {
        this.initialialize = renderFunction 
        this.addLog( typeof(renderFunction) == 'function' 
            ,typeof(renderFunction) == 'function' ? "renderFunction added" : "invalid method", "constructor" );

        this.getResult = getResultFunction ;
        this.addLog( typeof(getResultFunction) == 'function' 
        ,typeof(getResultFunction) == 'function' ? "getResultFunction added" : "invalid method", "constructor" );

        this.destroy = destroyFunction;
        this.addLog( typeof(getResultFunction) == 'function' 
        ,typeof(getResultFunction) == 'function' ? "getResultFunction added" : "invalid method", "constructor" );
        
        //**! throws a execption if an error exists
        this.hasError()
    }
    //**? Will be used from iterator
    getResult = null 
    initialialize = null 
    destroy = null 

}