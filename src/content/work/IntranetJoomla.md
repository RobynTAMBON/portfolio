---
title: Intranet Joomla 4
publishDate: 2023-01-01 00:00:00
img: /assets/joomla.png
img_alt: joomla img
description: |
  j'ai créé un site intranet pour la mairie d'Aubenas pour faciliter la recherche des agents de chaque service en utilisant le CMS Joomla 4.
tags:
  - Design
  - Dev
---

##### Joomla 4
Joomla est un CMS Open Source primé, construit et maintenu par une forte communauté de bénévoles qui s'efforcent de produire des logiciels robustes, sécurisés et faciles à utiliser.
Il peut être téléchargé et utilisé gratuitement, et ses fonctionnalités sont à la pointe de la technologie web. Son utilisation se fait principalement via un panneau d'administration.

Voici un aperçu du panneau d'administration Joomla 4 :

<img src="/assets/ControlPannelJoomla4.png" width="100%" height="500px"></img>

Joomla permet aux créateurs de sites web de créer des sites puissants, dont la maintenance du contenu est facile et transparente.

##### Intranet
J'ai crée un site intranet qui affiche un annuaire contenant les différents
agents de chaque service de la mairie d'Aubenas, afin qu’il soit plus simple de trouver les informations d’une personne ou d’un service.


<img src="/assets/accueilIntranet.png" width="100%" height="500px"></img>


Un site où l’on peut rechercher parmi les différentes
données, et où l’on peut trier par nom ou prénom ou service ou même par lettre.


<img src="/assets/trieIntranet.png" width="100%" height="500px"></img>


Un site
avec gestion d’accès, où certaines données ne doivent être visible que pour les
administrateurs du site et où l’utilisateur public peut contacter l’administrateur pour
signaler une anomalie ou une demande d’évolution via un formulaire remplis dans le site, qui
envoie par mail le message de l’utilisateur à l’administrateur grâce à un serveur SMTP.

<img src="/assets/contactRapide.png" width="100%" height="500px"></img>


Un intranet regroupant plusieurs menus, divers autres sites nécessaires au quotidien de certains
agents. Un menu Accueil où l’on peut contacter l’administrateur, un menu Annuaire ou l’on
peut voir les différentes informations des agents et où l’on peut rechercher et trier, un menu
Admin qui n’apparaît que lorsqu’ on est identifié en tant qu’administrateur et qui permet de
tenir l’annuaire à jour, qui permet d’ajouter, de modifier ou de supprimer une personne de
l’annuaire

<img src="/assets/crudBDD.png" width="100%" height="500px"></img>

Un menu Carte qui affiche une carte avec des marqueurs sur les différents sites
gérés par la mairie.

<img src="/assets/carteIntranet.png" width="100%" height="500px"></img>


Un menu Lien qui affiche des liens qui redirigent vers des sites ou
logiciels utilisés quasi quotidiennement par les agents, un menu Procédures-Informatique qui
affiche des PDF dans le site

<img src="/assets/pdfIntranet.png" width="100%" height="500px"></img>

Et un menu Réservation qui affiche une fenêtre externe dans le
site, permettant de réserver les véhicules de services.

<img src="/assets/menuReservation.png" width="100%" height="500px"></img>

Voici à quoi ressemble l'architecture de l'intranet : 

<img src="/assets/architectureIntranet.png" width="100%" height="500px"></img>

Dans ce projet, j'ai utilisé Joomla 4 pour la création de l'intranet, j'ai touché à du HTML et du php (Pour modifier le code de certaines extensions)

<img src="/assets/htmlJoodataBase.png" width="100%" height="500px"></img>

Il a fallut installer et configurer:
Virtual Box.
  Ubuntu
    Lampp
    Configuration Lampp 
    Joomla4
    Remplissage bdd
    Extension Joomla

j'ai utilisé une base de données MySQL pour stocker les données de l'annuaire et j'ai surtout utilisé les extensions joomla pour repondre aux besoins de mon projet.

Extensons utilisées :
<img src="/assets/extensionJoomla4Intranet.png" width="100%" height="500px"></img>
