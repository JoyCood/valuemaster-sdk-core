import { BaseNFT, NFT_TYPE } from "./baseNFT";

export class ERC721 extends BaseNFT {
	public readonly type = NFT_TYPE.ERC721

	public constructor(
		chainId: number,
		address: string,
		symbol?: string,
		name?: string,
		img?: string,
		id?: number,
		quantity?: number
	) {
		super(chainId, address, symbol, name, img, id, quantity)
	}

	public get isERC721(): true {
		return true
	}

	public get isERC1155(): false {
		return false
	}
}