# Random Code Generator Code Challenge

Based on the Given Requirements in the PDF file, this project Random Code Generator Contains the below capabilities.

1. GET REST generates random number for a default range 0 - 20

2. POST REST generates random number based on the given min and max range.

3. A WebUI to provide the convenient UI to Generate Random Number using the above rest service


# System requirements
- Java 1.8
- Maven 3.5.3
- Spring Boot: 2.0.0.RELEASE
- Tomcat: apache-tomcat-8.5.23 and above or any server that supports servelets spec 3.1

# Tools required for Develeopment

- All the items in System requirements above
- Eclipse IDE

# Production Deployment Instructions
- STEP 1:
  Either Build the project using Maven cmd : maven clean install and get the war file generated in the target folder and rename it to randomgen.
  or  Copy the already existing war file from release folder in path: \CodeChallenge1\Releases
  
- STEP 2:
  Deploy the war file into your choice of application server. For Tomcat refer the instructions below.
 
# STEPS for Deployment in Tomcat
 
 1. Install Tomcat as per Tomcat Documentation and make sure you set the port as 80. If you want to enable SSL use intructions from tomcat.
 2. Copy the above built war file into tomcat webapps folder: apache-tomcat-8.5.12\webapps
 3. Go to apache-tomcat-8.5.13\bin, then start tomcat using the cmd: startup.bat(startup.sh)
 4. ping http://localhost:8080/randomgen in the web browser.
  
  
# Testing the functionallity
- Using Browser UI. http://localhost:8080/randomgen
- Use Any Rest testing tool (ADVANCED REST CLIENT CHROME) or any tool prefered and try the payload defined in the pdf document for GET and POST
   EX: FOR GET REQUEST :
   url: http://localhost:8080/api/v1/generate_number
   Input Payload: Not required (Default range 0 - 20) 
   OUTPUT JSON : {"retval": 4 }	   
   
   FOR POST REQUEST :
   url: http://localhost:8080/api/v1/generate_number
   Input Payload: {"minval": 23,"maxval": 50} 
   OUTPUT JSON : {"retval": 40 }
 
# Note: Maven Build runs the Unit tests to validate the rest service for random generator functinality.
 
 
 
 
 
 
 
 
 
 
 
