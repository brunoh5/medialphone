import { Copyright } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../assets/logo.png'
import { Instagram, Tiktok } from '../social-media-icons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

export function Mobile() {
  return (
    <div className="flex flex-col md:hidden">
      {/* Mobile */}
      <h2 className="flex w-full items-center justify-center">
        <span className="sr-only">Worldstor3</span>
        <div className=" size-9">
          <Image src={logo} alt="Worldstore logo" className="h-full w-full" />
        </div>
      </h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="uppercase ">
            Atendimento ao cliente
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            <p>
              <span className="font-extrabold">E-mail:</span>{' '}
              support@worldstor3.com.br
            </p>
            <p>
              <span className="font-extrabold">WhatsApp:</span>{' '}
              support@worldstor3.com.br
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-extrabold">Horário de atendimento:</p>
              <p>Seg a Sex: 09:00hs às 18:00hs</p>
              <p>Sábado, Domingo e feriados: 09:00hs às 13:00hs</p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="uppercase">
            Departamentos
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            <Link href="#">Inicio</Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="uppercase">
            Informações importantes
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            <Link href="#">Trocas e Devoluções</Link>
            <Link href="#">Termos de Serviço</Link>
            <Link href="#">Políticas de Privacidade</Link>
            <Link href="#">Perguntas Frequentes</Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="uppercase">
            Central de atendimento
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            <Link href="#">Informações de Contato</Link>
            <Link href="#">Rastreie seu pedido</Link>
            <Link href="#">Envie uma mensagem</Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-5 flex flex-col items-center gap-2 text-muted">
        <div className="flex flex-col items-center gap-2">
          <p>Siga-nos</p>
          <div className="flex items-center justify-center gap-4">
            <Instagram size={24} />
            <Tiktok size={24} />
          </div>
        </div>

        <p className="text-justify">
          Preços e condições de pagamento exclusivos para compras neste site
          oficial, podendo variar com o tempo da oferta. Evite comprar produtos
          mais baratos ou de outras lojas, pois você pode estar sendo
          enganado(a) por um golpista. Caso você compre os mesmo produtos em
          outras lojas, não responsabilizamos por quaisquer problemas.
        </p>

        <div className="flex flex-col items-center justify-start gap-2">
          <div className="flex items-center justify-start gap-2">
            <Copyright size={16} />
            Nome da empresa
          </div>
          <p>CNPJ: 00.000.000/0000-00</p>
          <p>Endereço da loja</p>
          <p>Cidade - UF</p>
        </div>
      </div>
    </div>
  )
}
