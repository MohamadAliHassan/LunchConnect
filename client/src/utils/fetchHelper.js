// fetchHelper.js

const fetchHelper = async (url, method, body = null) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error("Error in fetchHelper:", error);
    throw error;
  }
};

export default fetchHelper;
