import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma-client'

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const districts = await prisma.district.findMany()
    return NextResponse.json(districts)
  } catch (error) {
    throw error
  }
}
export async function POST(req: NextRequest, res: NextResponse) {}
