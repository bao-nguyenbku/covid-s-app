'use client'
import SelectAddress from '@/components/select-address'
import { useForm, useFieldArray, FormProvider } from 'react-hook-form'
import { Delete } from 'lucide-react'
import { cn } from '@/lib'
import { CreateSupplyForm } from '@/types'

export default function CreateSupplyRequest() {
  const formHandler = useForm<CreateSupplyForm>({
    defaultValues: {
      province: '',
      ward: '',
      district: '',
      street: '',
      products: [{ name: '', quantity: '', note: '' }],
    },
  })
  const {
    register,
    unregister,
    control,
    handleSubmit,
    formState: { errors },
  } = formHandler
  const { fields, remove, append } = useFieldArray({
    name: 'products',
    control,
    shouldUnregister: true,
  })
  console.log(errors)
  const onSubmit = async (data: CreateSupplyForm) => {
    console.log(data)
  }
  return (
    <div className='z-10 max-w-7xl w-full mx-auto'>
      <h1 className='font-bold text-2xl text-center'>Gửi yêu cầu tiếp tế</h1>
      <FormProvider {...formHandler}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
          <div className='flex flex-col mt-10'>
            <h2 className='font-bold text-2xl mb-4'>Địa chỉ</h2>
            <SelectAddress />
          </div>
          <div className='divider' />
          <div>
            <h2 className='font-bold text-2xl mb-4'>
              Sản phẩm tiếp tế ({fields.length})
            </h2>
            {fields.map((field, index) => {
              return (
                <div className='flex gap-2 my-4' key={field.id}>
                  <div className='form-control'>
                    <input
                      {...register(`products.${index}.name`, {
                        required: 'Product name should not be empty',
                      })}
                      className={cn(
                        'input input-bordered',
                        errors &&
                          errors.products &&
                          errors.products[index] &&
                          errors.products[index]?.name &&
                          'input-error',
                      )}
                      placeholder='Tên sản phẩm'
                    />
                    {errors && errors.products && errors.products[index] && (
                      <label className='label'>
                        <span className='label-text-alt text-error'>
                          {errors.products[index]?.name?.message}
                        </span>
                      </label>
                    )}
                  </div>
                  <div className='form-control'>
                    <input
                      {...register(`products.${index}.quantity`, {
                        required: 'Quantity should not be empty',
                        deps: ['1'],
                      })}
                      className={cn(
                        'input input-bordered',
                        errors &&
                          errors.products &&
                          errors.products[index] &&
                          errors.products[index]?.quantity &&
                          'input-error',
                      )}
                      placeholder='Số lượng'
                    />
                    {errors && errors.products && errors.products[index] && (
                      <label className='label'>
                        <span className='label-text-alt text-error'>
                          {errors.products[index]?.quantity?.message}
                        </span>
                      </label>
                    )}
                  </div>
                  <div className='form-control'>
                    <input
                      {...register(`products.${index}.note`, {
                        required: false,
                      })}
                      className={cn('input input-bordered')}
                      placeholder='Ghi chú thêm'
                    />
                  </div>
                  <div className='tooltip' data-tip='Delete'>
                    <button
                      className={cn('btn btn-accent')}
                      onClick={() => {
                        unregister(`products.${index}.name`)
                        unregister(`products.${index}.quantity`)
                        unregister(`products.${index}.note`)
                        remove(index)
                      }}
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
          <button className='btn btn-primary mx-auto' type='submit'>
            Gửi yêu cầu
          </button>
        </form>
      </FormProvider>
    </div>
  )
}
