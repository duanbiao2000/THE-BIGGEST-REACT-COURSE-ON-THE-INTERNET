import { useState } from "react";

/**
 * 自定义钩子useInput用于管理表单元素的值
 * 它接受一个初始值作为参数，默认为空字符串
 * 该钩子返回一个对象，包含当前值和一个处理值变化的函数
 * 
 * @param {string} initialValue - 输入元素的初始值，默认为空字符串
 * @returns {object} 包含当前值和变更处理函数的对象
 */
const useInput = (initialValue = "") => {
  // 使用useState钩子来创建和管理输入元素的值
  // 初始值由useInput的initialValue参数提供
  const [value, setValue] = useState(initialValue);

  /**
   * 处理输入元素值变化的函数
   * 它使用事件对象来获取新的输入值，并更新状态
   * 
   * @param {Event} event - 触发的事件对象，用于获取新的输入值
   */
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // 返回一个对象，包含当前值和onChange事件处理函数
  // 这使得useInput可以方便地与表单元素的onChange事件绑定
  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
