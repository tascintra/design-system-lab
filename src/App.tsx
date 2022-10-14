import './styles/global.css';
import { Logo } from './styles/Logo';

export function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gray-500 flex items-center justify-center text-gray-100">
        <Logo />
      </div>
    </>
  )
}
