var tech_stack = document.getElementById("tech_stack");
var project_stack = document.getElementById("project_stack");
var contact_stack = document.getElementById("contact_stack");
var education_stack = document.getElementById("education_stack");
var experience_stack = document.getElementById("experience_stack");
var dev_stack = document.getElementById("dev_stack");

function add_card_stack(card_stack,num_cards){
  for(i=0;i<num_cards;i++){
    var card = document.createElement('div');
    card.className = "card";
    var i_str = i.toString();
    if(card_stack==contact_stack){
      card.style.cssText = "height:180px;width:180px;background-image:linear-gradient(#055684,#9ad1d8);";
      card.id = "contact_stack_" + i_str;
    }
    else if(card_stack==project_stack){
      // card.style.cssText = "background-image:linear-gradient(#1a8d03,#84ed59);";
      card.id = "project_stack_" + i_str;
    }
    else if(card_stack==tech_stack){
      card.style.cssText = "width:250px;";
      card.id = "tech_stack_" + i_str;
    }
    else if(card_stack==dev_stack){
      card.style.cssText = "width:auto;height:95px;background-image:linear-gradient(#e00707,#e34f4f);";
      card.id = "dev_stack_" + i_str;
    }
    else if(card_stack==experience_stack){
      card.style.cssText = "height:auto;width:200px;";
      card.id = "experience_stack_" + i_str;
    }
    else if(card_stack==education_stack){
      card.style.cssText = "height:auto;width:200px;";
      card.id = "education_stack_" + i_str;
    }
    card_stack.append(card);
  }
}

function add_small_card_stack(card_stack,num_cards){
  for(i=num_cards-1;i>=0;i--){
    var card = document.createElement('div');
    card.className = "small_card";
    var i_str = i.toString();
    if(card_stack==experience_stack){
      card.id = "experience_stack_" + i_str;
    }
    else if(card_stack==education_stack){
      card.id = "education_stack_" + i_str;
    }
    card_stack.append(card);
  }
}

contact_stack_json_string = `
{
  "data":[
    {
      "logo":"static/logos/github.svg",
      "name":"GitHub",
      "url_name":"https://github.com/pranavsastry",
      "username":"pranavsastry"
    },
    {
      "logo":"static/logos/linkedin.svg",
      "name":"LinkedIn",
      "url_name":"https://www.linkedin.com/in/pranavsastry/",
      "username":"pranavsastry"
    },
    {
      "logo":"static/logos/mail.svg",
      "name":"Mail",
      "url_name":"mailto:pranava.sri@gmail.com",
      "username":"pranava.sri@gmail.com"
    }
  ]
}
`
project_stack_json_string = `
{
  "data":[
    {
      "name":"Neowise",
      "image":"static/project_stack/neowise.png",
      "description":"A Deep Learning library created from scratch using Python and NumPy",
      "url_name":"https://github.com/pranavsastry/neowise"
    },
    {
      "name":"GitIt",
      "image":"static/project_stack/gitit.png",
      "description":"A Python wrapper for the GitHub API, to commit data, create repos",
      "url_name":"https://github.com/pranavsastry/gitit"
    },
    {
      "name":"NN with OOP",
      "image":"static/project_stack/neural_nets.png",
      "description":"Neural Network designed from scratch using OOP",
      "url_name":"https://github.com/pranavsastry/neural-nets-with-OOP"
    },
    {
      "name":"ProgBar",
      "image":"static/project_stack/prog_bar.png",
      "description":"Quick and efficient colored progress bars",
      "url_name":"https://github.com/pranavsastry/progress-bar"
    }
  ]
}
`
tech_stack_json_string = `
{
  "data":[
    {
      "name":"Cryptocurrency",
      "image":"static/tech_stack/bitcoin.png"
    },
    {
      "name":"Data Structures",
      "image":"static/tech_stack/data_structures.png"
    },
    {
      "name":"Deep Learning",
      "image":"static/tech_stack/deep_learning.png"
    },
    {
      "name":"Algorithms",
      "image":"static/tech_stack/algorithms.png"
    }
  ]
}
`
education_stack_json_string = `
{
  "data":[
    {
      "name":"BMS College Of Engineering",
      "image":"static/education_stack/bmsce.png",
      "description":[
        "B.E Computer Science"
      ],
      "year":[
        "2019-2023"
      ]
    }
  ]
}
`
experience_stack_json_string = `
{
  "data":[
    {
      "name":"BMS College Of Engineering",
      "image":"static/education_stack/bmsce.png",
      "description":[
        "Research Assistant"
      ],
      "year":[
        "2019-2023"
      ]
    }
  ]
}
`
dev_stack_json_string = `
{
  "data":[
    {
      "name":"Python"
    },
    {
      "name":"Java"
    },
    {
      "name":"C"
    },
    {
      "name":"HTML & CSS"
    },
    {
      "name":"Javascript"
    }
  ]
}
`

