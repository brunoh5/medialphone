import Image from 'next/image'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

import { type Product } from '@/api/fetchProducts'
import { Rate } from '@/components/rating'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { CarouselItem } from '@/components/ui/carousel'

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  product: Product
}

export function ProductCard({ product, ...rest }: ProductCardProps) {
  return (
    <CarouselItem className="basis-3/4 md:basis-1/4" {...rest}>
      <Link href={`/product/${product.id}`}>
        <Card className="bg-muted">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="h-[250px] w-[250px] rounded">
              <Image
                src={product.images.data[0].thumb.url ?? ''}
                alt=""
                width={250}
                height={250}
                className="h-full w-full"
              />
            </div>

            <p className="h-12 overflow-hidden text-ellipsis">{product.name}</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <p>A partir de</p>
            <div className="flex items-center justify-center gap-4">
              <p className="text-lg font-bold text-green-600">
                {product.skus.data[0].price_discount.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
              <s className="text-xs text-primary">
                {product.skus.data[0].price_sale.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </s>
            </div>
            <p>
              em até <span className="font-bold">12x</span> de{' '}
              <span className="font-bold text-primary">
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product.skus.data[0].price_discount / 12)}
              </span>
            </p>
            <div className="itens-center flex gap-2">
              <Rate rate={product.rating} />
              {/* <span>(846)</span> */}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </CarouselItem>
  )
}
