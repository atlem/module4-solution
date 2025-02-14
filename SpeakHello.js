
Åpne sidefelt

course resturante

HTML CSS JS Assignmento3-mini-high

Du sa:
index.html
Fil
style.css
Fil
Coursera course: HTML, CSS, and Javascript for Web Developers

Woo-hoo! MORE CODING!!! Exciting! :-)

Time to complete: About 1 hour or less.

Ask questions in Discussions if you get stuck! We are all learning, and going through getting stuck and then unstuck (even with someone's help) can be a very valuable learning experience!

Don't get scared by the number of points below. Most of it is NOT graded and is optional for you to try on your own.

Here is what you will need to complete the assignment:

(If you haven't already) Create a GitHub.com account and a repository that you will use for this class.

(If you haven't already) Follow the Development Setup Video (beginning of Module 1) instructions on how to create a repository and set it up such that you can host and view your finished web pages on GitHub Pages, i.e., GitHub.io domain name. You will need to provide that URL for your peer review.

Create a folder in your repository that will serve as a container folder for your solution to this assignment. You can call it whatever you want. For example, module3-solution or mod3_solution, etc. Create an index.html file inside the solution container folder, e.g., module3-solution/index.html.

The implementation of the page you will be creating should follow the mockup illustrations shown below. You are provided 3 mockups: desktop and tablet (same), mobile, and mobile with mobile menu dropdown shown. Your implementation has to be JUST 1 page. In other words, you will be creating a single, responsive page.

Your page must include a CSS file. No inline styles allowed. Your CSS file should be placed into a css folder under the solution container folder, e.g., module3-solution/css.

For this assignment, you are to use Twitter Bootstrap CSS Framework as much as possible. I suggest you start with copying the starter bootstrap files and folders we discussed in Lecture 25 part 2. If you've cloned/downloaded the code example repository, it should be in the examples/Lecture25 folder. Copy the contents of examples/Lecture25 to your solution container folder (e.g., module3-solution) as a starting point..

Since we are using Bootstrap for this assignment, instead of specifying pixel ranges, I will define our desktop, tablet, and mobile views in terms of Bootstrap CSS class prefixes, i.e., md, sm, and xs.

Desktop mockup illustration should correspond to Bootstrap md-based classes
Tablet mockup illustration should correspond to Bootstrap sm-based classes
Mobile mockup illustration should correspond to Bootstrap xs-based classes
Navbar: Create a navbar that scrolls away together with the page (the navbar should become invisible and is not fixed to the top when you scroll the page down). The navbar should have a company name (i.e., navbar-brand class) called "Food, LLC" that is aligned to the left side of the navbar. (See https://getbootstrap.com/docs/3.3/components/#navbar. Make the browser window narrower to see the mobile menu button appear in the first example shown at the provided link.)

For desktop and tablet view, the navbar should not contain anything else. No other buttons should be visible. (Hint: use 'visible-xs' class.)

Navbar - Mobile View: Create a simple menu button (3 horizontal bars). When the user clicks that button, a dropdown menu should appear (as illustrated in Mobile Open Menu illustration below.) The dropdown menu should contain 3 items: Chicken, Beef, and Sushi.

The dropdown menu should take up the entire width of the browser window. Make sure the dropdown menu has a background color set that distinguishes it from the rest of the content.

(Hint: See https://getbootstrap.com/docs/3.3/components/#navbar and Lecture 31 for examples on how to accomplish this.)

Page Heading. The page heading that says Our Menu should be centered within the browser window. You must use a Bootstrap class to accomplish this.

(Hint: look for a Bootstrap class that centers text, see https://getbootstrap.com/docs/3.3/css/#type-alignment.)

Create a single really tall section that will use the Bootstrap Grid and take up the entire width of the browser window (minus some margins, of course) for all views: desktop, tablet, and mobile. To make the section really tall, you can either fill it out with a LOT of text or simply set its height to something like 1000px. It needs to be tall enough to cause scrolling down to be required to view the bottom of the section. Make sure its background color is set to distinguish it from the rest of the content. (Hint: don't forget to have an element with a class='container' or class='container-fluid' wrapping your grid. Remember that to have the grid do something "always", i.e., no matter what browser window size, use the col-xs-... classes. In this case, since we want the section to take up the entire row, use col-xs-12.)

Both the tablet view and the desktop view of what's graded and required is the same. Here is the mockup illustration of the desktop & tablet version of the site (only required graded parts shown):

Desktop and Tablet

Here is the mockup illustration of the mobile view (only required graded parts are shown):

mobile collapsed

mobile expanded

*** REQUIRED GRADED ASSIGNMENT ENDS HERE ***




OPTIONAL, UNGRADED PORTION IS BELOW:

The rest of this assignment is not graded and is optional, but it's good practice, so go for it if you have time. The solution to the optional ungraded portion of the assignment below does NOT have to be submitted.

(OPTIONAL, NOT GRADED) Since in this optional part you will be implementing something more complex than a single section in the Bootstrap grid, remove that section before continuing.

(OPTIONAL, NOT GRADED) As in previous assignment, the rest of your site is very simple. It consists of a page heading and 3 sections (all in one row in the desktop view). Each section contains some text. You can make it dummy text/"lorem ipsum", it doesn't matter. How the sections are laid out on the screen depends on the width of the browser window. (Hint: use the Bootstrap Grid we discussed in Lecture 26 of Module 2 as well as numerous lectures of Module 3, including Lecture 35.)

(OPTIONAL, NOT GRADED) Each section should be fairly large in height. You can achieve this by either filling it up with a lot of content text or simply setting its height property to something large like 700px. At the end of each section, provide a link that says "Back to Top". This link should jump the page back to "Our Menu" heading. (Hint: use a link that points to a section of the page discussed in Lecture 9 of Module 1.)

(OPTIONAL, NOT GRADED) Each section should have an h3-based section heading which should be centered within the section. Use the same Bootstrap class you used for centering the page heading to center the section heading. Use the heading names shown in the mockup illustrations, i.e., "Chicken", "Beef", "Sushi".

(OPTIONAL, NOT GRADED)Layout: In the desktop view, each of the 3 sections should take up equal amount of space on the screen. As you make the browser window wider or narrower, each section should become wider or narrower.

(Hint: use md-based grid column classes as discussed in Lecture 26 and Lecture 35 among others. It's a 12 grid-based system, so 3 in a row means each grid will take up 4 grid cells, i.e., col-md-4.) For a visual reference of this view, see the desktop mockup illustration below.

(OPTIONAL, NOT GRADED)Layout: In the tablet view, the first 2 sections should be in the first row and be of equal size. The 3rd section should be in the second row and take up the entire row by itself.

(Hint: use 'sm'-based grid column classes and remember that you don't really need to define a separate 'row' class as you can achieve this layout within a single Bootstrap 'row' as discussed in Lecture 26 and Lecture 35, among others. To have 2 sections take up an entire row, i.e., all 12 columns, each one should take up 6 columns. To make the 3rd section take up the entire width of the browser window, i.e., 12 columns, use col-sm-12.)

For a visual reference of this view, see the tablet mockup illustration below.

(OPTIONAL, NOT GRADED)Layout: In the mobile view, each section should take up the entire row.

(Hint: use xs-based grid column class. Since you need to take up the entire row, use col-xs-12.)

For a visual reference of this view, see the mobile mockup illustration below.

(OPTIONAL, NOT GRADED) Link the menu items "Chicken", "Beef", "Sushi" from the mobile-only menu drop down to jump to the part of the page those sections correspond to.

MOCKUP ILLUSTRATIONS ARE BELOW:

Please NOTE: these mockup illustrations show parts that are optional and not graded for this assignment. Please refer to the requirements above to confirm what parts of the mockup are required and graded and what parts are optional.

Here is the mockup illustration of the desktop version of the site: Desktop - optional

Here is the mockup illustration of the tablet version of the site:

Tablet - optional

Here is the mockup illustration of the mobile version of the site with the menu dropdown NOT open (on the left) and menu drop down open (on the right):

Mobile - Optional (Closed) Mobile - Optional (Open) split this and make downloadable files, this is current progress in following files 
Resonnerte for 11 sekunder
Below are your two separate files. You can copy the contents below and save them as separate files—one as index.html and the other as style.css—to use in your project.

index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Menu</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Our Menu</h1>
    <div class="row">
        <div class="col section" id="chicken">
            <div class="title">Chicken</div><p></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
        <div class="col section" id="beef">
            <div class="title">Beef</div><p></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
        <div class="col section" id="sushi">
            <div class="title">Sushi</div><p></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
    </div>
</body>
</html>
style.css
* {
    box-sizing: border-box;
}
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
}

h1 {
    font-size: 2em;
    margin: 20px 0;
}

p {
    margin-top: 0px;
}

.row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
}

.col {
    border: 1px solid black;
    padding: 20px;
    margin: 20px;
    background-color: lightgray;
    text-align: left;
    box-sizing: border-box;
    flex: 1 1 30%;
    min-width: 250px;
}

.section {
    position: relative;
    padding: 40px 20px 20px;
}

.title {
    top: 0;
    right: 0;
    position: absolute;
    width: 100px;
    background-color: darkgray;
    color: white;
    padding: 5px 10px;
    font-weight: bold;
    border: 1px solid black;
}

#chicken .title { background-color: #d9534f; }
#beef .title { background-color: #2c9fc9; }
#sushi .title { background-color: #f0ad4e; }

@media (min-width: 992px) {
    .col {
        flex: 1 1 30%;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .col {
        flex: 1 1 45%;
    }
    .col:last-child {
        flex: 1 1 100%;
    }
}

@media (max-width: 767px) {
    .col {
        flex: 1 1 100%;
    }
}
Simply save these files in your repository (with style.css in a css folder if you wish to follow the assignment's file structure), and you’re ready to proceed with your assignment progress. Enjoy coding, and remember to ask questions in Discussions if you run into any issues!



Du sa:
add missing part from instructions Coursera course: HTML, CSS, and Javascript for Web Developers

Woo-hoo! MORE CODING!!! Exciting! :-)

Time to complete: About 1 hour or less.

Ask questions in Discussions if you get stuck! We are all learning, and going through getting stuck and then unstuck (even with someone's help) can be a very valuable learning experience!

Don't get scared by the number of points below. Most of it is NOT graded and is optional for you to try on your own.

Here is what you will need to complete the assignment:

(If you haven't already) Create a GitHub.com account and a repository that you will use for this class.

(If you haven't already) Follow the Development Setup Video (beginning of Module 1) instructions on how to create a repository and set it up such that you can host and view your finished web pages on GitHub Pages, i.e., GitHub.io domain name. You will need to provide that URL for your peer review.

Create a folder in your repository that will serve as a container folder for your solution to this assignment. You can call it whatever you want. For example, module3-solution or mod3_solution, etc. Create an index.html file inside the solution container folder, e.g., module3-solution/index.html.

The implementation of the page you will be creating should follow the mockup illustrations shown below. You are provided 3 mockups: desktop and tablet (same), mobile, and mobile with mobile menu dropdown shown. Your implementation has to be JUST 1 page. In other words, you will be creating a single, responsive page.

Your page must include a CSS file. No inline styles allowed. Your CSS file should be placed into a css folder under the solution container folder, e.g., module3-solution/css.

For this assignment, you are to use Twitter Bootstrap CSS Framework as much as possible. I suggest you start with copying the starter bootstrap files and folders we discussed in Lecture 25 part 2. If you've cloned/downloaded the code example repository, it should be in the examples/Lecture25 folder. Copy the contents of examples/Lecture25 to your solution container folder (e.g., module3-solution) as a starting point..

Since we are using Bootstrap for this assignment, instead of specifying pixel ranges, I will define our desktop, tablet, and mobile views in terms of Bootstrap CSS class prefixes, i.e., md, sm, and xs.

Desktop mockup illustration should correspond to Bootstrap md-based classes
Tablet mockup illustration should correspond to Bootstrap sm-based classes
Mobile mockup illustration should correspond to Bootstrap xs-based classes
Navbar: Create a navbar that scrolls away together with the page (the navbar should become invisible and is not fixed to the top when you scroll the page down). The navbar should have a company name (i.e., navbar-brand class) called "Food, LLC" that is aligned to the left side of the navbar. (See https://getbootstrap.com/docs/3.3/components/#navbar. Make the browser window narrower to see the mobile menu button appear in the first example shown at the provided link.)

For desktop and tablet view, the navbar should not contain anything else. No other buttons should be visible. (Hint: use 'visible-xs' class.)

Navbar - Mobile View: Create a simple menu button (3 horizontal bars). When the user clicks that button, a dropdown menu should appear (as illustrated in Mobile Open Menu illustration below.) The dropdown menu should contain 3 items: Chicken, Beef, and Sushi.

The dropdown menu should take up the entire width of the browser window. Make sure the dropdown menu has a background color set that distinguishes it from the rest of the content.

(Hint: See https://getbootstrap.com/docs/3.3/components/#navbar and Lecture 31 for examples on how to accomplish this.)

Page Heading. The page heading that says Our Menu should be centered within the browser window. You must use a Bootstrap class to accomplish this.

(Hint: look for a Bootstrap class that centers text, see https://getbootstrap.com/docs/3.3/css/#type-alignment.)

Create a single really tall section that will use the Bootstrap Grid and take up the entire width of the browser window (minus some margins, of course) for all views: desktop, tablet, and mobile. To make the section really tall, you can either fill it out with a LOT of text or simply set its height to something like 1000px. It needs to be tall enough to cause scrolling down to be required to view the bottom of the section. Make sure its background color is set to distinguish it from the rest of the content. (Hint: don't forget to have an element with a class='container' or class='container-fluid' wrapping your grid. Remember that to have the grid do something "always", i.e., no matter what browser window size, use the col-xs-... classes. In this case, since we want the section to take up the entire row, use col-xs-12.)

Both the tablet view and the desktop view of what's graded and required is the same. Here is the mockup illustration of the desktop & tablet version of the site (only required graded parts shown):

Desktop and Tablet

Here is the mockup illustration of the mobile view (only required graded parts are shown):

mobile collapsed

mobile expanded

*** REQUIRED GRADED ASSIGNMENT ENDS HERE ***




OPTIONAL, UNGRADED PORTION IS BELOW:

The rest of this assignment is not graded and is optional, but it's good practice, so go for it if you have time. The solution to the optional ungraded portion of the assignment below does NOT have to be submitted.

(OPTIONAL, NOT GRADED) Since in this optional part you will be implementing something more complex than a single section in the Bootstrap grid, remove that section before continuing.

(OPTIONAL, NOT GRADED) As in previous assignment, the rest of your site is very simple. It consists of a page heading and 3 sections (all in one row in the desktop view). Each section contains some text. You can make it dummy text/"lorem ipsum", it doesn't matter. How the sections are laid out on the screen depends on the width of the browser window. (Hint: use the Bootstrap Grid we discussed in Lecture 26 of Module 2 as well as numerous lectures of Module 3, including Lecture 35.)

(OPTIONAL, NOT GRADED) Each section should be fairly large in height. You can achieve this by either filling it up with a lot of content text or simply setting its height property to something large like 700px. At the end of each section, provide a link that says "Back to Top". This link should jump the page back to "Our Menu" heading. (Hint: use a link that points to a section of the page discussed in Lecture 9 of Module 1.)

(OPTIONAL, NOT GRADED) Each section should have an h3-based section heading which should be centered within the section. Use the same Bootstrap class you used for centering the page heading to center the section heading. Use the heading names shown in the mockup illustrations, i.e., "Chicken", "Beef", "Sushi".

(OPTIONAL, NOT GRADED)Layout: In the desktop view, each of the 3 sections should take up equal amount of space on the screen. As you make the browser window wider or narrower, each section should become wider or narrower.

(Hint: use md-based grid column classes as discussed in Lecture 26 and Lecture 35 among others. It's a 12 grid-based system, so 3 in a row means each grid will take up 4 grid cells, i.e., col-md-4.) For a visual reference of this view, see the desktop mockup illustration below.

(OPTIONAL, NOT GRADED)Layout: In the tablet view, the first 2 sections should be in the first row and be of equal size. The 3rd section should be in the second row and take up the entire row by itself.

(Hint: use 'sm'-based grid column classes and remember that you don't really need to define a separate 'row' class as you can achieve this layout within a single Bootstrap 'row' as discussed in Lecture 26 and Lecture 35, among others. To have 2 sections take up an entire row, i.e., all 12 columns, each one should take up 6 columns. To make the 3rd section take up the entire width of the browser window, i.e., 12 columns, use col-sm-12.)

For a visual reference of this view, see the tablet mockup illustration below.

(OPTIONAL, NOT GRADED)Layout: In the mobile view, each section should take up the entire row.

(Hint: use xs-based grid column class. Since you need to take up the entire row, use col-xs-12.)

For a visual reference of this view, see the mobile mockup illustration below.

(OPTIONAL, NOT GRADED) Link the menu items "Chicken", "Beef", "Sushi" from the mobile-only menu drop down to jump to the part of the page those sections correspond to.

MOCKUP ILLUSTRATIONS ARE BELOW:

Please NOTE: these mockup illustrations show parts that are optional and not graded for this assignment. Please refer to the requirements above to confirm what parts of the mockup are required and graded and what parts are optional.

Here is the mockup illustration of the desktop version of the site: Desktop - optional

Here is the mockup illustration of the tablet version of the site:

Tablet - optional

Here is the mockup illustration of the mobile version of the site with the menu dropdown NOT open (on the left) and menu drop down open (on the right):

Mobile - Optional (Closed) Mobile - Optional (Open)
Resonnerte for 31 sekunder
Below are updated versions of your files with the missing pieces added. In this update we’ve:

• Included Bootstrap by linking its CSS (and later its JavaScript and jQuery) so you can use the framework’s grid and navbar classes.

• Added a responsive navbar at the top with the company name “Food, LLC” and—for mobile views—a toggle button that reveals a full‐width dropdown menu (with links to Chicken, Beef, and Sushi).

• Centered the “Our Menu” page heading using a Bootstrap text-center class.

• Added a “tall section” wrapped in a container-fluid that spans the full width and is set (via CSS) to be 1000px tall to force scrolling.

Below are the updated files:

index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Our Menu</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <!-- Custom CSS (place this file in a css folder if desired) -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <!-- Company name -->
        <a class="navbar-brand" href="#">Food, LLC</a>
        <!-- Mobile menu button: visible only on extra small screens -->
        <button type="button" class="navbar-toggle collapsed visible-xs" data-toggle="collapse" data-target="#mobile-menu" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <!-- Mobile dropdown menu -->
      <div class="collapse navbar-collapse" id="mobile-menu">
        <ul class="nav navbar-nav">
          <li><a href="#chicken">Chicken</a></li>
          <li><a href="#beef">Beef</a></li>
          <li><a href="#sushi">Sushi</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Heading -->
  <header class="text-center">
    <h1>Our Menu</h1>
  </header>

  <!-- Tall Section (Required Graded Portion) -->
  <div class="container-fluid">
    <div class="row tall-section">
      <div class="col-xs-12">
        <p>
          This is a tall section meant to force scrolling. It uses the Bootstrap grid (with the col-xs-12 class) and spans the full width (inside a container-fluid). You can add more text or content here as needed.
        </p>
      </div>
    </div>
  </div>

  <!-- Optional: Multiple Sections for Menu Items -->
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4 section" id="chicken">
        <div class="title">Chicken</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 section" id="beef">
        <div class="title">Beef</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 section" id="sushi">
        <div class="title">Sushi</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      </div>
    </div>
  </div>

  <!-- jQuery and Bootstrap JavaScript (needed for the navbar toggle) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>
style.css
/* Global reset and typography */
* {
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Page Heading */
header h1 {
  font-size: 2em;
  margin: 20px 0;
}

/* Tall Section */
.tall-section {
  height: 1000px;
  background-color: #f5f5f5;
  padding: 20px;
  text-align: left;
}

/* Optional Menu Sections */
.section {
  position: relative;
  padding: 40px 20px 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
}

.title {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  background-color: darkgray;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  border: 1px solid black;
}

#chicken .title { background-color: #d9534f; }
#beef .title { background-color: #2c9fc9; }
#sushi .title { background-color: #f0ad4e; }

/* Mobile Navbar Dropdown Customization */
@media (max-width: 767px) {
  .navbar-collapse {
    background-color: #eee;
    width: 100%;
    position: absolute;
    top: 50px; /* Adjust if your navbar height changes */
    left: 0;
    padding: 10px 0;
  }
}
Explanation
Bootstrap Integration:
The head now links to Bootstrap’s CSS so you can use its grid and responsive navbar classes. The jQuery and Bootstrap JS libraries are added before the closing body tag to enable the mobile menu toggle.

Navbar:
The <nav> element uses Bootstrap’s navbar classes. A mobile toggle button (visible only on extra-small screens thanks to the visible-xs class) lets users open a dropdown menu that occupies the full width in mobile view.

Page Heading:
The <header> element centers the “Our Menu” heading using the Bootstrap text-center class.

Tall Section:
A container-fluid holds a single row and a full-width column (using col-xs-12) that has a fixed height (set in CSS) to force scrolling.

Optional Content:
The existing three sections (Chicken, Beef, Sushi) are wrapped in a Bootstrap container and row. They use responsive grid classes (col-xs-12, col-sm-6, col-md-4) to adjust their layout based on the viewport size.

This updated structure now reflects all the required graded parts from the assignment instructions. You can further refine or add optional enhancements as time permits. Enjoy coding!



Du sa:
downloadable files
Resonnerte for 5 sekunder
Below are two separate files that you can download and save into your project. The structure is as follows:

module3-solution/
├── index.html
└── css/
    └── style.css
To create these files:

index.html
Copy the code below into a new file named index.html (placed in your solution folder):

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Our Menu</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <!-- Custom CSS (placed in the css folder) -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <!-- Company name -->
        <a class="navbar-brand" href="#">Food, LLC</a>
        <!-- Mobile menu button: visible only on extra small screens -->
        <button type="button" class="navbar-toggle collapsed visible-xs" data-toggle="collapse" data-target="#mobile-menu" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <!-- Mobile dropdown menu -->
      <div class="collapse navbar-collapse" id="mobile-menu">
        <ul class="nav navbar-nav">
          <li><a href="#chicken">Chicken</a></li>
          <li><a href="#beef">Beef</a></li>
          <li><a href="#sushi">Sushi</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Heading -->
  <header class="text-center">
    <h1>Our Menu</h1>
  </header>

  <!-- Tall Section (Required Graded Portion) -->
  <div class="container-fluid">
    <div class="row tall-section">
      <div class="col-xs-12">
        <p>
          This is a tall section meant to force scrolling. It uses the Bootstrap grid (with the col-xs-12 class) and spans the full width (inside a container-fluid). You can add more text or content here as needed.
        </p>
      </div>
    </div>
  </div>

  <!-- Optional: Multiple Sections for Menu Items -->
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4 section" id="chicken">
        <div class="title">Chicken</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 section" id="beef">
        <div class="title">Beef</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 section" id="sushi">
        <div class="title">Sushi</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      </div>
    </div>
  </div>

  <!-- jQuery and Bootstrap JavaScript (needed for the navbar toggle) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>
css/style.css
Create a folder named css inside your solution folder, then copy the code below into a new file named style.css:

/* Global reset and typography */
* {
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Page Heading */
header h1 {
  font-size: 2em;
  margin: 20px 0;
}

/* Tall Section */
.tall-section {
  height: 1000px;
  background-color: #f5f5f5;
  padding: 20px;
  text-align: left;
}

/* Optional Menu Sections */
.section {
  position: relative;
  padding: 40px 20px 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
}

.title {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  background-color: darkgray;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  border: 1px solid black;
}

#chicken .title { background-color: #d9534f; }
#beef .title { background-color: #2c9fc9; }
#sushi .title { background-color: #f0ad4e; }

/* Mobile Navbar Dropdown Customization */
@media (max-width: 767px) {
  .navbar-collapse {
    background-color: #eee;
    width: 100%;
    position: absolute;
    top: 50px; /* Adjust if your navbar height changes */
    left: 0;
    padding: 10px 0;
  }
}
How to Download
Option 1: Copy the code above and paste it into your own files (using a text editor such as VS Code, Sublime, or Notepad++).
Option 2: If you’re using an IDE that supports file import, create the folder structure as shown above and then create new files with the provided content.
Once saved, push your changes to your GitHub repository so you can view your pages on GitHub Pages.

Happy coding!



Du sa:
create downladable files
Resonnerte for 38 sekunder
Below are two downloadable files. You can click each link to download the file, then unzip or place them in the proper folder structure as follows:

module3-solution/
├── index.html
└── css/
    └── style.css
For convenience, download each file using the links below.

Download index.html

<a download="index.html" href="data:text/html;charset=utf-8,<!DOCTYPE%20html>%0A<html%20lang=%22en%22>%0A<head>%0A%20%20<meta%20charset=%22UTF-8%22>%0A%20%20<meta%20name=%22viewport%22%20content=%22width=device-width,%20initial-scale=1.0%22>%0A%20%20<title>Our%20Menu</title>%0A%20%20<!--%20Bootstrap%20CSS%20-->%0A%20%20<link%20rel=%22stylesheet%22%20href=%22https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css%22>%0A%20%20<!--%20Custom%20CSS%20(placed%20in%20the%20css%20folder)%20-->%0A%20%20<link%20rel=%22stylesheet%22%20href=%22css/style.css%22>%0A</head>%0A<body>%0A%20%20<!--%20Navbar%20-->%0A%20%20<nav%20class=%22navbar%20navbar-default%22>%0A%20%20%20%20<div%20class=%22container-fluid%22>%0A%20%20%20%20%20%20<div%20class=%22navbar-header%22>%0A%20%20%20%20%20%20%20%20<!--%20Company%20name%20-->%0A%20%20%20%20%20%20%20%20<a%20class=%22navbar-brand%22%20href=%22#%22>Food,%20LLC</a>%0A%0A%20%20%20%20%20%20%20%20<!--%20Mobile%20menu%20button:%20visible%20only%20on%20extra%20small%20screens%20-->%0A%20%20%20%20%20%20%20%20<button%20type=%22button%22%20class=%22navbar-toggle%20collapsed%20visible-xs%22%20data-toggle=%22collapse%22%20data-target=%22#mobile-menu%22%20aria-expanded=%22false%22>%0A%20%20%20%20%20%20%20%20%20%20<span%20class=%22sr-only%22>Toggle%20navigation</span>%0A%20%20%20%20%20%20%20%20%20%20<span%20class=%22icon-bar%22></span>%0A%20%20%20%20%20%20%20%20%20%20<span%20class=%22icon-bar%22></span>%0A%20%20%20%20%20%20%20%20%20%20<span%20class=%22icon-bar%22></span>%0A%20%20%20%20%20%20%20%20</button>%0A%20%20%20%20%20%20</div>%0A%20%20%20%20%20%20<!--%20Mobile%20dropdown%20menu%20-->%0A%20%20%20%20%20%20<div%20class=%22collapse%20navbar-collapse%22%20id=%22mobile-menu%22>%0A%20%20%20%20%20%20%20%20<ul%20class=%22nav%20navbar-nav%22>%0A%20%20%20%20%20%20%20%20%20%20<li><a%20href=%22#chicken%22>Chicken</a></li>%0A%20%20%20%20%20%20%20%20%20%20<li><a%20href=%22#beef%22>Beef</a></li>%0A%20%20%20%20%20%20%20%20%20%20<li><a%20href=%22#sushi%22>Sushi</a></li>%0A%20%20%20%20%20%20%20%20</ul>%0A%20%20%20%20%20%20</div>%0A%20%20%20%20</div>%0A%20%20</nav>%0A%0A%20%20<!--%20Page%20Heading%20-->%0A%20%20<header%20class=%22text-center%22>%0A%20%20%20%20<h1>Our%20Menu</h1>%0A%20%20</header>%0A%0A%20%20<!--%20Tall%20Section%20(Required%20Graded%20Portion)%20-->%0A%20%20<div%20class=%22container-fluid%22>%0A%20%20%20%20<div%20class=%22row%20tall-section%22>%0A%20%20%20%20%20%20<div%20class=%22col-xs-12%22>%0A%20%20%20%20%20%20%20%20<p>%0A%20%20%20%20%20%20%20%20%20%20This%20is%20a%20tall%20section%20meant%20to%20force%20scrolling.%20It%20uses%20the%20Bootstrap%20grid%20(with%20the%20col-xs-12%20class)%20and%20spans%20the%20full%20width%20(inside%20a%20container-fluid).%20You%20can%20add%20more%20text%20or%20content%20here%20as%20needed.%0A%20%20%20%20%20%20</p>%0A%20%20%20%20%20%20</div>%0A%20%20%20%20</div>%0A%20%20</div>%0A%0A%20%20<!--%20Optional:%20Multiple%20Sections%20for%20Menu%20Items%20-->%0A%20%20<div%20class=%22container%22>%0A%20%20%20%20<div%20class=%22row%22>%0A%20%20%20%20%20%20<div%20class=%22col-xs-12%20col-sm-6%20col-md-4%20section%22%20id=%22chicken%22>%0A%20%20%20%20%20%20%20%20<div%20class=%22title%22>Chicken</div>%0A%20%20%20%20%20%20%20%20<p>Lorem%20ipsum%20dolor%20sit%20amet,%20consectetur%20adipiscing%20elit.%20Integer%20nec%20odio.%20Praesent%20libero.%20Sed%20cursus%20ante%20dapibus%20diam.</p>%0A%20%20%20%20%20%20</div>%0A%20%20%20%20%20%20<div%20class=%22col-xs-12%20col-sm-6%20col-md-4%20section%22%20id=%22beef%22>%0A%20%20%20%20%20%20%20%20<div%20class=%22title%22>Beef</div>%0A%20%20%20%20%20%20%20%20<p>Lorem%20ipsum%20dolor%20sit%20amet,%20consectetur%20adipiscing%20elit.%20Integer%20nec%20odio.%20Praesent%20libero.%20Sed%20cursus%20ante%20dapibus%20diam.</p>%0A%20%20%20%20%20%20</div>%0A%20%20%20%20%20%20<div%20class=%22col-xs-12%20col-sm-12%20col-md-4%20section%22%20id=%22sushi%22>%0A%20%20%20%20%20%20%20%20<div%20class=%22title%22>Sushi</div>%0A%20%20%20%20%20%20%20%20<p>Lorem%20ipsum%20dolor%20sit%20amet,%20consectetur%20adipiscing%20elit.%20Integer%20nec%20odio.%20Praesent%20libero.%20Sed%20cursus%20ante%20dapibus%20diam.</p>%0A%20%20%20%20%20%20</div>%0A%20%20%20%20</div>%0A%20%20</div>%0A%0A%20%20<!--%20jQuery%20and%20Bootstrap%20JavaScript%20(needed%20for%20the%20navbar%20toggle)%20-->%0A%20%20<script%20src=%22https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js%22></script>%0A%20%20<script%20src=%22https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js%22></script>%0A</body>%0A</html>" style="display:block; margin-bottom:10px;">Download index.html</a>

Download css/style.css

<a download="style.css" href="data:text/css;charset=utf-8,/*%20Global%20reset%20and%20typography%20*/%0A*%20{%0A%20%20box-sizing:%20border-box;%0A}%0Abody%20{%0A%20%20font-family:%20Arial,%20sans-serif;%0A%20%20margin:%200;%0A%20%20padding:%200;%0A}%0A%0A/*%20Page%20Heading%20*/%0Aheader%20h1%20{%0A%20%20font-size:%202em;%0A%20%20margin:%2020px%200;%0A}%0A%0A/*%20Tall%20Section%20*/%0A.tall-section%20{%0A%20%20height:%201000px;%0A%20%20background-color:%20%23f5f5f5;%0A%20%20padding:%2020px;%0A%20%20text-align:%20left;%0A}%0A%0A/*%20Optional%20Menu%20Sections%20*/%0A.section%20{%0A%20%20position:%20relative;%0A%20%20padding:%2040px%2020px%2020px;%0A%20%20margin-bottom:%2020px;%0A%20%20border:%201px%20solid%20%23ddd;%0A%20%20background-color:%20%23f8f8f8;%0A}%0A%0A.title%20{%0A%20%20position:%20absolute;%0A%20%20top:%200;%0A%20%20right:%200;%0A%20%20width:%20100px;%0A%20%20background-color:%20darkgray;%0A%20%20color:%20white;%0A%20%20padding:%205px%2010px;%0A%20%20font-weight:%20bold;%0A%20%20border:%201px%20solid%20black;%0A}%0A%0A#chicken%20.title%20{%0A%20%20background-color:%20%23d9534f;%0A}%0A%0A#beef%20.title%20{%0A%20%20background-color:%20%232c9fc9;%0A}%0A%0A#sushi%20.title%20{%0A%20%20background-color:%20%23f0ad4e;%0A}%0A%0A/*%20Mobile%20Navbar%20Dropdown%20Customization%20*/%0A@media%20(max-width:%20767px)%20{%0A%20%20.navbar-collapse%20{%0A%20%20%20%20background-color:%20%23eee;%0A%20%20%20%20width:%20100%%3B%0A%20%20%20%20position:%20absolute;%0A%20%20%20%20top:%2050px;%20/*%20Adjust%20if%20your%20navbar%20height%20changes%20*/%0A%20%20%20%20left:%200;%0A%20%20%20%20padding:%2010px%200;%0A%20%20}%0A}" style="display:block;">Download style.css</a>

Instructions:

Download both files.
Create a folder named module3-solution.
Place index.html directly inside module3-solution.
Create a subfolder inside module3-solution named css.
Place style.css inside the css folder.
Commit and push your folder structure to your GitHub repository.
Enjoy coding and testing your responsive web page on GitHub Pages!
Feel free to reach out if you have any further questions. Happy coding!



Du sa:
Opplastet bilde
this is wanted result 
It seems you've shared an image as the desired result but unfortunately, images cannot be processed or viewed directly through this platform. However, if you describe the changes or elements you'd like to adjust or further clarify, I can help you modify your code accordingly to match your expectations. Let me know how I can assist you! for 30 sekunder
Below is a complete, single-page solution that matches the mockup you provided (“Food, LLC” navbar, responsive layout, sections labeled Chicken, Beef, Sushi, and “Back to Top” links). This solution follows the assignment requirements, including:

Bootstrap for responsive design and the navbar
A navbar that collapses into a toggle button on mobile
A centered “Our Menu” heading
Three sections (Chicken, Beef, Sushi) arranged using Bootstrap’s grid:
Desktop (col-md-4 each, all on one row)
Tablet (col-sm-6 for Chicken and Beef in the first row, col-sm-12 for Sushi in the second row)
Mobile (col-xs-12 stacked)
A “Back to Top” link at the bottom of each section that jumps back to the top heading
The final folder structure should look like this:

module3-solution/
├── index.html
└── css/
    └── style.css
index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Our Menu</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <!-- Custom CSS (placed in the css folder) -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <!-- Company name -->
        <a class="navbar-brand" href="#">Food, LLC</a>
        <!-- Mobile menu button: visible only on extra small screens -->
        <button type="button" class="navbar-toggle collapsed visible-xs" data-toggle="collapse" data-target="#mobile-menu" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <!-- Mobile dropdown menu -->
      <div class="collapse navbar-collapse" id="mobile-menu">
        <ul class="nav navbar-nav">
          <li><a href="#chicken">Chicken</a></li>
          <li><a href="#beef">Beef</a></li>
          <li><a href="#sushi">Sushi</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Heading (anchor "top" for 'Back to Top' links) -->
  <header class="text-center">
    <h1 id="top">Our Menu</h1>
  </header>

  <!-- Main container for sections -->
  <div class="container">
    <div class="row">
      <!-- Chicken Section -->
      <div class="col-xs-12 col-sm-6 col-md-4 section" id="chicken">
        <div class="title">Chicken</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.  
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
          <a href="#top">Back To Top</a>
        </p>
      </div>

      <!-- Beef Section -->
      <div class="col-xs-12 col-sm-6 col-md-4 section" id="beef">
        <div class="title">Beef</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <p><em>End of Beef section</em></p>
        <p>
          <a href="#top">Back To Top</a>
        </p>
      </div>

      <!-- Sushi Section -->
      <div class="col-xs-12 col-sm-12 col-md-4 section" id="sushi">
        <div class="title">Sushi</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.  
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
          <a href="#top">Back To Top</a>
        </p>
      </div>
    </div>
  </div>

  <!-- jQuery and Bootstrap JavaScript (needed for the navbar toggle) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>
css/style.css
/* Global reset and typography */
* {
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Page Heading */
header h1 {
  font-size: 2em;
  margin: 20px 0;
}

/* Section container */
.section {
  position: relative;
  padding: 40px 20px 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
}

/* Color-coded labels for sections */
.title {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  background-color: darkgray;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  border: 1px solid black;
}
#chicken .title { background-color: #d9534f; }
#beef .title    { background-color: #2c9fc9; }
#sushi .title   { background-color: #f0ad4e; }

/* Mobile Navbar Dropdown Customization */
@media (max-width: 767px) {
  .navbar-collapse {
    background-color: #eee;
    width: 100%;
    position: absolute;
    top: 50px; /* Adjust if your navbar height changes */
    left: 0;
    padding: 10px 0;
  }
}
Explanation of Key Points
Bootstrap Navbar

In desktop/tablet view, only “Food, LLC” is visible.
In mobile view (max-width: 767px), the .navbar-toggle button appears, allowing the user to click and expand the menu.
Anchors and “Back to Top”

The <h1> has id="top", so <a href="#top">Back To Top</a> jumps back to the heading.
Responsive Columns

Desktop (col-md-4 each → 3 columns in one row).
Tablet (col-sm-6 for first two sections, col-sm-12 for the last → first row has 2 sections side by side, second row has 1 section).
Mobile (col-xs-12 → each section on its own row).
Section Title

Positioned absolutely in the top-right corner of each section with a color-coded background.
This code should match the “wanted result” from your mockup: a responsive page with a scrollable layout, collapsible mobile menu, and anchored sections for Chicken, Beef, and Sushi (each with a “Back to Top” link).

Happy coding! If you have any questions, feel free to ask.



Du sa:
nav styling is missing
Resonnerte for 12 sekunder
Below is an updated solution with custom navbar styling to better match the mockup. The key change is adding a “Navbar Styling” section in style.css that overrides Bootstrap’s default colors and gives the navbar a distinct look. You can adjust the colors as you like.

Use the same folder structure:

module3-solution/
├── index.html
└── css/
    └── style.css
index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Our Menu</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <!-- Custom CSS -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <!-- Company name -->
        <a class="navbar-brand" href="#">Food, LLC</a>
        <!-- Mobile menu button: visible only on extra small screens -->
        <button type="button" class="navbar-toggle collapsed visible-xs" 
                data-toggle="collapse" data-target="#mobile-menu" 
                aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <!-- Mobile dropdown menu -->
      <div class="collapse navbar-collapse" id="mobile-menu">
        <ul class="nav navbar-nav">
          <li><a href="#chicken">Chicken</a></li>
          <li><a href="#beef">Beef</a></li>
          <li><a href="#sushi">Sushi</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Heading -->
  <header class="text-center">
    <h1 id="top">Our Menu</h1>
  </header>

  <!-- Main container for sections -->
  <div class="container">
    <div class="row">
      <!-- Chicken Section -->
      <div class="col-xs-12 col-sm-6 col-md-4 section" id="chicken">
        <div class="title">Chicken</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <p><a href="#top">Back To Top</a></p>
      </div>

      <!-- Beef Section -->
      <div class="col-xs-12 col-sm-6 col-md-4 section" id="beef">
        <div class="title">Beef</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <p><em>End of Beef section</em></p>
        <p><a href="#top">Back To Top</a></p>
      </div>

      <!-- Sushi Section -->
      <div class="col-xs-12 col-sm-12 col-md-4 section" id="sushi">
        <div class="title">Sushi</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <p><a href="#top">Back To Top</a></p>
      </div>
    </div>
  </div>

  <!-- jQuery and Bootstrap JavaScript (needed for the navbar toggle) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>
css/style.css
/* Global reset and typography */
* {
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Navbar Styling: override Bootstrap defaults */
.navbar-default {
  background-color: #333;    /* Dark background */
  border-color: #222;       /* Darker border */
}
.navbar-default .navbar-brand {
  color: #ffffff;           /* White brand text */
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #dddddd;
}
.navbar-default .navbar-nav > li > a {
  color: #ffffff;           /* White nav link text */
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #dddddd;
}
/* Toggle icon bars (mobile menu) */
.navbar-default .navbar-toggle .icon-bar {
  background-color: #ffffff;
}

/* Page Heading */
header h1 {
  font-size: 2em;
  margin: 20px 0;
}

/* Section container */
.section {
  position: relative;
  padding: 40px 20px 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
}

/* Color-coded labels for sections */
.title {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  background-color: darkgray;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  border: 1px solid black;
}
#chicken .title { background-color: #d9534f; }
#beef .title    { background-color: #2c9fc9; }
#sushi .title   { background-color: #f0ad4e; }

/* Mobile Navbar Dropdown Customization */
@media (max-width: 767px) {
  .navbar-collapse {
    background-color: #444;  /* Darker background for mobile menu */
    width: 100%;
    position: absolute;
    top: 50px;  /* Adjust if your navbar height changes */
    left: 0;
    padding: 10px 0;
  }
}
Key Additions
Navbar Default Overrides

.navbar-default { background-color: #333; } sets a dark background.
.navbar-default .navbar-brand { color: #fff; } ensures the brand text is white, etc.
Mobile Toggle Icon Bars

.navbar-default .navbar-toggle .icon-bar { background-color: #fff; } makes the “hamburger” lines white on a dark background.
Mobile Collapse Background

In the @media (max-width: 767px) query, we set .navbar-collapse { background-color: #444; } to ensure the dropdown menu stands out on small screens.
Feel free to adjust the colors to match your exact design preference. Once you place these files in your GitHub repository, your page should display a styled navbar that closely matches the assignment mockup. Enjoy coding!



Du sa:
Opplastet bilde
navbar needs location adustments, its off screen in mobile view
Resonnerte for 16 sekunder
Below is a quick fix to make the mobile dropdown menu line up properly and not get cut off. The main culprit is the absolute positioning in the media query, which can push the collapsed menu off screen depending on navbar height and screen size.

1) Remove or Adjust Absolute Positioning
In your style.css, locate the @media (max-width: 767px) rule for .navbar-collapse and remove (or comment out) the position: absolute; top: 50px; left: 0; lines. A simple approach is to let Bootstrap’s default behavior handle the mobile dropdown layout. For example:

@media (max-width: 767px) {
  .navbar-collapse {
    background-color: #444; /* or whatever color you want */
    width: 100%;
    padding: 10px 0;
    /* Remove or comment out these lines:
       position: absolute;
       top: 50px;
       left: 0;
    */
  }
}
With this change:

The collapsed navbar items will appear directly below the brand name.
The menu will push the content down (instead of overlapping it).
You won’t risk the dropdown being partially off-screen.
If you do want the dropdown to overlay the content, keep position: absolute; but make sure top matches your actual navbar height (e.g., top: 51px or 52px) so it lines up exactly beneath the navbar.

2) Example Updated style.css
Below is an example style.css that uses a dark navbar theme, ensures full-width dropdown, and removes the absolute positioning so the mobile menu flows naturally. You can tweak the colors to match your design.

/* Global reset and typography */
* {
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Navbar Styling */
.navbar-default {
  background-color: #333;    /* Dark background */
  border-color: #222;
}
.navbar-default .navbar-brand,
.navbar-default .navbar-nav > li > a {
  color: #ffffff;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-nav > li > a:hover {
  color: #dddddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #ffffff;
}

/* Page Heading */
header h1 {
  font-size: 2em;
  margin: 20px 0;
}

/* Section container */
.section {
  position: relative;
  padding: 40px 20px 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
}

/* Color-coded labels for sections */
.title {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  background-color: darkgray;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  border: 1px solid black;
}
#chicken .title { background-color: #d9534f; }
#beef .title    { background-color: #2c9fc9; }
#sushi .title   { background-color: #f0ad4e; }

/* Mobile Navbar Dropdown Customization */
@media (max-width: 767px) {
  .navbar-collapse {
    background-color: #444;
    width: 100%;
    padding: 10px 0;
    /* Remove absolute positioning so it won't go off-screen */
    /* position: absolute; 
       top: 50px; 
       left: 0; */
  }
}
3) Summary
Remove or adjust the position: absolute; top: 50px; left: 0; inside your mobile media query.
Let Bootstrap handle the dropdown in normal flow so it won’t be pushed off screen.
If you want an overlay style, keep position: absolute; but ensure top: is set precisely to your navbar’s height.
With these tweaks, your mobile menu should appear exactly where you want it—fully visible and aligned with the rest of the page. Happy coding!



Du sa:
color the nav links based on title id 
Resonnerte for 11 sekunder
Below is a simple approach to color each navbar link according to its corresponding section’s color (i.e., Chicken = #d9534f, Beef = #2c9fc9, Sushi = #f0ad4e). We’ll use CSS attribute selectors that match the href for each link and override any global link color rules in the navbar.

1. Add Attribute-Selector Rules in Your CSS
In your style.css, locate your existing navbar rules (e.g., .navbar-default .navbar-nav > li > a { ... }) and either remove or comment out the global color setting so it doesn’t override individual colors. Then add rules for each link like so:

/* Example: remove or comment out any universal nav link color if you want each link to be distinct
.navbar-default .navbar-nav > li > a {
  color: #ffffff; 
}
*/

/* Color each link based on its section ID */

/* Chicken link */
.navbar-default .navbar-nav > li > a[href="#chicken"] {
  color: #d9534f;
}
.navbar-default .navbar-nav > li > a[href="#chicken"]:hover,
.navbar-default .navbar-nav > li > a[href="#chicken"]:focus {
  color: #b24742; /* darker shade on hover/focus */
}

/* Beef link */
.navbar-default .navbar-nav > li > a[href="#beef"] {
  color: #2c9fc9;
}
.navbar-default .navbar-nav > li > a[href="#beef"]:hover,
.navbar-default .navbar-nav > li > a[href="#beef"]:focus {
  color: #237b90; /* darker shade on hover/focus */
}

/* Sushi link */
.navbar-default .navbar-nav > li > a[href="#sushi"] {
  color: #f0ad4e;
}
.navbar-default .navbar-nav > li > a[href="#sushi"]:hover,
.navbar-default .navbar-nav > li > a[href="#sushi"]:focus {
  color: #c48a3a; /* darker shade on hover/focus */
}
Notes
Hover/Focus Colors: You can choose any darker/lighter shades for hover/focus states.
Brand Link: If you want the brand (“Food, LLC”) to remain a different color (e.g., white), keep or add a separate rule:
.navbar-default .navbar-brand {
  color: #ffffff; /* or any color you prefer */
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #dddddd;
}
Other Links: If you have other links in the navbar that don’t match #chicken, #beef, or #sushi, you can either set a default color for them or leave them as-is.
2. Verify the Result
Refresh your page and open it in a browser.
Resize the browser to see the effect in desktop, tablet, and mobile views.
Each link (Chicken, Beef, Sushi) should now have its own color in both desktop and mobile nav.
This method is straightforward and relies on the fact that each <a> tag in the navbar references an ID (e.g., href="#chicken"). With attribute selectors, you can style each link individually without extra classes or JavaScript. Happy coding!



Du sa:
new assignemint Module 4 Coding Assignment
Coursera course: HTML, CSS, and Javascript for Web Developers

Let's write a little bit of Javascript programming code to practice what we've learned! Woohoo! :-)

Time to complete: About 30 minutes.

Ask questions in Discussions if you get stuck! We are all learning, and going through getting stuck and then unstuck (even with someone's help) can be a very valuable learning experience!

Summary: In this assignment, you are going to loop over an array of names and print out either a hello or goodbye to that name to the browser console. If the name starts with a letter j or J, you are to print out Goodbye JSomeName. If the name starts with any other letter, you are to print out Hello SomeName.

However, in order to do that printing you will have to use 2 externally provided libraries whose code is not 100% ready to be used. Using the things we've learned in this module, your job will be to fix the code in those libraries.

You will get some starter code to work with where all the steps of what you need to do are clearly spelled out for you.

Here is what you will need to do in order to complete the assignment:

(If you haven't already) Create a GitHub.com account and a repository that you will use for this class.

(If you haven't already) Follow the Development Setup Video (beginning of Module 1) instructions on how to create a repository and set it up such that you can host and view your finished web pages on GitHub Pages, i.e., GitHub.io domain name. You will need to provide that URL for your peer review.

Create a folder in your repository that will serve as a container folder for your solution to this assignment. You can call it whatever you want. For example, module4-solution or mod4_solution, etc.

You will need to download the starter files for this project and copy them into your solution container folder (e.g., into module4-solution). Since assignments and starter code get updated from time to time, don't assume that you have the latest version already on your system. The best way to ensure that you are working with the very latest starter code is either git clone the fullstack-course4 repository into a new directory OR, if you've already done 'git clone' previously, you can simply open up your command prompt (cmd on Windows or Terminal on Mac), navigate to the folder where the fullstack-course4 repository was previously cloned into and do: git pull.

This will update your local copy of the repository with whatever changes have been made since the last update.

As a reminder, the full repository URL is: https://github.com/jhu-ep-coursera/fullstack-course4

Once the local repository on your system is up to date, YOU HAVE A CHOICE! If you want a slightly more challenging assignment, use the code in the "harder" folder as your starting point. If you want a slightly less challenging assignment, use the code in the "easier" folder as your starting point. The difference between the two starting points is that in the "easier" starting point, there are a few steps that are already completed for you.

Harder: If you want a slightly more challenging assignment, copy all the contents of the fullstack-course4/assignments/assignment4/assignment4-solution-starter/harder folder into your newly created solutions container folder for this assignment, e.g., 'module4-solution'.

Easier: If you want a slightly less challenging assignment, copy all the contents of the fullstack-course4/assignments/assignment4/assignment4-solution-starter/easier folder into your newly created solutions container folder for this assignment, e.g., 'module4-solution'.

NOTE: the provided starter code will not run. It is up to you to follow the instructions to get it to run. Once you've copied the starter code of your choice into your solution folder, open up your solution folder in the code editor. Open up script.js file and follow the steps.

When you are continuously working on the assignment, use Browser Sync and keep Chrome open to the Console tab of the Chrome Developer Tools. You will likely see errors there to start with. Follow the steps outlined in the starter code and those errors should go away by the time you finish the last step. If you still see errors at that point or you are not seeing the output you're supposed to see, you probably made a mistake somewhere, so look into that and investigate.

Remember, if you are stuck, ask questions on the course Discussion forum.
Resonnerte for 10 sekunder
Below is a sample completed solution to the Module 4 Coding Assignment. It follows the typical structure:

index.html – the main page that includes all scripts in the proper order.
SpeakHello.js – defines helloSpeaker and attaches it to the global object.
SpeakGoodBye.js – defines byeSpeaker and attaches it to the global object.
script.js – loops over the names array, checks for “j” or “J,” and uses the appropriate speaker.
You can place these files in a folder named module4-solution (or any name you like), push them to your GitHub repository, and then load index.html in your browser (or via GitHub Pages) to see the console output.

1) index.html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Module 4 Solution</title>
</head>
<body>

  <!-- 
    Open the Console in the Browser Developer Tools to see the output.
    (In Chrome: View > Developer > JavaScript Console)
  -->

  <!-- 
    IMPORTANT: Load the "speaker" files FIRST, 
    then script.js LAST so it can use helloSpeaker and byeSpeaker.
  -->
  <script src="SpeakHello.js"></script>
  <script src="SpeakGoodBye.js"></script>
  <script src="script.js"></script>

</body>
</html>
2) SpeakHello.js
// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function (window) {
  // STEP 3: Create an object, called 'helloSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global context.
  var helloSpeaker = {};

  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  var speakWord = "Hello";

  // STEP 4: Rewrite the 'speak' function such that it is attached to the
  // helloSpeaker object instead of being a standalone function.
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose the 'helloSpeaker' object to the global scope.
  window.helloSpeaker = helloSpeaker;

})(window);
3) SpeakGoodBye.js
// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function (window) {
  // STEP 7: Create an object, called 'byeSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global object.
  var byeSpeaker = {};

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  // STEP 8: Rewrite the 'speak' function such that it is attached to the
  // byeSpeaker object instead of being a standalone function.
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose the 'byeSpeaker' object to the global scope.
  window.byeSpeaker = byeSpeaker;

})(window);
4) script.js
// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
// Module 4 Assignment Instructions.
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye".
// The starter code for this assignment is in the 'harder' folder.
// You are NOT allowed to remove or alter the lines that say 'DO NOT MODIFY'.
// *******************************

(function () {
  // DO NOT MODIFY: These are the names
  var names = [
    "Yaakov", "John", "Jen", "Jason", 
    "Paul", "Frank", "Larry", "Paula", 
    "Laura", "Jim"
  ];

  // STEP 10: (NOTHING TO DO. Already done for you)
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using either helloSpeaker's or byeSpeaker's 'speak' method.
  // See Lecture 50, part 1
  for (var i = 0; i < names.length; i++) {

    // STEP 11: Retrieve the first letter of the current name in the loop.
    // Use the string object's 'charAt' function. Since we are looking for
    // names that start with either upper case or lower case 'J' or 'j', call
    // string object's 'toLowerCase' method on the result so we can compare
    // to lower case character 'j' afterwards.
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 12: Compare the 'firstLetter' to lower case 'j'. If the same,
    // call byeSpeaker's 'speak' method with the current name. Otherwise,
    // call helloSpeaker's 'speak' method with the current name.
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
How to Run
Create a folder named module4-solution (or any name you like).
Place the 4 files (index.html, SpeakHello.js, SpeakGoodBye.js, script.js) inside.
Open index.html in your browser.
Open the Console in the browser’s developer tools (e.g., in Chrome, go to View → Developer → JavaScript Console).
You should see output that looks like:
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
That’s it! You’ve satisfied the requirements for Module 4:

Used two separate speaker objects (helloSpeaker, byeSpeaker) attached to the global object through IIFEs.
Checked each name’s first letter to decide whether to say Hello or Good Bye.
Logged results to the console.
If you have any questions or issues, remember to check the course Discussions or ask for help. Good luck and happy coding!



Du sa:
downloadable files
It seems you are asking for the downloadable files for the certification exercise. Unfortunately, I am unable to directly provide downloadable links for files through this interface. I will guide you on how to create the downloadable files on your own: 1. **Create the Files on Your Local System:** To create the four required files: `index.html`, `SpeakHello.js`, `SpeakGoodBye.js`, and `script.js`, you can easily copy the code from previous responses and paste it into separate `.html` and `.js` files in any folder on your computer. For instance: - Save the `index.html` code in a file named **index.html**. - Save the `SpeakHello.js` code in a file named **SpeakHello.js**. - Save the `SpeakGoodBye.js` code in a file named **SpeakGoodBye.js**. - Save the `script.js` code in a file named **script.js**. 2. **File Structure:** Here’s the desired folder structure: ``` module4-solution/ ├── index.html ├── SpeakHello.js ├── SpeakGoodBye.js └── script.js ``` 3. **How to Upload to GitHub:** If you're using GitHub for version control and hosting: 1. Create a new repository on GitHub, for example `module4-solution`. 2. Initialize it locally using `git init`. 3. Add the files to the repository: ```bash git add . ``` 4. Commit the files: ```bash git commit -m "Initial commit for module 4 solution" ``` 5. Push them to your GitHub repository. 4. **How to Test:** 1. Open `index.html` in any browser. 2. Open the developer tools (Ctrl+Shift+I in most browsers) and go to the **Console** tab. 3. You should see the expected console outputs of either "Hello" or "Good Bye" printed for each name. --- If you are still unsure or need further help, feel free to ask! for 24 sekunder
Below are four downloadable files for your Module 4 Coding Assignment. Create a folder (for example, module4-solution) and place these files inside:

module4-solution/
├── index.html
├── SpeakHello.js
├── SpeakGoodBye.js
└── script.js
Click each link below to download the corresponding file.

Download index.html

<a download="index.html" href="data:text/html;charset=utf-8,<!DOCTYPE%20html>%0A<html>%0A<head>%0A%20%20<meta%20charset=%22utf-8%22>%0A%20%20<title>Module%204%20Solution</title>%0A</head>%0A<body>%0A%0A%20%20<!--%20Open%20the%20Console%20in%20the%20Browser%20Developer%20Tools%20to%20see%20the%20output.%0A%20(In%20Chrome:%20View%20>%20Developer%20>%20JavaScript%20Console) -->%0A%0A%20%20<!--%20IMPORTANT:%20Load%20the%20%22speaker%22%20files%20FIRST,%20then%20script.js%20LAST%20so%20it%20can%20use%20helloSpeaker%20and%20byeSpeaker. -->%0A%20%20<script%20src=%22SpeakHello.js%22></script>%0A%20%20<script%20src=%22SpeakGoodBye.js%22></script>%0A%20%20<script%20src=%22script.js%22></script>%0A%0A</body>%0A</html>">Download index.html</a>

Download SpeakHello.js

<a download="SpeakHello.js" href="data:text/javascript;charset=utf-8,//%20STEP%202:%20Wrap%20the%20entire%20contents%20of%20SpeakHello.js%20inside%20of%20an%20IIFE%0A(function%20(window)%20{%0A%20%20var%20helloSpeaker%20=%20{};%0A%20%20var%20speakWord%20=%20%22Hello%22;%0A%20%20helloSpeaker.speak%20=%20function(name)%20{%0A%20%20%20%20console.log(speakWord%20+%20%22%20%22%20+%20name);%0A%20%20};%0A%20%20window.helloSpeaker%20=%20helloSpeaker;%0A})(window);">Download SpeakHello.js</a>

Download SpeakGoodBye.js

<a download="SpeakGoodBye.js" href="data:text/javascript;charset=utf-8,//%20STEP%206:%20Wrap%20the%20entire%20contents%20of%20SpeakGoodBye.js%20inside%20of%20an%20IIFE%0A(function%20(window)%20{%0A%20%20var%20byeSpeaker%20=%20{};%0A%20%20var%20speakWord%20=%20%22Good%20Bye%22;%0A%20%20byeSpeaker.speak%20=%20function(name)%20{%0A%20%20%20%20console.log(speakWord%20+%20%22%20%22%20+%20name);%0A%20%20};%0A%20%20window.byeSpeaker%20=%20byeSpeaker;%0A})(window);">Download SpeakGoodBye.js</a>

Download script.js

<a download="script.js" href="data:text/javascript;charset=utf-8,(function()%20{%0A%20%20var%20names%20=%20[%0A%20%20%20%20%22Yaakov%22,%20%22John%22,%20%22Jen%22,%20%22Jason%22,%0A%20%20%20%20%22Paul%22,%20%22Frank%22,%20%22Larry%22,%20%22Paula%22,%0A%20%20%20%20%22Laura%22,%20%22Jim%22%0A%20%20];%0A%20%20for%20(var%20i%20=%200;%20i%20<%20names.length;%20i++)%20{%0A%20%20%20%20var%20firstLetter%20=%20names[i].charAt(0).toLowerCase();%0A%20%20%20%20if%20(firstLetter%20===%20'j')%20{%0A%20%20%20%20%20%20byeSpeaker.speak(names[i]);%0A%20%20%20%20}%20else%20{%0A%20%20%20%20%20%20helloSpeaker.speak(names[i]);%0A%20%20%20%20}%0A%20%20}%0A})();">Download script.js</a>

Instructions
Download each file by clicking the links above.
Create a folder named module4-solution on your computer.
Place the files inside the folder with the following structure:
module4-solution/
├── index.html
├── SpeakHello.js
├── SpeakGoodBye.js
└── script.js
Push the folder to your GitHub repository.
Open index.html in your browser and check the Developer Console to see the output.
Happy coding!



Du sa:
links are broken
Resonnerte for 12 sekunder
Below are updated downloadable file links with URL-encoded content. Click each link to download the file. (If your browser doesn’t support data URLs for downloading, simply copy the code from the code block below and paste it into a new file using your text editor.)

The folder structure should be:

module4-solution/
├── index.html
├── SpeakHello.js
├── SpeakGoodBye.js
└── script.js
Download index.html

<a download="index.html" href="data:text/html;charset=utf-8,%3C!DOCTYPE%20html%3E%0A%3Chtml%3E%0A%3Chead%3E%0A%20%20%3Cmeta%20charset%3D%22utf-8%22%3E%0A%20%20%3Ctitle%3EModule%204%20Solution%3C/title%3E%0A%3C/head%3E%0A%3Cbody%3E%0A%20%20%3C!--%20Open%20the%20Console%20in%20the%20Browser%20Developer%20Tools%20to%20see%20the%20output.%20--%3E%0A%20%20%3Cscript%20src%3D%22SpeakHello.js%22%3E%3C/script%3E%0A%20%20%3Cscript%20src%3D%22SpeakGoodBye.js%22%3E%3C/script%3E%0A%20%20%3Cscript%20src%3D%22script.js%22%3E%3C/script%3E%0A%3C/body%3E%0A%3C/html%3E">Download index.html</a>

Download SpeakHello.js

<a download="SpeakHello.js" href="data:text/javascript;charset=utf-8,//%20STEP%202:%20Wrap%20the%20entire%20contents%20of%20SpeakHello.js%20inside%20of%20an%20IIFE%0A(function(window)%20{%0A%20%20var%20helloSpeaker%20=%20{};%0A%20%20var%20speakWord%20=%20%22Hello%22;%0A%20%20helloSpeaker.speak%20=%20function(name)%20{%0A%20%20%20%20console.log(speakWord%20+%20%22%20%22%20+%20name);%0A%20%20};%0A%20%20window.helloSpeaker%20=%20helloSpeaker;%0A})(window);">Download SpeakHello.js</a>

Download SpeakGoodBye.js

<a download="SpeakGoodBye.js" href="data:text/javascript;charset=utf-8,//%20STEP%206:%20Wrap%20the%20entire%20contents%20of%20SpeakGoodBye.js%20inside%20of%20an%20IIFE%0A(function(window)%20{%0A%20%20var%20byeSpeaker%20=%20{};%0A%20%20var%20speakWord%20=%20%22Good%20Bye%22;%0A%20%20byeSpeaker.speak%20=%20function(name)%20{%0A%20%20%20%20console.log(speakWord%20+%20%22%20%22%20+%20name);%0A%20%20};%0A%20%20window.byeSpeaker%20=%20byeSpeaker;%0A})(window);">Download SpeakGoodBye.js</a>

Download script.js

<a download="script.js" href="data:text/javascript;charset=utf-8,(function()%20{%0A%20%20var%20names%20=%20[%0A%20%20%20%20%22Yaakov%22,%20%22John%22,%20%22Jen%22,%20%22Jason%22,%0A%20%20%20%20%22Paul%22,%20%22Frank%22,%20%22Larry%22,%20%22Paula%22,%0A%20%20%20%20%22Laura%22,%20%22Jim%22%0A%20%20];%0A%20%20for(var%20i%20=%200;%20i%20%3C%20names.length;%20i++)%20{%0A%20%20%20%20var%20firstLetter%20=%20names[i].charAt(0).toLowerCase();%0A%20%20%20%20if(firstLetter%20===%20'j')%20{%0A%20%20%20%20%20%20byeSpeaker.speak(names[i]);%0A%20%20%20%20}%20else%20{%0A%20%20%20%20%20%20helloSpeaker.speak(names[i]);%0A%20%20%20%20}%0A%20%20}%0A})();">Download script.js</a>

Instructions
Download each file by clicking the above links.
Create a folder named module4-solution on your computer.
Place the files inside the folder using the structure shown above.
Push the folder to your GitHub repository.
Open index.html in your browser and then open the Developer Console to view the output.
If you encounter any issues with the links, simply copy the code from each section into your own files. Happy coding!



Du sa:
print names in html
Resonnerte for 9 sekunder
Below is an updated solution that not only logs the greetings to the console but also prints them into the HTML. In this version, we’ve added a dedicated output container in the HTML and modified the speaker functions to append their messages as new paragraphs into that container.

The folder structure remains:

module4-solution/
├── index.html
├── SpeakHello.js
├── SpeakGoodBye.js
└── script.js
Updated Files
1. index.html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Module 4 Solution</title>
  <style>
    /* Optional: simple styling for the output */
    #output p {
      font-size: 1.2em;
      margin: 5px 0;
    }
  </style>
</head>
<body>

  <!-- Page Heading -->
  <h1>Module 4: Greeting Names</h1>
  <p>Check the console and see the names printed below:</p>

  <!-- Output container for greetings -->
  <div id="output"></div>

  <!-- Load the speaker files first -->
  <script src="SpeakHello.js"></script>
  <script src="SpeakGoodBye.js"></script>
  <!-- Then the main script -->
  <script src="script.js"></script>
</body>
</html>
2. SpeakHello.js
// Wrap the entire contents inside an IIFE
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function(name) {
    var message = speakWord + " " + name;
    // Log to console
    console.log(message);
    // Append to HTML output
    var outputDiv = document.getElementById("output");
    if (outputDiv) {
      var p = document.createElement("p");
      p.textContent = message;
      outputDiv.appendChild(p);
    }
  };

  // Expose helloSpeaker to the global object
  window.helloSpeaker = helloSpeaker;

})(window);
