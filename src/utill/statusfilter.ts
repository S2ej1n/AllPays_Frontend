// 상태별로 필터링하는 함수
import type { Payment, StatusType} from "../types/payments";

export function filterStatusType(data: Payment[]) {

    const temp = {
        PENDING: 0, SUCCESS: 0, FAILED: 0, CANCELLED: 0
    }

}