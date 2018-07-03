import { Component, OnInit } from '@angular/core';
import {
  User,
  MenuService,
  Message,
  MessagesService,
  NotificationsService,
  Notification,
  LogoService,
  FooterService
} from 'ngx-admin-lte';
import { MenuWidgetComponent } from './widgets/menu-widget/menu-widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // define your footer links
  private footer = {
      left_part: `<strong>
        Copyright &copy; 2018
        <a href="http://www.cin7.com" >Cin7</a>.
    	</strong>
      Open-source Sharing`,
      right_part: 'Cin7',
    };
  // define here your own links menu structure
  private mylinks: any = [
    {
      'header': 'Cin7 POS'
    },
    {
      'title': 'Home',
      'icon': 'dashboard',
      'link': ['/']
    },
    // {
    //   'title': 'Sub menu',
    //   'icon': 'link',
    //   'sublinks': [
    //     {
    //       'title': 'Page 2',
    //       'link': ['/page/2'],
    //     },
    //     {
    //       'title': 'Page 3',
    //       'link': ['/page/3'],
    //     }
    //   ]
    // },
    // {
    //   'title': 'External Link',
    //   'icon': 'google',
    //   'link': ['http://google.com'],
    //   'external': true,
    //   'target': '_blank'
    // },
    // {
    //   'title': 'External Links',
    //   'icon': 'link',
    //   'sublinks': [
    //     {
    //       'title': 'Github',
    //       'link': ['https://github.com/TwanoO67/ngx-admin-lte'],
    //       'icon': 'github',
    //       'external': true,
    //       'target': '_blank'
    //     },
    //     {
    //       'title': 'Yahoo',
    //       'link': ['http://yahoo.com'],
    //       'icon': 'yahoo',
    //       'external': true,
    //       'target': '_blank'
    //     }
    //   ]
    // },
    // external widget
    {
      class: MenuWidgetComponent,
      data: {
        label: 'test component'
      }
    }
  ];
  // define here your logo
  private logo = {
    html_mini: '<b>Cin7</b>',
    html_lg: '<b>Cin7</b>POS Login',
  };

  constructor(
    private footerServ: FooterService,
    private menuServ: MenuService,
    private logoServ: LogoService,
    private msgServ: MessagesService,
    private notifServ: NotificationsService
  ) {

  }

  public ngOnInit() {
    // define menu
    this.menuServ.setCurrent(this.mylinks);

    this.footerServ.setCurrent(this.footer);
    this.logoServ.setCurrent(this.logo);

    // FAKE MESSAGE
    // defining some test users
    const user1 = new User( {
        avatarUrl: 'assets/kevin.jpg',
        email: 'kevin.wang@gmail.com',
        firstname: 'kevin',
        lastname: 'wang'
    });
    const user2 = new User( {
        avatarUrl: 'assets/kevin.jpg',
        email: 'EMAIL',
        firstname: 'FIRSTNAME',
        lastname: 'LASTNAME'
    });
    // sending a test message
    this.msgServ.addMessage( new Message( {
        author: user2,
        content: 'test content',
        destination: user1,
        title: 'message test'
    }) );
    // sending a test notif
    this.notifServ.addNotification( new Notification( {
        class: 'fa fa-users text-aqua',
        content: 'test notification',
        link: '/page/2'
    }) );


  }

}
