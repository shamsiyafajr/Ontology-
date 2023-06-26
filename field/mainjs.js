//declare variables
var homebutton = document.getElementById("leftmenuhome");
var enrolbutton = document.getElementById("leftmenuenrol");
var studentbutton = document.getElementById("leftmenustudent");
var adminbutton = document.getElementById("leftmenuadmin");
var bodymsg = document.getElementById("maincontentp");
var fdbkmsg = document.getElementById("feedbackp");
var loginForm = document.getElementById("login-page");
var exitbutton = document.getElementById("exit-button");
var loginbutton = document.getElementById("login-button");
var exitbutton2 = document.getElementById("exit-button2");
var signupForm = document.getElementById("signup-page");
var chaptersPane = document.getElementById("chapters");
var selectedchapter = document.getElementById("chapter");
var chapter1 = document.getElementById("chapter-1-notes");
var chapter2 = document.getElementById("chapter-2-notes");
var chapter3 = document.getElementById("chapter-3-notes");
var chapter4 = document.getElementById("chapter-4-notes");
var chapter5 = document.getElementById("chapter-5-notes");
var chapter6 = document.getElementById("chapter-6-notes");
var test1 = document.getElementById("chapter-1-test");
var test2 = document.getElementById("chapter-2-test");
var test3 = document.getElementById("chapter-3-test");
var test4 = document.getElementById("chapter-4-test");
var test5 = document.getElementById("chapter-5-test");
var test6 = document.getElementById("chapter-6-test");
var logoutBtn = document.getElementById("logoutbutton");
var starttestBtn = document.getElementById("starttestbutton");


//add event listener to start test button
starttestBtn.addEventListener('click', function startTestFunc(){
    chapter1.style.display = "none";
    chapter2.style.display = "none";
    chapter3.style.display = "none";
    chapter4.style.display = "none";
    chapter5.style.display = "none";
    chapter6.style.display = "none";
    loginForm.style.display = 'none';
    signupForm.style.display =  'none';
    if (selectedchapter.selectedIndex==1){
        test1.style.display = 'grid';
        test2.style.display = 'none';
        test3.style.display = 'none';
        test4.style.display = 'none';
        test5.style.display = 'none';
        test6.style.display = 'none';
    }
    else if (selectedchapter.selectedIndex==2){
        test1.style.display = 'none';
        test2.style.display = 'grid';
        test3.style.display = 'none';
        test4.style.display = 'none';
        test5.style.display = 'none';
        test6.style.display = 'none';
    }
    else if (selectedchapter.selectedIndex==3){
        test1.style.display = 'none';
        test2.style.display = 'none';
        test3.style.display = 'grid';
        test4.style.display = 'none';
        test5.style.display = 'none';
        test6.style.display = 'none';
    }
    else if (selectedchapter.selectedIndex==4){
        test1.style.display = 'none';
        test2.style.display = 'none';
        test3.style.display = 'none';
        test4.style.display = 'grid';
        test5.style.display = 'none';
        test6.style.display = 'none';
    }
    else if (selectedchapter.selectedIndex==5){
        test1.style.display = 'none';
        test2.style.display = 'none';
        test3.style.display = 'none';
        test4.style.display = 'none';
        test5.style.display = 'grid';
        test6.style.display = 'none';
    }
    else if (selectedchapter.selectedIndex==6){
        test1.style.display = 'none';
        test2.style.display = 'none';
        test3.style.display = 'none';
        test4.style.display = 'none';
        test5.style.display = 'none';
        test6.style.display = 'grid';
    }
    else alert("No chapter selected");

})

//add event listener to logout button
logoutBtn.addEventListener('click', function logoutFunc(){
    selectedchapter.selectedIndex=0;
    chapter1.style.display = "none";
    chapter2.style.display = "none";
    chapter3.style.display = "none";
    chapter4.style.display = "none";
    chapter5.style.display = "none";
    chapter6.style.display = "none";
    loginForm.style.display = 'none';
    signupForm.style.display =  'none';
    fdbkmsg.innerHTML = "No active session";
    test1.style.display = 'none';
    test2.style.display = 'none';
    test3.style.display = 'none';
    test4.style.display = 'none';
    test5.style.display = 'none';
    test6.style.display = 'none';
})

