import { AccountService } from 'src/app/account/shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = {
    name: '',
    email: '',
    password: '',
  }

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.register);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    
  }

}
