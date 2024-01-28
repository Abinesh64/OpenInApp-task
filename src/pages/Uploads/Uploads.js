import React , {useState} from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar } from '@mui/material';
import excelLogo from '../../images/Excel-logo.png';
import Papa from 'papaparse';
import Table from './Table/Table';
import './Uploads.css';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBar from './Menubar/MenuBar';

const Uploads = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState('');
    const [toggle, setToggle] = useState(false);

      
    const handleRemoveFile = () => {
        setData([]);
        setFileName(''); 
        setIsLoading(false);
    }

    const handleUploadFile = (e) =>{
        setIsLoading(true);
        const file = e.target.files[0];
        setFileName(file.name);
        Papa.parse(file,{
            header: true,
            complete: (results) => {
                setData(results.data);
                setIsLoading(false);
            }
        })
    }

    const handleToggle = () =>{
        setToggle(true);
    }

  return (
    toggle ? <MenuBar setToggle={setToggle}/> :
    <div className='mainpage'>
            <div className='header'>
              <div className='header-left'>
                <div className='menu-icon' onClick={handleToggle}>
                    <MenuIcon/>
                </div>
                <div className='uploads-top'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z" fill="#605BFF"/>
                    </svg>
                    <div>Base</div>
                </div>
              </div>
              <h2>Upload CSV</h2>
              <div className='avatar'>
                    <NotificationsNoneOutlinedIcon className='notification' style={{ fontSize: 28 }}/>
                    <Avatar src='' fillrulename='avatar-img' sx={{ width: 28, height: 28 }} />
              </div>
            </div>
            <div className='upload-container'>
            <h2>Upload CSV</h2>

              <div className='input-container'>
                <div className='box'>
                    <img src={excelLogo} alt=''/>
                    {
                            isLoading ? (
                                <div className='remove-file'>
                                    <p>{fileName}</p>
                                    <p className='remove-button' onClick={handleRemoveFile}>Remove</p>
                                </div>
                            ) : (
                                <div className='excel-drop'>
                                    <p>Drop your excel sheet here or</p> 
                                    <label htmlFor='excel'>Browse</label>
                                </div>
                            )
                    }
                </div>
                <input
                    type='file'
                    accept='.csv'
                    id='excel'
                    className='excel-input'
                    onChange={handleUploadFile}
                />
            {
                isLoading ? <label className="loader" htmlFor='excel'></label> :
                <label className='upload' htmlFor='excel'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.125 14.1923V16.9327C19.125 18.1435 18.1435 19.125 16.9327 19.125H7.06731C5.85653 19.125 4.875 18.1435 4.875 16.9327V14.1923M12 15.8365V4.875M12 4.875L8.71154 8.16346M12 4.875L15.2885 8.16346" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>Upload</p>
                </label>
            }
              </div>
            </div>
            <div className='upload-table'>
                {
                    data.length ? <Table data={data}/> : null
                }
            </div>
        </div>
  )
}

export default Uploads