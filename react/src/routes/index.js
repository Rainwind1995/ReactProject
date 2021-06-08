import  {
    Home,
    Admin

} from "../views";   // 引入页面

export const mainRoute = [
    {
        pathname:"/home",
        component: Home
    }
];

export const admainRoute = [
    {
        pathname: "/admin/home",
        component: Admin,
        exact: true
    }
];
