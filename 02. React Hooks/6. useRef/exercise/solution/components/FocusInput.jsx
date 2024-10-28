import { useRef } from "react";

/**
 * FocusInput组件
 * 该组件用于演示如何使用React useRef钩子来聚焦输入框
 * 它创建了一个按钮，当点击该按钮时，输入框将获得焦点
 */
const FocusInput = () => {
  // 使用useRef钩子创建一个引用，用于后续直接访问输入框元素
  const inputRef = useRef(null);

  /**
   * focusInput函数
   * 当用户点击按钮时调用此函数，它将焦点设置到输入框
   */
  const focusInput = () => {
    // 检查inputRef.current是否存在，以确保DOM元素已正确渲染
    if (inputRef.current) {
      // 调用current的focus方法，将焦点设置到输入框
      inputRef.current.focus();
    }
  };

  // 渲染组件UI，包括输入框和按钮
  // 输入框通过ref属性绑定到inputRef，按钮的onClick事件绑定到focusInput函数
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