//add event listener to select
selectedchapter.addEventListener('change', function handleChange(event){
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    if (selectedchapter.selectedIndex == 1){
        chapter1.style.display = "grid";
        chapter2.style.display = "none";
        chapter3.style.display = "none";
        chapter4.style.display = "none";
        chapter5.style.display = "none";
        chapter6.style.display = "none";
    }
    else if(selectedchapter.selectedIndex == 2){
        chapter1.style.display = "none";
        chapter2.style.display = "grid";
        chapter3.style.display = "none";
        chapter4.style.display = "none";
        chapter5.style.display = "none";
        chapter6.style.display = "none";
    }
    else if(selectedchapter.selectedIndex == 3){
        chapter1.style.display = "none";
        chapter2.style.display = "none";
        chapter3.style.display = "grid";
        chapter4.style.display = "none";
        chapter5.style.display = "none";
        chapter6.style.display = "none";
    }
    else if(selectedchapter.selectedIndex == 4){
        chapter1.style.display = "none";
        chapter2.style.display = "none";
        chapter3.style.display = "none";
        chapter4.style.display = "grid";
        chapter5.style.display = "none";
        chapter6.style.display = "none";
    }
    else if(selectedchapter.selectedIndex == 5){
        chapter1.style.display = "none";
        chapter2.style.display = "none";
        chapter3.style.display = "none";
        chapter4.style.display = "none";
        chapter5.style.display = "grid";
        chapter6.style.display = "none";
    }
    else if(selectedchapter.selectedIndex == 6){
        chapter1.style.display = "none";
        chapter2.style.display = "none";
        chapter3.style.display = "none";
        chapter4.style.display = "none";
        chapter5.style.display = "none";
        chapter6.style.display = "grid";
    }
    else{
        chapter1.style.display = "none";
        chapter2.style.display = "none";
        chapter3.style.display = "none";
        chapter4.style.display = "none";
        chapter5.style.display = "none";
        chapter6.style.display = "none";
    }
    test1.style.display = 'none';
    test2.style.display = 'none';
    test3.style.display = 'none';
    test4.style.display = 'none';
    test5.style.display = 'none';
    test6.style.display = 'none';
});

//add event listener to home button for mouse over
homebutton.addEventListener('mouseover', function mouseOverFunc(){
    homebutton.style.backgroundColor = 'blue';
});

//add event listener to home button for mouse out
homebutton.addEventListener('mouseout', function mouseOutFunc(){
    homebutton.style.backgroundColor = 'rgba(3, 8, 39, 0.911)';
});

enrolbutton.addEventListener('mouseover', function mouseOverFunc(){
    enrolbutton.style.backgroundColor = 'blue';
});

enrolbutton.addEventListener('mouseout', function mouseOutFunc(){
    enrolbutton.style.backgroundColor = 'rgba(3, 8, 39, 0.911)';
});

studentbutton.addEventListener('mouseover', function mouseOverFunc(){
    studentbutton.style.backgroundColor = 'blue';
});

studentbutton.addEventListener('mouseout', function mouseOutFunc(){
    studentbutton.style.backgroundColor = 'rgba(3, 8, 39, 0.911)';
});

adminbutton.addEventListener('mouseover', function mouseOverFunc(){
    adminbutton.style.backgroundColor = 'blue';
});

adminbutton.addEventListener('mouseout', function mouseOutFunc(){
    adminbutton.style.backgroundColor = 'rgba(3, 8, 39, 0.911)';
});

//add event listener to student button for click
studentbutton.addEventListener('click', function showLoginForm()
{
    signupForm.style.display = 'none';
    selectedchapter.selectedIndex = 0;
    chapter1.style.display = "none";
    chapter2.style.display = "none";
    chapter3.style.display = "none";
    chapter4.style.display = "none";
    chapter5.style.display = "none";
    chapter6.style.display = "none";
    if (loginForm.style.display == 'flex'){loginForm.style.display = 'none'}
    else loginForm.style.display = 'flex';
    test1.style.display = 'none';
    test2.style.display = 'none';
    test3.style.display = 'none';
    test4.style.display = 'none';
    test5.style.display = 'none';
    test6.style.display = 'none';
});

//add event listener to enrol button for click
enrolbutton.addEventListener('click', function showSignupForm(){
    loginForm.style.display = 'none';
    selectedchapter.selectedIndex = 0;
    chapter1.style.display = "none";
    chapter2.style.display = "none";
    chapter3.style.display = "none";
    chapter4.style.display = "none";
    chapter5.style.display = "none";
    chapter6.style.display = "none";
    if (signupForm.style.display == 'flex'){signupForm.style.display = 'none'}
    else signupForm.style.display = 'flex';
    test1.style.display = 'none';
    test2.style.display = 'none';
    test3.style.display = 'none';
    test4.style.display = 'none';
    test5.style.display = 'none';
    test6.style.display = 'none';
});

//add event listener to admin button for click
adminbutton.addEventListener('click', function showLoginForm(){
    signupForm.style.display = 'none';
    selectedchapter.selectedIndex = 0;
    chapter1.style.display = "none";
    chapter2.style.display = "none";
    chapter3.style.display = "none";
    chapter4.style.display = "none";
    chapter5.style.display = "none";
    chapter6.style.display = "none";
    if (loginForm.style.display == 'flex') {loginForm.style.display = 'none'}
    else loginForm.style.display = 'flex';
    test1.style.display = 'none';
    test2.style.display = 'none';
    test3.style.display = 'none';
    test4.style.display = 'none';
    test5.style.display = 'none';
    test6.style.display = 'none';
  });

//add event listener to exit button for click
exitbutton.addEventListener('click', function hideLoginForm(){
    loginForm.style.display = 'none';
  });

  //add event listener to exit button for click
exitbutton2.addEventListener('click', function hideSignupForm(){
    signupForm.style.display = 'none';
  });

