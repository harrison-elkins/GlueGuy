if (process.env.NODE_ENV !== "production") require("dotenv").config();
const cors = require("cors");
const app = require("./server/app");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
