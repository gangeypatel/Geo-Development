regions = {};
dropdown = ["Birth Rate", "Death Rate", "Fertility Rate", "Life Expectancy at Birth, Female", "Life Expectancy at Birth, Male", "Life Expectancy at Birth, Total", "Population Growth", "Total Population", "Mobile Cellular Subscriptions", "Mobile Cellular Subscriptions per 100 People", "Telephone Lines", "Telephone Lines per 100 People", "Agricultural Land", "Agricultural Land Percent", "Arable Land", "Arable Land Percent", "Land Area", "Rural Population", "Population Growth", "Surface Area", "Population Density", "Urban Population Percent", "Urban Population Percent Growth"]
arr = [];
var selectedRegion = [];
var finalarray = [];
var countriesArr = [];
var my = [];
var finalmy = [];
const margin = { top: 10, right: 30, bottom: 30, left: 40 }
var width, height;
var min_year = new Date('1980');
var max_year = new Date('2013');
var xScale = d3.scaleTime().domain([min_year, max_year]);
const colorDict = { "South Asia": "#2a9d8f", "Europe & Central Asia": "#264653", "Middle East & North Africa": "#e9c46a", "Sub-Saharan Africa": "#f4a261", "Latin America & Caribbean": "#e76f51", "East Asia & Pacific": "#a2d2ff", "North America": "#ffc8dd" };
var svg, x, y;
var isplayclicked = false;
var slider;
var check = 1980;
var interval = 0;
// var iscountry = false;
var countrycodes ={
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas (the)",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia (Plurinational State of)",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory (the)",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands (the)",
    "CF": "Central African Republic (the)",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands (the)",
    "CO": "Colombia",
    "KM": "Comoros (the)",
    "CD": "Congo (the Democratic Republic of the)",
    "CG": "Congo (the)",
    "CK": "Cook Islands (the)",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic (the)",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (the) [Malvinas]",
    "FO": "Faroe Islands (the)",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories (the)",
    "GA": "Gabon",
    "GM": "Gambia (the)",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See (the)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran (Islamic Republic of)",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea (the Democratic People's Republic of)",
    "KR": "Korea (the Republic of)",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic (the)",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands (the)",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia (Federated States of)",
    "MD": "Moldova (the Republic of)",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands (the)",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands (the)",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine, State of",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines (the)",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "Russian Federation (the)",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin (French part)",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten (Dutch part)",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan (the)",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, United Republic of",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands (the)",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates (the)",
    "GB": "United Kingdom of Great Britain and Northern Ireland (the)",
    "UM": "United States Minor Outlying Islands (the)",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela (Bolivarian Republic of)",
    "VN": "Viet Nam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "Åland Islands"
};
var swappedCountryCodes = {};

for (var key in countrycodes) {
    if (countrycodes.hasOwnProperty(key)) {
        swappedCountryCodes[countrycodes[key]] = key;
    }
}

Promise.all([d3.csv('data/countries_regions.csv'), d3.csv('data/global_development.csv')])
    .then(function (values) {

        slider = document.getElementById("play");
        slider.addEventListener("input", function (d) {
            check = document.getElementById("play");
           

        });

        countries = values[0];
        gd = values[1];


        countries.forEach(function (d) {
            if (regions[d['World bank region']] === undefined) {
                regions[d['World bank region']] = [];
            }
            regions[d['World bank region']].push(d['name']);
        });


        const regionsArray = Array.from(Object.keys(regions));
        const regionVals = Array.from(Object.values(regions));
        
        arr = Object.keys(gd[0]).slice(2, Object.keys(gd[0]).length - 1);

        //checkbox list creation
        const checkboxContainer = document.getElementById('checkbox');
        regionsArray.forEach(value => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox"  id="checkbox" class="form-check-input" name="${value}" value= ${value} > ${value} `;
            const br = document.createElement('br');
            checkboxContainer.appendChild(label);
            checkboxContainer.appendChild(br);
        });

        //dropdown menu creation
        const Dropdownmenu = document.getElementById("dropdown");
        for (let i in arr) {
            let option = document.createElement("option");
            option.setAttribute("value", arr[i]);
            let Tex = document.createTextNode(dropdown[i]);
            option.appendChild(Tex);
            Dropdownmenu.appendChild(option);
        }


    });



function selectAll() {
    var selectedvalue = []
    var checkboxes = document.querySelectorAll('#checkbox input[type=checkbox]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = true;
        if (checkbox.checked) {
            selectedvalue.push(checkbox.name);
        }
    })
    play();
    
}

function deselectAllCheckboxes() {
    var checkboxes = document.querySelectorAll('#checkbox input[type=checkbox]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
    removegraph();
}

function test() {
    list = document.getElementById('dropdown')
    return list.value;

}

function getvaluefromcheckbox() {
    selectedRegion = [];
    const checkbox = document.querySelectorAll("#checkbox");
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            selectedRegion.push(checkbox[i].name);
        }

    }
    return selectedRegion;


}
function test1() {
    if (isplayclicked) {
        drawlinechart();
        
    }
}

