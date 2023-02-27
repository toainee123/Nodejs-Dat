import { Router } from "express";
const router = Router();

router.get("/", (request, response) => {
  response.send(`
        <h1>Home Page</h1>
        <p>Content text</p>
        <a href="/admin"><button>Admin page</button></a>
        <img src="https://genk.mediacdn.vn/139269124445442048/2022/3/8/iphone-13overviewfpjuzw2ncqmyog-16466798051051604834665.png">
    `);
});

export default router;
