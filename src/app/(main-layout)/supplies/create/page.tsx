'use client'
import SelectAddress from '@/components/select-address'
import { useForm, useFieldArray } from 'react-hook-form'
import { Delete } from 'lucide-react'

interface CreateSupplyForm {
  address: string
  products: { name: string; quantity: string; note: string }[]
}
export default function CreateSupplyRequest() {
  const { register, watch, control, handleSubmit } = useForm<CreateSupplyForm>()
  const { fields, remove, append } = useFieldArray({
    name: 'products',
    control,
  })
  const onSubmit = async (data: CreateSupplyForm) => {
    console.log(data)
  }
  return (
    <div className='z-10 max-w-7xl w-full mx-auto'>
      <h1 className='font-bold text-2xl text-center'>Gửi yêu cầu tiếp tế</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col mt-10'>
          <h2 className='font-bold text-2xl mb-4'>Địa chỉ</h2>
          <SelectAddress />
        </div>
        <div className='divider' />
        <div>
          <h2 className='font-bold text-2xl mb-4'>Sản phẩm tiếp tế</h2>
          {fields.map((field, index) => {
            return (
              <div className='flex gap-2 my-4' key={field.id}>
                <input
                  {...register(`products.${index}.name`, {
                    required: true,
                  })}
                  className='input input-bordered'
                  placeholder='Tên sản phẩm'
                />
                <input
                  {...register(`products.${index}.quantity`, {
                    required: true,
                  })}
                  className='input input-bordered'
                  placeholder='Số lượng'
                />
                <input
                  {...register(`products.${index}.note`, {
                    required: true,
                  })}
                  className='input input-bordered'
                  placeholder='Ghi chú thêm'
                />
                <div className='tooltip' data-tip='Delete'>
                  <button
                    className='btn btn-accent'
                    onClick={() => remove(index)}
                  >
                    <Delete />
                  </button>
                </div>
              </div>
            )
          })}
          <button
            className='btn btn-ghost'
            onClick={() =>
              append({
                name: '',
                quantity: '',
                note: '',
              })
            }
          >
            Thêm mới
          </button>
        </div>
        <button className='btn btn-primary' type='submit'>Gửi yêu cầu</button>
      </form>
    </div>
  )
}
