# Lesson 2 - Address View

### Main Page ###
###### 5 inputs 1 edit button
    - addressLine1
    - addressLine2
    - addressLine3
    - addressLine4
    - postCode
    - edit button

### Modal Page ###
###### 5 inputs 2 buttons
    - addressLine1
    - addressLine2
    - addressLine3
    - addressLine4
    - postCode
    - cancel button
    - commit button

### Nice to know
    Modal page is ultimately a page, but it is triggered 
    by a button ( modal button ),
    
    Whenever we want to edit a pages state, we must use a "temp"
    value, so that we don't manually alter the "fromApi" state. That "temp"
    state is going to be sent as payload to the api on commit.

    The compiler helps you a lot, you can also ctrl+click on different keys to see
    their type and possible values.

    

    
   