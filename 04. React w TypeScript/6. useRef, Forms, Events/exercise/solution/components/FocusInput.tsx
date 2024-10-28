import { useRef } from "react";

/**
 * FocusInput 组件用于演示如何通过 useRef 钩子聚焦输入框
 * 
 * 该组件包含一个输入框和一个按钮，当点击按钮时，输入框将获得焦点
 * 这是通过 useRef 钩子创建一个对输入框元素的引用实现的
 */
const FocusInput = () => {
  // 创建一个对 HTML 输入框元素的引用
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * handleFocus 函数用于将焦点设置到输入框上
   * 
   * 当按钮被点击时，此函数会被调用，它通过 inputRef.current?.focus() 方法
   * 尝试将焦点设置到输入框元素上如果 inputRef.current 为 null，则不会执行 focus 方法
   */
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  // 返回包含输入框和按钮的 div 元素
  // 输入框通过 ref 属性与 inputRef 钩子关联，按钮的 onClick 事件绑定到 handleFocus 函数
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus me"
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
