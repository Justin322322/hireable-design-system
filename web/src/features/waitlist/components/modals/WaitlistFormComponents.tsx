import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React from "react";
import {
  Control,
  Controller,
  FieldError,
  UseFormRegisterReturn,
} from "react-hook-form";

// Header Component
interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => (
  <div className="flex items-center justify-between border-b border-neutral-300 px-8 py-6">
    <h2 className="text-text-dark font-['Inter'] text-xl leading-[30px] font-semibold tracking-[0.4px]">
      {title}
    </h2>
    <button
      onClick={onClose}
      className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-white hover:bg-gray-100"
      type="button"
    >
      <X className="size-6 text-neutral-700" />
    </button>
  </div>
);

// Footer Component
interface ModalFooterProps {
  onCancel: () => void;
  isSubmitting: boolean;
  isDisabled: boolean;
  submitText?: string;
  submitVariant?: "client" | "talent";
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  onCancel,
  isSubmitting,
  isDisabled,
  submitText = "Submit",
  submitVariant = "client",
}) => {
  const bgClass =
    submitVariant === "client"
      ? "bg-client hover:bg-client-hover"
      : "bg-talent hover:bg-talent-hover";

  return (
    <div className="flex items-center justify-end gap-3 border-t border-neutral-300 px-8 py-6">
      <Button
        type="button"
        variant="outline"
        onClick={onCancel}
        className="h-[44px] w-[140px] rounded-[8px] border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-900 hover:bg-gray-50"
      >
        Cancel
      </Button>
      <Button
        type="submit"
        disabled={isDisabled}
        className={`${bgClass} h-[44px] w-[140px] rounded-[8px] px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70`}
      >
        {isSubmitting ? "Sending..." : submitText}
      </Button>
    </div>
  );
};

// Form Input Component
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  registration,
  error,
  placeholder,
  className,
  ...props
}) => (
  <div className="flex flex-1 flex-col gap-2">
    <label className="font-['Inter'] text-sm leading-[120%] font-semibold tracking-[0.2px] text-neutral-900">
      {label}
    </label>
    <Input
      {...registration}
      placeholder={placeholder}
      data-test-name={registration.name}
      className={cn(
        error ? "border-red-500 focus-visible:ring-red-500" : "",
        className
      )}
      {...props}
    />
    {error && <p className="text-sm text-red-600">{error.message}</p>}
  </div>
);

// Form Select Component
interface FormSelectProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  placeholder: string;
  error?: FieldError;
  options?: { value: string; label: string }[];
  children?: React.ReactNode;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  control,
  name,
  placeholder,
  error,
  options,
  children,
}) => (
  <div className="flex flex-1 flex-col gap-2">
    <label className="font-['Inter'] text-sm leading-[120%] font-semibold tracking-[0.2px] text-neutral-900">
      {label}
    </label>
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger className={error ? "border-red-500 ring-red-500" : ""}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="max-h-[300px] rounded-[8px] border-neutral-300 bg-white py-2">
            {options
              ? options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="focus:bg-highlight-blue h-[44px] px-6 py-4 font-['Inter'] text-[14px] leading-[1.2] font-normal tracking-[0.2px] text-neutral-900 focus:text-neutral-900"
                  >
                    {option.label}
                  </SelectItem>
                ))
              : children}
          </SelectContent>
        </Select>
      )}
    />
    {error && <p className="text-sm text-red-600">{error.message}</p>}
  </div>
);

// Form Checkbox Component
interface FormCheckboxProps {
  id: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  accentColor?: "client" | "talent";
  privacyPolicyLink?: string;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  id,
  registration,
  error,
  accentColor = "client",
  privacyPolicyLink = "/privacy-policy",
}) => {
  const focusRing =
    accentColor === "client"
      ? "focus:ring-client text-client"
      : "focus:ring-talent text-talent";
  const linkColor = accentColor === "client" ? "text-client" : "text-talent";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={id}
          {...registration}
          className={`${focusRing} size-4 rounded-[3.2px] border bg-white ${
            error ? "border-red-500" : "border-neutral-300"
          }`}
        />
        <label
          htmlFor={id}
          className="font-['Inter'] text-sm leading-[120%] font-normal tracking-[0.2px] text-neutral-900"
        >
          By joining you agree to receive updates from Hireable and agree to our{" "}
          <a
            href={privacyPolicyLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkColor} underline`}
          >
            Privacy Policy
          </a>
          .
        </label>
      </div>
      {error && <p className="text-sm text-red-600">{error.message}</p>}
    </div>
  );
};
