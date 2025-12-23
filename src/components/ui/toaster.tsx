"use client"

import { Toaster as Sonner } from "sonner"

export function Toaster() {
  return (
    <Sonner
      position="top-center"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast !flex !items-center !justify-start [&[data-sonner-toast]]:!h-14 [&[data-sonner-toast]]:!py-4 [&[data-sonner-toast]]:!pl-4 [&[data-sonner-toast]]:!pr-6 [&[data-sonner-toast]]:!gap-6 [&[data-sonner-toast]]:!rounded-lg bg-background text-foreground border-border",
          title: "!font-primary !font-normal !text-base !leading-[150%] !tracking-[0.2px] !m-0 !p-0 !flex-1",
          description: "!hidden",
          actionButton: "bg-primary text-primary-foreground",
          cancelButton: "bg-muted text-muted-foreground",
          icon: "[&>svg]:!size-6 [&>svg]:!w-6 [&>svg]:!h-6 !shrink-0 !m-0",
          success: "!bg-toast-success-bg !border-toast-success-bg !text-foreground",
          error: "!bg-toast-error-bg !border-toast-error-bg !text-foreground",
          warning: "!bg-toast-warning-bg !border-toast-warning-bg !text-foreground",
          info: "!bg-toast-info-bg !border-toast-info-bg !text-foreground",
          closeButton:
            "!relative !top-0 !right-0 !left-auto !transform-none !bg-transparent !border-none !p-0 !m-0 !ml-auto !shrink-0 !order-last !text-foreground hover:!text-foreground/80 !transition-colors [&>svg]:!size-5 [&>svg]:!w-5 [&>svg]:!h-5",
        },
      }}
      closeButton
    />
  )
}
