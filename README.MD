# CMPE-281 - Enterprise 
#Enterprise Resource Management

# CMPE-281 - CLOUD TECHNOLOGIES 


PROFESSOR - Andrew Bond


SUBMITTED BY : 
Varun Alla (Team leader) 
Aakanksha Gupta 
Abhishek Yadav
Hasini Reddy 


SAN JOSE STATE UNIVERSITY 

COMPUTER ENGINEERING DEPARTMENT

https://web.nibbleproject.xyz/


##ARCHITECTURE:
![Alt text](https://github.com/varunalla-sjsu/nibble/blob/main/screenshots/NibbleProject.jpeg"Project Architecture")

##TECHNOLOGIES/PLATFORMS:
------
FRONTEND: ANGULAR, ANGULAR MATERIAL


BACKEND: Node.js

AWS SERVICES: AWS EC2, AWS LAMBDA, AWS RDS 

SOCIAL INTEGRATIONS: TWITTER

SSO: Auth0

MFA: Duo

CI/CD: Jenkins. 


Dev Environement: VISUAL STUDIO CODE 

##ROLES:
----
Admin
Employee
Manager 
HR

##BASIC SETUP STEPS: 
###UI SETUP STEPS: 
-----

```
cd ui/nibbleproject
npm install 
ng build
```
###Backend SETUP STEPS: 
```
cd backend/core
npm ci 
node .
```
Environment File Content
```
secret=
clientsecret=
clientId=
issuerBaseURL=
SERVER_PORT=
DB_USER=
DB_PASS=
DB_NAME=
DB_HOST=
apiKey=
apiSecret=
baseURL=
manager_role_id=
employee_role_id=
hr_role_id=
```


