// 导入Button组件，用于创建推荐商品分类按钮
import Button from "../components/Button";
// 导入Recommended样式文件，用于定义推荐商品页面的样式
import "./Recommended.css";

/**
 * Recommended组件函数，用于渲染推荐商品部分
 * @param {Function} handleClick 点击按钮时的事件处理函数，通过props传递
 * @returns {JSX.Element} 返回推荐商品的页面元素，包括标题和分类按钮
 */
const Recommended = ({ handleClick }) => {
  // 返回推荐商品的页面结构
  return (
    <Fragment>
      <div>
        // 设置推荐商品的标题
        <h2 className="recommended-title">Recommended</h2>
        // 创建一个灵活的容器，用于布局分类按钮
        <div className="recommended-flex">
          // 渲染多个Button组件，每个按钮代表一个商品分类
          // 按钮点击时调用传入的handleClick函数，传递不同的品牌值
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </Fragment>
  );
};

// 导出Recommended组件，供其他组件引用
export default Recommended;

