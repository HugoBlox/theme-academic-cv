---
title: Comment j'ai construit ce site Web
subtitle: "En utilisant Hugo, Academic et Forestry"
summary: "Découvrez comment j'ai construit ce site web en utilisant Hugo et Academic, les changements que j'ai effectué pour correspondre au design de mon ancien site, et comment je le maintiens depuis n'importe quel appareil grâce à Forestry"
tags:
- web
categories:
date: "2016-04-20T00:00:00Z"
lastmod: "2019-04-17T00:00:00Z"
featured: false
draft: false
image:
  placement: 0
  caption: 'Academic'
  focal_point: "Smart"
  preview_only: true
projects: ["portfolio"]
---

Je cherchais à retravailler mon site "portfolio". J'ai créé mon ancien site en **ReactJS** en utilisant **Bootstrap** et **w3css**. Le site était assez facile à maintenir, mais il avait quelques défauts. Contrairement au fonctionnement d'**Hugo**, le site n'allait pas générer des pages à partir de contenu statique. A chaque fois que je devais ajouter un élement (projets, expérience professionnelles...), je devais créer le contenu, et l'inclure dans la page correspondante via un React Component. Vous pouvez consulter mon ancient site [ici](https://wwwold.haashi.fr), et son coude source [là](https://github.com/Haashi/Portfolio).

C'est cet aspect que j'apprécie dans **Hugo**, il permet de facilement séparer le contenu et la façon dont on le présente. Grâce au système de templates que propose Hugo, vous indiquez exactement comment vous voulez que s'affiche votre contenu. Dans la plupart des cas, vous voulez créer un template pour chaque type de contenu que vous avez. Dans le cas de ce site, les deux principaux types de contenu sont les posts et les projets. Une fois que les templates sont créés, il suffit de créer le  contenu via de simple fichier markdown. Le système de template peut accéder à des métadonnées appelées "Front matter" d'un contenu. Ces métadonnées sont déclarées au tout début d'un fichier de contenu. Exemple pour ce post (la version anglaise) :

    +++
    authors = []
    date = 2020-01-03T11:00:00Z
    draft = true
    featured = false
    projects = []
    subtitle = "Using Hugo, Academic, and Forestry"
    summary = "Learn how I built this website using Hugo and Academic, the little changes I made to match my old design, and how I keep posting from any devices using Forestry."
    tags = []
    title = "How I built this website and I how I maintain it"
    [image] caption = "Caption"
    focal_point = "Smart"
    placement = 0
    +++

Vous pouvez en apprendre plus sur le framework Hugo sur leur site web [ici](https://gohugo.io). Après m'être rendu compte que Hugo convenait à mon besoin de faciliter la maintenance du site, je me suis plongé dans la documentation. Une des premières choses qu'ils expliquent, est le mécanisme de thème. Les thèmes sont une collection de template d'affichage. Connaissant mes faiblesses en design (et en CSS), c'était la cerise sur le gateau. J'ai cherché parmi les thèmes recensés sur le site d'Hugo avec différents critères en tête : un site portfolio, multilingue (français et anglais), possibilité de blog, design responsive. Un des thèmes qui correspond à tous ces critères est Academic. Qui plus est, Academic (consulter la démo) est capable de faire bien plus ! Il est capable de gérer un blog avec plusieurs utilisateurs, afficher une équipe, gérer des publications provenant d'autres sites, et même une section pour héberger des cours en ligne !  
  
![](/img/academic.PNG)

Pour débuter avec le thème, j'ai fork le projet academic-kickstart sur github. Dès lors, c'est très facile, il suffit de supprimer les fonctionnalités inutiles. Sur la page d'accueil, j'ai juste besoin d'afficher une rapide bio, mes expériences professionnelles, mes compétences et mes informations de contact (je n'ai pas réalisé de formulaire parce que je préfère être contacté par un autre média). J'ai édité le template d'expérience professionnelle pour inclure une liste de mots clés (pour afficher les technologies lié à l'expérience). Le thème Academic ne supporte pas cette fonctionnalité nativement. J'avais cette fonctionnalité sur mon ancien site, et je voulais la garder sur le nouveau. Grâce au mécanisme de templates d'Hugo (et notamment l'ordre de recherche de ceux-ci), il est facile de surcharger un template du thème par un template personnalisé. J'ai copié le code du template de l'expérience professionnelle et ai rajouté quelques lignes pour correspondre à mon besoin, en itérant sur la liste de mots clés renseignés dans les métadonnées et les affichant en utilisant du CSS tout simple :  
  
![](/img/bulletlist.PNG)

Ensuite, j'ai créé tout le contenu, très souvent copié de l'ancien site. Une fois que tout est créé, il faut déployer ce site et le rendre publique. Mon ancien site était hébergé sur les GitHub pages. Je n'ai eu aucun problème en 2 ans, j'ai donc décidé de continuer sur cette plateforme, mais cette fois ci en améliorant le processus en utilisant les GitHub Actions. Grâce aux Actions, je peux dire à GitHub de build mon site en utilisant un docker Hugo et de le push sur la branche gh-pages qui est désservie sur mon domaine (la configuration d'un domaine pour les GitHub pages est en dehors du scope de ce post). Voici l'Action utilisée : 

    name: github pages
    
    on:
      push:
        branches:
        - master
    
    jobs:
      build-deploy:
        runs-on: ubuntu-18.04
        steps:
        - uses: actions/checkout@v1
          with:
            submodules: true
    
        - name: Setup Hugo
          uses: peaceiris/actions-hugo@v2
          with:
            hugo-version: '0.61.0'
            extended: true
    
        - name: Build
          run: hugo --minify
    
        - name: Deploy
          uses: peaceiris/actions-gh-pages@v2
          env:
            ACTIONS_DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
            PUBLISH_BRANCH: gh-pages
            PUBLISH_DIR: ./public

Relativement facile à lire, à chaque fois qu'il y a un push sur la branch master, l'action réalise un checkout (avec les submodules car les thèmes Hugo sont des submodules git), build le projet grâce à un docker hugo, puis déploie sur la page gh-branches (en utilisant un secret configuré sur le projet).
  
Grâce à ça, j'ai un système fonctionnel de Continuous Delivery une fois que je push ou merge sur la branch master. Je peux maintenant me concentrer sur le développement de mon site sans m'inquiéter de son déploiement.

![](/img/githubactions.PNG)  
  
Mais est-ce qu'on peut pas encore faire mieux ? Découvrez [forestry](https://forestry.io/ "forestry"). Forestry est un système de gestion de contenu fondé sur git qui fonctionne avec la plupart des frameworks de pages statiques dans la nature. C'est aussi très facile à déployer. Il suffit d'enregistrer son site, et d'ajouter une page statique pour y accéder (généralement /admin). Une fois configuré, vous pouvez éditer n'importe quel contenu de votre site grâce à un éditeur richtext web, depuis n'importe quel appareil en accédant à votredomaine.fr/admin et en vous connectant avec votre identifiant forestry (ou oauth2).  
  
Maintenant, vous pouvez éditer votre site depuis votre IDE/éditeur de texte favori, ou le faire depuis votre téléphone. Forestry sauvegardera vos changements en commitant directement dans le repository (enclenchant ainsi la CD configurée précédemment).