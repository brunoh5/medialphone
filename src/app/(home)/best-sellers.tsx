'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import { fetchProducts } from '@/api/fetchProducts'
import { Carousel, CarouselContent } from '@/components/ui/carousel'

import { ProductCard } from './product-card'

export function BestSellers() {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  return (
    <div className="flex flex-col gap-4">
      {/* Mais vendidos */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="inline border-b-8 border-primary text-2xl font-bold">
            Mais vendidos
          </h2>
          <Link href="#" className="font-semibold text-primary">
            Ver tudo
          </Link>
        </div>
      </div>

      <Carousel>
        <CarouselContent className="before:flex-[0_0_20px] before:content-[''] after:flex-[0_0_20px] after:content-['']">
          {isLoading ? (
            <p>Carregando</p>
          ) : (
            products?.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
