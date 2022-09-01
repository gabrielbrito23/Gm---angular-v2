import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

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

  // $("#barras").click(function(e){
  //     $("#menu").toggleClass("#menu-ativo")
  $("#barras").click(function(){
      if($("#menu").hasClass("#menu-ativo")){
          $("#menu").removeClass("#menu-ativo")
      }else{
          $("#menu").addClass("menu-ativo")
      }

  })
})