'use client'

import { useQuery } from '@tanstack/react-query'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

import { getProduct } from '@/api/getProduct'
import { Rate } from '@/components/rating'
import { Card, CardContent } from '@/components/ui/card'

export default function Product({ params }: { params: { id: string } }) {
  const { data: product } = useQuery({
    queryKey: ['products', params.id],
    queryFn: () => getProduct(params.id),
  })

  return (
    <main className="flex flex-col gap-5 p-5">
      <Card>
        <CardContent className="p-6">
          <div className="max-h-[380px] max-w-[380px] overflow-hidden rounded ">
            {/* Product Slider */}
            <Image
              src={
                'https://dcdn.mitiendanube.com/stores/002/546/246/products/141-83e186db97e1fe475416769082746373-1024-1024.png'
              }
              alt={``}
              width={380}
              height={380}
              className="h-full w-full object-cover"
            />
          </div>
          <ul className="flex justify-center space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            {/* Product Preview */}
            {Array.from({ length: 4 }).map((_, index) => (
              <li
                key={index}
                className="cursor-pointer  overflow-hidden rounded"
              >
                <Image
                  src={
                    'https://dcdn.mitiendanube.com/stores/002/546/246/products/141-83e186db97e1fe475416769082746373-1024-1024.png'
                  }
                  alt={``}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover object-[50%_50%]"
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <p>{product?.name}</p>
          <Rate rate={product?.rating} />

          <ul className="flex justify-start space-x-2">
            {/* Product Preview */}
            {Array.from({ length: 3 }).map((_, index) => (
              <li
                key={index}
                className="cursor-pointer  overflow-hidden rounded data-[active=true]:border data-[active=true]:border-primary"
                data-active={true}
              >
                <Image
                  src={
                    'https://dcdn.mitiendanube.com/stores/002/546/246/products/141-83e186db97e1fe475416769082746373-1024-1024.png'
                  }
                  alt={``}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover object-[50%_50%]"
                />
              </li>
            ))}
          </ul>

          <div>
            <p className="text-sm">
              De{' '}
              <s className=" text-primary">
                {product?.skus.data[0].price_sale.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </s>
            </p>
            <div className="flex items-center gap-4">
              <p className="text-3xl font-bold text-green-500">
                {product?.skus.data[0].price_discount.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
              <span className="flex items-center justify-start rounded-full bg-primary px-[6px] py-[2px] text-xs text-muted">
                {/* Calculo de porcentagem */}
                <ArrowDown size={12} />
                {product &&
                  Math.floor(
                    ((product?.skus.data[0].price_discount -
                      product?.skus.data[0].price_sale) /
                      product?.skus.data[0].price_sale) *
                      100 *
                      -1,
                  )}
                %
              </span>
            </div>

            <p>
              em até <span className="font-bold">12x</span> de{' '}
              <span className="font-bold text-primary">
                {product &&
                  Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.skus.data[0].price_discount / 12)}
              </span>
            </p>
            <div>
              <p>Ver opções de pagamento</p>
              <p className="inline rounded-full bg-primary px-[6px] py-[2px] text-muted">
                {product &&
                  Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(
                    product?.skus.data[0].price_sale -
                      product.skus.data[0].price_discount,
                  )}{' '}
                de desconto
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
