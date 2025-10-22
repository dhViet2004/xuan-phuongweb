"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  ZoomIn,
  Eye,
} from "lucide-react"

const allProducts = [
  {
    id: "1",
    name: "Máy tiện CNC TC-200",
    category: "Máy móc công nghiệp",
    price: "150.000.000đ",
    originalPrice: null,
    images: [
      "/industrial-lathe-machine.jpg",
      "/cnc-lathe-machine-front-view.jpg",
      "/cnc-lathe-machine-control-panel.jpg",
      "/cnc-lathe-machine-side-view.jpg",
    ],
    rating: 4.8,
    reviews: 24,
    badge: "Bán chạy",
    description:
      "Máy tiện CNC TC-200 là giải pháp hoàn hảo cho các xưởng cơ khí cần độ chính xác cao. Với hệ thống điều khiển số hiện đại và khả năng gia công đa dạng, máy phù hợp cho cả sản xuất hàng loạt và gia công đơn chiếc.",
    inStock: true,
    specifications: {
      "Đường kính gia công tối đa": "Φ200mm",
      "Chiều dài gia công tối đa": "300mm",
      "Công suất động cơ chính": "5.5kW",
      "Tốc độ trục chính": "50-4000 rpm",
      "Hệ thống điều khiển": "FANUC 0i-TD",
      "Độ chính xác định vị": "±0.005mm",
      "Kích thước máy": "2100×1200×1800mm",
      "Trọng lượng": "1800kg",
    },
    features: [
      "Hệ thống điều khiển FANUC tiên tiến",
      "Độ chính xác cao ±0.005mm",
      "Thiết kế chắc chắn, ít rung động",
      "Giao diện điều khiển thân thiện",
      "Hệ thống làm mát hiệu quả",
      "Bảo trì đơn giản, chi phí thấp",
    ],
    warranty: "24 tháng",
    shipping: "Miễn phí vận chuyển và lắp đặt",
  },
  {
    id: "2",
    name: "Máy phay đứng VM-850",
    category: "Máy móc công nghiệp",
    price: "400.000.000đ",
    originalPrice: "450.000.000đ",
    images: [
      "/industrial-milling-machine.jpg",
      "/milling-machine-front-view.jpg",
      "/milling-machine-control-panel.jpg",
      "/milling-machine-side-view.jpg",
    ],
    rating: 4.9,
    reviews: 18,
    badge: "Mới nhất",
    description:
      "Máy phay đứng VM-850 với khả năng gia công chính xác cao, phù hợp cho các chi tiết phức tạp. Thiết kế hiện đại, vận hành êm ái và độ bền cao.",
    inStock: true,
    specifications: {
      "Kích thước bàn máy": "850×400mm",
      "Hành trình X/Y/Z": "600/400/450mm",
      "Công suất động cơ chính": "7.5kW",
      "Tốc độ trục chính": "60-8000 rpm",
      "Hệ thống điều khiển": "SIEMENS 828D",
      "Độ chính xác định vị": "±0.008mm",
      "Kích thước máy": "2200×2100×2300mm",
      "Trọng lượng": "3200kg",
    },
    features: [
      "Hệ thống điều khiển SIEMENS hiện đại",
      "Khả năng gia công 3 trục đồng thời",
      "Thiết kế cứng vững, chống rung",
      "Hệ thống làm mát tự động",
      "Giao diện người dùng thân thiện",
      "Bảo trì dễ dàng",
    ],
    warranty: "24 tháng",
    shipping: "Miễn phí vận chuyển và lắp đặt",
  },
  {
    id: "3",
    name: "Máy khoan bàn BD-16",
    category: "Dụng cụ cơ khí",
    price: "15.500.000đ",
    originalPrice: "18.000.000đ",
    images: [
      "/industrial-drilling-machine.jpg",
      "/drilling-machine-front-view.jpg",
      "/drilling-machine-control-panel.jpg",
      "/drilling-machine-side-view.jpg",
    ],
    rating: 4.7,
    reviews: 32,
    badge: "Ưu đãi",
    description:
      "Máy khoan bàn BD-16 với khả năng khoan lỗ chính xác, phù hợp cho các xưởng cơ khí vừa và nhỏ. Thiết kế compact, dễ sử dụng và bảo trì.",
    inStock: true,
    specifications: {
      "Đường kính khoan tối đa": "Φ16mm",
      "Hành trình khoan": "80mm",
      "Công suất động cơ": "0.75kW",
      "Tốc độ khoan": "280-2240 rpm",
      "Kích thước bàn máy": "300×300mm",
      "Kích thước máy": "600×400×1200mm",
      "Trọng lượng": "85kg",
    },
    features: [
      "Thiết kế compact, tiết kiệm không gian",
      "Vận hành êm ái, ít tiếng ồn",
      "Điều chỉnh tốc độ dễ dàng",
      "Bàn máy có thể điều chỉnh",
      "Hệ thống an toàn tốt",
      "Giá thành hợp lý",
    ],
    warranty: "12 tháng",
    shipping: "Miễn phí vận chuyển",
  },
  {
    id: "4",
    name: "Bộ dao tiện carbide",
    category: "Dụng cụ cơ khí",
    price: "2.500.000đ",
    originalPrice: null,
    images: ["/cnc-cutting-tools.jpg", "/cutting-tools-set.jpg", "/carbide-inserts.jpg", "/tool-holders.jpg"],
    rating: 4.6,
    reviews: 45,
    badge: "Bán chạy",
    description:
      "Bộ dụng cụ cắt gọt CNC chất lượng cao, bao gồm các loại dao tiện, dao phay và mảnh hợp kim cứng. Phù hợp cho gia công thép, gang và kim loại màu.",
    inStock: true,
    specifications: {
      "Số lượng dao": "50 chi tiết",
      "Chất liệu": "Hợp kim cứng",
      "Độ cứng": "HRC 92-94",
      "Phạm vi gia công": "Thép, gang, inox",
      "Đường kính dao": "6-20mm",
      "Chiều dài dao": "50-150mm",
    },
    features: [
      "Chất liệu hợp kim cứng cao cấp",
      "Độ bền và độ sắc bén cao",
      "Phù hợp nhiều loại vật liệu",
      "Bao bì chuyên nghiệp",
      "Hướng dẫn sử dụng chi tiết",
      "Giá cả cạnh tranh",
    ],
    warranty: "6 tháng",
    shipping: "Miễn phí vận chuyển",
  },
  {
    id: "5",
    name: "Mũi khoan HSS",
    category: "Phụ tùng thay thế",
    price: "Liên hệ",
    originalPrice: null,
    images: ["/hss-drill-bits-set.jpg", "/tool-holders.jpg", "/drilling-machine-front-view.jpg", "/carbide-turning-tools-set.jpg"],
    rating: 4.5,
    reviews: 28,
    badge: null,
    description:
      "Phụ tùng thay thế chính hãng cho máy tiện CNC, bao gồm trục chính, động cơ, bảng điều khiển và các chi tiết cơ khí khác. Đảm bảo chất lượng và độ tương thích cao.",
    inStock: true,
    specifications: {
      "Loại phụ tùng": "Đa dạng",
      "Chất liệu": "Thép hợp kim",
      "Độ chính xác": "Cao",
      "Tương thích": "Máy tiện CNC TC-200",
      "Xuất xứ": "Nhật Bản",
      "Bảo hành": "12 tháng",
    },
    features: [
      "Phụ tùng chính hãng",
      "Độ tương thích cao",
      "Chất lượng đảm bảo",
      "Giao hàng nhanh chóng",
      "Hỗ trợ kỹ thuật",
      "Giá cả hợp lý",
    ],
    warranty: "12 tháng",
    shipping: "Miễn phí vận chuyển",
  },
  {
    id: "6",
    name: "Thước cặp điện tử",
    category: "Phụ tùng thay thế",
    price: "3.200.000đ",
    originalPrice: null,
    images: ["/digital-caliper-measuring-tool.jpg", "/Thuoc-cap-dien-tu-1.png", "/Thuoc-cap-dien-tu-2.png", "/Thuoc-cap-dien-tu-3.png"],
    rating: 4.4,
    reviews: 22,
    badge: null,
    description:
      "Bộ phụ kiện máy phay bao gồm dao phay, collet, ê tô và các phụ kiện cần thiết khác. Chất lượng cao, độ bền tốt và giá cả hợp lý.",
    inStock: false,
    specifications: {
      "Số lượng chi tiết": "35 chi tiết",
      "Chất liệu dao": "HSS và Carbide",
      "Kích thước collet": "ER20, ER25",
      "Kích thước ê tô": "100mm",
      "Tương thích": "Máy phay đứng",
      "Xuất xứ": "Đài Loan",
    },
    features: [
      "Bộ phụ kiện đầy đủ",
      "Chất lượng cao",
      "Đa dạng kích thước",
      "Bao bì chuyên nghiệp",
      "Hướng dẫn sử dụng",
      "Hỗ trợ kỹ thuật",
    ],
    warranty: "6 tháng",
    shipping: "Miễn phí vận chuyển",
  },
  {
    id: "9",
    name: "Máy hàn TIG-200",
    category: "Máy móc công nghiệp",
    price: "12.800.000đ",
    originalPrice: null,
    images: [
      "/tig-welding-machine-industrial.jpg",
      "/May-han-TIG-200-1.png",
      "/May-han-TIG-200-2.png",
      "/May-han-TIG-200-3.png",
    ],
    rating: 4.7,
    reviews: 15,
    badge: "Mới",
    description: "Máy hàn TIG-200 là máy hàn chuyên nghiệp với công nghệ inverter tiên tiến, phù hợp cho hàn inox và nhôm. Thiết kế gọn nhẹ, dễ di chuyển và sử dụng, phù hợp cho các xưởng cơ khí vừa và nhỏ.",
    inStock: true,
    specifications: {
      "Điện áp vào": "220V ± 15%",
      "Công suất": "4.8 KVA",
      "Dòng hàn": "10-200A",
      "Điện áp không tải": "56V",
      "Đường kính que hàn": "1.6-3.2mm",
      "Hiệu suất": "85%",
      "Kích thước": "420×180×300mm",
      "Trọng lượng": "8.5kg",
    },
    features: [
      "Công nghệ inverter tiết kiệm điện",
      "Hàn TIG và que (MMA)",
      "Bảng điều khiển kỹ thuật số",
      "Chống dính que tự động",
      "Khởi động bằng HF không nhiễu",
      "Bảo vệ quá tải, quá áp",
    ],
    warranty: "18 tháng",
    shipping: "Miễn phí vận chuyển và lắp đặt",
  },
  {
    id: "7",
    name: "Vòng bi SKF 6205",
    category: "Phụ tùng thay thế",
    price: "450.000đ",
    originalPrice: null,
    images: [
      "/skf-ball-bearing-6205.jpg",
      "/Vong-bi-SKF-6205.png",
      "/Vong-bi-SKF-6205-1.png",
      "/spindle-parts.jpg"
    ],
    rating: 4.9,
    reviews: 89,
    badge: null,
    description: "Vòng bi SKF 6205 là sản phẩm chính hãng từ SKF - nhà sản xuất vòng bi hàng đầu thế giới. Được thiết kế với độ chính xác cao, khả năng chịu tải tốt và tuổi thọ cao, phù hợp cho nhiều ứng dụng trong công nghiệp như động cơ điện, máy bơm, và các thiết bị cơ khí khác.",
    inStock: true,
    specifications: {
      "Đường kính trong": "25mm",
      "Đường kính ngoài": "52mm",
      "Chiều rộng": "15mm",
      "Tốc độ giới hạn": "32000 rpm",
      "Tải trọng động": "14.8 kN",
      "Tải trọng tĩnh": "7.8 kN",
      "Loại vòng bi": "Vòng bi rãnh sâu một dãy bi",
      "Vật liệu": "Thép bearing chrome",
    },
    features: [
      "Chính hãng SKF Sweden",
      "Độ chính xác cao",
      "Vận hành êm ái",
      "Chịu tải tốt",
      "Tuổi thọ cao",
      "Bảo hành chính hãng",
    ],
    warranty: "12 tháng",
    shipping: "Miễn phí vận chuyển",
  },
]

