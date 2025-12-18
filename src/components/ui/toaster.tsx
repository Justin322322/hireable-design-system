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
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:rounded-lg group-[.toaster]:p-6 group-[.toaster]:flex group-[.toaster]:!items-start group-[.toaster]:gap-4 [&>[data-content]]:!flex-1 [&>[data-content]]:!order-2",
          title: "group-[.toast]:text-sm group-[.toast]:font-medium",
          description: "group-[.toast]:text-xs group-[.toast]:text-muted-foreground group-data-[type=success]:!text-inherit group-data-[type=error]:!text-inherit group-data-[type=warning]:!text-inherit group-data-[type=info]:!text-inherit",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          icon: "group-[.toast]:!mt-0.5 group-[.toast]:!mr-0 group-[.toast]:shrink-0 group-[.toast]:!order-1 group-[.toast]:!self-start",
          success: "!bg-green-50 !border-green-200 !text-green-900 dark:!bg-green-950 dark:!border-green-900 dark:!text-green-400",
          error: "!bg-red-50 !border-red-200 !text-red-900 dark:!bg-red-950 dark:!border-red-900 dark:!text-red-400",
          warning: "!bg-amber-50 !border-amber-200 !text-amber-900 dark:!bg-amber-950 dark:!border-amber-900 dark:!text-amber-400",
          info: "!bg-blue-50 !border-blue-200 !text-blue-900 dark:!bg-blue-950 dark:!border-blue-900 dark:!text-blue-400",
          closeButton:
            "!static !order-3 !ml-auto !mt-0.5 !self-start !bg-transparent !border-none !p-0 !text-muted-foreground hover:!text-foreground !transform-none !transition-colors [&>svg]:!h-4 [&>svg]:!w-4 group-data-[type=success]:!text-green-700 group-data-[type=success]:hover:!text-green-900 dark:group-data-[type=success]:text-green-400 group-data-[type=error]:!text-red-700 group-data-[type=error]:hover:!text-red-900 dark:group-data-[type=error]:text-red-400 group-data-[type=warning]:!text-amber-700 group-data-[type=warning]:hover:!text-amber-900 dark:group-data-[type=warning]:text-amber-400 group-data-[type=info]:!text-blue-700 group-data-[type=info]:hover:!text-blue-900 dark:group-data-[type=info]:text-blue-400",
        },
      }}
      closeButton
    />
  )
}
