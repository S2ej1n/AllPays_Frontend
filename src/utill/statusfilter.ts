// 상태별로 필터링하는 함수
import type { Payment, StatusType} from "../types/payments";

export function filterStatusType(data: Payment[]) {

    const temp = {
        PENDING: 0, SUCCESS: 0, FAILED: 0, CANCELLED: 0
    }

    // 상태랑 돈 빼오기
    data.forEach((i)=>{
        temp[i.status] += Number(i.amount);
    })

    const totalSum = Object.values(temp).reduce((sum, v) => sum + v, 0)

    const result = Object.entries(temp).map(([key, value]) => ({
            id: key as StatusType,
            value,
            percent: totalSum === 0 ? 0 : Number(((value / totalSum) * 100).toFixed(1)),
        }));
    
    return result
}