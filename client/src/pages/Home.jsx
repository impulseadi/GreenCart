import React, { Suspense } from "react";
import BottomBanner from "../components/BottomBanner";
import MainBanner from "../components/MainBanner";
import NewsLetter from "../components/NewsLetter";

// Lazy load the Categories component
const Categories = React.lazy(() => import("../components/Categories"));
const BestSeller = React.lazy(() => import("../components/BestSeller"));

const Home = () => {
  return (
    <div className="mt-10">
        <MainBanner />
        
        {/* Suspense to handle loading state of Categories */}
        <Suspense fallback={<div>Loading...</div>}>
            <Categories />
        </Suspense>
        
       <Suspense fallback={<div>Loading...</div>}>
            <BestSeller/>
        </Suspense>
        <BottomBanner />
        <NewsLetter />
    </div>
  );
};

export default Home;
