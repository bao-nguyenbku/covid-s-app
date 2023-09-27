import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function SigninLayout({ children }: Props) {
  return (
    <main className='relative h-screen w-screen flex items-center justify-center overflow-hidden'>
      <div className='h-[400px] w-[400px] bg-rose-300 blur-[200px] absolute -top-48 left-36 rounded-full'></div>
      {children}
      <div className='h-[400px] w-[400px] bg-green-200 blur-[200px] absolute -bottom-32 -right-10 rounded-full'></div>
    </main>
  )
}
