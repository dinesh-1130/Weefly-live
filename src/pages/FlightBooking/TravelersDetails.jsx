import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";

// International phone codes
const internationalCodes = [
  { code: "0093", country: "Afghanistan", flagCode: "af" },
  { code: "00355", country: "Albania", flagCode: "al" },
  { code: "00213", country: "Algeria", flagCode: "dz" },
  { code: "001684", country: "American Samoa", flagCode: "as" },
  { code: "00376", country: "Andorra", flagCode: "ad" },
  { code: "00244", country: "Angola", flagCode: "ao" },
  { code: "001264", country: "Anguilla", flagCode: "ai" },
  { code: "00888", country: "Anonymous Numbers", flagCode: "un" },
  { code: "001268", country: "Antigua & Barbuda", flagCode: "ag" },
  { code: "0054", country: "Argentina", flagCode: "ar" },
  { code: "00374", country: "Armenia", flagCode: "am" },
  { code: "00297", country: "Aruba", flagCode: "aw" },
  { code: "0061", country: "Australia", flagCode: "au" },
  { code: "0043", country: "Austria", flagCode: "at" },
  { code: "00994", country: "Azerbaijan", flagCode: "az" },
  { code: "001242", country: "Bahamas", flagCode: "bs" },
  { code: "00973", country: "Bahrain", flagCode: "bh" },
  { code: "00880", country: "Bangladesh", flagCode: "bd" },
  { code: "001246", country: "Barbados", flagCode: "bb" },
  { code: "00375", country: "Belarus", flagCode: "by" },
  { code: "0032", country: "Belgium", flagCode: "be" },
  { code: "00501", country: "Belize", flagCode: "bz" },
  { code: "00229", country: "Benin", flagCode: "bj" },
  { code: "001441", country: "Bermuda", flagCode: "bm" },
  { code: "00975", country: "Bhutan", flagCode: "bt" },
  { code: "00591", country: "Bolivia", flagCode: "bo" },
  { code: "00387", country: "Bosnia & Herzegovina", flagCode: "ba" },
  { code: "00267", country: "Botswana", flagCode: "bw" },
  { code: "0055", country: "Brazil", flagCode: "br" },
  { code: "00673", country: "Brunei", flagCode: "bn" },
  { code: "00359", country: "Bulgaria", flagCode: "bg" },
  { code: "00226", country: "Burkina Faso", flagCode: "bf" },
  { code: "00257", country: "Burundi", flagCode: "bi" },
  { code: "00855", country: "Cambodia", flagCode: "kh" },
  { code: "00237", country: "Cameroon", flagCode: "cm" },
  { code: "001", country: "Canada", flagCode: "ca" },
  { code: "00238", country: "Cape Verde", flagCode: "cv" },
  { code: "001345", country: "Cayman Islands", flagCode: "ky" },
  { code: "00236", country: "Central African Republic", flagCode: "cf" },
  { code: "00235", country: "Chad", flagCode: "td" },
  { code: "0056", country: "Chile", flagCode: "cl" },
  { code: "0086", country: "China", flagCode: "cn" },
  { code: "0057", country: "Colombia", flagCode: "co" },
  { code: "00269", country: "Comoros", flagCode: "km" },
  { code: "00242", country: "Congo", flagCode: "cg" },
  { code: "00243", country: "Congo (DRC)", flagCode: "cd" },
  { code: "00682", country: "Cook Islands", flagCode: "ck" },
  { code: "00506", country: "Costa Rica", flagCode: "cr" },
  { code: "00225", country: "Côte d'Ivoire", flagCode: "ci" },
  { code: "00385", country: "Croatia", flagCode: "hr" },
  { code: "0053", country: "Cuba", flagCode: "cu" },
  { code: "00357", country: "Cyprus", flagCode: "cy" },
  { code: "00420", country: "Czech Republic", flagCode: "cz" },
  { code: "0045", country: "Denmark", flagCode: "dk" },
  { code: "00253", country: "Djibouti", flagCode: "dj" },
  { code: "001767", country: "Dominica", flagCode: "dm" },
  { code: "001809", country: "Dominican Republic", flagCode: "do" },
  { code: "00593", country: "Ecuador", flagCode: "ec" },
  { code: "0020", country: "Egypt", flagCode: "eg" },
  { code: "00503", country: "El Salvador", flagCode: "sv" },
  { code: "00240", country: "Equatorial Guinea", flagCode: "gq" },
  { code: "00291", country: "Eritrea", flagCode: "er" },
  { code: "00372", country: "Estonia", flagCode: "ee" },
  { code: "00251", country: "Ethiopia", flagCode: "et" },
  { code: "00500", country: "Falkland Islands", flagCode: "fk" },
  { code: "00298", country: "Faroe Islands", flagCode: "fo" },
  { code: "00679", country: "Fiji", flagCode: "fj" },
  { code: "00358", country: "Finland", flagCode: "fi" },
  { code: "0033", country: "France", flagCode: "fr" },
  { code: "00594", country: "French Guiana", flagCode: "gf" },
  { code: "00689", country: "French Polynesia", flagCode: "pf" },
  { code: "00241", country: "Gabon", flagCode: "ga" },
  { code: "00220", country: "Gambia", flagCode: "gm" },
  { code: "00995", country: "Georgia", flagCode: "ge" },
  { code: "0049", country: "Germany", flagCode: "de" },
  { code: "00233", country: "Ghana", flagCode: "gh" },
  { code: "00350", country: "Gibraltar", flagCode: "gi" },
  { code: "0030", country: "Greece", flagCode: "gr" },
  { code: "00299", country: "Greenland", flagCode: "gl" },
  { code: "001473", country: "Grenada", flagCode: "gd" },
  { code: "00590", country: "Guadeloupe", flagCode: "gp" },
  { code: "001671", country: "Guam", flagCode: "gu" },
  { code: "00502", country: "Guatemala", flagCode: "gt" },
  { code: "00224", country: "Guinea", flagCode: "gn" },
  { code: "00245", country: "Guinea-Bissau", flagCode: "gw" },
  { code: "00592", country: "Guyana", flagCode: "gy" },
  { code: "00509", country: "Haiti", flagCode: "ht" },
  { code: "00504", country: "Honduras", flagCode: "hn" },
  { code: "00852", country: "Hong Kong", flagCode: "hk" },
  { code: "00354", country: "Iceland", flagCode: "is" },
  { code: "0091", country: "India", flagCode: "in" },
  { code: "0062", country: "Indonesia", flagCode: "id" },
  { code: "0098", country: "Iran", flagCode: "ir" },
  { code: "00964", country: "Iraq", flagCode: "iq" },
  { code: "00353", country: "Ireland", flagCode: "ie" },
  { code: "00972", country: "Israel", flagCode: "il" },
  { code: "0039", country: "Italy", flagCode: "it" },
  { code: "001876", country: "Jamaica", flagCode: "jm" },
  { code: "0081", country: "Japan", flagCode: "jp" },
  { code: "00962", country: "Jordan", flagCode: "jo" },
  { code: "007", country: "Kazakhstan", flagCode: "kz" },
  { code: "00254", country: "Kenya", flagCode: "ke" },
  { code: "00686", country: "Kiribati", flagCode: "ki" },
  { code: "00850", country: "North Korea", flagCode: "kp" },
  { code: "0082", country: "South Korea", flagCode: "kr" },
  { code: "00965", country: "Kuwait", flagCode: "kw" },
  { code: "00996", country: "Kyrgyzstan", flagCode: "kg" },
  { code: "00856", country: "Laos", flagCode: "la" },
  { code: "00371", country: "Latvia", flagCode: "lv" },
  { code: "00961", country: "Lebanon", flagCode: "lb" },
  { code: "00266", country: "Lesotho", flagCode: "ls" },
  { code: "00231", country: "Liberia", flagCode: "lr" },
  { code: "00218", country: "Libya", flagCode: "ly" },
  { code: "00423", country: "Liechtenstein", flagCode: "li" },
  { code: "00370", country: "Lithuania", flagCode: "lt" },
  { code: "00352", country: "Luxembourg", flagCode: "lu" },
  { code: "00853", country: "Macao", flagCode: "mo" },
  { code: "00389", country: "Macedonia", flagCode: "mk" },
  { code: "00261", country: "Madagascar", flagCode: "mg" },
  { code: "00265", country: "Malawi", flagCode: "mw" },
  { code: "0060", country: "Malaysia", flagCode: "my" },
  { code: "00960", country: "Maldives", flagCode: "mv" },
  { code: "00223", country: "Mali", flagCode: "ml" },
  { code: "00356", country: "Malta", flagCode: "mt" },
  { code: "00692", country: "Marshall Islands", flagCode: "mh" },
  { code: "00596", country: "Martinique", flagCode: "mq" },
  { code: "00222", country: "Mauritania", flagCode: "mr" },
  { code: "00230", country: "Mauritius", flagCode: "mu" },
  { code: "0052", country: "Mexico", flagCode: "mx" },
  { code: "00691", country: "Micronesia", flagCode: "fm" },
  { code: "00373", country: "Moldova", flagCode: "md" },
  { code: "00377", country: "Monaco", flagCode: "mc" },
  { code: "00976", country: "Mongolia", flagCode: "mn" },
  { code: "00382", country: "Montenegro", flagCode: "me" },
  { code: "001664", country: "Montserrat", flagCode: "ms" },
  { code: "00212", country: "Morocco", flagCode: "ma" },
  { code: "00258", country: "Mozambique", flagCode: "mz" },
  { code: "0095", country: "Myanmar", flagCode: "mm" },
  { code: "00264", country: "Namibia", flagCode: "na" },
  { code: "00674", country: "Nauru", flagCode: "nr" },
  { code: "00977", country: "Nepal", flagCode: "np" },
  { code: "0031", country: "Netherlands", flagCode: "nl" },
  { code: "00687", country: "New Caledonia", flagCode: "nc" },
  { code: "0064", country: "New Zealand", flagCode: "nz" },
  { code: "00505", country: "Nicaragua", flagCode: "ni" },
  { code: "00227", country: "Niger", flagCode: "ne" },
  { code: "00234", country: "Nigeria", flagCode: "ng" },
  { code: "00683", country: "Niue", flagCode: "nu" },
  { code: "00672", country: "Norfolk Island", flagCode: "nf" },
  { code: "001670", country: "Northern Mariana Islands", flagCode: "mp" },
  { code: "0047", country: "Norway", flagCode: "no" },
  { code: "00968", country: "Oman", flagCode: "om" },
  { code: "0092", country: "Pakistan", flagCode: "pk" },
  { code: "00680", country: "Palau", flagCode: "pw" },
  { code: "00970", country: "Palestine", flagCode: "ps" },
  { code: "00507", country: "Panama", flagCode: "pa" },
  { code: "00675", country: "Papua New Guinea", flagCode: "pg" },
  { code: "00595", country: "Paraguay", flagCode: "py" },
  { code: "0051", country: "Peru", flagCode: "pe" },
  { code: "0063", country: "Philippines", flagCode: "ph" },
  { code: "0048", country: "Poland", flagCode: "pl" },
  { code: "00351", country: "Portugal", flagCode: "pt" },
  { code: "001787", country: "Puerto Rico", flagCode: "pr" },
  { code: "00974", country: "Qatar", flagCode: "qa" },
  { code: "00262", country: "Réunion", flagCode: "re" },
  { code: "0040", country: "Romania", flagCode: "ro" },
  { code: "007", country: "Russia", flagCode: "ru" },
  { code: "00250", country: "Rwanda", flagCode: "rw" },
  { code: "00290", country: "Saint Helena", flagCode: "sh" },
  { code: "001869", country: "Saint Kitts & Nevis", flagCode: "kn" },
  { code: "001758", country: "Saint Lucia", flagCode: "lc" },
  { code: "00508", country: "Saint Pierre & Miquelon", flagCode: "pm" },
  { code: "001784", country: "Saint Vincent & Grenadines", flagCode: "vc" },
  { code: "00685", country: "Samoa", flagCode: "ws" },
  { code: "00378", country: "San Marino", flagCode: "sm" },
  { code: "00239", country: "São Tomé & Príncipe", flagCode: "st" },
  { code: "00966", country: "Saudi Arabia", flagCode: "sa" },
  { code: "00221", country: "Senegal", flagCode: "sn" },
  { code: "00381", country: "Serbia", flagCode: "rs" },
  { code: "00248", country: "Seychelles", flagCode: "sc" },
  { code: "00232", country: "Sierra Leone", flagCode: "sl" },
  { code: "0065", country: "Singapore", flagCode: "sg" },
  { code: "00421", country: "Slovakia", flagCode: "sk" },
  { code: "00386", country: "Slovenia", flagCode: "si" },
  { code: "00677", country: "Solomon Islands", flagCode: "sb" },
  { code: "00252", country: "Somalia", flagCode: "so" },
  { code: "0027", country: "South Africa", flagCode: "za" },
  { code: "00211", country: "South Sudan", flagCode: "ss" },
  { code: "0034", country: "Spain", flagCode: "es" },
  { code: "0094", country: "Sri Lanka", flagCode: "lk" },
  { code: "00249", country: "Sudan", flagCode: "sd" },
  { code: "00597", country: "Suriname", flagCode: "sr" },
  { code: "00268", country: "Swaziland", flagCode: "sz" },
  { code: "0046", country: "Sweden", flagCode: "se" },
  { code: "0041", country: "Switzerland", flagCode: "ch" },
  { code: "00963", country: "Syria", flagCode: "sy" },
  { code: "00886", country: "Taiwan", flagCode: "tw" },
  { code: "00992", country: "Tajikistan", flagCode: "tj" },
  { code: "00255", country: "Tanzania", flagCode: "tz" },
  { code: "0066", country: "Thailand", flagCode: "th" },
  { code: "00670", country: "Timor-Leste", flagCode: "tl" },
  { code: "00228", country: "Togo", flagCode: "tg" },
  { code: "00690", country: "Tokelau", flagCode: "tk" },
  { code: "00676", country: "Tonga", flagCode: "to" },
  { code: "001868", country: "Trinidad & Tobago", flagCode: "tt" },
  { code: "00216", country: "Tunisia", flagCode: "tn" },
  { code: "0090", country: "Turkey", flagCode: "tr" },
  { code: "00993", country: "Turkmenistan", flagCode: "tm" },
  { code: "001649", country: "Turks & Caicos Islands", flagCode: "tc" },
  { code: "00688", country: "Tuvalu", flagCode: "tv" },
  { code: "00256", country: "Uganda", flagCode: "ug" },
  { code: "00380", country: "Ukraine", flagCode: "ua" },
  { code: "00971", country: "United Arab Emirates", flagCode: "ae" },
  { code: "0044", country: "United Kingdom", flagCode: "gb" },
  { code: "001", country: "United States", flagCode: "us" },
  { code: "00598", country: "Uruguay", flagCode: "uy" },
  { code: "00998", country: "Uzbekistan", flagCode: "uz" },
  { code: "00678", country: "Vanuatu", flagCode: "vu" },
  { code: "0039066", country: "Vatican City", flagCode: "va" },
  { code: "0058", country: "Venezuela", flagCode: "ve" },
  { code: "0084", country: "Vietnam", flagCode: "vn" },
  { code: "001284", country: "British Virgin Islands", flagCode: "vg" },
  { code: "001340", country: "U.S. Virgin Islands", flagCode: "vi" },
  { code: "00681", country: "Wallis & Futuna", flagCode: "wf" },
  { code: "00212", country: "Western Sahara", flagCode: "eh" },
  { code: "00967", country: "Yemen", flagCode: "ye" },
  { code: "00260", country: "Zambia", flagCode: "zm" },
  { code: "00263", country: "Zimbabwe", flagCode: "zw" },
];

