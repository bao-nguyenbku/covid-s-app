import { ReactNode } from 'react'
import NavigationBar from '@/components/nav-bar'

type Props = {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <main className='lg:px-20 px-10'>
      <div className='h-[800px] w-[800px] bg-violet-50 blur-[200px] absolute -top-4 -left-10 rounded-full -z-10' />
      <div className='h-[800px] w-[800px] bg-green-50 blur-[200px] absolute -top-4 right-0 rounded-full -z-10' />
      <NavigationBar />
      {children}
    </main>
  )
}
