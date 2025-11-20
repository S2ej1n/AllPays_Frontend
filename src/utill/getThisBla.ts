// 오늘, 일주일, 월별, 연도별 계산

// 오늘은 몇주차?
export function getThisWeek() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  // 이번 달 1일
  const firstDayOfMonth = new Date(year, month - 1, 1);
  // 1일이 무슨 요일인지 (0: 일)
  const firstDayWeek = firstDayOfMonth.getDay();
  // 주차 계산
  const week = Math.ceil((firstDayWeek + day) / 7);

  return `${month}월 ${week}주차`;
}


// 현재 달 계산하기
export function getThisMonth(): number {
  return new Date().getMonth() + 1;  
}

// 현재 년도
export function getThisYear(): number {
  return new Date().getFullYear();
}