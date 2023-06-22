import { NextApiRequest, NextApiResponse } from 'next';

export default function registerHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
   const {fullName, email, password, confirmPassword, walletAddress} = req.body
   //TODO: Validaciones faltantes
   if (password !== confirmPassword){
    res.status(400).json({message: 'Password do not match'})
    return
   }

   //Almacenamiento en DB

   res.status(200).json({message: 'Registration succesful'})
  }else{
    res.status(405).json({message: 'Method Not Allowed'})
  }
}