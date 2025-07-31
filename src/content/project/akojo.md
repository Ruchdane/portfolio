---
logo: "../../assets/icons/akojo.svg"
title:
  fr: "Plateforme de gestion des entrées sortie de votre stock"
  en: "Platform for managing your stock inflows and outflows"
  yo: "Syeedii fun iṣakoso awọn titẹ sii ati awọn ijade ọja rẹ"
description:
  fr: "Une plateforme qui centralise la gestion de stock, ravitaillement et commandes pour les organisations de moyennes et grandes tailles qui possèdent plusieurs points de vente ainsi que des magasins de stockage."
  en: "A platform that centralizes stock management, replenishment, and orders for medium and large organizations with multiple sales points and storage warehouses."
  yo: "Ibi pẹpẹ kan ti o ṣajọpọ iṣakoso ọja, atunṣe, ati awọn aṣẹ fun awọn ajo alabọde ati nla pẹlu ọpọlọpọ awọn aaye tita ati awọn ile-itaja ipamọ."
thumbs:
  [
    {
      src: ../../assets/images/akojo/login-white.png,
      alt: "login white",
      width: 1280,
      height: 800,
    },
    {
      src: ../../assets/images/akojo/slip-creation-dark.png,
      alt: "slip creation-dark",
      width: 1280,
      height: 800,
    },
    {
      src: ../../assets/images/akojo/slip-creation-white.png,
      alt: "slip creation-white",
      width: 1081,
      height: 2401,
    },
    {
      src: ../../assets/images/akojo/user-management-stats-open-mobile-white.png,
      alt: "user management-stats-open-mobile-white",
      width: 1280,
      height: 800,
    },
    {
      src: ../../assets/images/akojo/user-management-stats-open-white.png,
      alt: "user management-stats-open-white",
      width: 1280,
      height: 800,
    },
  ]
websiteUrl: https://deploy-preview-2--akojdo.netlify.app/
technologies:
  - next
  - typescript
  - prisma
  - storybook
  - cypress
  - supabase
  - netlify

platformes: ["web"]
collaborators:
  - ruchdane
  - fawaz
isFeatured: true
seo:
  type: WebApplication
  category:
    - Gestion d'inventaire
    - Gestion de facture
---

## Contexte

Koudi est une entreprise de distribution qui gère plusieurs points de vente et entrepôts.
Avant Akojo, Koudi gérait ses flux de stock avec plusieurs fichiers Excel. Cela créait plusieurs problèmes, comme :

- **Intégrité des données :** Il n’y avait pas une seule source fiable. Chaque membre avait sa propre version des fichiers. Cela provoquait des erreurs dans le comptage et les rapports de stock.
- **Problèmes de collaboration :** Partager et modifier les fichiers Excel entre plusieurs personnes créait des conflits et de l’incohérence. Par exemple, un même produit avec plusieurs noms.
- **Erreurs humaines :** Les erreurs passaient souvent inaperçues jusqu’à ce qu’elles causent des problèmes opérationnels ou financiers. Quand il manquait du stock ou qu’il y avait trop de stock, personne ne savait d’où ça venait.

## Résultat

On voulait créer une plateforme unique pour gérer les stocks. Voici ce qu’on a réussi à faire :

- **Une seule source fiable :** Les niveaux de stock sont visibles par tout le monde. On enregistre chaque mouvement de stock, que ce soit une vente ou un réapprovisionnement.
- **Collaboration :** Tout le monde peut accéder au système, mais selon son rôle. Un système simple de rôles permet à chacun d’utiliser l’application, du manager à la boutique.
- **Moins d’effort manuel :** En gérant tout ce qui est lié au stock, on a réduit le temps et l’effort pour créer des bons de livraison ou synchroniser le stock.

## Processus

Pour garantir la qualité et la facilité d’utilisation, l’équipe a utilisé une méthode agile centrée sur l’utilisateur :

- **Méthode Agile :** On a utilisé GitHub Project pour gérer chaque fonctionnalité comme un mini produit. Cela nous a permis de suivre tout le cycle de vie du logiciel.
- **Design Centré sur l’Utilisateur :** Après des interviews avec les utilisateurs, on a créé des maquettes simples (low-fidelity) pour chaque fonctionnalité. Ensuite, on a développé un prototype dans Storybook. Les retours des utilisateurs ont permis d’améliorer le design avant de le coder.

### Design

![Storybook atomic design](../../assets/images/akojo/storybook.png)

On a suivi la méthode de design atomique. D’abord, on a créé nos atomes et molécules avec shadcn/ui. Pour chaque fonctionnalité, après une réunion avec les utilisateurs, on a fait une maquette simple qu’on a transformée en prototype dans Storybook. L’utilisateur testait et donnait son avis, qu’on intégrait dans le processus final.
