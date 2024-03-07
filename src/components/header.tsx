import { MapPin, Menu, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Input } from '@/components/ui/input'

import logo from '../assets/logo.png'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <header className="w-full bg-primary  text-muted">
      <div className="flex flex-col gap-2 p-4 md:hidden">
        {/* Mobile */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Menu />
            <h1>
              <span className="sr-only">Medial Phone</span>
              <div className="size-16">
                <Image
                  src={logo}
                  alt="Medial phone logo"
                  className="h-full w-full object-cover"
                />
              </div>
            </h1>
          </div>
          <div className="flex items-center justify-end gap-2">
            <User />
            <MapPin />
            <ShoppingCart />
          </div>
        </div>
        <Input className="rounded" placeholder="O que está buscando?" />
      </div>

      <div className="hidden items-center justify-between gap-2 p-10 md:flex">
        {/* Desktop */}
        <h1>
          <span className="sr-only">Medial Phone</span>
          <div className="h-16 w-28">
            <Image
              src={logo}
              alt="Medial phone logo"
              className="h-full w-full object-cover"
            />
          </div>
        </h1>

        <div className="w-[400px]">
          <Input
            className="rounded bg-muted"
            placeholder="O que está buscando?"
          />
        </div>

        <div className="flex items-center justify-end space-x-4">
          <div className="flex items-center justify-center gap-4">
            <User />
            <div>
              <p className="text-xs">Entrar / Cadastrar</p>
              <p className="text-lg font-bold">Minha Conta</p>
            </div>
          </div>
          <Separator orientation="vertical" className="text-muted-foreground" />
          <Link href="#" className="flex items-center justify-center gap-4">
            <MapPin />
            <div>
              <p className="text-xs">Onde está meu produto?</p>
              <p className="text-lg font-bold">Rastrear pedido</p>
            </div>
          </Link>
          <Separator orientation="vertical" className="bg-muted-foreground" />
          <div className="flex items-center justify-center gap-2">
            <ShoppingCart />
            <p>Carrinho</p>
          </div>
        </div>
      </div>
    </header>
  )
}
