const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

async function run() {
  const connectionString = 'postgresql://postgres:theStudentGrowthHub@db.eqxllnshwaclbqxlqvsl.supabase.co:5432/postgres';
  console.log('Connecting to Supabase Postgres...');
  
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 10000,
  });

  try {
    await client.connect();
    console.log('Successfully connected to Postgres!');

    const sqlPath = path.join(__dirname, 'supabase', 'schema.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    console.log('Executing schema.sql...');
    await client.query(sql);
    console.log('Schema executed successfully!');

    const res = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name;
    `);
    console.log('Public tables in DB:', res.rows.map(r => r.table_name));

    const countRes = await client.query('SELECT count(*) FROM public.opportunities;');
    console.log('Opportunities count:', countRes.rows[0].count);

  } catch (err) {
    console.error('Database connection/execution error:', err.message);
  } finally {
    await client.end().catch(() => {});
  }
}

run();
