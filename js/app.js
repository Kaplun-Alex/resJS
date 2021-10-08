let shadow = "0 16px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)"
let aboutmes = "<h3>I repaired complex medical equipment. I had to use Raspberry \
                on one of the devices. Read Learning Python, Programming Python\
                5th Edition by Mark Lutz, 4 volumes. Wrote software for the device.\
                Soon there was a need to optimize the work of the security system \
                database and provide data to local users, look to github. Python \
                began to tighten me! Finished the course Beetroot Academy,\
                in parallel, I have developed a robot device in the field of\
                biochemistry (full development cycle), this robot was a \
                graduation project. In fact BA gave me Python engineer dev.\
                skills. Thereafter Django 3.0 book, Dronov. Now my direction\
                is device control over sockets, web, eth. In search of interesting\
                technology projects. From myself I can give a lot to the team and\
                multiply my engineering skills in dev. See you…></h3>"
let edumes =   "<h2>Beetroot Academy</h2>\
                08.02.2021 — 12.02.2021   A+<br><br>\
                <h2>University of the state fiscal service Ukraine</h2>\
                2010 – 2013<br>\
                Bachelor's degree, Finance and Credit,   B<br><br>\
                <h2>State University of Telecommunications</h2>\
                2004 — 2008<br>\
                Master's degree, Protection of information in information systems and networks.   A+<br>"
let expmes =    "<h2>StarLightMedia - Junior Python developer</h2>\
                01.03.2021 — to date<br>\
                Create python database multiservices/application<br><br>\
                <h2>StarLightMedia  -  CSO(security systems engineer)</h2>\
                2017 — to date<br>\
                Security cluster administration and support. Implementation of safety systems.\
                Document flow<br><br>\
                <h2>Intteks – CTO (Chief Engineer)</h2>\
                2007 — 2017<br>\
                Full cycle of implementation of technical security systems.\
                Service Center Management. Development of security systems<br><br>"
let skilmes =   "<h2>Lang/Libraries/Modules/Frameworks:</h2>\
                Python, JS, OS, SYS, Argparse, Tkinter, PyQt, Socket, Decimal, Random, Struct, Array,\
                Doctest, Pytest, Unittest, MySql, SQLite, PyUSB, HIDUSB, Threading,\
                Multiprocessing, Keyboard, mako, Jinja2, Logging, Numpy, Matplotlib,\
                Beautiful Soup, Django, mongoDB, Unittest, CSS, html, Redis.<br><br>\
                <h2>Additional:</h2>\
                Win, Linux(Ubuntu), heroku,  AWS, GIT, Github, Tortoise SVN, PyCharm, Slack, Codespaces beta, \
                OOP, Technical background, Visual Studio Code"
let contmes = " <h2>PHONE:</h2><br>\
                <h3>+38-067-381-80-46</h3><br>\
                <h2>E-MAIL:</h2><br>\
                <h3>Kaplunalex1985@gmail.com</h3><br>\
                <h2>KIEV REGION</h2>"

let sertmes = "<img src='stat/sert.jpg' class='butimg'></img>"

let abbut = document.getElementById('ABbut')
let infblock = document.getElementById('inf-block')
    abbut.onmouseover=function(){
        abbut.style.boxShadow=shadow
    }
    abbut.onmouseleave=function(){
        abbut.style.boxShadow="none"
    }
    abbut.onclick=function() {
        exbut.style.borderWidth='2px'
        abbut.style.borderWidth='5px'
        contbut.style.borderWidth='2px'
        edubut.style.borderWidth='2px'
        skbut.style.borderWidth='2px'
        courbut.style.borderWidth='2px'
        bgbut.style.borderWidth='2px'
        infblock.style.background= "white"
        infblock.style.borderRadius= "30px"
        infblock.style.alignItems="flex-start"
        infblock.innerHTML=aboutmes
    }
    
