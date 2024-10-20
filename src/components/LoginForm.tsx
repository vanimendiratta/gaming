'use client'
import { useState } from 'react'

interface LoginFormProps {
  onLogin: (credentials: { username: string; password: string }) => void
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(credentials)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#232323] p-8 rounded-lg w-96">
      <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 rounded bg-[#1A1A1A] text-white border border-[#333]"
          value={credentials.username}
          onChange={(e) => setCredentials(prev => ({...prev, username: e.target.value}))}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-[#1A1A1A] text-white border border-[#333]"
          value={credentials.password}
          onChange={(e) => setCredentials(prev => ({...prev, password: e.target.value}))}
        />
        <button
          type="submit"
          className="w-full p-3 rounded bg-orange-500 text-white font-bold hover:bg-orange-600"
        >
          Login
        </button>
      </div>
    </form>
  )
}