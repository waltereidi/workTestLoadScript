import {  ReCaptchaIterator } from './reCaptchaIterator.js'


(function(){
    const parentId = 'parent'
    const inputSubmitId = 'gray'
    const re = new ReCaptchaIterator( inputSubmitId , parentId)

    const buttonGreen ={
        action : () => {
            if(buttonGreen.clicked)
                return
            buttonGreen.clicked = true ; 
            
            console.log('load')
            re.loadReCaptcha();
        },
        clicked : false ,
        bind : (button) =>{
            button.addEventListener('click' , ()=>{buttonGreen.action()}) 
            button.innerHTML = 'loadReCaptcha'
        } 
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
    document.getElementById('gray').addEventListener('click' , (e)=>{
        e.preventDefault()
        const form = document.getElementById('form')
        const formData = new FormData(form)
        for (const [key, value] of formData) {
            console.log(`${key}: ${value}\n`);
          }
        alert()
    }) 
    
})()


