"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Plus } from "lucide-react"

const idolNames = [
  "大谷映美里",
  "大場花菜",
  "音嶋莉沙",
  "齋藤樹愛羅",
  "齊藤なぎさ",
  "佐々木舞香",
  "佐竹のん乃",
  "髙松瞳",
  "瀧脇笙古",
  "野口衣織",
  "諸橋沙夏",
  "山本杏奈",
]

function getRandomIdol() {
  return idolNames[Math.floor(Math.random() * idolNames.length)]
}

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResult, setSearchResult] = useState<{ id: string; name: string; imageUrl: string } | null>(null)
  const [registeredIdols, setRegisteredIdols] = useState([
    { id: "1", name: getRandomIdol(), imageUrl: "/placeholder.svg?height=100&width=100" },
    { id: "2", name: getRandomIdol(), imageUrl: "/placeholder.svg?height=100&width=100" },
    { id: "3", name: getRandomIdol(), imageUrl: "/placeholder.svg?height=100&width=100" },
    { id: "4", name: getRandomIdol(), imageUrl: "/placeholder.svg?height=100&width=100" },
  ])

  const latestImages = [
    {
      id: 1,
      title: `${getRandomIdol()}の新曲MV撮影シーン`,
      imageUrl: "/placeholder.svg?height=150&width=150&text=NewMV",
      location: "東京都",
    },
    {
      id: 2,
      title: `${getRandomIdol()}のファンミーティング`,
      imageUrl: "/placeholder.svg?height=150&width=150&text=FanMeet",
      location: "大阪府",
    },
    {
      id: 3,
      title: `${getRandomIdol()}の雑誌撮影オフショット`,
      imageUrl: "/placeholder.svg?height=150&width=150&text=Magazine",
      location: "神奈川県",
    },
    {
      id: 4,
      title: `${getRandomIdol()}のライブパフォーマンス`,
      imageUrl: "/placeholder.svg?height=150&width=150&text=LivePerf",
      location: "埼玉県",
    },
  ]

  const latestEvents = [
    { id: 1, title: '≠ME全国ツアー2023「We shout "I am me."」＠兵庫', date: "05/03" },
    { id: 2, title: '≠ME全国ツアー2023「We shout "I am me."」＠福岡', date: "04/22" },
    { id: 3, title: "≠ME 4周年コンサート「≠ME　4th　ANNIVERSARY PREMIUM CONCERT」", date: "03/31" },
    { id: 4, title: "=LOVE 全国ツアー2023「Today is your Trigger」＠東京", date: "03/02" },
    { id: 5, title: "=LOVE 全国ツアー2023「Today is your Trigger」＠愛知", date: "02/12" },
    { id: 6, title: "=LOVE 全国ツアー2023「Today is your Trigger」＠大阪", date: "02/10" },
    { id: 7, title: "=LOVE 全国ツアー2023「Today is your Trigger」＠宮城", date: "02/04" },
    { id: 8, title: "=LOVE 全国ツアー2023「Today is your Trigger」＠福岡", date: "01/28" },
    { id: 9, title: "～齊藤なぎさ卒業コンサート～　現役アイドルちゅ～ みんなのこと大好きだよ♡", date: "01/13" },
  ]

  const handleSearch = () => {
    const randomIdol = getRandomIdol()
    if (searchTerm.toLowerCase() === randomIdol.toLowerCase()) {
      setSearchResult({
        id: "Z",
        name: randomIdol,
        imageUrl: `/placeholder.svg?height=100&width=100&text=${encodeURIComponent(randomIdol)}`,
      })
    } else {
      setSearchResult(null)
    }
  }

  const handleRegister = () => {
    if (searchResult) {
      setRegisteredIdols([...registeredIdols, searchResult])
      setSearchResult(null)
      setSearchTerm("")
    }
  }

  const keywords = ["新着写真", "人気アイドル", "ライブフォト", "オフショット", "MVメイキング", "ファンミーティング"]

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-purple-800">アイドルフォト共有アプリ</h1>
            <div className="flex items-center space-x-4">
              <Link href="/upload">
                <Button variant="outline" size="sm" className="text-purple-600 border-purple-600 hover:bg-purple-50">
                  写真を投稿する
                </Button>
              </Link>
              <Link href="/mypage">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5 text-gray-600" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 h-[400px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              アイドルの思い出を
              <br />
              共有しよう
            </h2>
            <div className="w-full max-w-2xl flex gap-2">
              <Input
                type="search"
                placeholder="グループ名・アイドル名を検索"
                className="bg-white/90 backdrop-blur-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button className="bg-white hover:bg-white/90 text-purple-600 px-8" onClick={handleSearch}>
                検索
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {keywords.map((keyword) => (
                <Button
                  key={keyword}
                  variant="outline"
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border-white"
                >
                  {keyword}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {searchResult && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">検索結果</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <img
                    src={searchResult.imageUrl || "/placeholder.svg"}
                    alt={searchResult.name}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-lg font-semibold text-center text-gray-900">{searchResult.name}</h3>
                  <Button className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white" onClick={handleRegister}>
                    <Plus className="h-4 w-4 mr-2" /> 登録する
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">最新の画像一覧</h2>
            <Button variant="link" className="text-purple-600">
              もっと見る →
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {latestImages.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={image.imageUrl || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-sm text-white">{image.location}</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-sm text-gray-900 line-clamp-2">{image.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">最新の公演一覧</h2>
            <Button variant="link" className="text-purple-600">
              もっと見る →
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {latestEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">登録したアイドル</h2>
            <Button variant="link" className="text-purple-600">
              すべて表示 →
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {registeredIdols.map((idol) => (
              <Link href={`/idol/${idol.id}`} key={idol.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <img
                      src={idol.imageUrl || "/placeholder.svg"}
                      alt={idol.name}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <h3 className="text-lg font-semibold text-center text-gray-900">{idol.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

