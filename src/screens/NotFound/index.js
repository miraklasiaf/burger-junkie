import { Link } from '@reach/router'
import React from 'react'

export default function NotFound () {
    return (
        <div className="bg-blue-100 flex flex-col items-center justify-center px-5 pt-5 pb-64 border-content">
            <p>Maaf, halaman yang Anda cari tidak ditemukan</p>
            <p>Kembali ke <Link to='/' className="italic text-blue-800">Halaman Utama</Link></p>
        </div>
    )
}