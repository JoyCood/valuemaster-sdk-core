import { BaseNFT, NFT_TYPE } from "./baseNFT";

export class ERC1155 extends BaseNFT {
  public readonly type = NFT_TYPE.ERC1155

	public get isERC721(): false {
		return false
	} 

	public get isERC1155(): true {
		return true
	}
}