import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #C9A961 0%, #A08840 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1a1a1a',
          fontWeight: 'bold',
          fontFamily: 'serif'
        }}
      >
        A
      </div>
    ),
    {
      ...size
    }
  )
}
