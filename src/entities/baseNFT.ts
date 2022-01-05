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

	public readonly id?: number

	public readonly quantitry?: number 

	public readonly symbol?: string

	public readonly name?: string

	public readonly img?: string

	protected constructor(
		chainId: number,
		address: string,
		symbol?: string,
		name?: string,
		img?: string,
		id?: number,
		quantity?: number,
	) {
		invariant(Number.isSafeInteger(chainId), 'CHAIN_ID')

		this.chainId = chainId
		this.address = validateAndParseAddress(address)
		this.id = id
		this.quantitry = quantity
		this.symbol = symbol
		this.name = name
		this.img = img
	}

	public abstract get isERC721(): boolean

	public abstract get isERC1155(): boolean
}