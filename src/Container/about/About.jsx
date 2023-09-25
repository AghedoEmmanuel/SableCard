
import Logo from './logo'

const About = () => {
    return (
        <div className='md:flex'>

            <div className='md:flex-1 divide-y-2 grid grid-cols-1 bg-zinc-800 text-white'>

                <div className='pt-9 md:px-32 divide-y-2 divide-gray-600 grid grid-cols-1 px-20'>
                    <div ></div>

                    <div className='py-8'>
                        <p className='text-3xl pb-4'>Earn 2% cash back on favorite brands</p>
                        <p>Earn 2%1 cash back on favorite brands, 1%1 cashback on all purchases, and a 2x cashback match in your first year! Get premium benefits and much more.</p>
                    </div>

                    <div className='text-gray-600 py-8'>
                        <p className='text-3xl pb-4'>Moving to the U.S.? No SSN required</p>
                        <p>Start building credit before you even enter the country. Sign up with your international address, passport & visa instead**.</p>
                    </div>

                    <div className='text-gray-600 py-8'>
                        <p className='text-3xl pb-4'>Get help from a real person</p>
                        <p>When you’ve got questions about your finances, get multilingual customer support anytime you need from direct in-app chat, email, phone, and our site FAQs.</p>
                    </div>
                </div>

            </div>

            <div className='md:flex-1'>
                <Logo />
            </div>
        </div>
    )
}

export default About