import Image from 'next/image'

async function getData() {
    const resp = await fetch('https://dog.ceo/api/breeds/image/random', { next: { revalidate: 0 } })
    if (!resp.ok) {
        throw new Error('Failed to fetch data')
    }
    return resp.json()
}

const page = async () => {
    const dogImg = await getData()
    return (
        <div className='w-full h-[700px] flex justify-center items-center mt-2 p-5'>
            <div className='p-3 pb-8 border-blue-300 border-2 shadow-md'>
                <Image
                    placeholder='blur'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8ux4AAo8BnquIyE8AAAAASUVORK5CYII='
                    src={dogImg?.message}
                    alt='dog'
                    height={240}
                    width={320}
                    quality={75}
                    loading='eager'
                />
            </div>
        </div>
    )
}

export default page