import { CreateProduct } from "@/types";
import prisma from "@/lib/prisma-client";

export async function createProduct(data: CreateProduct) {
  try {
    return prisma.product.create({
      data,
    })
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}

export async function createMultipleProduct(data: CreateProduct[]) {
  try {
    return prisma.product.createMany({
      data,
    })
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}