import Image from 'next/image'
import Link from 'next/link'

import { Rate } from '@/components/rating'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import { Banner } from './banner'
import { BestSellers } from './best-sellers'
import { CategoriesCarousel } from './categories-carousel'

export default function Home() {
  return (
    <main>
      <Banner />
      <CategoriesCarousel />
      <BestSellers />

      <div className="flex flex-col gap-4">
        {/* Limpeza */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h2 className="inline border-b-8 border-primary text-2xl font-bold">
              Produtos novos
            </h2>
            <Link href="#" className="mt-4 rounded font-semibold text-primary">
              Ver tudo
            </Link>
          </div>
        </div>

        <Carousel>
          <CarouselContent className="before:flex-[0_0_20px] before:content-[''] after:flex-[0_0_20px] after:content-['']">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-3/4">
                <Card className="bg-muted">
                  <CardContent className="flex flex-col items-center justify-center">
                    <div className="overflow-hidden rounded">
                      <Image
                        src="https://dcdn.mitiendanube.com/stores/002/546/246/products/151-c3ca02698936f935dc16769083354463-1024-1024.png"
                        alt=""
                        width={272}
                        height={272}
                      />
                    </div>

                    <p>Apple iPhone 14 Pro E-SIM</p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <p>A partir de</p>
                    <div>
                      <p className="text-green-600">R$ 8.387,99</p>
                      <s className="text-primary">R$ 9.319,99</s>
                    </div>
                    <p>
                      em até <span className="font-bold">12x</span> de R$ 811,12
                    </p>
                    <div className="itens-center flex gap-2">
                      <Rate rate={5} />
                      <span>(846)</span>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="mt-10 flex flex-col gap-4 bg-primary pb-6">
        <div className="flex flex-col items-start p-5">
          <h2 className="inline border-b-8 border-primary text-2xl font-bold">
            Conforto e Bem Estar
          </h2>
          <p>
            Uma seleção especial da _____ com produtos especiais que promovem o
            relaxamento e alívio de dores musculares! Conheça agora
          </p>
          <Link
            href="#"
            className="bg-secondary px-4 py-2 font-semibold text-primary"
          >
            Saber mais
          </Link>
        </div>

        <Carousel>
          <CarouselContent className="before:flex-[0_0_20px] before:content-[''] after:flex-[0_0_20px] after:content-['']">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-3/4">
                <Card className="bg-muted">
                  <CardContent>
                    <div className="overflow-hidden rounded">
                      <Image
                        src="https://dcdn.mitiendanube.com/stores/002/546/246/products/151-c3ca02698936f935dc16769083354463-1024-1024.png"
                        alt=""
                        width={272}
                        height={272}
                      />
                    </div>

                    <p>Apple iPhone 14 Pro E-SIM</p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <p>A partir de</p>
                    <div>
                      <p className="text-green-600">R$ 8.387,99</p>
                      <s className="text-primary">R$ 9.319,99</s>
                    </div>
                    <p>
                      em até <span className="font-bold">12x</span> de R$ 811,12
                    </p>
                    <div className="itens-center flex gap-2">
                      <Rate rate={5} />
                      <span>(846)</span>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </main>
  )
}
