import { BaseNFT, Metadata, NFT_TYPE } from "./baseNFT";

export class ERC721 extends BaseNFT {
	public readonly type = NFT_TYPE.ERC721

	public constructor(
		chainId: number,
		address: string,
		tokenId: string,
    metadata: Metadata
	) {
		super(chainId, address, tokenId, metadata)
	}

	public get isERC721(): true {
		return true
	}

	public get isERC1155(): false {
		return false
	}
}