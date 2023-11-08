import React from 'react'
import {Link} from 'react-router-dom'

export default function Notfound() {
  return (
    <div className='delete-message'><h3>Sayfa bulunamadı</h3>
    <p>Üzgünüz tanımsız bir istekte bulundunuz</p>
    <Link to={'/'}>Anasayfaya dön</Link>
    </div>
  )
}
