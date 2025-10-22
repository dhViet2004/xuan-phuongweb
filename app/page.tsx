import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Settings,
  Wrench,
  Cog,
  Shield,
  Truck,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Phone,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  Chuyên nghiệp - Uy tín - Chất lượng
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Xưởng Cơ Khí <span className="text-primary">Xuân Phương</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Chuyên cung cấp thiết bị cơ khí chất lượng cao, dịch vụ gia công chính xác và sửa chữa máy móc công
                  nghiệp tại Bắc Ninh với hơn 15 năm kinh nghiệm.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products?category=all">
                    <Button size="lg" className="text-lg px-8">
                      Xem sản phẩm
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    <Phone className="mr-2 h-5 w-5" />
                    Liên hệ ngay
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <img
                    src="/industrial-machinery-workshop-with-modern-equipmen.jpg"
                    alt="Xưởng cơ khí Xuân Phương"
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Tại sao chọn Xuân Phương?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Chúng tôi cam kết mang đến giải pháp cơ khí tối ưu với chất lượng hàng đầu
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Thiết bị hiện đại</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Trang bị máy móc công nghệ tiên tiến, đảm bảo độ chính xác cao trong mọi sản phẩm
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Đội ngũ chuyên nghiệp</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Kỹ thuật viên giàu kinh nghiệm, được đào tạo bài bản và cập nhật công nghệ mới
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Bảo hành dài hạn</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Cam kết bảo hành lên đến 24 tháng và hỗ trợ kỹ thuật suốt đời sản phẩm
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Giao hàng nhanh</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Cam kết giao hàng trong 24-48h tại khu vực Bắc Ninh và các tỉnh lân cận
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Chứng nhận chất lượng</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Đạt chứng nhận ISO 9001:2015 và các tiêu chuẩn chất lượng quốc tế
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Dịch vụ toàn diện</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Từ tư vấn, thiết kế, gia công đến lắp đặt và bảo trì máy móc công nghiệp
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Sản phẩm nổi bật</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Khám phá các sản phẩm cơ khí chất lượng cao được khách hàng tin tưởng
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src="/industrial-lathe-machine.jpg"
                    alt="Máy tiện công nghiệp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Máy tiện CNC</CardTitle>
                    <Badge variant="secondary">Bán chạy</Badge>
                  </div>
                  <CardDescription>Máy tiện CNC chính xác cao, phù hợp cho gia công chi tiết phức tạp</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">Liên hệ</span>
                    <Link href="/products/1">
                      <Button size="sm">
                        Xem chi tiết
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src="/industrial-milling-machine.jpg"
                    alt="Máy phay công nghiệp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Máy phay đứng</CardTitle>
                    <Badge variant="outline">Mới</Badge>
                  </div>
                  <CardDescription>
                    Máy phay đứng hiệu suất cao, thích hợp cho các xưởng cơ khí vừa và nhỏ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">Liên hệ</span>
                    <Link href="/products/2">
                      <Button size="sm">
                        Xem chi tiết
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src="/industrial-drilling-machine.jpg"
                    alt="Máy khoan công nghiệp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Máy khoan bàn</CardTitle>
                    <Badge variant="secondary">Ưu đãi</Badge>
                  </div>
                  <CardDescription>Máy khoan bàn chính xác, động cơ mạnh mẽ, phù hợp mọi loại vật liệu</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">Liên hệ</span>
                    <Link href="/products/3">
                      <Button size="sm">
                        Xem chi tiết
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/products?category=all">
                <Button size="lg" variant="outline">
                  Xem tất cả sản phẩm
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Dịch vụ chuyên nghiệp</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Đội ngũ kỹ thuật viên giàu kinh nghiệm sẵn sàng hỗ trợ mọi nhu cầu của bạn
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cog className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Gia công cơ khí</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Gia công chính xác các chi tiết cơ khí theo yêu cầu với độ chính xác cao, đáp ứng mọi tiêu chuẩn
                      kỹ thuật.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Gia công theo bản vẽ kỹ thuật
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Độ chính xác ±0.01mm
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Sửa chữa máy móc</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dịch vụ sửa chữa, bảo trì máy móc công nghiệp chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh
                      nghiệm.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Hỗ trợ 24/7
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Bảo hành dịch vụ 12 tháng
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Lắp đặt thiết bị</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Lắp đặt và vận hành thử nghiệm máy móc, thiết bị công nghiệp tại nhà máy, xưởng sản xuất.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Khảo sát miễn phí
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Đào tạo vận hành
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Vận chuyển lắp đặt</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dịch vụ vận chuyển an toàn và lắp đặt tại hiện trường với đội ngũ chuyên nghiệp.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Vận chuyển toàn quốc
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Bảo hiểm hàng hóa
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Khách hàng nói gì về chúng tôi</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Hơn 500+ khách hàng tin tưởng và hài lòng với dịch vụ của Xuân Phương
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Chất lượng sản phẩm tuyệt vời, giao hàng đúng hẹn. Đội ngũ kỹ thuật rất chuyên nghiệp và nhiệt tình
                  hỗ trợ."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-semibold text-primary">AN</span>
                  </div>
                  <div>
                    <p className="font-semibold">Anh Nguyễn</p>
                    <p className="text-sm text-muted-foreground">Công ty TNHH ABC</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Đã hợp tác với Xuân Phương được 3 năm. Luôn hài lòng về chất lượng và dịch vụ hậu mãi tốt."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-semibold text-primary">TH</span>
                  </div>
                  <div>
                    <p className="font-semibold">Chị Thu Hà</p>
                    <p className="text-sm text-muted-foreground">Nhà máy XYZ</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Giá cả hợp lý, chất lượng đảm bảo. Đặc biệt là dịch vụ sửa chữa nhanh chóng, hiệu quả."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-semibold text-primary">DM</span>
                  </div>
                  <div>
                    <p className="font-semibold">Anh Đức Minh</p>
                    <p className="text-sm text-muted-foreground">Xưởng cơ khí DEF</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Sẵn sàng hợp tác cùng chúng tôi?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty opacity-90">
              Liên hệ ngay để được tư vấn miễn phí và nhận báo giá tốt nhất cho dự án của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Gọi ngay: 0123.456.789
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Nhận báo giá
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
