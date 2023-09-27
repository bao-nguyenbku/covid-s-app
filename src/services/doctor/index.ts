import { BASE_API_URL } from '@/constants'
import { Doctor } from '@prisma/client'

export async function getDoctors(): Promise<Doctor[]> {
  return fetch(BASE_API_URL + '/api/doctors', {
    next: {
      revalidate: 2 * 24 * 3600, // second
    },
  }).then(res => res.json())
}
