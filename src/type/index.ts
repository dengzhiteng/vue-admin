export interface Ilogoin {
  username: string
  password: string
}

export interface IuserInfo {
  username: string
  age: number
  sex: string
}

export interface IuserList {
  username: string
  age: number
  sex: string
  phone?: string | number
  [propName: string]: any
}

export interface IgoodsList {
  id: string
  goodsName: string
  price: number
  stock: number
  desc?: string
  img?: string
  [propName: string]: any
}
