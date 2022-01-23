import broadwick01 from "./broadwick01.jpg";
import broadwick02 from "./broadwick02.jpg";
import broadwick03 from "./broadwick03.jpg";
import broadwick04 from "./broadwick04.jpg";
import mammut01 from "./mammut01.jpg";
import mammut02 from "./mammut02.jpg";
import mammut03 from "./mammut03.jpg";
import mammut04 from "./mammut04.jpg";
import benjamin01 from "./benjamin01.jpg";
import benjamin02 from "./benjamin02.jpg";
import benjamin03 from "./benjamin03.jpg";
import benjamin04 from "./benjamin04.jpg";
import apple01 from "./apple01.jpg";
import apple02 from "./apple02.jpg";
import apple03 from "./apple03.jpg";
import apple04 from "./apple04.jpg";
import fuze01 from "./fuze01.jpg";
import fuze02 from "./fuze02.jpg";
import fuze03 from "./fuze03.jpg";
import fuze04 from "./fuze04.jpg";
import lacoste01 from "./lacoste01.jpg";
import lacoste02 from "./lacoste02.jpg";
import lacoste03 from "./lacoste03.jpg";
import lacoste04 from "./lacoste04.jpg";

const data = [
  {
    title: "Broadwick",
    desc:
      "Structure de strate simple. Le titre reste fixe mais change une fois son contenu" +
      " associé passé dans le viewport. La taille du texte n’est pas établie de manière" +
      " standard mais en fonction de la largeur du viewport.",
    example: "Introduction de landing page. Présentation de différents fits",
    src1: `${broadwick01}`,
    src2: `${broadwick02}`,
    src3: `${broadwick03}`,
    src4: `${broadwick04}`,
    link: "https://broadwicklive.com/",
  },
  {
    title: "Mammut",
    desc:
      "Plusieurs éléments intéressants sur cette page. L’introduction avec un gros titr" +
      "e, image et description sur un aplat de couleur. Un strate full width composée d" +
      "e 2 visuels/vidéos (avec ou sans marge entre les 2) permettant de ne pas faire d" +
      "e compositions. Un strate composée de 2 pushs non centrés soulignés d’un texte n" +
      "on centrés non plus apportant un peu de rythme. Une strate avec visuel ou vidéo " +
      "d’arrière-plan et textes en superposition. Le visuel et le texte highlighté chan" +
      "gent en fonction du niveau de scroll.",
    example: "Landing page",
    src1: `${mammut01}`,
    src2: `${mammut02}`,
    src3: `${mammut03}`,
    src4: `${mammut04}`,
    link:
      "https://www.mammut.com/uk/en/journal/interviews/together-for-glaciers-corinne-we" +
      "idmann",
  },
  {
    title: "Benjamin righetti",
    desc:
      "Pas mal de principes d’animation dans cette page. On pourrait imaginer reprendre" +
      " le principe d’introduction de cette page pour une de nos landing. Un gros titre" +
      " très graphique et visuel minimisé en introduction, au scroll le texte s’échappe" +
      " et le visuel s’agrandi jusqu’à la pleine largeur, puis la description apparait.",
    example: "Intro de landing page",
    src1: `${benjamin01}`,
    src2: `${benjamin02}`,
    src3: `${benjamin03}`,
    src4: `${benjamin04}`,
    link: "https://benjaminrighetti.com/",
  },
  {
    title: "Apple",
    desc:
      "Lecture de la vidéo en fonction du niveau de scroll et apparitions de blocs de t" +
      "exte à des moments précis. Permettrais d'avoir un rendu plus réaliste que certai" +
      "nes conception 3D.",
    example: "Mise en avant de produits techniques",
    src1: `${apple01}`,
    src2: `${apple02}`,
    src3: `${apple03}`,
    src4: `${apple04}`,
    link: "https://www.apple.com/fr/airpods-pro/",
  },
  {
    title: "Fuzeshapes",
    desc:
      "Lecture de la vidéo en fonction du niveau de scroll et apparitions de blocs de t" +
      "exte à des moments précis. Permettrais d'avoir un rendu plus réaliste que certai" +
      "nes conception 3D.",
    example: "Mise en avant de produits techniques",
    src1: `${fuze01}`,
    src2: `${fuze02}`,
    src3: `${fuze03}`,
    src4: `${fuze04}`,
    link: "https://www.fuzeshapes.com/",
  },
  {
    title: "Lacoste",
    desc:
      "Utilisation de grosses tailles de typographie qui varient en fonction de la larg" +
      "eur du viewport sur des titres. Ceux-ci apparaitrait plus comme un élément graph" +
      "ique qu’un élément textuel simple.",
    example: "Intro de landing page, superposition sur strate story",
    src1: `${lacoste01}`,
    src2: `${lacoste02}`,
    src3: `${lacoste03}`,
    src4: `${lacoste04}`,
    link:
      "https://www.figma.com/proto/M88H38IzxwM44rjeweY6Cy/TestNewStrate?page-id=0%3A1&n" +
      "ode-id=106%3A15952&viewport=305%2C48%2C0.04&scaling=scale-down&starting-point-no" +
      "de-id=106%3A15952&show-proto-sidebar=1",
  },
];

export default data;
