// 데스크탑 버전 헤더 + navbar

export default function DesktopNavbar() {
    return (
        <aside className="hidden md:flex flex-col w-60 bg-white p-4 gap-4
        border-r border-gray-300">
            <div className="p-2 font-bold">Pays</div>
            <button className="bg-white p-2 text-left">대시보드</button>
            <button className="bg-white p-2 text-left">가맹점조회</button>
            <button className="bg-white p-2 text-left">메뉴</button>
        </aside>
    );
}
