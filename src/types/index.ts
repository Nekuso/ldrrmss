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

export type equipments = {
  id: number;
  name: string;
  description: string;
  status: string;
  stock_quantity: number;
  image_url: string;
};

export type food_supply = {
  id: number;
  name: string;
  description: string;
  status: string;
  stock_quantity: number;
  image_url: string;
};

export type vehicles = {
  id: number;
  name: string;
  description: string;
  status: string;
  stock_quantity: number;
  image_url: string;
};

export type workers = {
  first_name: string;
  last_name: string;
  email: string;
  image_url: string;
  address: string;
  contact_number: number;
  gender: string;
  dob: string;
  status: string;
};

export type calamities = {
  id: number;
  calamity_type: string;
  description: string;
};