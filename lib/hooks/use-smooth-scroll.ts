"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function smoothScrollTo(element: Element | null) {
  if (!element) return

  const headerOffset = 64 
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  })
}

export function useSmoothScroll() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash)
        setTimeout(() => smoothScrollTo(targetElement), 100)
      }
    }

    handleHash()

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")
      
      if (link?.hash) {
        e.preventDefault()
        const targetElement = document.querySelector(link.hash)
        
        if (targetElement) {
          window.history.pushState(null, "", link.hash)
          smoothScrollTo(targetElement)
        }
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [pathname, searchParams])
} 