// Countries list for location dropdown
const countries = [
  { name: "Afghanistan", flagCode: "af" },
  { name: "Albania", flagCode: "al" },
  { name: "Algeria", flagCode: "dz" },
  { name: "American Samoa", flagCode: "as" },
  { name: "Andorra", flagCode: "ad" },
  { name: "Angola", flagCode: "ao" },
  { name: "Anguilla", flagCode: "ai" },
  { name: "Antigua & Barbuda", flagCode: "ag" },
  { name: "Argentina", flagCode: "ar" },
  { name: "Armenia", flagCode: "am" },
  { name: "Aruba", flagCode: "aw" },
  { name: "Australia", flagCode: "au" },
  { name: "Austria", flagCode: "at" },
  { name: "Azerbaijan", flagCode: "az" },
  { name: "Bahamas", flagCode: "bs" },
  { name: "Bahrain", flagCode: "bh" },
  { name: "Bangladesh", flagCode: "bd" },
  { name: "Barbados", flagCode: "bb" },
  { name: "Belarus", flagCode: "by" },
  { name: "Belgium", flagCode: "be" },
  { name: "Belize", flagCode: "bz" },
  { name: "Benin", flagCode: "bj" },
  { name: "Bermuda", flagCode: "bm" },
  { name: "Bhutan", flagCode: "bt" },
  { name: "Bolivia", flagCode: "bo" },
  { name: "Bosnia & Herzegovina", flagCode: "ba" },
  { name: "Botswana", flagCode: "bw" },
  { name: "Brazil", flagCode: "br" },
  { name: "Brunei", flagCode: "bn" },
  { name: "Bulgaria", flagCode: "bg" },
  { name: "Burkina Faso", flagCode: "bf" },
  { name: "Burundi", flagCode: "bi" },
  { name: "Cambodia", flagCode: "kh" },
  { name: "Cameroon", flagCode: "cm" },
  { name: "Canada", flagCode: "ca" },
  { name: "Cape Verde", flagCode: "cv" },
  { name: "Cayman Islands", flagCode: "ky" },
  { name: "Central African Republic", flagCode: "cf" },
  { name: "Chad", flagCode: "td" },
  { name: "Chile", flagCode: "cl" },
  { name: "China", flagCode: "cn" },
  { name: "Colombia", flagCode: "co" },
  { name: "Comoros", flagCode: "km" },
  { name: "Congo", flagCode: "cg" },
  { name: "Congo (DRC)", flagCode: "cd" },
  { name: "Cook Islands", flagCode: "ck" },
  { name: "Costa Rica", flagCode: "cr" },
  { name: "Côte d'Ivoire", flagCode: "ci" },
  { name: "Croatia", flagCode: "hr" },
  { name: "Cuba", flagCode: "cu" },
  { name: "Cyprus", flagCode: "cy" },
  { name: "Czech Republic", flagCode: "cz" },
  { name: "Denmark", flagCode: "dk" },
  { name: "Djibouti", flagCode: "dj" },
  { name: "Dominica", flagCode: "dm" },
  { name: "Dominican Republic", flagCode: "do" },
  { name: "Ecuador", flagCode: "ec" },
  { name: "Egypt", flagCode: "eg" },
  { name: "El Salvador", flagCode: "sv" },
  { name: "Equatorial Guinea", flagCode: "gq" },
  { name: "Eritrea", flagCode: "er" },
  { name: "Estonia", flagCode: "ee" },
  { name: "Ethiopia", flagCode: "et" },
  { name: "Falkland Islands", flagCode: "fk" },
  { name: "Faroe Islands", flagCode: "fo" },
  { name: "Fiji", flagCode: "fj" },
  { name: "Finland", flagCode: "fi" },
  { name: "France", flagCode: "fr" },
  { name: "French Guiana", flagCode: "gf" },
  { name: "French Polynesia", flagCode: "pf" },
  { name: "Gabon", flagCode: "ga" },
  { name: "Gambia", flagCode: "gm" },
  { name: "Georgia", flagCode: "ge" },
  { name: "Germany", flagCode: "de" },
  { name: "Ghana", flagCode: "gh" },
  { name: "Gibraltar", flagCode: "gi" },
  { name: "Greece", flagCode: "gr" },
  { name: "Greenland", flagCode: "gl" },
  { name: "Grenada", flagCode: "gd" },
  { name: "Guadeloupe", flagCode: "gp" },
  { name: "Guam", flagCode: "gu" },
  { name: "Guatemala", flagCode: "gt" },
  { name: "Guinea", flagCode: "gn" },
  { name: "Guinea-Bissau", flagCode: "gw" },
  { name: "Guyana", flagCode: "gy" },
  { name: "Haiti", flagCode: "ht" },
  { name: "Honduras", flagCode: "hn" },
  { name: "Hong Kong", flagCode: "hk" },
  { name: "Hungary", flagCode: "hu" },
  { name: "Iceland", flagCode: "is" },
  { name: "India", flagCode: "in" },
  { name: "Indonesia", flagCode: "id" },
  { name: "Iran", flagCode: "ir" },
  { name: "Iraq", flagCode: "iq" },
  { name: "Ireland", flagCode: "ie" },
  { name: "Israel", flagCode: "il" },
  { name: "Italy", flagCode: "it" },
  { name: "Jamaica", flagCode: "jm" },
  { name: "Japan", flagCode: "jp" },
  { name: "Jordan", flagCode: "jo" },
  { name: "Kazakhstan", flagCode: "kz" },
  { name: "Kenya", flagCode: "ke" },
  { name: "Kiribati", flagCode: "ki" },
  { name: "North Korea", flagCode: "kp" },
  { name: "South Korea", flagCode: "kr" },
  { name: "Kuwait", flagCode: "kw" },
  { name: "Kyrgyzstan", flagCode: "kg" },
  { name: "Laos", flagCode: "la" },
  { name: "Latvia", flagCode: "lv" },
  { name: "Lebanon", flagCode: "lb" },
  { name: "Lesotho", flagCode: "ls" },
  { name: "Liberia", flagCode: "lr" },
  { name: "Libya", flagCode: "ly" },
  { name: "Liechtenstein", flagCode: "li" },
  { name: "Lithuania", flagCode: "lt" },
  { name: "Luxembourg", flagCode: "lu" },
  { name: "Macao", flagCode: "mo" },
  { name: "Macedonia", flagCode: "mk" },
  { name: "Madagascar", flagCode: "mg" },
  { name: "Malawi", flagCode: "mw" },
  { name: "Malaysia", flagCode: "my" },
  { name: "Maldives", flagCode: "mv" },
  { name: "Mali", flagCode: "ml" },
  { name: "Malta", flagCode: "mt" },
  { name: "Marshall Islands", flagCode: "mh" },
  { name: "Martinique", flagCode: "mq" },
  { name: "Mauritania", flagCode: "mr" },
  { name: "Mauritius", flagCode: "mu" },
  { name: "Mexico", flagCode: "mx" },
  { name: "Micronesia", flagCode: "fm" },
  { name: "Moldova", flagCode: "md" },
  { name: "Monaco", flagCode: "mc" },
  { name: "Mongolia", flagCode: "mn" },
  { name: "Montenegro", flagCode: "me" },
  { name: "Montserrat", flagCode: "ms" },
  { name: "Morocco", flagCode: "ma" },
  { name: "Mozambique", flagCode: "mz" },
  { name: "Myanmar", flagCode: "mm" },
  { name: "Namibia", flagCode: "na" },
  { name: "Nauru", flagCode: "nr" },
  { name: "Nepal", flagCode: "np" },
  { name: "Netherlands", flagCode: "nl" },
  { name: "New Caledonia", flagCode: "nc" },
  { name: "New Zealand", flagCode: "nz" },
  { name: "Nicaragua", flagCode: "ni" },
  { name: "Niger", flagCode: "ne" },
  { name: "Nigeria", flagCode: "ng" },
  { name: "Niue", flagCode: "nu" },
  { name: "Norfolk Island", flagCode: "nf" },
  { name: "Northern Mariana Islands", flagCode: "mp" },
  { name: "Norway", flagCode: "no" },
  { name: "Oman", flagCode: "om" },
  { name: "Pakistan", flagCode: "pk" },
  { name: "Palau", flagCode: "pw" },
  { name: "Palestine", flagCode: "ps" },
  { name: "Panama", flagCode: "pa" },
  { name: "Papua New Guinea", flagCode: "pg" },
  { name: "Paraguay", flagCode: "py" },
  { name: "Peru", flagCode: "pe" },
  { name: "Philippines", flagCode: "ph" },
  { name: "Poland", flagCode: "pl" },
  { name: "Portugal", flagCode: "pt" },
  { name: "Puerto Rico", flagCode: "pr" },
  { name: "Qatar", flagCode: "qa" },
  { name: "Réunion", flagCode: "re" },
  { name: "Romania", flagCode: "ro" },
  { name: "Russia", flagCode: "ru" },
  { name: "Rwanda", flagCode: "rw" },
  { name: "Saint Helena", flagCode: "sh" },
  { name: "Saint Kitts & Nevis", flagCode: "kn" },
  { name: "Saint Lucia", flagCode: "lc" },
  { name: "Saint Pierre & Miquelon", flagCode: "pm" },
  { name: "Saint Vincent & Grenadines", flagCode: "vc" },
  { name: "Samoa", flagCode: "ws" },
  { name: "San Marino", flagCode: "sm" },
  { name: "São Tomé & Príncipe", flagCode: "st" },
  { name: "Saudi Arabia", flagCode: "sa" },
  { name: "Senegal", flagCode: "sn" },
  { name: "Serbia", flagCode: "rs" },
  { name: "Seychelles", flagCode: "sc" },
  { name: "Sierra Leone", flagCode: "sl" },
  { name: "Singapore", flagCode: "sg" },
  { name: "Slovakia", flagCode: "sk" },
  { name: "Slovenia", flagCode: "si" },
  { name: "Solomon Islands", flagCode: "sb" },
  { name: "Somalia", flagCode: "so" },
  { name: "South Africa", flagCode: "za" },
  { name: "South Sudan", flagCode: "ss" },
  { name: "Spain", flagCode: "es" },
  { name: "Sri Lanka", flagCode: "lk" },
  { name: "Sudan", flagCode: "sd" },
  { name: "Suriname", flagCode: "sr" },
  { name: "Swaziland", flagCode: "sz" },
  { name: "Sweden", flagCode: "se" },
  { name: "Switzerland", flagCode: "ch" },
  { name: "Syria", flagCode: "sy" },
  { name: "Taiwan", flagCode: "tw" },
  { name: "Tajikistan", flagCode: "tj" },
  { name: "Tanzania", flagCode: "tz" },
  { name: "Thailand", flagCode: "th" },
  { name: "Timor-Leste", flagCode: "tl" },
  { name: "Togo", flagCode: "tg" },
  { name: "Tokelau", flagCode: "tk" },
  { name: "Tonga", flagCode: "to" },
  { name: "Trinidad & Tobago", flagCode: "tt" },
  { name: "Tunisia", flagCode: "tn" },
  { name: "Turkey", flagCode: "tr" },
  { name: "Turkmenistan", flagCode: "tm" },
  { name: "Turks & Caicos Islands", flagCode: "tc" },
  { name: "Tuvalu", flagCode: "tv" },
  { name: "Uganda", flagCode: "ug" },
  { name: "Ukraine", flagCode: "ua" },
  { name: "United Arab Emirates", flagCode: "ae" },
  { name: "United Kingdom", flagCode: "gb" },
  { name: "United States", flagCode: "us" },
  { name: "Uruguay", flagCode: "uy" },
  { name: "Uzbekistan", flagCode: "uz" },
  { name: "Vanuatu", flagCode: "vu" },
  { name: "Vatican City", flagCode: "va" },
  { name: "Venezuela", flagCode: "ve" },
  { name: "Vietnam", flagCode: "vn" },
  { name: "British Virgin Islands", flagCode: "vg" },
  { name: "U.S. Virgin Islands", flagCode: "vi" },
  { name: "Wallis & Futuna", flagCode: "wf" },
  { name: "Western Sahara", flagCode: "eh" },
  { name: "Yemen", flagCode: "ye" },
  { name: "Zambia", flagCode: "zm" },
  { name: "Zimbabwe", flagCode: "zw" },
];

