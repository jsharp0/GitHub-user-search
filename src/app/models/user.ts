export interface User {
  name?: string;
  login: string;
  avatar_url: string;
  created_at: Date;
  bio?: string;
  public_repos: number;
  followers: number;
  following: number;
  twitter_username?: string;
  location?: string;
  company?: string;
  blog?: string;
  error?: boolean;
}
