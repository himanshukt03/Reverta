import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateOgImage() {
  const logoPath = path.resolve('public/logos/reverta_fullLogoWhite.png');
  const logoBase64 = fs.readFileSync(logoPath).toString('base64');
  const logoDataUri = `data:image/png;base64,${logoBase64}`;

  // 1200 x 630 Canvas
  const width = 1200;
  const height = 630;

  // Logo: 540px wide, aspect ratio ~3.395 (height = 159px)
  const logoW = 520;
  const logoH = Math.round(logoW / (2441 / 719)); // 153px
  const logoX = Math.round((width - logoW) / 2); // 340px
  const logoY = 65;

  const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <!-- Crisp top accent gradient -->
    <linearGradient id="topBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="50%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>

    <!-- Clean, subtle premium background gradient matching website footer (No AI slop / no cloudy glow) -->
    <linearGradient id="cleanBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0F1722"/>
      <stop offset="100%" stop-color="#090E15"/>
    </linearGradient>
  </defs>

  <!-- Clean dark solid background -->
  <rect width="${width}" height="${height}" fill="url(#cleanBg)"/>

  <!-- Top accent line (4px) -->
  <rect x="0" y="0" width="${width}" height="5" fill="url(#topBar)"/>

  <!-- Reverta Logo in crisp white -->
  <image href="${logoDataUri}" x="${logoX}" y="${logoY}" width="${logoW}" height="${logoH}" preserveAspectRatio="xMidYMid meet" />

  <!-- Big Bold White Tagline -->
  <text 
    x="600" 
    y="280" 
    text-anchor="middle" 
    font-family="'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif" 
    font-size="36" 
    font-weight="700" 
    letter-spacing="0.2" 
    fill="#FFFFFF"
  >
    Responsible recycling, made simple.
  </text>

  <!-- Big Clear White Description -->
  <text 
    x="600" 
    y="352" 
    text-anchor="middle" 
    font-family="'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif" 
    font-size="28" 
    font-weight="500" 
    fill="#FFFFFF"
  >
    Effortless e-waste collection drives &amp; awareness campaigns for schools,
  </text>
  <text 
    x="600" 
    y="396" 
    text-anchor="middle" 
    font-family="'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif" 
    font-size="28" 
    font-weight="500" 
    fill="#FFFFFF"
  >
    residential societies, and workplaces with verified partner handover.
  </text>

  <!-- Subtle divider line -->
  <line x1="280" y1="470" x2="920" y2="470" stroke="#10B981" stroke-opacity="0.35" stroke-width="1.5"/>

  <!-- Footer Row (reverta.in · Bengaluru, Karnataka · hello@reverta.in) - All readable and white -->
  <g font-family="'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif" font-size="22" font-weight="600">
    <!-- Domain -->
    <text x="320" y="525" text-anchor="middle" fill="#FFFFFF">reverta.in</text>
    <circle cx="435" cy="518" r="3.5" fill="#10B981"/>
    
    <!-- Location -->
    <text x="600" y="525" text-anchor="middle" fill="#FFFFFF">Bengaluru, Karnataka</text>
    <circle cx="765" cy="518" r="3.5" fill="#10B981"/>

    <!-- Contact Email -->
    <text x="880" y="525" text-anchor="middle" fill="#FFFFFF">hello@reverta.in</text>
  </g>

</svg>
`;

  const svgBuffer = Buffer.from(svg.trim());
  const outputPath = path.resolve('public/og-image.png');
  const outputJpgPath = path.resolve('public/og-image.jpg');

  // Generate PNG
  await sharp(svgBuffer)
    .png({ quality: 100, compressionLevel: 8 })
    .toFile(outputPath);

  // Generate JPEG (very fast for WhatsApp preview)
  await sharp(svgBuffer)
    .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
    .toFile(outputJpgPath);

  console.log('Regenerated OG images:');
  console.log('-', outputPath, (fs.statSync(outputPath).size / 1024).toFixed(1), 'KB');
  console.log('-', outputJpgPath, (fs.statSync(outputJpgPath).size / 1024).toFixed(1), 'KB');
}

generateOgImage().catch(console.error);
