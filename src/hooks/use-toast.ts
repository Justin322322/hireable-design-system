import { toast as sonnerToast } from "sonner";
import { createElement } from "react";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import WarningAmber from "@mui/icons-material/WarningAmber";
import InfoOutlined from "@mui/icons-material/InfoOutlined";

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
          icon: createElement(CheckCircleOutline, { className: "h-4 w-4 text-green-600 dark:text-green-400" }),
        });
        break;
      case "destructive":
        sonnerToast.error(title, {
          ...baseOptions,
          icon: createElement(ErrorOutline, { className: "h-4 w-4 text-red-600 dark:text-red-400" }),
        });
        break;
      case "warning":
        sonnerToast.warning(title, {
          ...baseOptions,
          icon: createElement(WarningAmber, { className: "h-4 w-4 text-amber-600 dark:text-amber-400" }),
        });
        break;
      case "info":
        sonnerToast.info(title, {
          ...baseOptions,
          icon: createElement(InfoOutlined, { className: "h-4 w-4 text-blue-600 dark:text-blue-400" }),
        });
        break;
      default:
        sonnerToast(title, baseOptions);
        break;
    }
  };

  return { toast };
}
