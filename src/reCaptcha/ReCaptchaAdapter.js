//**? This contract ensures this class can be executed empirically
//** Principles to achieve 
//** the entire execution should be capable to be exchanged
//** from inherited classes with ease
 
//** LSP (Liskov Substitution Principle)
//** DIP (Dependency Inversion Principle)
import { DependencyInjection } from "@/dependencyInjection/dependencyInjection";

export class ReCaptchaAdapter
{
    constructor()
    {
    }
    /**
     * SetupAdaper must be called right after super() from inherited classes
     * @param {*} renderFunction 
     * @param {*} getResultFunction 
     * @param {*} destroyFunction 
     */
    setupAdapter(renderFunction , getResultFunction , destroyFunction){
        this.logger.addLog(true , "adapter setup started" , "starter function")
        this.getResult.action = getResultFunction; 
        this.initialize.action = renderFunction;
        this.destroy.action = destroyFunction;
    }
    //**? Will be used from iterator
    logger = new DependencyInjection().getLogger();

    
    getResult = new Proxy(
        {
          action: null,
          logger: this.logger
        },
        {
          get: function (obj, prop) {
            obj.logger.addLog( true , "get result function requested" , "action" );
            
            return obj[prop];
          },
          set: function (obj, prop, value) {
            if(prop != 'action')    
                return false ; 

            if(typeof(value) != 'function' )
            {
                obj.logger.addLog(false , "Invalid parameter type from getResult function" , "contructor")
                return false;
            }
            
            obj.logger.addLog( true , "getResult function added" , "constructor" );
            
            obj[prop] = value;
            return true;
          },
        },
      );
    

    initialize = new Proxy(
        {
          action: null,
          logger: this.logger
        },
        {
          get: function (obj, prop) {
            obj.logger.addLog( true , "getResult function requested" , "action" );
            return obj[prop];
          },
          set: function (obj, prop, value) {
            if(prop != 'action')    
                return false ; 

            if(typeof(value) != 'function' )
            {
                obj.logger.addLog(false , "Invalid parameter type from render function" , "contructor")
                return false;
            }
            
            obj.logger.addLog( true , "render function added" , "constructor" );
            
            obj[prop] = value;
            return true;
          },
        },
      );
    destroy = new Proxy(
        {
          action: null,
          logger: this.logger
        },
        {
          get: function (obj, prop ) {
            
            obj.logger.addLog( true , "destroy function requested" , "action" );

            return obj[prop];
          },
          set: function (obj, prop, value) {
            if(prop != 'action')    
                return false ; 
            if(typeof(value) != 'function' )
            {
                obj.logger.addLog(false , "Invalid parameter type destroy function" , "contructor")
                return false;
            }
            
            obj.logger.addLog( true , "destroy function added" , "constructor" );
            
            obj[prop] = value;
            return true;
          }
        },
      );
}