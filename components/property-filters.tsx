"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

interface PropertyFiltersProps {
  onFilterChange: (type: "For Sale" | "For Rent" | "All", search: string) => void
}

export function PropertyFilters({ onFilterChange }: PropertyFiltersProps) {
  const [search, setSearch] = useState("")

  const handleTabChange = (value: string) => {
    const type = value === "All" ? "All" : value as "For Sale" | "For Rent"
    onFilterChange(type, search)
  }

  const handleSearch = (value: string) => {
    setSearch(value)
    onFilterChange("All", value)
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="All" className="w-full" onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="For Sale">For Sale</TabsTrigger>
          <TabsTrigger value="For Rent">For Rent</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search properties..."
          className="pl-8"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  )
} 