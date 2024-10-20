'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import GameCarousel from '@/components/GameCarousel'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [router])

  return (
    <main className="flex min-h-screen bg-[#1A1A1A]">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <GameCarousel />
        </div>
      </div>
    </main>
  )
}
