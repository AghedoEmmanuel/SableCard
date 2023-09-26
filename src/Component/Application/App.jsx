
import download from '../../assets/downloadsvg.svg'
import app from '../../assets/app.svg'

const App = () => {
    return (
       <div className='md:px-24'>
        <div className='relative'>
        <img src={app} className='rounded-3xl'/>

        <div className='absolute md:top-40 md:left-8 flex md:px-14 top-3 right-3'>
            <div className='md:px-20 md:space-y-6 px-6'>
                <h1 className='font-bold md:text-xl md:tracking-wider text-zinc-900'>Join-over <span className='md:text-5xl'>400,000</span> accounts</h1>
                <p className='text-zinc-900'>Download Sable: effortless, borderless banking for a more connected world.</p>
            </div>
            <div className='md:py-36 md:px-24 cursor-pointer py-12'>
                <img src={download}/>
            </div>
        </div>
        </div>
       </div>
    )
}

export default App