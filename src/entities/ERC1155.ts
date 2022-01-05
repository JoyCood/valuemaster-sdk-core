import { BaseNFT, NFT_TYPE } from "./baseNFT";

export class ERC1155 extends BaseNFT {
	public readonly type = NFT_TYPE.ERC1155

	public constructor(
		chainId: number, 
		address: string, 
		symbol?: string, 
		name?: string, 
		img?: string,
		id?: number, 
		quantity?: number, 
	) {
		super(chainId, address, symbol, name, img, id, quantity)
	}

	public get isERC721(): false {
		return false
	}

	public get isERC1155(): true {
		return true
	}
}