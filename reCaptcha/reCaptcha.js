export default class ReCaptcha
{
    constructor( element , renderFunction , getResultFunction )
    {
        this.recaptchaLocal = document.getElementById() ?? (() => {throw new Error("element not found exception")})();

        this.initialialize = renderFunction ?? (() => {throw new Error("could not delegate render function")})();; 
        this.getResult = getResultFunction ?? (() => {throw new Error("could not delegate get result function")})(); 

    }
    getResult = null 
    initialialize = null 

}