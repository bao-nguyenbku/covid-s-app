'use client'

import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Loading from '@/components/ui/loading-indicator'
import { Session } from 'next-auth'
import UserItem from './user-item'

type Status = 'loading' | 'authenticated' | 'unauthenticated'
const renderItems = (session: Session | null, status: Status) => {
  switch (status) {
    case 'loading':
      return <Loading />
    case 'authenticated':
      return <UserItem />
    case 'unauthenticated':
      return (
        <ul className='flex items-center gap-2'>
          <Link href='/signin' className='btn btn-ghost'>
            Đăng nhập
          </Link>
          <Link href='/volunteer/register' className='btn btn-neutral'>
            Đăng ký tình nguyên viên
          </Link>
        </ul>
      )
    default:
      return null
  }
}
export default function NavigationBar() {
  const { data: session, status } = useSession()
  return (
    <nav className='h-fit py-3 flex items-center justify-between z-20'>
      <Link className='text-xl font-bold z-[inherit]' href='/'>
        Covid Support
      </Link>
      {renderItems(session, status)}
    </nav>
  )
}
