import express from 'express';
import http from 'http';

const router = express.Router();

/* GET people listing by nationality. */
router.get('/:country', (req, res) => {
  const country = req.param('country');
});

export default router;
