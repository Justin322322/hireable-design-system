import { toast as sonnerToast } from "sonner";
import { createElement } from "react";
import { Icon } from "@/components/ui/icon";

interface ToastProps {
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success" | "warning" | "info";
  duration?: number;
}

export function useToast() {
  const toast = ({ title, description, variant = "default", duration = 5000 }: ToastProps) => {
    const baseOptions = {
      description,
      duration,
    };

    switch (variant) {
      case "success":
        sonnerToast.success(title, {
          ...baseOptions,
          icon: createElement(Icon, { icon: "check_circle", size: 24, className: "text-success" }),
        });
        break;
      case "destructive":
        sonnerToast.error(title, {
          ...baseOptions,
          icon: createElement(Icon, { icon: "error", size: 24, className: "text-danger" }),
        });
        break;
      case "warning":
        sonnerToast.warning(title, {
          ...baseOptions,
          icon: createElement(Icon, { icon: "warning", size: 24, className: "text-warning" }),
        });
        break;
      case "info":
        sonnerToast.info(title, {
          ...baseOptions,
          icon: createElement(Icon, { icon: "info", size: 24, className: "text-client" }),
        });
        break;
      default:
        sonnerToast(title, baseOptions);
        break;
    }
  };

  return { toast };
}
