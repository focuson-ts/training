# Customer Details - Form_Builder (Input Components and DataDs)

### Generator Folder structure
- PageName
    - pageName.dataD.ts
    - pageName.pageD.ts
    - pageName.restD.ts
    - pageName.sample.ts

### Different DataDs available
- DataD determines what type of data the form field can hold.
- DataD can be any of the following types - StringPrimitiveDD | NumberPrimitiveDD | PrimitiveDD
    - CustomerIdDD : StringPrimitiveDD;
    - AccountIdDD: NumberPrimitiveDD;
    - StringDD: StringPrimitiveDD;
    - OneLineStringDD: StringPrimitiveDD;
    - ManyLineStringDD: StringPrimitiveDD;
    - IntegerDD: NumberPrimitiveDD;
    - NatNumDd: NumberPrimitiveDD;
    - MoneyDD: NumberPrimitiveDD;
    - BooleanDD: PrimitiveDD;
    - DateDD: StringPrimitiveDD;
    - DateTimeDD: PrimitiveDD;

### Different Input Components available
- Input components decides how the form fields will be displayed.
- Input components are of type DisplayCompD
    - LabelAndStringInputCD
    - LabelAndNumberInputCD
    - LabelAndCheckboxInputCD
    - TableCD
    - SelectedItemCD
    - RadioCD
    - LabelAndRadioCD
    - OptionalCD
    - LabelAndDropDownCD

### Steps to get the application up and running

1) In the project directory run,
   #### `npm install`

2) Then, run
   #### `ts-node ./src/focuson.generate.ts`
   Generates two directories:
    - **formTS** `front-end application files`
    - **formJava** `back-end application files`


3) In the directory **formTs**, run
   #### `npm install`

4) In the directory **formJava**, run
   #### `src/main/java/focuson/data/ExampleApp.java`
   If using IntelliJ, right click on pom.xml file and add as maven project,\
   then right click on ExampleApp.java and run.


5) In the directory **formTS**, run
   #### `npm install`

4) In the same directory, run:
   #### `npm start`

   Runs the app in the development mode.\
   Opens [http://localhost:3000](http://localhost:3000) in the browser.

### Other available scripts

1) #### `npm test`
   Launches the test runner in the interactive watch mode.\
   Runs both Unit tests and Contracts tests

2) #### `npm run storybook`
   Runs the storybook.\
   Opens [http://localhost:6060](http://localhost:6060) in the browser.


### Important to Note
1) Avoid making any changes in formTs/formJava directories. Changes will be lost as these are auto-generated.

### What to observe

1) if we scroll down we see the debug info which contains a lot useful of information
2) look at "**pageMode**" to see in which mode are you (**view | edit | create**)
3) in "**view**" mode, page is read-only, click on the CustomerDetailsMainPage button to enable "**edit**" mode.
4) delete the content of input => field will become red (un-valid)
5) while we type inside the input, we can see in the debug section the events we made
6) we can use "**ts-node ./src/focuson.generate.ts**" whenever we want to re-generate both **formTS** and **formJava**
7) the **formTS** will reload automatically, but if we make changes to samples, the backend needs to be restarted manually

### Nice to know

1) run **tsc** to check for compilation errors
2) if things go wrong, it is always a good idea to delete the generated code (**src** and **java** folders or whole folder) and re-generate.
3) inside **formComponents**, there are **core components** which are reusable. One can create **custom components** (new ones) if needed.
   