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
  image_url: string;
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
  image_url: string;
  plate_number: string;
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
  stock_quantity: number;
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
  use_foodsupplies: {}[];
  use_equipments: {}[];
  use_vehicles: {}[];
  total_price: number;
  payment_method: string;
  status: string;
  created_at: string;
};
export type allPurchaseRequestsVehicleDisplay = {
  id: string | any;
  requester_first_name: string | any;
  requester_last_name: string | any;
  requester_contact_number: string | any;
  requester_email: string | any;
  subtotal: number | any;
  total_price: number | any;
  amount_paid: number | any;
  status: string | any;
  discount: number | any;
  payment_method: string | any;
  created_at: string | any;
  redeemed: boolean | any;
  redeem_code: string | any;
  remarks: string | any;
  employee:
    | {
        id: string | any;
        email: string | any;
        roles: { role: string } | any;
        image_url: string | any;
        last_name: string | any;
        first_name: string | any;
        contact_number: number | any;
      }
    | any;
  supervisor:
    | {
        id: string | any;
        email: string | any;
        roles: { role: string } | any;
        image_url: string | any;
        last_name: string | any;
        first_name: string | any;
        contact_number: number | any;
        created_at: string | any;
      }
    | any;
  inventory:
    | {
        id: number | any;
        branches:
          | {
              id: number | any;
              created_at: string | any;
              branch_name: string | any;
              branch_manager: null | any;
              contact_number: string | any;
              branch_location: string | any;
            }
          | any;
      }
    | any;
  use_foodsupplies:
    | {
        id: number | any;
        name: string | any;
        price: number | any;
        barcode: string | any;
        order_id: null | any;
        quantity: number | any;
        uom_name: string | any;
        image_url: string | any;
        created_at: string | any;
        foodsupply_id: number | any;
        description: string | any;
        inventory_id: number | any;
        order_vehicle_id: string | any;
      }[]
    | any;
  use_equipments:
    | {
        id: number | any;
        name: string | any;
        brand: string | any;
        price: number | any;
        barcode: string | any;
        equipment_id: number | any;
        request_id: null | any;
        quantity: number | any;
        image_url: string | any;
        created_at: string | any;
        description: string | any;
        inventory_id: number | any;
        order_vehicle_id: string | any;
      }[]
    | any;
  use_vehicles:
    | {
        id: number | any;
        name: string | any;
        price: number | any;
        image_url: string | any;
        created_at: string | any;
        service_id: number | any;
        description: string | any;
        inventory_id: number | any;
        order_vehicle_id: string | any;
      }[]
    | any;
  mobile_user:
    | {
        id: string | any;
        dob: null | any;
        email: string | any;
        gender: string | any;
        points: number | any;
        address: string | any;
        password: string | any;
        image_url: string | any;
        last_name: string | any;
        created_at: string | any;
        first_name: string | any;
        contact_number: string | any;
      }
    | any;
  mechanic_entries:
    | {
        id: number | any;
        mechanic:
          | {
              id: string | any;
              email: string | any;
              roles: { role: string } | any;
              image_url: string | any;
              last_name: string | any;
              first_name: string | any;
              contact_number: number | any;
            }
          | any;
        created_at: string | any;
        employee_id: string | any;
        request_vehicle_id: string | any;
      }[]
    | any;
  vehicle_entries:
    | {
        id: number | any;
        type: string | any;
        color: string | any;
        car_brand: string | any;
        car_model: string | any;
        created_at: string | any;
        odo_reading: number | any;
        plate_number: string | any;
        engine_number: string | any;
        chassis_number: string | any;
        request_vehicle_id: string | any;
      }[]
    | any;
  progress_entries:
    | {
        id: number | any;
        created_at: string | any;
        progress_name: string | any;
        description: string | any;
        order_service_id: string | any;
      }[]
    | any;
};
