import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.scss']
})
export class AdminArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  articles=[
    {
      numero_article:"123456789",
      titre:"Le fonio a t'il un gout Le fonio est un patati patata azertyuiopNQUI A DES patati patata",
      petit_resume:"Le fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"le fonio est parmi les plus consommes dans notre county le Mali",
      contenue:"Le fonio est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Agriculture",
      date_publication:"12/12/2019",
      image:"assets/img/ex1.jpg"

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Sante",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Environnement",
      date_publication:"13/12/2019",
      image:"assets/img/ex2.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Science",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Sant",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Technologie",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali abbbbbb bbhhj dhuejj iij babab abbab dans notre county le Mali abbbbbb bbhhj dhuejj iij babab abbab ",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Societe",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Education",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata dans notre county le Mali abbbbbb bbhhj dhuejj iij babab abbab  dans notre county le Mali abbbbbb bbhhj dhuejj iij babab abbab  dans notre county le Mali abbbbbb bbhhj dhuejj iij babab abbab  ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Innovation",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Nos Scientifiques",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"Le fonio a t'il un gout",
      petit_resume:"Le fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"le fonio est parmi les plus consommes dans notre county le Mali",
      contenue:"Le fonio est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Agriculture",
      date_publication:"12/12/2019",
      image:"assets/img/ex1.jpg"

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Sant",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Sant",
      date_publication:"13/12/2019",
      image:"assets/img/ex2.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Sant",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Sant",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Sant",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali abbbbbb bbhhj dhuejj iij babab abbab dans notre county le Mali abbbbbb bbhhj dhuejj iij babab abbab ",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Sant",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Sant",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata dans notre county le Mali abbbbbb bbhhj dhuejj iij babab abbab  dans notre county le Mali abbbbbb bbhhj dhuejj iij babab abbab  dans notre county le Mali abbbbbb bbhhj dhuejj iij babab abbab  ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Sant",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    },

    {
      numero_article:"123456789",
      titre:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Sante",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    }
  ]

}
