// [거래 내역 전체 조회] /payments/list 거래 내역 응답 타입

// 유니온 type 으로 관리
export type PayType = "ONLINE" | "DEVICE" | "MOBILE" | "VACT" | "BILLING";
export type StatusType = "PENDING" | "SUCCESS" | "FAILED" | "CANCELLED";

export interface Payment {
    paymentCode: string;
    mchtCode: string;
    amount: string;
    currency: string;
    payType: PayType;
    status: StatusType;  
    paymentAt: string;
}