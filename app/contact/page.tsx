"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Building,
  Users,
  Wrench,
  Facebook,
  Youtube,
  Zap,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa chỉ",
      content: "Khu công nghiệp Quế Võ, Bắc Ninh, Việt Nam",
      description: "Cách Hà Nội 30km, thuận tiện di chuyển",
    },
    {
      icon: Phone,
      title: "Điện thoại",
      content: "0123.456.789",
      description: "Hotline hỗ trợ 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@xuanphuong.com",
      description: "Phản hồi trong vòng 2 giờ",
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 6: 7:00 - 17:00",
      description: "Thứ 7: 7:00 - 12:00",
    },
  ]

  const departments = [
    {
      icon: Users,
      title: "Phòng Kinh doanh",
      phone: "0123.456.789",
      email: "sales@xuanphuong.com",
      description: "Tư vấn sản phẩm và báo giá",
    },
    {
      icon: Wrench,
      title: "Phòng Kỹ thuật",
      phone: "0123.456.790",
      email: "tech@xuanphuong.com",
      description: "Hỗ trợ kỹ thuật và thiết kế",
    },
    {
      icon: Building,
      title: "Phòng Hành chính",
      phone: "0123.456.791",
      email: "admin@xuanphuong.com",
      description: "Hợp đồng và thủ tục pháp lý",
    },
  ]

  const inquiryTypes = [
    "Tư vấn sản phẩm",
    "Báo giá dự án",
    "Hỗ trợ kỹ thuật",
    "Bảo hành sản phẩm",
    "Hợp tác kinh doanh",
    "Khác",
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
                Liên hệ
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Kết nối với <span className="text-primary">Xuân Phương</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ để được tư vấn miễn phí về các giải pháp cơ
                khí tối ưu.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-2">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-balance">Gửi tin nhắn cho chúng tôi</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Điền thông tin vào form bên dưới và chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Họ và tên <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Số điện thoại <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Công ty/Tổ chức</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">
                      Loại yêu cầu <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleInputChange("inquiryType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn loại yêu cầu" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Tiêu đề <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Nội dung <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={5}
                      placeholder="Mô tả chi tiết yêu cầu của bạn..."
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Gửi tin nhắn
                  </Button>
                </form>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                {/* Quick Contact */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Liên hệ nhanh
                    </CardTitle>
                    <CardDescription>Cần hỗ trợ ngay? Gọi điện hoặc chat với chúng tôi</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1">
                        <Phone className="mr-2 h-4 w-4" />
                        Gọi ngay: 0123.456.789
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chat trực tuyến
                      </Button>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-3">Theo dõi chúng tôi trên</p>
                      <div className="flex justify-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Youtube className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Zap className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Departments */}
                <Card>
                  <CardHeader>
                    <CardTitle>Liên hệ theo bộ phận</CardTitle>
                    <CardDescription>Liên hệ trực tiếp với bộ phận phù hợp để được hỗ trợ nhanh chóng</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {departments.map((dept, index) => (
                      <div key={index}>
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <dept.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{dept.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{dept.description}</p>
                            <div className="space-y-1 text-sm">
                              <div className="flex items-center">
                                <Phone className="h-3 w-3 text-primary mr-2" />
                                <span>{dept.phone}</span>
                              </div>
                              <div className="flex items-center">
                                <Mail className="h-3 w-3 text-primary mr-2" />
                                <span>{dept.email}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {index < departments.length - 1 && <Separator className="mt-6" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Visit Us */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5" />
                      Đến thăm chúng tôi
                    </CardTitle>
                    <CardDescription>Chào đón bạn đến tham quan xưởng sản xuất</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="font-medium">Xưởng Cơ Khí Xuân Phương</p>
                      <p className="text-sm text-muted-foreground">Khu công nghiệp Quế Võ, Bắc Ninh, Việt Nam</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium mb-1">Giờ làm việc:</p>
                        <p className="text-muted-foreground">T2-T6: 7:00-17:00</p>
                        <p className="text-muted-foreground">T7: 7:00-12:00</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Hỗ trợ:</p>
                        <p className="text-muted-foreground">24/7 qua hotline</p>
                        <p className="text-muted-foreground">Email trong 2h</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      <MapPin className="mr-2 h-4 w-4" />
                      Xem bản đồ
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-balance">Câu hỏi thường gặp</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Một số câu hỏi phổ biến từ khách hàng
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Thời gian bảo hành sản phẩm?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Chúng tôi cung cấp bảo hành từ 12-24 tháng tùy theo loại sản phẩm, cùng với dịch vụ hỗ trợ kỹ thuật
                    suốt đời.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Có hỗ trợ vận chuyển không?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Có, chúng tôi hỗ trợ vận chuyển toàn quốc và miễn phí lắp đặt cho các đơn hàng trên 50 triệu đồng.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Thời gian giao hàng?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Thời gian giao hàng từ 3-7 ngày làm việc tùy theo sản phẩm và địa điểm. Sản phẩm đặt làm theo yêu
                    cầu từ 2-4 tuần.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Có nhận gia công theo yêu cầu?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Có, chúng tôi nhận gia công theo bản vẽ kỹ thuật của khách hàng với độ chính xác cao và giá cả cạnh
                    tranh.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Bắt đầu dự án của bạn ngay hôm nay</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty opacity-90">
              Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá tốt nhất cho dự án của bạn
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
                <Send className="mr-2 h-5 w-5" />
                Gửi yêu cầu báo giá
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
