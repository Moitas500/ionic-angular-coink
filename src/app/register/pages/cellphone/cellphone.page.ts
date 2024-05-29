import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.page.html',
  styleUrls: ['./cellphone.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export default class CellphonePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
