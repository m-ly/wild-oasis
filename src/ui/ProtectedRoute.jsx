import { Navigate, useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";

import Spinner from "../ui/Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, isFetching } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading && !isFetching) navigate("/login");
    },
    [isAuthenticated, isLoading, isFetching]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  return children;
}

export default ProtectedRoute;
