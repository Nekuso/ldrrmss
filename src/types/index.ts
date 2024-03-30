export type EmployeesDisplay = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  img_url: string;
  address: string;
  contact_number: number;
  status: string;
  dob: string;
  roles: {
    id: number;
    role: string;
  };
};
