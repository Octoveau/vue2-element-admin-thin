import service from "./index";

//获取用户信息
export const getUserInfoData = () => service.get("api/info");
