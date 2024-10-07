import { useState } from "react";
import { Form, Input, Button } from "antd";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [form] = Form.useForm(); // Hook-ul pentru referința formularului

  const onFinish = (values) => {
    setFormData(values);
    form.resetFields(); // Resetarea câmpurilor după trimitere
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        form={form} // Atașezi referința formularului
        className="login_form"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Имя"
          name="Name"
          rules={[
            {
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Описание"
          name="Description"
          rules={[
            {
              message: "Please input your description!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
      <div className="form_data_display">
        <h3>Введенные данные:</h3>
        <p>
          <strong>Имя:</strong> {formData.Name}
        </p>
        <p className="text">
          <strong>Описание:</strong> {formData.Description}
        </p>
      </div>
    </>
  );
}

export default App;
