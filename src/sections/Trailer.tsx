import Button from '@/components/Button'
import { YouTubeEmbed } from '@next/third-parties/google'

const Trailer = () => {
  return (
    <div data-section="trailer" className="flex flex-col items-center gap-6">
      <h2>Trailer</h2>
      <YouTubeEmbed videoid="ogfYd705cRs" params="controls=0" />
      <Button>Copy Embed Code</Button>
    </div>
  )
}

export default Trailer
