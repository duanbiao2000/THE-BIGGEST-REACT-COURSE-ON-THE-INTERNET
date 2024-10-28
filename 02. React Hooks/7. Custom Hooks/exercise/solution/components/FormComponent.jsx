import useInput from "../hooks/useInput";

/**
 * FormComponent组件用于渲染一个包含姓名和邮箱输入框的表单
 * 该组件使用了自定义的useInput钩子来管理表单输入的状态
 */
const FormComponent = () => {
  // 使用自定义钩子useInput初始化姓名输入框的状态
  const name = useInput("");
  // 使用自定义钩子useInput初始化邮箱输入框的状态
  const email = useInput("");

  /**
   * handleSubmit函数用于处理表单提交事件
   * 它阻止了默认的表单提交行为，并显示一个包含输入姓名和邮箱的警告框
   * @param {Object} event - 表单提交事件对象
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name.value}, Email: ${email.value}`);
  };

  // 渲染表单组件，包含姓名和邮箱输入框以及提交按钮
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" {...name} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" {...email} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
