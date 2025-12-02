---
title: Qualité d’Eau – Automatisation des relevés SEBA
publishDate: 2024-01-01 10:00:00
img: /assets/qualiteEau.png
img_alt: Application de suivi qualité de l’eau développée en C# et MySQL
description: |
  Projet de deuxième année BTS SNIR : développement d’un logiciel administrateur et d’une application mobile permettant d’automatiser la prise, le stockage et la visualisation de mesures de qualité d’eau pour le SEBA.
tags:
  - Dev
  - C#
  - MySQL
  - Mobile
---

##### Contexte du projet

Le **SEBA** (Syndicat des Eaux du Bassin de l’Ardèche) doit assurer un suivi régulier de la qualité de l’eau sur les installations de puisage et de stockage.  
Jusqu’à présent, les relevés (pH, débit, etc.) étaient réalisés **manuellement**, ce qui rendait le suivi plus long et augmentait les risques d’erreurs.

L’objectif du projet était donc de **numériser et automatiser** l’ensemble du processus de mesure et de gestion des données.

##### Objectifs

- Automatiser la **prise**, le **stockage**, la **gestion** et la **visualisation** des données de mesure.  
- Développer :
  - un **logiciel administrateur** sur poste de travail (Windows),
  - une **application mobile** utilisée par les opérateurs sur le terrain.

<img src="/assets/dgCasUtilisation.png" width="100%" height="500px"/>

##### Répartition du travail

- **Tambon Robyn & Rosier Kirill** : Développement du logiciel administrateur Windows.  
- **Pelletier Valentin** : Amélioration du design (logiciel + mobile).  
- **Seck Alassane** : Développement de l’application mobile opérateur.

##### Technologies utilisées

##### Windows Forms  
Utilisé pour concevoir l’interface du logiciel administrateur.

<img src="/assets/windowsForms.png" width="100%" height="500px"/>

##### C#  
Langage principal du logiciel, utilisé via la plateforme .NET.

##### Base de données MySQL  
Stockage centralisé de toutes les mesures et données des campagnes.

<img src="/assets/bdd.png" width="100%" height="500px"/>

##### JSON  
Format utilisé pour la sérialisation et l’échange de données.

<img src="/assets/json.png" width="50%" height="500px"/>

##### Conception UML

##### Diagramme de classes (logiciel windows)
<img src="/assets/dgClasses.png" width="100%" height="500px"/>

 ##### Diagramme de déploiement  
<img src="/assets/dgDeploiement.png" width="100%" height="500px"/>

##### Fonctionnalités principales

##### Pour l’opérateur (application mobile)
- Saisie guidée des mesures (pH, débit, etc.).  
- Envoi automatisé des relevés vers la base de données.  
- Interface simple et rapide.

##### Pour l’administrateur (logiciel Windows)
- Visualisation détaillée des campagnes.  
- Gestion des opérateurs, sites et mesures.  
- Tableau de bord complet.  
- Export et suivi des données.

<img src="/assets/logWinForm.png" width="100%" height="500px"/>

##### Conclusion

Ce projet a permis de créer une solution complète pour **informatriser la prise de mesures de qualité de l’eau**, afin de faciliter le quotidien des agents du SEBA.  
La numérisation du processus rend le suivi plus fiable, plus rapide et mieux organisé.
