import { NextApiRequest, NextApiResponse } from 'next';
const { Wallet } = require("@hashgraph/sdk");

export default function registerHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fullName, email, password, confirmPassword, walletAddress } = req.body;
    
    // TODO: Validaciones faltantes
    if (password !== confirmPassword) {
      res.status(400).json({ message: 'Passwords do not match' });
      return;
    }

    // Conectarse a la billetera de Hedera
    const wallet = new Wallet();
    
    wallet.requestAccess((response) => {
      if (response.authorized) {
        const publicKey = wallet.getPublicKey();
        console.log("Clave pública de Hedera obtenida:", publicKey);

        // Continúa con la lógica de almacenamiento en la base de datos y respuesta exitosa
        res.status(200).json({ message: 'Registration successful' });
      } else {
        console.log("El usuario no autorizó el acceso a la billetera de Hedera.");
        res.status(400).json({ message: 'User denied wallet access' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}







