"use client"
import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()
    const pathname = usePathname()
    const handleChange = (e) => {
        router.push(e.target.value)
    }

    useEffect(() => {
        if (pathname === "/") {
            router.push('/cat')
        }
    }, [pathname])

    return (
        <div className='bg-blue-800 min-w-full min-h-[50px] flex justify-between items-center flex-wrap p-2'>
            <div className='font-semibold text-lg text-white ml-5'>Pet Animals</div>
            <div>
                <label htmlFor="animal" className='text-white mx-2'>Choose Pet</label>
                <select
                    name="animal"
                    id="animal"
                    className='px-2 py-1 mr-10 rounded-sm'
                    onChange={handleChange}
                    value={pathname}>
                    <option value="/cat">Cat</option>
                    <option value="/dog">Dog</option>
                </select>
            </div>
        </div>
    )
}

export default Header