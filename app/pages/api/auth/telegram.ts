import crypto from 'crypto';

const BOT_TOKEN: string = process.env.TELEGRAM_BOT_TOKEN || "";

export default function handler(req: any, res: any) {
  const { hash, ...data } = req.query;
  const secret = crypto.createHash('sha256').update(BOT_TOKEN).digest();
  const checkString = Object.keys(data)
    .sort()
    .map((key) => `${key}=${data[key]}`)
    .join('\n');
  const hmac = crypto.createHmac('sha256', secret).update(checkString).digest('hex');

  if (hmac === hash) {
    // Authorization successful, print the user data
    console.log('Authorization successful:', data);
    
    // Extract and print user details
    const { id, first_name, last_name, username, photo_url } = data;
    console.log(`User ID: ${id}`);
    console.log(`First Name: ${first_name}`);
    console.log(`Last Name: ${last_name}`);
    console.log(`Username: ${username}`);
    console.log(`Photo URL: ${photo_url}`);
    
    res.status(200).json({ message: 'Authorization successful', user: data });
  } else {
    console.log('Unauthorized access attempt:', data);
    res.status(401).json({ message: 'Unauthorized access detected' });
  }
}