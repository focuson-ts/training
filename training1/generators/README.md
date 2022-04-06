# Hello World - Form_Builder

### Generator Folder structure

- PageName
  - pageName.dataD.ts
  - pageName.pageD.ts 
  - pageName.restD.ts 
  - pageName.sample.ts

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


### What to observe

1. if we scroll down we see the debug info which contains a lot useful of information 
2. look at `pageMode` to see in which mode are you (**view | edit | create**)
3. in `view` mode, page is read-only, click on the HelloWorldMainPage button to enable "**edit**" mode. 1
4. delete the content of input => field will become red (un-valid)
5. while we type inside the input, we can see in the debug section the events we made 
6. we can use "**ts-node ./src/focuson.generate.ts**" whenever we want to re-generate both **formTS** and **formJava**
7. the **formTS** will reload automatically, but if we make changes to samples, the backend needs to be restarted manually

### Nice to know

1) If things go wrong, it is always a good idea to delete the generated code (**src** and **java** folders or whole folder) and re-generate.
2) inside **formComponents** we have the reusable components, we can create new ones if we need.
   