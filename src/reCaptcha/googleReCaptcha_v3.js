export class GoogleReCaptcha_v3
{
    definitions = {
        di : new DependencyInjection(),
        siteKey : null ,
        localReCaptchaId:()=>'localReCaptchaV2', 
        resultAttr: () => 'data-attr-result', 
    }

    constructor(  ){
        this.siteKey = this.definitions.di
        .getKeyVault()
        .getByKey('reCaptchaV3_siteKey');

        this.renderFunction(element)
    }
    
}