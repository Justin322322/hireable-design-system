import { toast as sonnerToast } from "sonner";
import { createElement } from "react";
import { CheckCircle2, AlertCircle, AlertTriangle, Info } from "lucide-react";

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
          icon: createElement(CheckCircle2, { className: "h-4 w-4 text-green-600 dark:text-green-400" }),
        });
        break;
      case "destructive":
        sonnerToast.error(title, {
          ...baseOptions,
          icon: createElement(AlertCircle, { className: "h-4 w-4 text-red-600 dark:text-red-400" }),
        });
        break;
      case "warning":
        sonnerToast.warning(title, {
          ...baseOptions,
          icon: createElement(AlertTriangle, { className: "h-4 w-4 text-amber-600 dark:text-amber-400" }),
        });
        break;
      case "info":
        sonnerToast.info(title, {
          ...baseOptions,
          icon: createElement(Info, { className: "h-4 w-4 text-blue-600 dark:text-blue-400" }),
        });
        break;
      default:
        sonnerToast(title, baseOptions);
        break;
    }
  };

  return { toast };
}
