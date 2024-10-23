export class UserEntity {
  id: number;
  name: string;
  email: string;
  password: string;

  constructor(data: { id?: number, name?: string, email?: string, password?: string }) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.email = data.email || '';
    this.password = data.password || '';
  }
}
