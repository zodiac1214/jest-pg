# jest-pg
Create database scheme for each test and delete database after test


# Usage
jest.config.js
``` 
...
globalSetup: "jest-pg/setupDatabase",
globalTeardown: "jest-pg/teardownDatabase",
...
```
