"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ShoppingBag, MapPin, Phone, Calendar, Clock, CreditCard } from "lucide-react"

export default function OrdersPage() {
  const router = useRouter()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true)
        
        // Get orders from localStorage for all users
        const localOrderIds = JSON.parse(localStorage.getItem("orderHistory") || "[]")
        
        if (localOrderIds.length > 0) {
          const response = await fetch("/api/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ orderIds: localOrderIds }),
          })
          
          const data = await response.json()
          
          if (data.error) {
            throw new Error(data.error)
          }
          
          setOrders(data.orders)
        } else {
          // Try to fetch all orders if no local orders
          const response = await fetch("/api/orders")
          const data = await response.json()
          
          if (data.error) {
            throw new Error(data.error)
          }
          
          setOrders(data.orders)
        }
      } catch (err) {
        console.error("Error fetching orders:", err)
        setError("Failed to load order history. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [router])

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date)
  }

  // Format time for display
  const formatTime = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-IN", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order History / ऑर्डर इतिहास</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            View all your previous orders and their details
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-900"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="text-red-500 mb-4">{error}</div>
            <Button onClick={() => window.location.reload()} className="bg-amber-900 hover:bg-amber-800">
              Try Again
            </Button>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
            <Button onClick={() => router.push("/")} className="bg-amber-900 hover:bg-amber-800">
              Browse Products
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <Card key={order.orderId} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 pb-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <CardTitle className="text-xl mb-1">
                        Order #{order.orderId}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(order.timestamp)}</span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{formatTime(order.timestamp)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={`px-3 py-1 ${
                        order.paymentStatus === "completed" 
                          ? "bg-green-100 text-green-800" 
                          : order.paymentStatus === "failed"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {order.paymentStatus === "completed" 
                          ? "Paid" 
                          : order.paymentStatus === "failed"
                            ? "Failed"
                            : "Pending"}
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1 border-amber-900 text-amber-900">
                        {order.paymentMethod === "cash" ? "Cash on Delivery" : "Online Payment"}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <Tabs defaultValue="items">
                    <TabsList className="mb-6">
                      <TabsTrigger value="items">Items / सामग्री</TabsTrigger>
                      <TabsTrigger value="details">Details / विवरण</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="items" className="space-y-4">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="border-b">
                            <tr>
                              <th className="text-left py-3 px-4">Item</th>
                              <th className="text-center py-3 px-4">Quantity</th>
                              <th className="text-right py-3 px-4">Price</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            {order.items.map((item, index) => (
                              <tr key={index} className={item.type === "package" ? "bg-amber-50" : ""}>
                                <td className="py-3 px-4">
                                  <div className="font-medium">{item.name}</div>
                                  {item.nameHindi && <div className="text-sm text-gray-600">{item.nameHindi}</div>}
                                  {item.type === "package" && (
                                    <Badge variant="outline" className="mt-1 text-xs">Package</Badge>
                                  )}
                                </td>
                                <td className="text-center py-3 px-4">{item.quantity}</td>
                                <td className="text-right py-3 px-4">₹{item.price * item.quantity}</td>
                              </tr>
                            ))}
                            <tr className="bg-gray-50">
                              <td colSpan={2} className="py-3 px-4 text-right font-bold">Total</td>
                              <td className="text-right py-3 px-4 font-bold">₹{order.totalAmount}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="details">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-medium text-gray-900 mb-3">Customer Information</h3>
                          <div className="space-y-3">
                            <div>
                              <div className="text-sm text-gray-600">Name</div>
                              <div>{order.customerName}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Email</div>
                              <div>{order.customerEmail}</div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Phone className="h-4 w-4 mt-1 text-gray-600" />
                              <div>{order.customerPhone}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-medium text-gray-900 mb-3">Delivery Information</h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 mt-1 text-gray-600" />
                              <div>{order.address}</div>
                            </div>
                            {order.location && (
                              <div className="pt-2">
                                <a 
                                  href={`https://www.google.com/maps?q=${order.location.lat},${order.location.lng}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-amber-900 hover:underline text-sm inline-flex items-center"
                                >
                                  View on Map
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="my-6" />
                      
                      <div>
                        <h3 className="font-medium text-gray-900 mb-3">Payment Information</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-gray-600" />
                            <div>
                              {order.paymentMethod === "cash" ? "Cash on Delivery" : "Online Payment"}
                              <Badge className={`ml-2 ${
                                order.paymentStatus === "completed" 
                                  ? "bg-green-100 text-green-800" 
                                  : order.paymentStatus === "failed"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}>
                                {order.paymentStatus === "completed" 
                                  ? "Paid" 
                                  : order.paymentStatus === "failed"
                                    ? "Failed"
                                    : "Pending"}
                              </Badge>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Total Amount</div>
                            <div className="text-xl font-bold text-amber-900">₹{order.totalAmount}</div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}