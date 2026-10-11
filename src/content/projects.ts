import solar from "@/assets/project-solar-epc.jpg";
import cbg from "@/assets/project-cbg.jpg";
import rotatingEquipment from "@/assets/project-rotating-equipment.jpg";
import oilGas from "@/assets/project-oil-gas.jpg";
import engineers from "@/assets/engineers.jpg";
import lng from "@/assets/lng.jpg";

export const projectItems = [
  {
    title: "Solar EPC & Solar Panel Dealership / Distributorship",
    tag: "Solar",
    img: solar,
    alt: "Solar installation and photovoltaic panels ready for dealership and distribution",
    body: "Solar engineering, procurement and construction, alongside solar panel dealership and distributorship.",
  },
  {
    title: "CBG — Compressed Biogas",
    tag: "Bioenergy",
    img: cbg,
    alt: "PANKAJ MANCHANDA chairing a legal JV agreement discussion with colleagues, tender summary on the screen, compressed biogas plant visible beyond the glass wall",
    body: "Project development support for compressed biogas plants — from feedstock assessment to processing, gas upgrading and commissioning.",
  },
  {
    title: "Operation & Maintenance of Rotating Equipment",
    tag: "Operations & Maintenance",
    img: rotatingEquipment,
    alt: "Industrial turbine rotor, gas compressor and centrifugal pump",
    body: "Operation and maintenance of turbines, compressors and pumps, with a focus on reliability, preventive maintenance and operational performance.",
  },
  {
    title: "Oil & Gas Projects",
    tag: "Oil & Gas",
    img: oilGas,
    alt: "Offshore production platform, onshore process installation and gas compressor plant",
    body: "Project support across offshore platforms, onshore process installations and gas compressor plants — from engineering to execution and commissioning.",
  },
  {
    title: "Refinery Expansion & Modernisation",
    tag: "Refining",
    img: engineers,
    alt: "Engineers inspecting energy infrastructure",
    body: "Program leadership on a major refining capacity expansion.",
  },
  {
    title: "LNG Terminal Development",
    tag: "LNG",
    img: lng,
    alt: "Coastal LNG terminal infrastructure",
    body: "Structuring and execution of a coastal LNG import terminal.",
  },
] as const;

export const featuredProjects = projectItems.slice(0, 4);