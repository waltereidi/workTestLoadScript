import {ReCaptchaAdapter} from "./ReCaptchaAdapter"
import { DependencyInjection } from "@/dependencyInjection/dependencyInjection"

export class GoogleReCaptcha_v2 extends ReCaptchaAdapter
{
    renderElement = null
    di = new DependencyInjection()
    siteKey = null 
    /**
     * Provide the element reference to render recaptcha v2
     * @param {element_reference} element 
     */
    constructor( element ){
        super()
        this.renderElement = element
       
       if(this.renderElement == null)
            throw new Error('invalid elementId')    

       this.siteKey = this.di.getKeyVault()
            .getByKey('reCaptchaV2_siteKey');
            
       super.setupAdapter(this.renderFunction , this.getResultFunction , this.destroyFunction )
    }

    renderFunction(){
        const localReCaptcha = this.renderElement.createElement('div');
        localReCaptcha.setAttribute('id', 'localReCaptchaV2');

        grecaptcha.render(localReCaptcha.id , {
            'sitekey' : '6LfmZ2oqAAAAAOtf5-DrKGua0PHoJxLv2kx4tq9y',
            'callback' : (res )=>{this.siteKey = res},
            'theme' : 'dark'
          });
    }
    getResultFunction(){
        console.log(this.siteKey);
        return this.siteKey;
    }
    destroyFunction(){
        this.localReCaptcha.innerHTML = '';
        console.log('clear')
    }
}
