import { Listing } from "./listing";

export class ERC721Listing extends Listing {
	
	public get isERC721(): boolean {
		return true;
	}

	public get isERC1155(): boolean {
		return false;
	}
}