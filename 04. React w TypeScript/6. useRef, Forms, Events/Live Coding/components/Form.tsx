'use client';

import { useRef, type FormEvent, useState } from 'react';

type formData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<formData>({
    name: '',
    email: '',
    password: '',
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  /**
   * 提交表单时的处理函数
   * @param event 表单提交事件
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // 阻止默认的表单提交行为
    event.preventDefault();

    // 获取表单字段的值
    const nameVal = name.current!.value;
    const emailVal = email.current!.value;
    const passwordVal = password.current!.value;

    // 更新提交的数据状态
    setSubmittedData({
      name: nameVal,
      email: emailVal,
      password: passwordVal,
    });

    // 日志输出表单数据
    console.log(nameVal);
    console.log(emailVal);
    console.log(passwordVal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" ref={name} />
      <input type="email" placeholder="Enter your email" ref={email} />
      <input type="password" placeholder="Enter your password" ref={password} />
      <button type="submit">Submit</button>

      <section>
        <h1>Name: {submittedData.name}</h1>
        <h1>Email: {submittedData.email}</h1>
        <h1>Password: {submittedData.password}</h1>
      </section>
    </form>
  );
};

export default Form;
