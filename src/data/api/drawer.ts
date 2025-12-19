// Drawer API Documentation Data
// This file contains all the API documentation for the Drawer component
// Edit this file to update the documentation

export const drawerComponents = [
  { name: "Drawer", description: "Root container (Radix Dialog)" },
  { name: "DrawerTrigger", description: "Element that opens the drawer" },
  { name: "DrawerContent", description: "Slide-in panel container" },
  { name: "DrawerTitle", description: "Accessible title (can be visually hidden)" },
  { name: "DrawerClose", description: "Element that closes the drawer" },
];

export const candidateProfileInterface = [
  { name: "id", type: "string", description: "Unique candidate identifier" },
  { name: "name", type: "string", description: "Full name" },
  { name: "role", type: "string", description: "Job role/title" },
  { name: "avatar", type: "string", description: "Avatar image URL" },
  { name: "salary", type: "string", description: "Salary expectation" },
  { name: "experience", type: "string", description: "Years of experience" },
  { name: "location", type: "string", description: "Geographic location" },
  { name: "status", type: "string", description: 'Application status (e.g., "Active")' },
  { name: "application", type: "Application", description: "Application details object" },
  { name: "aiMatch", type: "AIMatch", description: "AI matching analysis" },
  { name: "about", type: "string", description: "Bio/description text" },
  { name: "skills", type: "string[]", description: "Array of skill tags" },
  { name: "education", type: "Education[]", description: "Education history" },
  { name: "certificates", type: "Certificate[]", description: "Professional certifications" },
  { name: "links", type: "Links", description: "External profile links" },
  { name: "personalMessage", type: "string", description: "Cover letter/message" },
];

export const aiMatchInterface = [
  { name: "percentage", type: "number", description: "Overall match percentage (0-100)" },
  { name: "workStyleFit", type: "string", description: "Work style compatibility analysis" },
  { name: "performanceHistory", type: "string", description: "Performance track record analysis" },
  { name: "jobDescriptionFit", type: "string", description: "Job requirements match analysis" },
];

export const educationInterface = [
  { name: "id", type: "string", description: "Unique identifier" },
  { name: "degree", type: "string", description: "Degree name" },
  { name: "school", type: "string", description: "Institution name" },
  { name: "years", type: "string", description: 'Date range (e.g., "2018 - 2022")' },
];

export const certificateInterface = [
  { name: "id", type: "string", description: "Unique identifier" },
  { name: "name", type: "string", description: "Certificate name" },
  { name: "issuer", type: "string", description: "Issuing organization" },
  { name: "year", type: "string", description: "Year obtained" },
];
