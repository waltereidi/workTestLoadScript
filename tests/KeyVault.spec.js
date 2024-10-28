import { expect, test } from 'vitest'
import { KeyVault } from '@/dependencyInjection/keyVault'

test('add log returns has error when add success false log', () => {
    var logger = new KeyVault();

    expect( logger.hasError() ).toBe(true)
})
