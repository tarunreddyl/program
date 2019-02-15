function loadjson(file,callback)
{
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function()
  {
    if(xhr.readyState === 4 && xhr.status == "200")
    {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}

loadjson("data.json",function(text)
{
  var data = JSON.parse(text);
  console.log(data);
  details(data.basic);
  careerinfo(data.career);
  educationdetails(data.education);
  skill(data.skills);
})

var left = document.querySelector(".leftchild");
function details(det)
{

  var image = document.createElement("img");
  image.src=det.image;
  left.appendChild(image);

  var name = document.createElement("h3");
  name.textContent=det.name;
  left.appendChild(name);

  var mail = document.createElement("a");
  mail.href = "mailto:nanisai039@gmail.com";
  mail.textContent = det.email;
  left.appendChild(mail);

  var number = document.createElement("p");
  number.textContent=det.number;
  left.appendChild(number);

  var add = document.createElement("h2");
  add.textContent = "Address";
  left.appendChild(add);

  var hr = document.createElement("hr");
  left.appendChild(hr);

  var add1 = document.createElement("p");
  add1.textContent=det.Address;
  left.appendChild(add1);
}

var right = document.querySelector(".rightchild");
function careerinfo(infodata)
{

  var add = document.createElement("h2");
  add.textContent = "Career Objective";
  right.appendChild(add);



  var career = document.createElement("p");
   career.textContent = infodata.info;
  right.appendChild(career);

  var add = document.createElement("h2");
  add.textContent = "Educational Qualifications";
  right.appendChild(add);

  var hr = document.createElement("hr");
  right.appendChild(hr);
}


function educationdetails(edu)
{
  var add = document.createElement("h3");
  add.textContent = "Educational Qualifications";
  right.appendChild(add);

  var hr = document.createElement("hr");
  right.appendChild(hr);

  var table1 = document.createElement("table");
  table1.border="1";
  var tr1 = "<tr><th>Institute</th><th>Degree</th><th>passout</th></tr>";
  var tr2 = "";

  for(var i=0;i<edu.length;i++)
  {
    tr2+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"<td><td>";
  }
  table1.innerHTML=tr1+tr2;
  right.appendChild(table1);
}
function skill(sk)
{
  var s1 = document.createElement("h3");
  s1.textContent = "Technical skills";
  right.appendChild(s1);

  var hr = document.createElement("hr");
  right.appendChild(hr);

  var ul = document.createElement("ul");
for(var i=0;i<sk.length;i++)
{
  var li = document.createElement("li");
  li.textContent=sk[i].title+":"+sk[i].content;
  ul.appendChild(li);
}
right.appendChild(ul);
}
