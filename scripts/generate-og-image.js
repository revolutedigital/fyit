#!/usr/bin/env node

/**
 * Generate Open Graph Image for Social Media
 * Creates a 1200x630 PNG image with FYIT branding
 */

const fs = require('fs');
const { createCanvas, registerFont } = require('canvas');

async function generateOGImage() {
  // Create canvas
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#0E0E0E');
  gradient.addColorStop(1, '#1a1a1a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Accent rectangle (left side)
  ctx.fillStyle = 'rgba(0, 224, 209, 0.1)';
  ctx.fillRect(0, 0, 400, height);

  // Cyber lines
  ctx.strokeStyle = 'rgba(0, 224, 209, 0.3)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(0, 100 + i * 100);
    ctx.lineTo(width, 150 + i * 100);
    ctx.stroke();
  }

  // Main title - FYIT
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 90px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('FYIT', width / 2, 220);

  // Subtitle
  ctx.fillStyle = '#00E0D1';
  ctx.font = 'bold 50px Arial, sans-serif';
  ctx.fillText('Contador de Calorias com IA', width / 2, 310);

  // Description
  ctx.fillStyle = '#C0C0C0';
  ctx.font = '32px Arial, sans-serif';
  ctx.fillText('Tire foto do prato • Descubra calorias em 10s', width / 2, 400);

  // CTA Box
  ctx.fillStyle = '#00E0D1';
  ctx.fillRect(450, 470, 300, 70);

  // CTA Text
  ctx.fillStyle = '#0E0E0E';
  ctx.font = 'bold 34px Arial, sans-serif';
  ctx.fillText('R$ 197/ano', width / 2, 505);

  // Icon emoji (top left)
  ctx.font = '100px Arial';
  ctx.fillText('📸', 140, 320);

  // Icon emoji (bottom right)
  ctx.font = '80px Arial';
  ctx.fillText('💪', 1050, 520);

  // Save to file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('og-image.png', buffer);

  console.log('✅ OG Image generated successfully: og-image.png (1200x630)');
  console.log(`   File size: ${(buffer.length / 1024).toFixed(1)}KB`);
}

// Run
generateOGImage().catch(err => {
  console.error('❌ Error generating OG image:', err);
  process.exit(1);
});
