import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: string) {
  // Remove all non-numeric characters and parse to number
  const numericPrice = parseFloat(price.replace(/[^0-9]/g, ""))
  
  // Format the number with thousand separators
  return numericPrice.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })
}