var contact_stack_data = JSON.parse(contact_stack_json_string);
var project_stack_data = JSON.parse(project_stack_json_string);
var tech_stack_data = JSON.parse(tech_stack_json_string);
var education_stack_data = JSON.parse(education_stack_json_string);
// var experience_stack_data = JSON.parse(experience_stack_json_string);
var dev_stack_data = JSON.parse(dev_stack_json_string);

add_card_stack(tech_stack,tech_stack_data.data.length);
add_card_stack(dev_stack,dev_stack_data.data.length);
add_card_stack(project_stack,project_stack_data.data.length);
// add_card_stack(experience_stack,experience_stack_data.data.length);
add_card_stack(education_stack,education_stack_data.data.length);
add_card_stack(contact_stack,contact_stack_data.data.length);

function update_contact_stack(){
  for(i=0;i<contact_stack_data.data.length;i++){
    var i_str = i.toString();
    var card = document.getElementById("contact_stack_"+i_str);
    var link = document.createElement('a');
    link.href = contact_stack_data.data[i].url_name;
    link.target="_blank";
    var img = document.createElement('img');
    img.className = "logo_img";
    img.src = contact_stack_data.data[i].logo;
    link.append(img);
    card.append(link);
    var name_div = document.createElement('div');
    // name_div.style.cssText = "height:40px;width:100%;background-color:#cee823;";
    var height_div = document.createElement('div');
    height_div.style.cssText = "height:0px;margin-top:-5px;";
    var name = document.createElement('h1');
    var text = document.createTextNode(contact_stack_data.data[i].name);
    var text_link = document.createElement('a');
    text_link.href = contact_stack_data.data[i].url_name;
    text_link.style.cssText = "text-decoration:none;color:black;";
    text_link.target="_blank";
    name.style.cssText = "font-size:20px;margin-left:0px;color:black;margin-top:5px;";
    name.append(text);
    text_link.append(name);
    name_div.append(height_div);
    name_div.append(text_link);
    var username = document.createElement('h1');
    var uname_text = document.createTextNode(contact_stack_data.data[i].username);
    username.style.cssText = "font-family:'Spartan-MB',sans-serif;font-weight:700;font-size:15px;margin-left:0px;color:black;margin-top:-15px;";
    username.append(uname_text);
    name_div.append(username);
    card.append(name_div);
  }
}

