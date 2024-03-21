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
              </tr>
            </thead>
            <tbody>
              {panel.length > 0 && (
                <>
                  {panel.map((panel) => (
                    <tr>
                      <th className="text-start"> Tovar {panel.id}</th>
                      <th>{panel.rating}</th>
                      <th>{panel.brand}</th>
                      <th>{panel.price}</th>
                      <th>{panel.stock}</th>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
