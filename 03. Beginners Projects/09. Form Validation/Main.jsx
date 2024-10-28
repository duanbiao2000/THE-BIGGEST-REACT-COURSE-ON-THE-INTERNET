import { useState } from "react";

function Main() {
// 定义状态变量以存储用户输入的信息
const [username, setusername] = useState(""); // 用户名
const [email, setEmail] = useState(""); // 邮箱
const [password, setPassword] = useState(""); // 密码
const [confirmPassword, setConfirmPassword] = useState(""); // 确认密码

// 定义状态变量以存储错误信息
const [errorUserName, setErrorUserName] = useState(""); // 用户名错误信息
const [errorEmail, setErrorEmail] = useState(""); // 邮箱错误信息
const [errorPassword, setErrorPassword] = useState(""); // 密码错误信息
const [errorConfrimPassword, setErrorConfirmPassword] = useState(""); // 确认密码错误信息

// 定义状态变量以存储用户输入框的样式颜色
const [userColor, setUserColor] = useState(""); // 用户名输入框颜色
const [emailColor, setEmailColor] = useState(""); // 邮箱输入框颜色
const [passwordColor, setPasswordColor] = useState(""); // 密码输入框颜色
const [confirmPasswordColor, setConfirmPasswordColor] = useState(""); // 确认密码输入框颜色

/**
 * 验证表单输入的合法性
 * @param {Event} e 表单提交事件
 */
function validate(e) {
  // 阻止表单的默认提交行为
  e.preventDefault();

  // 检查用户名长度
  if (username.length > 8) {
    // 用户名长度合法，清空错误提示，设置用户名颜色为绿色
    setErrorUserName("");
    setUserColor("green");
  } else {
    // 用户名长度不合法，设置错误提示和用户名颜色为红色
    setErrorUserName("Username must be 8 letters long.");
    setUserColor("red");
  }

  // 检查邮箱格式
  if (email.includes("@gmail")) {
    // 邮箱格式合法，清空错误提示，设置邮箱颜色为绿色
    setErrorEmail("");
    setEmailColor("green");
  } else {
    // 邮箱格式不合法，设置错误提示和邮箱颜色为红色
    setEmailColor("red");
    setErrorEmail("Email should have @gmail");
  }

  // 检查密码长度
  if (password.length > 8) {
    // 密码长度合法，清空错误提示，设置密码颜色为绿色
    setErrorPassword("");
    setPasswordColor("green");
  } else {
    // 密码长度不合法，设置错误提示和密码颜色为红色
    setErrorPassword("Password should be 8 letters long ");
    setPasswordColor("red");
  }

  // 检查确认密码与密码是否一致
  if (password != "" && password == confirmPassword) {
    // 密码一致，清空错误提示，设置确认密码颜色为绿色
    setErrorConfirmPassword("");
    setConfirmPasswordColor("green");
  } else {
    // 密码不一致，设置错误提示和确认密码颜色为红色
    setErrorConfirmPassword("Passwords didn't matched.");
    setConfirmPasswordColor("red");
  }
}

  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />

          <p className="error">{errorUserName}</p>

          <input
            type="text"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>

          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfrimPassword}</p>

          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Main;
