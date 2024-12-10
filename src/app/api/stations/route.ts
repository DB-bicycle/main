import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT 
        s.stationID,
        s.stationName,
        s.rackTotCnt,
        b.parkingBikeTotCnt,
        b.shared,
        l.STA_LOC,
        l.STA_ADD1,
        l.STA_ADD2,
        l.STA_LAT,
        l.STA_LONG
      FROM Station s
      JOIN BikeStatus b ON s.stationID = b.stationID
      JOIN StationLocation l ON s.stationID = l.stationID
    `);
    
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stations' },
      { status: 500 }
    );
  }
}