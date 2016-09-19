import { Component } from '@angular/core';
import { Platform, ActionSheetController, AlertController, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/chat/chat.html'
})
export class ChatPage 
{
  testRadioOpen : boolean;
  testRadioResult;

  constructor(
    public platform: Platform, 
    public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) 
  {}

  openCheck()
  {
    let check = this.alertCtrl.create();

    check.setTitle("Color");

    check.addInput({
      type    : "checkbox",
      label   : "A1",
      value   : "A1",
      checked : true
    });

    check.addInput({
      type    : "checkbox",
      label   : "A2",
      value   : "A2",
      checked : false
    });

    check.addButton({
      text : "Cancel",
      handler : () => {
        console.log("cancel");
      }
    });

    check.addButton({
      text : "Ok",
      handler : data => {
        console.log(data);
      }
    });

    check.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  openRadio()
  {
    let radio = this.alertCtrl.create();

    radio.setTitle("Color");

    radio.addInput({
      type    : "radio",
      label   : "Blue",
      value   : "blue",
      checked : true
    });

    radio.addButton("Cancel");
    radio.addButton({
      text : "OK",
      handler : data => {
          this.testRadioOpen = false;
          this.testRadioResult = data;
      }
    });

    radio.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  openConfirm()
  {
    let confirm = this.alertCtrl.create({
      title   : "Test?",
      message : "TestTestTestTestTestTestTestTestTestTestTest",
      buttons : [
        {
          text : "Noooooo",
          handler : () => {
            alert("No");
          }
        },
        {
          text : "Yesssssss",
          handler : () => {
            alert("yES");
          }
        }
      ]
    });

    confirm.present();
  }

  openAlert()
  {
    let alert = this.alertCtrl.create({
      title     : "Test",
      subTitle  : "sub Test",
      buttons   : ["OK"]
    });

    alert.present();
  }

  openPrompt()
  {
    let prompt = this.alertCtrl.create({
      title   : "Share",
      message : "Enter Share",
      inputs  : [
        {
          name        : "title",
          placeholder : "key key"
        }
      ],
      buttons : [
        {
          text    : "cancel",
          handler : data => {
            console.log("cancel");
          }
        },
        {
          text    : "OK",
          handler : data => {
            console.log(data.title);
          }
        }
      ]
    });

    prompt.present();
  }

  openMenu()
  {
    let me = this;

    let actionSheet = this.actionsheetCtrl.create({
      title : "Albums",

      cssClass : "action-sheets-basic-page",

      buttons : [
        {
          text    : "Delete",
          role    : "destructive",
          icon    : !this.platform.is("ios") ? "trash" : null,
          handler : () => {
            alert("Delete!");
          }
        },
        {
          text    : "Share",
          icon    : !this.platform.is("ios") ? "share" : null,
          handler : () => {
            alert("Share");
          }
        },
        {
          text    : "Play",
          icon    : !this.platform.is("ios") ? "arrow-dropright-circle" : null,
          handler : () => {
            alert("Play");
          }
        },
        {
          text    : "Favorite",
          icon    : !this.platform.is("ios") ? "heart-outline" : null,
          handler : () => {
            alert("Favorite");
          }
        },
        {
          text    : "Cancel",
          role    : "cancel",
          icon    : !this.platform.is("ios") ? "close" : null,
          handler : () => {
            alert("Cancel!");
          }
        }
      ]

    });

    actionSheet.present();
  }

}
