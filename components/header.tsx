"use client"

import { ShoppingCart, Phone, MapPin, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
  cartItemsCount: number
  onCartClick: () => void
}

export default function Header({ activeSection, setActiveSection, cartItemsCount, onCartClick }: HeaderProps) {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  
  const navItems = [
    { id: "home", label: "Home / होम", icon: null },
    { id: "products", label: "Products / उत्पाद", icon: null },
    { id: "packages", label: "Packages / पैकेज", icon: null },
    { id: "services", label: "Services / सेवाएं", icon: null },
    { id: "about", label: "About / हमारे बारे में", icon: null },
    { id: "faq", label: "FAQ / प्रश्न", icon: null },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-amber-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Indore, Madhya Pradesh</span>
            </div>
          </div>
          <div className="text-xs">24/7 Emergency Service Available</div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
              अं
            </div>
            <div>
              <h1 className="text-2xl font-bold text-amber-900">Antim Sewa</h1>
              <p className="text-sm text-gray-600">अंतिम संस्कार आवश्यक वस्तुएं</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={onCartClick}
              variant="outline"
              className="relative border-amber-900 text-amber-900 hover:bg-amber-50 bg-transparent"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cart / कार्ट
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-amber-900 hover:bg-amber-50">
                    <User className="w-5 h-5 mr-2" />
                    {user?.name?.split(' ')[0]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => router.push('/profile')}>
                    Profile / प्रोफाइल
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={async () => {
                    await logout();
                    router.push('/');
                  }}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout / लॉगआउट
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex gap-2">
                <Link href="/login">
                  <Button variant="ghost" className="text-amber-900 hover:bg-amber-50">
                    Login / लॉगिन
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="default" className="bg-amber-900 hover:bg-amber-800">
                    Register / रजिस्टर
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-3 text-sm font-medium transition-colors hover:bg-amber-700 ${
                  activeSection === item.id ? "bg-amber-700 border-b-2 border-white" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