function TravelersDetails({country}) {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [flight, setFlight] = useState(null);
  const [totalTravellers, setTotalTravellers] = useState(0);
  const [travellerList, setTravellerList] = useState({ Traveller: [] });
  const [expandedTravellers, setExpandedTravellers] = useState(new Set([0]));
  const [completedTravellers, setCompletedTravellers] = useState(new Set());
  const [billingCompleted, setBillingCompleted] = useState(false);
  const [billingExpanded, setBillingExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


  const [billingDetails, setBillingDetails] = useState({
    name: {
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
    },
    address: {
      company: "",
      flat: "",
      buildingNumber: "",
      buildingName: "",
      street: "",
      city: "",
      province: "OT", // default
      postalCode: "",
      country: "",
      phoneCode: "",
      flagCode: "",
    },
    Name: {
      Title: "Mr",
      NamePartList: {
        NamePart: ["", "", ""],
      },
    },
    Address: {
      Company: "",
      Flat: "",
      BuildingName: "",
      BuildingNumber: "",
      Street: "",
      Locality: "",
      City: "",
      Province: "OT",
      Postcode: "",
      CountryCode: "",
    },
    CreditCard: {
      Number: import.meta.env.VITE_CARD_NUMBER,
      SecurityCode: import.meta.env.VITE_CARD_SECURITYCODE,
      ExpiryDate: import.meta.env.VITE_CARD_EXPIRYDATE,
      StartDate: import.meta.env.VITE_CARD_STARTDATE,
      CardType: import.meta.env.VITE_CARD_CARDTYPE,
      IssueNumber: "0",
    },
  });
  const [sameAsAdult1, setSameAsAdult1] = useState(false);

  // Calculate age based on departure date or return date
  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return "";
    const dob = new Date(dateOfBirth);
    let referenceDate;

    // Get departure date
    const outwardTicket = location.state?.flights?.[0];
    const returnTicket = location.state?.flights?.[1];
    const tripType = location.state?.tripType;

    if (tripType === "Round Trip" && returnTicket?.departureDate) {
      // For round trip, use return date
      referenceDate = new Date(returnTicket.departureDate);
    } else if (outwardTicket?.departureDate) {
      // For one way or if return date not available, use departure date
      referenceDate = new Date(outwardTicket.departureDate);
    } else {
      // Fallback to current date if flight dates not available
      referenceDate = new Date();
    }

    let age = referenceDate.getFullYear() - dob.getFullYear();
    const monthDiff = referenceDate.getMonth() - dob.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && referenceDate.getDate() < dob.getDate())
    ) {
      age--;
    }

    return age;
  };

  useEffect(() => {
    if (location.state && location.state.flights) {
      setFlight(location.state.flights);
    }

    console.log(location.state.travalers);

    // travelers data - always check sessionStorage first for saved data
    if (location.state && location.state.travalers) {
      const travellerCount = location.state.travalers.length;
      setTotalTravellers(travellerCount);

      // Always try to load from sessionStorage first
      try {
        const savedData = sessionStorage.getItem("travellerFormData");
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          console.log("Loading saved data:", parsedData);

          if (parsedData.TravellerList) {
            setTravellerList(parsedData.TravellerList);
          }
          if (parsedData.BillingDetails) {
            setBillingDetails(parsedData.BillingDetails);
          }
          if (parsedData.sameAsAdult1 !== undefined) {
            setSameAsAdult1(parsedData.sameAsAdult1);
          }
          return; // Exit early if data was loaded
        }
      } catch (error) {
        console.error("Error loading saved form data:", error);
      }

      // Only initialize with empty data if no saved data exists
      console.log("Initializing with empty data");
      const initialTravellers = location.state.travalers.map(
        (traveler, index) => ({
          Age: "",
          Name: {
            Title: "Mr",
            NamePartList: {
              NamePart: ["", "", ""],
            },
          },
          Address: {
            Company: "",
            Flat: "",
            BuildingName: "",
            BuildingNumber: "",
            Street: "",
            Locality: "",
            City: "",
            Province: "OT",
            Postcode: "",
            CountryCode: "",
          },
          MobilePhone: {
            InternationalCode: "",
            Number: "",
          },
          Email: "",
          CustomSupplierParameterList: {
            CustomSupplierParameter: [
              {
                Name: "DateOfBirth",
                Value: "",
              },
            ],
          },
        })
      );
      setTravellerList({ Traveller: initialTravellers });
    }
  }, []); // Remove location dependency to prevent re-initialization

  // useEffect(() => {
  //   const fetchCountry = async () => {
  //     try {
  //       const res = await fetch("https://ipapi.co/json/");
  //       const data = await res.json();
  //       setFormData((prev) => ({
  //         ...prev,
  //         country: data.country_name || "",
  //       }));
  //     } catch (error) {
  //       console.error("Country auto-detect failed:", error);
  //     }
  //   };

  //   fetchCountry();
  // }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".country-dropdown")) {
        setActiveDropdown(null);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Save data to sessionStorage whenever traveller or billing data changes
  useEffect(() => {
    // Only save if we have actual data (not empty initialization)
    if (
      travellerList.Traveller.length > 0 &&
      (travellerList.Traveller[0].Name.NamePartList.NamePart[0] ||
        travellerList.Traveller[0].Email ||
        billingDetails.Name?.NamePartList?.NamePart?.[0])
    ) {
      const dataToSave = {
        TravellerList: travellerList,
        BillingDetails: billingDetails,
        sameAsAdult1: sameAsAdult1,
      };

      console.log("Saving form data:", dataToSave);

      try {
        sessionStorage.setItem("travellerFormData", JSON.stringify(dataToSave));
      } catch (error) {
        console.error("Error saving form data:", error);
      }
    }
  }, [travellerList, billingDetails, sameAsAdult1]);

  const OutwardTicket = location.state?.flights?.[0];
  const returnTicket = location.state?.flights?.[1];

  console.log(OutwardTicket);

  // Allow clicking on any traveller section
  const toggleTravellerExpansion = (index) => {
    setExpandedTravellers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Allow clicking on billing section anytime
  const toggleBillingExpansion = () => {
    setBillingExpanded(!billingExpanded);
  };

  const handleTravellerChange = (field, value, travellerIndex) => {
    const updatedTravellers = [...travellerList.Traveller];

    if (field === "age") {
      updatedTravellers[travellerIndex].Age = parseInt(value) || "";
    } else if (field === "title") {
      updatedTravellers[travellerIndex].Name.Title = value;
    } else if (field === "firstName") {
      updatedTravellers[travellerIndex].Name.NamePartList.NamePart[0] = value;
    } else if (field === "middleName") {
      updatedTravellers[travellerIndex].Name.NamePartList.NamePart[1] = value;
    } else if (field === "lastName") {
      updatedTravellers[travellerIndex].Name.NamePartList.NamePart[2] = value;
    } else if (field === "email") {
      updatedTravellers[travellerIndex].Email = value;
    } else if (field.startsWith("address.")) {
      const addressField = field.split(".")[1];
      updatedTravellers[travellerIndex].Address[addressField] = value;
    } else if (field.startsWith("phone.")) {
      const phoneField = field.split(".")[1];
      updatedTravellers[travellerIndex].MobilePhone[phoneField] = value;
    } else if (field === "dateOfBirth") {
      updatedTravellers[
        travellerIndex
      ].CustomSupplierParameterList.CustomSupplierParameter[0].Value = value;

      // Auto-calculate age when DOB changes
      const calculatedAge = calculateAge(value);
      if (calculatedAge) {
        updatedTravellers[travellerIndex].Age = calculatedAge;
      }
    }

    setTravellerList({ Traveller: updatedTravellers });

    // If this is Adult 1 (index 0) and sameAsAdult1 is checked, update billing details
    if (travellerIndex === 0 && sameAsAdult1) {
      updateBillingFromAdult1();
    }

    // Clear validation errors for this field
    const errorKey = `traveller_${travellerIndex}_${field}`;
    if (validationErrors[errorKey]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[errorKey];
        return newErrors;
      });
    }
  };

  const handleBillingChange = (field, value) => {
    setBillingDetails((prev) => {
      const updated = { ...prev };

      if (field.startsWith("address.")) {
        const addressField = field.split(".")[1];
        updated.Address[addressField] = value;
      } else if (field === "title") {
        updated.Name.Title = value;
      } else if (field === "firstName") {
        updated.Name.NamePartList.NamePart[0] = value;
      } else if (field === "middleName") {
        updated.Name.NamePartList.NamePart[1] = value;
      } else if (field === "lastName") {
        updated.Name.NamePartList.NamePart[2] = value;
      }

      return updated;
    });

    // Clear validation errors for billing fields
    const errorKey = `billing_${field}`;
    if (validationErrors[errorKey]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[errorKey];
        return newErrors;
      });
    }
  };

  const updateBillingFromAdult1 = () => {
    const adult1 = travellerList.Traveller[0];
    if (adult1) {
      setBillingDetails((prev) => ({
        ...prev,
        Name: {
          Title: adult1.Name.Title,
          NamePartList: {
            NamePart: [...adult1.Name.NamePartList.NamePart],
          },
        },
        Address: { ...adult1.Address },
      }));
    }
  };

  const handleSameAsAdult1Change = (checked) => {
    setSameAsAdult1(checked);
    if (checked) {
      updateBillingFromAdult1();
    }
  };

  const handleBillingCheckboxChange = (e) => {
    const checked = e.target.checked;
    setSameAsAdult1(checked);
    if (checked) {
      updateBillingFromAdult1();
    }
  };

  // International Code Dropdown Component
  const InternationalCodeDropdown = ({ value, onChange, fieldKey }) => {
    const filteredCodes = internationalCodes.filter(
      (code) =>
        code.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        code.code.includes(searchTerm)
    );

    const selectedCode = internationalCodes.find((code) => code.code === value);

    return (
      <div className="relative country-dropdown">
        <div
          onClick={() => {
            setActiveDropdown(activeDropdown === fieldKey ? null : fieldKey);
            setSearchTerm("");
          }}
          className="w-full border border-[#CCCCCC] rounded p-2 text-sm cursor-pointer flex items-center justify-between bg-white min-h-[36px]"
        >
          <div className="flex items-center gap-2">
            {selectedCode ? (
              <>
                <img
                  src={`https://flagcdn.com/w40/${selectedCode.flagCode}.png`}
                  alt={selectedCode.country}
                  className="w-6 h-4 object-cover rounded-sm flex-shrink-0"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <span className="text-sm font-medium text-gray-800 truncate">
                  {selectedCode.code}
                </span>
              </>
            ) : (
              <span className="text-gray-500">Select code</span>
            )}
          </div>
          <span
            className={`transform transition-transform duration-200 flex-shrink-0 ml-2 ${
              activeDropdown === fieldKey ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>

        {activeDropdown === fieldKey && (
          <div className="absolute top-full left-0 right-0 z-50 bg-white border border-[#CCCCCC] rounded-b shadow-lg max-h-60 overflow-hidden">
            <div className="p-2 border-b">
              <input
                type="text"
                placeholder="Search country or code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-sm"
                autoFocus
              />
            </div>
            <div className="overflow-y-auto max-h-48">
              {filteredCodes.map((code) => (
                <div
                  key={`${code.code}-${code.country}`}
                  onClick={() => {
                    onChange(code.code);
                    setActiveDropdown(null);
                    setSearchTerm("");
                  }}
                  className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center justify-center w-8 flex-shrink-0">
                    <img
                      src={`https://flagcdn.com/w40/${code.flagCode}.png`}
                      alt={code.country}
                      className="w-6 h-4 object-cover rounded-sm"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm truncate">
                      {code.country}
                    </div>
                    <div className="text-xs text-gray-500">{code.code}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Country Dropdown Component (for location)
  const CountryDropdown = ({ value, onChange, fieldKey }) => {
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const selectedCountry = countries.find((country) => country.name === value);

    return (
      <div className="relative country-dropdown">
        <div
          onClick={() => {
            setActiveDropdown(activeDropdown === fieldKey ? null : fieldKey);
            setSearchTerm("");
          }}
          className="w-full border border-[#CCCCCC] rounded p-2 text-sm cursor-pointer flex items-center justify-between bg-white min-h-[36px]"
        >
          <div className="flex items-center gap-2">
            {selectedCountry ? (
              <>
                <img
                  src={`https://flagcdn.com/w40/${selectedCountry.flagCode}.png`}
                  alt={selectedCountry.name}
                  className="w-6 h-4 object-cover rounded-sm flex-shrink-0"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <span className="text-sm font-medium text-gray-800 truncate">
                  {selectedCountry.name}
                </span>
              </>
            ) : (
              <span className="text-gray-500">Select country</span>
            )}
          </div>
          <span
            className={`transform transition-transform duration-200 flex-shrink-0 ml-2 ${
              activeDropdown === fieldKey ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>

        {activeDropdown === fieldKey && (
          <div className="absolute top-full left-0 right-0 z-50 bg-white border border-[#CCCCCC] rounded-b shadow-lg max-h-60 overflow-hidden">
            <div className="p-2 border-b">
              <input
                type="text"
                placeholder="Search country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-sm"
                autoFocus
              />
            </div>
            <div className="overflow-y-auto max-h-48">
              {filteredCountries.map((country) => (
                <div
                  key={country.name}
                  onClick={() => {
                    onChange(country.name);
                    setActiveDropdown(null);
                    setSearchTerm("");
                  }}
                  className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center justify-center w-8 flex-shrink-0">
                    <img
                      src={`https://flagcdn.com/w40/${country.flagCode}.png`}
                      alt={country.name}
                      className="w-6 h-4 object-cover rounded-sm"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm truncate">
                      {country.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Validation functions
  const validateTraveller = (traveller, index) => {
    const errors = {};
    const prefix = `traveller_${index}`;

    if (!traveller.Age) {
      errors[`${prefix}_age`] = "Age is required";
    }
    if (!traveller.Name?.NamePartList?.NamePart?.[0]) {
      errors[`${prefix}_firstName`] = "First name is required";
    }
    if (!traveller.Name?.NamePartList?.NamePart?.[2]) {
      errors[`${prefix}_lastName`] = "Last name is required";
    }
    if (!traveller.Email) {
      errors[`${prefix}_email`] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(traveller.Email)) {
      errors[`${prefix}_email`] = "Email format is invalid";
    }
    if (
      !traveller.CustomSupplierParameterList?.CustomSupplierParameter?.[0]
        ?.Value
    ) {
      errors[`${prefix}_dateOfBirth`] = "Date of birth is required";
    }
    if (!traveller.MobilePhone?.Number) {
      errors[`${prefix}_phone.Number`] = "Phone number is required";
    }

    return errors;
  };

  const validateBilling = () => {
    const errors = {};

    if (!billingDetails.Name?.NamePartList?.NamePart?.[0]) {
      errors.billing_firstName = "First name is required";
    }
    if (!billingDetails.Name?.NamePartList?.NamePart?.[2]) {
      errors.billing_lastName = "Last name is required";
    }
    if (!billingDetails.Address?.City) {
      errors["billing_address.City"] = "City is required";
    }
    if (!billingDetails.Address?.Postcode) {
      errors["billing_address.Postcode"] = "Postcode is required";
    }
    // Removed CountryCode validation as it's no longer required

    return errors;
  };

  const isTravellerCompleted = (traveller, index) => {
    const errors = validateTraveller(traveller, index);
    return Object.keys(errors).length === 0;
  };

  const isBillingCompleted = () => {
    const errors = validateBilling();
    return Object.keys(errors).length === 0;
  };

  // Update completed travellers whenever data changes
  useEffect(() => {
    const newCompleted = new Set();
    travellerList.Traveller.forEach((traveller, index) => {
      if (isTravellerCompleted(traveller, index)) {
        newCompleted.add(index);
      }
    });
    setCompletedTravellers(newCompleted);

    // Update billing completion status
    setBillingCompleted(isBillingCompleted());
  }, [travellerList, billingDetails]);

  const handleTravellerNext = (index) => {
    // Validate current traveller
    const traveller = travellerList.Traveller[index];
    const errors = validateTraveller(traveller, index);

    if (Object.keys(errors).length > 0) {
      setValidationErrors((prev) => ({ ...prev, ...errors }));
      alert(
        "Please fill in all required fields before proceeding to the next section."
      );
      return;
    }

    // Clear any existing errors for this traveller
    setValidationErrors((prev) => {
      const newErrors = { ...prev };
      Object.keys(newErrors).forEach((key) => {
        if (key.startsWith(`traveller_${index}_`)) {
          delete newErrors[key];
        }
      });
      return newErrors;
    });

    // Move to next section
    if (index < totalTravellers - 1) {
      // Open next traveller
      setExpandedTravellers((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        newSet.add(index + 1);
        return newSet;
      });
    } else {
      // Open billing details
      setExpandedTravellers((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
      setBillingExpanded(true);
    }
  };

  const handleBillingNext = () => {
    // Validate billing details
    const errors = validateBilling();

    if (Object.keys(errors).length > 0) {
      setValidationErrors((prev) => ({ ...prev, ...errors }));
      alert("Please fill in all required fields before proceeding.");
      return;
    }

    // Clear billing errors
    setValidationErrors((prev) => {
      const newErrors = { ...prev };
      Object.keys(newErrors).forEach((key) => {
        if (key.startsWith("billing_")) {
          delete newErrors[key];
        }
      });
      return newErrors;
    });

    // Close billing section
    setBillingExpanded(false);
  };

  const handleBack = () => {
    // Don't clear data when going back - keep it saved
    navigate(-1);
  };

  // Helper function to clean name parts and remove empty middle names
  const cleanNameParts = (nameParts) => {
    const [firstName, middleName, lastName] = nameParts;
    const cleanedParts = [firstName];

    // Only include middle name if it's not empty, null, undefined, or just whitespace
    if (middleName && middleName.trim() !== "") {
      cleanedParts.push(middleName.trim());
    }

    cleanedParts.push(lastName);
    return cleanedParts;
  };

  // Helper function to clean object and remove empty values
  const cleanObject = (obj) => {
    const cleaned = {};
    for (const key in obj) {
      if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "") {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
          const cleanedNested = cleanObject(obj[key]);
          if (Object.keys(cleanedNested).length > 0) {
            cleaned[key] = cleanedNested;
          }
        } else if (Array.isArray(obj[key])) {
          const cleanedArray = obj[key].filter(
            (item) => item !== null && item !== undefined && item !== ""
          );
          if (cleanedArray.length > 0) {
            cleaned[key] = cleanedArray;
          }
        } else {
          cleaned[key] = obj[key];
        }
      }
    }
    return cleaned;
  };

  const handleContinue = () => {
    const filteredData = {};
    // for (const key in formData) {
    //   const value = formData[key];
    //   if (
    //     value !== "" &&
    //     value !== null &&
    //     value !== undefined &&
    //     !(typeof value === "object" && Object.keys(value).length === 0)
    //   ) {
    //     filteredData[key] = value;
    //   }
    // }

    // Validate all travellers and billing
    let allErrors = {};

    travellerList.Traveller.forEach((traveller, index) => {
      const travellerErrors = validateTraveller(traveller, index);
      allErrors = { ...allErrors, ...travellerErrors };
    });

    const billingErrors = validateBilling();
    allErrors = { ...allErrors, ...billingErrors };

    if (Object.keys(allErrors).length > 0) {
      setValidationErrors(allErrors);
      alert(
        "Please complete all required fields in all sections before continuing."
      );
      return;
    }

    // Clean the traveller data to remove empty values and middle names
    const cleanedTravellers = travellerList.Traveller.map((traveller) => {
      const cleanedTraveller = {
        ...traveller,
        Name: {
          ...traveller.Name,
          NamePartList: {
            NamePart: cleanNameParts(traveller.Name.NamePartList.NamePart),
          },
        },
      };
      return cleanObject(cleanedTraveller);
    });

    // Clean billing details
    const cleanedBillingDetails = {
      ...billingDetails,
      Name: {
        ...billingDetails.Name,
        NamePartList: {
          NamePart: cleanNameParts(billingDetails.Name.NamePartList.NamePart),
        },
      },
    };

    const finalData = {
      TravellerList: { Traveller: cleanedTravellers },
      BillingDetails: cleanObject(cleanedBillingDetails),
      // Use Adult 1 details as contact details
      ContactDetails: cleanedTravellers[0] || {},
    };

    // Don't clear saved data immediately - only clear after successful final submission
    // This allows users to go back and forth between pages
    console.log("Final booking data:", JSON.stringify(finalData, null, 2));

    navigate("/booking/SeatSelection", {
      state: {
        flights: location.state.flights,
        tripType: location.state.tripType,
        routingId: location.state.routingId,
        seatOption: location.state.seatOption,
        luggageOptions: location.state.luggageOptions,
        travellerDetails: finalData,
      },
    });
  };

  const getCurrentTraveller = () => {
    return travellerList.Traveller[0] || {};
  };

  if (!flight) return <p className="text-center mt-20 font-sans">Loading...</p>;

  const currentTraveller = getCurrentTraveller();
  const outwordPrice = location.state?.outwordPrice || 0;
  const returnPrice = location.state?.returnPrice || 0;
  const currency = location.state?.currency || "INR"; // fallback currency
  const tripType = location.state?.tripType || "OneWay";
  const totalPrice = outwordPrice + returnPrice;

  return (
    <div className="font-sans flex justify-center">
      <div className="w-full flex flex-col items-start">
        {/* Progress indicator */}
        <div className="w-full max-w-[656px] mb-6">
          <div className="flex items-center justify-center">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#EE5128] h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    ((completedTravellers.size + (billingCompleted ? 1 : 0)) /
                      (totalTravellers + 1)) *
                    100
                  }%`,
                }}
              ></div>
            </div>
            <span className="ml-3 text-sm font-medium text-gray-600">
              {Math.round(
                ((completedTravellers.size + (billingCompleted ? 1 : 0)) /
                  (totalTravellers + 1)) *
                  100
              )}
              %
            </span>
          </div>
        </div>

        {/* Main Content + Booking side-by-side */}
        <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
          {/* Main Content */}
          <div className="max-w-[656px] w-full">
            {/* All Travellers with Accordion */}
            {travellerList.Traveller.map((traveller, index) => {
              const isCompleted = completedTravellers.has(index);

              return (
                <div key={index} className="bg-white rounded-md mb-4">
                  <div
                    className="bg-[#FFE4DB] p-3 rounded-t-md flex justify-between items-center cursor-pointer hover:bg-[#fdd5c7]"
                    onClick={() => toggleTravellerExpansion(index)}
                  >
                    <h2 className="font-semibold font-jakarta">
                      {`${index < 2 ? "Adult" : "Child"} ${index + 1}`}
                      {isCompleted && (
                        <span className="ml-2 text-green-600 text-sm">
                          ✓ Completed
                        </span>
                      )}
                      {!isCompleted && (
                        <span className="ml-2 text-orange-600 text-sm">
                          • Incomplete
                        </span>
                      )}
                    </h2>
                    <div className="flex items-center gap-2">
                      {traveller.Name?.NamePartList?.NamePart?.[0] && (
                        <span className="text-sm text-gray-600">
                          {traveller.Name.NamePartList.NamePart[0]}{" "}
                          {traveller.Name.NamePartList.NamePart[2]}
                        </span>
                      )}
                      <span
                        className={`transform transition-transform duration-200 ${
                          expandedTravellers.has(index) ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </div>
                  </div>

                  {expandedTravellers.has(index) && (
                    <div className="p-6">
                      <p className="text-gray-400 mb-4">
                        *As per your passport
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Title <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={traveller.Name?.Title || "Mr"}
                            onChange={(e) =>
                              handleTravellerChange(
                                "title",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                          >
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Age <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            value={traveller.Age || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "age",
                                e.target.value,
                                index
                              )
                            }
                            className={`w-full border rounded p-2 text-sm ${
                              validationErrors[`traveller_${index}_age`]
                                ? "border-red-500"
                                : "border-[#CCCCCC]"
                            }`}
                            placeholder="Enter age"
                            // readOnly
                          />
                          {validationErrors[`traveller_${index}_age`] && (
                            <p className="text-red-500 text-xs mt-1">
                              {validationErrors[`traveller_${index}_age`]}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={
                              traveller.Name?.NamePartList?.NamePart?.[0] || ""
                            }
                            onChange={(e) =>
                              handleTravellerChange(
                                "firstName",
                                e.target.value,
                                index
                              )
                            }
                            className={`w-full border rounded p-2 text-sm ${
                              validationErrors[`traveller_${index}_firstName`]
                                ? "border-red-500"
                                : "border-[#CCCCCC]"
                            }`}
                            placeholder="Enter first name"
                          />
                          {validationErrors[`traveller_${index}_firstName`] && (
                            <p className="text-red-500 text-xs mt-1">
                              {validationErrors[`traveller_${index}_firstName`]}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Middle Name
                          </label>
                          <input
                            type="text"
                            value={
                              traveller.Name?.NamePartList?.NamePart?.[1] || ""
                            }
                            onChange={(e) =>
                              handleTravellerChange(
                                "middleName",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter middle name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={
                              traveller.Name?.NamePartList?.NamePart?.[2] || ""
                            }
                            onChange={(e) =>
                              handleTravellerChange(
                                "lastName",
                                e.target.value,
                                index
                              )
                            }
                            className={`w-full border rounded p-2 text-sm ${
                              validationErrors[`traveller_${index}_lastName`]
                                ? "border-red-500"
                                : "border-[#CCCCCC]"
                            }`}
                            placeholder="Enter last name"
                          />
                          {validationErrors[`traveller_${index}_lastName`] && (
                            <p className="text-red-500 text-xs mt-1">
                              {validationErrors[`traveller_${index}_lastName`]}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Date of Birth{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            value={
                              traveller.CustomSupplierParameterList
                                ?.CustomSupplierParameter?.[0]?.Value || ""
                            }
                            onChange={(e) =>
                              handleTravellerChange(
                                "dateOfBirth",
                                e.target.value,
                                index
                              )
                            }
                            className={`w-full border rounded p-2 text-sm ${
                              validationErrors[`traveller_${index}_dateOfBirth`]
                                ? "border-red-500"
                                : "border-[#CCCCCC]"
                            }`}
                          />
                          {validationErrors[
                            `traveller_${index}_dateOfBirth`
                          ] && (
                            <p className="text-red-500 text-xs mt-1">
                              {
                                validationErrors[
                                  `traveller_${index}_dateOfBirth`
                                ]
                              }
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Company
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.Company || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.Company",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter company"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Flat/Apartment
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.Flat || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.Flat",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter flat/apartment"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Building Name
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.BuildingName || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.BuildingName",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter building name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Building Number
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.BuildingNumber || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.BuildingNumber",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter building number"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Street
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.Street || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.Street",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter street"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Locality
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.Locality || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.Locality",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter locality"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.City || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.City",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter city"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Province/State
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.Province || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.Province",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter province/state"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Postcode
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.Postcode || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.Postcode",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter postcode"
                          />
                        </div>

                        <div className="w-full">
                          <label className="text-sm text-gray-600">
                            Country Code
                          </label>
                          <input
                            type="text"
                            className="w-full border rounded px-3 py-2 bg-gray-100"
                            value={country}
                            readOnly
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1">
                            International Code
                          </label>
                          <InternationalCodeDropdown
                            value={
                              traveller.MobilePhone?.InternationalCode || ""
                            }
                            onChange={(code) =>
                              handleTravellerChange(
                                "phone.InternationalCode",
                                code,
                                index
                              )
                            }
                            fieldKey={`traveller_${index}_intCode`}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            value={traveller.MobilePhone?.Number || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "phone.Number",
                                e.target.value,
                                index
                              )
                            }
                            className={`w-full border rounded p-2 text-sm ${
                              validationErrors[
                                `traveller_${index}_phone.Number`
                              ]
                                ? "border-red-500"
                                : "border-[#CCCCCC]"
                            }`}
                            placeholder="Enter phone number"
                          />
                          {validationErrors[
                            `traveller_${index}_phone.Number`
                          ] && (
                            <p className="text-red-500 text-xs mt-1">
                              {
                                validationErrors[
                                  `traveller_${index}_phone.Number`
                                ]
                              }
                            </p>
                          )}
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium mb-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            value={traveller.Email || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "email",
                                e.target.value,
                                index
                              )
                            }
                            className={`w-full border rounded p-2 text-sm ${
                              validationErrors[`traveller_${index}_email`]
                                ? "border-red-500"
                                : "border-[#CCCCCC]"
                            }`}
                            placeholder="Enter email"
                          />
                          {validationErrors[`traveller_${index}_email`] && (
                            <p className="text-red-500 text-xs mt-1">
                              {validationErrors[`traveller_${index}_email`]}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Next Button for each traveller */}
                      <div className="mt-6 flex justify-end">
                        <button
                          onClick={() => handleTravellerNext(index)}
                          className="bg-[#EE5128] text-white px-6 py-2 rounded font-semibold font-jakarta hover:bg-[#d64520] active:bg-[#b83b1c] transition-colors duration-200"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Billing Details Section */}
            <div className="bg-white rounded-md mb-4">
              <div
                className="bg-[#FFE4DB] p-3 rounded-t-md flex justify-between items-center cursor-pointer hover:bg-[#fdd5c7]"
                onClick={toggleBillingExpansion}
              >
                <h2 className="font-semibold font-jakarta">
                  Billing Details
                  {billingCompleted && (
                    <span className="ml-2 text-green-600 text-sm">
                      ✓ Completed
                    </span>
                  )}
                  {!billingCompleted && (
                    <span className="ml-2 text-orange-600 text-sm">
                      • Incomplete
                    </span>
                  )}
                </h2>
                <span
                  className={`transform transition-transform duration-200 ${
                    billingExpanded ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              {billingExpanded && (
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Same as Adult 1 Checkbox */}
                    <div className="sm:col-span-2 mb-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={sameAsAdult1}
                          onChange={handleBillingCheckboxChange}
                        />
                        Billing same as Adult 1
                      </label>
                    </div>

                    {/* Title */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Title <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={billingDetails.Name?.Title || "Mr"}
                        onChange={(e) =>
                          handleBillingChange("title", e.target.value)
                        }
                        className={`w-full border rounded p-2 text-sm ${
                          validationErrors["billing_title"]
                            ? "border-red-500"
                            : "border-[#CCCCCC]"
                        }`}
                        disabled={sameAsAdult1}
                      >
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                      </select>
                    </div>

                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={
                          billingDetails.Name?.NamePartList?.NamePart?.[0] || ""
                        }
                        onChange={(e) =>
                          handleBillingChange("firstName", e.target.value)
                        }
                        className={`w-full border rounded p-2 text-sm ${
                          validationErrors["billing_firstName"]
                            ? "border-red-500"
                            : "border-[#CCCCCC]"
                        } ${sameAsAdult1 ? "bg-gray-100" : ""}`}
                        placeholder="Enter first name"
                        disabled={sameAsAdult1}
                      />
                      {validationErrors["billing_firstName"] && (
                        <p className="text-red-500 text-xs mt-1">
                          {validationErrors["billing_firstName"]}
                        </p>
                      )}
                    </div>

                    {/* Middle Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        value={
                          billingDetails.Name?.NamePartList?.NamePart?.[1] || ""
                        }
                        onChange={(e) =>
                          handleBillingChange("middleName", e.target.value)
                        }
                        className={`w-full border border-[#CCCCCC] rounded p-2 text-sm ${
                          sameAsAdult1 ? "bg-gray-100" : ""
                        }`}
                        placeholder="Enter middle name"
                        disabled={sameAsAdult1}
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={
                          billingDetails.Name?.NamePartList?.NamePart?.[2] || ""
                        }
                        onChange={(e) =>
                          handleBillingChange("lastName", e.target.value)
                        }
                        className={`w-full border rounded p-2 text-sm ${
                          validationErrors["billing_lastName"]
                            ? "border-red-500"
                            : "border-[#CCCCCC]"
                        } ${sameAsAdult1 ? "bg-gray-100" : ""}`}
                        placeholder="Enter last name"
                        disabled={sameAsAdult1}
                      />
                      {validationErrors["billing_lastName"] && (
                        <p className="text-red-500 text-xs mt-1">
                          {validationErrors["billing_lastName"]}
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address?.Company || ""}
                        onChange={(e) =>
                          handleBillingChange("address.Company", e.target.value)
                        }
                        className={`w-full border border-[#CCCCCC] rounded p-2 text-sm ${
                          sameAsAdult1 ? "bg-gray-100" : ""
                        }`}
                        placeholder="Enter company"
                        disabled={sameAsAdult1}
                      />
                    </div>

                    {/* Flat */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Flat
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address?.Flat || ""}
                        onChange={(e) =>
                          handleBillingChange("address.Flat", e.target.value)
                        }
                        className={`w-full border border-[#CCCCCC] rounded p-2 text-sm ${
                          sameAsAdult1 ? "bg-gray-100" : ""
                        }`}
                        placeholder="Enter flat"
                        disabled={sameAsAdult1}
                      />
                    </div>

                    {/* Building Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Building Name
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address?.BuildingName || ""}
                        onChange={(e) =>
                          handleBillingChange(
                            "address.BuildingName",
                            e.target.value
                          )
                        }
                        className={`w-full border border-[#CCCCCC] rounded p-2 text-sm ${
                          sameAsAdult1 ? "bg-gray-100" : ""
                        }`}
                        placeholder="Enter building name"
                        disabled={sameAsAdult1}
                      />
                    </div>

                    {/* Building Number */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Building Number
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address?.BuildingNumber || ""}
                        onChange={(e) =>
                          handleBillingChange(
                            "address.BuildingNumber",
                            e.target.value
                          )
                        }
                        className={`w-full border border-[#CCCCCC] rounded p-2 text-sm ${
                          sameAsAdult1 ? "bg-gray-100" : ""
                        }`}
                        placeholder="Enter building number"
                        disabled={sameAsAdult1}
                      />
                    </div>

                    {/* Street */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Street
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address?.Street || ""}
                        onChange={(e) =>
                          handleBillingChange("address.Street", e.target.value)
                        }
                        className={`w-full border border-[#CCCCCC] rounded p-2 text-sm ${
                          sameAsAdult1 ? "bg-gray-100" : ""
                        }`}
                        placeholder="Enter street"
                        disabled={sameAsAdult1}
                      />
                    </div>

                    {/* Locality */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Locality
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address?.Locality || ""}
                        onChange={(e) =>
                          handleBillingChange(
                            "address.Locality",
                            e.target.value
                          )
                        }
                        className={`w-full border border-[#CCCCCC] rounded p-2 text-sm ${
                          sameAsAdult1 ? "bg-gray-100" : ""
                        }`}
                        placeholder="Enter locality"
                        disabled={sameAsAdult1}
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address?.City || ""}
                        onChange={(e) =>
                          handleBillingChange("address.City", e.target.value)
                        }
                        className={`w-full border rounded p-2 text-sm ${
                          validationErrors["billing_address.City"]
                            ? "border-red-500"
                            : "border-[#CCCCCC]"
                        } ${sameAsAdult1 ? "bg-gray-100" : ""}`}
                        placeholder="Enter city"
                        disabled={sameAsAdult1}
                      />
                      {validationErrors["billing_address.City"] && (
                        <p className="text-red-500 text-xs mt-1">
                          {validationErrors["billing_address.City"]}
                        </p>
                      )}
                    </div>

                    {/* Province */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Province
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address?.Province || ""}
                        onChange={(e) =>
                          handleBillingChange(
                            "address.Province",
                            e.target.value
                          )
                        }
                        className={`w-full border border-[#CCCCCC] rounded p-2 text-sm ${
                          sameAsAdult1 ? "bg-gray-100" : ""
                        }`}
                        placeholder="Enter province"
                        disabled={sameAsAdult1}
                      />
                    </div>

                    {/* Postcode */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Postcode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address?.Postcode || ""}
                        onChange={(e) =>
                          handleBillingChange(
                            "address.Postcode",
                            e.target.value
                          )
                        }
                        className={`w-full border rounded p-2 text-sm ${
                          validationErrors["billing_address.Postcode"]
                            ? "border-red-500"
                            : "border-[#CCCCCC]"
                        } ${sameAsAdult1 ? "bg-gray-100" : ""}`}
                        placeholder="Enter postcode"
                        disabled={sameAsAdult1}
                      />
                      {validationErrors["billing_address.Postcode"] && (
                        <p className="text-red-500 text-xs mt-1">
                          {validationErrors["billing_address.Postcode"]}
                        </p>
                      )}
                    </div>

                    {/* Country Code - Same as travelers */}
                    <div className="w-full">
                      <label className="text-sm text-gray-600">
                        Country Code
                      </label>
                      <input
                        type="text"
                        className={`w-full border rounded px-3 py-2 ${
                          sameAsAdult1 ? "bg-gray-100" : "bg-gray-100"
                        }`}
                        value={country}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Next Button for billing */}
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={handleBillingNext}
                      className="bg-[#EE5128] text-white px-6 py-2 rounded font-semibold font-jakarta hover:bg-[#d64520] active:bg-[#b83b1c] transition-colors duration-200"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Save Details Section */}
            <div className="w-full bg-white rounded-md p-6 mt-6 font-sans">
              <h3 className="font-semibold text-black mb-1 font-jakarta">
                {t("traveller-details.save-details.title")}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {t("traveller-details.save-details.description")}
              </p>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="accent-[#EE5128] mt-[3px]" />
                <span className="text-sm">
                  {t("traveller-details.save-details.term")}
                </span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={handleBack}
                className="bg-gray-500 text-white px-6 py-2 rounded font-semibold font-jakarta hover:bg-gray-600 active:bg-gray-700 transition-colors duration-200"
              >
                Back
              </button>
              <button
                onClick={handleContinue}
                className="bg-[#EE5128] text-white px-6 py-2 rounded font-semibold font-jakarta hover:bg-[#d64520] active:bg-[#b83b1c] transition-colors duration-200"
              >
                {t("continue-booking")}
              </button>
            </div>
          </div>

          {/* Booking Details Sidebar */}
          {location.state.tripType === "One Way" ? (
            <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
              <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
                <h2 className="font-semibold text-[18px] font-jakarta">
                  {t("booking-details.title")}
                </h2>
              </div>

              <div className="flex justify-between items-center px-6 mt-[20px]">
                <div className="text-center">
                  <p className="text-[20px] font-bold font-jakarta">
                    {OutwardTicket?.departureTime}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {OutwardTicket?.departureCity}
                  </p>
                </div>
                <div className="flex flex-col items-center relative">
                  <p className="text-xs text-gray-500 mb-[2px]">
                    {OutwardTicket?.duration}
                  </p>
                  <div className="flex items-center justify-center">
                    <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                    <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                    <span className="text-black text-sm">✈</span>
                    <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                    <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                  </div>
                  <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
                    Refundable
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[20px] font-bold font-jakarta">
                    {OutwardTicket?.arrivalTime}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {OutwardTicket?.arrivalCity}
                  </p>
                </div>
              </div>

              <div className="flex justify-between px-6 mt-6">
                <div className="text-left w-1/2 border-r pr-4">
                  <p className="text-sm font-semibold text-black font-jakarta">
                    {t("booking-details.departure")}
                  </p>
                  <p className="text-xs text-gray-500 mt-[2px]">
                    {OutwardTicket?.departureDate.split("-")[0]}
                  </p>
                </div>
                <div className="text-left w-1/2 pl-4">
                  <p className="text-sm font-semibold text-black font-jakarta ml-5">
                    {t("booking-details.landing")}
                  </p>
                  <p className="text-xs text-gray-500 mt-[2px] ml-5">
                    {OutwardTicket?.arrivalDate.split("-")[0]}
                  </p>
                </div>
              </div>

              <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
                <span>{t("booking-details.policy")}</span>
                <span className="ml-10">{t("booking-details.refund")}</span>
                <span>{t("booking-details.reschedule")}</span>
              </div>
            </div>
          ) : location.state.tripType === "Round Trip" ? (
            <div className="flex flex-col gap-2">
              <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
                <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
                  <h2 className="font-semibold text-[18px] font-jakarta">
                    {t("booking-details.title")} - Outward
                  </h2>
                </div>

                <div className="flex justify-between items-center px-6 mt-[20px]">
                  <div className="text-center">
                    <p className="text-[20px] font-bold font-jakarta">
                      {OutwardTicket?.departureTime}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {OutwardTicket?.departureCity}
                    </p>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <p className="text-xs text-gray-500 mb-[2px]">
                      {OutwardTicket?.duration}
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                      <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                      <span className="text-black text-sm">✈</span>
                      <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                      <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                    </div>
                    <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
                      Refundable
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[20px] font-bold font-jakarta">
                      {OutwardTicket?.arrivalTime}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {OutwardTicket?.arrivalCity}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between px-6 mt-6">
                  <div className="text-left w-1/2 border-r pr-4">
                    <p className="text-sm font-semibold text-black font-jakarta">
                      {t("booking-details.departure")}
                    </p>
                    <p className="text-xs text-gray-500 mt-[2px]">
                      {OutwardTicket?.departureDate.split("-")[0]}
                    </p>
                  </div>
                  <div className="text-left w-1/2 pl-4">
                    <p className="text-sm font-semibold text-black font-jakarta ml-5">
                      {t("booking-details.landing")}
                    </p>
                    <p className="text-xs text-gray-500 mt-[2px] ml-5">
                      {OutwardTicket?.arrivalDate.split("-")[0]}
                    </p>
                  </div>
                </div>

                <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
                  <span>{t("booking-details.policy")}</span>
                  <span className="ml-10">{t("booking-details.refund")}</span>
                  <span>{t("booking-details.reschedule")}</span>
                </div>
              </div>

              <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
                <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
                  <h2 className="font-semibold text-[18px] font-jakarta">
                    {t("booking-details.title")} - Return
                  </h2>
                </div>

                <div className="flex justify-between items-center px-6 mt-[20px]">
                  <div className="text-center">
                    <p className="text-[20px] font-bold font-jakarta">
                      {returnTicket?.departureTime}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {returnTicket?.departureCity}
                    </p>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <p className="text-xs text-gray-500 mb-[2px]">
                      {returnTicket?.duration}
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                      <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                      <span className="text-black text-sm">✈</span>
                      <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                      <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                    </div>
                    <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
                      Refundable
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[20px] font-bold font-jakarta">
                      {returnTicket?.arrivalTime}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {returnTicket?.arrivalCity}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between px-6 mt-6">
                  <div className="text-left w-1/2 border-r pr-4">
                    <p className="text-sm font-semibold text-black font-jakarta">
                      {t("booking-details.departure")}
                    </p>
                    <p className="text-xs text-gray-500 mt-[2px]">
                      {returnTicket?.departureDate.split("-")[0]}
                    </p>
                  </div>
                  <div className="text-left w-1/2 pl-4">
                    <p className="text-sm font-semibold text-black font-jakarta ml-5">
                      {t("booking-details.landing")}
                    </p>
                    <p className="text-xs text-gray-500 mt-[2px] ml-5">
                      {returnTicket?.arrivalDate.split("-")[0]}
                    </p>
                  </div>
                </div>

                <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
                  <span>{t("booking-details.policy")}</span>
                  <span className="ml-10">{t("booking-details.refund")}</span>
                  <span>{t("booking-details.reschedule")}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
              <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
                <h2 className="font-semibold text-[18px] font-jakarta">
                  {t("booking-details.title")}
                </h2>
              </div>
              <div className="flex justify-between items-center px-6 mt-[20px]">
                Something went wrong
              </div>
            </div>
          )}

          <div className="w-full lg:w-[600px]">
            <div className="bg-white rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] min-h-[240px]">
              <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
                <h2 className="text-[18px] font-semibold text-black font-jakarta">
                  Price Summary
                </h2>
              </div>

              <div className="px-6 py-5 text-sm text-gray-800 font-jakarta space-y-4">
                {/* Departure */}
                <div className="flex justify-between">
                  <span>Departure Flight</span>
                  <span className="font-medium">
                    {currency} {parseFloat(outwordPrice || 0).toFixed(2)}
                  </span>
                </div>

                {/* Return Flight – Reserved space even if not visible */}
                <div
                  className={`flex justify-between ${
                    tripType === "Round Trip"
                      ? ""
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span>Return Flight</span>
                  <span className="font-medium">
                    {currency} {parseFloat(returnPrice || 0).toFixed(2)}
                  </span>
                </div>

                {/* Total */}
                <div className="border-t border-gray-300 pt-4 flex justify-between text-base font-semibold text-black">
                  <span>Total</span>
                  <span>
                    {currency} {parseFloat(totalPrice || 0).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Popup Button */}
          {/* <div className="mt-4 text-center">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-[#EE5128] text-white px-5 py-2 rounded font-semibold hover:bg-[#d64520] transition"
            >
              Popup
            </button>
          </div> */}

          {/* Popup Modal */}
          {showPopup && (
            <div className="fixed inset-0 z-50 backdrop-blur-md bg-white/5 flex items-center justify-center">
              <div className="bg-white w-[90%] max-w-md rounded-xl p-6 text-center shadow-lg">
                <h3 className="text-lg font-bold text-orange-600 mb-3">
                  Duplicate Booking Alert
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  It looks like you've entered the same flight and traveler
                  details again. Please confirm before proceeding to avoid
                  duplicate bookings.
                </p>
                <p className="text-sm text-gray-600">
                  If you've already booked but haven't received your tickets,
                  contact our support team.
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-6 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TravelersDetails;