function getfinalarr(){
    var finalarray = []
    var finalmy = [];

    const dataByCountry = gd.reduce((arr, d) => {
        const country = d["Country"];
        const year = parseInt(d["Year"]);
        const valuefromdropdown = test();
        const value = parseFloat(d[valuefromdropdown]);
        if (!arr[country]) {
            arr[country] = {};
        }
        arr[country][year] = value;
        return arr;
    }, {});

    var checkedval = getvaluefromcheckbox();
    dict = []
    Object.entries(regions).forEach(d => {
        const filteredObj = d[1].reduce((obj, key) => {
            if (dataByCountry.hasOwnProperty(key)) {
                obj[key] = dataByCountry[key];
            }
            return obj;
        }, {});
        dict.push([d[0], filteredObj]);

    })
    arr = dict;
    checkedval.forEach(d => {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][0] == d) {
                finalarray.push([d, arr[i][1]]);
            }
        }
    })
    
    my = []
    var finalmy = []
    finalarray.forEach(d => {
        my.push(Object.entries(d[1]));
    })
    my.forEach(d => {
        d.forEach(x => {
            var newObj = {}
            Object.keys(x[1]).forEach(key => {
                newObj[key] = {
                    year: parseInt(key),
                    value: x[1][key]
                }
            });
            newObj = Object.values(newObj);

            finalmy.push([x[0], newObj]);

        })
    })
   
    return finalmy;

}


