import { BigNumber } from "ethers"

export abstract class Listing {
	public abstract readonly isERC1155: boolean
	public abstract readonly isERC721: boolean
	public readonly listingId: BigNumber
	public readonly tokenAddress: string
	public readonly category: BigNumber
	public readonly tokenId: string
	public readonly currency: string
	public readonly seller: string
	public readonly priceInWei: BigNumber
	public readonly timeCreated: number
	public readonly cancelled: boolean

	constructor(
		listingId: BigNumber,
		tokenAddress: string,
		tokenId: string, 
		category: BigNumber,
		currency: string, 
		seller: string, 
		priceInWei: BigNumber, 
		timeCreated: number,
		cancelled: boolean
	) {
    this.listingId = listingId
		this.tokenAddress = tokenAddress
		this.tokenId = tokenId
		this.category = category
		this.currency = currency
		this.seller = seller
		this.priceInWei = priceInWei
    this.timeCreated = timeCreated
		this.cancelled = cancelled
	}
}