# --------------------------------------------------
# 🔧 Build Stage
# --------------------------------------------------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app
    
# Copy only package files first (for better cache)
COPY package.json package-lock.json* yarn.lock* ./
    
# Install dependencies
RUN npm install
# Or if you're using yarn
# RUN yarn install
    
# Copy full source code
COPY . .
    
# Copy environment file for production
COPY .env.production .env.production
    
# Set environment and build Next.js
ENV NODE_ENV=production
RUN npm run build
    
# --------------------------------------------------
# 🚀 Production Stage
# --------------------------------------------------
FROM node:18-alpine AS runner
    
WORKDIR /app
    
# Copy only the necessary build output & deps
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env.production ./.env.production
    
# Environment configuration
ENV NODE_ENV=production
ENV PORT=3000
    
EXPOSE 3000
    
# Start the Next.js app
CMD ["npm", "start"]
    