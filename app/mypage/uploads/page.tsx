"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Search } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function UploadsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [uploads, setUploads] = useState([
    { id: 1, status: "承認済", title: "アイドルAのライブ写真", downloads: 50, date: "2023-06-01" },
    { id: 2, status: "未承認", title: "アイドルBの撮影会写真", downloads: 0, date: "2023-06-05" },
    { id: 3, status: "承認済", title: "アイドルCのMV撮影風景", downloads: 25, date: "2023-06-10" },
    { id: 4, status: "未承認", title: "アイドルDのオフショット", downloads: 0, date: "2023-06-15" },
    { id: 5, status: "承認済", title: "アイドルEのステージ写真", downloads: 30, date: "2023-06-20" },
    { id: 6, status: "承認済", title: "アイドルFの握手会写真", downloads: 15, date: "2023-06-25" },
  ])

  const filteredUploads = uploads.filter(
    (upload) =>
      upload.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "all" || upload.status === statusFilter),
  )

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
            <h1 className="ml-4 text-2xl font-bold text-purple-800">アップロード履歴</h1>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>検索</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  type="search"
                  placeholder="タイトルで検索..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm bg-white"
                />
                <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                  <Search className="h-4 w-4 mr-2" /> 検索
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>アップロード履歴</CardTitle>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="ステータスを選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全てのステータス</SelectItem>
                  <SelectItem value="承認済">承認済</SelectItem>
                  <SelectItem value="未承認">未承認</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>タイトル</TableHead>
                    <TableHead>ステータス</TableHead>
                    <TableHead>ダウンロード数</TableHead>
                    <TableHead>アップロード日</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUploads.map((upload) => (
                    <TableRow key={upload.id}>
                      <TableCell>{upload.title}</TableCell>
                      <TableCell>{upload.status}</TableCell>
                      <TableCell>{upload.status === "承認済" ? upload.downloads : "-"}</TableCell>
                      <TableCell>{upload.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

