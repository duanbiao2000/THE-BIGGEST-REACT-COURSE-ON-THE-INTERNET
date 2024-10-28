// 导入必要的库和样式
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./index.css";

/**
 * 隐藏搜索栏组件
 * 
 * 该组件实现了一个可隐藏的搜索栏，当用户点击搜索图标时，会显示一个输入框；
 * 当用户点击组件的其他部分时，输入框会再次隐藏
 */
function HiddenSearchBar() {
  // 定义一个状态管理变量，用于控制搜索栏的显示与隐藏
  const [showInput, setShowInput] = useState(false);
  // 定义一个状态管理变量，用于改变组件的背景颜色
  const [bgColor, setBgColor] = useState("white");

  /**
   * 处理点击事件的函数
   * 
   * @param {MouseEvent} e 鼠标事件对象
   * 该函数根据点击的位置和情况，决定是显示搜索输入框还是隐藏它，并相应地改变背景颜色
   */
  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("#fff");
    }
  };

  // 渲染组件
  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
}

// 导出组件
export default HiddenSearchBar;