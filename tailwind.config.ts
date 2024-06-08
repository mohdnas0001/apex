import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['"Jakarta Sans"', 'sans-serif'], 
      },
      screens: {
        'xl': '1200px',
      },
      maxWidth: {
        'screen-xl': '1200px',
      },
      boxShadow: {
        'purple-mdlg': '0px 16px 20px rgba(128, 78, 214, 0.1), 0px 1px 3px rgba(128, 78, 214, 0.15)'
      }
    },
  },
  plugins: [],
});
