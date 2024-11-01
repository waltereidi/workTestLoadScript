import {  ReCaptchaIterator } from './reCaptchaIterator.js'


(function(){
    const parent = 'parent'
    const re = new ReCaptchaIterator(parent)

    const buttonGreen ={
        action : () => {
            if(buttonGreen.clicked)
                return
            buttonGreen.clicked = true ; 
            
            console.log('coosin')
            re.choose('v2');
        },
        clicked : false ,
        bind : (button) => button.addEventListener('click' , ()=>{buttonGreen.action()}) , 

    }
    buttonGreen.bind(document.getElementById('green'))

})()



