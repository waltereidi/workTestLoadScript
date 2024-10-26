import { expect, test } from 'vitest'
import SimpleLogger from '@/dependencyInjection/simpleLogger.js'

test('add log returns has error when add success false log', () => {
    var logger = new SimpleLogger();

    logger.addLog(true , ''  )
    logger.addLog(false , ''  )
    logger.addLog(true , ''  )
    
    expect( logger.hasError() ).toBe(true)
})
test('return logs with error and severity set', () => {
    var logger = new SimpleLogger();

    logger.addLog(true , 'sev' , 0)
    logger.addLog(false , 'error'  )
    logger.addLog(true , ''  )

    expect( logger.getErrorLog().length ).toBe(2)
    
})

