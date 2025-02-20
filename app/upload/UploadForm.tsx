"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"

const tags = [
  { id: "new", label: "新着写真" },
  { id: "popular", label: "人気アイドル" },
  { id: "live", label: "ライブフォト" },
  { id: "offshot", label: "オフショット" },
  { id: "mv", label: "MVメイキング" },
  { id: "fanmeeting", label: "ファンミーティング" },
]

export default function UploadForm() {
  const searchParams = useSearchParams()
  const idolId = searchParams.get("idolId")
  const [price, setPrice] = useState("100")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleTagChange = (tagId: string) => {
    setSelectedTags((prev) => (prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]))
  }

  return (
    <form className="space-y-6 bg-white p-6 rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="idol" className="block text-sm font-medium text-gray-700">
            アイドル名
          </Label>
          <Input
            id="idol"
            type="text"
            required
            className="mt-1"
            defaultValue={idolId ? `アイドル${String.fromCharCode(64 + Number.parseInt(idolId))}` : ""}
          />
        </div>
        <div>
          <Label htmlFor="group" className="block text-sm font-medium text-gray-700">
            グループ名
          </Label>
          <Input id="group" type="text" className="mt-1" />
        </div>
      </div>
      <div>
        <Label htmlFor="event" className="block text-sm font-medium text-gray-700">
          公演名
        </Label>
        <Input id="event" type="text" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="photo" className="block text-sm font-medium text-gray-700">
          写真
        </Label>
        <Input id="photo" type="file" accept="image/*" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="price" className="block text-sm font-medium text-gray-700">
          料金設定
        </Label>
        <Select value={price} onValueChange={setPrice}>
          <SelectTrigger className="w-full mt-1">
            <SelectValue placeholder="料金を選択" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 5 }, (_, i) => (i * 50 + 100).toString()).map((value) => (
              <SelectItem key={value} value={value}>
                {value}円
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="description" className="block text-sm font-medium text-gray-700">
          説明
        </Label>
        <Textarea id="description" className="mt-1" />
      </div>
      <div>
        <Label className="block text-sm font-medium text-gray-700 mb-2">タグ</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {tags.map((tag) => (
            <div key={tag.id} className="flex items-center space-x-2">
              <Checkbox
                id={tag.id}
                checked={selectedTags.includes(tag.id)}
                onCheckedChange={() => handleTagChange(tag.id)}
              />
              <Label
                htmlFor={tag.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {tag.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
        <Upload className="h-4 w-4 mr-2" /> 写真をアップロード
      </Button>
    </form>
  )
}

