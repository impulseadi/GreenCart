import BestSeller from "../components/BestSeller"
import BottomBanner from "../components/BottomBanner"

import MainBanner from "../components/MainBanner"
import NewsLetter from "../components/NewsLetter"

const Categories = React.lazy(() => import("../components/Categories"));
const Home = () => {
  return (
    <div className="mt-10">
        <MainBanner />
        <Suspense fallback={<div>Loading...</div>}>
        <Categories />
      </Suspense>
        <BestSeller />
        <BottomBanner />
        <NewsLetter/>
    </div>
  )
}

export default Home