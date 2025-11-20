// [거래 내역 전체 조회] /payments/list 거래 내역 요청
import { useGethook } from './hook.ts'
import type { Payment } from '../types/payments'

// get 요청
export const useGetPayment = () => {
    return useGethook<Payment[]>("/payments/list");
}