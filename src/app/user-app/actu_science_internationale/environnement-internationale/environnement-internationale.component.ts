import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-environnement-internationale',
  templateUrl: './environnement-internationale.component.html',
  styleUrls: ['./environnement-internationale.component.scss']
})
export class EnvironnementInternationaleComponent implements OnInit {

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
  }

  getAllBlog() {
    this.apiService.getBlog(this.base_path).subscribe(response => {
      console.log(response);
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


}
