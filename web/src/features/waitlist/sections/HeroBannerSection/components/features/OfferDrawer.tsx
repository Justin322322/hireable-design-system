import { Drawer } from "@/components/ui";
import {
  AlertTriangle,
  Banknote,
  Calendar,
  ChevronLeft,
  Clock,
  ExternalLink,
  Heart,
  PartyPopper,
  Shield,
  Wifi,
} from "lucide-react";
import React from "react";
import { ScrollContainer } from "../shared/ScrollContainer";

interface OfferDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const OfferDrawerComponent: React.FC<OfferDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} width="664px">
      {/* Header */}
      <div className="flex h-[43.76px] items-center justify-between border-b border-[#C3C3C3] px-[15.44px] py-[10.3px]">
        <div className="flex items-center gap-[5.15px]">
          <button
            onClick={onClose}
            className="flex h-[23.16px] w-[52.31px] items-center gap-[5.15px]"
          >
            <div className="flex size-[23.16px] items-center justify-center rounded-[64.35px] border-[0.64px] border-[#C3C3C3]">
              <ChevronLeft className="size-[10.3px] text-neutral-900" />
            </div>
            <span className="font-['Inter'] text-[10.3px] font-normal tracking-[0.13px] text-neutral-900">
              back
            </span>
          </button>
        </div>

        <button className="flex items-center gap-[5.15px] rounded-[2.57px] px-2 py-[2.57px] hover:bg-neutral-100">
          <span className="font-['Inter'] text-[10.3px] font-semibold tracking-[0.13px] text-neutral-900">
            Open job in a new tab
          </span>
          <ExternalLink className="size-[12.87px] text-neutral-900" />
        </button>
      </div>

      {/* Scrollable Content */}
      <ScrollContainer className="flex-1">
        {/* Top Section */}
        <div className="flex flex-col gap-[15.44px] border-b border-[#C3C3C3] p-[15.44px]">
          {/* Job Header */}
          <div className="flex flex-col gap-[5.15px]">
            <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-700">
              Tech Solutions, Inc.
            </span>
            <div className="flex items-center gap-[5.15px]">
              <span className="font-['DM_Sans'] text-[15.44px] font-semibold tracking-[0.13px] text-neutral-900">
                Sales Manager
              </span>
              <div className="bg-client/10 flex h-[19.3px] items-center justify-center rounded-[2.57px] px-[5.15px]">
                <span className="text-client font-['Inter'] text-[7.72px] tracking-[0.2px]">
                  FULL-TIME
                </span>
              </div>
            </div>
            <p className="font-['Inter'] text-[9px] leading-[120%] tracking-[0.13px] text-neutral-900">
              We are looking for a results-driven Sales Manager to lead our
              sales efforts in the Marketing and Advertising industry. This role
              involves setting sales strategies, managing a high-performing
              team, and driving revenue growth.
            </p>
          </div>

          {/* Offer Received Card */}
          <div className="border-success bg-success/5 flex w-full gap-[10.3px] rounded-[10.3px] border-[0.64px] p-[10.3px]">
            <div className="flex size-[36px] shrink-0 items-center justify-center rounded-full bg-linear-to-b from-[#27AE60] to-[#3499C7]">
              <PartyPopper className="size-[18px] text-white" />
            </div>
            <div className="flex flex-1 flex-col gap-[10.3px]">
              <div className="flex flex-col gap-[2.57px]">
                <span className="font-['Inter'] text-[12.87px] font-semibold tracking-[0.26px] text-neutral-900">
                  Offer Received!
                </span>
                <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-700">
                  Congratulations! Binary Stream Technologies has sent you an
                  offer for the Frontend Developer position.
                </span>
              </div>
              <div className="bg-warning-amber/10 flex w-fit items-center gap-[5.15px] rounded-[5.15px] px-[10.3px] py-[5.15px]">
                <AlertTriangle className="text-warning-amber-dark size-[10.73px]" />
                <span className="text-warning-amber-dark font-['Inter'] text-[9px] tracking-[0.2px]">
                  Offer expires on Oct 20, 2025
                </span>
              </div>
            </div>
          </div>

          {/* Application Status */}
          <div className="flex flex-col gap-[10.3px]">
            <span className="font-['Inter'] text-[10.3px] font-semibold tracking-[0.13px] text-neutral-900">
              Application Status
            </span>
            <div className="flex gap-[5.15px]">
              <div className="bg-success/10 flex h-[25.74px] items-center justify-center rounded-[5.15px] px-[7.72px]">
                <span className="text-success font-['Inter'] text-[7.72px] tracking-[0.2px] uppercase">
                  92% matched
                </span>
              </div>
              <div className="bg-neutral-150 flex h-[25.74px] items-center justify-center rounded-[5.15px] px-[7.72px]">
                <span className="font-['Inter'] text-[7.72px] tracking-[0.2px] text-neutral-700 uppercase">
                  offer received
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-[15.44px] p-[15.44px]">
          {/* Offer Details */}
          <div className="flex flex-col gap-[10.3px]">
            <span className="font-['Inter'] text-[10.3px] font-semibold tracking-[0.13px] text-neutral-900">
              Offer Details
            </span>
            <div className="grid grid-cols-2 gap-[15.44px]">
              <div className="flex items-start gap-[5.15px]">
                <Banknote className="size-[10.3px] text-neutral-700" />
                <div className="flex flex-col gap-[2.57px]">
                  <span className="font-['Inter'] text-[7.72px] tracking-[0.13px] text-neutral-700">
                    Budget
                  </span>
                  <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-900">
                    $ 1,000 - 3,600 /mo
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-[5.15px]">
                <Clock className="size-[10.3px] text-neutral-700" />
                <div className="flex flex-col gap-[2.57px]">
                  <span className="font-['Inter'] text-[7.72px] tracking-[0.13px] text-neutral-700">
                    Duration
                  </span>
                  <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-900">
                    30 Days
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-[5.15px]">
                <Calendar className="size-[10.3px] text-neutral-700" />
                <div className="flex flex-col gap-[2.57px]">
                  <span className="font-['Inter'] text-[7.72px] tracking-[0.13px] text-neutral-700">
                    Start Date
                  </span>
                  <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-900">
                    Nov 1, 2025
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-[5.15px]">
                <Calendar className="size-[10.3px] text-neutral-700" />
                <div className="flex flex-col gap-[2.57px]">
                  <span className="font-['Inter'] text-[7.72px] tracking-[0.13px] text-neutral-700">
                    End Date
                  </span>
                  <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-900">
                    Nov 30, 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Exclusive Benefits */}
          <div className="flex flex-col gap-[15.44px] rounded-[2.57px]">
            <span className="font-['Inter'] text-[10.3px] font-semibold tracking-[0.13px] text-neutral-900">
              Exclusive Benefits
            </span>
            <div className="flex flex-wrap gap-[20.59px]">
              <div className="flex items-center gap-[5.15px]">
                <div className="border-benefit-health-border bg-benefit-health-bg flex size-[18px] items-center justify-center rounded-[2.25px] border-[1.8px]">
                  <Shield className="text-success size-[9px]" />
                </div>
                <div className="flex flex-col gap-[1.29px]">
                  <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-900">
                    $60.00 /month
                  </span>
                  <span className="font-['Inter'] text-[7.72px] tracking-[0.13px] text-neutral-700">
                    Health Insurance
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[5.15px]">
                <div className="border-benefit-gov-border bg-benefit-gov-bg flex size-[18px] items-center justify-center rounded-[2px] border-[1.8px]">
                  <Banknote className="text-benefit-gov-icon size-[9px]" />
                </div>
                <div className="flex flex-col gap-[1.29px]">
                  <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-900">
                    $40.00 /month
                  </span>
                  <span className="font-['Inter'] text-[7.72px] tracking-[0.13px] text-neutral-700">
                    Government Contribution
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[5.15px]">
                <div className="border-benefit-internet-border bg-benefit-internet-bg flex size-[18px] items-center justify-center rounded-[2px] border-[1.8px]">
                  <Wifi className="text-benefit-internet-icon size-[9px]" />
                </div>
                <div className="flex flex-col gap-[1.29px]">
                  <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-900">
                    $40.00 /month
                  </span>
                  <span className="font-['Inter'] text-[7.72px] tracking-[0.13px] text-neutral-700">
                    Internet Allowance
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[5.15px]">
                <div className="border-benefit-mental-border bg-benefit-mental-bg flex size-[18px] items-center justify-center rounded-[2px] border-[1.8px]">
                  <Heart className="text-benefit-mental-icon size-[9px]" />
                </div>
                <div className="flex flex-col gap-[1.29px]">
                  <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-900">
                    $20.00 /month
                  </span>
                  <span className="font-['Inter'] text-[7.72px] tracking-[0.13px] text-neutral-700">
                    Mental Allowance
                  </span>
                </div>
              </div>
            </div>
            <p className="font-['Inter'] text-[6.44px] tracking-[0.13px] text-neutral-700">
              Disclaimer: Exclusive benefits apply to full-time hired
              freelancers only. These benefits are reimbursable, proof of
              payment (receipts) must be submitted to receive reimbursement.
            </p>
          </div>

          {/* Objectives */}
          <div className="flex flex-col gap-[10.3px]">
            <span className="font-['Inter'] text-[10.3px] font-semibold tracking-[0.13px] text-neutral-900">
              Objectives
            </span>
            <div className="flex flex-col gap-[10.3px]">
              {/* Objective 1 */}
              <div className="flex h-[41.19px] items-center rounded-[5.15px] border border-[#C3C3C3] bg-white px-[15.44px] py-[10.3px]">
                <div className="flex flex-1 items-center gap-[5.15px]">
                  <span className="font-['Inter'] text-[10.3px] font-semibold tracking-[0.2px] text-neutral-900">
                    Improve Follow-Up & Tracking
                  </span>
                  <div className="flex items-center justify-center rounded-[64.35px] bg-neutral-300/10 px-[5.15px] py-[2.57px]">
                    <span className="font-['Inter'] text-[7.72px] tracking-[0.2px] text-neutral-700">
                      Default
                    </span>
                  </div>
                </div>
              </div>

              {/* Objective 2 */}
              <div className="flex flex-col gap-[2.57px] rounded-[5.15px] border-[0.64px] border-neutral-300 bg-white px-[15.44px] py-[10.3px]">
                <div className="flex items-center gap-[5.15px]">
                  <span className="font-['Inter'] text-[10.3px] font-semibold tracking-[0.13px] text-neutral-900">
                    Generate Qualified Leads Online
                  </span>
                  <div className="flex items-center justify-center rounded-[64.35px] bg-neutral-300/10 px-[5.15px] py-[2.57px]">
                    <span className="font-['Inter'] text-[7.72px] tracking-[0.2px] text-neutral-700">
                      Automatic
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[5.15px] py-[2.57px]">
                  <span className="font-['Inter'] text-[9px] tracking-[0.2px] text-neutral-700">
                    1 / 3
                  </span>
                  <div className="bg-neutral-150 h-[5.15px] w-[51.49px] overflow-hidden rounded-[64.35px]">
                    <div className="bg-client h-full w-[17.16px] rounded-[64.35px]" />
                  </div>
                </div>
              </div>

              {/* Objective 3 */}
              <div className="flex flex-col gap-[2.57px] rounded-[5.15px] border border-neutral-300 bg-white px-[15.44px] py-[10.3px]">
                <div className="flex items-center gap-[5.15px]">
                  <span className="font-['Inter'] text-[10.3px] font-bold tracking-[0.13px] text-neutral-900">
                    Book Discovery Calls
                  </span>
                  <div className="flex items-center justify-center rounded-[64.35px] bg-neutral-300/10 px-[5.15px] py-[2.57px]">
                    <span className="font-['Inter'] text-[7.72px] tracking-[0.2px] text-neutral-700">
                      Manual
                    </span>
                  </div>
                </div>
                <div className="flex gap-[15.44px] py-[2.57px]">
                  <span className="font-['Inter'] text-[9px] font-semibold tracking-[0.2px] text-neutral-700">
                    Current: 0
                  </span>
                  <span className="font-['Inter'] text-[9px] font-semibold tracking-[0.2px] text-neutral-700">
                    Target: 40
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollContainer>

      {/* Footer CTA */}
      <div className="flex h-[61.77px] items-center gap-[7.72px] border-t border-neutral-300 bg-white p-[15.44px]">
        <button className="border-decline-red flex h-[30.89px] w-[100px] items-center justify-center gap-[2.57px] rounded-[5.15px] border-[0.64px] bg-white">
          <span className="text-decline-red font-['Inter'] text-[10.3px] font-semibold">
            Decline
          </span>
        </button>
        <div className="flex flex-1 gap-[5.15px]">
          <button className="flex h-[30.89px] flex-1 items-center justify-center gap-[5.15px] rounded-[5.15px] border-[0.64px] border-neutral-300">
            <span className="font-['Inter'] text-[10.3px] font-semibold text-neutral-900">
              Negotiate
            </span>
          </button>
          <button className="bg-client flex h-[30.89px] flex-1 items-center justify-center gap-[5.15px] rounded-[5.15px]">
            <span className="font-['Inter'] text-[10.3px] font-semibold text-white">
              Accept Offer
            </span>
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export const OfferDrawer = React.memo(OfferDrawerComponent);
OfferDrawer.displayName = "OfferDrawer";
