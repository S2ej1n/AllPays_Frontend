// 기간 필터링 컴포넌트
export default function PeriodFilter() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-4 px-5 bg-white border border-gray-300 shadow-sm rounded-2xl">
        <div>
            <p className="font-bold mb-2">기간 선택</p>
            <div className="flex flex-row gap-2">
            <button className="btn btn-sm p-4 px-3 border border-gray-300 shadow-sm text-sm rounded-md text-gray-500">
                최근 7일
            </button>
            <button className="btn btn-sm p-4 px-3 border border-gray-300 shadow-sm text-sm rounded-md text-gray-500">
                월별
            </button>
            <button className="btn btn-sm p-4 px-3 border border-gray-300 shadow-sm text-sm rounded-md text-gray-500">
                연도별
            </button>
            </div>
        </div>

        <div className="">
            <p className="font-bold mb-2">통화 선택</p>
            <select
            defaultValue="통화 선택"
            className="select px-3 border border-gray-300 shadow-sm text-sm rounded-xl w-52"
            >
            <option>한국 (KRW)</option>
            <option>미국 (USD)</option>
            <option>일본 (JPY)</option>
            </select>
        </div>
    </section>

  )
}
