# Assignment
이 과제는 안정성과 라이브러리 호환성을 우선하여 React 18.3.1을 기반으로 개발했습니다.  
React 18 환경과의 호환성을 위해 React Router DOM은 v6, Zustand는 v4 버전을 선택했습니다.  
또한 차트 라이브러리(Nivo)와의 효율적인 스타일링을 위해 Tailwind CSS를 적용했습니다.

## ⚒️ 사용 기술 스택
- **Runtime**: Node.js `20.19.5`, npm `10.8.2`
- **Framework**: Vite, React `18.3.1`
- **Language**: TypeScript
- **Routing**: React Router DOM `6.28.2`
- **State Management**: Zustand `4.5.7`
- **API Fetching**: TanStack Query
- **Styling**: Tailwind CSS, daisyUI
- **Graph/Chart**: Nivo
  
## 🚀 로컬 실행 방법
```
npm install
npm run dev
```
#### 환경변수 .env
```
VITE_API_BASE_URL = https://recruit.paysbypays.com/api/v1
```
## 📁 파일 구조
```
src
├── apis                     # API 호출 관련 함수 (axios, hooks 등)
├── assets                   # 이미지, 아이콘 등 정적 리소스
├── components               # 공용 UI 컴포넌트 (헤더 등)
├── mockdata                 # 임시 데이터(Mock)
├── pages
│   ├── DashBoard            # 대시보드 페이지
│   │   ├── com              # 대시보드 관련 세부 컴포넌트
│   │   └── Dashboard.tsx
│   └── Merchants.tsx        # 가맹점 관리 페이지
├── router                   # 라우터 설정
├── store                    # Zustand
│   └── filterStore.ts 
├── types                    # 타입 정의
└── utill                    # 함수 모음
```

## 🎨 Figma
#### 화면 설계 및 요구사항 정리
https://www.figma.com/design/MV7Wovk5uY9BgnH1Zl1IZv/%EC%98%AC%ED%8E%98%EC%9D%B4%EC%A6%88-%EA%B3%BC%EC%A0%9C?node-id=0-1&t=BEX27dkrOqa9fxGc-1

## 📝 Commit Convention
| 타입           | 설명                         |
| ------------ | -------------------------- |
| **feat**     | 새로운 기능 추가                  |
| **fix**      | 버그 수정                      |
| **docs**     | 문서 수정                      |
| **design**    | 기능에 영향 없는 스타일 변경           |
| **refactor** | 리팩토링                       |
| **chore**    | 프로젝트 설정, 구조 변경              |
