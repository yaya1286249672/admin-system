import React, { Component } from "react";
import "./index.scss";
import LoginForm from './LoginForm'
export default function Login() {
  return (
    <div className="wrap-login">
      <div className="login-view">
            <h2 className="title">登陆</h2>
            <LoginForm/>
      </div>
    </div>
  );
}
