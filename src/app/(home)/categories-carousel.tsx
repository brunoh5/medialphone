'use client'

import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export function CategoriesCarousel() {
  return (
    <Carousel className="mt-5">
      <CarouselContent className="before:flex-[0_0_20px] before:content-['']">
        <CarouselItem className="basis-1/3 md:basis-1/5">
          <Card className="border-none shadow-none">
            <CardContent className="flex flex-col items-center justify-center">
              <Image
                src="https://dcdn.mitiendanube.com/stores/002/546/246/themes/amazonas/1-slide-1676147974662-4855211142-aefb4055ef01b2780e01d77bc020dde21676147976-480-0.webp?1246323120"
                alt=""
                width={192}
                height={192}
              />
              <p>Apple</p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3 md:basis-1/5">
          <Card className="border-none shadow-none">
            <CardContent className="flex flex-col items-center justify-center">
              <Image
                src="https://dcdn.mitiendanube.com/stores/002/546/246/themes/amazonas/1-slide-1676147974662-8364920572-7b5b5755334dd5e9c11c0094ed52c7711676147976-480-0.webp?1246323120"
                alt=""
                width={192}
                height={192}
              />
              <p>Xiaomi</p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3 md:basis-1/5">
          <Card className="border-none shadow-none">
            <CardContent className="flex flex-col items-center justify-center">
              <Image
                src="https://dcdn.mitiendanube.com/stores/002/546/246/themes/amazonas/1-slide-1676148002795-5726847504-0c1342d6ee36053a2d0670899dff8c651676148004-480-0.webp?1246323120"
                alt=""
                width={192}
                height={192}
              />
              <p>JBL</p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3 md:basis-1/5">
          <Card className="border-none shadow-none">
            <CardContent className="flex flex-col items-center justify-center">
              <Image
                src="https://dcdn.mitiendanube.com/stores/002/546/246/themes/amazonas/1-slide-1676147974662-7291352025-e98d5d6e3acd60fcb7f78bf35342f22c1676147977-480-0.webp?1246323120"
                alt=""
                width={192}
                height={192}
              />
              <p>Apple</p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3 md:basis-1/5">
          <Card className="border-none shadow-none">
            <CardContent className="flex flex-col items-center justify-center">
              <Image
                src="https://dcdn.mitiendanube.com/stores/002/546/246/themes/amazonas/1-slide-1676148002795-5726847504-0c1342d6ee36053a2d0670899dff8c651676148004-480-0.webp?1246323120"
                alt=""
                width={192}
                height={192}
              />
              <p>JBL</p>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
