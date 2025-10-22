"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  CreditCard,
  Truck,
  Phone,
  Mail,
  Building,
  User,
  FileText,
  Shield,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

import { useCart } from "@/hooks/use-cart"

const provinces = [
  "Hà Nội",
  "TP. Hồ Chí Minh",
  "Bắc Ninh",
  "Hải Phòng",
  "Đà Nẵng",
  "Cần Thơ",
  "Bình Dương",
  "Đồng Nai",
  "Hưng Yên",
  "Vĩnh Phúc",
]

export default function CheckoutPage() {
  const [customerType, setCustomerType] = useState<"individual" | "company">("individual")
  const [paymentMethod, setPaymentMethod] = useState("bank_transfer")
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [sameAsShipping, setSameAsShipping] = useState(true)
  const [agreeTerms, setAgreeTerms] = useState(false)

  const [formData, setFormData] = useState({
    // Customer info
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    taxCode: "",
    // Shipping address
    shippingAddress: "",
    shippingWard: "",
    shippingDistrict: "",
    shippingProvince: "",
    // Billing address
    billingAddress: "",
    billingWard: "",
    billingDistrict: "",
    billingProvince: "",
    // Order notes
    notes: "",
  })

  const cart = useCart()
  const subtotal = cart.items.reduce((sum, item) => {
    if (item.price === "Liên hệ") return sum
    const price = parseFloat(item.price.replace(/[^0-9]/g, ""))
    return sum + price * item.quantity
  }, 0)
  const shipping = shippingMethod === "express" ? 1000000 : subtotal > 50000000 ? 0 : 500000
  const tax = Math.round(subtotal * 0.1)
  const total = subtotal + shipping + tax

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreeTerms) {
      alert("Vui lòng đồng ý với điều khoản và điều kiện")
      return
    }
    // Handle form submission
    alert("Đơn hàng đã được gửi thành công!")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">
            Trang chủ
          </Link>
          <span>/</span>
          <Link href="/cart" className="hover:text-foreground">
            Giỏ hàng
          </Link>
          <span>/</span>
          <span className="text-foreground">Thanh toán</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-2xl font-bold">Thông tin thanh toán</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Type */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Loại khách hàng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={customerType}
                    onValueChange={(value: "individual" | "company") => setCustomerType(value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual">Cá nhân</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="company" id="company" />
                      <Label htmlFor="company">Doanh nghiệp</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Thông tin khách hàng
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        Họ và tên <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
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
                  {customerType === "company" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">
                          Tên công ty <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          required={customerType === "company"}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="taxCode">Mã số thuế</Label>
                        <Input
                          id="taxCode"
                          value={formData.taxCode}
                          onChange={(e) => handleInputChange("taxCode", e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="mr-2 h-5 w-5" />
                    Địa chỉ giao hàng
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="shippingAddress">
                      Địa chỉ <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="shippingAddress"
                      value={formData.shippingAddress}
                      onChange={(e) => handleInputChange("shippingAddress", e.target.value)}
                      placeholder="Số nhà, tên đường"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="shippingWard">
                        Phường/Xã <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="shippingWard"
                        value={formData.shippingWard}
                        onChange={(e) => handleInputChange("shippingWard", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shippingDistrict">
                        Quận/Huyện <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="shippingDistrict"
                        value={formData.shippingDistrict}
                        onChange={(e) => handleInputChange("shippingDistrict", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shippingProvince">
                        Tỉnh/Thành phố <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.shippingProvince}
                        onValueChange={(value) => handleInputChange("shippingProvince", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn tỉnh/thành" />
                        </SelectTrigger>
                        <SelectContent>
                          {provinces.map((province) => (
                            <SelectItem key={province} value={province}>
                              {province}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Billing Address */}
              {customerType === "company" && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      Địa chỉ xuất hóa đơn
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sameAsShipping"
                        checked={sameAsShipping}
                        onCheckedChange={(checked) => setSameAsShipping(checked as boolean)}
                      />
                      <Label htmlFor="sameAsShipping">Giống địa chỉ giao hàng</Label>
                    </div>
                    {!sameAsShipping && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="billingAddress">Địa chỉ</Label>
                          <Input
                            id="billingAddress"
                            value={formData.billingAddress}
                            onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                            placeholder="Số nhà, tên đường"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="billingWard">Phường/Xã</Label>
                            <Input
                              id="billingWard"
                              value={formData.billingWard}
                              onChange={(e) => handleInputChange("billingWard", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="billingDistrict">Quận/Huyện</Label>
                            <Input
                              id="billingDistrict"
                              value={formData.billingDistrict}
                              onChange={(e) => handleInputChange("billingDistrict", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="billingProvince">Tỉnh/Thành phố</Label>
                            <Select
                              value={formData.billingProvince}
                              onValueChange={(value) => handleInputChange("billingProvince", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn tỉnh/thành" />
                              </SelectTrigger>
                              <SelectContent>
                                {provinces.map((province) => (
                                  <SelectItem key={province} value={province}>
                                    {province}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Shipping Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="mr-2 h-5 w-5" />
                    Phương thức vận chuyển
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="flex-1">
                          <div>
                            <div className="font-medium">Giao hàng tiêu chuẩn</div>
                            <div className="text-sm text-muted-foreground">3-5 ngày làm việc</div>
                          </div>
                        </Label>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{subtotal > 50000000 ? "Miễn phí" : formatPrice(500000)}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="flex-1">
                          <div>
                            <div className="font-medium">Giao hàng nhanh</div>
                            <div className="text-sm text-muted-foreground">1-2 ngày làm việc</div>
                          </div>
                        </Label>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{formatPrice(1000000)}</div>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Phương thức thanh toán
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="bank_transfer" id="bank_transfer" />
                        <Label htmlFor="bank_transfer" className="flex-1">
                          <div className="flex items-center space-x-2">
                            <Building className="h-4 w-4" />
                            <span>Chuyển khoản ngân hàng</span>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Chuyển khoản trực tiếp vào tài khoản ngân hàng của chúng tôi
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="cod" id="cod" />
                        <Label htmlFor="cod" className="flex-1">
                          <div className="flex items-center space-x-2">
                            <Truck className="h-4 w-4" />
                            <span>Thanh toán khi nhận hàng (COD)</span>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Thanh toán bằng tiền mặt khi nhận hàng
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "bank_transfer" && (
                    <Alert className="mt-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <div className="space-y-2">
                          <p className="font-medium">Thông tin chuyển khoản:</p>
                          <div className="text-sm space-y-1">
                            <p>
                              <strong>Ngân hàng:</strong> Vietcombank - Chi nhánh Bắc Ninh
                            </p>
                            <p>
                              <strong>Số tài khoản:</strong> 1234567890
                            </p>
                            <p>
                              <strong>Chủ tài khoản:</strong> Xưởng Cơ Khí Xuân Phương
                            </p>
                            <p>
                              <strong>Nội dung:</strong> [Họ tên] - [Số điện thoại] - Thanh toán đơn hàng
                            </p>
                          </div>
                        </div>
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>

              {/* Order Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Ghi chú đơn hàng</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Ghi chú thêm về đơn hàng (tùy chọn)"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    rows={3}
                  />
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={agreeTerms}
                      onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                    />
                    <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                      Tôi đã đọc và đồng ý với{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        điều khoản và điều kiện
                      </Link>{" "}
                      cũng như{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        chính sách bảo mật
                      </Link>{" "}
                      của Xưởng Cơ Khí Xuân Phương
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full" disabled={!agreeTerms}>
                <CheckCircle className="mr-2 h-4 w-4" />
                Đặt hàng
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Đơn hàng của bạn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">x{item.quantity}</span>
                        <span className="font-medium">
                          {item.price === "Liên hệ" ? item.price : formatPrice(parseFloat(item.price.replace(/[^0-9]/g, "")) * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Tạm tính:</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phí vận chuyển:</span>
                    <span>{shipping === 0 ? "Miễn phí" : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VAT (10%):</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Tổng cộng:</span>
                    <span className="text-primary">{formatPrice(total)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium mb-1">Bảo mật thông tin</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Thông tin của bạn được bảo vệ bằng công nghệ mã hóa SSL 256-bit và chúng tôi cam kết không chia sẻ
                      thông tin cá nhân với bên thứ ba.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">Cần hỗ trợ trong quá trình đặt hàng?</p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Phone className="mr-2 h-4 w-4" />
                    Hotline: 0123.456.789
                  </Button>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Mail className="mr-2 h-4 w-4" />
                    Email: info@xuanphuong.com
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
