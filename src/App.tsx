import {Outlet} from 'react-router-dom';
import MobileNavbar from './components/MobileNavbar';
import DesktopNavbar from './components/DesktopNavbar';

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <MobileNavbar />
        <DesktopNavbar />
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
