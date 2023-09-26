import {Link, Outlet} from "react-router-dom";
import cls from './Layout.module.css'
import {useState} from "react";

const navabarMenu = [
    {name: 'Home', path: '/'},
    {name: 'Transactions', path: '/transactions'},
    {name: 'Rewards', path: '/rewards'}
]

const Layout = () => {
    const [active, setActive] = useState('Home')

    const setActiveLink = (name) => {
        return function () {
            setActive(name)
        }
    }

    return (
        <div>
            <nav className={cls.navbar}>
                {navabarMenu.map(link => (
                    <Link key={link.path} to={link.path} className={`${cls.link} ${link.name === active ? cls.active : null}`} onClick={setActiveLink(link.name)}>{link.name}</Link>
                ))}
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