function update_project_stack(){
  for(i=0;i<project_stack_data.data.length;i++){
    var i_str = i.toString();
    var card = document.getElementById("project_stack_"+i_str);
    var img = document.createElement('img');
    var img_link = document.createElement('a');
    img_link.href = project_stack_data.data[i].url_name;
    img.className = "project_img";
    img.src = project_stack_data.data[i].image;
    img_link.append(img);
    card.append(img_link);
    var outer_div = document.createElement('div');
    outer_div.style.cssText = "height:151px;width:100%;background-image:linear-gradient(#e08907,#e6c657);margin-top:-5px;text-align:left;";
    var div_element = document.createElement('div');
    var desc_div = document.createElement('div');
    desc_div.style.cssText = "height:110px;max-width:100%;white-space:normal;overflow-wrap:break-word;overflow:scroll;margin-top:-20px;";
    var title_div = document.createElement('div');
    // title_div.style.cssText = "height:40px;width:100%;background-color:#cee823;margin-top:-5px;";
    var height_div = document.createElement('div');
    height_div.style.cssText = "height:10px;";
    var title = document.createElement('h1');
    var title_text = document.createTextNode(project_stack_data.data[i].name);
    title.style.cssText = "margin-top:0px;font-size:22px;";
    var title_link = document.createElement('a');
    title_link.style.cssText = "text-decoration:none;color:black;"
    title.append(title_text);
    title_link.href = project_stack_data.data[i].url_name;
    title_link.append(title);
    title_div.append(height_div);
    title_div.append(title_link);
    div_element.append(title_div);
    var desc = document.createElement('h2');
    var desc_text = document.createTextNode(project_stack_data.data[i].description);
    desc.style.cssText = "font-family:'Spartan-MB',sans-serif;font-size:17px;font-weight:600;color:black;margin-left:10px;margin-right:5px;";
    desc.append(desc_text);
    desc_div.append(desc);
    outer_div.append(div_element);
    outer_div.append(desc_div);
    card.append(outer_div);
  }
}

function update_tech_stack(){
  for(i=0;i<tech_stack_data.data.length;i++){
    var i_str = i.toString();
    var card = document.getElementById("tech_stack_"+i_str);
    var img = document.createElement('img');
    img.className = "tech_img";
    img.src = tech_stack_data.data[i].image;
    card.append(img);
    var rem_div = document.createElement('div');
    rem_div.style.cssText = "height:10px;";
    var name_div = document.createElement('div');
    name_div.style.cssText = "width:100%;height:40px;background-color:#cee823;margin-top:-5px;";
    var name = document.createElement("h1");
    var text = document.createTextNode(tech_stack_data.data[i].name);
    name.style.cssText = "font-size:20px;margin-left:0px;color:#5c5c5c;margin-top:0px;color:black;";
    name.append(text);
    name_div.append(rem_div);
    name_div.append(name);
    card.append(name_div);
  }
}

function update_education_stack(){
  for(i=(education_stack_data.data.length)-1;i>=0;i--){
    var i_str = i.toString();
    var card = document.getElementById("education_stack_"+i_str);
    var img_div = document.createElement('div');
    img_div.style.cssText = "height:90px;width:90px;margin:auto;";
    var img = document.createElement('img');
    img.className = "company_img";
    img.src = education_stack_data.data[i].image;
    img_div.append(img);
    card.append(img_div);
    var details_div = document.createElement('div');
    details_div.style.cssText = "text-align:center;height:130px;overflow:scroll;background-image:linear-gradient(#629d02,#b1db89);";
    var name_div = document.createElement('div');
    // name_div.style.cssText = "height:40px;background-color:#cee823;";
    var height_div = document.createElement('div');
    height_div.style.cssText = "height:10px;";
    name_div.append(height_div);
    var name = document.createElement('h1');
    var name_text = document.createTextNode(education_stack_data.data[i].name);
    name.style.cssText = "font-size:20px;margin-top:0px;color:black;";
    name.append(name_text);
    name_div.append(name);
    details_div.append(name_div);
    var desc_div = document.createElement('div');
    desc_div.style.cssText = "align-items:center;justify-content:center;margin-top:5px;";
    for(j=(education_stack_data.data[i].description.length)-1;j>=0;j--){
      var desc = document.createElement('h2');
      var desc_text = document.createTextNode(education_stack_data.data[i].description[j]);
      desc.style.cssText = "font-family:'Spartan-MB',sans-serif;font-size:15px;font-weight:600;color:black;margin-right:5px;margin-top:0px;";
      desc.append(desc_text);
      desc_div.append(desc);
      var year = document.createElement('h2');
      var year_text = document.createTextNode(education_stack_data.data[i].year[j]);
      year.style.cssText = "font-family:'Spartan-MB',sans-serif;font-size:15px;color:black;margin-right:5px;margin-top:-9px;";
      year.append(year_text);
      desc_div.append(year);
    }
    details_div.append(desc_div);
    card.append(details_div);
  }
}

