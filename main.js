const CloudService = "Google Cloud Platform";

const GComputeServices = new Map();

GComputeServices.set("Compute Engine", "A virtual machine (VM) service that lets you choose your operating system, machine type, networking, and gives you full control over the server.");
GComputeServices.set("Cloud Run Function", "A serverless service that lets you deploy codes that responds based on an event without worrying about the server");
GComputeServices.set("Google Kubernetes Engine", "A managed Kubernetes service for deploying, managing, and scaling containerized applications.");
GComputeServices.set("App Engine", "A fully managed Platform-as-a-Service (PaaS) that lets you deploy applications without managing infrastructure.");
GComputeServices.set("Cloud Run","A fully managed serverless platform that runs containerized applications without managing servers.");

const GStorageServices = new Map();

GStorageServices.set("Cloud Storage", "Allows you to store large amount of unstructured file persistently");

// GCP's SQL services
GStorageServices.set("Cloud SQL", "A fully managed SQL service that can be use to store relational data on the Cloud");
GStorageServices.set("Cloud SQL Plus Enterprise", "An enhanced edition of Cloud SQL that provides better performance, higher availability, and improved maintenance capabilities.");
GStorageServices.set("Spanner", "A fully managed SQL service that can be destributed Globally");
GStorageServices.set("AlloyDB", "A fully managed relatinal database service that offers better performance compared to a regular PostgreSQL databases");

//GCP's NoSQL services
GStorageServices.set("Firestore", "A fully managed NoSQL document database designed for web and mobile applications with real-time synchronization and automatic scaling.");
GStorageServices.set("BigTable", "A fully managed NoSQL database that was best used for low latency and high throughput use cases such as analytical applications, Internet of things, and machine learning");
