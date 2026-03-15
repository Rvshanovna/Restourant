import { HomeHero, NewGallery, PopularDishes, ReservationForm, WhyUs } from '@/modules'

const page = () => {
  return(
    <>
      <HomeHero />
      <PopularDishes />
      <ReservationForm />
      <WhyUs />
      <NewGallery />
    </>
  )
}

export default page