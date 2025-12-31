import type { NextConfig } from "next";

console.log('\n=== BUILD TIME ENV CHECK ===');
console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'SET (' + process.env.DATABASE_URL.substring(0, 30) + '...)' : 'NOT SET');
console.log('NEXT_NEON_LAUNCHPAD_CLAIM_URL:', process.env.NEXT_NEON_LAUNCHPAD_CLAIM_URL || 'NOT SET');
console.log('\nAll NEON/DATABASE env vars:');
Object.keys(process.env)
  .filter(k => k.includes('NEON') || k.includes('DATABASE') || k.includes('CLAIM'))
  .forEach(k => console.log(`  ${k}: ${process.env[k]?.substring(0, 50)}...`));
console.log('============================\n');

const nextConfig: NextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_NEON_LAUNCHPAD_CLAIM_URL: process.env.NEXT_NEON_LAUNCHPAD_CLAIM_URL,
  },
};

export default nextConfig;
