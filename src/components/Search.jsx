import { useState, useEffect } from "react";
import axios from "axios";
import { Form, ListGroup } from "react-bootstrap";

function SearchComponent() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get("http://localhost:3000/products/");
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <div>
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
        {items
          .filter((item) =>
            item.brand.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item) => (
            <ListGroup.Item key={item.id}>{item.brand}</ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

export default SearchComponent;
