import { Component, OnDestroy, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonList,
  IonRouterOutlet,
  IonImg
} from '@ionic/angular/standalone';
import { Subscription, filter } from 'rxjs';

enum Titles {
  CELLPHONE = 'NÚMERO CELULAR',
  ACCOUNT = 'DATOS DE CUENTA',
  END = 'FINALIZAR'
}

enum Routes {
  CELLPHONE = '../../assets/imgs/form-1.svg',
  ACCOUNT = '../../assets/imgs/form-2.svg',
  END = '../../assets/imgs/form-3.svg'
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonList,
    IonRouterOutlet,
    IonImg
  ]
})
export default class RegisterPage implements OnInit, OnDestroy{

  public routeSubscription!: Subscription
  public title: WritableSignal<Titles> = signal(Titles.CELLPHONE)
  public imgRoute: WritableSignal<Routes> = signal(Routes.CELLPHONE)
  private router = inject(Router)

  ngOnInit(): void {
    this.subscribeToRoute()
  }

  ngOnDestroy(): void {
      this.routeSubscription.unsubscribe();
  }

  subscribeToRoute() {
    this.routeSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch(event['url']) {
          case '/register/account':
            this.updateItems(Titles.ACCOUNT, Routes.ACCOUNT)
            break
          case '/register/end':
            this.updateItems(Titles.END, Routes.END)
        }
      }
    })
  }

  updateItems(title: Titles, route: Routes) {
    this.title.set(title);
    this.imgRoute.set(route);
  }

}
