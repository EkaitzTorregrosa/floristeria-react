import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export function Details({ location }: any) {
  const FLOWER = location.state.flor;
  return (
    <div className="container">
      <div className="card">
        <div className="card-header display-4">{FLOWER["name"]}</div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <img
                style={{ width: "300px", height: "300px" }}
                src={FLOWER["imgUrl"]}
                className="card-img-top rounded mx-auto mt-4"
                alt="..."
              />
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header display-4">Descripción</div>
                <ul className="list-group list-group-flush text-left text-capitalize">
                  <li className="list-group-item">
                    <span className="font-weight-bold">Nombre:</span>{" "}
                    {FLOWER["name"]}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold">Nombre científico:</span>{" "}
                    {FLOWER["binomialName"]}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold">Precio:</span>{" "}
                    {FLOWER["price"]}€
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold">Riegos por semana:</span>{" "}
                    {FLOWER["wateringsPerWeek"]}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold">Fertilizante:</span>{" "}
                    {FLOWER["fertilizerType"]}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold">Altura:</span>{" "}
                    {FLOWER["heightInCm"]}cm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link to="/" className="btn btn-primary">
          Volver
        </Link>
      </div>
    </div>
  );
}
