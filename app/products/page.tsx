"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, Grid, List, ArrowRight, Star, SlidersHorizontal } from "lucide-react"

// Mock data for products
const products = [
  {
    id: 1,
    name: "Máy tiện CNC TC-200",
    category: "machinery",
    price: "Liên hệ",
    originalPrice: null,
    image: "/industrial-lathe-machine.jpg",
    rating: 4.8,
    reviews: 24,
    badge: "Bán chạy",
    description: "Máy tiện CNC chính xác cao, phù hợp cho gia công chi tiết phức tạp",
    inStock: true,
  },
  {
    id: 2,
    name: "Máy phay đứng VM-850",
    category: "machinery",
    price: "Liên hệ",
    originalPrice: null,
    image: "/industrial-milling-machine.jpg",
    rating: 4.9,
    reviews: 18,
    badge: "Mới",
    description: "Máy phay đứng hiệu suất cao, thích hợp cho các xưởng cơ khí vừa và nhỏ",
    inStock: true,
  },
  {
    id: 3,
    name: "Máy khoan bàn BD-16",
    category: "machinery",
    price: "15.500.000đ",
    originalPrice: "18.000.000đ",
    image: "/industrial-drilling-machine.jpg",
    rating: 4.7,
    reviews: 32,
    badge: "Ưu đãi",
    description: "Máy khoan bàn chính xác, động cơ mạnh mẽ, phù hợp mọi loại vật liệu",
    inStock: true,
  },
  {
    id: 4,
    name: "Bộ dao tiện carbide",
    category: "tools",
    price: "2.500.000đ",
    originalPrice: null,
    image: "/carbide-turning-tools-set.jpg",
    rating: 4.6,
    reviews: 45,
    badge: null,
    description: "Bộ dao tiện carbide chất lượng cao, độ bền tuyệt vời",
    inStock: true,
  },
  {
    id: 5,
    name: "Mũi khoan HSS",
    category: "tools",
    price: "850.000đ",
    originalPrice: null,
    image: "/hss-drill-bits-set.jpg",
    rating: 4.5,
    reviews: 67,
    badge: null,
    description: "Bộ mũi khoan HSS từ 1-13mm, phù hợp cho thép và kim loại",
    inStock: true,
  },
  {
    id: 6,
    name: "Thước cặp điện tử",
    category: "tools",
    price: "1.200.000đ",
    originalPrice: null,
    image: "/digital-caliper-measuring-tool.jpg",
    rating: 4.8,
    reviews: 28,
    badge: "Chất lượng cao",
    description: "Thước cặp điện tử độ chính xác 0.01mm, màn hình LCD rõ nét",
    inStock: true,
  },
  {
    id: 7,
    name: "Vòng bi SKF 6205",
    category: "parts",
    price: "450.000đ",
    originalPrice: null,
    image: "/skf-ball-bearing-6205.jpg",
    rating: 4.9,
    reviews: 89,
    badge: null,
    description: "Vòng bi SKF chính hãng, chất lượng cao, tuổi thọ lâu dài",
    inStock: true,
  },
  {
    id: 8,
    name: "Dây curoa răng",
    category: "parts",
    price: "320.000đ",
    originalPrice: null,
    image: "/timing-belt-industrial.jpg",
    rating: 4.4,
    reviews: 23,
    badge: null,
    description: "Dây curoa răng công nghiệp, chịu lực tốt, độ bền cao",
    inStock: false,
  },
  {
    id: 9,
    name: "Máy hàn TIG-200",
    category: "machinery",
    price: "12.800.000đ",
    originalPrice: null,
    image: "/tig-welding-machine-industrial.jpg",
    rating: 4.7,
    reviews: 15,
    badge: "Mới",
    description: "Máy hàn TIG chuyên nghiệp, phù hợp hàn inox và nhôm",
    inStock: true,
  },
]

