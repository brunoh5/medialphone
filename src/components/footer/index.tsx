import { Copyright } from 'lucide-react'
import Link from 'next/link'

import { Instagram, Tiktok } from '../social-media-icons'
import { Mobile } from './mobile'

export function Footer() {
  return (
    <footer className="mt-10 bg-primary px-4 py-8 text-muted">
      <Mobile />

      <div className="hidden flex-col gap-6 p-10 md:flex">
        {/* Desktop */}
        <div className="flex items-start justify-between">
          <ul>
            <li className="uppercase">Atendimento ao cliente</li>
            <li>
              <p>
                <span className="font-extrabold">E-mail:</span>{' '}
                support@worldstor3.com.br
              </p>
            </li>
            <li>
              <p>
                <span className="font-extrabold">WhatsApp:</span>{' '}
                support@worldstor3.com.br
              </p>
            </li>
            <li>
              <p className="font-extrabold">Horário de atendimento:</p>
              <p>Seg a Sex: 09:00hs às 18:00hs</p>
              <p>Sábado, Domingo e feriados: 09:00hs às 13:00hs</p>
            </li>
            <li></li>
          </ul>

          <ul>
            <li className="uppercase">Departamentos</li>
            <li>
              <Link href="#">Inicio</Link>
            </li>
          </ul>

          <ul>
            <li className="uppercase">Informações importantes</li>
            <li>
              <Link href="#">Trocas e Devoluções</Link>
            </li>
            <li>
              <Link href="#">Termos de Serviço</Link>
            </li>
            <li>
              <Link href="#">Políticas de Privacidade</Link>
            </li>
            <li>
              <Link href="#">Perguntas Frequentes</Link>
            </li>
          </ul>

          <ul>
            <li className="uppercase">Central de atendimento</li>
            <li>
              <Link href="#">Informações de Contato</Link>
            </li>
            <li>
              <Link href="#">Rastreie seu pedido</Link>
            </li>
            <li>
              <Link href="#">Envie uma mensagem</Link>
            </li>
          </ul>
        </div>

        <div className="flex max-w-sm flex-col gap-2">
          <p>Siga-nos</p>
          <div className="flex items-center gap-4">
            <Instagram size={24} />
            <Tiktok size={24} />
          </div>
        </div>

        <p className="text-center">
          Preços e condições de pagamento exclusivos para compras neste site
          oficial, podendo variar com o tempo da oferta. Evite comprar produtos
          mais baratos ou de outras lojas, pois você pode estar sendo
          enganado(a) por um golpista. Caso você compre os mesmo produtos em
          outras lojas, não responsabilizamos por quaisquer problemas.
        </p>

        <div className="mt-5 flex items-center gap-2 text-muted">
          <div className="flex flex-col items-center justify-start gap-2">
            <div className="flex items-center justify-start gap-2">
              <Copyright size={16} />
              Nome da Empresa
            </div>
            <p>CNPJ: 00.000.000/0000-00</p>
            <p>Endereço da loja</p>
            <p>Cidade - UF</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
