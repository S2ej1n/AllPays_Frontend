// 페이 타입별 필터링하는 함수

import type { Payment, PayType} from "../types/payments";

export function filterPayType(data: Payment[]) {

    // 임시로 값 저장해둘 딕셔너리
    const temp = {
        ONLINE: 0, DEVICE: 0, MOBILE: 0, VACT: 0, BILLING: 0,
    }

    // 값이랑 돈 빼오기
    data.forEach((i)=>{
        temp[i.payType] += Number(i.amount);
    })

    // reduce(sum, 더하는값, 초기값)
    const totalSum = Object.values(temp).reduce((sum, v) => sum + v, 0)

    const result = Object.entries(temp).map(([key, value]) => ({
        id: key as PayType,
        value,
        percent: totalSum === 0 ? 0 : Number(((value / totalSum) * 100).toFixed(1)),
    }));

    return result
}
    // {
    // id: "ONLINE" as PayType,
    // value: 245600,
    // percent: 53.2,
    // },