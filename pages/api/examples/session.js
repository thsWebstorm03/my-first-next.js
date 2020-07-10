// This is an example of how access a session from an API route
import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  console.log('Session', JSON.stringify(session, null, 2))
  res.end()
}