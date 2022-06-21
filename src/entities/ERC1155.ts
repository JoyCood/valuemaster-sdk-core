import { BaseNFT, Metadata, NFT_TYPE } from "./baseNFT";

export class ERC1155 extends BaseNFT {
	public readonly type = NFT_TYPE.ERC1155

	public constructor(
		chainId: number, 
		address: string,
		tokenId: string, 
    metadata: Metadata
	) {
		super(chainId, address, tokenId, metadata)
	}

	public get isERC721(): false {
		return false
	}

	public get isERC1155(): true {
		return true
	}
}