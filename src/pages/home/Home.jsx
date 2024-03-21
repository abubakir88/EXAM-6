import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const Data = await res.json();
        setProducts(Data);
        console.log(Data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Sidebar />
      {/* <Header />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Наименование</th>
            <th scope="col">Артикул</th>
            <th scope="col">Бренд</th>
            <th scope="col">Цена</th>
            <th scope="col">скидкой</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table> */}
      <div className="table">
        {products.length > 0 && (
          <>
            {products.map((product) => (
              <div className="produ">
                <td className="td1">Товар : {product.id}</td>
                <td className="td2">{product.brand}</td>
                <td className="td3">{product.price}</td>
                <td className="td4">{product.discountPercentage}</td>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
