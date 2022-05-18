const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getEntries() {
  return await client.getEntries();
}

export async function getServiceOffices() {
  return await client.getEntries({ 'content_type': 'serviceOffices', order: 'fields.title' });
}

export default async function handler({ query: { type }}, res) {
  console.log(type);
  let entries = null;
  const lowerType = type?.toLowerCase();
  switch (lowerType) {
    case 'serviceoffices':
      entries = await getServiceOffices();
      break;
    default:
      entries = await getEntries();
  }

  res.status(200).json(entries);
}
