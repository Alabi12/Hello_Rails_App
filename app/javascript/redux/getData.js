import { createAsyncThunk } from "@reduxjs/toolkit";

const getData = createAsyncThunk("greetings", async () => {
  try {
    const text = await fetch("http://127.0.0.1:5000/api/greetings");
    const data = await text.json();
    console.log(data);
    if (data.greeting) {
      return {
        success: true,
        data,
      };
    }
  } catch (e) {
    return { success: false, e: e.response.data.text };
  }
});

export default getData;
