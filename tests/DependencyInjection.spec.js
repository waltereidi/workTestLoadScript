import { expect, test } from 'vitest'
import {DependencyInjection} from '@/dependencyInjection/dependencyInjection'

const di = new DependencyInjection(); 

test('return a instance of simpleLogger class', () => {
    var simpleLogger = di.getLogger()

    expect( simpleLogger.smokeTest() ).toBe(true)
})

test('return a instance of keyVault class', () => {
    var simpleLogger = di.getKeyVault()

    expect( simpleLogger.smokeTest() ).toBe(true)
})