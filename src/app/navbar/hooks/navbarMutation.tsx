// import { useQuery } from '@tanstack/react-query';

// import { getToken } from '@/lib/cookies';
// import { ApiReturn } from '@/types/api';

// import { UserLogin } from '@/types/entities/login'; ===== buat entity, type gitu kyk sbd bang

// klo ini buat hooks data-data dari BE

// export const FetchUser = () => {
//   const token = getToken();
//   const res = useQuery<ApiReturn<UserLogin[]>>(['/auth/me'], {
//     enabled: !!token,
//   });
//   if (!res.data) {
//     return null;
//   }
//   return res.data;
// };


import React from 'react'

export default function navbarMutation() {
  return (
    <div>
      biar ga kena eslint
    </div>
  )
}
