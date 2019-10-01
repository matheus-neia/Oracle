# Workshop Overview
## Business Process

Often we need to put a business process, with specific rules in our CRM or other application (SaaS or On-Premises), so this workshop will show the creation of an opportunity in Oracle Sales Cloud - OSC using Oracle Integration Cloud Service - OIC to integrate this Business process with Oracle Sales Cloud software. After this we will create a Mobile application, with the help of Oracle Mobile Hub - (OMH) and Oracle MAX, to run this new business process created. In addition to this app we will create a Web App using Oracle Visual Builder. 

To accomplish this task of creating a business process we will run the Labs below.


## Workshop Division
- **Lab1:** Integration development between Oracle OIC and Oracle Sales Cloud
- **Lab2** Development of a business process using Process Cloud Service-OIC and integrating with Oracle Sales Cloud
- **Lab 3:** Development of a Mobile screen using Oracle Mobile Hub - OMH
- **Lab 4:** Developing a screen using Oracle Visual Builder

## Pre requirements
You will need to perform this Workshop:
- Oracle Integration Cloud Instance-OIC
- Oracle Mobile Hub Instance
- Oracle Sales Cloud Instance
- Postman - [Download](https://www.getpostman.com/)
- Suggestion in using the Chrome with the touchscreen Off. [Enable and disable your touchscreen in Windows 10](https://support.microsoft.com/en-us/help/4028019/windows-enable-and-disable-your-touchscreen-in-windows-10)

## Activities

#### Lab 1- Development a integration between Oracle OIC and Oracle Sales Cloud
**Documentation**: [Lab1.md](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab1.md)
##### Goals
- Create a REST connector
- Create a connector for Oracle Sales Cloud
- Create an integration between the rest technology connector and the Oracle Sales Cloud connector

#### Lab 2 - Development a business process using process Cloud Service - OIC and integrating with Oracle Sales Cloud
**Documentation**: [Lab2.md](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab2.md)
##### Goals
- Develop a business process that validates if the value of the opportunity is greater than 5000 USD the manager should approve its creation 
- Compose the business process with the integration created in Lab 1.

#### Lab 3 - Development of a Mobile screen using Oracle Mobile Hub - OMH
**Documentation**: [Lab3.md](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab3.md)
##### Goals
- Create a connector in OMH, this connector will point to the process, created in LAB2. 
- Create an API in OMH pointing to the connector created.
- Create an application using Oracle MAX, this application will call the process created in Lab2 through the API created in the OMH

#### Lab 4 - Developing a screen using Oracle Visual Builder
**Documentation**: [Lab4.md](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab4.md)
##### Goals
- Develop a web application with a form, for creating an opportunity. 
- This application will call the business process created in Lab2