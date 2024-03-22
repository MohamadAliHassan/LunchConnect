const testfunction = (req, res) => {
  try {
    res.json({ message: "test successful" });
  } catch (error) {
    console.error("Error in testfunction:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default testfunction;
