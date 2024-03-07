import { Star } from 'lucide-react'

type RateRange = {
  rate: 0 | 1 | 2 | 3 | 4 | 5 | undefined
}

export function Rate({ rate = 5 }: RateRange) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rate }).map((_, index) => (
        <Star key={index} size={24} fill="#FDBC00" stroke="transparent" />
      ))}
    </div>
  )
}
