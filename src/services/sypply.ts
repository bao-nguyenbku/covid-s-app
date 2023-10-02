import { CreateSupplyForm } from '@/types'
import { BASE_API_URL } from '@/constants'

export default function createSupply(data: CreateSupplyForm) {
  return fetch(BASE_API_URL + '/supplies', {
    method: 'post',
    body: JSON.stringify(data),
  })
}
