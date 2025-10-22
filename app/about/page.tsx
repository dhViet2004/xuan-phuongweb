import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Award,
  Target,
  Heart,
  Factory,
  Wrench,
  Shield,
  TrendingUp,
  CheckCircle,
  Star,
  Phone,
  ArrowRight,
} from "lucide-react"

export default function AboutPage() {
  const stats = [
    { label: "Năm kinh nghiệm", value: "15+", icon: Award },
    { label: "Khách hàng tin tưởng", value: "500+", icon: Users },
    { label: "Dự án hoàn thành", value: "1000+", icon: CheckCircle },
    { label: "Tỷ lệ hài lòng", value: "98%", icon: Star },
  ]

  const milestones = [
    {
      year: "2009",
      title: "Thành lập công ty",
      description: "Xưởng Cơ Khí Xuân Phương được thành lập tại Bắc Ninh với 5 nhân viên đầu tiên",
    },
    {
      year: "2012",
      title: "Mở rộng quy mô",
      description: "Đầu tư máy móc hiện đại, mở rộng xưởng sản xuất lên 2000m²",
    },
    {
      year: "2015",
      title: "Chứng nhận ISO",
      description: "Đạt chứng nhận ISO 9001:2015, khẳng định chất lượng sản phẩm và dịch vụ",
    },
    {
      year: "2018",
      title: "Công nghệ CNC",
      description: "Đầu tư hệ thống máy CNC tiên tiến, nâng cao độ chính xác gia công",
    },
    {
      year: "2021",
      title: "Chuyển đổi số",
      description: "Ứng dụng công nghệ 4.0 trong quản lý và sản xuất",
    },
    {
      year: "2024",
      title: "Phát triển bền vững",
      description: "Cam kết phát triển bền vững, thân thiện với môi trường",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Chất lượng",
      description: "Cam kết mang đến sản phẩm và dịch vụ chất lượng cao nhất cho khách hàng",
    },
    {
      icon: Heart,
      title: "Tận tâm",
      description: "Phục vụ khách hàng với sự tận tâm, nhiệt tình và chuyên nghiệp",
    },
    {
      icon: Shield,
      title: "Uy tín",
      description: "Xây dựng niềm tin thông qua sự minh bạch và trách nhiệm",
    },
    {
      icon: TrendingUp,
      title: "Đổi mới",
      description: "Không ngừng cải tiến và ứng dụng công nghệ mới",
    },
  ]

  const team = [
    {
      name: "Nguyễn Văn Phương",
      position: "Giám đốc điều hành",
      experience: "20 năm kinh nghiệm",
      description: "Chuyên gia hàng đầu trong lĩnh vực cơ khí chính xác",
    },
    {
      name: "Trần Minh Xuân",
      position: "Trưởng phòng kỹ thuật",
      experience: "15 năm kinh nghiệm",
      description: "Thạc sĩ Cơ khí, chuyên về thiết kế và gia công CNC",
    },
    {
      name: "Lê Thị Hoa",
      position: "Trưởng phòng kinh doanh",
      experience: "12 năm kinh nghiệm",
      description: "Chuyên gia tư vấn giải pháp cơ khí cho doanh nghiệp",
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
                Về chúng tôi
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Xưởng Cơ Khí <span className="text-primary">Xuân Phương</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Với hơn 15 năm kinh nghiệm trong lĩnh vực cơ khí chính xác, chúng tôi tự hào là đối tác tin cậy của hàng
                trăm doanh nghiệp trên toàn quốc.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Liên hệ ngay
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent">
                  Xem dự án
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-balance">Câu chuyện của chúng tôi</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Xưởng Cơ Khí Xuân Phương được thành lập vào năm 2009 với khát vọng mang đến những sản phẩm cơ khí
                    chất lượng cao cho thị trường Việt Nam. Bắt đầu từ một xưởng nhỏ với vài chiếc máy cơ bản, chúng tôi
                    đã không ngừng đầu tư và phát triển.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ngày nay, với đội ngũ hơn 50 kỹ sư và công nhân lành nghề, cùng hệ thống máy móc hiện đại, chúng tôi
                    tự tin đáp ứng mọi yêu cầu khắt khe nhất của khách hàng trong lĩnh vực cơ khí chính xác.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Sứ mệnh của chúng tôi là trở thành đối tác tin cậy, đồng hành cùng sự phát triển của ngành công
                    nghiệp Việt Nam thông qua những sản phẩm và dịch vụ chất lượng cao.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <img
                    src="/industrial-machinery-workshop-with-modern-equipmen.jpg"
                    alt="Xưởng Cơ Khí Xuân Phương"
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-balance">Hành trình phát triển</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Những cột mốc quan trọng trong quá trình phát triển của Xuân Phương
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                      {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-border mt-4" />}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{milestone.title}</h3>
                        <Badge variant="outline">{milestone.year}</Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-balance">Giá trị cốt lõi</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Những giá trị định hướng mọi hoạt động của chúng tôi
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-balance">Đội ngũ lãnh đạo</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Những con người tài năng đứng sau thành công của Xuân Phương
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary">{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="mb-3">
                      {member.experience}
                    </Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-balance">Năng lực sản xuất</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Trang thiết bị hiện đại và quy trình sản xuất chuyên nghiệp
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Factory className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Xưởng sản xuất</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Diện tích 3000m²
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Hệ thống thông gió hiện đại
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Khu vực gia công riêng biệt
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Máy móc thiết bị</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      15 máy CNC hiện đại
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Hệ thống đo lường chính xác
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Thiết bị kiểm tra chất lượng
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Chất lượng</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Chứng nhận ISO 9001:2015
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Quy trình kiểm tra nghiêm ngặt
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Bảo hành lên đến 24 tháng
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Sẵn sàng hợp tác cùng chúng tôi?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty opacity-90">
              Hãy để Xuân Phương trở thành đối tác tin cậy trong hành trình phát triển của doanh nghiệp bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Liên hệ tư vấn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Xem sản phẩm
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
