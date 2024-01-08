import { Component, OnInit } from '@angular/core';
import { UserSearchService } from '../services/user-search.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent implements OnInit {
  user = this.userSearchService.user;
  searchValue = '';
  constructor(private readonly userSearchService: UserSearchService) {}

  ngOnInit(): void {
    this.userSearchService.getUser('octocat');
  }

  onSearch() {
    this.userSearchService.getUser(this.searchValue);
  }
}
