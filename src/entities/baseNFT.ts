import invariant from "tiny-invariant"
import { validateAndParseAddress } from ".."

export enum NFT_TYPE {
	ERC721 = 721,
	ERC1155 = 1155,
}

type Attribute = {
	train_type: string
	value: string | number
}

export interface Metadata {
  image?: string
	image_data?: string
	external_url?: string
	description?: string
	name?: string
	attributes?: Attribute[]
	background_color?: string
	animation_url?: string
	youtube_url?: string
}

export abstract class BaseNFT {
	public abstract readonly type: NFT_TYPE

	public readonly chainId: number

	public readonly address: string

	public readonly tokenId: string

	public readonly metadata: Metadata


	protected constructor(
		chainId: number,
		address: string,
		tokenId: string,
		metadata: Metadata
	) {
		invariant(Number.isSafeInteger(chainId), 'CHAIN_ID')

		this.chainId = chainId
		this.address = validateAndParseAddress(address)
		this.tokenId = tokenId
		this.metadata = metadata
	}

	public abstract get isERC721(): boolean

	public abstract get isERC1155(): boolean
}