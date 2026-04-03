export const GHL_FORM_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/ifVst8kd3WrSmJLqdJlQ/formCapture/website";

export const SITE = {
  name: "101 Jiu Jitsu & Kickboxing",
  address: "5940 Calle Real, Goleta, CA 93117",
  phone: "+1 805-977-5981",
  phoneDisplay: "(805) 977-5981",
  email: "john@101jiujitsugoleta.com",
} as const;

export const PROGRAM_OPTIONS = [
  { value: "", label: "Select a program..." },
  { value: "Kids Martial Arts", label: "Kids Martial Arts (Ages 5-12)" },
  { value: "Teen Kickboxing", label: "Teen Kickboxing (Ages 13-17)" },
  { value: "Adult Jiu-Jitsu", label: "Adult Brazilian Jiu-Jitsu" },
  { value: "Adult Kickboxing", label: "Adult Kickboxing" },
  { value: "Boxing", label: "Boxing Fundamentals" },
  { value: "Wrestling", label: "Wrestling" },
  { value: "MMA", label: "MMA Training" },
  { value: "TRX", label: "TRX Training" },
  { value: "Rocksteady", label: "Rocksteady Boxing" },
] as const;
