import { toast as sonnerToast } from "sonner";
import { createElement } from "react";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import WarningAmberOutlined from "@mui/icons-material/WarningAmberOutlined";
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
          icon: createElement(CheckCircleOutlined, { sx: { fontSize: 24 }, className: "text-success" }),
        });
        break;
      case "destructive":
        sonnerToast.error(title, {
          ...baseOptions,
          icon: createElement(ErrorOutline, { sx: { fontSize: 24 }, className: "text-danger" }),
        });
        break;
      case "warning":
        sonnerToast.warning(title, {
          ...baseOptions,
          icon: createElement(WarningAmberOutlined, { sx: { fontSize: 24 }, className: "text-warning" }),
        });
        break;
      case "info":
        sonnerToast.info(title, {
          ...baseOptions,
          icon: createElement(InfoOutlined, { sx: { fontSize: 24 }, className: "text-client" }),
        });
        break;
      default:
        sonnerToast(title, baseOptions);
        break;
    }
  };

  return { toast };
}
