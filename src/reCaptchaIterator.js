import { GoogleReCaptcha_v2 } from "@/reCaptcha/googleReCaptcha_v2.js";
import { GoogleReCaptcha_v3 } from "@/reCaptcha/googleReCaptcha_v3.js";

export  class ReCaptchaIterator
{
    localRecaptchaElement = null
    constructor(){
    }

    //** notations , here an inversion of control happened since v3 needs an element to be intanced 
    //** no longer this class is fully independent 
    choose(reCaptcha_selector , element )
    {   
        this.localRecaptchaElement = element
        switch(reCaptcha_selector , element )
        {
            case 'v2' : this.localRecaptchaElement = new GoogleReCaptcha_v2(this.localRecaptchaElement) ;break;
            case 'v3' : this.localRecaptchaElement = new GoogleReCaptcha_v3('blue') ;break;
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
