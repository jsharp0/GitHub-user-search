import { Component } from '@angular/core';
import { UserSearchService } from '../services/user-search.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  user = this.userSearchService.user;

  constructor(private readonly userSearchService: UserSearchService) {}
}
