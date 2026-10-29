import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateOgImage() {
  const logoPath = path.resolve('public/logos/reverta_fullLogoWhite.png');
  const logoBase64 = fs.readFileSync(logoPath).toString('base64');
  const logoDataUri = `data:image/png;base64,${logoBase64}`;

  // 1200 x 630 Open Graph canvas
  const width = 1200;
  const height = 630;

  // Logo aspect ratio is 2441 x 719 (~3.395:1)
  const logoW = 420;
  const logoH = Math.round(logoW / (2441 / 719)); // ~124px
  const logoX = Math.round((width - logoW) / 2);
  const logoY = 90;

  const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#041a13"/>
      <stop offset="50%" stop-color="#06241a"/>
      <stop offset="100%" stop-color="#03130e"/>
    </linearGradient>

    <!-- Top Accent Bar Gradient -->
    <linearGradient id="topBarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="50%" stop-color="#34D399"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>

    <!-- Central Radial Glow -->
    <radialGradient id="centerGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#059669" stop-opacity="0.22"/>
      <stop offset="60%" stop-color="#059669" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#041a13" stop-opacity="0"/>
    </radialGradient>

    <!-- Subtle Grid Pattern -->
    <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" stroke-width="1" stroke-opacity="0.04"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
  <rect width="${width}" height="${height}" fill="url(#gridPattern)"/>
  <rect width="${width}" height="${height}" fill="url(#centerGlow)"/>

  <!-- Top Accent Highlight Bar (Like reference card) -->
  <rect x="0" y="0" width="${width}" height="6" fill="url(#topBarGrad)"/>

  <!-- Subtle Outer Border inside canvas -->
  <rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="0" fill="none" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.15"/>

  <!-- Reverta Full White Logo -->
  <image href="${logoDataUri}" x="${logoX}" y="${logoY}" width="${logoW}" height="${logoH}" preserveAspectRatio="xMidYMid meet" />

  <!-- Slogan / Tagline in Emerald Green -->
  <text 
    x="600" 
    y="278" 
    text-anchor="middle" 
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Plus Jakarta Sans', Helvetica, Arial, sans-serif" 
    font-size="28" 
    font-weight="700" 
    letter-spacing="0.5" 
    fill="#34D399"
  >
    Responsible recycling, made simple.
  </text>

  <!-- Short Description (2 Lines) -->
  <text 
    x="600" 
    y="350" 
    text-anchor="middle" 
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Plus Jakarta Sans', Helvetica, Arial, sans-serif" 
    font-size="22" 
    font-weight="400" 
    fill="#E2E8F0"
  >
    Effortless e-waste collection drives &amp; awareness campaigns for schools,
  </text>
  <text 
    x="600" 
    y="386" 
    text-anchor="middle" 
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Plus Jakarta Sans', Helvetica, Arial, sans-serif" 
    font-size="22" 
    font-weight="400" 
    fill="#E2E8F0"
  >
    residential societies, and workplaces with verified partner handover.
  </text>

  <!-- Subtle Divider Line -->
  <line x1="320" y1="465" x2="880" y2="465" stroke="#10b981" stroke-opacity="0.25" stroke-width="1"/>

  <!-- Footer Metadata (reverta.in · Bengaluru · hello@reverta.in) -->
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Plus Jakarta Sans', Helvetica, Arial, sans-serif" font-size="17" font-weight="500">
    <!-- Domain -->
    <text x="360" y="520" text-anchor="middle" fill="#34D399" font-weight="600">reverta.in</text>
    <circle cx="460" cy="514" r="3" fill="#10B981" fill-opacity="0.6"/>
    
    <!-- Location -->
    <text x="600" y="520" text-anchor="middle" fill="#94A3B8">Bengaluru, Karnataka</text>
    <circle cx="740" cy="514" r="3" fill="#10B981" fill-opacity="0.6"/>

    <!-- Contact Email -->
    <text x="840" y="520" text-anchor="middle" fill="#34D399" font-weight="600">hello@reverta.in</text>
  </g>

</svg>
`;

  const svgBuffer = Buffer.from(svg.trim());
  const outputPath = path.resolve('public/og-image.png');
  const outputJpgPath = path.resolve('public/og-image.jpg');

  await sharp(svgBuffer)
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(outputPath);

  await sharp(svgBuffer)
    .jpeg({ quality: 90 })
    .toFile(outputJpgPath);

  console.log('OG images successfully generated at:');
  console.log('-', outputPath, (fs.statSync(outputPath).size / 1024).toFixed(1), 'KB');
  console.log('-', outputJpgPath, (fs.statSync(outputJpgPath).size / 1024).toFixed(1), 'KB');
}

generateOgImage().catch(console.error);
