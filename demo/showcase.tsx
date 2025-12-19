// Exo Theme - Syntax Showcase
import { useState, useEffect } from 'react'

interface User {
  id: number
  name: string
  isActive: boolean
}

const API_URL = 'https://api.example.com'

/** Fetches user data from the API */
async function fetchUser(id: number): Promise<User | null> {
  try {
    const response = await fetch(`${API_URL}/users/${id}`)
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetchUser(userId).then(setUser)
  }, [userId])

  const status = user?.isActive ? 'Online' : 'Offline'
  const count = 42

  return <div className="profile">{user?.name ?? status}</div>
}
