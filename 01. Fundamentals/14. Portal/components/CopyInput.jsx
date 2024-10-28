import { useState } from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  /**
   * 处理复制操作的函数
   * 
   * 此函数旨在将输入框中的文本复制到剪贴板，并在界面上短暂显示复制成功的反馈
   * 它首先尝试将 inputValue 变量中的文本写入剪贴板如果成功，设置 copied 状态为 true，
   * 表示已复制然后，使用 setTimeout 函数在2000毫秒（2秒）后将 copied 状态重置为 false，
   * 以隐藏复制成功的反馈
   */
  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    // 设置一个相对定位的div，用于布局调整
    // 理由：相对定位允许我们使用marginTop属性有效地将内容向下移动，避免与页面其他元素重叠
    <div style={{ position: "relative", marginTop: "6rem" }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border-2 "
      />
      <button onClick={handleCopy}>Copy</button>
      <PopupContent copied={copied} />
    </div>
  );
};

export default CopyInput;
