const fs = require('fs');
const path = require('path');

// Files to convert
const files = [
  'heroImage.jpg',
  'event-placeholder.jpg',
  'sdgGoal3.jpg',
  'sdgGoal4.jpg',
  'sdgGoal11.jpg',
  'sdgGoal17.jpg',
  'donate-icon.png'
];

const assetsDir = path.join(__dirname, 'src', 'assets');

console.log('WebP conversion script ready.');
console.log('Files to convert:', files);
console.log('\nPlease install a conversion tool:');
console.log('- For ImageMagick: sudo apt install imagemagick');
console.log('- For webp tools: sudo apt install webp');
console.log('- Or use an online converter');
console.log('\nThen run one of these commands in the assets directory:');
console.log('\nUsing ImageMagick convert:');
files.forEach(file => {
  const output = file.replace(/\.(jpg|png)$/, '.webp');
  console.log(`  convert "${file}" "${output}"`);
});
console.log('\nUsing cwebp:');
files.forEach(file => {
  const output = file.replace(/\.(jpg|png)$/, '.webp');
  console.log(`  cwebp -q 85 "${file}" -o "${output}"`);
});
