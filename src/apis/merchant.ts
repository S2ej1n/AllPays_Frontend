// 가맹점 api 호출
import { useGethook } from './hook.ts'
import type { MerchantType } from '../types/merchant.ts';


// 디테일 호출
export const useGetMerchantDetails = (mchtCode: string) => {
  return useGethook<MerchantType>(`/merchants/details/${mchtCode}`);
};