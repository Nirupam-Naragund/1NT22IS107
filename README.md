A simple, scalable microservice that creates short URLs from long links and tracks metadata such as expiration and usage statistics.


Architecture Overview


Backend: Node.js + Express.js

Database: MongoDB Atlas (cloud-based) for easy scaling and persistence

Authentication: Bearer token used for logging to external logging service

Logger: External logging  via a custom logger module

![alt text](<Screenshot 2025-08-07 121823-1.png>) ![alt text](<Screenshot 2025-08-07 121912-1.png>) ![alt text](<Screenshot 2025-08-07 121858-1.png>)