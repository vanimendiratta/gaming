'use client'
import { useState } from 'react'

const games = [
  {
    id: 1,
    title: 'Viking',
    image: '/viking.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Slot Game 1',
    image: '/slot1.jpg'
  },
  
]

export default function GameCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory">
        
        <div className="flex-none w-72 h-96 relative rounded-lg overflow-hidden">
          <img
            src="/api/placeholder/400/320"
            alt="Viking Game"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80">
            <h3 className="text-xl font-bold text-white">Viking</h3>
          </div>
        </div>

      
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex-none w-48 h-48 bg-[#232323] rounded-lg relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl text-orange-500">777</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
