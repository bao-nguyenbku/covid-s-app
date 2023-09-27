import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function UserItem(props: Props) {
  const { data: session } = useSession()
  return (
    <ul className='flex items-center justify-between w-full flex-1 ml-10 z-[inherit]'>
      <ul className='flex gap-4 items-center font-semibold'>
        <Link href='/supplies/create' className='btn btn-ghost'>Gửi yêu cầu tiếp tế</Link>
        <Link href='/supplies' className='btn btn-ghost'>Yêu cầu đã gửi</Link>
        <Link href='/doctors' className='btn btn-ghost'>Bác sĩ tư vấn</Link>
      </ul>
      <div className='dropdown'>
        <label
          className='btn btn-ghost flex items-center gap-4 m-1 h-full'
          tabIndex={0}
        >
          <div className='avatar'>
            <div className='w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 relative'>
              <Image
                src={(session && session.user.image) as string}
                alt='user-avatar'
                fill
              />
            </div>
          </div>
          <span className='font-bold'>{session && session.user.name}</span>
        </label>
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <li>
            <button
              onClick={() =>
                signOut({
                  callbackUrl: '/',
                  redirect: false,
                })
              }
            >
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </ul>
  )
}
