

const Navbar = () => {
  return (
    <div>
        <div className="flex md:justify-end items-center md:py-14">
            <a className="md:border-2 md:px-14 md:mr-9 md:py-px md:rounded-2xl bg-white text-white">click</a>
        </div>
        <div className="flex items-center md:pt-20">
            <div className="text-2xl font-extrabold ">
            <h1>Sable.</h1>
            </div>
            <div>
                <ul className="flex items-center space-x-8 md:mx-28 mx-14 md:pl-96">
                    <li>CREDIT</li>
                    <li>DEBIT</li>
                    <li>APP</li>
                    <li>LEARN</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar