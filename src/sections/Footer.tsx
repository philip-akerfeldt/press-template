const navigation = {
  social: [
    {
      name: 'Email',
      href: '#',
      icon: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          {...props}
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m4.2 5.2l7.56 5.67a.4.4 0 0 0 .48 0L19.8 5.2zm16.6.75l-7.84 5.88a1.6 1.6 0 0 1-1.92 0L3.2 5.95V18.8h17.6zM3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"
          ></path>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          {...props}
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
            ></path>
            <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" d="m17.5 6.51l.01-.011"></path>
          </g>
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: '#',
      icon: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          {...props}
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"></path>
            <path d="M10 12a3 3 0 1 0 3 3V6c.333 1 1.6 3 4 3"></path>
          </g>
        </svg>
      )
    },

    {
      name: 'Threads',
      href: '#',
      icon: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          {...props}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.914 8.128c2.505-2.014 6.11-.94 6.536 2.372c.452 3.514-.45 6.3-3.95 6.3c-3.25 0-3.15-2.8-3.15-2.8c0-3 5.15-3.4 8.15-1.9C23 15.6 19 22 13 22c-4.97 0-9-2.5-9-10S8.03 2 13 2c3.508 0 6.672 1.807 7.835 5.42"
          ></path>
        </svg>
      )
    },
    {
      name: 'Bluesky',
      href: '#',
      icon: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          {...props}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m2.753 4.514l.434 5.853a3.354 3.354 0 0 0 3.345 3.106h.702l-.51.291a5.94 5.94 0 0 0-2.447 2.677a2.655 2.655 0 0 0 .74 3.17l.972.787c1.226.994 3 1.236 4.085.089c.92-.974 1.32-1.914 1.405-2.128q.018-.046.032-.093l.295-.924c.111-.347.176-.707.194-1.07c.018.363.083.723.194 1.07l.295.924q.014.047.032.093c.084.214.486 1.154 1.405 2.128c1.084 1.147 2.859.906 4.085-.088l.971-.788a2.655 2.655 0 0 0 .741-3.17a5.94 5.94 0 0 0-2.447-2.676l-.51-.292h.702a3.354 3.354 0 0 0 3.345-3.106l.434-5.853c.101-1.363-1.373-2.25-2.5-1.477c-1.726 1.18-3.77 2.698-4.565 3.754c-1.41 1.872-2.117 3.559-2.182 3.719c-.065-.16-.772-1.847-2.182-3.72c-.795-1.055-2.84-2.573-4.564-3.754c-1.128-.772-2.602.115-2.5 1.478"
          ></path>
        </svg>
      )
    },
    {
      name: 'Reddit',
      href: '#',
      icon: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width="1em"
          height="1em"
          {...props}
        >
          <path
            fill="currentColor"
            d="M246 104a30 30 0 0 0-50.64-21.76C178 72.75 157 67.17 135.05 66.18l5.89-35.35l21.16 3.26a22 22 0 1 0 2.17-11.81l-27.36-4.21a6 6 0 0 0-6.83 4.93l-7.18 43.09c-22.64.74-44.41 6.38-62.26 16.15a30 30 0 1 0-40 44.66A57 57 0 0 0 18 144c0 21.26 11.74 41.09 33.05 55.84C71.68 214.13 99 222 128 222s56.32-7.87 76.95-22.16C226.26 185.09 238 165.26 238 144a57 57 0 0 0-2.63-17.1A30.16 30.16 0 0 0 246 104m-62-82a10 10 0 1 1-10 10a10 10 0 0 1 10-10m41.15 97.51a6 6 0 0 0-2.46 7.51A45.7 45.7 0 0 1 226 144c0 36.39-44 66-98 66s-98-29.61-98-66a45.6 45.6 0 0 1 3.3-16.94a6 6 0 0 0-2.45-7.55a18 18 0 1 1 23.71-26.1a6 6 0 0 0 7.79 1.7a4 4 0 0 0 .34-.2C80.7 84 103.89 78 128 78c24.1 0 47.28 6 65.29 16.9l.16.11a6 6 0 0 0 8-1.6a18 18 0 1 1 23.71 26.1Zm-59.85 53.68a6 6 0 0 1-2.49 8.11a74.22 74.22 0 0 1-69.62 0a6 6 0 0 1 5.62-10.6a62.2 62.2 0 0 0 58.38 0a6 6 0 0 1 8.11 2.49M88 142a14 14 0 1 1 14-14a14 14 0 0 1-14 14m94-14a14 14 0 1 1-14-14a14 14 0 0 1 14 14"
          ></path>
        </svg>
      )
    }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-2xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mt-16 flex justify-center gap-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-400">
          The content and media on this site may be used for editorial and commercial purposes.
          Usage is permitted at your own risk and responsibility. Corporate Potato assumes no
          liability for third-party use.
        </p>
        <p className="mt-10 text-center text-sm/6 text-gray-400">
          &copy; 2025 Temporary Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
