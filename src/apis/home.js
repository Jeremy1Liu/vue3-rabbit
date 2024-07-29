import httpInstance from "@/utils/http.js";

//获取轮播图数据              @/apis/home.js
export function getBannerAPI(params) {
  return httpInstance({
    url: "/home/banner",
    params,
  });
}

//获取新鲜好物内容
export function getFreshAndGoodAPI(params) {
  return httpInstance({
    url: "/home/new",
    params,
  });
}

export function getHotAPI() {
    return httpInstance({
        url: "/home/hot",
    });
}