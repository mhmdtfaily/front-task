import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user?: User;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = params['id'];
      this.userService.getUser(userId).subscribe(
        (user) => {
          console.log(user);
          this.user = user;
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching user details: ', error);
        }
      );
    });
  }
}
