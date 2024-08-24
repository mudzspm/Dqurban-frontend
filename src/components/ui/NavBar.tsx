import { Link } from 'react-router-dom';
import { Dropdown, Navbar, Sidebar, CustomFlowbiteTheme } from 'flowbite-react';
import {  useState } from 'react';
import { Button } from './button';
import { isAuthenticated } from '@/lib/utils';
import { toast } from 'react-toastify';
import { AuthContext } from '@/context/auth';
import {  useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useContext } from 'react';
import '../css/navbar.css';

const customSideBar: CustomFlowbiteTheme['sidebar'] = {
  root: {
    inner: 'bg-transparent',
  },
};

const customDropdown: CustomFlowbiteTheme['dropdown'] = {
  floating: {
    base: 'flex',
    item: {
      base: 'hover:bg-transparent text-xl mb-5 px-3 inline-block',
    },
  },
};

function NavigationBar() {
  const { items } = useSelector((state: RootState) => state.cartReducer);
 
  const [show, setShow] = useState(false);

  const handleSideBar = () => setShow((prev) => !prev);

  const { setToken } = useContext(AuthContext);

  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  console.log(user);

  return (
    <>
      <header
        className={`${
          show
            ? "before:opacity-25 before:content-[''] before:absolute before:bg-black before:w-full before:h-screen"
            : ''
        } shadow-lg right-0 bg-white dark:bg-gray-900 sticky w-full z-20  start-0 border-b border-gray-200 dark:border-gray-600 top-0`}
      >
        <div className='bg-[#0F405A] p-[5px] text-white hidden lg:block'>
          <div className='max-w-[71.3rem] mx-auto flex text-base font-normal 2xl:justify-between md:justify-around'>
            {/* <div className='flex'>
              <img src='heart.svg' alt='heart' className='mr-1' />
              <p>Membantu Esok</p>
            </div> */}
            <div className='flex gap-1'>
              <a
                href='mailto:info@digiqurban.org'
                className='border-r-[1px] border-[#8A8A8A] pr-3 inline-block'
              >
                E-mel: sales@dqurban.com
              </a>
              <a href='tel:+6011-3584-0500 ' className='inline-block pl-3'>
              Telefon: +6011-3584-0500 
              </a>
            </div>
            <div className='flex gap-[18.8px]'>
              <p>Rangkaian sosial</p>
              <div className='flex items-center gap-6'>
                <a href='https://www.facebook.com/dqurbandotcom' className='inline-block'>
                  <img src='facebook.svg' alt='facebook' />
                </a>
                <a href='https://twitter.com/dqurbandotcom' className='inline-block'>
                  <img src='twiter.svg' alt='twitter' />
                </a>
                <a href='https://www.youtube.com/@dqurbandotcom' className='inline-block'>
                  <img src='yt.svg' alt='youtube' />
                </a>
                <a href='https://www.instagram.com/dqurbandotcom/' className='inline-block'>
                  <img src='insta.svg' alt='instagram' />
                </a>
                <a href='https://www.tiktok.com/@dqurbandotcom' className='inline-block'>
                  <img src='tik.svg' alt='tiktok' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Navbar className='flex max-w-[94rem] mx-auto flex-wrap items-center justify-between p-3'>
          <Link
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img src='digi-qurban.svg' alt='digi-qurban.svg' />
          </Link>
          <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ml-4'>
            <Link
              // to='/cart'
              to={items.length > 0 ? '/cartlogin' : '/cart'}

              className=' relative  flex items-center space-x-3 rtl:space-x-reverse mr-5'
            >
              <img src='cart.svg' className='h-6 w-6' alt='digi cart' />
              {items.length > 0 && (
        // Circle badge displaying the count of items
        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-2 py-1">
          {items.length}
        </span>
      )}
            </Link>

            <Dropdown
              theme={customDropdown}
              inline
              label={
                <img
                  src='user-detail.svg'
                  className='h-8 w-8'
                  alt='digi user'
                />
              }
              className='rounded-none rounded-b-lg border-none px-4 py-2 bg-[#f7f7f7]'
            >
              {isAuthenticated() ? (
                <>
                  <Dropdown.Item className='hover:text-[#00ADB9] text-sm font-bold'>
                  <a href='profile'> {user.fullname}</a>
                  </Dropdown.Item>
                  <Dropdown.Item className='text-sm font-bold'>
                  {user.email}
                  </Dropdown.Item>
                  <Link to='/signin'>
                    <Dropdown.Item className='hover:text-[#00ADB9] text-xl font-normal'>
                      <Button
                        className='bg-[#084059] hover:bg-[#084059]'
                        onClick={() => {
                          localStorage.removeItem('authToken');
                          localStorage.removeItem('user');
                          localStorage.clear();
                          setToken('');
                          toast.success('Logged out successfully');
                        }}
                      >
                        Log keluar
                      </Button>
                    </Dropdown.Item>
                  </Link>
                </>
              ) : (
                <>
                  <Link to='/signup'>
                    <Dropdown.Item className='hover:text-[#00ADB9] text-xl font-normal'>
                      <Button className='bg-[#084059] hover:bg-[#084059]'>
                        Daftar
                      </Button>
                    </Dropdown.Item>
                  </Link>
                  <Link to='/signin'>
                    <Dropdown.Item className=' hover:bg-transparent hover:text-[#00ADB9] text-xl font-normal w-full'>
                      <Button className='bg-[#A7E0EA] hover:bg-[#A7E0EA]'>
                        Log masuk
                      </Button>
                    </Dropdown.Item>
                  </Link>
                </>
              )}
            </Dropdown>

            <button
              onClick={handleSideBar}
              data-drawer-toggle='default-sidebar'
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden  '
              aria-controls='navbar-sticky'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-auto mr-2'
            id='navbar-sticky'
          >
            <div className='flex md:order-2'>
              <Navbar.Collapse>
                <Link
                  className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent '
                  to='/'
                >
                  Laman Utama
                </Link>
                {user ==null ? "":
                <Link
                  className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent '
                  to='/profile'
                >
                  Profil
                </Link>
                }
                <Dropdown
                  theme={customDropdown}
                  inline
                  label={<p className='text-xl font-normal'>Pakej</p>}
                  className='rounded-none rounded-b-lg border-none px-4 py-2 bg-[#f7f7f7]'
                >
                    <Dropdown.Item className='hover:text-[#00ADB9] text-xl font-normal'>
                  <Link to='/qurban' className='w-full h-full inline-block'>
                      Qurban
                  </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className=' hover:bg-transparent hover:text-[#00ADB9] text-xl font-normal'>
                  <Link to='/aqiqa' className='w-full h-full inline-block'>
                      Aqiqah
                  </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className=' hover:bg-transparent hover:text-[#00ADB9] text-xl font-normal'>
                  <Link to='/waqf' className='w-full h-full inline-block'>
                      Sadaqah
                  </Link>
                    </Dropdown.Item>
                </Dropdown>
                <Link
                  className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent '
                  to='/feedlot'
                >
                  Fidlot
                </Link>
                <Dropdown
                  theme={customDropdown}
                  inline
                  label={<p className='text-xl font-normal'>Maklumat</p>}
                  className='rounded-none rounded-b-lg border-none px-4 py-2 bg-[#f7f7f7]'
                >
                  <Dropdown.Item className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent'>
                    <Link to='/about' className='w-full h-full inline-block'>Tentang Kami</Link>
                  </Dropdown.Item>
                  {/* <Dropdown.Item className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent'>
                    Yayasan Ar-Rahman
                  </Dropdown.Item>
                  <Dropdown.Item className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent'>
                    Institute Ar-Rahman
                  </Dropdown.Item> */}
                  <Dropdown.Item className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent'>
                    <Link to='/Services' className='w-full h-full inline-block'>Perkhidmatan Kami</Link>
                  </Dropdown.Item>

                  <Dropdown.Item className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent'>
                    <Link to='/contact' className='w-full h-full inline-block'>Hubungi Kami</Link>
                  </Dropdown.Item>
                </Dropdown>
              </Navbar.Collapse>
              





              <Navbar.Toggle />
            </div>
          </div>
        </Navbar>
      </header>

      <div
        id='drawer-backdrop'
        data-drawer-backdrop='true'
        className={` top-20 bg-transparent fixed bottom-0 w-72 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform ${
          show ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-labelledby='drawer-bottom-label'
      >
        <button
          type='button'
          onClick={handleSideBar}
          data-drawer-hide='drawer-bottom-example'
          aria-controls='drawer-bottom-example'
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white'
        >
          <svg
            className='w-3 h-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
            />
          </svg>
          <span className='sr-only'>Close menu</span>
        </button>
        <Sidebar theme={customSideBar} className='bg-transparent'>
          <Sidebar.Items>
            <Sidebar.ItemGroup className='bg-transparent'>
              {/* <Sidebar.Item href='#'>Laman utama</Sidebar.Item> */}
              <Sidebar.Item>
            <Link to='/'>Laman utama</Link>
          </Sidebar.Item>
              {/* {user ==null ? "":<Sidebar.Item href='/profile'>Profil</Sidebar.Item>} */}
              {user == null ? "" : (
            <Sidebar.Item>
              <Link to='/profile'>Profil</Link>
            </Sidebar.Item>
          )}
              {/* <Sidebar.Collapse className='text-xl' label='Pakej'>
                <Sidebar.Item href='/qurban'>Qurban</Sidebar.Item>
                <Sidebar.Item href='/aqiqa'>Aqiqah</Sidebar.Item>
              </Sidebar.Collapse> */}
               <Sidebar.Collapse label='Pakej'>
            <Sidebar.Item>
              <Link to='/qurban'>Qurban</Link>
            </Sidebar.Item>
            <Sidebar.Item>
              <Link to='/aqiqa'>Aqiqah</Link>
            </Sidebar.Item>
            <Sidebar.Item>
              <Link to='/waqf'>Sadaqah</Link>
            </Sidebar.Item>
          </Sidebar.Collapse>
              {/* <Sidebar.Item href='/feedlot'>Fidlot</Sidebar.Item> */}
              {/* <Sidebar.Collapse label='Maklumat'>
                <Sidebar.Item href='/about'>Tentang kita</Sidebar.Item> */}
                {/* <Sidebar.Item href='#'>Yayasan Ar-Rahman</Sidebar.Item>
                <Sidebar.Item href='#'>Institute Ar-Rahman</Sidebar.Item> */}
                {/* <Sidebar.Item href='/contact'>Hubungi Kami</Sidebar.Item>
              </Sidebar.Collapse> */}
                <Sidebar.Item>
            <Link to='/feedlot'>Fidlot</Link>
          </Sidebar.Item>
          <Sidebar.Collapse label='Maklumat'>
            <Sidebar.Item>
              <Link to='/about'>Tentang kita</Link>
            </Sidebar.Item>
            <Sidebar.Item>
              <Link to='/Services'>Perkhidmatan Kami</Link>
            </Sidebar.Item>
            <Sidebar.Item>
              <Link to='/contact'>Hubungi Kami</Link>
            </Sidebar.Item>
          </Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
}

export default NavigationBar;
