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
            {/* <tbody>
              <tr>
                <td className="fw-bold text-start">Товар 0 </td>
                <td>21341472702202201</td>
                <td>XIAOMI</td>
                <td>10$</td>
                <td>8$</td>
              </tr>
            </tbody> */}
            <tbody>
              {panel.length > 0 && (
                <div>
                  {panel.map((panel) => (
                    <div>
                      <td>Товар : {panel.id}</td>
                      <td>{panel.brand}</td>
                      <td>{panel.price}</td>
                      <td>{panel.discountPercentage}</td>
                    </div>
                  ))}
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
