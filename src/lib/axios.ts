import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_YAMPI_API_URL,
  headers: {
    'User-Token': env.NEXT_PUBLIC_YAMPI_USER_TOKEN,
    'User-Secret-Key': env.NEXT_PUBLIC_YAMPI_SECRET_KEY,
  },
})
