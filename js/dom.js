/**
 * LE DOM permet de manipuler les objets ou les élements d'une page WEB, Il peut être utilisé pour représenter un document XML 
 * ou XHTML
 * DOM n'appartient pas à javascript mais à ce qu'on appelle une langage agnostique, cela veut dire qu'il peut 
 * être utilisé sur plusieurs langages
 * Un élement HTML peut être décomposé en
 * - element node (div, span, p, h1, ....) :: un node peut contenir un autre node
 * - attribute node (style, class, src, href, ...)
 * - Text node (les contenus entre les tags <a href="attribute_value"> textenode </a>)
 */
console.log(document.body);         // pour récupérer l'élt body
console.log(document.body.nodeName);// le nom de la balise => body
console.log('header', document.head);
// Other important properties
document.images
document.links   // récupère tous les  <a> and <area> with "href" attributes 
document.anchors // récupre tous les <a> qui ont un attribut "name"
