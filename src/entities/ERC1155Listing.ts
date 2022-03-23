import { BigNumber } from "@ethersproject/bignumber";
import { Listing } from "./listing";

export class ERC1155Listing extends Listing {
	public readonly quantity: BigNumber
	public readonly sold: boolean

	public constructor(
		listingId: BigNumber,
		tokenAddress: string,
		tokenId: string,
		category: BigNumber,
		currency: string,
		seller: string,
		priceInWei: BigNumber,
		timeCreated: number,
		cancelled: boolean,
		quantity: BigNumber,
		sold: boolean
	) {
    super(
			listingId,
			tokenAddress,
			tokenId,
			category,
			currency,
			seller,
			priceInWei,
			timeCreated,
			cancelled
		)
		this.quantity = quantity
		this.sold = sold
	}

  public	get isERC721(): boolean{
		return false
	}

  public get isERC1155(): boolean {
    return true
	}
}