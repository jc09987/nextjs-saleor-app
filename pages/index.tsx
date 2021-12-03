import NavigationBar from '../src/components/NavigationBar'
import Footer from '../src/components/Footer'
import BigBanner from '../src/components/BigBanner'
import SmallBanner from '../src/components/SmallBanner'
import { FeaturedCategory } from '../src/components/FeaturedCategory'
import FeaturedProduct from '../src/components/FeaturedProduct'
import LatestProducts from '../src/components/LatestProducts'
import Categories from '../src/components/Categories'
import CategoryHeader from '../src/components/CategoryHeader'
import Cart from '../src/components/Cart'
import Product from '../src/components/Product'
import ProductDescription from '../src/components/ProductDescription'
import CategoryFilters from '../src/components/CategoryFilters'

export default function Home() {
  return (
    <div>
      <SmallBanner />
      <NavigationBar />
      <FeaturedCategory />
      <BigBanner />
      {/* <CategoryHeader /> */}
      <CategoryFilters />
      <LatestProducts />
      {/* <FeaturedProduct /> */}
      <Categories />
      <Cart />
      <Product />
      {/* <ProductDescription /> */}
      <Footer />
    </div>
  )
}
