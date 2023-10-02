import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma-client'
import { createAddress } from '@/services/address'
import {  createProduct } from '@/services/product'
import { getUserInfo } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const token = await getUserInfo(req)
  try {
    const userId = token?.id as string
    // data: {
    //   province: 'thanh_pho_ho_chi_minh',
    //   ward: 'phuong_nguyen_thai_binh',
    //   district: 'quan_1',
    //   street: 'aádsadasd',
    //   products: [ { name: 'jkhjksdfsfsd', quantity: 'ádaasda', note: 'ad23weq' } ]
    // }
    const { products, ...rest } = data
    const addressResult = await createAddress(rest, userId)
    const productsResult = await Promise.all(
      products.map(async (product: any) => {
        return createProduct(product)
      }),
    )
    await prisma.supply.create({
      data: {
        address: {
          connect: {
            id: addressResult.id,
          },
        },
        products: {
          connect: productsResult.map((res) => ({ id: res.id })),
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    })
    return NextResponse.json(productsResult)
  } catch (error) {
    console.log(error)
    return NextResponse.json(error, {
      status: 400,
    })
  }
}
