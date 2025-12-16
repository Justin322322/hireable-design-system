/**
 * FAQ content for talent and client roles
 * Extracted from FAQSection component for maintainability
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export const talentFaqs: FAQItem[] = [
  {
    question: "When will Hireable launch?",
    answer:
      "We're targeting a beta launch in Q1 2026. Waitlist members get priority access to the best client matches when we go live.",
  },
  {
    question: "How is this different from Upwork or Fiverr?",
    answer:
      "No bidding wars or racing to the bottom. We match you with clients based on work style compatibility, and you work exclusively with one client who pays fair rates.",
  },
  {
    question: "What does 'AI compatibility matching' actually mean?",
    answer:
      "You answer questions about how you like to communicate and work. Our AI finds clients whose style matches yours, so you avoid personality clashes and micromanaging bosses.",
  },
  {
    question: "How do I know I'll get good rates?",
    answer:
      "We screen clients and ensure they understand the value of dedicated work. No more competing with people willing to work for $5/hour.",
  },
  {
    question: "What types of work can I do?",
    answer:
      "Virtual assistance, development, design, marketing, writing, customer support, and other professional remote work. We focus on roles that benefit from long-term relationships.",
  },
  {
    question: "Can I try it before committing?",
    answer:
      "Yes. The 30-90 day trial period is paid work where both sides evaluate fit. No unpaid 'test projects' or spec work.",
  },
  {
    question: "Do I really only work for one client?",
    answer:
      "Yes, but they pay enough to make it worthwhile. Instead of juggling five $500/month clients, you get one $3000/month client who values your focus.",
  },
  {
    question: "What benefits do I actually get?",
    answer:
      "Health insurance, steady weekly pay, tax assistance, and professional development funds. Real benefits that don't disappear when projects end.",
  },
  {
    question: "What if the client turns out to be terrible?",
    answer:
      "90-day structured trials protect you too. Clear expectations and regular check-ins mean no surprises, and we help you find a better match if needed.",
  },
];

export const clientFaqs: FAQItem[] = [
  {
    question: "When will Hireable launch?",
    answer:
      "We're targeting a beta launch in Q1 2026. Waitlist members get early access and priority onboarding when we go live.",
  },
  {
    question: "How is this different from Upwork or Fiverr?",
    answer:
      "Unlike bidding-based platforms, we match clients with remote workers based on work style compatibility, not lowest price. Our workers focus on one client at a time instead of juggling multiple projects.",
  },
  {
    question: "What does 'AI compatibility matching' actually mean?",
    answer:
      "You answer questions about communication style, work preferences, and team dynamics. Our AI matches you with candidates who complement how you actually operate, reducing personality clashes and workflow friction.",
  },
  {
    question: "Do remote workers really only work for one client?",
    answer:
      "Yes. Workers on our platform commit to single-client partnerships with transparent rates that make this economically viable. No more competing for divided attention.",
  },
  {
    question: "What's included in the 'structured trials'?",
    answer:
      "30/60/90-day evaluation periods with clear KPIs, regular check-ins, and performance tracking. Both sides know exactly what success looks like before making long-term commitments.",
  },
  {
    question: "What types of roles can I hire for?",
    answer:
      "Virtual assistants, developers, designers, marketers, writers, customer support, and other remote-friendly positions. We focus on professional services that benefit from long-term relationships.",
  },
  {
    question: "Can I try it before committing?",
    answer:
      "Waitlist members will receive free trial access during our beta period. You can test the platform and matching process before any paid subscriptions begin.",
  },
  {
    question: "How do I know this will work for my company?",
    answer:
      "We've interviewed 200+ business owners who confirmed the same frustrations with current platforms. Early beta users will help validate the matching accuracy before full launch.",
  },
];
