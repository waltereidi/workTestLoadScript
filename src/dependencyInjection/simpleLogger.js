import IDependencyInjection from './iDependencyInjection.js';
export default class SimpleLogger extends IDependencyInjection
{    
    constructor(){
        super()
    }
    log = []
    /**
     * a single log with success = false tell the operation has failed
     * log with type should be used to improved legibility 
     * @param { bool } success 
     * @param { string } description 
     * @param { int } severity
     */    
    addLog = (success , description , severity = null ) => this.log.push({
        success : success , 
        description : description ,
        severity : severity , 
        id : this.log.length+1 ,
        eventTime : new Date()
    })

    /** 
     * Find if theres an error logged 
     */ 
    hasError = () => this.log
        .find(x=>x.success === false ).length == null
    
     /**
     * get entireLog sorted by Id 
     * @returns []object
     */
    getLog = ()=> this.log
        .sort((prev , next) => prev.id )

    
    getErrorLog(){
        if(this.hasError()){
            return this.log
            .filter(x=> x.success == false || x.severity != null )
            .sort((prev , next) => prev.id )
        }
            
    }
        
}