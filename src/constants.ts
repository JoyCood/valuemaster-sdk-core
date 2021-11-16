import JSBI from "jsbi";

// exports for external consumption
export type BigintIsh = JSBI | string | number

export enum Action {
  BUY,
	SALE,
	UPDATE,
	CANCEL,
}

export enum ItemType {
	ERC721,
	ERC1155,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')