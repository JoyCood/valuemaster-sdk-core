import { BaseNFT, NFT_TYPE } from "./baseNFT";

export class ERC721 extends BaseNFT {
	public readonly type = NFT_TYPE.ERC721

	public get isERC721(): true {
		return true
	}

	public get isERC1155(): false {
		return false
	}
}