const generateSvgBackground = (color: string) => {
  return `
      <svg width="295" height="295" viewBox="0 0 295 295" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="147.266" cy="147.267" r="96.9459" stroke="${color}" stroke-opacity="0.65" stroke-width="0.5"/>
        <circle cx="147.266" cy="147.267" r="109.905" stroke="${color}" stroke-opacity="0.6" stroke-width="0.5"/>
        <circle cx="147.266" cy="147.267" r="129.345" stroke="${color}" stroke-opacity="0.4" stroke-width="0.5"/>
        <circle cx="147.267" cy="147.267" r="146.767" stroke="${color}" stroke-opacity="0.2"/>
      </svg>
    `;
};
export default generateSvgBackground;
