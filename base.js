import pg from 'pg';
const { Client } = pg;
const connectionString = 'postgresql://postgres:QeqC8GD8CwjSojrE@fully-stunning-koala.data-1.use1.tembo.io:5432/postgres?sslmode=verify-full&sslrootcert=ca.crt';
const client = new Client({
  connectionString,
});
async function query() {
    await client.connect();
    const {rows} = await client.query('SELECT * FROM students');
    console.log(rows);
    await client.end();
}
query().then(() => console.log('done'));