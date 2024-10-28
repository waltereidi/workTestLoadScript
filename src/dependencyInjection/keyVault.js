import { IDependencyInjection } from "./iDependencyInjection";

export class KeyVault
{
    
    constructor()
    {
        require('root/storedKeys.json')
    }
}