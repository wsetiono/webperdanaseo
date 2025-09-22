"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function SearchParamsHandler({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()

  return <>{children}</>
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsHandler>{children}</SearchParamsHandler>
      </Suspense>
      <Analytics />
    </>
  )
}
