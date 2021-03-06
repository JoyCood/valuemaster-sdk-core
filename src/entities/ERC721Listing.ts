import { BigNumber } from "ethers";
import { Listing } from "./listing";

export class ERC721Listing extends Listing {
	public readonly timePushed: number

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
		timePushed: number
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
		this.timePushed = timePushed
	}

	public get isERC721(): boolean {
		return true;
	}

	public get isERC1155(): boolean {
		return false;
	}
}