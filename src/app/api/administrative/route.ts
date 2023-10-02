import { NextResponse } from "next/server";
import hcm from '@/assets/ho-chi-minh.json'

export function GET() {
  return NextResponse.json(hcm)
}