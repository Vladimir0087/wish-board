import { gql } from '@apollo/client';

const LOGOUT_USER = gql`
  mutation logout {
    logout
  }
`;

export default LOGOUT_USER;
