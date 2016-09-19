import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage 
{
  private items;

  constructor(private navCtrl: NavController) 
  {
    this.items = [
      {title: "Data1", description: "DataTest1"},
      {title: "Data2", description: "DataTest2"},
      {title: "Data3", description: "DataTest3"}
    ];
  }

 /**
  * 
  */
  addItem()
  {
    
  }

  /**
   * 
   */
  viewItem()
  {
alert("A");
  }

}
