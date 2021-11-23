import { BaseNFT, NFT_TYPE } from "./baseNFT";

export class ERC721 extends BaseNFT {
	public readonly type = NFT_TYPE.ERC721

	public constructor(chainId: number, address: string, id: number, symbol?: string, name?: string, img?: string) {
		super(chainId, address, id, 1, symbol, name, img)
	}

	public get isERC721(): true {
		return true
	}

	public get isERC1155(): false {
		return false
	}
}