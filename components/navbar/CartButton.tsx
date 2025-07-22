import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { Button } from '../ui/button';
import Link from 'next/link';

export default async function CartButton() {
  const numItemsInCart = 6;
  return (
    <Button asChild size='icon' variant='outline' className='flex justify-center items-center relative'>
      <Link href='/cart'>
        <LuShoppingCart></LuShoppingCart>
        <span className='absolute -top-3 -right-3 flex justify-center items-center bg-primary text-white rounded-full w-6 h-6 text-xs'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  )
}
