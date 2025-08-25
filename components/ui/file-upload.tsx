'use client'

import { useState, useRef, useCallback } from 'react'
import { Upload, X, Image, Loader2 } from 'lucide-react'
import { Button } from './button'
import { Label } from './label'
import { toast } from 'sonner'

interface FileUploadProps {
  onUpload: (file: File) => Promise<string>
  accept?: string
  maxSize?: number
  currentImageUrl?: string
  onImageUrlChange?: (url: string) => void
  disabled?: boolean
}

export function FileUpload({
  onUpload,
  accept = 'image/*',
  maxSize = 5 * 1024 * 1024, // 5MB default
  currentImageUrl,
  onImageUrlChange,
  disabled = false
}: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>(currentImageUrl || '')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!disabled) {
      setIsDragOver(true)
    }
  }, [disabled])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)
    
    if (disabled) return

    const files = Array.from(e.dataTransfer.files)
    const imageFile = files.find(file => file.type.startsWith('image/'))
    
    if (imageFile) {
      await handleFileUpload(imageFile)
    }
  }, [disabled])

  const handleFileUpload = async (file: File) => {
    if (file.size > maxSize) {
      toast.error(`File size too large. Maximum size is ${maxSize / 1024 / 1024}MB`)
      return
    }

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file')
      return
    }

    setIsUploading(true)
    try {
      const imageUrl = await onUpload(file)
      setUploadedImageUrl(imageUrl)
      onImageUrlChange?.(imageUrl)
      toast.success('Image uploaded successfully!')
    } catch (error) {
      console.error('Upload error:', error)
      toast.error('Failed to upload image. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      await handleFileUpload(file)
    }
  }

  const handleRemoveImage = () => {
    setUploadedImageUrl('')
    onImageUrlChange?.('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const imageUrl = uploadedImageUrl || currentImageUrl

  return (
    <div className="space-y-4">
      <Label>Product Image</Label>
      
      {/* Upload Area */}
      <div
        className={`
          relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${isDragOver 
            ? 'border-amber-400 bg-amber-50' 
            : 'border-gray-300 hover:border-amber-300 hover:bg-amber-50/50'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileSelect}
          className="hidden"
          disabled={disabled}
        />
        
        {isUploading ? (
          <div className="flex flex-col items-center space-y-2">
            <Loader2 className="h-8 w-8 text-amber-600 animate-spin" />
            <p className="text-sm text-gray-600">Uploading to Google Drive...</p>
          </div>
        ) : imageUrl ? (
          <div className="flex flex-col items-center space-y-3">
            <div className="relative">
              <img
                src={imageUrl}
                alt="Uploaded product"
                className="h-32 w-32 object-cover rounded-lg border"
              />
              <Button
                type="button"
                size="sm"
                variant="destructive"
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemoveImage()
                }}
                disabled={disabled}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
            <p className="text-sm text-gray-600">Click to change or drag new image</p>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-3">
            <div className="p-3 bg-amber-100 rounded-full">
              <Upload className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG up to {maxSize / 1024 / 1024}MB
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Preview Section */}
      {imageUrl && (
        <div className="space-y-2">
          <Label className="text-sm font-medium">Current Image</Label>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Image className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-600 flex-1 truncate">
              {imageUrl.startsWith('http') ? 'Uploaded to Google Drive' : imageUrl}
            </span>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => window.open(imageUrl, '_blank')}
              disabled={disabled}
            >
              View
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}