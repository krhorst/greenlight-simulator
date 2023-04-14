import type { NextApiRequest, NextApiResponse } from 'next';
import { randomMovies } from 'lib/api/movie';
import { getSession } from 'next-auth/react';
import { getMdxSource } from 'lib/api/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
      try {
          const result = await randomMovies();
      return res.status(200).json(result);
    } catch (e: any) {
      console.log(e);
      return res.status(500).json({
        error: e.toString()
      });
    }
  } else {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
