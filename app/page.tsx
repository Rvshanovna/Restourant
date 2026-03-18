import { HomeHero, NewGallery, PopularDishes, ReservationForm, WhyUs } from '@/modules'

const page = () => {
  return(
    <>
    {/* Home page */}
      <HomeHero />
      <PopularDishes />
      <ReservationForm />
      <WhyUs />
      <NewGallery />

      {/* Menu page */}
    </>
  )
}

export default page