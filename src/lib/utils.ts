import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Takes any Cloudinary image URL and inserts optimization params
 * (auto format, auto quality, max width) right after "/upload/".
 * Safe to call on non-Cloudinary URLs too — it just returns them unchanged.
 *
 * width defaults to 500px which is plenty for a product-card sized cover;
 * pass a bigger number for full-size detail pages if needed.
 */
export function optimizeCloudinaryUrl(url: string, width: number = 500) {
  if (!url) return url
  if (!url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
    return url
  }
  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto,w_${width},c_limit/`
  )
}