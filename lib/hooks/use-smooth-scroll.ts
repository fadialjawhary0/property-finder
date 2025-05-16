"use client"

import { useEffect } from "react"

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
  useEffect(() => {
    // Handle initial hash
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash)
      setTimeout(() => smoothScrollTo(targetElement), 100)
    }

    // Handle click events
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")
      
      if (link?.hash) {
        e.preventDefault()
        const targetElement = document.querySelector(link.hash)
        
        if (targetElement) {
          // Update URL without triggering a page reload
          window.history.pushState(null, "", link.hash)
          smoothScrollTo(targetElement)
        }
      }
    }

    // Handle browser back/forward buttons
    const handlePopState = () => {
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash)
        smoothScrollTo(targetElement)
      }
    }

    document.addEventListener("click", handleClick)
    window.addEventListener("popstate", handlePopState)

    return () => {
      document.removeEventListener("click", handleClick)
      window.removeEventListener("popstate", handlePopState)
    }
  }, [])
} 