const reviews = [
  {
    id: 1,
    user: "Nguyễn Văn A",
    company: "Công ty TNHH ABC",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Máy rất tốt, độ chính xác cao. Đội ngũ kỹ thuật hỗ trợ lắp đặt và hướng dẫn sử dụng rất chuyên nghiệp. Đã sử dụng được 6 tháng, hoạt động ổn định.",
  },
  {
    id: 2,
    user: "Trần Thị B",
    company: "Xưởng cơ khí XYZ",
    rating: 5,
    date: "2024-02-20",
    comment:
      "Chất lượng tuyệt vời, giao hàng đúng hẹn. Giá cả hợp lý so với chất lượng. Sẽ tiếp tục mua thêm thiết bị khác.",
  },
  {
    id: 3,
    user: "Lê Văn C",
    company: "Nhà máy DEF",
    rating: 4,
    date: "2024-03-10",
    comment: "Máy hoạt động tốt, nhân viên hỗ trợ nhiệt tình. Chỉ có điều thời gian giao hàng hơi lâu một chút.",
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const cart = useCart()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isImageZoomed, setIsImageZoomed] = useState(false)

  const productId = params.id as string
  const productData = allProducts.find((product) => product.id === productId)

  if (!productData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Không tìm thấy sản phẩm</h1>
          <p className="text-muted-foreground mb-6">Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link href="/products">
            <Button>Quay lại trang sản phẩm</Button>
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedProducts = allProducts
    .filter((product) => product.id !== productId && product.category === productData.category)
    .slice(0, 3)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productData.images.length) % productData.images.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground transition-colors">
            Trang chủ
          </a>
          <span>/</span>
          <a href="/products" className="hover:text-foreground transition-colors">
            Sản phẩm
          </a>
          <span>/</span>
          <span className="text-foreground">{productData.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden group">
              <img
                src={productData.images[currentImageIndex] || "/placeholder.svg"}
                alt={productData.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {productData.badge && (
                <Badge
                  className="absolute top-4 left-4 z-10"
                  variant={productData.badge === "Ưu đãi" ? "destructive" : "secondary"}
                >
                  {productData.badge}
                </Badge>
              )}
              {/* Zoom button for image zoom functionality */}
              <Dialog open={isImageZoomed} onOpenChange={setIsImageZoomed}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                  <div className="relative w-full h-full">
                    <img
                      src={productData.images[currentImageIndex] || "/placeholder.svg"}
                      alt={productData.name}
                      className="w-full h-full object-contain"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square bg-muted rounded-md overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                    currentImageIndex === index ? "border-primary shadow-md" : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${productData.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{productData.category}</Badge>
                {productData.inStock ? (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Còn hàng
                  </Badge>
                ) : (
                  <Badge variant="destructive">Hết hàng</Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold mb-4 text-balance">{productData.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(productData.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {productData.rating} ({productData.reviews} đánh giá)
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-pretty">{productData.description}</p>
            </div>

            <Separator />

            <div>
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-3xl font-bold text-primary">{productData.price}</span>
                {productData.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">{productData.originalPrice}</span>
                )}
              </div>

              {productData.inStock && (
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">Số lượng:</span>
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="h-8 w-8 p-0 hover:bg-muted"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <Input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                        className="w-16 h-8 text-center border-0 focus-visible:ring-0"
                        min="1"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                        className="h-8 w-8 p-0 hover:bg-muted"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button 
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90" 
                  disabled={!productData.inStock}
                  onClick={() => {
                    cart.addItem({
                      id: productData.id,
                      name: productData.name,
                      price: productData.price,
                      image: productData.images[0],
                      quantity: quantity,
                    });
                  }}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {productData.inStock ? "Thêm vào giỏ hàng" : "Hết hàng"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`transition-colors ${isWishlisted ? "text-red-500 border-red-500 bg-red-50 hover:bg-red-100" : "hover:bg-primary/5 hover:text-primary hover:border-primary cursor-pointer"}`}
                >
                  <Heart className={`mr-2 h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
                  Yêu thích
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover:bg-primary/5 hover:text-primary hover:border-primary bg-transparent cursor-pointer"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Chia sẻ
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <Button
                  variant="outline"
                  className="justify-start hover:text-primary hover:bg-primary/5 hover:border-primary cursor-pointer"
                >
                  <Phone className="mr-2 h-4 w-4 text-primary" />
                  Gọi tư vấn: 0123.456.789
                </Button>
                <Button
                  variant="outline"
                  className="justify-start hover:text-primary hover:bg-primary/5 hover:border-primary cursor-pointer"
                >
                  <MessageCircle className="mr-2 h-4 w-4 text-primary " />
                  Chat với chuyên gia
                </Button>
              </div>
            </div>

            <Separator />

            {/* Product Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">{productData.shipping}</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Bảo hành {productData.warranty}</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span className="text-sm">Đổi trả trong 7 ngày</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="specifications" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="specifications">Thông số kỹ thuật</TabsTrigger>
            <TabsTrigger value="features">Tính năng</TabsTrigger>
            <TabsTrigger value="reviews">Đánh giá ({productData.reviews})</TabsTrigger>
            <TabsTrigger value="support">Hỗ trợ</TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Thông số kỹ thuật</CardTitle>
                <CardDescription>Chi tiết kỹ thuật của {productData.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(productData.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tính năng nổi bật</CardTitle>
                <CardDescription>Những ưu điểm vượt trội của {productData.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {productData.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Đánh giá từ khách hàng</CardTitle>
                  <CardDescription>
                    {productData.reviews} đánh giá với điểm trung bình {productData.rating}/5
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{review.user}</h4>
                            <p className="text-sm text-muted-foreground">{review.company}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Write Review */}
              <Card>
                <CardHeader>
                  <CardTitle>Viết đánh giá</CardTitle>
                  <CardDescription>Chia sẻ trải nghiệm của bạn về sản phẩm này</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Họ tên" />
                      <Input placeholder="Công ty/Tổ chức" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">Đánh giá:</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                        ))}
                      </div>
                    </div>
                    <Textarea placeholder="Viết đánh giá của bạn..." rows={4} />
                    <Button>Gửi đánh giá</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="support" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hỗ trợ kỹ thuật</CardTitle>
                  <CardDescription>Liên hệ với đội ngũ kỹ thuật chuyên nghiệp</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>Hotline: 0123.456.789</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span>Email: support@xuanphuong.com</span>
                  </div>
                  <Button className="w-full">Liên hệ hỗ trợ</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tài liệu kỹ thuật</CardTitle>
                  <CardDescription>Tải xuống catalog và hướng dẫn sử dụng</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    📄 Catalog sản phẩm (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    📋 Hướng dẫn lắp đặt (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    🔧 Hướng dẫn bảo trì (PDF)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sản phẩm liên quan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square bg-muted overflow-hidden relative">
                  <img
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    Xem nhanh
                  </Button>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-balance">{product.name}</CardTitle>
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
                    <span className="text-sm text-muted-foreground">({product.rating})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <Link href={`/products/${product.id}`}>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Xem chi tiết
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
