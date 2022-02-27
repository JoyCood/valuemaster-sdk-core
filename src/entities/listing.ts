import { BigNumber } from "ethers"

export abstract class Listing {
	public abstract readonly isERC1155: boolean
	public abstract readonly isERC721: boolean
	public readonly listingId: BigNumber
	public readonly currency: string
	public readonly seller: string
	public readonly priceInWei: BigNumber
	public readonly timeCreated: BigNumber

	constructor(listingId: BigNumber, currency: string, seller: string, priceInWei: BigNumber, timeCreated: BigNumber) {
    this.listingId = listingId
		this.currency = currency
		this.seller = seller
		this.priceInWei = priceInWei
    this.timeCreated = timeCreated
	}
}