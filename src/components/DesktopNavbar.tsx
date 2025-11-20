// 데스크탑 버전 헤더 + navbar

export default function DesktopNavbar() {
    return (
        <aside className="hidden md:flex flex-col w-60 bg-gray-200 p-4 gap-4">
            <div className="p-2 font-bold">메인 logo</div>
            <button className="bg-white p-2 text-left">대시보드</button>
            <button className="bg-white p-2 text-left">가맹점조회</button>
            <button className="bg-white p-2 text-left">메뉴</button>
        </aside>
    );
}
