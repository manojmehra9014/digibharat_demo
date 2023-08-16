var dataSetForBasicData={
				"DateMarriage":"शुक्रवार, <b>26</b> मई <b>2023</b>",
				"CallingNumber":"9756222604",
				"SecondCallingNumber":"8410467000",
				"WhatsAPPNumber":"9716673326",
				"MailAddress":"Kamalupadhyay17@gmail.com",
				"BoyHomeAddressLink":"https://goo.gl/maps/puMj4Y6BS9e2bXUG9",
				"BoyHomeAddressText":"'ईष्ट कुटीर' हरिपुरनायक <br> वार्ड - 43, कमलुवागांजा रोड <br> हल्द्वानी जनपद - नैनीताल",
				"DateHaldiMehandiRasam":"बृहस्पतिवार, दिनांक 25 मई 2023 (11 गते ज्येष्ठ)",
				"DateBaaratWedding":"शुक्रवार, दिनांक 26 मई 2023 (12 गते ज्येष्ठ)",
				"DateLadiesSangeet":"शनिवार, दिनांक 27 मई 2023 (13 गते ज्येष्ठ)",
				"BanquetHallLocationLink":"https://goo.gl/maps/j9NmqY7UdiRVQcJq7",
				"BanquetHallAddress":'"संगम मैरिज पैलेस" कमलुवागांजा रोड, हल्द्वानी में संपन्न होंगे |',
				"BoyName":"कमल ( कन्नू )",
				"BoyDadiName":"स्व. श्रीमती सरला देवी",
				"BoyDadaName":"स्व. श्री टीकाराम उपाध्याय",
				"BoyMotherName":"श्रीमती गीता उपाध्याय",
				"BoyFatherName":"श्री गिरीश चन्द्र उपाध्याय",
				"GirlName":"ममता ( मीनू )",
				"GirlMotherName":"श्रीमती हेमा पंत",
				"GirlFatherName":"श्री दिनेश चन्द्र पंत",
				"GirlHomeAddressLink":"https://goo.gl/maps/Dc7G8oAfRFzYe8DD6",
				"GirlHomeAddressText":"रामपुर रोड , हल्द्वानी ( नैनीताल )",

			}
$(document).ready(function(){
			$(".jQClassForPhoneNumberAnchor").attr("href","tel:+91 "+dataSetForBasicData.CallingNumber);
			$(".jQClassForPhoneNumber").html("+91 "+dataSetForBasicData.CallingNumber);

			// second calling number
			$(".jQClassForSecondPhoneNumberAnchor").attr("href","tel:+91 "+dataSetForBasicData.SecondCallingNumber);
			$(".jQClassForSecondPhoneNumber").html("+91 "+dataSetForBasicData.SecondCallingNumber);

			$(".jQClassForBoyHomeAddressLink").attr("href",dataSetForBasicData.BoyHomeAddressLink);
			$(".jQClassForBoyHomeAddressText").html(""+ dataSetForBasicData.BoyHomeAddressText+"");

			$(".jQClassForWhatsAPPNumber").attr("href","https://wa.me/91"+dataSetForBasicData.WhatsAPPNumber);
			$(".jQClassForEmailAddress").attr("href","Mailto:"+dataSetForBasicData.MailAddress);
			$(".jQClassForMessageNumber").attr("href","sms:+91 "+dataSetForBasicData.CallingNumber);
			$(".jQClassForDateMarriage").html(dataSetForBasicData.DateMarriage);
			$(".jQClassForDateHaldiMehandiRasam").html(dataSetForBasicData.DateHaldiMehandiRasam);
			$(".jQClassForDateBaaratWedding").html(dataSetForBasicData.DateBaaratWedding);
			$(".jQClassForDateLadiesSangeet").html(dataSetForBasicData.DateLadiesSangeet);
			$(".jQClassForBanquetHallLocationAnchor").attr("href",dataSetForBasicData.BanquetHallLocationLink);
			$(".jQClassForBanquetHallLocationText").html('"महिला संगीत एवं प्रीतिभोज" कार्यक्रम '+ dataSetForBasicData.BanquetHallAddress+"");
			$(".jQClassForBoyName").html("चि . "+dataSetForBasicData.BoyName);
			$(".jQClassForBoyDadiDadaName").html("सुपौत्र "+dataSetForBasicData.BoyDadiName+" एवं "+dataSetForBasicData.BoyDadaName+"");
			$(".jQClassForBoyMotherFatherName").html("सुपुत्र "+dataSetForBasicData.BoyMotherName+" एवं "+dataSetForBasicData.BoyFatherName+"");
			$(".jQClassForBoyMotherName").html(""+dataSetForBasicData.BoyMotherName);
			$(".jQClassForBoyFatherName").html(""+dataSetForBasicData.BoyFatherName);
			$(".jQClassForGirlName").html("आयु . "+dataSetForBasicData.GirlName);
			$(".jQClassForGirlMotherFatherName").html("सुपुत्र "+dataSetForBasicData.GirlMotherName+" एवं "+dataSetForBasicData.GirlFatherName+"");
			$(".jQClassForGirlHomeAddressLink").attr("href",dataSetForBasicData.GirlHomeAddressLink);
			$(".jQClassForGirlHomeAddressText").html("निवासी - "+dataSetForBasicData.GirlHomeAddressText+"");
			
		});

// music player
$("body,html").bind("touchstart touchmove scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
				
    if($(".play-pause-btn").attr("aria-label")=="Play")
    {
        
        try {
            $(".play-pause-btn").click();
            NumberOfClick=1;
        }
        catch(err) {
            alert("error");
            NumberOfClick=0;
        }
        finally {
            
        }
        
        
    }
    
    
});