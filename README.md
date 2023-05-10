# Brief5

Project Name:
Solicode Clubs Registration Form

Project Context:
To maintain learners' motivation and provide them with enjoyable moments of exchange and personal growth, Solicode has decided to create extracurricular activities in the form of clubs (computer science, robotics, chess, football, music, theater).
For this purpose, you have been tasked with creating a registration form that allows learners to sign up for one or more clubs.

The form includes the following fields:

    First Name
    Last Name
    Email
    Phone Number
    Gender (Female or Male)
    Group (DW101, DW102, DW103, DM101, DM102)
    Club(s) (Computer Science, Robotics, Chess, Music, Football, Theater)

Validation Criteria:

    All fields are mandatory.
    All inputs are of type text.
    The first name and last name should not exceed 30 characters.
    The phone number must be exactly 10 digits and start with either 05, 06, or 07.
    The email must be a valid email address in the format: firstname.lastname@ofppt.ma.
    In the multiple selection field for clubs, learners can choose a minimum of 1 club and a maximum of 3.

Form Validation Options

Two versions are provided to validate the form:

    Validation triggered after clicking the submit button (verification of all fields).
    Validation triggered when leaving each field (field by field). When a field is valid, a green border will appear around the input.

Error Handling

In case of an error:

    A red border will appear around the input.
    A personalized error message will be displayed below the input.

Confirmation and Success

In case of successful validation:

    The learner will be redirected to a new page, confirmation.html.

Technologies Used

    HTML
    CSS
    JavaScript
