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