function update_experience_stack(){
  for(i=(experience_stack_data.data.length)-1;i>=0;i--){
    var i_str = i.toString();
    var card = document.getElementById("experience_stack_"+i_str);
    var img_div = document.createElement('div');
    img_div.style.cssText = "height:90px;width:90px;margin:auto;";
    var img = document.createElement('img');
    img.className = "company_img";
    img.src = experience_stack_data.data[i].image;
    img_div.append(img);
    card.append(img_div);
    var details_div = document.createElement('div');
    details_div.style.cssText = "text-align:center;height:130px;overflow:scroll;background-image:linear-gradient(#03865b,#75e8c2);";
    var name_div = document.createElement('div');
    // name_div.style.cssText = "height:40px;background-color:#cee823;";
    var height_div = document.createElement('div');
    height_div.style.cssText = "height:10px;";
    name_div.append(height_div);
    var name = document.createElement('h1');
    var name_text = document.createTextNode(experience_stack_data.data[i].name);
    name.style.cssText = "font-size:20px;margin-top:0px;color:black;";
    name.append(name_text);
    name_div.append(name);
    details_div.append(name_div);
    var desc_div = document.createElement('div');
    desc_div.style.cssText = "align-items:center;justify-content:center;margin-top:5px;";
    for(j=(experience_stack_data.data[i].description.length)-1;j>=0;j--){
      var desc = document.createElement('h2');
      var desc_text = document.createTextNode(experience_stack_data.data[i].description[j]);
      desc.style.cssText = "font-family:'Spartan-MB',sans-serif;font-size:15px;font-weight:600;color:black;margin-right:5px;margin-top:0px;";
      desc.append(desc_text);
      desc_div.append(desc);
      var year = document.createElement('h2');
      var year_text = document.createTextNode(experience_stack_data.data[i].year[j]);
      year.style.cssText = "font-family:'Spartan-MB',sans-serif;font-size:15px;color:black;margin-right:5px;margin-top:-9px;";
      year.append(year_text);
      desc_div.append(year);
    }
    details_div.append(desc_div);
    card.append(details_div);
  }
}

function update_dev_stack(){
  for(i=0;i<dev_stack_data.data.length;i++){
    var i_str = i.toString();
    var num_str = (i+1).toString();
    var card = document.getElementById("dev_stack_"+i_str);
    var num_div = document.createElement('div');
    num_div.style.cssText = "float:right;margin-left:100px;margin-top:-50px;margin-right:10px;";
    var digit = document.createElement('h1');
    digit.style.cssText = "font-family:'Spartan-MB',sans-serif;font-size:50px;color:#D9D9D9";
    var digit_text = document.createTextNode(num_str);
    digit.append(digit_text);
    num_div.append(digit);
    card.append(num_div);
    var height_div = document.createElement('div');
    height_div.style.cssText = "height:40px;";
    card.append(height_div);
    var name_div = document.createElement('div');
    // name_div.style.cssText = "overflow:scroll;direction:ltr;"
    var name = document.createElement('h1');
    name.style.cssText = "font-size:20px;margin-right:10px;color:black;";
    var name_text = document.createTextNode(dev_stack_data.data[i].name);
    name.append(name_text);
    name_div.append(name);
    card.append(name_div);
  }
}

update_tech_stack();
update_dev_stack();
update_project_stack();
// update_experience_stack();
update_education_stack();
update_contact_stack();
