import { expect, test } from 'vitest'
import { GoogleReCaptcha_v2 } from '@/reCaptcha/googleReCaptcha_v2'


test('return', () => {
    const v2 = new GoogleReCaptcha_v2("element")
    expect( true ).toBe(true)
})