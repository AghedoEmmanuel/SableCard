import debit from '../../assets/sable-card-debit-render-p-500.png.svg'

const Debit = () => {
  return (
    <div className="text-white flex md:pt-20 md:px-32 md:flex-row flex-col">
        <img src={debit} alt='Sable debit card' className='w-[433.42px]'/>
       <div className='md:py-32 md:px-24 px-9 py-9'>
       <p className='text-black text-3xl'>Get a bank account & <br/>debit card in <span className='text-teal-700'>five minutes.</span></p>
       </div>
    </div>
  )
}

export default Debit