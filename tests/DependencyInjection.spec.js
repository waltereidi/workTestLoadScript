import { expect, test } from 'vitest'
import {DependencyInjection} from '@/dependencyInjection/dependencyInjection'

const di = new DependencyInjection(); 

test('return a instance of simpleLogger class', () => {
    var simpleLogger = di.getLogger()

    expect( simpleLogger.smokeTest() ).toBe(true)
})