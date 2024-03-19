export interface User {
  name: string;
  token: string;
  permission: 'user' | 'admin'
}
