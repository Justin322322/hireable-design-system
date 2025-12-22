import { toast as sonnerToast } from "sonner";
import { createElement } from "react";
import { CheckCircleOutlined, ErrorOutline, WarningAmberOutlined, InfoOutlined } from "@mui/icons-material";

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
          icon: createElement(CheckCircleOutlined, { sx: { fontSize: 16 }, className: "text-green-600 dark:text-green-400" }),
        });
        break;
      case "destructive":
        sonnerToast.error(title, {
          ...baseOptions,
          icon: createElement(ErrorOutline, { sx: { fontSize: 16 }, className: "text-red-600 dark:text-red-400" }),
        });
        break;
      case "warning":
        sonnerToast.warning(title, {
          ...baseOptions,
          icon: createElement(WarningAmberOutlined, { sx: { fontSize: 16 }, className: "text-amber-600 dark:text-amber-400" }),
        });
        break;
      case "info":
        sonnerToast.info(title, {
          ...baseOptions,
          icon: createElement(InfoOutlined, { sx: { fontSize: 16 }, className: "text-blue-600 dark:text-blue-400" }),
        });
        break;
      default:
        sonnerToast(title, baseOptions);
        break;
    }
  };

  return { toast };
}
