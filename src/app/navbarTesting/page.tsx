'use client';
// import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import React, { useEffect, useRef, useState } from 'react';
import { Fragment } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

import clsxm from '@/lib/clsxm';

// import { FetchUser } from '@/hooks/navbarMutation';
import UnstyledLink from '@/components/links/UnstyledLink';
// import { showToast, SUCCESS_TOAST, WARNING_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';

function Navbar() {
  // const router = useRouter();
  // const token = getToken();
  const [isLogin, setIsLogin] = useState(false);
  // const users = FetchUser();
  const users = 'testing';
  const [isOnMerchPage, setIsOnMerchPage] = useState(false);
  // const { setModalOpen } = useMerchStore();

  useEffect(() => {
    if (users === 'testing') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [users]);

  // const handleLogout = () => {
  //   removeToken();
  //   const tokens = getToken();
  //   if (tokens === undefined) {
  //     showToast('Berhasil Logout', SUCCESS_TOAST);
  //     router.push('/login');
  //   } else if (tokens !== undefined) {
  //     showToast(
  //       'Tunggu beberapa saat dan cobalah untuk Logout lagi!',
  //       WARNING_TOAST
  //     );
  //   }
  // };

  const [showMe1, setShowMe1] = useState(false);
  const [showMe2, setShowMe2] = useState(false);
  const [showMe3, setShowMe3] = useState(false);
  const [showMe4, setShowMe4] = useState(false);

  function toggle1() {
    setShowMe1(!showMe1);
  }

  function toggle2() {
    setShowMe2(!showMe2);
    setShowMe3(false);
  }

  function toggle3() {
    setShowMe3(!showMe3);
    setShowMe2(false);
  }

  function toggle4() {
    setShowMe4(!showMe4);
  }

  /*event: MouseEvent*/
  const dropdown = useRef(null);
  useEffect(() => {
    function handleClick() {
      if (
        showMe1 &&
        dropdown.current &&
        !dropdown.current['contains(event.target)']
      ) {
        setShowMe1(false);
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [showMe1]);

  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 30) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsOnMerchPage(window.location.pathname === '/merch');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  return (
    <>
      {/* Desktop View */}

      <div className='font-poppins z-40 w-full fixed top-0'>
        <div
          style={{ backgroundColor: `${colorChange ? '#fff' : 'transparent'}` }}
          className="duration-300 flex justify-between items-center min-h-[10vh] py-3 md:py-[1rem] md:px-[2rem] px-[1.5rem]"
        >
          <div className='flex justify-between items-center'>
            <UnstyledLink href='/'>
              logo
            </UnstyledLink>
          </div>

          <div className='hidden lg:flex justify-center gap-[2rem] absolute left-1/2 transform -translate-x-1/2'>
            <div className='text-center group'>
              <UnstyledLink href='/'>
                <Typography
                  as="p"
                  className='group-hover:text-[#986A4B] text-[18px] font-extrabold'
                >
                  Home
                </Typography>
              </UnstyledLink>
            </div>
            <div className='text-center group'>
              <div onClick={toggle1} className='cursor-pointer'>
                <div className='flex gap-1'>
                  <Typography
                    as="p"
                    className='group-hover:text-[#986A4B] duration-300 text-[18px] font-extrabold'
                  >
                    Our Events
                  </Typography>
                  <div
                    className={`${showMe1
                      ? 'rotate-180 duration-300 ease-in-out'
                      : 'rotate-0 duration-300 ease-in-out'
                      } flex items-center group-hover:text-[#986A4B] duration-300`}
                  >
                    {/* <FontAwesomeIcon
                      icon={faChevronDown}
                      className='flex items-center'
                    /> */}
                    {'>'}
                  </div>
                </div>
              </div>

              <div
                ref={dropdown}
                className={`${showMe1 ? 'block' : 'hidden'
                  } text-[18px] bg-[#525252] mt-3 absolute flex flex-col rounded-xl shadow-md transition-opacity duration-300 font-bold`}
              >
                <UnstyledLink
                  href='/olimpit'
                  className='flex pl-5 pr-10 py-4 hover:bg-[#393737] rounded-tl-xl rounded-tr-xl'
                >
                  <Typography as="p" color='white'>
                    Olimpiade
                  </Typography>
                </UnstyledLink>
                <UnstyledLink
                  href='/ctf'
                  className='flex pl-5 pr-10 py-4 hover:bg-[#393737] '
                >
                  <Typography as="p" color='white'>
                    CTF
                  </Typography>
                </UnstyledLink>
                <UnstyledLink
                  href='/exploit'
                  className='flex pl-5 pr-10 py-4 hover:bg-[#393737] rounded-bl-xl rounded-br-xl'
                >
                  <Typography as="p" color='white'>
                    ExploIT
                  </Typography>
                </UnstyledLink>
              </div>
            </div>
            <div className='text-center group'>
              <UnstyledLink href='https://www.instagram.com/hmit_its/'>
                <Typography
                  as="p"
                  variant='p'
                  className='group-hover:text-[#986A4B] text-[18px] font-extrabold'
                >
                  HMIT
                </Typography>
              </UnstyledLink>
            </div>
            <div className='text-center group'>
              <UnstyledLink href='/merch'>
                <Typography
                  as="p"
                  variant='p'
                  className='group-hover:text-[#986A4B] text-[18px] font-extrabold'
                >
                  Merchandise
                </Typography>
              </UnstyledLink>
            </div>
          </div>

          <div className='lg:flex hidden justify-between items-center gap-[.8rem]'>
            {isLogin ? (
              <div className='gap-[1.5rem] flex justify-between items-center'>
                <div className='flex flex-col items-center'>
                  <div className='flex justify-between items-center'>
                    <Typography className='font-extrabold capitalize text-secondary-900 text-[18px]'>
                      Hi, guest
                    </Typography>
                    {/* {users && users?.data !== null ? (
                      <Typography className='font-extrabold text-end lg:w-[110px] xl:w-[150px] capitalize text-ellipsis overflow-hidden whitespace-nowrap text-secondary-900 text-[18px]'>
                        Hi, {users?.data[0]?.team_name}
                      </Typography>
                    ) : (
                      <Typography className='font-extrabold capitalize text-secondary-900 text-[18px]'>
                        Hi, guest
                      </Typography>
                    )} */}
                  </div>
                </div>
                <Menu
                  className='lg:relative flex flex-col items-end absolute right-[5%]'
                  as='div'
                >
                  <Menu.Button>
                    <div className='flex lg:gap-2 gap-1.5 items-center'>
                      <Typography>
                        halo
                      </Typography>
                    </div>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items
                      className={clsxm(
                        'absolute w-[200px] text-center shadow-80 group bg-[#525252] origin-top mt-16 right-0',
                        'flex flex-col rounded-md',
                        'focus:outline-none'
                      )}
                    >
                      <UnstyledLink
                        href="/"
                        className={clsxm(
                          'px-[22px] py-3 flex justify-center text-sm rounded-t-md font-medium hover:bg-[#393737]'
                        )}
                      >
                        <Menu.Item as='button' className='flex justify-center'>
                          <div className='flex justify-center'>
                            <Typography
                              className='text-center flex justify-center'
                              color='white'
                            >
                              Dashboard
                            </Typography>
                          </div>
                        </Menu.Item>
                      </UnstyledLink>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            ) : (
              <>
                {isOnMerchPage ? null : (
                  <>
                    <div className='flex justify-between items-center'>
                      <UnstyledLink href='/login'>
                        <Typography
                          as="p"
                          variant='p'
                          className='font-extrabold text-[#986A4B] text-[18px] hover:mt-[-5px]'
                        >
                          Login
                        </Typography>
                      </UnstyledLink>
                    </div>
                    <div className='flex justify-between items-center'>
                      <Menu className='relative' as='div'>
                        <Menu.Button>
                          <div className='flex flex-row gap-1.5 items-center'>
                            {/* <Image
                              src={Register}
                              alt='register'
                              className='w-[7rem] '
                            /> */}
                          </div>
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items
                            className={clsxm(
                              'absolute w-[200px] text-center shadow-80 group bg-[#525252] origin-top mt-2 right-0',
                              'flex flex-col rounded-md',
                              'focus:outline-none'
                            )}
                          >
                            <UnstyledLink
                              href='/ctf/register'
                              className={clsxm(
                                'px-[22px] py-3 text-center text-sm rounded-t-md font-medium hover:bg-[#393737]'
                              )}
                            >
                              <Menu.Item as='button' className='flex'>
                                <div className='flex justify-center'>
                                  <Typography
                                    className='text-center flex center'
                                    color='white'
                                  >

                                    CTF
                                  </Typography>
                                </div>
                              </Menu.Item>
                            </UnstyledLink>
                            <UnstyledLink
                              href='/olimpit/register'
                              className={clsxm(
                                'px-[22px] py-3 text-center text-sm max-w-xs font-medium hover:bg-[#393737]'
                              )}
                            >
                              <Menu.Item as='button' className='flex'>
                                <Typography
                                  as="p"
                                  variant='p'
                                  className='text-center flex justify-center'
                                  color='white'
                                >

                                  Olimpiade
                                </Typography>
                              </Menu.Item>
                            </UnstyledLink>
                            <UnstyledLink
                              href='/register'
                              className={clsxm(
                                'px-[22px] py-3 text-center text-sm max-w-xs rounded-b-md font-medium hover:bg-[#393737]'
                              )}
                            >
                              <Menu.Item as='button' className='flex'>
                                <Typography
                                  as="p"
                                  variant='p'
                                  className='text-center flex justify-center'
                                  color='white'
                                >

                                  ExploIT
                                </Typography>
                              </Menu.Item>
                            </UnstyledLink>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {isOnMerchPage ? (
            <div className='flex items-center gap-4 lg:hidden'>
              <div
                onClick={toggle4}
                className='flex justify-between items-center cursor-pointer'
              >
                <div className='text-[2rem]'>
                  {/* <FontAwesomeIcon icon={faBars} /> */}
                  klik
                </div>
              </div>
            </div>
          ) : (
            <div
              onClick={toggle4}
              className='flex justify-between items-center cursor-pointer lg:hidden'
            >
              <div className='text-[2rem]'>
                {/* <FontAwesomeIcon icon={faBars} /> */}
                klik
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile View */}

      <div
        className={`${showMe4 ? 'translate-x-0' : ''
          } z-50 fixed overflow-y-scroll lg:hidden duration-200 transform -translate-x-full h-full bg-[#393737] w-full pt-12 pb-40 px-[2rem]`}
      >
        <>
          <UnstyledLink
            href='/'
            className='mt-[1.5rem] flex justify-center items-center'
          >
            {/* <Image src={LogoSVG} alt='svg' className='w-36' /> */}
            logo
          </UnstyledLink>

          {isLogin === false ? (
            <>
              <div className='mt-10 cursor-pointer w-full flex justify-center items-center'>
                <div className='flex gap-2' onClick={toggle2}>
                  <Typography
                    as="p"
                    variant='p'
                    color='white'
                    weight='bold'
                    className='text-[20px]'
                  >
                    Our Events
                  </Typography>
                  <div className='flex justify-center items-center text-white text-[20px]'>
                    {/* <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${showMe2
                        ? 'rotate-180 duration-300 ease-in-out'
                        : 'rotate-0 duration-300 ease-in-out'
                        } flex items-center`}
                    /> */}
                    icon
                  </div>
                </div>
              </div>

              <div
                className={`${showMe2 ? 'block' : 'hidden'} mt-2 text-[18px]`}
              >
                <UnstyledLink
                  href='/olimpit'
                  className='flex justify-center items-center gap-2'
                >

                  <Typography
                    as="p"
                    variant='p'
                    color='white'
                    weight='semibold'
                  >
                    Olimpiade
                  </Typography>
                </UnstyledLink>
                <UnstyledLink
                  href='/ctf'
                  className='flex justify-center items-center gap-2 my-2'
                >

                  <Typography
                    as="p"
                    variant='p'
                    color='white'
                    weight='semibold'
                  >
                    Capture The Flag
                  </Typography>
                </UnstyledLink>
                <UnstyledLink
                  href='/exploit'
                  className='flex justify-center items-center gap-2'
                >
                  <Typography
                    as="p"
                    variant='p'
                    color='white'
                    weight='semibold'
                  >
                    ExploIT
                  </Typography>
                </UnstyledLink>
              </div>

              <div className='mt-3 cursor-pointer w-full flex justify-center items-center'>
                <div className='flex gap-2' onClick={toggle3}>
                  <Typography
                    as="p"
                    variant='p'
                    color='white'
                    weight='bold'
                    className='text-[20px]'
                  >
                    About Us
                  </Typography>
                  <div className='flex text-[20px] justify-center items-center text-white'>
                    {/* <FontAwesomeIcon
                      style={{
                        transform: showMe3 ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                      icon={faChevronDown}
                      className={`${showMe3
                        ? 'rotate-180 duration-300 ease-in-out'
                        : 'rotate-0 duration-300 ease-in-out'
                        } flex items-center`}
                    /> */}
                    icon
                  </div>
                </div>
              </div>

              <div
                className={`${showMe3 ? 'block' : 'hidden'
                  } mt-2 text-[18px] font-bold text-[#ffffff]`}
              >
                <UnstyledLink
                  href='/'
                  className='flex justify-center items-center'
                >
                  <Typography
                    as="p"
                    variant='p'
                    color='white'
                    weight='semibold'
                  >
                    halo
                  </Typography>
                </UnstyledLink>
                <div className='my-2'></div>
                <UnstyledLink
                  href='https://www.instagram.com/hmit_its/'
                  className='flex justify-center items-center'
                >
                  <Typography
                    as="p"
                    variant='p'
                    color='white'
                    weight='semibold'
                  >
                    HMIT ITS
                  </Typography>
                </UnstyledLink>
              </div>

              <UnstyledLink
                href='/merch'
                className='mt-3 cursor-pointer w-[100%] flex justify-center items-center'
              >
                <Typography
                  as="p"
                  color='white'
                  weight='bold'
                  className='flex gap-2 text-[20px]'
                >
                  Merchandise
                </Typography>
              </UnstyledLink>

              <div className='mt-10 w-[100%] text-[18px]'>
                <UnstyledLink href='/login' className='text-center'>
                  <Typography
                    as="p"
                    variant='p'
                    weight='semibold'
                    color='white'
                    className='p-2 bg-[#00B8FF] border-2 border-[#00B8FF] rounded-md active:bg-primary-700'
                  >
                    Login
                  </Typography>
                </UnstyledLink>
                <UnstyledLink href='/register' className='text-center'>
                  <Typography
                    as="p"
                    variant='p'
                    weight='semibold'
                    className='p-2 border-2 border-[#00B8FF] text-[#00B8FF] rounded-md mt-4 hover:bg-[#00B8FF] hover:text-white active:bg-primary-700'
                  >
                    Register ExploIT
                  </Typography>
                </UnstyledLink>
                <UnstyledLink href='/ctf/register' className='text-center'>
                  <Typography
                    as="p"
                    variant='p'
                    weight='semibold'
                    className='p-2 border-2 border-[#00B8FF] text-[#00B8FF] rounded-md mt-4 hover:bg-[#00B8FF] hover:text-white active:bg-primary-700'
                  >
                    Register CTF
                  </Typography>
                </UnstyledLink>
                <UnstyledLink href='/olimpit/register' className='text-center'>
                  <Typography
                    as="p"
                    variant='p'
                    weight='semibold'
                    className='p-2 border-2 border-[#00B8FF] text-[#00B8FF] rounded-md mt-4 hover:bg-[#00B8FF] hover:text-white active:bg-primary-700'
                  >
                    Register Olimpiade
                  </Typography>
                </UnstyledLink>
              </div>
            </>
          ) : (
            <>
              <div className='flex flex-col items-center'>
                halo
              </div>
              <div className='mt-5 w-full'>
                <UnstyledLink
                  href="/"
                  className='text-center'
                >
                  <Typography
                    as="p"
                    variant='p'
                    color='white'
                    weight='semibold'
                    className='p-2 bg-[#00B8FF] active:bg-primary-700 rounded-md text-[16px]'
                  >
                    Dashboard
                  </Typography>
                </UnstyledLink>
                {/* <Button
                  onClick={handleLogout}
                  className='text-center w-full border-2 border-[#00B8FF] bg-transparent p-2 mt-3 active:bg-primary-700'
                >
                  <Typography
                    as="p"
                    variant='p'
                    color='white'
                    weight='semibold'
                    className='text-center text-[16px]'
                  >
                    Logout
                  </Typography>
                </Button> */}
              </div>

              <div className='mt-5 cursor-pointer w-full flex justify-center items-center'>
                <div className='flex gap-2' onClick={toggle2}>
                  <Typography
                    as="p"
                    variant='p'
                    color='white'
                    weight='bold'
                    className='text-[20px]'
                  >
                    Our Events
                  </Typography>
                  <div className='flex text-[20px] justify-center items-center text-white'>
                    {/* <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${showMe2
                        ? 'rotate-180 duration-300 ease-in-out'
                        : 'rotate-0 duration-300 ease-in-out'
                        } flex items-center`}
                    /> */}
                    icon
                  </div>
                </div>
              </div>

              <div
                className={`${showMe2 ? 'block' : 'hidden'} mt-2 text-[18px]`}
              >
                <UnstyledLink
                  href='/olimpit'
                  className='flex justify-center items-center gap-2'
                >

                  <Typography as="p" variant='p' color='white' weight='bold'>
                    Olimpiade
                  </Typography>
                </UnstyledLink>
                <UnstyledLink
                  href='/ctf'
                  className='flex justify-center items-center gap-2 my-2'
                >

                  <Typography as="p" variant='p' color='white' weight='bold'>
                    Capture The Flag
                  </Typography>
                </UnstyledLink>
                <UnstyledLink
                  href='/exploit'
                  className='flex justify-center items-center gap-2'
                >
                  <Typography as="p" variant='p' color='white' weight='bold'>
                    ExploIT
                  </Typography>
                </UnstyledLink>
              </div>
              <div className='mt-3 cursor-pointer w-[100%] flex justify-center items-center'>
                <div className='flex gap-2' onClick={toggle3}>
                  <Typography
                    as="p"
                    variant='p'
                    color='white'
                    weight='bold'
                    className='text-[20px]'
                  >
                    About Us
                  </Typography>
                  <div className='flex justify-center items-center text-white text-[20px]'>
                    {/* <FontAwesomeIcon
                      style={{
                        transform: showMe3 ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                      icon={faChevronDown}
                      className={`${showMe3
                        ? 'rotate-180 duration-300 ease-in-out'
                        : 'rotate-0 duration-300 ease-in-out'
                        } flex items-center`}
                    /> */}
                    icon
                  </div>
                </div>
              </div>
              <div
                className={`${showMe3 ? 'block' : 'hidden'} mt-2 text-[18px]`}
              >
                <UnstyledLink
                  href='/about'
                  className='flex justify-center items-center'
                >
                  <Typography as="p" variant='p' color='white' weight='bold'>
                    halo
                  </Typography>
                </UnstyledLink>
                <div className='my-2'></div>
                <UnstyledLink
                  href='https://www.instagram.com/hmit_its/'
                  className='flex justify-center items-center'
                >
                  <Typography as="p" variant='p' color='white' weight='bold'>
                    HMIT ITS
                  </Typography>
                </UnstyledLink>
              </div>
              <div className='mt-3 cursor-pointer w-[100%] flex justify-center items-center'>
                <UnstyledLink href='/merch' className='flex gap-2'>
                  <Typography
                    as="p"
                    variant='p'
                    color='white'
                    weight='bold'
                    className='text-[20px]'
                  >
                    Merchandise
                  </Typography>
                </UnstyledLink>
              </div>
            </>
          )}
        </>

        <div className='relative w-full flex justify-center'>
          <FaRegTimesCircle
            onClick={toggle4}
            className='cursor-pointer text-[40px] text-white fixed sm:-bottom-70 sm:mb-5 bottom-12'
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
