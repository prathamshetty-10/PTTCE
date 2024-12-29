import { contact} from '../Controllers/AllControllers.js';
  import express from 'express'

  const router = express.Router();
  
  router.post("/contact", contact); 

  export default router;