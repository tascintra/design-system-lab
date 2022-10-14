import { Heading } from './components/Heading';
import { Text } from './components/Text';
import './styles/global.css';
import { Logo } from './styles/Logo';

export function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gray-500 flex items-center justify-center text-gray-100">
        <Logo />

        <Heading size='lg'>
          Ignite Lab
        </Heading>

        <Text size='lg' className='text-gray-300'>Faça login e comece a usar!</Text>
      </div>
    </>
  )
}
