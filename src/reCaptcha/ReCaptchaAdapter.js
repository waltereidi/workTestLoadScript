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
            console.log('get')
            return obj[prop];
          },
          set: function (obj, prop, value) {
            if(prop != 'action')    
                return false ; 

            if(typeof(prop) != 'function' )
            {
                obj.logger.addLog(false , "Invalid parameter type from getResult function" , "contructor")
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
            console.log('get')
            return obj[prop];
          },
          set: function (obj, prop, value) {
            if(prop != 'action')    
                return false ; 
            if(typeof(prop) != 'function' )
            {
                obj.logger.addLog(false , "Invalid parameter type from render function" , "contructor")
                return false; 
            }
                
            obj.logger.addLog( true , "Render function added" , "constructor" );

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
          get: function (obj, prop) {
            console.log('get')
            return obj[prop];
          },
          set: function (obj, prop, value) {
            if(prop != 'action')    
                return false ; 

            if(typeof(prop) != 'function' )
            {
                obj.logger.addLog(false , "Invalid parameter type from destroy function" , "contructor")
                return false; 
            }
                
            obj.logger.addLog( true , "Destroy function added" , "constructor" );
            
            obj[prop] = value;
            return true;
          },
        },
      );
}