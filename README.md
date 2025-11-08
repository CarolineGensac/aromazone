# Mini E-shop Nuxt 4

Ce projet est un mini e-shop développé avec **Nuxt 4** et **TypeScript**. Il affiche trois produits via un composant `ProductCard` et inclut un système de tracking léger maison ainsi que des tests End-to-End avec Playwright.

## Fonctionnalités

- Affichage de produits
- Tracking maison :
  - `page_view` : déclenché à chaque visite de la page d'accueil
  - `click_product` : déclenché à chaque clic sur un produit
  - Les événements sont loggés dans la console et stockés dans `localStorage`
- Tests E2E avec Playwright

## Installation

Clone le projet et installe les dépendances :

```bash
npm install
