import {ReCaptchaAdapter} from "./ReCaptchaAdapter"

export  class GoogleReCaptcha_v2 extends ReCaptchaAdapter
{
    constructor( elementId ){
       super()
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
        console.log(1)
    }
}