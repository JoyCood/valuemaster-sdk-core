import { BaseNFT, NFT_TYPE } from "./baseNFT";

export class ERC1155 extends BaseNFT {
  public readonly type = NFT_TYPE.ERC1155

	public constructor(chainId: number, address: string, id: number, quantity:number, symbol?: string, name?: string, img?: string) {
		super(chainId, address, id, quantity, symbol, name, img)
	}


	public get isERC721(): false {
		return false
	} 

	public get isERC1155(): true {
		return true
	}
}