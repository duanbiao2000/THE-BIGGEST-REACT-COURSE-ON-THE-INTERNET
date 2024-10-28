import { createPortal } from "react-dom";

/**
 * 创建一个显示复制内容的弹出框
 * 该组件用于在用户复制某些内容后显示一个提示信息
 * 
 * @param {Object} props - 组件的属性对象
 * @param {boolean} props.copied - 是否已复制内容，用于控制提示信息的显示
 * @returns {ReactPortal} 使用 createPortal 方法渲染到指定的 DOM 节点上
 */
const PopupContent = ({ copied }) => {
  // 使用 createPortal 方法将组件渲染到指定的 DOM 节点上
  // 这里选择渲染到具有 id "portal-popup" 的元素上
  // 当 copied 为 true 时，显示一个提示信息 "Copied to clipboard"
  // 提示信息的位置通过内联样式设置为绝对定位，位于父容器的底部上方 3 像素处
  return createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3" }}>
          Copied to clipboard
        </div>
      )}
    </section>,
    document.querySelector("#portal-popup")
  );
};
export default PopupContent;
