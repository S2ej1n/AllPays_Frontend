// 필터 상태 관리하는 store
// 주별, 월별, 년도별
// 필터링 하나에 컴포넌트의 모든 요소 값이 바뀌어야하므로 zustand로 전역관리 하기로 했습니다.

import { create } from "zustand";
export type PeriodType = "WEEK" | "MONTH" | "YEAR";

interface FilterState {
  period: PeriodType; // 현재 선택
  setPeriod: (period: PeriodType) => void; //기간 변경
}

export const useFilterStore = create<FilterState>((set) => ({
  period: "MONTH", // 초기 상태
  setPeriod: (period) => set({ period }),
}));
