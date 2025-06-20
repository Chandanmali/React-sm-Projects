import React, { useEffect, useState } from 'react'

function CryptoPrice({toggleVar}) {

    const [priceDetails, setPriceDetails] = useState([])

    const getApiData = async () => {

        const api = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false")

        const json = await api.json();
        setPriceDetails(json)
        console.log(json);
    }


    useEffect(() => {
        getApiData();
    }, [])
    return (
        <div>
            <div className={`${toggleVar ? "text-white" : "text-black"}`}>
                <div className=''>
                    <p className='font-extrabold text-5xl font-serif text-center'>Cryptocurrency Prices by Market Cap</p>
                </div>
                <div className='mt-10'>
                    <div className='flex justify-center items-center'>
                        <input className=' border-2 border-gray-400 px-10 py-4 w-6/7 rounded-lg' type="text" placeholder='Search for a Crypto Currency' />
                    </div>

                    <div className="mt-5 flex justify-center">
                        <div className="w-full max-w-6xl overflow-x-auto">
                            <table className="w-full bg-gray-800 rounded-lg overflow-hidden cursor-pointer">
                                <thead>
                                    <tr className="bg-amber-400 text-black">
                                        <th className="py-4 px-6 text-left font-bold">Coin</th>
                                        <th className="py-4 px-6 text-left font-bold">Price (₹)</th>
                                        <th className="py-4 px-6 text-left font-bold">24h Change</th>
                                        <th className="py-4 px-6 text-left font-bold">Market Cap</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                        {
                                        priceDetails.map((coin) => (
                                            <tr key={coin.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            className="w-10 h-10 rounded-full"
                                                            src={coin.image || "/placeholder.svg"}
                                                            alt={coin.name}
                                                        />
                                                        <div>
                                                            <div className="text-white font-semibold">{coin.name}</div>
                                                            <div className="text-gray-400 text-sm uppercase">{coin.symbol}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-white font-semibold">₹{coin.current_price.toLocaleString()}</td>
                                                <td className="py-4 px-6">
                                                    <span
                                                        className={`font-semibold ${coin.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"
                                                            }`}
                                                    >
                                                        {coin.price_change_percentage_24h >= 0 ? "+" : ""}
                                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-gray-300">₹{(coin.market_cap / 10000000).toFixed(2)}Cr</td>
                                            </tr>
                                        ))
                                     }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoPrice
