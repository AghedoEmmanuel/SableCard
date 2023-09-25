
import ig from '../../assets/ig.svg'
import twitter from '../../assets/twitter.svg'
import yt from '../../assets/YT.svg'
import facebook from '../../assets/facebook.svg'
import tiktok from '../../assets/tiktok.svg'

const Footer = () => {
    return (
        <div className="bg-black text-white md:px-28 md:py-24 py-14">
            <div className="flex md:flex-row flex-col justify-between items-start space-y-4 px-2">
                <div className="">
                    <h1 className="pb-2 text-xl">Sable Credit</h1>
                    <p className="text-xs">Sable ONE Credit</p>
                    <p className="text-xs">Credit Score <span className="text-teal-600">Coming Soon</span></p>
                </div>

                <div>
                    <h1 className="pb-2 text-xl">Contact</h1>
                    <p className="text-sm">Email:help@sablecard.com</p>
                    <p className="text-sm">Location:New York,NY</p>
                </div>
                <div className="pr-20 font-bold">
                    <h1 className="text-6xl">Sable.</h1>
                </div>

            </div>

            <div className="flex md:flex-row flex-col justify-between md:items-end pb-20 px-2 md:pt-0 pt-6">
                <div className="">
                    <h1 className="pb-2 text-xl">Sable Debit</h1>
                    <h1 className="pb-2 text-xl">App</h1>
                    <h1 className="pb-2 text-xl">Learn</h1>
                    <p className="pb-2 text-sm">FAQs</p>
                    <p className="pb-2 text-sm">About Sable</p>
                </div>

                <div className='flex space-x-4 md:pl-8 pb-4'>
                    <img src={ig} alt='IG icon' />
                    <img src={twitter} alt='twitter icon' />
                    <img src={facebook} alt='facebook icon' />
                    <img src={yt} alt='youtube icon' />
                    <img src={tiktok} alt='tiktok icon' />
                </div>

                <div className='md:pr-20'>
                    <p className='text-gray-600 text-sm '>© Sable Money Inc, all rights reserved.</p>
                </div>

            </div>
            <div className='divide-y-2 divide-gray-600'>
                <div></div>
                <div className='md:pt-20 text-gray-500 md:pr-24 pt-9 md:px-0 px-9'>
                    <h1 className='md:pb-14 pb-9'>Privacy policy | Terms and conditions</h1>
                    <p className=''>
                        *Banking services provided by Coastal Community Bank, Member FDIC, pursuant to license by Mastercard International Inc.
                        Sable account is FDIC-insured up to $250,000 per depositor through Coastal Community Bank, Member FDIC.
                    </p>
                    <p> **If you are not a U.S. citizen, you can apply with your passport and U.S. Visa. Please note: you must submit an SSN once you receive one. If you are a U.S. citizen, SSN is required to open a bank account.</p>
                    <p className='pb-6'>*** Double cashback bonus (through 12/2022)</p>
                    <p className='px-8'>Please see www.sablecard.com/terms-and-conditions#creditrnb for terms and conditions. Some exclusions apply.</p>
                    <p className='px-8'>Please see www.sablecard.com/terms-and-conditions for terms and conditions.</p>
                    <p className='px-8'>This benefit is provided by MasterCard. Benefits are subject to terms, conditions and limitations, including limitations on the amount of coverage. Please see the terms and conditions.</p>
                    <p className='px-8'>Sable estimated annual value</p>
                    <p className='px-8 pb-4'>Sable product comparisons</p>
                    <p>† Sable Remittance Best Rate Guarantee Terms</p>
                </div>
            </div>
        </div>
    )
}

export default Footer