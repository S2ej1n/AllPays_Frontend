// 필터 상태 관리하는 store
// 주별, 월별, 년도별

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
