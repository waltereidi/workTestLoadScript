import { DependencyInjection } from "@/dependencyInjection/dependencyInjection";

export class GoogleReCaptcha_v3
{
    definitions = {
        di : new DependencyInjection(),
        siteKey : null ,
        localReCaptchaId:()=>'localReCaptchaV3', 
        attrSiteKey: () => 'data-siteKey', 
        attrCallBack: () => 'data-callback',
        attrResult:() => 'data-result',
        attrAction: () => 'submit',
    }

    constructor( element ){
        this.definitions.siteKey = this.definitions.di
        .getKeyVault()
        .getByKey('reCaptchaV3_siteKey');
        this.definitions.localReCaptchaId = ()=> element
        this.renderFunction(element)
    }

    renderFunction(elementId){
        const parentElement = document.getElementById(elementId)
        parentElement.setAttribute( this.definitions.attrSiteKey(), this.definitions.siteKey );
        parentElement.setAttribute( this.definitions.attrCallBack(), 'onSubmit' );
        parentElement.setAttribute( this.definitions.attrAction(), 'submit' );
        parentElement.setAttribute(  'class' , 'g-recaptcha' );
        
    }
   
    setResultFunction(token)
    {
        alert(token)
        const local = document.getElementById(this.definitions.localReCaptchaId())
        local.setAttribute( this.definitions.attrResult(), token );
    }

    getResultFunction(){
        const local = document.getElementById(this.definitions.localReCaptchaId())
        const result = local.getAttribute(this.definitions.attrResult())

        return result;
    }
    
    destroyFunction(){
        const local = document.getElementById(this.definitions.localReCaptchaId())
         

        local.removeAttribute(this.definitions.attrAction)
        local.removeAttribute(this.definitions.attrCallBack)
        local.removeAttribute(this.definitions.attrResult)
        local.removeAttribute(this.definitions.attrResult)
    }

} 