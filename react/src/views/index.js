import Loadable from 'react-loadable';
import Loading from '../components/loading';

//需要将对外的普通组件需要进行懒加载
const Home = Loadable({
    loader: () => import('./home'),
    loading: Loading,
});

const Admin = Loadable({
    loader: () => import('./admin'),
    loading: Loading,
});


const Attack = Loadable({
    loader: () => import('./attack'),
    loading: Loading,
});

export {
    Home,
    Admin,
    Attack
}
