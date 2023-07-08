// GraphQL Schema

// Queries

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
