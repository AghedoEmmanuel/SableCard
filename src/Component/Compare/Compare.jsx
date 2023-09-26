
import compare from '../../assets/compare.svg'
import compare1 from '../../assets/compare1.svg'
import tick from '../../assets/tick.svg'
import lock from '../../assets/lock.svg'

const Compare = () => {
    return (
        <div className='md:px-20 px-2'>
            <div className='py-20 text-center'>
                <h1 className='md:leading-loose font-bold md:text-7xl text-xl'>Compare Sable  .  Compare Sable</h1>
            </div>

            <table className='md:table-auto table-fixed'>

                <thead>
                    <tr>
                        <th className='md:px-32'></th>
                        <th className='md:px-32 pb-8'><img src={compare} /></th>
                        <th className='md:px-32 pb-8'><img src={compare1} /></th>
                    </tr>
                </thead>

                <tbody className='divide-y-2 divide-gray-600'>

                    <tr></tr>

                    <tr>
                        <td>No monthly fees or minimum balance</td>
                        <td className='md:px-32 py-4'><img src={tick} /></td>
                        <td className='md:px-32 py-4'><img src={tick} /></td>
                    </tr>

                    <tr>
                        <td>Deposits FDIC insured up to $250,000</td>
                        <td className='md:px-32 py-4'><img src={tick} /></td>
                        <td className='md:px-32 py-4'><img src={tick} /></td>
                    </tr>

                    <tr>
                        <td>Rewards, cash back & card perks</td>
                        <td className='md:px-32 py-4'><img src={tick} /></td>
                        <td className='md:px-32 py-4'><img src={tick} /></td>
                    </tr>

                    <tr>
                        <td>Send checks & transfer money for free</td>
                        <td className='md:px-32 py-4'><img src={tick} /></td>
                        <td className='md:px-32 py-4'><img src={tick} /></td>
                    </tr>

                    <tr>
                        <td>Build credit history from Day 1</td>
                        <td className='md:px-32 py-4'><img src={tick} /></td>
                        <td className='md:px-32 py-4'><img src={lock} /></td>
                    </tr>

                    <tr>
                        <td>No credit check required for sign up</td>
                        <td className='md:px-32 py-4'><img src={tick} /></td>
                        <td className='md:px-32 py-4'><img src={lock} /></td>
                    </tr>

                    <tr>
                        <td>Cost per year</td>
                        <td className='md:px-32 py-4'>$0 <span className='lowercase'>/year</span></td>
                        <td className='md:px-32 py-4'>$0 <span>/year</span></td>
                    </tr>


                </tbody>

                <tr>
                    <td className=''></td>
                    <td className='md:px-28 md:py-4 '><a className='border-2 rounded-3xl py-2 px-4 bg-teal-600 border-black text-black'>Get Credit & Debit</a></td>
                    <td className='md:px-28 py-4'><a className='border-2 rounded-3xl py-2 px-4 bg-teal-600 border-black text-black'>Get Debit</a></td>
                </tr>

            </table>
        </div>
    )
}

export default Compare