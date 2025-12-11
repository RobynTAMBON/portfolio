---
title: Refonte du site institutionnel de l’ACCM
publishDate: 2025-06-01 10:00:00
img: /assets/wp.png
img_alt: WoedPress logo
description: refonte intégrale du site institutionnel de la Communauté d’Agglomération ACCM (Arles Crau Camargue Montagnette)
tags:
  - CMS-WordPress
  - PHP
  - Gutenberg

---

#### Projet : Refonte du site institutionnel de l’ACCM  

**WordPress** est un système de gestion de contenu gratuit et open-source qui permet à toute personne de créer et de gérer facilement des sites internet.

<br>

*(Stage – 15 semaines, Mairie d’Arles – Direction des Systèmes d’Information)*

Dans le cadre de ma troisième année de BUT Informatique, j’ai intégré la **DSI de la Mairie d’Arles**, au sein du service Applications.  

Ma mission : **refondre entièrement le site institutionnel de la Communauté d’Agglomération ACCM**, dont l’ancien système (MODX) n’était plus adapté ni maintenable.<br><br>
Ce projet avait pour objectifs principaux :
- repartir d’un site vierge sous WordPress,
- créer un **thème sur mesure**, adapté aux besoins de la collectivité,

<img src="/assets/themeCustomWP.png" width="100%"></img>

- respecter une **charte graphique officielle** fournie par la graphiste **Eleonore Dherbecourt**,
- garantir une structure **moderne, responsive, accessible**,

- offrir un back-office simple d'utilisation pour les agents en charge de l’édition.

###### Voici par-exemple une amélioration de la médiatheque du back-office WP permettant une organisation des images sous forme de dossiers virtuels
<img src="/assets/ameliorationMediatheque.png" width="100%"></img>

---
<br><br>

##### Mise en place de l'environnement et découverte de WordPress

J’ai d’abord mis en place un environnement professionnel via **Local** (Nginx, MySQL, Adminer).  

<img src="/assets/local.png" width="100%"></img>

J’ai appris à maîtriser :
- la **hiérarchie des templates** WordPress (single, page, archive…),
- les **hooks et filtres** (actions, filters),
- la structure d’un **thème custom**,
- le cycle de rendu PHP/HTML.

Une gestion Git a été mise en place, ainsi qu’une méthode de travail inspirée des pratiques internes du service.

<img src="/assets/templatesHierarchieWp.png" width="100%"></img>

---
<br><br>

##### Intégration des maquettes & création du thème

À partir des maquettes (desktop, tablette, mobile), j’ai construit progressivement le thème ACCM, par exemple :

- intégration du **header**

<img src="/assets/header.png" width="100%"></img>

 - **footer**
 
 - **bannière**
###### Bannière avec une image fictive
 <img src="/assets/banniereImgFictive.png" width="100%"></img>

 
 - **blocs d’accès rapides**

<img src="/assets/blocAccesRapide.png" width="100%"></img>

- **structure responsive complète**

<img src="/assets/responsiveTaille.png" width="100%"></img>

- intégration des styles (initialement en Tailwind, migrés ensuite vers **Sass/SCSS** pour faciliter la maintenance),
- respect strict de la charte graphique (couleurs, typographies, espacements).

J’ai appris à composer avec les contraintes d’un site institutionnel : accessibilité, lisibilité, cohérence graphique, hiérarchie éditoriale.

<img src="/assets/mesDechets.png" width="100%"> </img>

---
<br><br>

##### Structuration des contenus : Taxonomies & CPT

Le site ACCM repose sur une arborescence riche et complexe.  
Pour rendre son administration intuitive, j’ai créé :

- une **taxonomie personnalisée** `custom-categories`

<img src="/assets/codeCreationTaxonomie.png" width="100%"> </img>

- une **Page de menu “Réglage Accueil”** pour gérer l’ensemble des contenus de la page d’accueil

<img src="/assets/reglagesAccueil.png" width="100%"> </img>

