'use client'
import { useRef } from "react"

export default function SelectAddress() {
  const modalId = 'create-supply-modal'
  const dialogRef = useRef<HTMLDialogElement>(null)
  return (
    <div className='flex gap-2'>
      <select
        className='select w-full max-w-xs input-bordered'
        defaultValue={1}
      >
        <option value={1} disabled>
          Chọn Tỉnh/Thành phố
        </option>
        <option value={2}>Hồ Chí Minh</option>
      </select>
      <select className='select w-full max-w-xs input-bordered'>
        <option disabled selected>
          Chọn Quận/Huyện
        </option>
        <option>Quận 1</option>
        <option>Quận 2</option>
        <option>Quận 3</option>
      </select>
      <select className='select w-full max-w-xs input-bordered'>
        <option disabled selected>
          Chọn Phường
        </option>
        <option>Phường A</option>
        <option>Phường B</option>
        <option>Phường C</option>
      </select>
      <input
        type='text'
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
        <div className='modal-backdrop' onClick={() => (document?.getElementById(modalId) as HTMLDialogElement)?.close()}/>
      </dialog>
    </div>
  )
}
