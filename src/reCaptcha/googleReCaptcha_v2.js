import {ReCaptchaAdapter} from "./ReCaptchaAdapter"
import { DependencyInjection } from "@/dependencyInjection/dependencyInjection"

export  class GoogleReCaptcha_v2 extends ReCaptchaAdapter
{
    renderElement = null
    /**
     * Provide the element reference to render recaptcha v2
     * @param {element_reference} element 
     */
    constructor( element ){
       super()
       
       this.renderElement = element
       
       if(this.renderElement == null)
            throw new Error("invalid elementId")    

    }
    
    init(){
        super.setupAdapter(this.renderFunction , this.getResultFunction , this.destroyFunction )

    }
    renderFunction = ()=>{
        console.log(1)
    }
    getResultFunction(){
        console.log(1)
    }
    destroyFunction(){
        console.log(14343)
    }
}