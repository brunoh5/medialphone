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

interface GetProductResponse {
  data: Product
}

export async function getProduct(id: string) {
  const { data } = await api.get<GetProductResponse>(
    `/catalog/products/${id}?include=images,seo,skus`,
  )

  return data.data
}
