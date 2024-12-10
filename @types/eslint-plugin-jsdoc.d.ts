declare module "eslint-plugin-jsdoc" {
  import type { Linter, Rule } from "eslint";

  type ConfigGroups =
    | "stylistic"
    | "requirements"
    | "contents"
    | "logical"
    | "recommended";
  type ConfigVariants = "" | "-typescript" | "-typescript-flavor";
  type ErrorLevels = "" | "-error";

  type Configs = `flat/${ConfigGroups}${ConfigVariants}${ErrorLevels}`;

  const configs: Record<Configs, Linter.Config>;
  const rules: Record<string, Rule.RuleModule>;
}