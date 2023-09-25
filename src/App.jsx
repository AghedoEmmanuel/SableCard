import Card from "./Component/card/Card"
import Debit from "./Component/card/Debit"
import { About, Brand, Credit, Footer, Header } from "./Container"


function App() {
 

  return (
    <div className="overflow-hidden">
      <Header/>
      <Credit/>
      <Card/>
      <Debit/>
      <About/>
      <Brand/>
      <Footer/>
    </div>
  )
}

export default App
