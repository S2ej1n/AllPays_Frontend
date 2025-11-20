// 모바일버전 헤더 + navbar
// 라우팅 기반이므로 pathname 사용해서 스타일링 변경
import { useNavigate, useLocation } from "react-router-dom";

export default function MobileNavbar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return(
    <div className="flex flex-col md:hidden w-full bg-white 
        p-3 justify-between border-b border-gray-300">
        <div className="p-3 font-bold">AllPays</div>
        <nav className="flex gap-2 pl-3 mt-2">
            <button className={`bg-white pr-4 py-2 ${
                    pathname === "/" ? "font-bold text-blue-600" : "font-medium"
                    }`}
                    onClick={() => navigate("/")}>대시보드</button>
            <button className={`bg-white pr-4 py-2 ${
                    pathname === "/merchats" ? "font-bold text-blue-600" : "font-medium"
                    }`}
                    onClick={() => navigate("/merchats")}>가맹점조회</button>
            <button className="bg-white px-4 py-2">메뉴</button>
        </nav>
    </div>
    );
}