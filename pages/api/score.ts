import type { NextApiRequest, NextApiResponse } from 'next';
import { topScores, upsertScore } from 'lib/api/score';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const result = await topScores();
            return res.status(200).json(result);
        } catch (e: any) {
            console.log(e);
            return res.status(500).json({
                error: e.toString()
            });
        }
    } else if (req.method === 'POST') {
        const { score, name } = req.body;
        if (!score || !name) {
            return res.status(400).json({
                error: 'Bad Request'
            });
        }
        try {
            const result = await upsertScore({ score, name });
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
