// src/app/api/health/route.ts
// Health check endpoint for monitoring and load balancers

import { NextResponse } from 'next/server';

export async function GET() {
  const healthcheck = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version || '1.0.0'
  };

  try {
    // You can add additional checks here:
    // - Database connectivity
    // - External API availability
    // - Disk space
    // - Memory usage

    return NextResponse.json(healthcheck, { status: 200 });
  } catch (error) {
    const errorResponse = {
      status: 'error',
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error'
    };

    return NextResponse.json(errorResponse, { status: 503 });
  }
}
