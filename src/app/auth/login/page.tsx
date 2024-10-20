'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      
      if (!formData.username || !formData.password) {
        throw new Error('Please fill in all fields')
      }

   
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('username', formData.username)
      
   
      router.push('/')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A] px-4">
      <div className="w-full max-w-md">
   
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-500">RANOLPH</h1>
          <p className="text-gray-400 mt-2">Welcome back! Please login to continue.</p>
        </div>

  
        <div className="bg-[#232323] rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-gray-700 text-white 
                         focus:ring-2 focus:ring-orange-500 focus:border-transparent
                         transition-colors placeholder-gray-500"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-gray-700 text-white 
                         focus:ring-2 focus:ring-orange-500 focus:border-transparent
                         transition-colors placeholder-gray-500"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-700 bg-[#1A1A1A] text-orange-500 
                           focus:ring-orange-500 focus:ring-offset-0"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <button type="button" className="text-sm text-orange-500 hover:text-orange-400">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-lg bg-orange-500 hover:bg-orange-600 
                       text-white font-medium transition-colors
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Don&apos;t have an account?{' '}
          <button className="text-orange-500 hover:text-orange-400 font-medium">
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}