import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  currentPage = 1;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const query = params['search'] || '';
      this.loadUsers(query);
    });
  }

  loadUsers(query: string = ''): void {
    this.userService.getUsers(this.currentPage).subscribe(
      (users) => {
        this.users = users;
        this.filterUsers(query);
      },
      (error) => {
        console.error('Error fetching users: ', error);
      }
    );
  }

  filterUsers(query: string): void {
    debugger;
    if (!query) {
      this.filteredUsers = this.users;
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    this.users = this.users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(lowerCaseQuery) ||
        user.last_name.toLowerCase().includes(lowerCaseQuery) ||
        user.id.toString().includes(lowerCaseQuery)
    );
  }

  nextPage(): void {
    this.currentPage++;
    this.loadUsers();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }
}
