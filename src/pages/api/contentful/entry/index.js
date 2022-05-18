const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getEntry(entryId) {
  return await client.getEntry(entryId);
}

export default async function handler(req, res) {
  // const entry = await getEntry('6Pg8Td483br855i76PGS4r');
  const entry = await getEntry('3UUcurLNgCP3qwPbjiyPPY');
  res.status(200).json(entry);
}
