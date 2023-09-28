import Image from 'next/image'
import Link from 'next/link'
import { Doctor } from '@prisma/client'

type Props = {
  data: Doctor
}

export default function DoctorCard({ data }: Props) {
  return (
    <Link className='bg-secondary-content p-2 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 border border-base-300' href={`/doctors/${data.id}`}>
      <span className='font-bold text-2xl'>{data.fullname}</span>
      <div className='divider my-2' />
      <div className='flex'>
        <div className='avatar'>
          <div className='w-36 relative'>
            <Image
              src={data.image}
              alt='doctor-thumbnail'
              fill
              sizes='(max-width: 768px) 50vw, 33vw'
              className='rounded-xl border-base-300 border-2 border-solid'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 ml-2'>
          <span>
            Chuyên khoa: <strong>{data.department}</strong>
          </span>
          <span>
            Nơi làm việc: <strong>{data.workPlace}</strong>
          </span>
          <span>
            Số điện thoại: <strong>{data.phoneNumber}</strong>
          </span>
        </div>
        {/* <Image src={} width={50} height={50} alt='doctor-thumbnail'/> */}
      </div>
    </Link>
  )
}
