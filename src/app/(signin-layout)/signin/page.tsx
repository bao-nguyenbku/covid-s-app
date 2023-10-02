'use client'

import React from 'react'
import Link from 'next/link'
import { MoveLeft } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface UserInput {
  phoneNumber: number
  password: string
}

export default function SigninPage() {
  const { register, handleSubmit } = useForm<UserInput>()
  const router = useRouter()
  const onSubmit = handleSubmit(async (data) => {
    const response = await signIn('credentials', {
      redirect: false,
      ...data,
    })
    if (!response) {
      console.log('Unknown Error')
      return
    }
    if (response.error) {
      console.log(response.error)
      return
    }
    if (response?.ok) {
      router.replace('/')
      return
    }
  })

  return (
    <div className='border-2 border-base-200 border-solid w-[500px] max-w-3xl p-9 flex flex-col rounded-3xl shadow-2xl shadow-slate-200 z-10 bg-white'>
      <Link href='/' className='btn btn-ghost w-fit normal-case'>
        <MoveLeft />
        Back to Home
      </Link>
      <h3 className='text-2xl my-10'>
        Đăng nhập vào <strong>Covid Support</strong> ngay
      </h3>
      <form onSubmit={onSubmit} className='flex flex-col gap-4 w-full'>
        <div>
          <label className='label'>Số điện thoại của bạn</label>
          <input
            className='input input-bordered w-full'
            {...register('phoneNumber')}
          />
        </div>
        <div>
          <label className='label'>Mật khẩu của bạn</label>
          <input
            className='input input-bordered w-full'
            type='password'
            {...register('password')}
          />
          <label className='label'>
            <Link className='label-text-alt underline' href='/'>
              Quên mật khẩu?
            </Link>
          </label>
        </div>
        <button type='submit' className='btn btn-neutral mt-24'>
          Đăng nhập
        </button>
      </form>
      <div className='divider'>Hoặc</div>
      <button className='btn btn-secondary'>Đăng nhập bằng Google</button>
    </div>
  )
}
