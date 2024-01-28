import React from 'react'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Link } from 'react-router-dom';
import './Menubar.css';

const MenuBar = ({setToggle}) => {

    const handleToggle = () =>{
        setToggle(false);
    }
  return (
    <div className='menubar'>
            <div className='menubar-top'>
                <div className='logo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z" fill="#605BFF"/>
                </svg>
                <div>Base</div>
                </div>
                <div className='cancel' onClick={handleToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                       <path d="M25.3424 14.6568L19.6855 20.3137M19.6855 20.3137L14.0287 14.6568M19.6855 20.3137L14.0287 25.9706M19.6855 20.3137L25.3424 25.9706" stroke="#999CA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className='sidebar-items'>
                <div className='item' onClick={handleToggle}>
                    <GridViewRoundedIcon className='sidebar-icon'/>
                    <p>Dashboard</p>
                </div>
                <Link to='/home/upload' style={{textDecoration: 'none'}} onClick={handleToggle}>
                    <div className='item' >
                       <InsertChartRoundedIcon className='sidebar-icon'/>
                       <p>Upload</p>
                   </div>
                </Link>
                <div className='item' onClick={handleToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none" className='sidebar-icon'>
                        <g opacity="0.4">
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.7872 7.47423C21.6518 7.61908 21.4681 7.70185 21.2747 7.70185C20.559 7.70185 19.9787 8.32263 19.9787 9.07792C19.9787 9.83838 20.5522 10.4561 21.2611 10.4643C21.6605 10.4685 22 10.7664 22 11.1938V13.8476C22 16.0814 20.3075 17.893 18.2186 17.893H15.0658C14.7398 17.893 14.4758 17.6106 14.4758 17.2619V15.0271C14.4758 14.5925 14.1567 14.2511 13.7505 14.2511C13.354 14.2511 13.0251 14.5925 13.0251 15.0271V17.2619C13.0251 17.6106 12.7611 17.893 12.4362 17.893H5.78143C3.70213 17.893 2 16.0824 2 13.8476V11.1938C2 10.7664 2.33946 10.4685 2.73888 10.4643C3.44874 10.4561 4.02128 9.83838 4.02128 9.07792C4.02128 8.34333 3.46035 7.78462 2.72534 7.78462C2.53191 7.78462 2.34816 7.70185 2.21277 7.557C2.07737 7.41215 2 7.21557 2 7.00865V4.32894C2 2.09826 3.706 0.273159 5.7911 0.273159H12.4362C12.7611 0.273159 13.0251 0.555615 13.0251 0.904288V3.55296C13.0251 3.97716 13.354 4.32894 13.7505 4.32894C14.1567 4.32894 14.4758 3.97716 14.4758 3.55296V0.904288C14.4758 0.555615 14.7398 0.273159 15.0658 0.273159H18.2186C20.3075 0.273159 22 2.08377 22 4.31859V6.92587C22 7.1328 21.9226 7.32938 21.7872 7.47423ZM13.7505 12.2439C14.1567 12.2439 14.4758 11.8921 14.4758 11.4679V7.32938C14.4758 6.90518 14.1567 6.55341 13.7505 6.55341C13.354 6.55341 13.0251 6.90518 13.0251 7.32938V11.4679C13.0251 11.8921 13.354 12.2439 13.7505 12.2439Z" fill="#030229"/>
                        </g>
                    </svg>
                    <p>Invoice</p>
                </div>
                <div className='item' onClick={handleToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none" className='sidebar-icon'>
                        <g opacity="0.4">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.81 2.47565H16.191C19.28 2.47565 21 4.43586 21 7.79464V19.1705C21 22.5843 19.28 24.5005 16.191 24.5005H7.81C4.77 24.5005 3 22.5843 3 19.1705V7.79464C3 4.43586 4.77 2.47565 7.81 2.47565ZM8.07999 7.60743V7.59642H11.069C11.5 7.59642 11.85 7.98185 11.85 8.45429C11.85 8.93993 11.5 9.32537 11.069 9.32537H8.07999C7.64899 9.32537 7.29999 8.93994 7.29999 8.4664C7.29999 7.99287 7.64899 7.60743 8.07999 7.60743ZM8.07999 14.303H15.92C16.35 14.303 16.7 13.9176 16.7 13.444C16.7 12.9705 16.35 12.5839 15.92 12.5839H8.07999C7.64899 12.5839 7.29999 12.9705 7.29999 13.444C7.29999 13.9176 7.64899 14.303 8.07999 14.303ZM8.07999 19.3357H15.92C16.319 19.2916 16.62 18.9161 16.62 18.4767C16.62 18.0252 16.319 17.6508 15.92 17.6067H8.07999C7.77999 17.5737 7.48999 17.7278 7.32999 18.0142C7.16999 18.2895 7.16999 18.6529 7.32999 18.9392C7.48999 19.2145 7.77999 19.3797 8.07999 19.3357Z" fill="#030229"/>
                        </g>
                    </svg>
                    <p>Schedule</p>
                </div>
                <div className='item' onClick={handleToggle}> 
                    <CalendarMonthIcon className='sidebar-icon'/>
                    <p>Calendar</p>
                </div>
                <div className='item' onClick={handleToggle}>
                    <NotificationsIcon className='sidebar-icon'/>
                    <p>Notification</p>
                </div>
                <div className='item' onClick={handleToggle}> 
                    <SettingsRoundedIcon className='sidebar-icon'/>
                    <p>Settings</p>
                </div>
            </div>
        </div>
  )
}

export default MenuBar