let edubut = document.getElementById('EDbut')
    edubut.onmouseover=function(){
     edubut.style.boxShadow=shadow
    }
    edubut.onmouseleave=function(){
        edubut.style.boxShadow="none"
    }
    edubut.onclick=function() {
        exbut.style.borderWidth='2px'
        abbut.style.borderWidth='2px'
        contbut.style.borderWidth='2px'
        edubut.style.borderWidth='5px'
        skbut.style.borderWidth='2px'
        courbut.style.borderWidth='2px'
        bgbut.style.borderWidth='2px'
        infblock.style.background= "white"
        infblock.style.borderRadius= "30px"
        infblock.style.alignItems="flex-start"
        infblock.innerHTML=edumes
    }
let contbut = document.getElementById('CONTbut')
    contbut.onmouseover=function(){
        contbut.style.boxShadow=shadow
    }
    contbut.onmouseleave=function(){
        contbut.style.boxShadow="none"
    }
    contbut.onclick=function() {
        exbut.style.borderWidth='2px'
        abbut.style.borderWidth='2px'
        contbut.style.borderWidth='5px'
        edubut.style.borderWidth='2px'
        skbut.style.borderWidth='2px'
        courbut.style.borderWidth='2px'
        bgbut.style.borderWidth='2px'
        infblock.style.background= "none"
        infblock.style.borderRadius= "30px"
        infblock.style.alignItems="center"
        infblock.innerHTML=contmes
    }
let exbut = document.getElementById('EXbut')
    exbut.onmouseover=function(){
        exbut.style.boxShadow=shadow
    }
    exbut.onmouseleave=function(){
        exbut.style.boxShadow="none"
    }
    exbut.onclick=function() {
        exbut.style.borderWidth='5px'
        abbut.style.borderWidth='2px'
        contbut.style.borderWidth='2px'
        edubut.style.borderWidth='2px'
        skbut.style.borderWidth='2px'
        courbut.style.borderWidth='2px'
        bgbut.style.borderWidth='2px'
        infblock.style.background= "white"
        infblock.style.borderRadius= "30px"
        infblock.style.alignItems="flex-start"
        infblock.innerHTML=expmes
    }
let skbut = document.getElementById('SKbut')
    skbut.onmouseover=function(){
        skbut.style.boxShadow=shadow
    }
    skbut.onmouseleave=function(){
        skbut.style.boxShadow="none"
    }
    skbut.onclick=function() {
        exbut.style.borderWidth='2px'
        abbut.style.borderWidth='2px'
        contbut.style.borderWidth='2px'
        edubut.style.borderWidth='2px'
        skbut.style.borderWidth='5px'
        courbut.style.borderWidth='2px'
        bgbut.style.borderWidth='2px'
        infblock.style.background= "white"
        infblock.style.borderRadius= "30px"
        infblock.style.alignItems="flex-start"
        infblock.innerHTML=skilmes
    }
    
let courbut = document.getElementById('COURbut')
    courbut.onmouseover=function(){
        courbut.style.boxShadow=shadow
    }
    courbut.onmouseleave=function(){
        courbut.style.boxShadow="none"
    }
    courbut.onclick=function() {
        exbut.style.borderWidth='2px'
        abbut.style.borderWidth='2px'
        contbut.style.borderWidth='2px'
        edubut.style.borderWidth='2px'
        skbut.style.borderWidth='2px'
        courbut.style.borderWidth='5px'
        bgbut.style.borderWidth='2px'
        infblock.style.background= "none"
        infblock.innerHTML=""
    }
let bgbut = document.getElementById('BGRDbut')
    bgbut.onmouseover=function(){
        bgbut.style.boxShadow=shadow
    }
    bgbut.onmouseleave=function(){
        bgbut.style.boxShadow="none"
    }
    bgbut.onclick=function() {
        exbut.style.borderWidth='2px'
        abbut.style.borderWidth='2px'
        contbut.style.borderWidth='2px'
        edubut.style.borderWidth='2px'
        skbut.style.borderWidth='2px'
        courbut.style.borderWidth='2px'
        bgbut.style.borderWidth='5px'
    }




