export interface UserDetail {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  country: string;
  state: string;
  city: string;
  shortBio: string;
  profilePicture: string;
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}