import { createThirdwebClient } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
//const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;
const clientId = "55e58fc76676e6fb80667cad8574afaa";
export const client = createThirdwebClient({
  clientId: clientId,
});
