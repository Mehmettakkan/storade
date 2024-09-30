/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // src dizini içindeki tüm js, jsx, ts, tsx dosyalarını tarar
    './pages/**/*.{js,jsx,ts,tsx}', // pages dizini içindeki dosyaları tarar
    './components/**/*.{js,jsx,ts,tsx}', // components dizini içindeki dosyaları tarar
    './app/**/*.{js,jsx,ts,tsx}', // app dizini içindeki dosyaları tarar (eğer App Router kullanıyorsanız)
    './public/**/*.html' // public dizini içindeki HTML dosyalarını tarar
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}