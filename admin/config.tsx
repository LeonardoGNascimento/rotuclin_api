import { type AdminConfig } from "@keystone-6/core/types";
import { Logo } from "./components/Logo";

// Presently the Logo is the only Admin UI component that is customisable.
export const components: AdminConfig["components"] = {
  Logo: Logo,
};
