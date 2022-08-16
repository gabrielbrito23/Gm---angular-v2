import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
$(document).ready(function(){

  $("#barras").click(function(){
      $("#menu").toggleClass("#menu-ativo")
  // $("#barras").click(function(){
  //     if($("#menu").hasClass("#menu-ativo")){
  //         $("#menu").removeClass("#menu-ativo")
  //     }else{
  //         $("#menu").addclass("menu-ativo")
  //     }

  // })
  
})
})