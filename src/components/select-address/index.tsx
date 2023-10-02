'use client'
import { useFormContext } from 'react-hook-form'
import { CreateSupplyForm } from '@/types'
import hcm from '@/assets/ho-chi-minh.json'

const modalId = 'create-supply-modal'
export default function SelectAddress() {
  const { register, watch } = useFormContext<CreateSupplyForm>()
  const selectedDistrict = watch('district')

  return (
    <div className='flex gap-2'>
      <select
        className='select w-full max-w-xs input-bordered'
        {...register('province', {
          required: 'Bạn hãy chọn Tỉnh/Thành phố',
        })}
        defaultValue={hcm.codename}
      >
        <option value={''} disabled>
          Chọn Tỉnh/Thành phố
        </option>
        <option value={hcm.codename}>{hcm.name}</option>
      </select>
      <select
        className='select w-full max-w-xs input-bordered'
        defaultValue={hcm.codename}
        {...register('district', {
          required: 'Bạn hãy chọn Quận/Huyện',
        })}
      >
        <option disabled value={''}>
          Chọn Quận/Huyện
        </option>
        {hcm.districts.map((district) => {
          return (
            <option key={district.code} value={district.codename}>
              {district.name}
            </option>
          )
        })}
      </select>
      <select
        className='select w-full max-w-xs input-bordered'
        defaultValue={''}
        {...register('ward', {
          required: 'Bạn hãy chọn Phường',
        })}
      >
        <option disabled value={''}>
          Chọn Phường
        </option>
        {hcm.districts
          .find((item) => item.codename === selectedDistrict)
          ?.wards.map((ward) => {
            return (
              <option key={ward.code} value={ward.codename}>
                {ward.name}
              </option>
            )
          })}
      </select>
      <input
        type='text'
        {...register('street', {
          required: 'Bạn hãy nhập số nhà, tên đường, khu chung cư,...'
        })}
        placeholder='Số 100, đường Trần Hưng Đạo'
        className='input w-full max-w-xs input-bordered'
      />
      <button
        className='btn btn-neutral'
        onClick={() =>
          (document?.getElementById(modalId) as HTMLDialogElement)?.showModal()
        }
      >
        Chọn địa chỉ
      </button>
      <dialog id={modalId} className='modal'>
        <div className='modal-box'>
          <button
            onClick={() =>
              (document?.getElementById(modalId) as HTMLDialogElement)?.close()
            }
            className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          >
            ✕
          </button>

          <h3 className='font-bold text-lg'>Chọn địa chỉ</h3>
          <div className='flex items-center'>
            <input
              type='radio'
              aria-label='Số 10, đường Nguyễn Đình Chiểu, Quận 3, TP Hồ Chí Minh'
              className='btn'
            />
            <input
              type='radio'
              aria-label='Số 14, đường Võ Văn Kiệt, Quận 5, TP Hồ Chí Minh'
              className='btn'
            />
          </div>
        </div>
        <div
          className='modal-backdrop'
          onClick={() =>
            (document?.getElementById(modalId) as HTMLDialogElement)?.close()
          }
        />
      </dialog>
    </div>
  )
}
