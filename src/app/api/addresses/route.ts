import { NEXTAUTH_SECRET } from '@/constants'
import { getUserInfo } from '@/lib/auth'

import { NextRequest, NextResponse } from 'next/server'
import { createAddress } from '@/services/address'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const token = await getUserInfo(req)
  const userId = token?.id as string
  const result = await createAddress(data, userId)
  return NextResponse.json(result)
}

export async function GET(req: NextRequest) {
  const token = await getUserInfo(req)
  return NextResponse.json(token)
}
