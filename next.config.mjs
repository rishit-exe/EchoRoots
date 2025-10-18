/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const withAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true' || process.env.ANALYZE === '1',
});

const nextConfig = {};

export default withAnalyzer(nextConfig);
