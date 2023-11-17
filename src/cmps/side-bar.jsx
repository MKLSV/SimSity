import { NavLink } from 'react-router-dom'
import { ReactSVG } from 'react-svg';

import logo from '../assets/icons/logo.svg'
import Calendar from '../assets/icons/CalendarBlank.svg';
import Graduation from '../assets/icons/GraduationCap.svg';
import Door from '../assets/icons/Door.svg';
import Student from '../assets/icons/Student.svg';
import UserList from '../assets/icons/UserList.svg';
import Camera from '../assets/icons/Camera.svg';
import Settings from '../assets/icons/Settings.svg';
import Archive from '../assets/icons/Archive.svg';
import Arrow from '../assets/icons/arrow.svg';
import LogOutSvg from '../assets/icons/log-out.svg';
import FlagRu from '../assets/icons/flag-RU.svg';


export function SideBar() {

    return (
        <div className="side-bar">
            <div>

                <div className="logo">
                    <ReactSVG src={logo} className="side-bar-svg" />
                    <span className='logo-name'>Сим-Центр</span>
                </div>
                <div className="nav-bar">
                    <NavLink className='nav-btn' to='/'><ReactSVG src={Calendar} className="side-bar-svg" /><span className='nav-name'>Расписание</span></NavLink>
                    <NavLink className='nav-btn' to='/sessions'><ReactSVG src={Graduation} className="side-bar-svg" /><span className='nav-name'>Учебные сессии</span></NavLink>
                    <NavLink className='nav-btn' to='/rooms-list'><ReactSVG src={Door} className="side-bar-svg" /><span className='nav-name'>Список комнат</span></NavLink>
                    <NavLink className='nav-btn' to='/users-list'><ReactSVG src={Student} className="side-bar-svg" /><span className='nav-name'>Пользователи</span></NavLink>
                    <NavLink className='nav-btn' to='/study-groups'><ReactSVG src={UserList} className="side-bar-svg" /><span className='nav-name'>Учебные группы</span></NavLink>
                    <NavLink className='nav-btn' to='/device-list'><ReactSVG src={Camera} className="side-bar-svg" /><span className='nav-name'>Список устройств</span></NavLink>
                    <NavLink className='nav-btn' to='/settings'><ReactSVG src={Settings} className="side-bar-svg" /><span className='nav-name'>Настройки системы</span></NavLink>
                    <NavLink className='nav-btn' to='/archive'><ReactSVG src={Archive} className="side-bar-svg" /><span className='nav-name'>Архив</span></NavLink>
                </div>
            </div>
            <div className="nav-footer">
                <div className="user">
                    <div className="user-info">
                        <span className='user-name'>Матвей Колосов</span>
                        <span className='user-role'>Преподаватель</span>
                    </div>
                    <span className='user-icon'>
                        МК
                    </span>
                </div>
                <div className='nav-btn' to='/'><ReactSVG src={LogOutSvg} className="side-bar-svg" /><span className='nav-name'>Выйти</span></div>
                <div className="lang">
                    <div className='nav-btn' to='/'>
                        <ReactSVG src={FlagRu} className="flag" />
                        <span className='nav-name'>Русский</span>
                        <ReactSVG src={Arrow} className="side-bar-svg" />
                    </div>

                </div>
                {/* <span className='version'>Версия 1.02</span> */}
            </div>
        </div>
    )
}