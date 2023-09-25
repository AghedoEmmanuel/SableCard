import App from "../../Component/Application/App"
import Compare from "../../Component/Compare/Compare"
import Review from "../../Component/Review/Review"


const Brand = () => {
  return (
    <div className="bg-black text-white">
        <Compare/>
        <Review/>
        <App/>
    </div>
  )
}

export default Brand