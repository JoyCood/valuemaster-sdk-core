import invariant from "tiny-invariant"
import { validateAndParseAddress } from ".."

export enum NFT_TYPE {
	ERC721 = 721,
	ERC1155 = 1155,
}

export abstract class BaseNFT {
	public abstract readonly type: NFT_TYPE

	public readonly chainId: number

	public readonly address: string

	public readonly name?: string

	public readonly symbol?: string

	protected constructor(
		chainId: number,
		address: string,
		name?: string,
		symbol?: string
	) {
		invariant(Number.isSafeInteger(chainId), 'CHAIN_ID')

		this.chainId = chainId
		this.address = validateAndParseAddress(address)
		this.name = name
		this.symbol = symbol
	}

	public abstract get isERC721(): boolean

	public abstract get isERC1155(): boolean
}