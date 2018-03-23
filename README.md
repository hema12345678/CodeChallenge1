# Random Code Generator Code Challenge

Based on the Given Requirements in Code Challenge PDF, this project Random Code Generator Contains below 2 rest services GET and POST and UI

1. GET REST generates random number for a default range 0 -20

2. POST REST generates random number based on the given min and max range.

3. A WebUI to provide the convenient UI to Generate Random Number using the above rest service


# System requirements Technologies
– Java 1.8
– Maven 3.5.3
– Spring Boot: 2.0.0.RELEASE
– Tomcat: apache-tomcat-8.5.23

 

# Tools required for Develeopment:

- MAVEN to download the source
- Eclipse IDE


# For Production:
  Required Tomcat installation 8.5 and above or any server that supports servelets spec 3.1 and above
 
# Production Deployment Instructions
– Either Build the project using Maven cmd maven clean install. Then go to target folder, we have a new war file: SpringBootWarDeployment-0.0.1.war. and rename it to randomgen  
  or   
- Copy the already existing war file from release folder in path: \CodeChallenge1\Releases.
  
 
# Tomcat installation steps
 
 1. Make sure you set the port as 80 if you want to enable SSL use intructions from tomcat.
 2. Copy the above built war file into tomcat webapps folder: apache-tomcat-8.5.12\webapps
 3. Go to apache-tomcat-8.5.13\bin, then start tomcat using the cmd: startup.bat(startup.sh)
 4. ping http://localhost:8080/randomgen in the web browser.
  
 
 Either pick localhost: given path
 test for root. change the name of the war to root.war
 
# Testing the functionallity
- USING BRowser UI.
- Use Any Rest testing tool (ADVANCED REST CLIENT CHROME) or any tool prefered and try the payload defined in the pdf document for GET and POST
   EX: FOR GET  :  /api/v1/generate_number : No Input  OUTPUT: {"retval": 4 }
       FOR POST :  /api/v1/generate_number : Input : {"minval": 23,"maxval": 50} OUTPUT: {"retval": 45 }

 
# Note: Maven Build run the tests to validate the rest service random generator functinality.
 
 
 
 
 
 
 
 
 
 
 
