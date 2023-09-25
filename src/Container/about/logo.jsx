import company from '../../assets/company.svg'
import company2 from '../../assets/company2.svg'

const logo = () => {
  return (
    <div className='flex bg-gray-200'>
        <img src={company} alt='company' className='md:px-20 md:w-[20rem] px-4'/>
        <img src={company2} className='md:px-20 md:w-[20rem] px-4'/>
    </div>
  )
}

export default logo