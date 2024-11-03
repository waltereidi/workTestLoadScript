import { DependencyInjection } from "@/dependencyInjection/dependencyInjection"

export class GoogleReCaptcha_v2 {
    
    definitions = {
        di : new DependencyInjection(),
        siteKey : null ,
        localReCaptchaId:()=>'localReCaptchaV2', 
        resultAttr: () => 'data-attr-result', 
    }
    
    /**
     * Provide the element reference to render recaptcha v2
     * @param {element_reference} element 
     */
    constructor( element ){
        this.definitions.siteKey = this.definitions.di
            .getKeyVault()
            .getByKey('reCaptchaV2_siteKey');
        
        this.renderFunction(element)
    }

    renderFunction(parentElement){
        const child = document.createElement('div');
        child.setAttribute('id', this.definitions.localReCaptchaId());
        child.setAttribute( this.definitions.resultAttr(), '');
        const render = document.getElementById(parentElement)

        render.appendChild(child)

        grecaptcha.render(child.id , {
            'sitekey' : this.definitions.siteKey,
            'callback' : (res )=>child.setAttribute( this.definitions.resultAttr() , res),
            'theme' : 'dark'
            });
    }

    getResultFunction(){
        const local = document.getElementById(this.definitions.localReCaptchaId())
        const response = local.getAttribute( this.definitions.resultAttr() )
        setTimeout(()=>{
            grecaptcha.reset()
        },4000)
        return response;
    }

    destroyFunction(){
        const local = document.getElementById(this.definitions.localReCaptchaId())
        local.innerHTML = '';
        console.log('clear')
    }
}
