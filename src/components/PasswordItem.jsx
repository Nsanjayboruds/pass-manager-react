import React from 'react'
import  '../index.css'
import './PasswordItem.css'

function PasswordItem({ item, onDelete, showPassword }) {
  const masked = '••••••••'
  return (
    <div className="password-item">
      <div className="details">
        <p><strong>Website:</strong> {item.website}</p>
        <p><strong>Username:</strong> {item.username}</p>
        <p><strong>Password:</strong> {showPassword ? item.password : masked}</p>
      </div>
      <button className="delete-btn" onClick={() => onDelete(item.id)}>
        ❌
      </button>
    </div>
  )
}

export default PasswordItem
