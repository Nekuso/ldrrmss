export type Employee = {
  id: number;
  email: string;
  name: string;
  img_url: string;
  contact_number: string;
  branch_name: string;
  role: string;
  status: string;
  dob: string;
};

export type roles = {
  id: number;
  role: string;
};
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

export type allInventoryDisplay = {
  id: number;
  food_supplies: {
    id: number;
    name: string;
    description: string;
    image_url: string;
    quantity: number;
    status: string;
    created_at: string;
  }[];
};

export type allEquipmentsDisplay = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  stock_quantity: number;
  status: string;
  created_at: string;
};

export type allFood_suppliesDisplay = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  price: number;
  duration: number;
  status: string;
  created_at: string;
};

export type allVehiclesDisplay = {
  [x: string]: any;
  id: number;
  name: string;
  description: string;
  image_url: string;
  status: string;
  created_at: string;
};

export type allPurchaseRequestsDisplay = {
  id: string;
  requester_first_name: string;
  requester_last_name: string;
  requester_contact_number: string;
  requester_email: string;
  inventory: {
    id: number;
  };
  employees: {
    id: number;
    first_name: string;
    last_name: string;
    image_url: string;
    contact_number: string;
    email: string;
    roles: { role: string };
  };
  calamity_types: {
    id: number;
    name: string;
    description: string;
  };
  purchase_food_supplies: {}[];
  purchase_equipments: {}[];
  purchase_vehicles: {}[];
  total_price: number;
  payment_method: string;
  status: string;
  created_at: string;
};
