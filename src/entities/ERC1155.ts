import { BaseNFT, NFT_TYPE } from "./baseNFT";

export class ERC1155 extends BaseNFT {
	public readonly type = NFT_TYPE.ERC1155
	public readonly uri?:string

	public constructor(
		chainId: number, 
		address: string, 
		name?: string,
		symbol?: string,
		uri?: string 
	) {
		super(chainId, address, name, symbol)
		this.uri = uri
	}

	public get isERC721(): false {
		return false
	}

	public get isERC1155(): true {
		return true
	}
}