- des champs enrichis : nom, slug (identifiant d'une publication), pictogramme, lien externe
- une logique de **saisie contrôlée** (héritage automatique du pictogramme du parent, blocage en cas de configuration incorrecte).

J'ai aussi pu créer des **CPT (Custom Post Type)** qui ont par la suite été remplacé.<br>
Cette architecture permet un fonctionnement clair, cohérent et entièrement administrable.

---

<br><br>

##### Développement de blocs Gutenberg personnalisés

Gutenberg est l’éditeur de texte de WordPress. Il repose sur le principe des « blocs », des éléments de contenu qui servent à l’utilisateur pour écrire, mais aussi personnaliser le design des articles et des pages de son site WordPress.

Une grande partie du stage fut consacrée à la création de blocs Gutenberg sur mesure.  J’ai développé plusieurs blocs en **JSX / React** :

- bloc **Couleur**,  
- bloc **Accordéon**,

<img src="/assets/blocsCustomGutenberg.png" width="100%"> </img>

Pour cela, j’ai appris à utiliser :

- **wp-cli** pour générer la structure des blocs,
- **React/JSX** pour l’éditeur,
- **Webpack + Babel** pour compiler,

Ces blocs permettent aux agents d’ajouter des contenus riches tout en gardant cohérence et simplicité.

---
<br>

##### Difficultés rencontrées et solutions apportées

Le projet comportait de nombreux défis, notamment :

- l’abandon de Tailwind en cours de route → **refactor complet en Sass**,  
- des problèmes d’URL conduisant à un mauvais routage,  
- des comportements inattendus avec le plugin ACF (Advanced Custom Fields),  
- des bugs complexes sur la hiérarchie des blocs,  
- des délais institutionnels changeants.

Ces difficultés m’ont beaucoup appris sur la **rigueur**, la **résolution de problèmes** et l’importance d’une architecture claire.

---
<br>

##### Travail en équipe

J’ai collaboré quotidiennement avec :
- les développeurs du service Applications,
- la graphiste,
- les agents de communication.

J’ai aussi présenté une **revue d’étape du projet** à l’oral, renforçant ma capacité à vulgariser un travail technique pour différents publics.

---
<br>

##### Compétences acquises

**Techniques**
- WordPress avancé (thème custom, hooks, Walker, taxonomies, CPT)
- Gutenberg (JSX / React / Webpack / Babel)
- PHP orienté WordPress
- Tailwind CSS
- Sass / SCSS
- Responsive design
- Git

 **Méthodologiques**
- autonomie et organisation
- conduite de mini-projets
- communication avec métiers non techniques
- respect d’une charte graphique professionnelle (Figma)

**Humaines**
- communication,
- adaptabilité,
- gestion de contraintes institutionnelles.

---
<br>

##### Poster scientifique

Durant cette expérience professionnelle, j'ai pu produire un **poster scientifique** résumant :  
- le contexte,  
- la démarche,  
- les choix techniques,  
- et les résultats.  

<img src="/assets/Poster_Scientifique.png" width="100%"></img>


---
<br><br>

##### Conclusion

Cette expérience constitue un projet complet mêlant technique, design, gestion de contenu, optimisation et travail en équipe.  
Il m’a permis de développer un **thème WordPress professionnel**, d’approfondir la création de blocs Gutenberg, et de comprendre les exigences réelles d’un site institutionnel moderne.

Bien que la mise en production ait été retardée ou annulée pour des raisons politiques, le travail accompli forme une base solide pour la continuité du projet et représente un jalon important dans mon évolution de développeur web.
 
 **Voici un aperçu rapide de l'application WordPress sur mesure**
<iframe 
    width="100%" 
    height="350px" 
    src="https://www.youtube.com/embed/ieRqGqGOVNE" 
    title="YouTube video" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>

---

 <br><br><br><br>
##### En savoir plus sur ce projet
<iframe
  src="/pdf/RapportStageAccm.pdf"
  width="100%"
  height="930px"
  style="border:none;"
></iframe>