const categories = [
  { id: "all", name: "Tất cả sản phẩm", count: products.length },
  { id: "machinery", name: "Máy móc công nghiệp", count: products.filter((p) => p.category === "machinery").length },
  { id: "tools", name: "Dụng cụ cơ khí", count: products.filter((p) => p.category === "tools").length },
  { id: "parts", name: "Phụ tùng thay thế", count: products.filter((p) => p.category === "parts").length },
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showInStockOnly, setShowInStockOnly] = useState(false)

  useEffect(() => {
    const category = searchParams.get("category")
    if (category && ["all", "machinery", "tools", "parts"].includes(category)) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesStock = !showInStockOnly || product.inStock
      return matchesSearch && matchesCategory && matchesStock
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviews - a.reviews
        default:
          return 0
      }
    })

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Danh mục sản phẩm</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground"
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{category.name}</span>
                <span className="text-xs">({category.count})</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-4">Bộ lọc</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="instock"
              checked={showInStockOnly}
              onCheckedChange={(checked) => setShowInStockOnly(checked as boolean)}
            />
            <label htmlFor="instock" className="text-sm text-muted-foreground">
              Chỉ hiển thị hàng có sẵn
            </label>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-4">Sắp xếp theo</h3>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Tên sản phẩm</SelectItem>
            <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
            <SelectItem value="reviews">Nhiều đánh giá nhất</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )

  const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="aspect-square bg-muted overflow-hidden relative">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <Badge className="absolute top-2 left-2" variant={product.badge === "Ưu đãi" ? "destructive" : "secondary"}>
            {product.badge}
          </Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="outline" className="bg-background">
              Hết hàng
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
        </div>
        <CardDescription className="line-clamp-2">{product.description}</CardDescription>
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <span className="text-xl font-bold text-primary">{product.price}</span>
            {product.originalPrice && (
              <div className="text-sm text-muted-foreground line-through">{product.originalPrice}</div>
            )}
          </div>
          {product.inStock ? (
            <Link href={`/products/${product.id}`}>
              <Button size="sm">
                Xem chi tiết
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Button size="sm" disabled>
              Hết hàng
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )

  const ProductListItem = ({ product }: { product: (typeof products)[0] }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="flex">
        <div className="w-48 h-48 bg-muted overflow-hidden relative flex-shrink-0">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          {product.badge && (
            <Badge className="absolute top-2 left-2" variant={product.badge === "Ưu đãi" ? "destructive" : "secondary"}>
              {product.badge}
            </Badge>
          )}
        </div>
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            {!product.inStock && <Badge variant="outline">Hết hàng</Badge>}
          </div>
          <p className="text-muted-foreground mb-3 leading-relaxed">{product.description}</p>
          <div className="flex items-center space-x-1 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews} đánh giá)</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <span className="text-2xl font-bold text-primary">{product.price}</span>
              {product.originalPrice && (
                <div className="text-sm text-muted-foreground line-through">{product.originalPrice}</div>
              )}
            </div>
            {product.inStock ? (
              <Link href={`/products/${product.id}`}>
                <Button>
                  Xem chi tiết
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button disabled>Hết hàng</Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Sản phẩm</h1>
          <p className="text-muted-foreground">Khám phá bộ sưu tập thiết bị cơ khí chất lượng cao của chúng tôi</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <Card className="p-6 sticky top-4">
              <FilterSidebar />
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Input
                  type="search"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>

              <div className="flex gap-2">
                {/* Mobile Filter */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden bg-transparent">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Bộ lọc
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <div className="mt-6">
                      <FilterSidebar />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* View Mode Toggle */}
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Hiển thị {filteredProducts.length} sản phẩm
                {selectedCategory !== "all" && (
                  <span> trong danh mục "{categories.find((c) => c.id === selectedCategory)?.name}"</span>
                )}
              </p>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">Không tìm thấy sản phẩm nào</p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Xóa bộ lọc
                </Button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProducts.map((product) => (
                  <ProductListItem key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Load More Button */}
              {filteredProducts.length > 0 && (
                <div className="text-center mt-12">
                  <Link href="/products?category=all">
                    <Button variant="outline" size="lg">
                      Xem thêm sản phẩm
                    </Button>
                  </Link>
                </div>
              )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
