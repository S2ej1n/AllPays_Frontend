// 모바일버전 헤더 + navbar

export default function MobileNavbar() {
    return(
    <div className="flex flex-col md:hidden w-full bg-gray-200 
        p-3 justify-between">
        <div className="p-3 font-bold">메인 logo</div>
        <nav className="flex gap-2 pl-3 mt-2">
            <button className="bg-white px-4 py-2">대시보드</button>
            <button className="bg-white px-4 py-2">가맹점조회</button>
            <button className="bg-white px-4 py-2">메뉴</button>
        </nav>
    </div>
    );
}