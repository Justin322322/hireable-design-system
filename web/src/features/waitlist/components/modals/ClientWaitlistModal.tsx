"use client";

import { ModalContainer } from "@/components/ui";
import { useModalScrollLock } from "@/hooks";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import {
  ClientFormData,
  useClientWaitlistForm,
} from "../../hooks/useWaitlistForm";
import {
  FormCheckbox,
  FormInput,
  FormSelect,
  ModalFooter,
  ModalHeader,
} from "./WaitlistFormComponents";

interface ClientWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COMPANY_SIZE_OPTIONS = [
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-100+", label: "51–100+ employees" },
];

const INDUSTRY_OPTIONS = [
  { value: "tech-software", label: "Technology & Software" },
  { value: "design-creative", label: "Design & Creative" },
  { value: "marketing-advertising", label: "Marketing & Advertising" },
  { value: "writing-translation", label: "Writing & Translation" },
  { value: "finance-accounting", label: "Finance & Accounting" },
  { value: "customer-support", label: "Customer Support" },
  { value: "sales-business-dev", label: "Sales & Business Development" },
  { value: "data-science-analytics", label: "Data Science & Analytics" },
  { value: "engineering-architecture", label: "Engineering & Architecture" },
  { value: "it-networking", label: "IT & Networking" },
  { value: "product-management", label: "Product Management" },
  { value: "hr-recruiting", label: "Human Resources & Recruiting" },
  { value: "education-training", label: "Education & Training" },
  { value: "healthcare-medical", label: "Healthcare & Medical" },
  { value: "legal-services", label: "Legal Services" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "media-video-photography", label: "Media, Video & Photography" },
  { value: "real-estate-property", label: "Real Estate & Property" },
  {
    value: "construction-manufacturing",
    label: "Construction & Manufacturing",
  },
  { value: "gaming-entertainment", label: "Gaming & Entertainment" },
  { value: "logistics-transportation", label: "Logistics & Transportation" },
  { value: "nonprofit-social-impact", label: "Nonprofit & Social Impact" },
  { value: "hospitality-travel", label: "Hospitality & Travel" },
  { value: "energy-utilities", label: "Energy & Utilities" },
  { value: "agriculture-environment", label: "Agriculture & Environment" },
  { value: "other", label: "Other" },
];

export const ClientWaitlistModal = ({
  isOpen,
  onClose,
}: ClientWaitlistModalProps) => {
  const router = useRouter();

  const handleSuccess = () => {
    // Navigate immediately - the page transition will handle the visual change
    router.push("/waitlist/client/success");
  };

  const { form, submitClient, isSubmitting } =
    useClientWaitlistForm(handleSuccess);
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = form;

  const termsAccepted = watch("terms");

  const handleClose = useCallback(() => {
    reset();
  }, [reset]);

  useModalScrollLock(isOpen, { onClose: handleClose });

  const onSubmit = (data: ClientFormData) => {
    submitClient(data);
  };

  return (
    <ModalContainer
      isOpen={isOpen}
      onBackdropClick={onClose}
      data-testid="client-waitlist-modal"
    >
      <ModalHeader title="Join waitlist" onClose={onClose} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex min-h-0 flex-1 flex-col"
      >
        <div
          className="flex flex-1 flex-col gap-8 overflow-y-auto p-8"
          style={{ overscrollBehaviorY: "contain" }}
          data-lenis-prevent
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
              <FormInput
                label="First name"
                placeholder="First name"
                registration={register("firstName")}
                error={errors.firstName}
              />
              <FormInput
                label="Last name"
                placeholder="Last name"
                registration={register("lastName")}
                error={errors.lastName}
              />
            </div>

            <FormInput
              label="Email"
              placeholder="Email"
              registration={register("email")}
              error={errors.email}
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
              <FormInput
                label="Company name"
                placeholder="Company name"
                registration={register("companyName")}
                error={errors.companyName}
              />
              <FormSelect
                label="Company size"
                control={control}
                name="companySize"
                placeholder="Select company size"
                error={errors.companySize}
                options={COMPANY_SIZE_OPTIONS}
              />
            </div>

            <FormSelect
              label="Industry"
              control={control}
              name="industry"
              placeholder="Select industry"
              error={errors.industry}
              options={INDUSTRY_OPTIONS}
            />

            <FormInput
              label="Role you're hiring for"
              placeholder="Enter role here"
              registration={register("role")}
              error={errors.role}
            />

            <FormCheckbox
              id="terms"
              registration={register("terms")}
              error={errors.terms}
              accentColor="client"
            />
          </div>
        </div>

        <ModalFooter
          onCancel={onClose}
          isSubmitting={isSubmitting}
          isDisabled={isSubmitting || !termsAccepted}
          submitText="Send"
          submitVariant="client"
        />
      </form>
    </ModalContainer>
  );
};
