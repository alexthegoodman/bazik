import { gql } from "graphql-request";

export const authenticateQuery = gql`
  query AuthenticateUser {
    authenticate
  }
`;

export const registerMutation = gql`
  mutation RegisterUser {
    registerUser
  }
`;

export const currentUserQuery = gql`
  query CurrentUser {
    currentUser {
      email
      role
      plan
      updatedAt
      createdAt
    }
  }
`;

export const confirmFreemiumMutation = gql`
  mutation ConfirmFreemium {
    confirmFreemium {
      email
    }
  }
`;
