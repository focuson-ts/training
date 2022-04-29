# Blank template

### Steps made to get up and running
1. `npm install`
1. run `ts-node ./src/focuson.generate.ts` from terminal ---> this will generate two folders
    - #####formTS here is the generated front-end
    - #####formJava here is the generated back-end
1. inside formTs run `npm install`
1.inside formJava, run `src/main/java/focuson/data/ExampleApp.java`
    * if using IntelliJ, right click on pom.xml file and add as maven project, then right click on ExampleApp.java and run.
1. inside formTS run `npm start`
    * you can run `tsc` to check for compile errors


### Nice to know

1) If things go wrong, it is always a good idea to delete the generated code (**src** and **java** folders or whole folder) and re-generate.
2) inside **formComponents** we have the reusable components, we can create new ones if we need.
   