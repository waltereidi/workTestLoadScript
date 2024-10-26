import ReCaptcha from "./ReCaptchaAdapter"

export default class googleReCaptcha_v2 extends ReCaptcha
{
    constructor( elementId ){
        this.super("body" , alert() , alert())
        this.parentElement = elementId
    }
    parentElement;
    renderFunction(){

    }
    getResultFunction(){

    }
    destroyFunction(){

    }
}