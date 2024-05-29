import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-end',
  templateUrl: './end.page.html',
  styleUrls: ['./end.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export default class EndPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
