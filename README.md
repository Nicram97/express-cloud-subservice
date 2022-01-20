<h1>Express-cloud-subservice</h1>
<p>
This app is subservice of <b>Express-cloud-setup && Nestjs-cloud-setup</b>
It provides endpoint under "/" path which return json array of cars objects which is used to exercise access from one service to another, and to provide second service for contract testing using Pact.
</p>

<h3>How-To</h3>
<h4>Run app</h4>
<p>Run "npm run start" command or use You IDE.</p>
<h4>Add service to kubernetes</h4>
<p>
To create deployment and service You can use spring-deployment/service.yaml with command "kubectl apply (-f FILENAME | -k DIRECTORY)"
If You want deployment to work remember to use proper name whe creating and pushing app docker build.
</p>