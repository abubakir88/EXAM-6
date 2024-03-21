import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { ListGroup } from "react-bootstrap";
import "./home.scss";
import axios from "axios";

///// MODAL /////
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
/////

const Home = () => {
  /// MODAL //////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  ///

  const [panel, setPanel] = useState([]);

  // DELETE start //////////////////////////////////

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3000/products");
    setPanel(response.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`);
    fetchItems();
  };
  // DELETE finish //////////////////////////////////

  // SEARCH start //////////////////////////////////
  const [searchTerm, setSearchTerm] = useState("");

  // SEARCH finish //////////////////////////////////

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
        <div className="content mt-4">
          <div className="d-flex justify-content-between bg-white p-4  ">
            <h3>Все товары ({panel.length})</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Qidiruv..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Form.Group>
            </Form>
            <ListGroup>
              {panel
                .filter((panel) =>
                  panel.brand.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((panel) => (
                  <ListGroup.Item key={panel.id}>{panel.brand}</ListGroup.Item>
                ))}
            </ListGroup>
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
                    <tr key={panel.id}>
                      <th className="text-start"> Товар {panel.id}</th>
                      <th className="fw-normal">{panel.rating}</th>
                      <th className="fw-normal">{panel.brand}</th>
                      <th className="fw-normal">{panel.price}</th>
                      <th className="fw-normal">{panel.stock}</th>
                      <th className="d-flex gap-1">
                        <button className="btn btn-primary">Edit</button>
                        <Button
                          variant="danger "
                          onClick={() => deleteItem(panel.id)}
                        >
                          Delete
                        </Button>
                      </th>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
        <Button
          variant="primary"
          onClick={handleShow}
          className="btn btn-success text-start"
        >
          + Новый товар
        </Button>
        <Modal backdrop="static" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Артикул</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Артикул"
                  autoFocus
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Бренд</Form.Label>
                <Form.Control
                  type="brand"
                  placeholder="Artel milliy brand"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Цена</Form.Label>
                <Form.Control
                  as="input"
                  type="number"
                  rows={3}
                  placeholder="Цена"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Цена со скидкой</Form.Label>
                <Form.Control
                  as="input"
                  type="number"
                  rows={3}
                  placeholder="Цена со скидкой"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Home;
