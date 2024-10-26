const gReCaptcha_config = {
    v3 : 'https://www.google.com/recaptcha/api.js?render=6LfeZ2oqAAAAAHlSDu7vpFkRdKcG0Zf735gt91cK' , 
    v2 : 'https://www.google.com/recaptcha/api.js?onload=grc_callback&render=explicit' , 
}

const grc_callback =(token) => {
    grc_local.callback(token)
}
let grc_local_var = {
    element_default_name : "current_reCaptcha",
    parent_id : 1 , 
    response_key : null ,
}
let grc_local = {

    setParentId :(elem) =>{
        grc_local_var.parent_id = elem
    },
    callback :(token) => {
        return new Promise((resolve , reject ) => {
            console.log(token)
            grc_local_var.response_key = token;
            resolve(token);
        })
    }, 
    reset : ()=> {
        return new Promise((resolve , reject ) => {
            console.log('reset')
            console.log(grc_local_var.parent_id)
            grc_local_var.parent_id = null ;
            grc_local_var.response_key = null ;
            resolve();
        })
    },
    getToken : () => {
        return new Promise((resolve , reject ) => {
            console.log('getToken')
            grc_local_var.response_key != null && grc_local_var.response_key != '' ? resolve(grc_local_var.response_key) : reject(grc_local_var.response_key);
        })
    },
    isLoaded : () => {
        return new Promise((resolve , reject ) => {
            console.log('isLoaded')
            grc_local_var.parent_id != null ? resolve("success") : reject("Google Recaptcha not loaded")
        })
    }
}

$(document).ready(()=>{
    
    $('#green').on('click' , (e)=>{
        grc_local.getToken().then((token) => alert(token))
    })
    $('#blue').on('click' , (e)=>{
        loadGReCaptcha('parent' , 1)
    })
    $('#red').on('click' , (e)=>{
        loadGReCaptcha('parent' , 2)
    })

})
function LoadV2(){
    grecaptcha.render(grc_local_var.parent_id, {
        'sitekey' : '6LfmZ2oqAAAAAOtf5-DrKGua0PHoJxLv2kx4tq9y',
        'callback' : 'grc_callback',
        'theme' : 'dark'
      });
}
function LoadV3(){
    getRecaptcha_V3_Response()
}
//Must return a Promise
function switchVersionToLoad(loadV)
{
    switch(loadV)
    {
        case 1 : return loadScript(gReCaptcha_config.v3).then(()=>LoadV3(grc_local.parent_id) );
        case 2 : return loadScript(gReCaptcha_config.v2).then(()=>LoadV2(grc_local.parent_id) );
    }
}
function loadGReCaptcha(element , version = null){
        grc_local.reset()
        .then(() => getVersion(version))
        .then((loadV)=> switchVersionToLoad(loadV)) 
        .then(() => grc_local.isLoaded())
        .catch(() => console.error("recaptcha not loaded"))
}
function getRecaptcha_V3_Response() {
    e.preventDefault();
    return new Promise((resolve , reject ) =>{
        grecaptcha.ready(function() {
            grecaptcha.execute('6LfeZ2oqAAAAAHlSDu7vpFkRdKcG0Zf735gt91cK', {action: 'submit'})
              .then(function(token) {
                  resolve(token)
            });
        });    
    })
}

function getVersion(loadV){
    return new Promise((resolve , reject )=>{
        if(loadV != null )
            resolve(loadV)

        const data = 2;
        resolve(data)
    })
}
function loadScript(url){
    return new Promise((resolve , reject )=>{
        console.log(url)
        resolve($.getScript( url, function( data, textStatus, jqxhr ) {
            if(jqxhr.status != 200)
                console.error(`Error while loading script ${url}`)
            console.log( `Load was performed.${url}` );
          }));
    })
}
