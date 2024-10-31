import { expect, test } from 'vitest'
import { KeyVault } from '@/dependencyInjection/keyVault'

const keyVault = new KeyVault();

test('keyVault get all returns an array of objects', () => {

    const arrayOfObjects = keyVault.getAll();
    //console.log(arrayOfObjects)
    expect( arrayOfObjects).toEqual(expect.any(Array));
})

test('key vault get by name returns a string', () => {

    var result =keyVault.getByKey("reCaptchaV2_publicKey")
    //console.log(result)
    expect( result ).toEqual(expect.any(String));
})

test('return all keys and returns an array of objects', () => {

    const result = keyVault.getIn('reCaptchaV3_siteKey' , 'reCaptchaV3_publicKey');
    //console.log(result)
    expect( result ).toEqual(expect.any(Array));
})