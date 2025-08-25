import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { cookies } from 'next/headers'
import { products as originalProducts } from '@/data/products'

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

// Get products file path
const getProductsFilePath = () => {
  return path.join(process.cwd(), 'data', 'products.ts')
}

// Read products from file
async function readProductsFile() {
  try {
    // For now, return the original products from the static import
    // In the future, this could read from a database or dynamically parse the file
    return originalProducts
  } catch (error) {
    console.error('Error reading products file:', error)
    return []
  }
}

// Write products to file
async function writeProductsFile(products: any[]) {
  try {
    const filePath = getProductsFilePath()
    
    // Read the current file to preserve the packagePricing section
    const currentContent = await fs.readFile(filePath, 'utf-8')
    
    // Find the packagePricing section
    const packagePricingMatch = currentContent.match(/export const packagePricing = \{[\s\S]*$/)
    const packagePricingSection = packagePricingMatch ? packagePricingMatch[0] : ''
    
    // Generate TypeScript content with preserved packagePricing
    const tsContent = `export interface Product {
  id: string
  name: string
  nameHindi?: string
  price: number
  inPackage1?: boolean
  inPackage2?: boolean
  inPackage3?: boolean
  category: string
  description?: string
  image?: string
  available?: boolean
}

export const products: Product[] = ${JSON.stringify(products, null, 2)
  .replace(/"/g, "'")
  .replace(/'(\w+)':/g, '$1:')}

${packagePricingSection}
`
    
    await fs.writeFile(filePath, tsContent, 'utf-8')
    return true
  } catch (error) {
    console.error('Error writing products file:', error)
    return false
  }
}

// GET - Get all products
export async function GET(request: NextRequest) {
  // For testing purposes, allow bypass if in development and test mode
  const isDevelopment = process.env.NODE_ENV !== 'production'
  const testMode = request.headers.get('x-test-mode') === 'true'
  
  if (!isDevelopment || !testMode) {
    const { authorized } = await checkAdminAuth(request)
    
    if (!authorized) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  try {
    const products = await readProductsFile()
    return NextResponse.json({ products })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

// POST - Add new product
export async function POST(request: NextRequest) {
  // For testing purposes, allow bypass if in development and test mode
  const isDevelopment = process.env.NODE_ENV !== 'production'
  const testMode = request.headers.get('x-test-mode') === 'true'
  
  if (!isDevelopment || !testMode) {
    const { authorized } = await checkAdminAuth(request)
    
    if (!authorized) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  try {
    const newProduct = await request.json()
    
    // Validate required fields
    if (!newProduct.name || !newProduct.category || !newProduct.price) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Generate ID if not provided
    if (!newProduct.id) {
      newProduct.id = `product_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }

    // Set defaults
    newProduct.available = newProduct.available !== false
    newProduct.description = newProduct.description || ''
    newProduct.image = newProduct.image || ''

    // Read existing products
    const products = await readProductsFile()
    
    // Add new product
    products.push(newProduct)
    
    // Write back to file
    const success = await writeProductsFile(products)
    
    if (!success) {
      return NextResponse.json({ error: 'Failed to save product' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Product added successfully', product: newProduct })
  } catch (error) {
    console.error('Error adding product:', error)
    return NextResponse.json({ error: 'Failed to add product' }, { status: 500 })
  }
}

// PUT - Update existing product
export async function PUT(request: NextRequest) {
  const { authorized } = await checkAdminAuth(request)
  
  if (!authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const updatedProduct = await request.json()
    
    if (!updatedProduct.id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 })
    }

    // Read existing products
    const products = await readProductsFile()
    
    // Find and update product
    const productIndex = products.findIndex((p: any) => p.id === updatedProduct.id)
    
    if (productIndex === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    // Update product
    products[productIndex] = { ...products[productIndex], ...updatedProduct }
    
    // Write back to file
    const success = await writeProductsFile(products)
    
    if (!success) {
      return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Product updated successfully', product: products[productIndex] })
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
  }
}

// DELETE - Delete product
export async function DELETE(request: NextRequest) {
  const { authorized } = await checkAdminAuth(request)
  
  if (!authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { productId } = await request.json()
    
    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 })
    }

    // Read existing products
    const products = await readProductsFile()
    
    // Filter out the product to delete
    const updatedProducts = products.filter((p: any) => p.id !== productId)
    
    if (updatedProducts.length === products.length) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    // Write back to file
    const success = await writeProductsFile(updatedProducts)
    
    if (!success) {
      return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 })
  }
}
