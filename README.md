# deprecated check the new mono repo https://github.com/zodiac1214/devoops

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
