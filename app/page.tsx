"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (email === "user@example.com" && password === "demoPass123") {
      // ログイン成功時、ホームページにリダイレクト
      router.push("/home")
    } else {
      setError("メールアドレスまたはパスワードが正しくありません。")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-6 rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-purple-800">アイドルフォト共有アプリ</h2>
          <p className="mt-2 text-sm text-gray-600">アカウントにサインインしてください</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="メールアドレス"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="パスワード"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertTitle>エラー</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" type="submit">
              サインイン
            </Button>
          </div>
        </form>
        <div className="text-center">
          <Link href="/signup" className="text-sm text-purple-600 hover:text-purple-500">
            アカウントをお持ちでない方はこちら
          </Link>
        </div>
      </div>
    </div>
  )
}

