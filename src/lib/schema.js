// GraphQL Schema

// Queries

export const ALL_PRODUCTION_RECORDS = {
	query: `query get_all_production_records {
    get_all_production_records {
      _id
      name
      morning_production
      afternoon_production
      evening_production
      production_date
      created_on
      updated_on
    }
  }`
};

export const ALL_PAYMENT_RECORDS = {
	query: `query get_all_payment_records {
    get_all_payment_records {
      _id
      name
      amount
      payment_method
      quantity
      payment_date
      created_on
      updated_on
    }
  }`
};

export const ALL_CUSTOMER_RECORDS = {
	query: `query get_all_customer_records {
    get_all_customer_records {
      _id
      name
      priority
      phone
      trip
      package
      created_on
      updated_on
    }
  }`
};

export const ALL_EXPENSE_RECORDS = {
	query: `query get_all_expense_records {
    get_all_expense_records {
      _id
      item
      category
      amount
      date_of_action
      created_on
      updated_on
    }
  }`
};

// Mutations

export const CREATE_USER = {
	query: `mutation create_user($username: String!, $email: String!, $password: String!) {
    create_user(username: $username, email: $email, password: $password)
  }`
};

export const AUTHENTICATE_USER = {
	query: `mutation authenticate_user($username: String!, $password: String!) {
        authenticate_user(username: $username, password: $password)
      }`
};

export const REQUEST_RESET = {
	query: `mutation request_reset($email: String!) {
    request_reset(email: $email)
  }`
};

export const PASSWORD_RESET = {
	query: `mutation password_reset($email: String!, $new_password: String!) {
    password_reset(email: $email, new_password: $new_password)
  }`
};

export const CREATE_PRODUCTION_RECORD = {
	query: `mutation create_production_record($name: String!, $morning_production: String!, $afternoon_production: String!, $evening_production: String!, $production_date: String!) {
    create_production_record(
      name: $name
      morning_production: $morning_production
      afternoon_production: $afternoon_production
      evening_production: $evening_production
      production_date: $production_date
    )
  }`
};

export const UPDATE_PRODUCTION_RECORD = {
	query: `mutation update_production_record($id: ID!, $name: String!, $morning_production: String!, $afternoon_production: String!, $evening_production: String!, $production_date: String!) {
    update_production_record(
      id: $id
      name: $name
      morning_production: $morning_production
      afternoon_production: $afternoon_production
      evening_production: $evening_production
      production_date: $production_date
    )
  }`
};

export const DELETE_PRODUCTION_RECORD = {
	query: `mutation delete_production_record($id: ID!) {
    delete_production_record(id: $id)
  }`
};

export const CREATE_PAYMENT_RECORD = {
	query: `mutation create_payment_record($name: String!, $amount: String!, $payment_method: String!, $quantity: String!, $payment_date: String!) {
    create_payment_record(
      name: $name
      amount: $amount
      payment_method: $payment_method
      quantity: $quantity
      payment_date: $payment_date
    )
  }`
};

export const UPDATE_PAYMENT_RECORD = {
	query: `mutation update_payment_record($id: ID!, $name: String!, $amount: String!, $payment_method: String!, $quantity: String!, $payment_date: String!) {
    update_payment_record(
      id: $id
      name: $name
      amount: $amount
      payment_method: $payment_method
      quantity: $quantity
      payment_date: $payment_date
    )
  }`
};

export const DELETE_PAYMENT_RECORD = {
	query: `mutation delete_payment_record($id: ID!) {
    delete_payment_record(id: $id)
  }`
};

export const CREATE_CUSTOMER_RECORD = {
	query: `mutation create_customer_record($name: String!, $priority: String!, $phone: String!, $trip: String!, $package: String!) {
    create_customer_record(
      name: $name
      priority: $priority
      phone: $phone
      trip: $trip
      package: $package
    )
  }`
};

export const UPDATE_CUSTOMER_RECORD = {
	query: `mutation update_customer_record($id: ID!, $name: String!, $priority: String!, $phone: String!, $trip: String!, $package: String!) {
    update_customer_record(
      id: $id
      name: $name
      priority: $priority
      phone: $phone
      trip: $trip
      package: $package
    )
  }`
};

export const DELETE_CUSTOMER_RECORD = {
	query: `mutation delete_customer_record($id: ID!) {
    delete_customer_record(id: $id)
  }`
};

export const CREATE_EXPENSE_RECORD = {
	query: `mutation create_expense_record($item: String!, $category: String!, $amount: String!, $date_of_action: String!) {
    create_expense_record(
      item: $item
      category: $category
      amount: $amount
      date_of_action: $date_of_action
    )
  }`
};

export const UPDATE_EXPENSE_RECORD = {
	query: `mutation update_expense_record($id: ID!, $item: String!, $category: String!, $amount: String!, $date_of_action: String!) {
    update_expense_record(
      id: $id
      item: $item
      category: $category
      amount: $amount
      date_of_action: $date_of_action
    )
  }`
};

export const DELETE_EXPENSE_RECORD = {
	query: `mutation delete_expense_record($id: ID!) {
    delete_expense_record(id: $id)
  }`
};
