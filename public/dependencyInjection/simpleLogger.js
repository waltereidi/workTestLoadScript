export default class SimpleLogger 
{    
    log = []
    
    //**? a single log with success = false tell the operation has failed
    //**? log with type should be used to improved legibility 
    addLog = (success , description , type = null ) => this.log.push({
        success : success , 
        description : description ,
        type : type ,
        id : this.log.length+1 ,
        eventTime : new Date()
    })

    // ** Find if theres an error logged 
    hasError(){
        if(this.log.find(x=>x.success === false ) == null )
            throw new Error(this.getErrorLog())
    }
    
    getLog = ()=> this.log
        .sort((prev , next) => prev.id )
}