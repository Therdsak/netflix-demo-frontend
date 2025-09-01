# --------------------------
# Builder stage
# --------------------------
    FROM node:18-alpine AS builder
    WORKDIR /app
    
    # Copy package.json + lock file
    COPY package*.json ./
    RUN npm ci
    
    # Copy all source code
    COPY . .
    
    # Build argument (มาจาก GitHub Secret)
    ARG NEXT_PUBLIC_API_URL
    ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
    
    # Build Next.js
    RUN npm run build
    
    # --------------------------
    # Runner stage
    # --------------------------
    FROM node:18-alpine AS runner
    WORKDIR /app
    
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/package.json ./package.json
    
    ENV NODE_ENV=production
    ENV PORT=3000
    EXPOSE 3000
    
    CMD ["npm", "start"]
    