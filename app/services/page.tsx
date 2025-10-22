import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Cog,
  Wrench,
  Settings,
  Truck,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Phone,
  ArrowRight,
  Factory,
  Zap,
  Target,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Cog,
      title: "Gia công cơ khí chính xác",
      description: "Gia công các chi tiết cơ khí theo yêu cầu với độ chính xác cao",
      features: [
        "Gia công theo bản vẽ kỹ thuật",
        "Độ chính xác ±0.01mm",
        "Gia công CNC hiện đại",
        "Kiểm tra chất lượng nghiêm ngặt",
      ],
      price: "Từ 50.000đ/chi tiết",
      badge: "Phổ biến",
    },
    {
      icon: Wrench,
      title: "Sửa chữa máy móc công nghiệp",
      description: "Dịch vụ sửa chữa, bảo trì máy móc công nghiệp chuyên nghiệp",
      features: ["Hỗ trợ 24/7", "Kỹ thuật viên giàu kinh nghiệm", "Phụ tùng chính hãng", "Bảo hành dịch vụ 12 tháng"],
      price: "Liên hệ báo giá",
      badge: "Ưu tiên",
    },
    {
      icon: Settings,
      title: "Lắp đặt thiết bị",
      description: "Lắp đặt và vận hành thử nghiệm máy móc, thiết bị công nghiệp",
      features: ["Khảo sát miễn phí", "Lắp đặt chuyên nghiệp", "Đào tạo vận hành", "Hỗ trợ kỹ thuật sau lắp đặt"],
      price: "Từ 2.000.000đ",
      badge: null,
    },
    {
      icon: Factory,
      title: "Thiết kế chế tạo máy móc",
      description: "Thiết kế và chế tạo máy móc theo yêu cầu riêng của khách hàng",
      features: [
        "Tư vấn thiết kế miễn phí",
        "Bản vẽ kỹ thuật chi tiết",
        "Chế tạo theo tiêu chuẩn",
        "Thử nghiệm và bàn giao",
      ],
      price: "Liên hệ báo giá",
      badge: "Chuyên nghiệp",
    },
    {
      icon: Truck,
      title: "Vận chuyển lắp đặt",
      description: "Dịch vụ vận chuyển an toàn và lắp đặt tại hiện trường",
      features: ["Vận chuyển toàn quốc", "Bảo hiểm hàng hóa", "Đóng gói chuyên nghiệp", "Lắp đặt tại hiện trường"],
      price: "Từ 500.000đ",
      badge: null,
    },
    {
      icon: Shield,
      title: "Bảo trì định kỳ",
      description: "Dịch vụ bảo trì định kỳ để đảm bảo máy móc hoạt động ổn định",
      features: ["Lịch bảo trì định kỳ", "Kiểm tra toàn diện", "Thay thế phụ tùng khi cần", "Báo cáo tình trạng máy"],
      price: "Từ 1.000.000đ/lần",
      badge: null,
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Tiếp nhận yêu cầu",
      description: "Khách hàng liên hệ và cung cấp thông tin chi tiết về yêu cầu",
    },
    {
      step: "02",
      title: "Khảo sát đánh giá",
      description: "Đội ngũ kỹ thuật khảo sát và đánh giá yêu cầu kỹ thuật",
    },
    {
      step: "03",
      title: "Báo giá chi tiết",
      description: "Cung cấp báo giá chi tiết và thời gian thực hiện",
    },
    {
      step: "04",
      title: "Thực hiện dự án",
      description: "Triển khai thực hiện theo đúng tiến độ và chất lượng cam kết",
    },
    {
      step: "05",
      title: "Kiểm tra nghiệm thu",
      description: "Kiểm tra chất lượng và nghiệm thu cùng khách hàng",
    },
    {
      step: "06",
      title: "Bàn giao hỗ trợ",
      description: "Bàn giao sản phẩm và cung cấp hỗ trợ kỹ thuật",
    },
  ]

  const benefits = [
    {
      icon: Target,
      title: "Chất lượng đảm bảo",
      description: "Cam kết chất lượng cao với quy trình kiểm tra nghiêm ngặt",
    },
    {
      icon: Clock,
      title: "Đúng tiến độ",
      description: "Hoàn thành đúng thời gian cam kết, không làm gián đoạn sản xuất",
    },
    {
      icon: Zap,
      title: "Công nghệ hiện đại",
      description: "Ứng dụng công nghệ và thiết bị tiên tiến nhất",
    },
    {
      icon: Shield,
      title: "Bảo hành dài hạn",
      description: "Bảo hành lên đến 24 tháng và hỗ trợ kỹ thuật suốt đời",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Dịch vụ
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Dịch vụ cơ khí <span className="text-primary">chuyên nghiệp</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Đội ngũ kỹ thuật viên giàu kinh nghiệm với hơn 15 năm trong nghề, sẵn sàng hỗ trợ mọi nhu cầu cơ khí của
                bạn với chất lượng hàng đầu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Tư vấn miễn phí
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent">
                  Xem báo giá
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Dịch vụ của chúng tôi</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Giải pháp toàn diện cho mọi nhu cầu cơ khí của doanh nghiệp
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      {service.badge && (
                        <Badge variant={service.badge === "Ưu tiên" ? "destructive" : "secondary"} className="text-xs">
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Giá từ</p>
                          <p className="font-semibold text-primary">{service.price}</p>
                        </div>
                        <Button size="sm">
                          Liên hệ
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Quy trình làm việc</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Quy trình chuyên nghiệp đảm bảo chất lượng và tiến độ dự án
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                            {step.step}
                          </div>
                          <CardTitle className="text-lg">{step.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="leading-relaxed">{step.description}</CardDescription>
                      </CardContent>
                    </Card>
                    {index < processSteps.length - 1 && index % 3 !== 2 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Tại sao chọn dịch vụ của chúng tôi?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Những lợi ích vượt trội khi sử dụng dịch vụ tại Xuân Phương
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Khách hàng nói gì về dịch vụ</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Phản hồi từ những khách hàng đã sử dụng dịch vụ của chúng tôi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Dịch vụ gia công tuyệt vời</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "Chất lượng gia công rất chính xác, đúng yêu cầu kỹ thuật. Đội ngũ kỹ thuật chuyên nghiệp và hỗ trợ
                    nhiệt tình."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-primary">NV</span>
                    </div>
                    <div>
                      <p className="font-semibold">Nguyễn Văn A</p>
                      <p className="text-sm text-muted-foreground">Công ty TNHH ABC</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Sửa chữa nhanh chóng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "Máy bị hỏng được sửa chữa rất nhanh, không ảnh hưởng đến tiến độ sản xuất. Giá cả hợp lý, dịch vụ
                    tốt."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-primary">TH</span>
                    </div>
                    <div>
                      <p className="font-semibold">Trần Thị B</p>
                      <p className="text-sm text-muted-foreground">Nhà máy XYZ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Lắp đặt chuyên nghiệp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "Lắp đặt máy móc rất chuyên nghiệp, hướng dẫn vận hành chi tiết. Hỗ trợ kỹ thuật sau bán hàng tốt."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-primary">LV</span>
                    </div>
                    <div>
                      <p className="font-semibold">Lê Văn C</p>
                      <p className="text-sm text-muted-foreground">Xưởng cơ khí DEF</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Cần hỗ trợ dịch vụ cơ khí?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty opacity-90">
              Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận báo giá tốt nhất cho dự án của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Hotline: 0123.456.789
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Yêu cầu báo giá
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
