// 월별로 필터링 하는 함수
// {x:월, y:토탈 값}
// "paymentAt": "2025-11-01T00:10:00"
// "amount": "11000.00" -> 스트링 타입

import type { Payment } from "../types/payments";

export function filterMonth(data: Payment[]){
    // 유사 배열 객체 
    // Array.from({length: 5}, (v, i) => i);
    const result = Array.from({length:12},(v, i)=>({x: i + 1, y:0}));

    // for문 돌려
    data.forEach((i) => {
        // Date 객체로 만들기 (string으로 하면 일일이 분리하지만, Date객체로 만들면 분리하기 easy합니다)
        const date = new Date(i.paymentAt);
        const month = date.getMonth();
        result[month].y += Number(i.amount);
    });

    return result;
}