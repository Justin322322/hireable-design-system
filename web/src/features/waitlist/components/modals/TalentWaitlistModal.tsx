"use client";

import { ModalContainer } from "@/components/ui";
import { useModalScrollLock } from "@/hooks";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import {
  TalentFormData,
  useTalentWaitlistForm,
} from "../../hooks/useWaitlistForm";
import {
  FormCheckbox,
  FormInput,
  ModalFooter,
  ModalHeader,
} from "./WaitlistFormComponents";

interface TalentWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TalentWaitlistModal = ({
  isOpen,
  onClose,
}: TalentWaitlistModalProps) => {
  const router = useRouter();

  const handleSuccess = () => {
    // Navigate immediately - the page transition will handle the visual change
    router.push("/waitlist/talent/success");
  };

  const { form, submitTalent, isSubmitting } =
    useTalentWaitlistForm(handleSuccess);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = form;

  const termsAccepted = watch("terms");

  const handleClose = useCallback(() => {
    reset();
  }, [reset]);

  useModalScrollLock(isOpen, { onClose: handleClose });

  const onSubmit = (data: TalentFormData) => {
    submitTalent(data);
  };

  return (
    <ModalContainer
      isOpen={isOpen}
      onBackdropClick={onClose}
      data-testid="talent-waitlist-modal"
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
                label="First Name"
                placeholder="First Name"
                registration={register("firstName")}
                error={errors.firstName}
              />
              <FormInput
                label="Last Name"
                placeholder="Last Name"
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

            <FormInput
              label="Role you're interested in"
              placeholder="Enter role here"
              registration={register("role")}
              error={errors.role}
            />

            <FormCheckbox
              id="talent-terms"
              registration={register("terms")}
              error={errors.terms}
              accentColor="talent"
            />
          </div>
        </div>

        <ModalFooter
          onCancel={onClose}
          isSubmitting={isSubmitting}
          isDisabled={isSubmitting || !termsAccepted}
          submitVariant="talent"
        />
      </form>
    </ModalContainer>
  );
};
