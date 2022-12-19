---
date: 2011-04-18
lang: fr
title: Coder en Javascript dans une console
tags:
  - javascript
  - jquery
---

Depuis l’apparition des consoles Javascript, on peut debugger plus facilement
des erreurs de scripts, qui à l’époque d’IE6 & co se faisait à coup de alert().
Un chose que je ne trouve pas très répandu, c’est d’utiliser ces consoles pour
coder directement, de petit morceaux de code, sans se (re)taper d’ajouter du
script inline, ou un fichier juste pour avoir bonne conscience. Avec une console
avancée, on peut même éditer des scripts en cours d’exécution !

## A quoi ça sert de coder du Javascript dans une console ?

Un exemple très simple sera plus parlant : vous voyez un paragraphe de texte et
vous vous demandez combien il comporte de caractères. Et là vous commencez à
compter… 1, 2, 3… Sttoooppp ! On peut faire ça en javascript ! Sans perdre du
temps ! En admettant que vous ayez une console javascript digne de ce nom (la
console Webkit en fait partie – Chrome, Safari…), vous avez un shortcut vraiment
énorme. C’est le **$0**.

### $0 ?

$0 est très simple d’utilisation, et peut être très utile. Choisissez un élément
sur une page web, faites une inspection de l’élément (sous Webkit et Gecko, un
simple clic droit dessus et « Inspect Element » / « Inspecter l’élément » fait
l’affaire). Allez dans votre console Javascript, et tapez $0 (puis Enter). Et là
magie, cette variable contient une référence du noeud DOM en question ! C’est
assez énorme je trouve.

### Utilisation : compter le texte d’un paragraphe

Admettons que vous cherchez à compter le nombre de caractères dans une `<div>`,
inspectez là, puis dans votre console entrez-y la ligne suivante:

```js
$0.innerHTML.length;
```

Et voilà vous avez votre résultat !

Bien entendu il est bien évidement possible d’avoir des utilisations bien plus
poussé de cette technique, comme par exemple récupérer tous les liens d’une page
pour avoir leur href ou pour les entourer en rouge.

### Coder plus d’un ligne

Voici quelques trucs utile à savoir pour avoir une utilisation correcte des
consoles javascript :

* Utiliser les flèches du clavier Haut et Bas pour naviguer dans les précédentes
  commandes effectués, comme dans un terminal;
* Penser à Shift+Enter pour faire des retours à la ligne sans exécuter le code;
* La touche TABulation vous permet d’avoir une autocomplétion. Appuyez dessus
  plusieurs fois vous présentera les différentes options à votre disposition.

## Ajouter jQuery dans n’importe quelle page depuis une console Javascript

Lorsque l’on fait vite mumuse avec cette technique, il peut s’avérer judicieux
d’utiliser jQuery ou une librairie quelconque de votre choix pour gagner encore
en rapidité, et jQuery n’est pas encore sur toutes les pages web ([même si ça
s’en reproche][1]) Alors voilà une petite technique de sioux afin d’ajouter
jQuery (ou autre) dans la page en cours.

```js
if (typeof jQuery == "undefined") {
  var myScript = document.createElement("script");
  myScript.setAttribute(
    "src",
    "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"
  ); // you can change this filename
  document.getElementsByTagName("head")[0].appendChild(myScript);
}
```

N.B. : Si justement vous n’avez pas jQuery déjà inclus, il se peut que l’ajouter
provoque des soucis si la variable $ est utile à la page (ce qui peut être le
cas si une librairie tel que ProtoypeJs est inclus). Il faut donc utiliser la
méthode de jQuery pour palier à ce problème :

```js
jQuery.noConflict(); // if you think there will be a problem with "$"
```

Ce qui impliquer d’utiliser par la suite jQuery avec son vrai nom plutôt que $
(ex: jQuery(‘.selector’).plugin() ).

Ainsi on pourra faire des choses plus avancés facilement. Si on reprends mon
exemple de tout à l’heure où j’ai compté les caractères d’une div, vous avez
peut être remarqué le soucis que cette technique peut avoir : si vous avez de
l’HTML dedans, le nombre de caractère est faussé puisque cela va compter les
caractères réservés à l’HTML. Avec jQuery, ça devient aussi simple que ça pour
contourner le problème :

```js
jQuery($0).text().length;
```

And voilà… Vous prendrez vite goût à cette technique qui peut devenir très
utile. D’ailleurs si vous avez des petits snippets sympathiques, n’hésitez pas à
les poster dans les commentaires, je pourrais très bien ajouter une liste de
commandes utiles en dessous de cette article !

Ajout du 17 mai 2011 : Je vous invite à [redécouvrir l’outil de dév. de Chrome,
via une vidéo du dernier Google I/O présenté par Paul Irish][2]

[1]: https://twitter.com/mathias/status/59692133157842946 "Statistique jQuery/Flash sur les pages web"
[2]: http://www.paulirish.com/2011/a-re-introduction-to-the-chrome-developer-tools/
