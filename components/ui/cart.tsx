"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./sheet"
import { Button } from "./button"
import { ScrollArea } from "./scroll-area"
import { Separator } from "./separator"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/utils"
import { ShoppingCart, X, Plus, Minus } from "lucide-react"

export function Cart() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const cart = useCart()

  const totalPrice = cart.items.reduce((total, item) => {
    if (item.price === "Liên hệ") return total
    const price = parseFloat(item.price.replace(/[^0-9]/g, ""))
    return total + price * item.quantity
  }, 0)

  const onCheckout = () => {
    router.push("/checkout")
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="relative hover:bg-primary/5 hover:text-primary hover:border-primary"
        >
          <ShoppingCart className="h-4 w-4" />
          {cart.items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {cart.items.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Giỏ hàng ({cart.items.length})</SheetTitle>
        </SheetHeader>
        {cart.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center space-y-4 py-12">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            <p className="text-muted-foreground">Giỏ hàng trống</p>
            <Button
              onClick={() => {
                router.push("/products")
                setOpen(false)
              }}
            >
              Tiếp tục mua sắm
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[calc(100vh-12rem)]">
              <div className="space-y-4 pr-6 py-6">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium leading-none">{item.name}</h4>
                      <p className="text-sm text-primary font-medium">
                        {item.price === "Liên hệ" ? item.price : formatPrice(item.price)}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            cart.updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            cart.updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 hover:bg-destructive/10 hover:text-destructive"
                      onClick={() => cart.removeItem(item.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="font-medium">Tổng tiền:</span>
                  <span className="font-medium text-primary">
                    {formatPrice(totalPrice.toString())}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Đã bao gồm VAT nếu áp dụng
                </p>
              </div>
              <Button className="w-full" onClick={onCheckout}>
                Thanh toán
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}