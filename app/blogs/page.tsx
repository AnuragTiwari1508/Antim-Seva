"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import { Instagram, Youtube, Facebook, ExternalLink, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface Blog {
    id: number
    title: string
    content: string
    author: string
    date: string
    image: string
}

export default function BlogsPage() {
    const router = useRouter()
    const [activeSection, setActiveSection] = useState("blogs")
    const [blogs, setBlogs] = useState<Blog[]>([
        {
            id: 1,
            title: "अंतिम सेवा का महत्व",
            content:
                "अंतिम सेवा जीवन का एक महत्वपूर्ण हिस्सा है जो संस्कार और परंपराओं को दर्शाता है।",
            author: "Admin",
            date: "2025-09-15",
            image: "https://www.pitradev.com/image/catalog/Online-Asthi-Visarjan-in-Haridwar.jpg",
        },
        {
            id: 2,
            title: "Asthi Visarjan की प्रक्रिया",
            content:
                "पवित्र नदियों में अस्थि विसर्जन एक धार्मिक परंपरा है। यह आत्मा की शांति के लिए किया जाता है।",
            author: "Admin",
            date: "2025-09-14",
            image: "https://temple.yatradham.org/public/Product/puja-rituals/puja-rituals_6TEY93hT_202505181602160.webp",
        },
    ])

    const [newBlog, setNewBlog] = useState({
        title: "",
        content: "",
        author: "",
        image: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newBlog.title || !newBlog.content || !newBlog.author || !newBlog.image)
            return

        const blog: Blog = {
            id: blogs.length + 1,
            title: newBlog.title,
            content: newBlog.content,
            author: newBlog.author,
            date: new Date().toISOString().split("T")[0],
            image: newBlog.image,
        }

        setBlogs([blog, ...blogs])
        setNewBlog({ title: "", content: "", author: "", image: "" })
    }

    return (
        <>
            {/* Header */}
            <Header
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                cartItemsCount={0}
                onCartClick={() => { }}
            />
            {/* Blogging Section */}
            <div className="container mx-auto p-6">
                {/* Back Navigation */}
                <div className="mb-6">
                    <Button
                        variant="outline"
                        onClick={() => router.push('/')}
                        className="flex items-center gap-2 hover:bg-amber-50"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home / होम पर वापस जाएं
                    </Button>
                </div>

                <h1 className="text-3xl font-bold text-center text-amber-900 mb-6">
                    Blogs / ब्लॉग
                </h1>

                {/* Social Media Links */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-8 border border-amber-200">
                    <h2 className="text-xl font-semibold text-amber-900 mb-4 text-center">
                        Follow Us / हमें फॉलो करें
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://linktr.ee/Antimseva"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Linktree
                        </a>
                        <a
                            href="https://www.instagram.com/antimsevaofficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            <Instagram className="w-4 h-4" />
                            Instagram
                        </a>
                        <a
                            href="https://www.youtube.com/@antimsevaofficial?si=0rfS5zCSMK4UGrZh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            <Youtube className="w-4 h-4" />
                            YouTube
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61581180671518&mibextid=ZbWKwL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            <Facebook className="w-4 h-4" />
                            Facebook
                        </a>
                    </div>
                </div>

                {/* Blog Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-xl p-6 mb-8"
                >
                    <h2 className="text-xl font-semibold mb-4 text-amber-800">
                        Add New Blog / नया ब्लॉग जोड़ें
                    </h2>
                    <input
                        type="text"
                        placeholder="Title / शीर्षक"
                        className="w-full border p-2 rounded mb-3"
                        value={newBlog.title}
                        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                    />
                    <textarea
                        placeholder="Content / विवरण"
                        className="w-full border p-2 rounded mb-3"
                        rows={3}
                        value={newBlog.content}
                        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Author / लेखक"
                        className="w-full border p-2 rounded mb-3"
                        value={newBlog.author}
                        onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Image URL / इमेज लिंक"
                        className="w-full border p-2 rounded mb-3"
                        value={newBlog.image}
                        onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
                    />
                    <button
                        type="submit"
                        className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800"
                    >
                        Publish / प्रकाशित करें
                    </button>
                </form>

                {/* Blog Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white shadow rounded-xl overflow-hidden border border-amber-200 hover:shadow-lg transition"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-amber-900 mb-1">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-700 text-sm mb-2">{blog.content}</p>
                                <div className="text-xs text-gray-500">
                                    ✍️ {blog.author} • 📅 {blog.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Footer */}
            <Footer />
        </>
    )
}