function appendsvg(){
    
    width = 1210 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;
    const startYear = getyearfromval();
    const endYear = getyeartoval();

    finalmy = getfinalarr();
    var xScale = d3.scaleTime().domain([new Date(startYear, 0, 1), new Date(endYear, 0, 1)]);

    svg = d3.selectAll("#line_svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
        x = xScale.range([margin.left, width - 150]);


    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .attr("id", "x-axis")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end");

    const yDomain = []
    for (var i = 0; i < finalmy.length; i++) {
        Object.values(finalmy[i][1]).forEach(d => {
            yDomain.push(d.value);
        })
    }

    y = d3.scaleLinear()
        .domain([Math.min(...yDomain), Math.max(...yDomain)])
        .range([height, 0]);

    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .attr("id", "y-axis")
        .selectAll("text");


}

function getyearfromval(){
    d3.select("#year-from").on("input", function () {
        const startYear = parseInt(d3.select(this).property("value"));
        d3.select("#year-from").text(startYear);

    });
    return parseInt(d3.select("#year-from").property("value"));

}

function getyeartoval(){
    d3.select("#year-to").on("input", function () {
        const endYear = parseInt(d3.select(this).property("value"));
        d3.select("#year-to").text(endYear);

    });
    return parseInt(d3.select("#year-to").property("value"));

}
function getsliderval(){
    d3.select("#play-slider").on("input", function () {
        const endYear = parseInt(d3.select(this).property("value"));
        d3.select("#play-slider").text(endYear);

    });
    return parseInt(d3.select("#play-slider").property("value"));

}
function datatobeplotted(arr){
    const startYear = getyearfromval();
    const endYear = getyeartoval();
    const sliderVal = getsliderval();
    var finalarr = []
    arr.forEach(d => {
        array = []
        d[1].forEach(c => {
            if (c.year >= startYear && c.year <= endYear && c.year <= sliderVal) {
                
                array.push(c)
                
            }
        })
        finalarr.push([d[0], array])
    })
    return finalarr
}

function drawlinechart() {

    isplayclicked = true;

    d3.select("#y-axis").remove();
    d3.select("#x-axis").remove();
    d3.selectAll("#lines").remove()
    d3.selectAll(".circles").remove();
    d3.selectAll(".lineLegend").remove();
    d3.selectAll(".flags").remove();
    

    var finalmy = getfinalarr();

    const startYear = getyearfromval();
    const endYear = getyeartoval();
    const opacityval = parseFloat(d3.select("#opacity").property("value"));
    


    appendsvg();

    svg.selectAll("#x-axis").transition().duration(1000).call(d3.axisBottom(x));
    svg.selectAll("#y-axis").call(d3.axisLeft(y));

    var finalarr = datatobeplotted(finalmy);
    


    var lines = svg.selectAll(".lines").data(finalarr);


    lines.join("path")
        .attr("id", "lines")
        .attr("fill", "none")
        .attr("stroke", function (d) { return getColor(regions, colorDict, d[0]) })
        .attr("stroke-width", 4.2)
        .attr("d", function (d) {
            return d3.line()
                .x(function (d) { return x(new Date(d.year, 0, 1)); })
                .y(function (d) { return y(d.value); })
                (d[1])

        })
        .style("opacity", `${opacityval}`)
        .on("mouseover", function (e, d) {
            d3.selectAll("#lines").style("opacity", function (g) {
                return (d[0] === g[0]) ? opacityval : 0.1;
            })
            d3.selectAll(".circles").style("opacity", function (g) {
                return (d[0] === g[0]) ? opacityval : 0.2;
            });
            d3.selectAll(".lineLegend").style("opacity", function (g) {
                return (d[0] === g[0]) ? opacityval : 0;
            });
            d3.selectAll(".flags").style("opacity", function (g) {
                return (d[0] === g[0]) ? opacityval : 0;
            });
        })
        .on("mouseout", function (e) {
            d3.selectAll("#lines").style("opacity", opacityval);
            d3.selectAll(".circles").style("opacity", opacityval)
            d3.selectAll(".lineLegend").style("opacity", opacityval);
            d3.selectAll(".flags").style("opacity", opacityval);
        });
       

    var chadcircle = svg.selectAll(".circle").data(finalarr)
    chadcircle.join("circle").attr("class", "circles")
        .attr("cx", function (d) {return x(new Date(d[1][d[1].length - 1].year, 0, 1))} )
        .attr("cy", function (d) { return y(d[1][d[1].length - 1].value); })
        .attr("r", "8")
        .style("fill", function (d) { return getColor(regions, colorDict, d[0]) })
        .attr("stroke", "black")
        .attr("opacity",`${opacityval}`)
        .on("mouseover", function (e, d) {
            d3.selectAll("#lines").style("opacity", function (g) {
                return (d[0] === g[0]) ? opacityval : 0.1;
            })
            d3.selectAll(".circles").style("opacity", function (g) {
                return (d[0] === g[0]) ? opacityval : 0.2;
            });
            d3.selectAll(".lineLegend").style("opacity", function (g) {
                return (d[0] === g[0]) ? opacityval : 0;
            });
            d3.selectAll(".flags").style("opacity", function (g) {
                return (d[0] === g[0]) ? opacityval : 0;
            });
        })
        .on("mouseout", function (e) {
            d3.selectAll("#lines").style("opacity", opacityval);
            d3.selectAll(".circles").style("opacity", opacityval)
            d3.selectAll(".lineLegend").style("opacity", opacityval);
            d3.selectAll(".flags").style("opacity",opacityval);
        });


    var legends = svg.selectAll(".lineLegend").data(finalarr).enter().append("g")
        .attr("class", "lineLegend")
        .attr("transform", function (d, i) {
            console.log(d[1][d[1].length - 1].year);
            return "translate(" + x(new Date(d[1][d[1].length - 1].year, 0, 1)) + "," + y(d[1][d[1].length - 1].value) + ")";
        })
        .style("fill", function (d) { return getColor(regions, colorDict, d[0]) });

    legends.append("text").text(function (d) { return d[0]; })
        .attr("transform", "translate(15,9)")
        .attr("opacity",`${opacityval}`);

    if(countryorname()){
        d3.selectAll(".linelegend").remove();
    var flags = svg.selectAll(".flags").data(finalarr).join("image")
        .attr("class", "flags")
        .attr("transform", function (d, i) {
            return "translate(" + x(new Date(d[1][d[1].length - 1].year, 0, 1)) + "," + y(d[1][d[1].length - 1].value) + ")";
        })
        .attr("height", "20px")
        .attr("width", "40px")
        .attr("xlink:href",function(d){ return getcountryflag(d[0])})
        .attr("opacity",`${opacityval}`);
    }

}

function getColor(regions, colorDict, country) {
    for (var i = 0; i < Object.keys(regions).length; i++) {
        temp = Object.values(regions)[i];
        if (temp.includes(country)) {
            var r = Object.keys(regions)[i];
            return colorDict[r];

        }
    }
}

function getOpacity(value) {
    let opacityVal = document.querySelectorAll(`[id=lines]`);
    let circles = document.querySelectorAll(`[class=circles]`);
    let legends = document.querySelectorAll(`[class=linelegend]`);
    let flags = document.querySelectorAll(`[class=flags]`);
    opacityVal.forEach(element => {
        element.style.opacity = (value) + ``;
    })

    circles.forEach(e => {
        e.style.opacity = (value) + ``;
    })
}

function play() {
    drawlinechart()
    
}

function removegraph() {
    d3.select("#y-axis").remove();
    d3.select("#x-axis").remove();
    d3.selectAll("#lines").remove()
    d3.selectAll(".circles").remove();
    d3.selectAll(".lineLegend").remove();
    d3.selectAll(".flags").remove();

}

function getanimation(){
    var temp = parseInt(document.getElementById("play-slider").value);
    
    document.getElementById("play-slider").value = parseInt(temp + 1);
    var yearfromval = parseInt(document.getElementById("year-to").value);
    var startYear = parseInt(getyearfromval());
    
    drawlinechart()
   

    if(parseInt(temp)== yearfromval || parseInt(temp)== 2013){
        document.getElementById("play-slider").value = startYear;
       
        playanimation();
    }
}

function playanimation(){
    if(interval === 0){
        interval = setInterval(getanimation,900);
    }

}
function stopanimation(){
    clearInterval(interval);
    interval = 0;

}

function playslider(){
    drawlinechart();
}
function getcountryflag(country){
    return "data/flag-icons-main/flags/4x3/" + swappedCountryCodes[country] + ".svg";
}
function countryorname(){
    var toggle = document.getElementById("countrytoggle");
    if(toggle.checked){
        return true;
    }
    return false;
}