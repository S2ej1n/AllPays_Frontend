// 오늘, 일주일, 월별, 연도별 계산

// 최근 7일 -> 시작날짜 반환
export function getLast7Days(): string {
  const now = new Date();
  const prev = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  return prev.toISOString().slice(0, 10);
}

// 현재 달 계산하기
export function getThisMonth(): number {
  return new Date().getMonth() + 1;  
}

// 현재 년도
export function getThisYear(): number {
  return new Date().getFullYear();
}