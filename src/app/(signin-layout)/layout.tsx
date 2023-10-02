import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function SigninLayout({ children }: Props) {
  return (
    <main className='h-screen w-screen flex items-center justify-center overflow-hidden relative'>
      <div className='h-[800px] w-[800px] bg-violet-100 blur-[200px] absolute -top-4 -left-10 rounded-full -z-10' />
      <div className='h-[800px] w-[800px] bg-green-50 blur-[200px] absolute -top-4 right-0 rounded-full -z-10' />
      {children}
    </main>
  )
}
