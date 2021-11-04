import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-app',
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.scss']
})
export class UserAppComponent implements OnInit {

  title = 'jstm:Journal Scientifique et Technique du MALI';

  icone_court:string="favicon.ico";

  constructor() {
    window.addEventListener("scroll",()=>{
      const  nav=document.querySelector('.menu_sans_srcoll')
        const  nav_scroll=document.querySelector('.menu_wif_scrool')
        const  toggle=document.querySelector('.toggle_app')

      if(window.scrollY >= 200){
        // console.log(">200")
        // nav?.classList.add('menu_disparait')
        nav_scroll?.classList.add('menu_apparait')  
        toggle?.classList.add('toggle_apparait')  
        toggle?.classList.remove('d-none')  


      }
      else if(window.scrollY <= 200){ 
        
        // nav?.classList.remove('menu_disparait')
        nav_scroll?.classList.remove('menu_apparait') 
        toggle?.classList.remove('toggle_apparait')  
        toggle?.classList.add('d-none')  

 
      }
    })
   }
  ngOnInit(): void {
  }

  btn_scroll_click(){
    window.scrollTo({

      top:0,
      left:0,
      behavior:'smooth', 
    })
    
  }


  sticky: boolean = false;
  elementPosition: any;

  @Output() public sideNavToggle=new EventEmitter();

  public onToggleSideNav=() =>{
    this.sideNavToggle.emit();

  }

}
