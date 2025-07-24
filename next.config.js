const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['localhost:3000'],
    headers: async () => {
        return [
            {
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    }, {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, POST, PUT, DELETE, OPTIONS',
                    }, {
                        key: 'Access-Control-Allow-Headers',
                        value: 'Content-Type, Authorization',
                    }
                ]
            }
        ]
    }
};
 
module.exports = withNextIntl(nextConfig);