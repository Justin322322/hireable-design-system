/**
 * SVG filter for inner shadow effect on text
 * Used by hero sections for text styling
 */
export const InnerShadowFilter = () => (
  <svg width="0" height="0" className="absolute block">
    <defs>
      <filter id="inner-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feFlood floodColor="black" result="flood" />
        <feComposite
          operator="out"
          in="flood"
          in2="SourceAlpha"
          result="inverse"
        />
        <feGaussianBlur stdDeviation="2" in="inverse" result="blurred" />
        <feOffset dx="0" dy="1" in="blurred" result="offset" />
        <feComposite
          operator="in"
          in="offset"
          in2="SourceAlpha"
          result="shadow"
        />
        <feComponentTransfer in="shadow" result="shadow-opacity">
          <feFuncA type="linear" slope="0.4" />
        </feComponentTransfer>
        <feComposite operator="over" in="shadow-opacity" in2="SourceGraphic" />
      </filter>
    </defs>
  </svg>
);
