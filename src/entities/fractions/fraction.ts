import JSBI from "jsbi";
import { BigintIsh } from "../../constants";

export class Fraction {
  public readonly numerator: JSBI
  public readonly denominator: JSBI

  public constructor(numerator: BigintIsh, denominator: BigintIsh = JSBI.BigInt(1)) {
    this.numerator = JSBI.BigInt(numerator)
    this.denominator = JSBI.BigInt(denominator)
  }

  private static tryParseFraction(fractionish: BigintIsh | Fraction): Fraction {
    if (fractionish instanceof JSBI || typeof fractionish === 'number' || typeof fractionish === 'string')
      return new Fraction(fractionish)
    
    if ('numerator' in fractionish && 'denominator' in fractionish) return fractionish
    throw new Error('Could not parse fraction')
  }
}