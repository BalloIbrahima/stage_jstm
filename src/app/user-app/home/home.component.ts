import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // private spinner : NgxSpinnerService 
  // private apiService : ArticleService 
  
  a_la_une:string="assets/icones/ex1.jpg";
  color="";
  laUnes=[
    {
      numero_article:"123456789",
      titre:"les microbes",
      petit_resume:"Les scientifiques ont menés une étude dans les années 90 sur les microbes...",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Science",
      date_publication:"13/12/2019",
      image:"assets/img/ex1.jpg",

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
      rubrique:"Technologie",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg"
    },

    {
      numero_article:"123456789",
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali abbbbbb bbhhj dhuejj iij babab abbab dans notre county le Mali abbbbbb bbhhj dhuejj iij babab abbab ",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Societe",
      date_publication:"13/12/2019",
      image:"assets/img/ex1.jpg",
    }
    

  ];




  blogData : any ;
  temp : any[] = [];
  Unes : any[] = [];
  Unesss : any[] = [];
  base_path = `https://www.jstm.org/wp-json/wp/v2/posts?page=1&per_page=15`;
  nombres : number = 3;
  i : number;

  
  constructor(private spinner : NgxSpinnerService ,
    private apiService : ArticleService ) { }

  ngOnInit(): void {
    this.spinner.show();
    // setTimeout(()=>{
    //   this.spinner.hide();
    // },3000)
    this.getAllBlog();

    this.articles.forEach(article=>{
      this.giveCouleur(article.rubrique)
    })
  }

  // couleur du bg dele rubrique

  giveCouleur(rubrique:any){
    var bg_rubrique=document.getElementById(rubrique)?.style.backgroundColor;
    if(rubrique=="Agriculture"){
      this.color="#034d07" 
    }else if(rubrique=="Sante"){
      this.color="#b66f06e1"      
    }else if(rubrique=="Environnement"){
      this.color="#285a26e1" 
    }else if(rubrique=="Technologie"){
      this.color="#050649e1" 
    }else if(rubrique=="Education"){
      this.color="#d0d316e1" 
    }else if(rubrique=="Societe"){
      this.color="#043a31e1" 
    }else if(rubrique=="Innovation"){
      this.color="#2b64e0" 
    }else if(rubrique=="Portrait"){
      this.color="#b60641e1" 
    }else if(rubrique=="Opinion"){
      this.color="#ca1d11e1" 
    }else if(rubrique=="Edito"){
      this.color="#d6a606" 
    }else{
      this.color="#074061e1" 
    }
    bg_rubrique=this.color

    return rubrique;
  }

  getAllBlog() {
    this.apiService.getBlog(this.base_path).subscribe(response => {
      // console.log(response);
      this.blogData = response;
      this.Unes = this.blogData[0]["jetpack-related-posts"];
      this.temp=this.blogData;
      if(this.temp.length > 0){
        this.spinner.hide();
      }
      
      console.log(this.Unes);
      
    });

    
  }
  combineSlug(slug : any, id : any) {
    return `${slug}-${id}`;
  }
  getId(id : number){
    if(id%2==0)
      return '18rem';
    else
      return null; 
  }


  articles=[
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
      titre:"L'eau froide",
      petit_resume:"L'eau froide fonio est un patati patata azertyuiopNQUI A DES patati patata ",
      chapeau:"L'eau froide  est parmi les plus consommes dans notre county le Mali",
      contenue:"L'eau froide est un patati patata azertyuiopNQUI A DES patati patata le fonio est parmi les plus consommes dans notre county le Mali azerty uiop qsdfgh klm wxcvbn.",
      rubrique:"Sante",
      date_publication:"13/12/2019",
      image:"assets/icones/drapeau.jpg",

    }
  ]


 

}
