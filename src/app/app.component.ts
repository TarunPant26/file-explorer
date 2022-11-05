import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  menuHeader: any = [];
  appitems = [
    {
      label: 'Item 1',
      icon: 'folder',
      items: [
        {
          label: 'Item 1.1',
          icon: 'folder',
          items: [
            {
              label: 'Item 1.2.1',
              link: '/item-1-2-1',
              icon: 'insert_drive_file'
            },
            {
              label: 'Item 1.2.2',
              icon: 'folder',
              items: [
                {
                  label: 'Item 1.2.2.1',
                  link: 'item-1-2-2-1',
                  icon: 'insert_drive_file'
                }
              ]
            }
          ]
        },
        {
          label: 'Item 1.1',
          link: '/item-1-1',
          icon: 'insert_drive_file'
        }
      ]
    },
    {
      label: 'Item 2',
      icon: 'folder',
      items: [
        {
          label: 'Item 2.1',
          link: '/item-2-1',
          icon: 'favorite'
        },
        {
          label: 'Item 2.2',
          link: '/item-2-2',
          icon: 'favorite_border'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
    this.appitemsTravel = this.appitems;
  }

  breadCrumbMain() {
    this.appitemsTravel = this.appitems;
    this.menuHeader = [];
  }

  appitemsTravel;

  breadCrumb(menu, index) {
    console.log('sub breadCrumb');
    this.menuHeader.splice(index + 1, this.menuHeader.length - 1);
    if (menu[index] && menu[index].items && menu[index].items.length) {
      this.appitemsTravel = menu[index].items;
    }
  }

  menuChange(menuChange) {

    if (menuChange.items) {

      this.appitemsTravel = menuChange.items;
      this.menuHeader.push({ label: menuChange.label, icon: 'keyboard_arrow_right', items: menuChange.items });
      // this.menuHeader.push(menuChange);
      // this.appitemsTravel.push(     {
      //   label: 'test',
      //   link: '/test',
      //   icon: 'pan_tool'
      // })
      console.log(this.appitemsTravel)
      console.log(menuChange)
      console.log('hasMultiMenuLabel');
    }
  }


}
