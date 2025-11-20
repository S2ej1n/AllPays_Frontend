// 돈별로 쉼표 찍어주는 함수

// KRW (한국)
export function formatKRW(price: number): string {
  return "₩ " + new Intl.NumberFormat("ko-KR").format(price);
}
