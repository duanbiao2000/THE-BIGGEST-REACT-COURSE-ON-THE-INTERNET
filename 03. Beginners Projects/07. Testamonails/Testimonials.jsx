import React, { useState } from "react";
import "./index.css";

/**
 * Testimonials 组件函数
 * 此组件渲染用户评价部分，允许用户通过上一个和下一个按钮浏览不同的评价
 * 没有传递给此组件的属性
 * 返回包含用户评价和导航按钮的部分
 */
function Testimonials() {
  // 初始化状态，currentIndex 用于跟踪当前评价的索引
  const [currentIndex, setCurrentIndex] = useState(0);

  // 评价数组，包含每条评价的内容和作者
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  /**
   * handlePrevClick 函数
   * 当点击 'Prev' 按钮时触发，用于将 currentIndex 更新为前一条评价的索引
   * 没有传递给此函数的参数
   * 返回 undefined
   */
  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  /**
   * handleNextClick 函数
   * 当点击 'Next' 按钮时触发，用于将 currentIndex 更新为下一条评价的索引
   * 没有传递给此函数的参数
   * 返回 undefined
   */
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  // 渲染 testimonials 组件，包括内容、作者和导航按钮
  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

// 导出 Testimonials 组件
export default Testimonials;