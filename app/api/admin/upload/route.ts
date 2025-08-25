import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// Admin authorized emails - same as in admin page
const AUTHORIZED_ADMINS = [
  'vaibhavmalviyaji@gmail.com',
  'tiwarianurag342407@gmail.com'
]

// Check if user is authorized admin
async function checkAdminAuth(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const userCookie = cookieStore.get('user')
    
    if (!userCookie) {
      return { authorized: false, user: null }
    }

    const user = JSON.parse(userCookie.value)
    const isAuthorized = AUTHORIZED_ADMINS.includes(user.email)
    
    return { authorized: isAuthorized, user }
  } catch (error) {
    console.error('Auth check error:', error)
    return { authorized: false, user: null }
  }
}

// Google Drive folder ID from the provided link
const GOOGLE_DRIVE_FOLDER_ID = '12QvTwqjDMSAa0m8WhuylKHsejMrbMrYH'

// For now, we'll simulate Google Drive upload by saving to public/uploads
// In production, you would integrate with Google Drive API
async function uploadToGoogleDrive(file: File, fileName: string): Promise<string> {
  try {
    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    // For now, we'll save to public/uploads directory
    // In production, this should be replaced with actual Google Drive API integration
    const fs = require('fs/promises')
    const path = require('path')
    
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    
    // Create uploads directory if it doesn't exist
    try {
      await fs.access(uploadsDir)
    } catch {
      await fs.mkdir(uploadsDir, { recursive: true })
    }
    
    const filePath = path.join(uploadsDir, fileName)
    await fs.writeFile(filePath, buffer)
    
    // Return the public URL
    const publicUrl = `/uploads/${fileName}`
    
    // Log for debugging - in production, this would be the Google Drive file ID/URL
    console.log(`File uploaded: ${fileName} -> ${publicUrl}`)
    console.log(`Would be saved to Google Drive folder: ${GOOGLE_DRIVE_FOLDER_ID}`)
    
    return publicUrl
  } catch (error) {
    console.error('Upload error:', error)
    throw new Error('Failed to upload file')
  }
}

export async function POST(request: NextRequest) {
  const { authorized } = await checkAdminAuth(request)
  
  if (!authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Only image files are allowed' }, { status: 400 })
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'File too large. Maximum size is 5MB' }, { status: 400 })
    }

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileExtension = file.name.split('.').pop() || 'jpg'
    const fileName = `product_${timestamp}_${randomString}.${fileExtension}`

    // Upload to Google Drive (simulated for now)
    const imageUrl = await uploadToGoogleDrive(file, fileName)

    return NextResponse.json({
      success: true,
      imageUrl,
      fileName,
      message: 'Image uploaded successfully'
    })
  } catch (error) {
    console.error('Upload API error:', error)
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 })
  }
}