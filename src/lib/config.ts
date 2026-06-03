/**
 * Configuration centralisee, lue depuis les variables d'environnement.
 * Toutes les valeurs sensibles restent cote serveur (jamais exposees au client).
 */

export const config = {
  anthropic: {
    apiKey: process.env.ANTHROPIC_API_KEY ?? "",
    /** Modele Claude par defaut. Voir https://platform.claude.com pour la liste. */
    model: process.env.CLAUDE_MODEL ?? "claude-opus-4-8",
  },
  shopify: {
    storeDomain: process.env.SHOPIFY_STORE_DOMAIN ?? "",
    accessToken: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN ?? "",
    apiVersion: process.env.SHOPIFY_API_VERSION ?? "2024-10",
  },
  suppliers: {
    provider: (process.env.SUPPLIER_PROVIDER ?? "mock") as "mock" | "custom",
  },
} as const;

export function isAiConfigured(): boolean {
  return config.anthropic.apiKey.length > 0;
}

export function isShopifyConfigured(): boolean {
  return (
    config.shopify.storeDomain.length > 0 &&
    config.shopify.accessToken.length > 0
  );
}
