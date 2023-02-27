import { Router } from "express";
const routerAdmin = Router();

routerAdmin.get("/admin", (request, response) => {
  response.send(`
        <h1>Admin Page</h1>
        <p>Content text</p>
        <img src="https://genk.mediacdn.vn/139269124445442048/2022/3/8/iphone-13overviewfpjuzw2ncqmyog-16466798051051604834665.png">
        abc
    `);
});

export default routerAdmin;
