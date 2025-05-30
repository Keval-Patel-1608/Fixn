import express from 'express';
import {
  createRequest,
  getAllRequests,
  getRequestById,
  acceptRequest,
  rejectRequest,
  deleteRequest,
  getRequestsByTaskId,
} from '../controllers/request.controller.js';

const router = express.Router();

// **POST /api/request**
router.post('/request', createRequest); // Create a new request (used by service providers to apply for a task)


// **GET /api/requests**
router.get('/requests', getAllRequests); // Get a list of all requests (for admin or task owners to view)


// **GET /api/request/:requestId**
router.get('/request/:requestId', getRequestById); // Get details of a specific request by request ID


// **PUT /api/request/:requestId/accept**
router.post('/request/accept', acceptRequest); // Accept a request (used by task owner)


// **PUT /api/request/:requestId/reject**
router.post('/request/reject', rejectRequest);  // Reject a request (used by task owner)


// **DELETE /api/request/:requestId**
router.delete('/request/:requestId', deleteRequest);  // Delete a request by ID (admin or task owner can delete)

// **Get /api/request/:taskId**
router.get('/requests/task/:taskId', getRequestsByTaskId);  // Get All request by taskID

export default router;
