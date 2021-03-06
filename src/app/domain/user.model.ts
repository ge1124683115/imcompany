export interface User {
  id?: string;
  email: string;
  name?: string;
  password?: string;
  avatar?: string;
  projectIds?: string[];
  taskIds?: string[];
  dateOfBirth?: string;
}
