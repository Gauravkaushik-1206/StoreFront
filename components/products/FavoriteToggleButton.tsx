import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { Button } from '../ui/button';

export default function FavoriteToggleButton({productId}:{productId: string}) {
  return (
    <Button size='icon' variant='outline' className='p-2 cursor-pointer'>
      <FaHeart></FaHeart>
    </Button>
  )
}
