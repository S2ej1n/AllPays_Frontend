// 데스크탑 버전 헤더 + navbar
import { useNavigate, useLocation } from "react-router-dom";

export default function DesktopNavbar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <aside className="hidden md:flex flex-col w-60 bg-white p-4 gap-4
        border-r border-gray-300">
            <div className="p-2 font-bold">AllPays</div>
            <button className={`bg-white p-2 text-left ${
                    pathname === "/" ? "font-bold text-blue-600" : "font-medium"
                    }`}
                    onClick={() => navigate("/")}>대시보드</button>
            <button className={`bg-white p-2 text-left ${
                    pathname === "/merchats" ? "font-bold text-blue-600" : "font-medium"
                    }`}
                    onClick={() => navigate("/merchats")}>가맹점조회</button>
            <button className="bg-white p-2 text-left">메뉴</button>
        </aside>
    );
}
