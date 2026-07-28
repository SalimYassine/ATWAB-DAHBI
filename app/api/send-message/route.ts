import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json()

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Format the message for WhatsApp
    const whatsappMessage = `Nouveau message de ATWAB DAHBI:\n\nNom: ${name}\nTéléphone: ${phone}\n\nMessage:\n${message}`

    // Your admin WhatsApp number (without +)
    const adminNumber = '212660728660'

    // Send via WhatsApp Web link (using wa.me API)
    // This creates a pre-filled message that can be sent
    const whatsappUrl = `https://wa.me/${adminNumber}?text=${encodeURIComponent(whatsappMessage)}`

    // If you want to use Twilio or another service in the future, you can add it here
    // For now, we'll return the WhatsApp link and store the message

    // Store the message in localStorage client-side or in a database
    const messageData = {
      name,
      phone,
      message,
      timestamp: new Date().toISOString(),
      adminNumber,
      whatsappUrl
    }

    // You can add database integration here if needed
    console.log('Message received:', messageData)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès!',
        whatsappUrl: whatsappUrl
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending message:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}
