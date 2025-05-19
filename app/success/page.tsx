'use client'

import { useEffect, useState } from 'react'

export default function SuccessPage() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const stored = localStorage.getItem('submittedData')
    if (stored) {
      setData(JSON.parse(stored))
    }
  }, [])

  if (!data) return <div className="p-6">No data submitted.</div>

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Submitted Data</h2>
        <div className="space-y-3">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Age:</strong> {data.age}</p>
          <p><strong>Gender:</strong> {data.gender}</p>
          <p><strong>Comments:</strong> {data.feedback}</p>
        </div>
      </div>
    </main>
  )
}
