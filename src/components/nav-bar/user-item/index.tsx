import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from '@/components/ui/image'
import { cn } from '@/lib'

const getActiveClass = (pathname: string, expectPath: string) => {
  return pathname.includes(expectPath) ? 'btn-neutral' : 'btn-ghost'
}

const items = [
  {
    link: '/supplies/create',
    label: 'Gửi yêu cầu tiếp tế',
  },
  {
    link: '/supplies/history',
    label: 'Yêu cầu đã gửi',
  },
  {
    link: '/doctors',
    label: 'Bác sĩ tư vấn',
  },
]
export default function UserItem() {
  const { data: session } = useSession()
  const pathname = usePathname()

  return (
    <ul className='flex items-center justify-between w-full flex-1 ml-10 z-[inherit]'>
      <ul className='flex gap-4 items-center font-semibold'>
        {items.map((item) => {
          return (
            <Link
              href={item.link}
              key={item.link}
              className={cn(
                'btn',
                getActiveClass(pathname, item.link),
                'transition-colors duration-300'
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </ul>
      <div className='dropdown'>
        <label
          className='btn btn-ghost flex items-center gap-4 m-1 h-full'
          tabIndex={0}
        >
          <div className='avatar'>
            <div className='w-8 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2 relative'>
              <Image
                src={(session && session.user?.image) as string}
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
