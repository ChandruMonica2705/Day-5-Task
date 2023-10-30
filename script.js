//=>Q1.For the below JSON iterate over all for loops.
// for loop
var arr = [
    {
        "name":"john",
        "age":"20"
    },
    {
        "name":"Doe",
        "age":"30"
    },
    {
        "name":"Wick",
        "age":"40"
    },
    {
        "name":"Moni",
        "age":"30"
    },
    {
        "name":"Chandru",
        "age":"40"
    }
    ]
    
    for (var i=0;i<arr.length;i++)
        console.log(arr[i].name,arr[i].age)
// forin loop   
var arr1 = [
    {
        "name":"john",
        "age":"20",
        "gender":"male"
    },
    {
        "name":"Doe",
        "age":"30",
        "gender":"female"
    },
    {
        "name":"Wick",
        "age":"40",
        "gender":"male"
    },
    {
        "name":"Moni",
        "age":"30",
        "gender":"female"
    },
    {
        "name":"Chandru",
        "age":"40",
        "gender":"male"
    }
    ]
    for (let key in arr1)
        console.log(arr1[key].name,arr1[key].gender)
// for of loop  
var arr2 = [
    {
        "name":"john",
        "age":"20",
        "gender":"male"
    },
    {
        "name":"Doe",
        "age":"30",
        "gender":"female"
    },
    {
        "name":"Wick",
        "age":"40",
        "gender":"male"
    },
    {
        "name":"Moni",
        "age":"30",
        "gender":"female"
    },
    {
        "name":"Chandru",
        "age":"40",
        "gender":"male"
    }
    ]
    for (let val of arr2)
        console.log(val.name,val.age,val.gender)

//=>Q2. Creating my resume data using JSON
var mydetails = [
    {"personalDetails":{
        "name":{"firstname":"Monica",
        "lastname":"chandrasekaran"},
        "emailid":"monicamahalingam27@gmail.com",
        "age":"30",
        "gender":"female",
        "maritalStatus":"married",
        "address":{"doorNo":"105",
        "apartmentName":"XYZ",
        "layout":"rrr layout",
        "area":"HsrLayout",
        "district":"bangalore",
        "state":"karnataka",
        "postalCode":"65894",
         "languagesKnown":"TamilandEnglish"}
    },
    "educationalDetails":{
        "secondary":{"institute":"abc","board":"central","yearOfpassing":"2007","address":"tuticorin"},
        "higher":{"institute":"def","board":"central","yearOfpassing":"2009","address":"namakkal"},
        "underGraduate":{"institute":"xyz","board":"annaUniversity","yearOfpassing":"2013","address":"coimbatore"},
        "postGraduate":{"institute":"tgh","board":"annaUniversity","yearOfpassing":"2015","address":"tuticorin"},
    },
    "areaOfinterest":["webDevelopment","cloudComputing","dataMining","javascript","python","mernDB"],
    "technicalSkills":["c","c++","python","javascript","html","css"],
    "workExperience":{"duration":"2years","role":"assitantProfessor","collegeName":"vbg","Address":"madurai"},
    }]
    for (var i=0;i<mydetails.length;i++)
    {
    console.log(mydetails[i].personalDetails.name.lastname);
    }