import { useState } from "react";
import "./index.css";

/**
 * Accordion组件用于渲染一个手风琴式卡片，该卡片包含标题和可展开/折叠的内容
 * @param {Object} props - 组件的props对象
 * @param {string} props.title - 卡片的标题
 * @param {string} props.content - 卡片的内容
 * 该组件内部使用了useState钩子来管理卡片的展开状态
 * 当用户点击卡片标题时，会切换isActive状态，从而展开或折叠内容
 */
const Accordion = ({ title, content }) => {
  // 初始化isActive状态为false，表示内容默认是折叠的
  const [isActive, setIsActive] = useState(false);

  // 返回一个手风琴卡片组件
  // 使用Math.random()生成唯一的key值，确保每个卡片的唯一性
  // 点击标题时，调用setIsActive来切换活动状态
  // 根据isActive状态决定是否显示内容，以及显示哪种图标
  return (
    <section className="accordion-card" key={Math.random()}>
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>

      // 根据isActive状态决定是否渲染内容
      <div className="content">
        {isActive && <p className="card-info">{content}</p>}
      </div>
    </section>
  );
};

export default Accordion;
