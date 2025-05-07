---
logo: "../../assets/icons/akojo.svg"
title: "Plateforme de gestion des entrées sortie de votre stock"
description: "Une plateforme qui centralise la gestion de stock,ravittaillement et commandes pour les organisations de moyennes et grande taille qui possède plusieurs points de ventes ainsi que magasin de stockage."
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
websiteUrl: https://inventory-manuel.vercel.app/docs
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

> Pourquoi Akojo ?

Excel ! Une
Finie la gestion hasardeuse sur Excel. Avec Akojo, nous avons conçu une application web sur mesure pour centraliser les opérations de vente, commande et stock d'une entreprise possédant plusieurs magasins et boutiques. Grâce à une architecture moderne et une approche agile centrée sur l’utilisateur, l’entreprise dispose désormais d’un outil fiable, évolutif et taillé pour l’avenir.

Avant Akojo, l’ensemble des opérations de gestion — du suivi client à la gestion de stock — reposait sur des fichiers Excel partagés. Cette organisation entraînait de nombreuses erreurs : pertes de stock, doublons, informations contradictoires, oublis de paiements… Résultat : les équipes passaient un temps considérable à corriger les données au lieu de se concentrer sur leur activité.

L’entreprise avait un besoin urgent de centralisation, de fiabilité et de simplicité d’usage pour permettre à ses magasins et boutiques de mieux collaborer, sans rupture d’information.

## Valeurs

> Moins d’erreurs et de pertes

La validation en temps réel des données, les alertes de stock automatisées et la centralisation des informations ont permis de réduire les pertes de stock et d’éviter de nombreuses erreurs de saisie.

> Gain de temps opérationnel

La génération automatisée des bordereaux de commande a remplacé les tâches manuelles répétitives, libérant du temps pour se concentrer sur les ventes.

> Meilleure visibilité sur l’activité

Les équipes peuvent désormais suivre les paiements clients, identifier les ruptures potentielles à venir, et consulter l’historique des commandes par boutique. L’entreprise a gagné en clarté, en contrôle, et en capacité d’anticipation.

En centralisant toutes les opérations critiques liées au stock.

L’application permet aujourd’hui :

- La gestion des stocks en temps réel avec alertes sur les niveaux critiques,
- Le suivi des ventes et et ravitaillement,
- Le suivi des commandes et des paiements clients,
- La génération de bordereaux de commande, prêts à imprimer ou partager,
- Un accès structuré par boutique ou magasin, pour une meilleure traçabilité.
- Une gestion des accés avancé

L’ensemble a été conçu avec les utilisateurs finaux, ce qui a permis de concevoir des interfaces ultra ciblées, sans fonctionnalités superflues.

L’adoption d’Akojo a transformé en profondeur les processus internes de l’entreprise. Dès les premières semaines, les équipes ont constaté un réel gain en fiabilité et en efficacité.

## Réalisation

> Une démarche agile, orientée utilisateurs

Le projet s’est déroulé en suivant une méthodologie agile avec des cycles courts de livraison. Chaque nouvelle fonctionnalité a été prototypée, testée puis validée avec les utilisateurs eux-mêmes.

Nous avons organisé de nombreux tests utilisateurs sur le terrain, en magasin, afin de :

- Recueillir des retours rapides sur l’ergonomie et la pertinence des écrans,
- Identifier les blocages dès la phase de design,
- Améliorer progressivement l’expérience utilisateur à chaque itération.

Cette co-construction a permis une adoption fluide par les équipes dès les premières semaines de déploiement.

> Mon rôle dans le projet

Sur ce projet, j’ai occupé un rôle transverse allant du développement frontend à la gestion de l’infrastructure. J’ai assuré à la fois la qualité de l’expérience utilisateur et la robustesse de la plateforme.

J’ai conçu toute l’interface utilisateur en partant d’une base shadcn/ui, que j’ai personnalisée pour répondre aux besoins du client. L’UX a été pensée pour être claire, accessible et parfaitement adaptée à un usage quotidien sur le terrain.

Pour garantir la stabilité de l’application a part les tests unitaire et fonctionel, j’ai mis en place :

- Des tests end-to-end avec Cypress, simulant les parcours utilisateur les plus critiques,
- un Storybook pour documenter chaque composant de l’interface, facilitant la maintenance et les futures évolutions.
