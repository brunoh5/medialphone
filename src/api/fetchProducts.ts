import { api } from '@/lib/axios'

export type Product = {
  id: string
  name: string
  url: string
  rating: 0 | 1 | 2 | 3 | 4 | 5
  slug: string
  images: {
    data: {
      name: string
      thumb: {
        url: string
      }
    }[]
  }
  skus: {
    data: {
      id: string
      sku: string
      title: string
      price_sale: number
      price_discount: number
      purchase_url: string
      created_at: {
        data: string
      }
      updated_at: {
        data: string
      }
    }[]
  }
}

export interface FetchProductsResponse {
  data: Product[]
}

export async function fetchProducts() {
  const response = await api.get<FetchProductsResponse>(
    '/catalog/products?include=images,skus',
  )

  return response.data
}
