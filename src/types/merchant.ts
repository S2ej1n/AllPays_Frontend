export type MerchantStatus = "READY" | "ACTIVE" | "INACTIVE" | "CLOSED";

export interface MerchantType{
    mchtCode: string;       // 가맹점 코드
    mchtName: string;       // 가맹점 이름
    status: MerchantStatus; 
    bizType: string;        
    bizNo: string;          
    address: string;        
    phone: string;          
    email: string;          
    registeredAt: string;   
    updatedAt: string;      
}