"use client";

import {
  ShoppingCart,
  Phone,
  MapPin,
  User,
  LogOut,
  Menu,
  X,
  History,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Header({
  activeSection,
  setActiveSection,
  cartItemsCount,
  onCartClick,
}: HeaderProps) {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (itemId: string) => {
    if (itemId === "about") {
      router.push("/about");
    } else if (itemId === "contact") {
      router.push("/contact");
    } else if (itemId === "faq") {
      router.push("/faq");
    } else if (itemId === "blogs") {
      router.push("/blogs"); // ✅ blogs route
    } else if (itemId === "packages") {
      router.push("/package"); // ✅ dedicated package page
    } else if (itemId === "funeral-samagri") {
      router.push("/funeral-samagri"); // ✅ funeral samagri page
    }
    // else if (itemId === 'services') {
    //   router.push('/services'); // ✅ dedicated services page (commented)
    // }
    else {
      if (itemId === "home") {
        router.push("/");
        setActiveSection("home");
      }
    }
  };

  const navItems = [
    { id: "home", label: "Home / होम", icon: null },
    { id: "packages", label: "Packages / पैकेज", icon: null },
    { id: "funeral-samagri", label: "Funeral Kit / किट", icon: null },
    // { id: "services", label: "Services / सेवाएं", icon: null }, // 🟠 Commented out
    { id: "about", label: "About / हमारे बारे में", icon: null },
    { id: "contact", label: "Contact / संपर्क", icon: null },
    { id: "faq", label: "FAQ / प्रश्न", icon: null },
    { id: "blogs", label: "Blogs / ब्लॉग्स", icon: null },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-amber-900 text-white py-1 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center gap-4">
            <a
              href="tel:+919179677292"
              className="flex items-center gap-1 hover:text-amber-200 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+91 91796 77292</span>
            </a>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Indore, Madhya Pradesh</span>
            </div>
          </div>
          <div className="text-xs">24/7 Emergency Service Available</div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 md:gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => router.push("/")}
          >
            <img
              src="/products/LogoWithoutText.jpg"
              alt="Antim Seva Logo"
              className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-full"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-amber-900">
                Antim Seva
              </h1>
              <p className="text-xs md:text-sm text-gray-600 hidden sm:block">
                अंतिम संस्कार आवश्यक वस्तुएं
              </p>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={onCartClick}
              variant="outline"
              className="relative border-amber-900 text-amber-900 hover:bg-amber-50 bg-transparent"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cart
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            <Button
              onClick={() => router.push("/orders")}
              variant="outline"
              className="border-amber-900 text-amber-900 hover:bg-amber-50 bg-transparent"
            >
              <History className="w-5 h-5 mr-2" />
              Orders
            </Button>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-amber-900 hover:bg-amber-50"
                  >
                    <User className="w-5 h-5 mr-2" />
                    {user?.name?.split(" ")[0]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => router.push("/profile")}>
                    Profile / प्रोफाइल
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/orders")}>
                    <History className="w-4 h-4 mr-2" />
                    Order History / ऑर्डर इतिहास
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={async () => {
                      await logout();
                      router.push("/");
                    }}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout / लॉगआउट
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  className="text-amber-900 hover:bg-amber-50"
                  onClick={() => router.push("/login")}
                >
                  Login / लॉगिन
                </Button>
                <Button
                  variant="default"
                  className="bg-amber-900 hover:bg-amber-800"
                  onClick={() => router.push("/register")}
                >
                  Register / रजिस्टर
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Actions + Drawer below remain unchanged */}
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="bg-amber-800 text-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-4 py-3 text-sm font-medium transition-colors hover:bg-amber-700 ${
                  activeSection === item.id
                    ? "bg-amber-700 border-b-2 border-white"
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
