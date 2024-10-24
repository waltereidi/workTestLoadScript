import ReCaptcha from "./reCaptcha/reCaptcha.js"
import GoogleReCaptcha_v3 from './reCaptcha/googleReCaptcha_v3.js'

$(document).ready(()=>{

    const i = new GoogleReCaptcha_v3()
    i.getResult();
})