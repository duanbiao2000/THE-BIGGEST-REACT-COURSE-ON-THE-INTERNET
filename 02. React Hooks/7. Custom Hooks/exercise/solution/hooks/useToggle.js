import { useState } from "react";

/**
 * 使用useToggle自定义钩子来管理布尔值的状态切换
 * 这个钩子主要用于在React组件中创建一个可切换的布尔值状态
 * 
 * @param {boolean} initialValue - 状态的初始值，默认为false
 * @returns {array} 返回一个数组，包含当前状态值和切换状态的函数
 */
const useToggle = (initialValue = false) => {
  // 初始化状态值，使用传入的initialValue或默认为false
  const [value, setValue] = useState(initialValue);
  
  /**
   * 定义toggle函数，用于切换布尔值状态
   * 通过更新状态函数setValue来设置新的状态值，新值为当前状态值的相反值
   */
  const toggle = () => setValue((prevValue) => !prevValue);
  
  // 返回当前状态值和toggle函数，以便在组件中使用
  return [value, toggle];
};

export default useToggle;
