import _Big from 'big.js'
import JSBI from 'jsbi'
import { Currency } from '../currency'
import { Token } from '../token'

import toFormat from 'toformat'
import { BigintIsh, Rounding, MaxUint256 } from '../../constants'

const Big = toFormat(_Big)

export class CurrencyAmount<T extends Currency> extends Fraction {
  public readonly currency: T
  public readonly decimalScale: JSBI

  /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */
  public static fromRawAmount<T extends Currency>(currency: T, rawAmount: BigintIsh): CurrencyAmount<T> {

  }
}