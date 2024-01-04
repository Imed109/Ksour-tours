import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../JS/usersSlice";
import { ListGroup, Alert } from "react-bootstrap";
import AdminLayout from "./adminLayout/adminLayout";

const Users = () => {
  const users = useSelector((state) => state.users.list);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);



  return (
    <AdminLayout>

    <div>
      <h2>Liste des Utilisateurs</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <ListGroup>
        {users.map((user, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <p>
                <strong>Nom:</strong> {user.fullName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Téléphone:</strong> {user.phone}
              </p>
            </div>
            
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
    </AdminLayout>

  );
};

export default Users;
