import { BaseNFT, NFT_TYPE } from "./baseNFT";

export class ERC721 extends BaseNFT {
	public readonly type = NFT_TYPE.ERC721
	public readonly tokenURI?: string

	public constructor(
		chainId: number,
		address: string,
		name?: string,
		symbol?: string,
		tokenURI?: string,
	) {
		super(chainId, address, name, symbol)
		this.tokenURI = tokenURI
	}

	public get isERC721(): true {
		return true
	}

	public get isERC1155(): false {
		return false
	}
}