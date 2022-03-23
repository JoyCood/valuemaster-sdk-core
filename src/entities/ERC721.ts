import { BaseNFT, NFT_TYPE } from "./baseNFT";

export class ERC721 extends BaseNFT {
	public readonly type = NFT_TYPE.ERC721

	public constructor(
		chainId: number,
		address: string,
		tokenId: string,
		name?: string,
		symbol?: string,
		uri?: string,
		image?: string,
		description?: string,
	) {
		super(chainId, address, tokenId, name, symbol, uri, image, description)
	}

	public get isERC721(): true {
		return true
	}

	public get isERC1155(): false {
		return false
	}
}