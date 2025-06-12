import Image from 'next/image'

const BannerImage = () => {
  return (
    <div className="relative h-60 w-full" data-section="banner-image">
      <Image src="/game-image.jpg" fill alt="testing alt tag" className="aspect-3/1 object-cover" />
    </div>
  )
}

export default BannerImage
