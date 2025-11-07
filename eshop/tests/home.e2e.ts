import { test, expect } from '@playwright/test'

test('E2E : afficher et interagir avec les produits', async ({ page }) => {
  // 1️⃣ Aller sur la page d’accueil
  await page.goto('http://localhost:3000/')

  // 2️⃣ Vérifier le titre principal
  await expect(page.locator('h1')).toHaveText('Produits')

  // 3️⃣ Vérifier que les 3 produits sont affichés
  const products = ['Parfum', 'Savon', 'Huile essentielle']
  for (const name of products) {
    await expect(page.locator('.product-card')).toContainText(name)
  }

  // 4️⃣ Cliquer sur le premier produit
  await page.locator('.product-card').first().click()

  // 5️⃣ Vérifier que quelque chose se passe après le clic
  // Pour l’instant, on n’a pas de page détail, donc on peut juste vérifier que l’URL n’a pas changé
  await expect(page).toHaveURL('http://localhost:3000/')
})
