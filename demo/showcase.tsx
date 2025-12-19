// Exo Theme - Syntax Showcase
import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
  email: string
  isActive: boolean
}

const API_URL = 'https://api.example.com'
const MAX_RETRIES = 3

/**
 * Fetches user data from the API
 * @param userId - The user's unique identifier
 */
async function fetchUser(userId: number): Promise<User | null> {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`)
    if (!response.ok) {
      throw new Error('Failed to fetch user')
    }
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUser(userId).then((data) => {
      setUser(data)
      setLoading(false)
    })
  }, [userId])

  if (loading) {
    return <div className="spinner">Loading...</div>
  }

  return (
    <div className="user-profile">
      <h1>{user?.name ?? 'Unknown'}</h1>
      <p>Email: {user?.email}</p>
      <span className={user?.isActive ? 'active' : 'inactive'}>
        {user?.isActive ? 'Online' : 'Offline'}
      </span>
    </div>
  )
}

// Numbers, booleans, and regex
const config = {
  port: 3000,
  debug: true,
  ratio: 3.14159,
  pattern: /^[a-z]+$/gi,
}
