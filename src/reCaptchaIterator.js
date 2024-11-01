import { GoogleReCaptcha_v2 } from "@/reCaptcha/googleReCaptcha_v2.js";

export  class ReCaptchaIterator
{
    localRecaptchaElement = null
    v2 = null
    constructor(element){
        this.localRecaptchaElement = element
    }
    choose(reCaptcha_selector)
    {   
        switch(reCaptcha_selector)
        {
            case 'v2' : this.v2 = new GoogleReCaptcha_v2(this.localRecaptchaElement);this.current_reCaptcha.action = this.v2;break;
        }
        
    }
    getResult()
    {
        this.current_reCaptcha.super.getResult.action();
    }
    destroy(){
        
        this.current_reCaptcha.super.destroy.action();
    }

    current_reCaptcha = new Proxy(
        {
          action: null,
        },
        {
          get: function (obj, prop ) {
            
            obj.logger.addLog( true , "destroy function requested" , "action" );

            return obj[prop];
          },
          set: function (obj, prop, value) {
            if(prop != 'action')    
                return false ; 

            value.initialize.action();
            
            obj[prop] = value;
            return true;
          }
        },
      );
}
