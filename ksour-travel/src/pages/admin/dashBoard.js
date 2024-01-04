import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import "./admincss/dashboard.css"
import AdminLayout from "./adminLayout/adminLayout";
const Dashboard = () => {
  const [formulaires, setFormulaires] = useState([]);
  const [selectedFormulaire, setSelectedFormulaire] = useState(null);

  useEffect(() => {
    fetchFormulaires();
  }, []);

  const fetchFormulaires = async () => {
    try {
      const response = await axios.get("http://localhost:3001/formulaire");
      setFormulaires(response.data);
    } catch (error) {
      console.error("Error fetching formulaires:", error);
    }
  };

  const handleSelectFormulaire = (formulaire) => {
    setSelectedFormulaire(formulaire);
  };
  
  const updateIsDone = async (id, isDone) => {
    try {
      await axios.put(`http://localhost:3001/formulaire/${id}`, { isDone });
      fetchFormulaires(); // Refresh formulaire data after updating
    } catch (error) {
      console.error('Error updating isDone:', error);
    }
  };

  return (
    <AdminLayout>
    <div className="container mt-5">
      <h1>Tableau de bord</h1>
      <div>
        <h2>Formulaires soumis</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom complet</th>
              <th>Email</th>
              <th>Type de demande</th>
              <th>Téléphone</th>
              <th>Est Fait</th>
            </tr>
          </thead>
          <tbody>
            {formulaires.map((formulaire, index) => (
              <tr
                key={formulaire._id}
                onClick={() => handleSelectFormulaire(formulaire)}
                className={formulaire.isDone ? "done-row" : "undone-row"}
              >
                <td>{index + 1}</td>
                <td>{formulaire.fullName}</td>
                <td>{formulaire.email}</td>
                <td>{formulaire.inquiryType}</td>
                <td>{formulaire.phone}</td>
                <td>
                  {formulaire.isDone ? 'Oui' : 'Non'}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h2>Demande du formulaire</h2>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Demande du formulaire sélectionné</h5>
            {selectedFormulaire && (
              <>
                <p className="card-text">{selectedFormulaire.request}</p>
                <button
                  className={`btn btn-primary ${selectedFormulaire.isDone ? "undone-btn" : "done-btn"}`}
                  onClick={() => {
                    updateIsDone(selectedFormulaire._id, !selectedFormulaire.isDone);
                  }}
                >
                  Marquer comme {selectedFormulaire.isDone ? "Non Fait" : "Fait"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
};

export default Dashboard;

