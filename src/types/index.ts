export interface CreateSupplyForm {
  province: ''
  district: ''
  ward: ''
  street: string
  products: { name: string; quantity: string; note: string }[]
}

export interface User {
  id: string
  fullname: string
  email: string
  phoneNumber: string
  image: string
}
export interface Address {
  id: string
  province: string
  district: string
  ward: string
  street: string
  user: User
}

export interface Product {
  id: string
  name: string
  quantity: string
  note: string
}
export type CreateProduct = Omit<Product, 'id'>
export type CreateAddress = Omit<Address, 'user' | 'id'>
