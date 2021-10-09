import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';
import { NgForm } from '@angular/forms';
import { CommentaireService } from 'src/app/services/commentaire/commentaire.service';
import { VueService } from 'src/app/services/vue/vue.service';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  
  articles : any;
  id_article:any;
  titre : string="";
  imgSrc : string="";
  date : string="";
  resume : string="";
  contenu : string="";
  commentaire:any;
  email:any;
  nom_complet:any;
  retour_requete:any;
  reponsse_vue:any;

  liste_commentaires: any[]=[];

  counter:Subscription;               
  nomC="";
  compte_sans_img="";   
  // concernant la pagination
  page=1;
  count=0;
  pageSize=5;
  maxS=3;
  private subscription:Subscription;                                     
  reponse_comment:any;

  // ici ds le ngOnInit on doit envoyer l'article selectionner à articleService.article 


  constructor(public vueService:VueService ,public commentaireService:CommentaireService ,public user_service: UserServiceService,public articleService : ArticleService,public route : ActivatedRoute, public spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },3000)
    const id = this.route.snapshot.params['id'];
    this.articleService.getBlog('https://www.jstm.org/wp-json/wp/v2/posts/'+id).subscribe(reponse=>{
      console.log(reponse);
      this.articles=reponse;
      this.titre = this.articles.title.rendered;
      this.imgSrc = this.articles.jetpack_featured_media_url;
      this.date = this.articles.date;
      this.resume = this.articles.excerpt.rendered;
      this.contenu = this.articles.content.rendered;
      // on doit pas oublier le this.id_article=this.route.snapshot.params['id']; ou this.articleService.article(id).id
    });

    //ajout de 1 des nombre de vue de l'article
    // pour recupérer le nbre de vue dun article this.vueService.articleVue(this.id_article)
    this.vueService.add_vue({
      'id':null,
      'nombreVue':1,
      'dateVue':"",
      'idArticle':this.id_article,
      "idUser":this.user_service.utilisateur.id
    }).subscribe(ser=>{
      this.reponsse_vue=ser;
      if(this.reponsse_vue.message=='valid'){
        
      }
    })
  
  
    this.subscription=interval(1000).subscribe(
      (val)=>{
        this.getAllCommentaires(id)
      }
    )

  
    // if(this.all_message.length>3){
    //   this.spinner.hide()
    // }

  

  }

  getRequestParams(page:number,pageSize:number):any{
    let params:any={}
    if(page){
      params['page']=page-1;
    }

    if(pageSize){
      params['size']=pageSize;
    }
    return params
  }

  //verification  et attribution d'une photo au lecteur
  imageLecteur(nom_user:any){
    //verification si la photo de profil est vide et lui donner un nom a la place 
  
        this.nomC=nom_user.split(" ")
      //
        try{
          this.compte_sans_img=this.nomC[0][0]+this.nomC[1][0]

        }catch{
          this.compte_sans_img=this.nomC[0][0]+this.nomC[0][1]
        }

        return this.compte_sans_img

  }

  //recuperation de tout les commentaires d'un article donné

  getAllCommentaires(id:any){
    const params=this.getRequestParams(this.page,this.pageSize)
    this.commentaireService.commentaire_de(id,params).subscribe(res=>{
      // console.log(params)
      // console.log(res.data.messages)
      this.maxS=res.data.totalPages
      if(this.liste_commentaires.length==0){
        this.reponse_comment=res
        this.liste_commentaires=res.data.messages
        this.count=res.data.totalItms
      }else if((this.reponse_comment.data.totalItms < res.data.totalItms)||this.reponse_comment.data.currentPage != res.data.currentPage){
        this.liste_commentaires=res.data.messages
        this.reponse_comment.data.currentPage =res.data.currentPage

        
      }
    })
  }


  posterCommentaire(form:NgForm){

    this.commentaire=form.value['commentaire'];
    this.email=form.value['email'];
    this.nom_complet=form.value['nom_complet'];
    this.commentaireService.creation_commentaire(
      {
        'id':null,
        'commentaire':this.commentaire,
        'datePoste':'',
        "IsValide":'',
        'user':this.user_service.utilisateur,
        'article':this.articles,

      },this.id_article
    ).subscribe(res=>{
      this.retour_requete=res;
      if(this.retour_requete.message=='valid'){
        this.commentaireService.commentaires=this.retour_requete.data;
        
      }else{

      }

    })
    
  }

}
