import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

/**
 * Main组件负责渲染海鲜类别菜品的列表
 * 它通过API获取数据，并将菜品信息以卡片形式展示出来
 */
function Main() {
  // 使用React的useState钩子来存储菜品列表数据
  const [items, setitems] = useState([]);

  // 使用React的useEffect钩子来进行API数据获取
  useEffect(() => {
    // 向主题数据库API发送GET请求，获取海鲜类菜品数据
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // 将获取到的菜品数据保存到组件状态中
        setitems(res.data.meals);
      })
      .catch((err) => {
        // 处理API请求错误
        console.log(err);
      });
  }, []);

  // 将菜品数据映射为React组件，每个菜品对应一个卡片组件
  const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  // 渲染菜品卡片列表
  return <div className="items-container">{itemslist}</div>;
}

export default Main;
