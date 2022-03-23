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

	public readonly tokenId: string

	public readonly name?: string

	public readonly symbol?: string

	public readonly uri?: string

	public readonly image?: string

	public readonly description?: string

	protected constructor(
		chainId: number,
		address: string,
		tokenId: string,
		name?: string,
		symbol?: string,
		uri?: string,
		image?: string,
    description?: string
	) {
		invariant(Number.isSafeInteger(chainId), 'CHAIN_ID')

		this.chainId = chainId
		this.address = validateAndParseAddress(address)
		this.tokenId = tokenId
		this.name = name
		this.symbol = symbol
		this.uri = uri
		this.image = image
		this.description = description
	}

	public abstract get isERC721(): boolean

	public abstract get isERC1155(): boolean
}