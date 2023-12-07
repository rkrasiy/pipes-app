import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';
import internal from 'stream';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
 // i18n Select
 public name: string = 'Ruslan';
 public gender: 'male' | 'female' = 'male';
 public invitationMap = {
  'male': 'invitarlo',
  'female': 'invitarla'
 }


  changeClient(): void{
    if(this.gender === 'female')
      this.gender = 'male';
    else
      this.gender = 'female';
  }

  //i18n Plural

  public clients: string[] = ['Ruslan', 'Lesia', 'Diana', 'Sophia', 'Emma', 'Svitlana', 'Liubov', 'Jhoe', 'Jose', 'Ivan', 'Roman'];
  public clientsMap = {
    '=0': 'ningun cliente esperando.',
    '=1': 'un cliente esperando.',
    '=2': '2 clientes esperando.',
    'other': '# clientes esperando'
  }
  removeClient():void{
    this.clients.pop()
  }

  //KeyValue Pipe

  public pesron = {
    name: 'Ruslan',
    age: 35,
    address: 'Valencia, España'
  }


  //Async Pipe

  public promiseValue = new Promise ( (resolve, reject) => {
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.');
    }, 3500)
  })


}
