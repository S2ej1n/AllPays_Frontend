// 가맹점 api 호출
import { useGethook } from './hook.ts'
import type { MerchantType, MerchantList } from '../types/merchant.ts';


// 전체 호출
export const useGetMerchantList = () => {
  return useGethook<MerchantList[]>("/merchants/list");
};

// 디테일 호출
export const useGetMerchantDetails = (mchtCode: string) => {
  return useGethook<MerchantType>(`/merchants/details/${mchtCode}`);
};