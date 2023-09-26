
import card_icon from '../../assets/card_icon.svg'
import trophy_icon from '../../assets/trophy_icon.svg'
import speedometer_icon from '../../assets/speedometer_icon.svg'
import global_icon from '../../assets/global_icon.svg'
import display from '../../assets/home-sub-mockup-p-1600.png.svg'
import yahoo from '../../assets/Logo_Yahoo_Finance.svg.svg'
import bloomberg from '../../assets/Logo_Bloomberg.svg.svg'
import business from '../../assets/Logo_Business_Insider.svg.svg'
import forbes from '../../assets/forbes.png'

const Credit = () => {
    return (
        <div className="bg-zinc-800 text-white ">

           <div className='md:p-6 md:px-24 px-9'>
           <div className="text-center space-y-2 pt-14 ">
                <p className="text-teal-700 text-xs">400,000 ACCOUNTS & COUNTING</p>
                <h3 className='text-xl font-bold'>No hidden fees. No credit checks.</h3>
                <h3 className='text-xl font-semibold'>No more barriers to build credit.</h3>

                <div className='md:flex md:flex-start text-left md:pb-8'>

                    <div className='py-4 md:space-y-20 space-y-9'>
                        <div className='space-y-4 md:space-y-0'>
                            <img src={card_icon} alt='card icon' />
                           <div>
                           <h6 className='font-bold'>Get a secured credit card and bank account in 5 minutes.</h6>
                            <p>No credit history, credit check, or minimum deposit required.</p>
                           </div>
                        </div>
                        <div className='space-y-4 md:space-y-0'>
                            <img src={trophy_icon} alt='trophy icon' />
                            <div>
                            <h6 className='font-bold'>The only premium card for building credit.</h6>
                            <p>2% unlimited cash back on your favorite brands, 2X first year cash back match, premium benefits and more!</p>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <img src={display} className='w-[90rem] mb-20rem h-full' />
                    </div>

                    <div className='py-4 md:space-y-9 md:text-right space-y-4'>
                           <div className='md:relative'>
                           <img src={speedometer_icon} alt='speedometer_icon' className='md:absolute md:right-0' />
                           </div>
                        <div className='md:pb-24'>
                            <h6 className='font-bold'>Build your U.S. credit</h6>
                            <p>We believe in forming positive habits. Build your U.S. credit with Sable</p>
                        </div>
                        <div className='md:relative'>
                        <img src={global_icon} alt='global icon' className='md:absolute md:right-0 bottom-1'/>
                        </div>
                        <div >
                            <h6 className='font-bold'>Bank like a global citizen with Sable.</h6>
                            <p>Start building credit before you even enter the country. Non-U.S. citizens can apply with their passport and visa.</p>
                        </div>
                    </div>

                </div>
            </div>
           </div>
            <div className='divide-y-2 md:px-24 px-9'>
                <div></div>
                <div className='py-8 flex md:space-x-80 space-x-2'>
                    <div>
                    <img src={yahoo} alt='yahoo_icon' />
                    </div>
                    <div>
                    <img src={bloomberg} alt='bloomberg_icon' />
                    </div>
                    <div>
                    <img src={business} alt='business_insider_icon' />
                    </div>
                    {/* <div>
                    <img src={forbes} alt='forbes_icon' className='bg-zinc-800'/>
                    </div> */}
                </div>
            </div>


        </div>
    )
}

export default Credit