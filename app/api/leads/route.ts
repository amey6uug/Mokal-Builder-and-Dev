import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const { area, service, phone } = await request.json()
  // Wire to CMS or CRM here
  console.log('Lead:', { area, service, phone })
  return Response.json({ message: 'Lead submitted successfully' })
}