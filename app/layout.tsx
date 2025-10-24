import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Xưởng Cơ Khí Xuân Phương - Thiết Bị Cơ Khí Chuyên Nghiệp",
  description: "Chuyên cung cấp thiết bị cơ khí, gia công chính xác, dịch vụ sửa chữa máy móc công nghiệp tại Bắc Ninh",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
