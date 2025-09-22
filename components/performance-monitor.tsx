"use client"

import { useEffect } from "react"

interface LayoutShift extends PerformanceEntry {
    value: number;
    hadRecentInput: boolean;
    sources: Array<{
      node: Node;
      previousRect: DOMRectReadOnly;
      currentRect: DOMRectReadOnly;
    }>;
  }

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("[v0] LCP:", entry.startTime)
            // Track LCP with analytics
            if (typeof window.gtag !== "undefined") {
              window.gtag("event", "web_vitals", {
                event_category: "performance",
                event_label: "LCP",
                value: Math.round(entry.startTime),
              })
            }
          }
        }
      })

      observer.observe({ entryTypes: ["largest-contentful-paint"] })

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        //for (const entry of list.getEntries()) {
        list.getEntries().forEach(entryT => {
          if (entryT.entryType === "first-input") {
            const entry = entryT as PerformanceEventTiming;
            console.log("[v0] FID:", entry.processingStart - entry.startTime)
            if (typeof window.gtag !== "undefined") {
              window.gtag("event", "web_vitals", {
                event_category: "performance",
                event_label: "FID",
                value: Math.round(entry.processingStart - entry.startTime),
              })
            }
          }
        })
      })

      fidObserver.observe({ entryTypes: ["first-input"] })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entryT of list.getEntries() as PerformanceEntry[]) {
        
           const entry = entryT as LayoutShift;

          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        }
        console.log("[v0] CLS:", clsValue)
        if (typeof window.gtag !== "undefined") {
          window.gtag("event", "web_vitals", {
            event_category: "performance",
            event_label: "CLS",
            value: Math.round(clsValue * 1000),
          })
        }
      })

      clsObserver.observe({ entryTypes: ["layout-shift"] })

      return () => {
        observer.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return null
}
