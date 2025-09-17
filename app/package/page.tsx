"use client"

import { useState } from "react"
import PackageSelector from "@/components/package-selector"
import { useRouter } from "next/navigation"

export default function PackagePage() {
  const router = useRouter()

  const handlePackageSelect = (packageId: string, items: any[]) => {
    // Store package data in localStorage for the product page
    localStorage.setItem('selectedPackage', JSON.stringify({
      packageId,
      items,
      timestamp: Date.now()
    }))
    
    // Navigate to product page
    router.push('/package/product')
  }

  return (
    <div className="min-h-screen bg-white">
      <PackageSelector onPackageSelect={handlePackageSelect} />
    </div>
  )
}
