// 导入React的useState钩子，用于管理组件的状态
import { useState } from "react";

// 导入导航组件，用于显示页面的导航栏
import Navigation from "./Navigation/Nav";
// 导入产品列表组件，用于展示可购买的商品
import Products from "./Products/Products";
// 导入产品数据，用于在应用中展示和操作
import products from "./db/data";
// 导入推荐组件，用于向用户展示推荐商品
import Recommended from "./Recommended/Recommended";
// 导入侧边栏组件，用于显示页面的侧边栏
import Sidebar from "./Sidebar/Sidebar";
// 导入卡片组件，用于在页面中展示卡片样式的信息
import Card from "./components/Card";
// 导入全局样式文件，用于统一页面样式
import "./index.css";

function App() {
  // 定义一个状态变量，用于存储选中的类别
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  // 定义一个状态变量，用于存储输入框的值
  const [query, setQuery] = useState("");

  // 定义一个输入框值改变的处理函数
  const handleInputChange = (event) => {
    // 将输入框的值设置为事件目标值
    setQuery(event.target.value);
  };

  // 根据输入框的值过滤产品
  // 使用filter方法过滤出符合条件的商品
  const filteredItems = products.filter(
    // 遍历商品数组
   (product) => {
      // 将商品标题转换为小写，并判断是否包含查询字符串
      return product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    }
  );

  // ----------- Radio Filtering -----------
  // 定义一个单选按钮值改变的处理函数
  const handleChange = (event) => {
    // 将选中的类别设置为事件目标值
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  // 定义一个点击事件处理函数
  const handleClick = (event) => {
    // 将选中的类别设置为事件目标值
    setSelectedCategory(event.target.value);
  };

  // 定义一个过滤数据的函数
  function filteredData(products, selected, query) {
    // 定义一个变量，用于存储过滤后的产品
    let filteredProducts = products;

    // 根据输入框的值过滤产品
    if (query) {
      filteredProducts = filteredItems;
    }

    // 根据选中的类别过滤产品
    // 如果selected存在，则对filteredProducts进行过滤
    if (selected) {
      // 过滤出category、color、company、newPrice、title中与selected相等的元素
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    // 返回过滤后的产品
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  // 调用过滤数据的函数，获取过滤后的产品
  const result = filteredData(products, selectedCategory, query);

  // 返回组件
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
