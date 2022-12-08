import { AccountService } from './../../../account/shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  login = {
    email: '',
    password: ''
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

}
