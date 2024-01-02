import React, { useState } from "react";
import axios from "axios";

function PostDataToAPI() {
  const [postData, setPostData] = useState({
    // Khai báo các trường dữ liệu bạn muốn post lên API
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://example.com/api/endpoint",
        postData
      );
      console.log("Data posted successfully:", response.data);
      // Xử lý dữ liệu trả về từ API nếu cần
    } catch (error) {
      console.error("Error posting data:", error);
      // Xử lý lỗi nếu có
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={postData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        value={postData.email}
        onChange={handleInputChange}
      />
      <textarea
        name="message"
        value={postData.message}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostDataToAPI;
