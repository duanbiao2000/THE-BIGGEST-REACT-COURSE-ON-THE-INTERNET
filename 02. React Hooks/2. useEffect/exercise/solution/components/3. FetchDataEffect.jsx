import { useState, useEffect } from "react";

/**
 * FetchDataEffect是一个用于获取数据并展示第一个帖子标题的组件
 * 它使用了React的钩子函数useEffect和useState来处理副作用和状态管理
 */
const FetchDataEffect = () => {
  // 初始化状态，用于存储帖子数据
  const [posts, setPosts] = useState([]);

  // 使用useEffect在组件挂载时执行异步操作
  useEffect(() => {
    // 定义一个异步函数fetchData来获取数据
    const fetchData = async () => {
      // 发起网络请求获取帖子数据
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // 将响应数据解析为JSON格式
      const data = await response.json();
      // 更新状态，存储获取到的帖子数据
      setPosts(data);
    };

    // 调用fetchData函数来执行数据获取操作
    fetchData();
  }, []); // 空数组作为依赖项，确保只在组件挂载时执行一次

  // 渲染组件UI
  return (
    <div>
      <h1>First Post Title:</h1>
      {posts.length > 0 ? (
        // 如果有帖子数据，则展示第一个帖子的标题
        <h2>{posts[0].title}</h2>
      ) : (
        // 否则显示加载中的提示信息
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchDataEffect;
