import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox, } from 'antd';
import 'antd/dist/antd.css';
import router from '../../router';

import { createHashHistory, createBrowserHistory } from 'history';
const history = createBrowserHistory();
// import { Router, Route, } from 'react-router';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginForm = () => {
  const onFinish = (values:any) => {
    console.log('Success:', values);
    const { username, password } = values;
    if (username === "admin" && password === "123456") {
      // Router.push('/home');
      console.log(1233);
      
      history.push('/home')
    }
  };

  // const onFinishFailed = errorInfo => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm