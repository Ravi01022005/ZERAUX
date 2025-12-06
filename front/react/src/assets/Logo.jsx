import React from 'react'

export default function Logo() {
  return (
    // <?xml version="1.0" encoding="UTF-8"?>
<svg     className='logo' style={{paddingRight:"80px"}}
 width="280" height="64" viewBox="0 0 280 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ZERAUX">
  {/* <defs> */}
    {/* <!-- Colors --> */}
    {/* <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#C9A86A"/>
      <stop offset="100%" stopColor="#B8914E"/>
    </linearGradient>
  </defs> */}

  {/* <!-- Background (transparent for placement over black) --> */}
  <rect x="0" y="0" width="280" height="64" fill="none"/>

  {/* <!-- Wordmark --> */}
  <text
    x="140"
    y="44"
    textAnchor="middle"
    fontFamily="Playfair Display, Georgia, 'Times New Roman', serif"
    fontSize="36"
    fontWeight="400"
    letterSpacing="2"
    fill="#FFFFFF"
    >
    ZERAUX
  </text>
  {/* <!-- Subtle luxury accent underline (gold) --> */}
  <rect x="66" y="52" width="148" height="2" fill="url(#gold)" rx="1"/>
</svg>
  )
}
