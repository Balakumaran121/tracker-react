/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      Color :{
        'primary':'5F2EEA',
        'secondary':'1CC8EE',
        'success' : '#00BA88',
        'error' : '#ED2E7E',
        'warning':'#F4B740',
        'gradient_warning':'#AB5FFE',
        'gradient_secondary':'#5A8ADE',
        'gradient_accent':'#F57D6B',
        'title_active':'#14142A',
        'body':'#4E4B66',
        'label':'#6E7191',
        'placeholder':'#A0A3BD',
        'line':'#D9DBE9',
        'input_background':'#EFF0F6',
        'background':'#F7F7FC',
        'off-white':'#FCFCFC',


      }
    },
  },
  plugins: [],
}
