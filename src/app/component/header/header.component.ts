import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { KeyValue } from "src/app/model/keyValue";
import { MenuObject } from "src/app/model/MenuObject";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  public dataMenu: Array<MenuObject> = [];
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getMenu();
  }

  private getMenu() {
    this.setMenuData();
    this.setMenuStyle();
  }

  private setMenuData() {
    this.dataMenu = [
      this.getMenuObject(
        "acumulacionOperaciones",
        "ACUMULACIÓN OPERACIONES",
        null,
        null
      ),
      this.getMenuObject("tablas", "TABLAS", null, null),
      this.getMenuObject("#", "GRÁFICAS", null, [
        this.getMenuObject("graficasColumnas", "COLUMNAS", null, null),
      ]),
    ];
  }

  private getMenuObject(
    routerKey: string,
    htmlValue: string,
    classParam: string,
    arraySecondary: Array<MenuObject>
  ): MenuObject {
    return new MenuObject(
      new KeyValue(routerKey, htmlValue),
      classParam,
      arraySecondary
    );
  }

  private setMenuStyle() {
    console.log("this.dataMenu.length: ", this.dataMenu.length);

    for (let i = 0; i < this.dataMenu.length; i++) {
      const object1 = this.dataMenu[i];

      if (this.dataMenu.length == 1)
        object1.classParam = "li-border-menu-primary-only-one-or-last";

      if (this.dataMenu.length > 1)
        i != this.dataMenu.length - 1
          ? (object1.classParam = "li-border-menu-primary-first-or-mid")
          : (object1.classParam = "li-border-menu-primary-only-one-or-last");

      if (object1.arraySecondary != null) {
        for (let j = 0; j < object1.arraySecondary.length; j++) {
          const object2 = object1.arraySecondary[j];

          if (object1.arraySecondary.length == 1)
            object2.classParam = "li-border-menu-secondary-only-one-or-last";

          if (object1.arraySecondary.length > 1)
            j != object1.arraySecondary.length - 1
              ? (object2.classParam = "li-border-menu-secondary-first-or-mid")
              : (object2.classParam =
                  "li-border-menu-secondary-only-one-or-last");
        }
      }
    }
  }

  navigate(router: string) {
    if (router !== "#") this.router.navigate([router]);
  }
}
