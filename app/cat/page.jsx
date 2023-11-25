async function getData() {
    const resp = await fetch('https://catfact.ninja/fact', { next: { revalidate: 0 } })
    if (!resp.ok) {
        throw new Error('Failed to fetch data')
    }

    return resp.json()
}


const page = async () => {
    const catFact = await getData()

    return (
        <div className="min-w-full min-h-[400px] p-2 md:px-10 flex justify-center items-center">
            <div className="bg-orange-400 py-2 px-5 rounded-sm max-w-max flex-col drop-shadow-md">
                <h6 className="font-bold text-white">Cat Fact :</h6>
                <p className="font-serif bg-white p-2 rounded-sm">{catFact?.fact}</p>
            </div>
        </div>
    )
}

export default page