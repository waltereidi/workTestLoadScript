import { GoogleReCaptcha_v2 } from "@/reCaptcha/googleReCaptcha_v2.js";
import { GoogleReCaptcha_v3 } from "@/reCaptcha/googleReCaptcha_v3.js";

export  class ReCaptchaIterator
{
    definitions = {
        submitButtonId : null , 
        renderElementId : null ,
        recaptchaSequence : ['v3' , 'v2'] ,
    }
    
    constructor( submitButtonId , renderElementId )
    {
        this.definitions.submitButtonId = submitButtonId 
        this.definitions.renderElementId = renderElementId    
    }

    loadReCaptcha(){
        const selector = this.getReCaptchaSelector();
        this.choose(selector)
    }
    getReCaptchaSelector(){
        if( this.definitions.recaptchaSequence.length == 1 ) 
            return this.definitions.recaptchaSequence[0];
        else 
            return this.definitions.recaptchaSequence.shift();
    }
    choose(reCaptcha_selector)
    {   
        switch(reCaptcha_selector)
        {
            case 'v2' : this.localRecaptchaElement = new GoogleReCaptcha_v2( this.definitions.recaptchaSequence ) ;break;
            case 'v3' : this.localRecaptchaElement = new GoogleReCaptcha_v3(this.definitions.submitButtonId) ;break;
        }
        
    }
    getResult()
    {
        return Promise.resolve(this.localRecaptchaElement.getResultFunction())
    }
    destroy(){
        this.localRecaptchaElement.destroyFunction()
        delete this.localRecaptchaElement;
    }
    
}
