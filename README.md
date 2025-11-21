# AllPays Assignment
이 과제는 안정성과 라이브러리 호환성을 우선하여 React 18.3.1을 기반으로 개발했습니다.  
React 18 환경과의 호환성을 위해 React Router DOM은 v6, Zustand는 v4 버전을 선택했습니다.  
또한 그래프 구현은 커스텀이 가장 자유로운 Nivo 라이브러리를 선택했고,  
차트 라이브러리(Nivo)와의 효율적인 스타일링을 위해 Tailwind CSS를 적용했습니다.

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
├── components               # 공용 UI 컴포넌트 (반응형 헤더 제작)
├── mockdata                 # 임시 데이터(Mock)
├── pages
│   ├── DashBoard            # 대시보드 페이지
│   │   ├── com              # 대시보드 관련 세부 컴포넌트
│   │   └── Dashboard.tsx
│   └── Merchants.tsx        # 가맹점 관리 페이지
├── router                   # index.tsx로 라우터를 한번에 관리합니다
├── store                    
│   └── filterStore.ts       # Zustand로 필터링 상태를 관리합니다.
├── types                    # 타입 정의
└── utill                    # 그래프에 들어갈 값을 계산하는 함수들의 모음
```

- `apis/axios.ts` : `서버 공통 응답 타입`을 정의하고 `axiosInstance`를 생성하여 서버와의 연결시 공통으로 사용할 수 있게 하였습니다.
- `apis/hooks.ts`: `Tanstack Query`를 이용해 `GET`호출 훅을 만들었습니다. endpoint만 바꾸어 재사용 가능할 수 있게했습니다.
- `apis/payment.ts`: 훅을 사용해 `/payments/list`로 GET 요청을 하는 함수입니다.

- `pages/DashBoard/com` : Dashboard 페이지를 구성하는 컴포넌트들입니다. 총 매출&거래건수 카드, 그래프 등이 있습니다.
  
- `utill/getThisBla.ts` : 현재 주차, 현재 달, 현재의 년도를 계산하는 함수들의 모음입니다.
- `utill/index.ts`: 필요한 함수를 `한번에 호출`할 수 있도록 만들었습니다.
- `utill/month.ts, week.ts, year.ts`: 월별, 주별, 년도별로 그래프에 필요한 데이터를 필터링 하는 함수들입니다.
- `utill/paytypefilter.ts` : `결제 수단 그래프`에 들어갈 값을 도출하기 위한 함수입니다
- `utill/statusfilter.ts` : `결제 상태 그래프`에 들어갈 값을 도출하기 위한 함수입니다
  
- `utill/periodFilter.ts` : 필터링 버튼 클릭시 기간별로 `화면 전체의 값이 바뀌도록` 값을 계산/변경해주는 함수입니다.

## 🎨 Figma
요구 사항을 분석해보고 간단한 화면 설계를 했습니다.
https://www.figma.com/design/MV7Wovk5uY9BgnH1Zl1IZv/%EC%98%AC%ED%8E%98%EC%9D%B4%EC%A6%88-%EA%B3%BC%EC%A0%9C?node-id=0-1&t=BEX27dkrOqa9fxGc-1

### 필터링 요소
#### 1. 기간 필터
  - 사용자 선택 가능 기간 (주별 / 월별 / 연도별)
  - 기본값 = 최근 한 달 매출
#### 2. 페이 타입 ("ONLINE" | "DEVICE" | "MOBILE" | "VACT" | "BILLING”)
  - 각 수단별로 얼마나 결제했는가, 그리고 퍼센트 보여주기
#### 3. 결제 상태 (“PENDING" | "SUCCESS" | "FAILED" | "CANCELLED")
  - 결제 상태 분포
  - 성공률

### 화면 구성
- 총 매출 금액 크게 표시 (예: "₩ 1,500,000")
- 전월 대비 증감 그래프 (간단한 막대그래프)
- 통화 선택 (현재는 한국 돈만 선택 가능)
- 결제 수단 / 상태 현황 그래프
- **반응형 설계** : 사용자가 모바일에서도 편리하게 확인 가능하도록 모바일 반응형으로 설계했습니다.

| Desktop        | Mobile                       |
| ------------ | -------------------------- |
|     <img width="1347" height="1110" alt="스크린샷 2025-11-21 오전 9 09 06" src="https://github.com/user-attachments/assets/e9aef196-c378-4815-a090-cb9323465942" /> |   <img width="829" height="1110" alt="스크린샷 2025-11-21 오전 9 09 14" src="https://github.com/user-attachments/assets/befdd510-9a19-4fd6-92d0-a1e97b89648d" />|



## 📝 Commit Convention
| 타입           | 설명                         |
| ------------ | -------------------------- |
| **feat**     | 새로운 기능 추가                  |
| **fix**      | 버그 수정                      |
| **docs**     | 문서 수정                      |
| **design**    | 기능에 영향 없는 스타일 변경           |
| **refactor** | 리팩토링                       |
| **chore**    | 프로젝트 설정, 구조 변경              |

## 💭 회고
4일이라는 시간이 주어졌지만, 결제 대시보드 도메인 지식이 부족해 주어진 API를 기반으로 **요구사항**을 도출하는 과정에 생각보다 많은 시간이 필요했습니다.  
그로 인해 구현하고 싶었던 기능들을 모두 완성하지 못한 점이 아쉽습니다.  
다만 제한된 시간 속에서도 스스로 주어진 데이터를 분석하며 화면에 필요한 요소를 고민하는 과정 자체가 큰 배움이었습니다.  
특히 결제/핀테크 개발에서 데이터의 의미를 먼저 파악하고, 요구되는 통계를 어떻게 도출할것인지에 대한 판단과  
필터링 기준을 어떤 규칙으로 할 것인가를 스스로 정의하면서 어떤 개발이 필요한지 직접 경험해볼 수 있었던 점에서  
전자 금융 서비스 도메인에 대한 이해를 쌓을 수 있던 의미 있는 과정이었습니다.  
