import path from 'path'
import { fileURLToPath } from 'url'

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...nextConfig,
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname),
            '@/components': path.resolve(__dirname, 'components'),
            '@/constants': path.resolve(__dirname, 'constants'),
            '@/hooks': path.resolve(__dirname, 'hooks'),
            '@/pages': path.resolve(__dirname, 'pages'),
            '@/public': path.resolve(__dirname, 'public'),
            '@/types': path.resolve(__dirname, 'types'),
            '@/UI': path.resolve(__dirname, 'UI'),
            '@/api': path.resolve(__dirname, 'api'),
        }
        return config
    },
}
