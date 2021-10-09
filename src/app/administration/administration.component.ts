import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  ischeicked=false;
  constructor() { 

    // window.addEventListener("wi")

  }

  ngOnInit(): void {
  }

  check(){
    this.ischeicked=!this.ischeicked
    const sidecheick=document.querySelector('.sidebar')
    const  side_user=document.querySelector('.side-user')
    const  nom_menu=document.querySelectorAll('.nom_menu')
    const  icon=document.querySelectorAll('.icon_menu')
    const  menu_btn=document.querySelectorAll('.menu_btn')
    const  header=document.querySelector('.header')
    const  main_panel=document.querySelector('.main-panel')

    // window.addEventListener("scroll",()=>{
      if(this.ischeicked==true){
          sidecheick?.classList.add('sidebar-cheick')
          sidecheick?.classList.add('display')
          side_user?.classList.add('side-user-cheick')  

          nom_menu?.forEach(element => {
            element.classList.add('d-none')  
          });
          icon?.forEach(element => {
            element.classList.add('icon_menu-cheick')  
          });
          menu_btn?.forEach(element => {
            element.classList.add('menu_btn-cheick')  
          });
          header?.classList.add('header-cheick')  
          main_panel?.classList.add('main-panel-cheick')  

      }else if(this.ischeicked==false){
        sidecheick?.classList.remove('display')

        sidecheick?.classList.remove('sidebar-cheick')
        side_user?.classList.remove('side-user-cheick')  
        nom_menu?.forEach(element => {
          element.classList.remove('d-none')  
        });
        icon?.forEach(element => {
          element.classList.remove('icon_menu-cheick')  
        });
        menu_btn?.forEach(element => {
          element.classList.remove('menu_btn-cheick')  
        });        header?.classList.remove('header-cheick')  
        main_panel?.classList.remove('main-panel-cheick')  
      }
      //     const  toggle=document.querySelector('.toggle_app')
  
      //   if(window.scrollY >= 200){
          
      //     // nav?.classList.add('menu_disparait')
      //     nav_scroll?.classList.add('menu_apparait')  
      //     toggle?.classList.add('toggle_apparait')  
      //     toggle?.classList.remove('d-none')  
  
  
      //   }
      //   else if(window.scrollY <= 200){ 
          
      //     // nav?.classList.remove('menu_disparait')
      //     nav_scroll?.classList.remove('menu_apparait') 
      //     toggle?.classList.remove('toggle_apparait')  
      //     toggle?.classList.add('d-none')  
  
   
      //   }
      // })
  }

}
