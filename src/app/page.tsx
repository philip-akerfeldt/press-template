import BannerImage from '@/sections/BannerImage'
import Description from '@/sections/Description'
import FactSheet from '@/sections/FactSheet'
import Trailer from '@/sections/Trailer'

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-15 px-6 py-6 sm:pt-8 md:gap-24 lg:px-8 lg:py-10">
      {/* Banner Image */}
      <BannerImage />

      {/* Short description + key */}
      <Description />

      {/* Fact Sheet */}
      <FactSheet />

      {/* Trailer - video */}
      <Trailer /> 

      {/* Features */}

      {/* Download Media */}

      {/* About */}

      {/* Contact */}
    </main>
  )
}
