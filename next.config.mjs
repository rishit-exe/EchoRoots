/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true' || process.env.ANALYZE === '1',
});

const nextConfig = {
	// Ensure Turbopack uses this folder as the workspace root
	turbopack: {
		root: path.resolve(__dirname),
	},
};

export default withAnalyzer(nextConfig);
