import { CreateAddress } from '@/types'
import prisma from '@/lib/prisma-client'

export async function createAddress(data: CreateAddress, userId: string) {
  const { province, ward, district, street } = data
  try {
    return prisma.address.create({
      data: {
        province,
        ward,
        district,
        street,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    })
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}
