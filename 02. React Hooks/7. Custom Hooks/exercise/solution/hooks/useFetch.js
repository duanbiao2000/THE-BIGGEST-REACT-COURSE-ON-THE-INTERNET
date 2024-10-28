import { useEffect, useState } from "react";

/**
 * 使用自定义钩子useFetch来处理HTTP请求
 * 这个钩子负责根据给定的URL获取数据，并管理相关的状态（数据，加载状态，错误）
 * @param {string} url - 请求的URL
 * @returns {Object} 包含数据，加载状态和错误的对象
 */
const useFetch = (url) => {
  // 初始化数据状态为空数组
  const [data, setData] = useState([]);
  // 初始化加载状态为true，表示数据尚未获取
  const [loading, setLoading] = useState(true);
  // 初始化错误状态为null，表示当前没有遇到错误
  const [error, setError] = useState(null);

  // 使用useEffect钩子来处理URL变化时的数据获取
  useEffect(() => {
    // 定义一个异步函数fetchData来执行实际的数据获取操作
    const fetchData = async () => {
      try {
        // 发起HTTP请求
        const response = await fetch(url);
        // 检查HTTP响应是否正常
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // 将响应体转换为JSON格式
        const result = await response.json();
        // 更新数据状态
        setData(result);
      } catch (error) {
        // 捕获到错误时，更新错误状态
        setError(error);
      } finally {
        // 无论请求成功或失败，都结束加载状态
        setLoading(false);
      }
    };

    // 调用fetchData函数来开始数据获取过程
    fetchData();
  }, [url]);

  // 返回当前的数据，加载状态和错误状态
  return { data, loading, error };
};

export default useFetch;
