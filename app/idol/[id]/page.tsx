"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, Upload } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

// 写真コンポーネント
const Photo = ({ imageUrl, status }: { imageUrl: string; status: "sample" | "uploaded" | "downloaded" }) => (
  <div className="relative">
    <img src={imageUrl || "/placeholder.svg"} alt="アイドル写真" className="w-full h-40 object-cover rounded-md" />
    {status === "sample" && (
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-2xl font-bold opacity-50">※SAMPLE</span>
      </div>
    )}
  </div>
)

export default function IdolPhotoFolder({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPrice, setSelectedPrice] = useState(0)

  const photos = [
    { id: 1, imageUrl: "/placeholder.svg?height=200&width=200&text=Photo1", price: 100, status: "sample" },
    { id: 2, imageUrl: "/placeholder.svg?height=200&width=200&text=Photo2", price: 150, status: "uploaded" },
    { id: 3, imageUrl: "/placeholder.svg?height=200&width=200&text=Photo3", price: 200, status: "sample" },
    { id: 4, imageUrl: "/placeholder.svg?height=200&width=200&text=Photo4", price: 250, status: "downloaded" },
    { id: 5, imageUrl: "/placeholder.svg?height=200&width=200&text=Photo5", price: 300, status: "sample" },
    { id: 6, imageUrl: "/placeholder.svg?height=200&width=200&text=Photo6", price: 100, status: "sample" },
    { id: 7, imageUrl: "/placeholder.svg?height=200&width=200&text=Photo7", price: 150, status: "uploaded" },
    { id: 8, imageUrl: "/placeholder.svg?height=200&width=200&text=Photo8", price: 200, status: "sample" },
    { id: 9, imageUrl: "/placeholder.svg?height=200&width=200&text=Photo9", price: 250, status: "downloaded" },
    { id: 10, imageUrl: "/placeholder.svg?height=200&width=200&text=Photo10", price: 300, status: "sample" },
  ]

  const handleDownload = (price: number) => {
    setSelectedPrice(price)
    setIsModalOpen(true)
  }

  const confirmDownload = () => {
    // ここでダウンロード処理を実装
    console.log(`Downloading photo for ${selectedPrice}円`)
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/home">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="ml-4 text-2xl font-bold text-purple-800">
              アイドル{String.fromCharCode(64 + Number.parseInt(params.id))}の写真
            </h1>
          </div>
          <Link href={`/upload?idolId=${params.id}`}>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white">
              <Upload className="h-4 w-4 mr-2" /> 写真をアップロードする
            </Button>
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <Card
                key={photo.id}
                className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <CardContent className="p-4">
                  <Photo imageUrl={photo.imageUrl} status={photo.status as "sample" | "uploaded" | "downloaded"} />
                  {photo.status === "sample" && (
                    <Button
                      className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white"
                      size="sm"
                      onClick={() => handleDownload(photo.price)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <div>
                        <div>ダウンロード</div>
                        <div className="text-xs">{photo.price}円</div>
                      </div>
                    </Button>
                  )}
                  {photo.status === "uploaded" && (
                    <div className="mt-2 w-full p-2 bg-green-100 text-green-800 text-center text-sm rounded">
                      ※自分がアップロードした写真です
                    </div>
                  )}
                  {photo.status === "downloaded" && (
                    <div className="mt-2 w-full p-2 bg-gray-200 text-gray-700 text-center text-sm rounded">
                      ダウンロード済
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ダウンロードの確認</DialogTitle>
            <DialogDescription>この写真を{selectedPrice}円でダウンロードしますか？</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              いいえ
            </Button>
            <Button onClick={confirmDownload}>はい</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

