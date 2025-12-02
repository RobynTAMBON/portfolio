---
title: Valorisation des Cryptoportiques
publishDate: 2025-02-05 19:20:00
img: /assets/Threejs.png
img_alt: Threejs img
description: Dans un groupe de 4 developpeurs utilisant la methode Agile, nous avons commencé le developpement du projet de valorisation des Cryptosportiques de la ville d'ArlesTHREE.JS
tags:
  - Design
  - Dev
  - User Testing
---

##### ThreeJS

ThreeJS est une bibliothèque en Javascript, créée par Mr.doob, qui permet de manipuler des objets 3D directement dans le navigateur. En fait, ce qu’il faut comprendre c’est que ThreeJS, via Javascript, permet d’utiliser WebGL dans un canvas HTML5.

WebGL est une API Javascript qui permet de créer du rendu graphique 2D et 3D par l'utilisation d'openGL.

Voici un exemple ou j'affiche en 3D dans le navigateur web un troupeau de vaches, avec
gestion des niveaux de détails pour permettre l'affichage de beaucoup d'objets.
On peut voir ici le chargement d'un objet 3D, puis je crée un groupe dans lequel je clone plusieurs fois la vache, et et l'implementation d'une caméra pour se déplacer avec (Z, Q, S, D) et de rotation avec la souris.
Tout ça ajouté à la scène donne ceci :


<iframe src="/three/TP3/index.html" width="100%" height="500px"></iframe>

Voici un autre exemple de démo où j'affiche un terrain en 3D dans le navigateur web. 
Les données du relief sont lues à partir d'un fichier au format JSON et la texture plaquée est une orthophoto (photo aérienne orthorectifiée pour supprimer les déformations dues à la
perspective) avec des légendes ajoutées sur le terrain et une camera spéciale de simulation de vol. On peut aussi changer la texture en appuyant sur "ECHAP".

<iframe src="/three/TP4/index.html" width="100%" height="500px"></iframe>

##### Les Cryptoportiques
Les Cryptoportiques font partie des monuments arlésiens classés au Patrimoine Mondial de
l’UNESCO. Ces impressionnantes et énigmatiques galeries souterraines formaient le soubassement
du forum, lieu public central de l’époque romaine, aux fonctions commerciales, politiques et
religieuses.
Situées à plusieurs mètres sous le sol, les galeries des Cryptoportiques ont été conçues, dès la
fondation de la colonie romaine à la fin du Ier siècle avant notre ère, pour rattraper un terrain en pente et aménager le forum.
Cependant, les difficultés d’appréhension et d’accessibilité de ce site ont fait naître l'idée de
créer une visite en réalité virtuelle des Cryptoportiques (Projet en groupe de 4 personnes).

Pour ce projet, nous avons utilisé :

1 serveur Python (FLASK).

Plusieurs Clients Web (ThreeJS).


Ce projet est loin d'être terminé mais,
Voici un exemple de ce que vous pouvez voir lors d'une visite :

<video width="100%" controls>
  <source src="/assets/VideoCryptoPortique.mp4" type="video/mp4">
  Votre navigateur ne supporte pas les vidéos HTML5.
</video>
