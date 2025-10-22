"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Menu,
  Phone,
  Mail,
  MapPin,
  Home,
  Package,
  Settings,
  Info,
  MessageCircle,
  X,
} from "lucide-react"
import { Cart } from "./ui/cart"

export function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      title: "Trang chủ",
      href: "/",
      icon: Home,
      description: "Trang chủ website",
    },
    {
      title: "Sản phẩm",
      icon: Package,
      description: "Danh mục sản phẩm",
      subItems: [
        { title: "Tất cả sản phẩm", href: "/products?category=all" },
        { title: "Máy móc công nghiệp", href: "/products?category=machinery" },
        { title: "Dụng cụ cơ khí", href: "/products?category=tools" },
        { title: "Phụ tùng thay thế", href: "/products?category=parts" },
      ],
    },
    {
      title: "Dịch vụ",
      href: "/services",
      icon: Settings,
      description: "Dịch vụ cơ khí",
    },
    {
      title: "Về chúng tôi",
      href: "/about",
      icon: Info,
      description: "Thông tin công ty",
    },
    {
      title: "Liên hệ",
      href: "/contact",
      icon: MessageCircle,
      description: "Thông tin liên hệ",
    },
  ]

  return (
    <header className="w-full border-b bg-background">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>0123.456.789</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>info@xuanphuong.com</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Bắc Ninh, Việt Nam</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">XP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Xuân Phương</h1>
              <p className="text-sm text-muted-foreground">Xưởng Cơ Khí</p>
            </div>
          </Link>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input type="search" placeholder="Tìm kiếm sản phẩm..." className="pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Cart and mobile menu */}
          <div className="flex items-center gap-4">
            <Cart />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden bg-transparent">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center justify-between">
                    <span>Menu</span>
                    <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
                      <X className="h-4 w-4" />
                    </Button>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col space-y-6 mt-6">
                  {/* Search bar */}
                  <div className="relative">
                    <Input type="search" placeholder="Tìm kiếm sản phẩm..." className="pl-10 bg-muted/50" />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>

                  <Separator />

                  {/* Navigation menu */}
                  <nav className="flex flex-col space-y-1">
                    {menuItems.map((item, index) => (
                      <div key={index} className="space-y-1">
                        {item.href ? (
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-3 rounded-lg px-3 py-3 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary group"
                          >
                            <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                            <div className="flex-1">
                              <div className="font-medium">{item.title}</div>
                              <div className="text-xs text-muted-foreground">{item.description}</div>
                            </div>
                          </Link>
                        ) : (
                          <>
                            <div className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium bg-muted/30">
                              <item.icon className="h-5 w-5 text-primary" />
                              <div className="flex-1">
                                <div className="font-semibold text-primary">{item.title}</div>
                                <div className="text-xs text-muted-foreground">{item.description}</div>
                              </div>
                            </div>
                            {item.subItems && (
                              <div className="ml-2 space-y-1 border-l-2 border-primary/20 pl-4">
                                {item.subItems.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center rounded-md px-3 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/10 hover:text-primary hover:translate-x-1 active:bg-primary/20 cursor-pointer relative z-10"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-primary/40 mr-3 hover:bg-primary"></div>
                                    <span className="flex-1">{subItem.title}</span>
                                    <Badge variant="secondary" className="ml-2 text-xs pointer-events-none">
                                      {subItem.title === "Tất cả sản phẩm"
                                        ? "9"
                                        : subItem.title === "Máy móc công nghiệp"
                                          ? "4"
                                          : subItem.title === "Dụng cụ cơ khí"
                                            ? "3"
                                            : "2"}
                                    </Badge>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </nav>

                  <Separator />

                  {/* Contact info */}
                  <div className="space-y-3 text-sm">
                    <div className="font-medium text-foreground">Liên hệ nhanh</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>0123.456.789</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>info@xuanphuong.com</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Bắc Ninh, Việt Nam</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Navigation menu - desktop */}
        <nav className="hidden md:flex mt-4">
          <div className="flex items-center space-x-1">
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white focus:outline-none"
            >
              Trang chủ
            </Link>

            <Link
              href="/products?category=all"
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white focus:outline-none"
            >
              Tất cả sản phẩm
            </Link>

            <Link
              href="/products?category=machinery"
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white focus:outline-none"
            >
              Máy móc công nghiệp
            </Link>

            <Link
              href="/products?category=tools"
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white focus:outline-none"
            >
              Dụng cụ cơ khí
            </Link>

            <Link
              href="/products?category=parts"
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white focus:outline-none"
            >
              Phụ tùng thay thế
            </Link>

            <Link
              href="/services"
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white focus:outline-none"
            >
              Dịch vụ
            </Link>

            <Link
              href="/about"
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white focus:outline-none"
            >
              Về chúng tôi
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white focus:outline-none"
            >
              Liên hệ
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
