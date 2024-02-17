'use client';
// import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// import { FetchUser } from '@/hooks/navbarMutation';
import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';

function Navbar() {
  // ini buat kondisi klo abis login mau route ke mana, nah klo app route itu pakai next/mavigation
  // const router = useRouter();
  // terus ini kondisional klo mau ambil tokennya, nah buat tokennya bisa akses di token
  // const token = getToken();
  const token = "yummy_sepuh_hardware"
  const [isLogin, setIsLogin] = useState(false);
  // const users = FetchUser();

  // ya ini useEffect biar ambil dataa, klo mau ambil data user ya gaapa contoh kyk dibawah
  useEffect(() => {
    if (token === "yummy_sepuh_hardware") {
      setIsLogin(true);
    } else if (token === "logout") {
      setIsLogin(false);
    }
  }, [token]);

  // klo mau ambil tipe posisi user
  // useEffect(() => {
  //   if (users !== undefined && token !== undefined) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // }, [users, token]);

  const handleLogout = () => {
    // removeToken(); ==> klo logout yaa anda juga tau wkwk, hapus kondisi yang menyebabkan login
    // const tokens = getToken();
    const tokens = "logout";
    if (tokens === "logout") {
      alert('sudah logout')
      setIsLogin(false);
    } else if (tokens !== undefined) {
      alert('bentar tokennya salah')
    }
  };

  return (
    <>
      <div className='font-poppins z-40 w-full fixed top-0'>
        <div
          className="duration-300 flex justify-between items-center min-h-[10vh] py-3 md:py-[1rem] md:px-[2rem] px-[1.5rem]"
        >
          <div className='flex justify-between items-center'>
            <UnstyledLink href='/'>
              <h1>logo</h1>
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
              <UnstyledLink href='/'>
                <Typography
                  as="p"
                  className='group-hover:text-[#986A4B] text-[18px] font-extrabold'
                >
                  Halo
                </Typography>
              </UnstyledLink>
            </div>
            <div className='text-center group'>
              <UnstyledLink href='/'>
                <Typography
                  as="p"
                  className='group-hover:text-[#986A4B] text-[18px] font-extrabold'
                >
                  Hai
                </Typography>
              </UnstyledLink>
            </div>
          </div>

          <div className='lg:flex hidden justify-between items-center gap-[.8rem]'>
            {isLogin ? (
              <div className='gap-[1.5rem] flex justify-between items-center'>
                <div className='flex flex-col items-center'>
                  <div className='flex justify-between items-center'>
                    {token === "yummy_sepuh_hardware" ? (
                      <Typography className='font-extrabold text-end lg:w-[110px] xl:w-[150px] capitalize text-ellipsis overflow-hidden whitespace-nowrap text-secondary-900 text-[18px]'>
                        Hi, user
                      </Typography>
                    ) : token === "logout" ? (
                      <Typography className='font-extrabold text-end lg:w-[110px] xl:w-[150px] capitalize text-ellipsis overflow-hidden whitespace-nowrap text-secondary-900 text-[18px]'>
                        Hi, guest
                      </Typography>
                    ) : <></>
                    }
                  </div>
                </div>
                <Button variant='outline' onClick={handleLogout} className='flex justify-center'>
                  <Typography
                    className='text-center items-center flex gap-3'
                    color='label'
                  >
                    Logout
                  </Typography>
                </Button>
              </div>
            ) : (
              <>
                <h1>belum login</h1>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
