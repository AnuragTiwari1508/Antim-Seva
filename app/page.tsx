"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import Cart from "@/components/cart";
import UserOptions from "@/components/user-options";
import PackageSelector from "@/components/package-selector";
import Services from "@/components/services";
import { products } from "@/data/products";
import { useAuth } from "@/context/AuthContext";

interface CartItem {
  id: string;
  name: string;
  nameHindi?: string;
  price: number;
  quantity: number;
  type?: string;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartSessionId, setCartSessionId] = useState<string | null>(null);
  const { user, isAuthenticated } = useAuth();

  const [userOptions, setUserOptions] = useState({});
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: number }>(
    {}
  );

  // Popup state
  const [showPopup, setShowPopup] = useState(false);

  // Generate or get session ID for guest users
  useEffect(() => {
    if (!isAuthenticated) {
      let sessionId = localStorage.getItem("cartSessionId");
      if (!sessionId) {
        sessionId = `session-${Date.now()}-${Math.random()
          .toString(36)
          .substr(2, 9)}`;
        localStorage.setItem("cartSessionId", sessionId);
      }
      setCartSessionId(sessionId);
    }
  }, [isAuthenticated]);

  // Load cart from database when component mounts
  useEffect(() => {
    const loadCart = async () => {
      try {
        const headers: any = {};
        if (cartSessionId && !isAuthenticated) {
          headers["x-session-id"] = cartSessionId;
        }

        const response = await fetch("/api/cart", {
          headers: headers,
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success && data.cart && data.cart.items) {
            setCartItems(data.cart.items);
          }
        }
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    };

    // Load cart after session ID is set or user is authenticated
    if ((cartSessionId && !isAuthenticated) || isAuthenticated) {
      loadCart();
    }
  }, [cartSessionId, isAuthenticated]);

  // Save cart to database whenever cart items change
  useEffect(() => {
    const saveCart = async () => {
      try {
        const headers: any = {
          "Content-Type": "application/json",
        };

        if (cartSessionId && !isAuthenticated) {
          headers["x-session-id"] = cartSessionId;
        }

        await fetch("/api/cart", {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            items: cartItems,
            sessionId: cartSessionId,
          }),
        });
      } catch (error) {
        console.error("Error saving cart:", error);
      }
    };

    // Only save if we have items and session/user info
    if (
      cartItems.length > 0 &&
      ((cartSessionId && !isAuthenticated) || isAuthenticated)
    ) {
      saveCart();
    } else if (
      cartItems.length === 0 &&
      ((cartSessionId && !isAuthenticated) || isAuthenticated)
    ) {
      // Clear cart in database if empty
      const clearCart = async () => {
        try {
          const headers: any = {};
          if (cartSessionId && !isAuthenticated) {
            headers["x-session-id"] = cartSessionId;
          }

          await fetch("/api/cart", {
            method: "DELETE",
            headers: headers,
          });
        } catch (error) {
          console.error("Error clearing cart:", error);
        }
      };
      clearCart();
    }
  }, [cartItems, cartSessionId, isAuthenticated]);

  // Migrate guest cart when user logs in
  useEffect(() => {
    const migrateCart = async () => {
      if (isAuthenticated && cartSessionId) {
        try {
          const response = await fetch("/api/cart", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sessionId: cartSessionId,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            if (data.success && data.cart && data.cart.items) {
              setCartItems(data.cart.items);
            }
            // Clear guest session ID after migration
            localStorage.removeItem("cartSessionId");
            setCartSessionId(null);
          }
        } catch (error) {
          console.error("Error migrating cart:", error);
        }
      }
    };

    migrateCart();
  }, [isAuthenticated, cartSessionId]);

  // Show popup after 10s but only once
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const addToCart = (item: any) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + (item.quantity || 1) }
            : p
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
  };

  useEffect(() => {
    const handleSectionChange = (event: any) => {
      setActiveSection(event.detail);
    };
    window.addEventListener("changeSection", handleSectionChange);
    return () =>
      window.removeEventListener("changeSection", handleSectionChange);
  }, []);

  const updateCartItem = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const handleItemChange = (itemId: string, quantity: number) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: quantity,
    }));

    const product = cartItems.find((item) => item.id === itemId);
    const productInfo = products.find((p) => p.id === itemId);
    if (!productInfo) return;

    const productData: CartItem = {
      id: itemId,
      name: productInfo.name,
      nameHindi: productInfo.nameHindi,
      price: productInfo.price,
      quantity: quantity,
    };

    if (quantity > 0) {
      if (product) {
        updateCartItem(itemId, quantity);
      } else {
        setCartItems((prev) => [...prev, productData]);
      }
    } else {
      updateCartItem(itemId, 0);
    }
  };

  const getTotalItems = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const clearCart = () => setCartItems([]);

  return (
    <div className="min-h-screen bg-orange-50 relative">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        {activeSection === "home" && (
          <>
            <Hero setActiveSection={setActiveSection} />
            <Services setActiveSection={setActiveSection} />
          </>
        )}
        {activeSection === "services" && (
          <Services setActiveSection={setActiveSection} />
        )}
        {activeSection === "packages" && (
          <>
            <UserOptions onOptionsChange={setUserOptions} />
            <PackageSelector
              onPackageSelect={(packageId, items) => {
                setSelectedPackage(packageId);
                setSelectedItems({});
                const packageData = {
                  id: packageId,
                  name:
                    packageId === "package1"
                      ? "Package 1"
                      : packageId === "package2"
                      ? "Standard Package"
                      : "Premium Package",
                  nameHindi:
                    packageId === "package1"
                      ? "पैकेट नंबर 1"
                      : packageId === "package2"
                      ? "मानक पैकेज"
                      : "प्रीमियम पैकेज",
                  price:
                    packageId === "package1"
                      ? 5100
                      : packageId === "package2"
                      ? 11000
                      : 21000,
                  type: "package",
                };
                addToCart(packageData);
              }}
            />
          </>
        )}
        {activeSection === "about" && <AboutUs />}
        {activeSection === "faq" && <FAQ />}
      </main>

      {/* पूर्ण सम्मान के साथ Section */}
      <div className="relative m-5 flex flex-col gap-2 text-center rounded-lg overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.talkdeath.com/wp-content/uploads/2023/11/death-ritual-hinduism.jpg')",
          }}
        ></div>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 p-4">
          <h3 className="text-xl font-semibold text-white mb-2">
            पूर्ण सम्मान के साथ
          </h3>
          <p className="text-gray-200">
            All the necessary materials as per religious rituals
          </p>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        updateItem={updateCartItem}
        total={getTotalPrice()}
        clearCart={clearCart}
      />

      {/* Popup after 5s */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-2">
          {/* Popup with animation */}
          <div className="relative border border-white bg-amber-100 rounded-2xl shadow-xl w-full max-w-lg md:max-w-2xl max-h-[90vh] overflow-auto animate-bounceOnce">
            {/* Close button */}
            <button
              className="absolute text-red-500 top-3 right-3 z-10 font-extrabold"
              onClick={() => setShowPopup(false)}
            >
              X
            </button>

            {/* Image inside popup */}
            <div className="relative">
              <img
                src="http://si.wsj.net/public/resources/images/BN-MK673_ipyre_P_20160203061124.jpg"
                alt="popup"
                className="w-full h-48 md:h-64 object-cover"
              />
              {/* Black gradient overlay on image */}
              <div className="absolute inset-0 bg-black/40"></div>
              <h2 className="absolute bottom-3 left-3 text-white text-lg md:text-xl font-semibold">
                पूर्ण सम्मान के साथ अंतिम संस्कार सेवा !
                <br />
                <a
                  className="font-semibold text-green-400"
                  href="tel:9179677292"
                >
                  {" "}
                  Call us on : 9179677292
                </a>
              </h2>
            </div>

            {/* Content below image */}
            <div className="p-4 flex flex-col gap-4">
              <div className="text-gray-700 text-justify text-sm md:text-base font-medium">
                <p>All the necessary materials as per religious rituals.</p>
                <p>
                  We understand that losing a loved one is one of the most
                  challenging experiences a family can face.
                </p>
                <div className="mt-2">
                  <p>
                    हमारी सेवा का उद्देश्य परिवारों को इस कठिन समय में सहारा
                    देना है। हम धार्मिक विधि-विधान के अनुसार सभी आवश्यक सामग्री
                    और सेवाएं प्रदान करते हैं।
                  </p>
                  <p className="text-red-500 font-semibold mt-2">
                    Antim Seva is a service facilitation platform. We provide
                    vehicles, pandits, samagri kits, and support staff through
                    verified vendors. We do not perform cremation or rituals
                    ourselves. All religious services are carried out by
                    independent vendors engaged through Antim Seva.
                  </p>
                </div>
              </div>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/9179677292?text=नमस्ते,%20मुझे%20अंतिम%20संस्कार%20सेवा%20के%20लिए%20जानकारी%20चाहिए।"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-300"
              >
                Connect with us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
