import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Col} controlId="validationCustom01">
        <Form.Label>Артикул</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="Артикул"
          defaultValue="5.0"
        />
        <Form.Control.Feedback>Juda yaxshi</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} controlId="validationCustom02">
        <Form.Label>Бренд</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Бренд"
          defaultValue="Artel"
        />
        <Form.Control.Feedback>Juda yaxshi</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} controlId="validationCustom03">
        <Form.Label>Цена</Form.Label>
        <Form.Control type="number" placeholder="Цена" required />
        <Form.Control.Feedback type="invalid">
          Iltimos narxini kiriting
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} controlId="validationCustom04">
        <Form.Label>Цена со скидкой</Form.Label>
        <Form.Control type="text" placeholder="Цена со скидкой" required />
        <Form.Control.Feedback type="invalid">
          Iltimos chegirmadagi narxini kiriting
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default FormExample;
