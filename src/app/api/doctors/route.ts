import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma-client'

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const result = await prisma.doctor.findMany({
      include: {
        supportAreas: true
      }
    })
    return NextResponse.json(result)
  } catch (error) {
    NextResponse.json(JSON.stringify(error), {
      status: 400,
    })
    throw error
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json()
  } catch (error) {
    return NextResponse.json(JSON.stringify(error), {
      status: 400,
    })
  }
}
