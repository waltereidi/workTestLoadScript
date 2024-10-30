import { IDependencyInjection } from "./iDependencyInjection";
/**
 * GetAll to retrieve all keys stored at once
 * GetByKey to get a single value
 */
export class KeyVault extends IDependencyInjection
{
    LocalKeyVault = null
    constructor()
    {
        super()

        this.LocalKeyVault = [
            {
                key : "reCaptchaV2_publicKey",
                value:"6LfmZ2oqAAAAAOtf5-DrKGua0PHoJxLv2kx4tq9y"
            },
            {
                key : "reCaptchaV2_siteKey",
                value:"6LfmZ2oqAAAAAOtf5-DrKGua0PHoJxLv2kx4tq9y"
            },
            {
                key : "reCaptchaV3_publicKey",
                value:"6LfmZ2oqAAAAAOtf5-DrKGua0PHoJxLv2kx4tq9y"
            },
            {
                key : "reCaptchaV3_siteKey",
                value:"6LfmZ2oqAAAAAOtf5-DrKGua0PHoJxLv2kx4tq9y"
            }
        ]
    }


    /**
     * replace this method with an API call
     * @returns [...{key : "value" , "value" : "value" }]
     */
    getAll()
    {
        return this.LocalKeyVault
    }

    /**
     * returns value from object array that contains a key with value param
     * @param {keyName} key 
     * @returns string
     */
    getByKey(key)
    {
        return this.LocalKeyVault.find(x=>x.key === key).value
    }

    getIn = (...keys) => this.LocalKeyVault.filter(x=> keys.includes(x.key))

}
