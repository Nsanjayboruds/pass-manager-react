import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PasswordItem from '../components/PasswordItem'
import '../index.css'
import './PasswordManager.css'
function PasswordManager() {
  const [passwords, setPasswords] = useState([])
  const [website, setWebsite] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [showPasswords, setShowPasswords] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (website && username && password) {
      const newEntry = {
        id: uuidv4(),
        website,
        username,
        password,
      }
      setPasswords(prev => [...prev, newEntry])
      setWebsite('')
      setUsername('')
      setPassword('')
    }
  }

  const handleDelete = id => {
    setPasswords(passwords.filter(p => p.id !== id))
  }

  const filteredPasswords = passwords.filter(p =>
    p.website.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <div className="app-container">
      <h1 className="title">🔐 Password Manager</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="search-show">
        <input
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={showPasswords}
            onChange={() => setShowPasswords(!showPasswords)}
          />
          Show Passwords
        </label>
      </div>

      <div className="passwords-list">
        {filteredPasswords.length === 0 ? (
          <p>No Passwords Found</p>
        ) : (
          filteredPasswords.map(p => (
            <PasswordItem
              key={p.id}
              item={p}
              onDelete={handleDelete}
              showPassword={showPasswords}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default PasswordManager
