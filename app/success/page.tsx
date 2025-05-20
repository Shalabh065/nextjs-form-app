'use client'
import { useSearchParams } from 'next/navigation'

export default function SuccessPage() {
  const searchParams = useSearchParams()

  const name = searchParams.get('name')
  const email = searchParams.get('email')
  const age = searchParams.get('age')
  const gender = searchParams.get('gender')
  const comments = searchParams.get('comments')

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">✅ Submission Successful!</h1>
        <p className="mb-2"><strong>Name:</strong> {name}</p>
        <p className="mb-2"><strong>Email:</strong> {email}</p>
        <p className="mb-2"><strong>Age:</strong> {age}</p>
        <p className="mb-2"><strong>Gender:</strong> {gender}</p>
        <p className="mb-2"><strong>Comments:</strong> {comments}</p>
      </div>
    </div>
  )
}
