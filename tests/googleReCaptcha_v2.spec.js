import { expect, test } from 'vitest'
import { GoogleReCaptcha_v2 } from '@/reCaptcha/googleReCaptcha_v2'



test('return', () => {
    const v2 = new GoogleReCaptcha_v2("element")
    v2.init();
    v2.destroy.action()
    expect( true ).toBe(true)
})