// 총 매출과 거래 건수를 보여주는 컴포넌트

interface CardProps {
  title: string;   // 총 매출
  value: string;   // 124253535
}

export default function TotalCard( {title, value} : CardProps) {
  return (
    <div className="p-5 bg-white border border-gray-300 shadow-sm rounded-2xl  w-full">
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
