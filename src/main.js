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
    const buttonBlue ={
        action : () => {
            if(buttonBlue.clicked)
                return
            buttonBlue.clicked = true ; 
            
            console.log('coosin')
            const result = re.getResult()
            alert(result ? result : "no result yet")
        },
        clicked : false ,
        bind : (button) => {
            button.addEventListener('click' , ()=>{ buttonBlue.action() })
            button.innerHTML ='alert result';
        } , 
    }
    const buttonRed ={
        action : () => {
            if(buttonRed.clicked)
                return
            buttonRed.clicked = true ; 
            console.log('destroy')
            re.destroy();
        },
        clicked : false ,
        bind : (button) => {
            button.addEventListener('click' , ()=>{buttonRed.action()}) 
            button.innerHTML ='destroy';
        }, 
    }

    buttonGreen.bind(document.getElementById('green'))

    buttonRed.bind(document.getElementById('red'))

    buttonBlue.bind(document.getElementById('blue'))

})()



