/*
********************Arrays***************************
An Array is unordered Collection of values , each values called as elements and each elements has a numeric Postion called as index.

Array Inherits the Properties from Array.Prototype,  Which inherties the rich set of Methods(Most are Generic Means Only works with Corretly
    not only true Arrays but for any "Array-Like" Objects)

Ways to Create an Array:-
Array Literals 
    -- > let empty= []; let primes = [1,3,5,7]; let misc = [1,2,true,primes,"a"];
The ...Spread Operator.
     --> let Orginal = [1,2,3,4]; let copy = [...Orginal];
Array() Constructor. 
    --> let a = new Array(); let arr = new Array(10) (Specifies the Leangth of an array)
    if more than 1 argumnets in the parameter it treats as an element of an array --> let employee =["jayaprakash", "JayaBharathi",12,13];
Array.of() & Array.from().
 Array.of() --> When the Array() function is Invoked with one numeric argument,it uses that argument as length of an array.
    This means that Array() Constructor can't create an array with single element. to overcome this problem Array.of() factory method is used.
    Array.of(); //[]; returns empty array with no arguments.
    Array.of(10); // [10]; can create arrays with a asingle numeric argument.
    Array.of(1,2,3); //[1,2,3]
Array.from() --> It expects an iterable or array-like objects & returns a new array that contains the elements of an Object.
    Array.from(Orginal); --> its same as let array = [...Orginal];
    let truearray = Array.from(arraylike);


Array is Special kind Object :-
    You can add properties like a Normal Object like 
    let family =["jayaprakash","Saradha","Jayabharathi"]
    family.native = "Sankarapuram"; //Adding Properties to an Array Object;

Array Methods:-
    1. iterator Methods  ( Foreach, iterate , map, filter,reduce takes First Arguments as Functions & Invokes the functions once for each element)
    forEach() --> Iterates through an array , invoking the function you specify for each element.you pass the function as first argument to foreach().
    foreach() invokes with 3 arguments (value , index , arry itself)
    ** forEach() always returns undefined and is not chainable.
    ex:-
    let data = [1,2,3,4,5,6,7]; , sum =0;
    data.foreach(value => {sum+= value});
    //If you want to increment each array element.
    data.foreach( function(v,i,arr) {arr[i] = v+1});

    map() --> map() method passes each element of an array on which it is invoked to the function you specify and returns an array 
    containing the values retuned by your function.
    data.map( x => x*x )  o/p [1,4,9,16,25,36,49];

    filter() --> returns an array containing a subset of the elements of the array on which it is invoked.
    returns a new array.
    data.filter(x => x > 2); o/p :- [3,4,5,6,7];
    data.filter(x => x%2 ===0)

    reduce() & reduceright() -->methods combine the elements of an array using the function you specify, to produce the single value.
    takes 2 arguments , 1st the function to perform reduction operation & 2nd is optional argument to set a intail value to pass to the function.

    data.reduce((x,y) => x+y)    ------|
    data.reduce((x,y) => x+y,0)  ------| same 
    first argument is callback function and second optional parameter is intial Value.
    data.reduce((x,y) => x*y,1) 

    some() & every()
    returns true or false.
    data.some(x=> x<2); true.
    data.every(x => x <2); false;
    2.Stack & Queue Methods.
    push()
    pop()
    shift() 
    unshift()
    3. Sub array Methods.
    Slice()
    splice()
    fill()
    4. Searching & Sorting Methods.
    indexof()
    lastindexof()
    includes()

    sort()
    reverse()


Array to string 
arr.join("-");






*/

/* 

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

*/