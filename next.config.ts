import type { NextConfig } from 'next';
import path from 'path';

const sassPath = process.env.SASS_PATH || 'src';

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), sassPath)]
  }
};

export default nextConfig;
