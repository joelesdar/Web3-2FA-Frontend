import { Client, PrivateKey, AccountId, TransactionId, Hbar, Status } from "@hashgraph/sdk";

// Función para enviar el código a la billetera de Hedera
async function sendCodeToWallet(email: string, otpCode: string) {
  try {
    // Configura el cliente y las claves necesarias
    const client = Client.forTestnet(); // Reemplaza por la configuración adecuada

    // Realiza la lógica para obtener la cuenta y la clave privada asociadas a la billetera
    const walletAccountId = AccountId.fromString("<WALLET_ACCOUNT_ID>"); // Reemplaza con el ID de cuenta de la billetera
    const walletPrivateKey = PrivateKey.fromString("<WALLET_PRIVATE_KEY>"); // Reemplaza con la clave privada de la billetera

    // Crea una transacción y firma con la clave privada de la billetera
    const transactionId = await new TransactionId()
      .setAccountId(walletAccountId)
      .setTransactionValidDuration(Duration.minutes(5)) // Reemplaza con la duración adecuada
      .build(client);
      
    const transaction = await new CryptoTransferTransaction()
      .setTransactionId(transactionId)
      .addSender(walletAccountId, new Hbar(1)) // Envía 1 Hbar (ajusta según tus necesidades)
      .addRecipient(AccountId.fromString("<RECIPIENT_ACCOUNT_ID>"), new Hbar(0)) // Reemplaza con el ID de cuenta del destinatario
      .build(client);

    const signedTransaction = await transaction.sign(walletPrivateKey);

    // Envía la transacción a la red de Hedera
    const transactionResponse = await signedTransaction.execute(client);

    // Verifica el resultado de la transacción
    if (transactionResponse.status !== Status.Success) {
      throw new Error("Failed to send code to wallet");
    }

    // Realiza acciones adicionales según tus necesidades

    console.log(`Código enviado a la billetera de Hedera asociada a ${email}`);
  } catch (error) {
    console.error("Error sending code to wallet:", error);
  }
}