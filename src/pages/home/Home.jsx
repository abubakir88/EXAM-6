import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import "./home.scss";
import "bootstrap/dist/css/bootstrap.css";
const Home = () => {
  const [panel, setPanel] = useState([]);

  useEffect(() => {
    const fetchPanel = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const Data = await res.json();
        setPanel(Data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPanel();
  }, []);
  return (
    <>
      <Sidebar />
      <Header />
      <div className="for_bg">
        <div className="content">
          <div className="d-flex justify-content-between bg-white p-4  ">
            <h3>Все товары ({panel.length})</h3>
            <span></span>
            <input
              className="form-control w-25"
              required
              type="text"
              placeholder="Поиск"
            />
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-body-tertiary text-start" scope="col">
                  Наименование
                </th>
                <th className="text-body-tertiary" scope="col">
                  Артикул
                </th>
                <th className="text-body-tertiary" scope="col">
                  Бренд
                </th>
                <th className="text-body-tertiary" scope="col">
                  Цена
                </th>
                <th className="text-body-tertiary" scope="col">
                  Цена со скидкой
                </th>
                <th className="text-body-tertiary" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {panel.length > 0 && (
                <>
                  {panel.map((panel) => (
                    <tr>
                      <th className="text-start"> Товар {panel.id}</th>
                      <th className="fw-normal">{panel.rating}</th>
                      <th className="fw-normal">{panel.brand}</th>
                      <th className="fw-normal">{panel.price}</th>
                      <th className="fw-normal">{panel.stock}</th>
                      <th className="d-flex gap-1">
                        <button className="btn btn-primary">edit</button>
                        <button className="btn btn-danger">delete</button>
                      </th>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
        <button className="btn btn-success text-start">+ Новый товар</button>
      </div>
    </>
  );
};

export default Home;
