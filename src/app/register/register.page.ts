import { Component, OnDestroy, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

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
  public title: WritableSignal<'NÚMERO CELULAR' | 'DATOS DE CUENTA' | 'FINALIZAR'> = signal('NÚMERO CELULAR')
  public imgRoute: WritableSignal<string> = signal('../../assets/imgs/form-1.svg')
  private router = inject(Router)

  ngOnInit(): void {
    this.routeSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      if (event instanceof NavigationEnd && event['url'] === '/register/account') {
        this.title.set('DATOS DE CUENTA');
        this.imgRoute.set('../../assets/imgs/form-2.svg');
      }
    })
  }

  ngOnDestroy(): void {
      this.routeSubscription.unsubscribe();
  }

}
