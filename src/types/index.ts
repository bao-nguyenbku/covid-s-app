export interface CreateSupplyForm {
  province: string
  district: string
  ward: string
  street: string
  products: { name: string; quantity: string; note: string }[]
}