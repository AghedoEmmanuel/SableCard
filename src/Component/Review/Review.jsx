
import symbol from '../../assets/symbol.svg'
import dash from '../../assets/dash.svg'

const Review = () => {
    return (
        <div className='py-20 px-9'>
            <div className='text-center py-6'>
                <h1 className='text-5xl leading-loose'>4.8</h1>
            </div>
            <div className='flex md:space-x-36 md:flex-row flex-col md:space-y-0 space-y-4'>
                <div className='border-2 border-zinc-600 flex md:flex-col rounded-3xl md:py-4 items-center space-y-6 md:px-4'>
                    <div className='flex justify-between items-center flex-col px-8'>
                    <div className='flex py-4'>
                        <img src={symbol} alt='symbol' className='md:px-4'/>
                        <p className='px-4'>
                            Fantastic customer service. I shifted from a traditional bank to Sable [and] Sable’s customer service helped me answer all the questions that I needed to switch.
                        </p>
                    </div>
                    <div className='flex space-x-2 items-end'>
                        <img src={dash} alt='dash' />
                        <p>K Oiwake</p>
                    </div>
                    </div>
                </div>
                <div className='border-2 border-zinc-600 flex md:flex-col rounded-3xl md:py-4 items-center space-y-6 md:px-4'>
                    <div className='flex justify-between items-center flex-col px-8'>
                    <div className='flex py-4'>
                        <img src={symbol} alt='symbol' className='md:px-4'/>
                        <p className='px-4'>The best bank for immigrants in the US. Thank you Sable! I have nothing but good things to say about you!</p>
                    </div>
                    <div className='flex space-x-2 items-end'>
                        <img src={dash} alt='dash' />
                        <p>E Berhe</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review