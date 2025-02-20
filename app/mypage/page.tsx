"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Upload, Download, Edit } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function MyPage() {
  const [user, setUser] = useState({
    name: "山田太郎",
    email: "taro@example.com",
    isPremium: false,
    approvedThisMonth: 5,
    downloadsThisMonth: 150,
    revenueThisMonth: 30000,
    bankAccount: "1234567",
    bankName: "サンプル銀行",
    branchName: "東京支店",
    creditCard: "**** **** **** 1234",
    creditCardExpiry: "12/25",
  })

  const [uploads, setUploads] = useState([
    { id: 1, status: "承認済", title: "アイドルAのライブ写真", downloads: 50 },
    { id: 2, status: "未承認", title: "アイドルBの撮影会写真", downloads: 0 },
    { id: 3, status: "承認済", title: "アイドルCのMV撮影風景", downloads: 25 },
    { id: 4, status: "未承認", title: "アイドルDのオフショット", downloads: 0 },
  ])

  const [downloadedPhotos, setDownloadedPhotos] = useState([
    { id: 1, title: "アイドルEの笑顔ショット", imageUrl: "/placeholder.svg?height=100&width=100&text=IdolE" },
    { id: 2, title: "アイドルFのステージ写真", imageUrl: "/placeholder.svg?height=100&width=100&text=IdolF" },
    { id: 3, title: "アイドルGの衣装写真", imageUrl: "/placeholder.svg?height=100&width=100&text=IdolG" },
    { id: 4, title: "アイドルHのオフショット", imageUrl: "/placeholder.svg?height=100&width=100&text=IdolH" },
  ])

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
            <h1 className="ml-4 text-2xl font-bold text-purple-800">マイページ</h1>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>ダッシュボード</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-500">今月の承認数</h3>
                  <p className="text-2xl font-bold">{user.approvedThisMonth}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-500">今月のダウンロード総数</h3>
                  <p className="text-2xl font-bold">{user.downloadsThisMonth}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-500">今月の売上</h3>
                  <p className="text-2xl font-bold">{user.revenueThisMonth.toLocaleString()}円</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>アルバム</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {downloadedPhotos.map((photo) => (
                  <div key={photo.id} className="flex flex-col items-center">
                    <img
                      src={photo.imageUrl || "/placeholder.svg"}
                      alt={photo.title}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <p className="text-sm text-center mb-2">{photo.title}</p>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" /> ダウンロード
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link href="/mypage/album">
                  <Button variant="link">もっと見る</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>基本情報</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p>
                    <strong>名前：</strong> {user.name}
                  </p>
                  <p>
                    <strong>メールアドレス：</strong> {user.email}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">口座情報</h3>
                  <p>
                    <strong>銀行名：</strong> {user.bankName}
                  </p>
                  <p>
                    <strong>支店名：</strong> {user.branchName}
                  </p>
                  <p>
                    <strong>口座番号：</strong> {user.bankAccount}
                  </p>
                  <Button size="sm" className="mt-2">
                    <Edit className="h-4 w-4 mr-2" /> 口座情報を変更
                  </Button>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">クレジットカード情報</h3>
                  <p>
                    <strong>カード番号：</strong> {user.creditCard}
                  </p>
                  <p>
                    <strong>有効期限：</strong> {user.creditCardExpiry}
                  </p>
                  <Button size="sm" className="mt-2">
                    <Edit className="h-4 w-4 mr-2" /> クレジットカード情報を変更
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>アカウント情報</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>アカウントタイプ：</strong> {user.isPremium ? "プレミアム" : "無料"}
              </p>
              {!user.isPremium && <Button className="mt-4">プレミアムにアップグレード</Button>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>アップロード状況</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>タイトル</TableHead>
                    <TableHead>ステータス</TableHead>
                    <TableHead>ダウンロード数</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {uploads.slice(0, 3).map((upload) => (
                    <TableRow key={upload.id}>
                      <TableCell>{upload.title}</TableCell>
                      <TableCell>{upload.status}</TableCell>
                      <TableCell>{upload.status === "承認済" ? upload.downloads : "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 text-center">
                <Link href="/mypage/uploads">
                  <Button variant="link">もっと見る</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Link href="/upload">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              <Upload className="h-4 w-4 mr-2" /> 新しい写真をアップロード
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

