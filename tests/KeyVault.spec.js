import { expect, test } from 'vitest'
import { KeyVault } from '@/dependencyInjection/keyVault'

const keyVault = new KeyVault();

test('keyVault get all returns an array of objects', () => {
    

    const arrayOfObjects = keyVault.getAll();
    //console.log(arrayOfObjects)
    expect( arrayOfObjects).toEqual(expect.any(Array));
})

test('key vault get by name returns a string', () => {

    expect( keyVault.getByKey("reCaptchaV2_publicKey") ).toEqual(expect.any(String));
})

test('return all keys inside of array returns an array of objects', () => {

    const arr =['reCaptchaV3_siteKey' , 'reCaptchaV3_publicKey']
    
    const result = keyVault.getIn(arr);
    console.log(result)
    expect( result ).toEqual(expect.any(Array));
})