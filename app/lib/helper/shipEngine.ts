// import ShipEngine from "shipengine";

// class ShipEngineClient {
//   private static instance: ShipEngine;
  
//   static getInstance() {
//     if (!this.instance) {
//       const apiKey = process.env.SHIPENGINE_API_KEY;
      
//       if (!apiKey) {
//         throw new Error(`
//           ❌ SHIPENGINE_API_KEY missing!
//           Check:
//           1. .env.local file exists in root
//           2. Key is added to Vercel/Netlify
//           3. Server restarted after adding key
//         `);
//       }

//       this.instance = new ShipEngine({ 
//         apiKey,
//         retries: 3,
//         timeout: 5000
//       });
//     }
//     return this.instance;
//   }
// }

// export const shipEngine = ShipEngineClient.getInstance();

import ShipEngine from "shipengine";

export const Shipengine = new ShipEngine({
    apiKey: process.env.SHIPENGINE_API_KEY as string});