import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export function FloristeriaForm() {
  const URL: string = "https://dulces-petalos.herokuapp.com/api/product";
  const [flowers, setFlowers] = useState<any[]>([]);
  const [searchedFlowers, setSearchedFlowers] = useState<any[]>([]);
  const [hasValue, setHasValue] = useState(false);
  const [msgError, setMsgError] = useState("");

  useEffect(() => {
    if (!hasValue) {
      getGiHubUserWithAxios();
    }
  }, [hasValue]);

  const getGiHubUserWithAxios = async () => {
    const response: any = await axios.get(URL);
    setFlowers(response.data);
  };

  function searchFlowers(event: any) {
    let searchingFlowers: any[] = [];

    flowers.forEach((flower) => {
      if (
        flowerContains(flower, "name", event) ||
        flowerContains(flower, "binomialName", event)
      ) {
        searchingFlowers.push(flower);
        setHasValue(true);
        setMsgError("");
      }
      setSearchedFlowers(searchingFlowers);
    });
    if (searchingFlowers.length === 0)
      setMsgError("No se han encontrado flores");
  }

  function flowerContains(flower: any, property: string, event: any) {
    return flower[property]
      .toString()
      .toLowerCase()
      .includes(event.target.value);
  }

  function printFlowers(flowersToPrint: any[]) {
    return flowersToPrint.map((flower) => {
      return (
        <div className="col-sm-3">
          <div className="card mt-2">
            <img
              style={{ width: "250px", height: "250px" }}
              src={flower["imgUrl"]}
              className="card-img-top rounded mx-auto"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{flower["name"]}</h5>
              <p className="card-text">{flower["binomialName"]}</p>
              <p className="card-text font-weight-light">{flower["price"]}€</p>

              <Link
                to={{ pathname: "/details", state: { flor: flower } }}
                className="btn btn-primary"
              >
                Detalles
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="input-group col">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar..."
            onChange={(event) => {
              searchFlowers(event);
            }}
          />
        </div>
      </div>
      <p>{msgError}</p>
      <br />
      <div className="row">
        {!hasValue ? printFlowers(flowers) : printFlowers(searchedFlowers)}
      </div>
    </div>
  );
}
