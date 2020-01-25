const btnBandingkan = document.querySelector('button[type="submit"]');
btnBandingkan.addEventListener('click', () => {
   let kataSatu = document.querySelector('#kataSatu').value;
   let kataDua = document.querySelector('#kataDua').value;
   let result = document.querySelector('#result');

   const isKataAnagram = (kataSatu, kataDua) => {
         const normalisasiKata = string => {
            return string
               .toLowerCase()
               .replace(/[^a-z0-9]/gi, '')
               .split('')
               .sort()
               .join('');
         };
         return normalisasiKata(kataSatu) === normalisasiKata(kataDua);
      }
   (isKataAnagram(kataSatu, kataDua)) ? result.textContent = "Ya Anagram" : result.textContent = "Bukan Anagram";
})