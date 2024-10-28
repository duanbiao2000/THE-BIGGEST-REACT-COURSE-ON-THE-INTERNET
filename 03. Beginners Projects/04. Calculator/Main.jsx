import { useState } from "react";
import "./index.css";

/**
 * Main函数是计算器应用的主要组件
 * 它管理着用户输入的算式以及计算结果显示
 */
function Main() {
  // 使用React的useState钩子来管理输入框的值
  const [inputvalue, setinputvalue] = useState("");

  /**
   * display函数用于在输入框中显示用户点击的数字或运算符
   * @param {string} value - 用户点击的数字或运算符
   */
  function display(value) {
    setinputvalue(inputvalue + value);
  }

  /**
   * calculate函数用于计算输入框中的算式并显示结果
   * 它使用eval函数来执行算术计算，注意：在实际应用中直接使用eval可能存在安全风险
   */
  function calculate() {
    var answers = eval(inputvalue);
    setinputvalue(answers);
  }

  /**
   * clear函数用于清空输入框
   * 它将输入框的值设置为空字符串
   */
  function clear() {
    setinputvalue("");
  }

  // 渲染计算器界面
  return (
    <form class="calculator" name="calc">
      <input type="text" class="value" value={inputvalue} />
      <span class="num clear" onClick={() => clear()}>
        c
      </span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={() => display("+")}>
        +
      </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span class="num equal" onClick={() => calculate()}>
        =
      </span>
    </form>
  );
}

export default Main;
