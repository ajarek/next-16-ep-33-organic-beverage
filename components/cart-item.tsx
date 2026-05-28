import type {Product} from '@/types/typeProduct'
import Image from 'next/image'

const CartItem = ({ item }: { item: Product }) => {
  return (
    <div className="w-full flex items-center gap-4">
      <div className='w-auto h-40 relative'>
      <Image src={item.image} alt={item.name} fill={true} className='object-cover 'sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
        <p>{item.name}</p>
        <p>{item.quantity}</p>
        <p>{item.price}</p> 
    </div>
  )
}

export default CartItem