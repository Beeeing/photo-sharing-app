"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, Search } from "lucide-react"

export default function AlbumPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [photos, setPhotos] = useState([
    { id: 1, title: "アイドルEの笑顔ショット", imageUrl: "/placeholder.svg?height=100&width=100&text=IdolE" },
    { id: 2, title: "アイドルFのステージ写真", imageUrl: "/placeholder.svg?height=100&width=100&text=IdolF" },
    { id: 3, title: "アイドルGの衣装写真", imageUrl: "/placeholder.svg?height=100&width=100&text=IdolG" },
    { id: 4, title: "アイドルHのオフショット", imageUrl: "/placeholder.svg?height=100&width=100&text=IdolH" },
    { id: 5, title: "アイドルIの握手会写真", imageUrl: "/placeholder.svg?height=100&width=100&text=IdolI" },
    { id: 6, title: "アイドルJのダンス練習風景", imageUrl: "/placeholder.svg?height=100&width=100&text=IdolJ" },
    { id: 7, title: "アイドルKの楽屋ショット", imageUrl: "/placeholder.svg?height=100&width=100&text=IdolK" },
    { id: 8, title: "アイドルLのファンミーティング", imageUrl: "/placeholder.svg?height=100&width=100&text=IdolL" },
  ])

  const filteredPhotos = photos.filter((photo) => photo.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/mypage">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="ml-4 text-2xl font-bold text-purple-800">マイアルバム</h1>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 space-y-6">
          <div className="flex items-center space-x-2 mb-6">
            <Input
              type="search"
              placeholder="写真を検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm bg-white"
            />
            <Button size="icon" className="bg-purple-500 hover:bg-purple-600 text-white">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <Card
                key={photo.id}
                className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <CardContent className="p-4">
                  <img
                    src={photo.imageUrl || "/placeholder.svg"}
                    alt={photo.title}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <p className="text-sm text-center mb-2">{photo.title}</p>
                  <Button size="sm" variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" /> ダウンロード
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

