# Backend Kickoff Meeting Script

## 1. Intro (2 min)

"Hey! Thanks for jumping on this. I've been building out the frontend design system for Hireable — it's a hiring/recruitment platform. I wanted to walk you through what the UI expects so we can align on the API contracts early."

---

## 2. Share Context (3 min)

"I've already created a TypeScript file with all the interfaces the frontend needs — `src/types/api-contracts.ts`. I'll share my screen so we can walk through it together."

**Key points to mention:**
- This is a Next.js app with a component library
- We have kanban boards for candidate pipelines and job applications
- There's an OKR/goals feature with progress tracking
- Candidate profiles have AI match scores

---

## 3. Walk Through Core Entities (10 min)

### Candidates
"The main entity is `CandidateProfile`. Here's what the UI displays:"
- Basic info: name, role, avatar, salary, experience, location
- Extended: education array, certificates array, skills tags
- AI match object with percentage and fit descriptions
- Links to LinkedIn/portfolio

**Questions to ask:**
- "How do you want to handle the AI match calculation — computed on read or stored?"
- "Should education/certificates be separate tables or embedded?"
- "Skills — free-form tags or predefined list we both reference?"

### Job Applications
"For the job board, we track applications with company, position, salary range, status."

**Questions to ask:**
- "What statuses do we need beyond full-time/part-time/contract?"
- "How do we link applications to candidates?"

### Goals/Objectives
"There's an OKR feature. Goals have key results, progress percentage, due dates."

**Questions to ask:**
- "For automatic updates — what triggers progress recalculation?"
- "Do key results need their own endpoints or always nested under goals?"

---

## 4. Discuss API Structure (10 min)

"I've listed suggested endpoints at the bottom of the types file. Let's go through them."

**Key decisions needed:**

### REST vs GraphQL
"Are we going REST or GraphQL? The nested objects like `candidate.aiMatch` might be cleaner with GraphQL, but REST works too."

### Pagination
"For candidate lists and kanban columns — offset-based or cursor-based pagination?"

### Response Format
"I've suggested a wrapper: `{ success, data, errors }`. Does that work for you?"

### IDs
"UUIDs or auto-increment integers?"

---

## 5. Real-time & Special Cases (5 min)

### Kanban Drag-and-Drop
"The kanban boards need optimistic updates. When someone drags a candidate to a new column, we update UI immediately then sync."

**Question:** "Any plans for websockets, or should we just poll/refetch?"

### File Uploads
"We have photo and resume uploads. What's the flow — presigned URLs to S3, or direct POST to your server?"

### Timestamps
"The UI shows 'Posted 2 days ago', 'Last active 3 hours ago'. Should you send ISO dates and we format, or do you send the formatted string?"

---

## 6. Auth (5 min)

"I don't have auth components built yet, but we'll need it."

**Questions:**
- "JWT or session-based?"
- "Are there different roles — employer vs candidate?"
- "What user info comes back from `/auth/me`?"

---

## 7. Wrap Up (5 min)

"So to summarize what we need to decide:"

1. REST or GraphQL
2. ID format (UUID vs integer)
3. Pagination strategy
4. Auth approach
5. File upload flow
6. Real-time strategy (websockets vs polling)

"Can you take a look at `api-contracts.ts` and let me know if the data shapes work for you? Happy to adjust field names or add things you need."

**Next steps:**
- [ ] Backend reviews `api-contracts.ts`
- [ ] Agree on API response format
- [ ] Set up shared Postman collection or OpenAPI spec
- [ ] Define MVP endpoints for first integration

---

## Quick Reference: Files to Share

- `src/types/api-contracts.ts` — TypeScript interfaces
- `src/data/*.json` — Mock data examples showing expected shapes
- Component demos if they want to see the UI

---

## If They Ask "What's the MVP?"

Priority order for first integration:
1. Auth (login, get current user)
2. Candidates list + profile detail
3. Kanban pipeline (candidates)
4. Goals/objectives CRUD
5. File uploads
6. Charts/analytics
