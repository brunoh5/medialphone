'use client'

import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
// import Autoplay from "embla-carousel-autoplay"

export function Banner() {
  return (
    <Carousel
    // plugins={[
    //   Autoplay({
    //     delay: 8000,
    //   }),
    // ]}
    >
      <CarouselContent>
        <CarouselItem className="h-72 md:h-96">
          <Image src="/banner.gif" alt="" sizes="100vw" fill />
        </CarouselItem>
        {/* <CarouselItem className='h-36'>
          <Image src='/banner.gif' alt='' sizes="100vw" fill />
        </CarouselItem>
        <CarouselItem className='h-36'>
          <Image src='/banner.gif' alt='' fill={true} className='w-full h-full' />
        </CarouselItem> */}
      </CarouselContent>
    </Carousel>
  )
}
