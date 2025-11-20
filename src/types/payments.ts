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

// 한글 매핑
export const PayTypeMapping: Record<PayType, string> = {
    ONLINE: "온라인",
    DEVICE: "단말기",
    MOBILE: "모바일",
    VACT: "가상계좌",
    BILLING: "정기결제",
};

export const StatusTypeMapping: Record<StatusType, string> = {
    PENDING: "대기",
    SUCCESS: "완료",
    FAILED: "실패",
    CANCELLED: "환불",
};