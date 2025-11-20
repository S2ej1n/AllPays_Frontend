import {Outlet} from 'react-router-dom';

function App() {

  return (
    <>
      <div>
        <div className="p-8 text-3xl text-blue-600 font-bold">
          Tailwind 테스트
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default App
