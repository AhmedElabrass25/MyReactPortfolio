import { nextjsProjects } from "./nextjs";
import { reactProjects } from "./react";
import { backendProjects } from "./backend";
import { vanillaProjects } from "./vanilla";

/**
 * Combined Projects Data
 * This file serves as the single source of truth for all projects in the portfolio.
 * Projects are modularized by category for better maintainability.
 */
export const Projects = [
  ...nextjsProjects,
  ...reactProjects,
  ...backendProjects,
  ...vanillaProjects,
];
