import { GoogleReCaptcha_v2 } from "@/reCaptcha/googleReCaptcha_v2.js";
import { GoogleReCaptcha_v3 } from "@/reCaptcha/googleReCaptcha_v3.js";

export  class ReCaptchaIterator
{
    localRecaptchaElement = null
    constructor(element){
        this.localRecaptchaElement = element
    }
    choose(reCaptcha_selector)
    {   
        switch(reCaptcha_selector)
        {
            case 'v2' : this.localRecaptchaElement = new GoogleReCaptcha_v2(this.localRecaptchaElement) ;break;
            case 'v3' : this.localRecaptchaElement = new GoogleReCaptcha_v3(this.localRecaptchaElement) ;break;
        }
        
    }
    getResult()
    {
        return this.localRecaptchaElement.getResultFunction()
    }
    destroy(){
        this.localRecaptchaElement.destroyFunction()
        delete this.localRecaptchaElement;
    }
    
}
