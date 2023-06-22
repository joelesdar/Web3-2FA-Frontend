import { NextApiRequest, NextApiResponse } from 'next';
import speakeasy from "speakeasy"

export default function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method==='POST'){
    const {email, password, otpCode } = req.body

    const secret = speakeasy.generateSecret({length: 20})
    const secretBase32 = secret.base32

    const isValid = speakeasy.totp.verify({
      secret: secretBase32,
      encoding: 'base32',
      token: otpCode,
      window: 1,
    })

    if (isValid){
      res.status(200).json({message: 'Authentication succesful'})
    }else {
      res.status(401).json({message: 'Invalid authentication code'})
    }
  }else {
    res.status(405).json({message: 'Method Not Allowed'})
  }
}