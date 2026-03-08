import React, { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <select
    value={theme}
    onChange={(e) => setTheme(e.target.value)}
    className='border rounded-md px-2'
    >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
    </select>
  )
}

export default ThemeToggle