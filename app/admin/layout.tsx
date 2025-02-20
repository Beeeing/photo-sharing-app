import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart, Users, FolderOpen, Image, UserCog, CreditCard, FileText, LogOut } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-purple-800">管理パネル</h1>
        </div>
        <nav className="mt-4">
          <Link href="/admin">
            <Button variant="ghost" className="w-full justify-start">
              <BarChart className="mr-2 h-4 w-4" />
              ダッシュボード
            </Button>
          </Link>
          <Link href="/admin/photo-approval">
            <Button variant="ghost" className="w-full justify-start">
              <Image className="mr-2 h-4 w-4" />
              写真承認
            </Button>
          </Link>
          <Link href="/admin/user-management">
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              ユーザー管理
            </Button>
          </Link>
          <Link href="/admin/idol-folder-management">
            <Button variant="ghost" className="w-full justify-start">
              <FolderOpen className="mr-2 h-4 w-4" />
              アイドルフォルダ管理
            </Button>
          </Link>
          <Link href="/admin/staff-management">
            <Button variant="ghost" className="w-full justify-start">
              <UserCog className="mr-2 h-4 w-4" />
              職員管理
            </Button>
          </Link>
          <Link href="/admin/payment-management">
            <Button variant="ghost" className="w-full justify-start">
              <CreditCard className="mr-2 h-4 w-4" />
              支払い管理
            </Button>
          </Link>
          <Link href="/admin/reports">
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              レポート
            </Button>
          </Link>
        </nav>
        <div className="absolute bottom-4 left-4">
          <Button variant="ghost" className="w-full justify-start text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            ログアウト
          </Button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  )
}

