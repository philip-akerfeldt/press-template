const items: { title: string; content: string[] }[] = [
  { title: 'Game title', content: ['Sample Title'] },
  { title: 'Developer & Publisher', content: ['John Doe Development'] },
  { title: 'Genre', content: ['RTS'] },
  { title: 'Platforms', content: ['Steam (PC)'] },
  { title: 'Playtime', content: ['1–100 hours'] },
  { title: 'Price', content: ['To be announced'] },
  { title: 'Release Date', content: ['To be announced'] }
]

const socialMedia = ['Instagram', 'TikTok', 'Threads', 'Bluesky', 'Reddit']

const FactSheet = () => {
  const column1 = items.slice(0, 2)
  const column2 = items.slice(2, 4)
  const column3 = items.slice(4, 7)

  return (
    <div className="flex flex-col" data-section="fact-sheet">
      <div className="flex w-full flex-wrap bg-gray-700 p-8 text-white md:gap-y-8">
        {[column1, column2, column3].map((group, i) => (
          <div key={i} className="flex basis-full flex-col sm:basis-1/2 md:px-4 lg:basis-1/4">
            {group.map((item) => (
              <div key={item.title} className="mb-6">
                <p className="text-base font-semibold">{item.title}</p>
                {item.content.map((text, index) => (
                  <p key={index} className="mt-1 text-sm">
                    {text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
        <div className="flex basis-full flex-col sm:basis-1/2 md:px-4 lg:basis-1/4">
          <p className="mb-2 text-base font-semibold">Social media</p>
          {socialMedia.map((platform) => (
            <p key={platform} className="mt-1 text-sm underline">
              {platform}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FactSheet
