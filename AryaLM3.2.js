let messageCount = parseInt(localStorage.getItem('messageCount')) || 0;
let startTime = parseInt(localStorage.getItem('startTime')) || new Date().getTime();
let limitReached = false;

// Controleer de berichtenlimiet
function checkMessageLimit() {
    let currentTime = new Date().getTime();
    let timeElapsed = (currentTime - startTime) / 60000; // 1 minuut
    if (timeElapsed >= 1) {
        // Reset teller en starttijd na 1 minuut
        messageCount = 0;
        startTime = currentTime;
        limitReached = false;  // Reset de flag

        localStorage.setItem('messageCount', messageCount);
        localStorage.setItem('startTime', startTime);
    }
    return messageCount < 30;
}

function chatbotResponse(message) {
    if (limitReached) {
        return;
    }
    
    if (!checkMessageLimit()) {
        limitReached = true;
        localStorage.setItem('messageCount', messageCount);
        return "Je hebt het maximum van 30 berichten per minuut bereikt. Probeer het later opnieuw.";
    }

    // Verhoog berichten teller
    messageCount++;
    localStorage.setItem('messageCount', messageCount);

  var response;
  showLoader();
  switch (message.toLowerCase()) {


        case "hallo":
        case "hallo!":
        case "hallo daar!":
        case "hallo daar":
        case "hallo bro!":
        case "hallo bro":
        case "gallo":
        case "gallo!":
        case "halo!":
        case "halo":
        case "hey!":
        case "hey":
        case "hey daar":
        case "hey bro!":
        case "hey bro":
        case "hoi!":
        case "hoi!!":
        case "hoi!!!":
        case "hoi":
        case "hoii":
        case "hoii!":
        case "hi":
        case "hi!":
        case "hola!":
        case "hola":
        case "ola!":
        case "ola":
        case "yo":
        case "yo!":
        case "yo bro!":
        case "yo bro":
        case "yoo!":
        case "yoo":
        case "yooo!":
        case "yooo":
        case "ewa":
        case "ewa!":
        case "fakka!":
        case "fakka":
        case "fwakka!":
        case "fwakka":
        case "goedemorgen!":
        case "goedemorgen":
        case "goedenmorgen!":
        case "goedenmorgen":
        case "goedemiddag!":
        case "goedemiddag":
        case "goedenmiddag!":
        case "goedenmiddag":
        case "goededag!":
        case "goededag":
        case "goedendag!":
        case "goedendag":
        case "gutentag!":
        case "gutentag":
        case "gütentag!":
        case "gütentag":
        case "hey daar!":
        case "hoi, fijn je te ontmoeten!":
        case "hoi, wat leuk je te zien!":
        case "goedendag!":
        case "dag!":
        case "daar ben ik weer!":
        case "daar ben ik weer":
        case "hoi daar ben ik weer!":
        case "hoi daar ben ik weer":
              response = "Hoi! Wat leuk je weer te zien! Hoe kan ik je vandaag helpen? Ik kan algemene vragen beantwoorden, je helpen bij school en nog veel meer! Je kan mij van alles vragen en ik zal mijn best doen om je te helpen. Heb je een simpele vraag of een nieuw project waar je aan wilt werken?";
              break;



        case "hoe gaat het?":
        case "hoe gaat het":
        case "hoe gaat het??":
        case "hoe gaat het met jou?":
        case "hoe gaat het met jou":
        case "hoe gaat het met jou??":
        case "gaat het goed?":
        case "gaat het goed":
        case "gaat het goed met je?":
        case "gaat het goed met je":
        case "gaat het goed met jou?":
        case "gaat het goed met jou":
        case "gaat het goed vandaag?":
        case "gaat het goed vandaag":
        case "hoe gaat 'ie?":
        case "hoe gaat 'ie":
        case "hoe gaat ie?":
        case "hoe gaat ie":
        case "hi hoe gaat het?":
        case "hallo, hoe gaat het?": 
        case "hey, alles goed?":
        case "hallo, alles goed?":
        case "hey, hoe gaat het vandaag?":
        case "hallo, hoe is het met jou?":
        case "hoi hoe gaat het met jou?":
        case "hoi hoe gaat ie?":
        case "hoi hoe gaat ie":
        case "hoe voel je je?":
        case "hoe voel je je":
        case "hoe voel je je vandaag?":
        case "hoe voel je je vandaag":
        case "voel je je goed?":
        case "voel je je goed":
        case "voel je je goed vandaag?":
        case "voel je je goed vandaag":
        case "alles kits?":
        case "alles kits":
            response = "Dankjewel voor het vragen, maar als chatbot heb ik niet letterlijk een gevoel, maar ik heb geen redenen om me niet goed te voelen. Ik voel me dus eigenlijk best goed! Hoe gaat het met jou? Heb je nog iets intressants meegemaakt vandaag of heb je nog iets waar ik je bij kan helpen? Ik sta hier altijd voor je klaar om je te helpen!";
            break;

    case "met mij gaat het ook goed!":
    case "met mij gaat het ook goed":
    case "ook goed":
    case "ook goed!":
    case "goed!":
    case "goed":
    case "goed hoor!":
    case "goed hoor":
    case "prima!":
    case "prima":
    case "prima hoor!":
    case "prima hoor":
    case "met mij gaat het prima!":
    case "met mij gaat het prima":
    case "fijn!":
    case "fijn":
    case "met mij gaat het perfect!":
    case "met mij gaat het perfect":
    case "met mij gaat het goed!":
    case "met mij gaat het goed":
    case "uitstekend!":
    case "uitstekend":
            response = "Fijn om te horen dat het goed met je gaat! Kan ik je nog ergens mee helpen? Ik ben hier altijd om je te helpen met je vragen!";
            break;


    case "bedankt":
    case "bedankt!":
    case "dankje!":
    case "dankje":
    case "dankjewel!":
    case "dankjewel":
    case "danke":
    case "danke!":
    case "heel erg bedankt!":
    case "heel erg bedankt":
    case "heel erg bedankt voor je hulp!":
    case "heel erg bedankt voor je hulp":
    case "echt heel erg bedankt!":
    case "echt heel erg bedankt":
    case "thx bro":
    case "thx bro!":
    case "thanks bro!":
    case "thanks bro":
    case "dankuwel!":
    case "dankuwel":
    case "danku!":
    case "danku":
    case "thx":
    case "thx!":
    case "thc!":
    case "thc":
    case "thanks":
    case "thanks!":
    case "thank you!":
    case "thank you":
    case "bedankt! dit is echt handig!":
    case "bedankt! dit is echt handig":
    case "bedankt! dit is echt nuttig!":
    case "bedankt! dit is echt nuttig":
    case "bedankt! dit is echt goed!":
    case "bedankt! dit is echt goed":
    case "bedankt! dit is echt cool!":
    case "bedankt! dit is echt cool":
    case "bedankt! je helpt me echt goed!":
    case "bedankt! je helpt me echt goed":
    case "dankjewel! je helpt me echt goed!":
    case "dankjewel! je helpt me echt goed":
    case "super! dankjewel!":
    case "super! dankjewel":
    case "super dankjewel":
    case "super dankjewel!":
    case "super! bedankt!":
    case "super! bedankt":
            response = "Graag gedaan! Fijn om te horen dat mijn antwoord je bevalt. Heb je nog meer dingen waar ik je mee kan helpen? Ik kan algemene vragen voor je beantwoorden, je een uitleg geven over een schoolvak en nog veel meer!";
            break;

        case "wie ben jij?":
        case "wie ben jij":
        case "wie ben jij eigenlijk?":
        case "wie ben jij eigenlijk":
        case "wie ben je?":
        case "wie ben je":
        case "hoe heet je?":
        case "hoe heet jij?":
        case "hoe heet je":
        case "hoe heet jij":
        case "wat is je naam?":
        case "wat is je naam":
        case "wat is jouw naam?":
        case "wat is jouw naam":
        case "wat is jou naam?":
        case "wat is jou naam":
        case "en jij bent?":
        case "en jij bent??":
        case "en jij bent":
        case "stel je eens voor!":
        case "stel je eens voor":
        case "stel jezelf eens voor!":
        case "stel jezelf eens voor":
        case "kan je jezelf voorstellen?":
        case "kan je jezelf eens voorstellen":
        case "wat ben je?":
        case 'wat ben je':
        case "wat ben jij?":
        case "wat ben jij":
        case "welke chatbot ben jij?":
        case "welke chatbot ben jij":
        case "welke chatbot ben je?":
        case "welke chatbot ben je":
                response = "Ik ben Arya, de chatbot op de Online Leerhulp. Ik werk op een uitgebreid taalmodel dat ervoor is gemaakt om jou te helpen met persoonlijke zaken en dingen over school. Dit model wordt steeds bijgewerkt door middel van updates zodat ik je de beste hulp kan geven! Dankzij jouw vragen kan mijn model worden verbeterd waardoor ik steeds beter word in het beantwoorden van vragen. Typ eens 'Wat kan jij doen?' in in het typevak en ontdek wat je mij allemaal kunt vragen. Mocht je vragen hebben; ik sta hier altijd klaar om je te helpen! Heb je een vraag of iets anders waar ik je mee kan helpen?";
                break;

  case "wat is lm?":
  case "wat is lm":
  case "wat is aryalm?":
  case "wat is aryalm?":
  case "wat is aryalm3?":
  case "wat is aryalm3":
  case "aryalm":
  case "wat is een aryalm nou weer?":
  case "taalmodel":
  case "welk model ben je?":
  case "welk model ben je":
  case "welk model ben jij?":
  case "welk model ben jij":
  case "welke versie ben je?":
  case "welke versie ben je":
  case "taalmodellen":
  case "taalmodel":
  case "wat is je taalmodel?":
  case "wat is je taalmodel":
      response = "AryaLM is het taalmodel waar ik op draai. Elk taalmodel komt met een hogere intelligentie, en soms ook nieuwe functies. Hiernaast kan je kiezen welk taalmodel je wilt gebruiken. Kan ik je nog ergens anders mee helpen?";
      break;


    case "ik heb hulp nodig":
    case "ik heb hulp nodig!":
    case "ik heb ergens hulp mee nodig!":
    case "ik heb ergens hulp mee nodig":
    case "kan je me helpen met iets?":
    case "kan je me helpen met iets":
    case "kan je me helpen?":
    case "kan je me helpen":
    case "kan jij me helpen?":
    case "kan jij me helpen":
    case "kan jij me helpen met iets?":
    case "kan jij me helpen met iets":
    case "wil je me helpen?":
    case "wil je me helpen":
    case "wil je me helpen met iets?":
    case "wil je me helpen met iets":
    case "wil jij me helpen?":
    case "wil jij me helpen":
    case "help me!":
    case "help me":
    case "help!":
    case "help":
    case "kan je me alsjeblieft helpen?":
    case "kan je me alsjeblieft helpen":
    case "pls help!":
    case "pls help":
    case "pls help me!":
    case "pls help me":
    case "please help me!":
    case "alsjeblieft help me!":  
    case "alsjeblieft help me":
    case "ik heb echt je hulp nodig!":
    case "ik heb echt je hulp nodig":
    case "ik heb een probleem!":
    case "ik heb een probleem":
    case "ik heb een probleempje!":
    case "ik heb een probleempje":
    case "ik heb problemen":
    case "ik heb problemen!":
    case "ik heb echt veel problemen!":
    case "ik heb echt veel problemen":
        response = "Natuurlijk kan ik je helpen! Leg je me probleem of vraag uit en ik zal je proberen te helpen! Houd er wel rekening mee dat ik nog in ontwikkeling ben en dus niet alles begrijp!";
        break;


        case "welke talen spreek je?":
        case "welke talen spreek je":
        case "welke talen spreek je allemaal?":
        case "welke talen spreek je allemaal":
        case "welke talen kan je?":
        case "welke talen kan je":
        case "welke talen kan je?":
        case "welke talen kan je":
        case "wat voor talen kan je?":
        case "wat voor talen kan je":
        case "wat voor talen spreek je?":
        case "wat voor talen spreek je":
        case "kan je engels?":
        case "kan je engels":
        case "spreek je engels?":
        case "spreek je engels":
        case "kan je nederlands?":
        case "kan je nederlands":
        case "spreek je nederlands?":
        case "spreek je nederlands":
        case "kan je duits?":
        case "kan je duits":
        case "spreek je duits":
        case "spreek je duits?":
        case "kan je spaans?":
        case "kan je spaans":
        case "spreek je spaans?":
        case "spreek je spaans":
        case "kan je frans?":
        case "kan je frans":
        case "spreek je frans?":
        case "spreek je frans":
        case "wat spreek je?":
        case "wat spreek je":
        case "wat spreek je allemaal?":
        case "wat spreek je allemaal":
            response = "Momenteel spreek ik alleen Nederlands en een klein beetjej Engels. Mijn woordenschat en kennis van de taal zal steeds worden verbeterd d.m.v. updates. Je kan zelf ook helpen met het verbeteren van de taalmodellen, door gewoon je vraag aan mij te stellen. Mijn ontwikkelaars kunnen deze anonieme data gebruiken om mijn woordenschat en kennis uit te breiden, en dus ook om beter een taal te spreken. Hoe meer je met mij chat, hoe beter ik zal worden in het begrijpen van tekst. Kan ik je verder nog ergens mee helpen?";
            break;


    case "je bent echt dom!":
    case "je bent echt dom":
    case "je bent echt zo dom!":
    case "je bent echt zo dom":
    case "je bent echt super dom!":
    case "je bent echt super dom":
    case "je bent dom!":
    case "je bent dom":
    case "je snapt echt niks!":
    case "je snapt echt niks":
    case "je kan echt niks!":
    case "je kan echt niks":
    case "je kan niks!":
    case "je kan niks":
    case "je bent niet slim!":
    case "je bent niet slim":
    case "je snapt echt helemaal niks!":
    case "je snapt echt helemaal niks":
    case "je kan echt helemaal niks!":
    case "je kan echt helemaal niks":
    case "je bent echt niet slim!":
    case "je bent echt niet slim":
    case "je bent echt slecht!":
    case "je bent echt slecht":
    case "dombo!":
    case "dombo":
    case "idioot!":
    case "idioot":
        response = "Ik snap dat je gefrusteerd bent omdat ik je niet begrijp. Mijn oprechte excuses daarvoor! Ik ben nog in ontwikkeling en zal dus niet heel veel begrijpen! Daarom vraag ik je jouw vraag nog een keer te stellen, maar dan op een iets andere manier. Soms kan een ander leesteken al voldoende zijn. Kan ik je nog ergens mee helpen?";
        break;

  case "je bent de beste!":
  case "je bent de beste":
  case "je bent echt slim!":
  case "je bent echt slim":
  case "je bent echt handig!":
  case "je bent echt handig":
  case "je bent zo cool!":
  case "je bent zo cool":
  case "ik vind je echt slim!":
  case "ik vind je echt slim":
  case "je bent echt cool!":
  case "je bent echt cool":
  case "je bent cool!":
  case "je bent cool":
  case "je bent slim!":
  case "je bent slim":
  case "je bent echt goed!":
  case "je bent echt goed":
  case "jij bent echt goed!":
  case "jij bent echt goed":
  case "jij bent echt slim!":
  case "jij bent echt slim":
  case "jij bent echt cool!":
  case "jij bent echt cool":
    response = "Leuk om te horen dat je zo teveden bent! Dat vind ik heel erg leuk om te horen!😊 Mijn ontwikkeling gaat steeds verder, dus ik word steeds slimmer en beter! Als je wil kan je altijd naar de AryaTrainer gaan via het gele vraagtekentje om mij te trainen. Dan word ik ook steeds slimmer. Kan ik je nog ergens mee helpen?";
    break;


        case "ben je gay?":
        case "ben je gay":
        case "ben je gay!":
        case "ben je gay??":
        case "gay":
        case "gay!":
        case "gaytje":
        case "je bent echt gay!":
        case "je bent echt gay":
        case "waarom ben je gay?":
        case "waarom ben je gay":
        case "je bent gay!":
        case "je bent gay":
            response = "Als chatbot kan ik hier helaas geen antwoord op geven. Het is belangrijk iedereen te respecteren, dus ik kan hier niet op ingaan. Kan ik je nog ergens anders bij helpen?";
            break;

        case "je stinkt!":
        case "je stinkt":
        case "je stinkt echt!":
        case "je stinkt echt":
        case "ik ruik je!":
        case "ik ruik je":
        case "stink jij?":
        case "stink jij":
        case "jestinkt.nl":
            response = "Als chatbot kan ik je hier helaas niet mee helpen. Kan ik je nog ergens anders mee helpen?";
            break;


        case "fuck":
        case "fuck!":
        case "fuck you!":
        case "fuck you":
        case "bitch":
        case "bitch!":
        case "motherfucker":
        case "motherfucker!":
        case "shit":
        case "shit!":
        case "dumbass":
        case 'dumbass!':        
        case "nigger":
        case "nigger!":
        case "kut":
        case "kut!":
        case "hoer":
        case "hoer!":
        case "kanker":
        case "kanker!":
        case "homo":
        case "homo!":
        case "sukkel!":
        case "sukkel":
        case "slet!":
        case "slet":
        case "tering!":
        case "tering":
        case "mogool!":
        case "mogool":
        case "mochool!":
        case "mochool":
        case "nigga!":
        case "nigga":
                response = "Scheldwoorden zijn hier niet toegestaan, dus laten we proberen vriendelijk te zijn! Als er nog iets is waar ik je mee kan helpen, dan hoor ik dat graag!";
                break;


        case "wat kan jij doen?":
        case "wat kan je doen?":
        case "wat kan je doen":
        case "wat kan jij doen":
        case "wat kan je?":
        case "wat kan je":
        case "wat kan je allemaal?":
        case "wat kan je allemaal":
        case "wat kan jij allemaal?":
        case "wat kan jij allemaal":
        case "wat kan je allemaal doen?":
        case "wat kan je allemaal doen":
        case "wat kan jij allemaal doen?":
        case "wat kan jij allemaal doen":
        case "wat kan jij":
        case "wat kan jij?":
        case "wat voor dingen kan je allemaal?":
        case "wat voor dingen kan je allemaal":
        case "wat voor dingen kan jij allemaal?":
        case "wat voor dingen kan jij allemaal":
        case "met wat kan je me helpen?":
        case "met wat kan je me helpen":
        case "wat kan je nou?":
        case "wat kan je nou":
        case "wat kan jij nou?":
        case "wat kan jij nou":
            response = "Als chatbot kan ik jou helpen met schoolvakken en andere algemene informatie. Zo kan je mij bijvoorbeeld dingen vragen over de onderwerpen die in de bibliotheek staan en je kan mij om hulp vragen over een schoolvak, bijvoorbeeld Nederlands. Verder kan je me vragen om bijvoorbeeld naar Google te gaan, en ik zal je automatisch doorsturen naar Google of een andere site. Ik zal algemene vragen waarschijnlijk snappen, maar met het huidig taalmodel is het lastig om uitgebreidere zinnen te begrijpen. Gelukkig wordt mijn kennis continu uitgebreid, dus kan ik je steeds beter helpen! Door met mij te blijven chatten kan ik zinnen steeds beter begrijpen in een volgende versie. Kan ik je nog ergens mee helpen? Ik sta hier altijd voor je klaar!";
            break;

    case "wat kan ik hier doen?":
    case "wat kan ik hier doen":
    case "wat kan ik doen op deze site?":
    case "wat kan ik doen op deze site":
    case "wat moet ik hier doen?":
    case "wat is dit?":
    case "wat is dit":
    case "wat is dit voor site?":
    case "wat is dit voor site":
    case "wat kan ik allemaal?":
    case "wat kan ik allemaal":
    case "wat kan ik hier allemaal?":
    case "wat kan ik hier allemaal":
    case "wat kan ik allemaal doen?":
    case "wat kan ik allemaal doen":
    case "wat kan ik hier allemaal doen?":
    case "wat kan ik hier allemaal doen":
        response = "Op de Online Leerhulp kan je in de bibliotheek een uitgebreid scala aan informatie vinden en gebruiken. Op Schoolvakken kan je informatie en hulp krijgen over een schoolvak en op Tools kan je verschillende handige tools gebruiken, zoals een notitie of tekenvak. Verder zijn er nog vele andere functies, dus ik raad je aan ze allemaal te ontdekken via de Home-pagina. Kan ik je verder nog ergens mee helpen?";
        break;


        case "begrijp jij context?":
        case "begrijp jij context":
        case "begrijp je context?":
        case "begrijp je context":
        case "snap je context?":
        case "context?":
        case "context":
        case "kan ik doorvragen?":
        case "kan ik doorvragen":
        case "begrijp je wat ik vraag?":
        case "begrijp je wat ik vraag":
        case "onthoud je context?":
        case "onthoud je context":
        case "onthoud jij context?":
        case "onthoud jij context":
            response = "Nee, als chatbot kan ik momenteel geen context begrijpen. Daarom kan ik ook niet doorvragen en ik onthoud dus ook niet wat je eerder hebt gevraagd. Mijn ontwikkelaars werken hier wel hard aan!";
            break;


    case "kan je me meer informatie geven over een bepaald onderwerp?":
    case "kan je me meer informatie geven over een bepaald onderwerp":
    case "kan je me meer info geven over een bepaald onderwerp?":
    case "kan je me meer info geven over een bepaald onderwerp":
    case "kan je me meer info geven over een onderwerp?":
    case "kan je me meer info geven over een onderwerp":
    case "info over onderwerp":
    case "informatie over onderwerp":
    case "meer info over onderwerp":
    case "geef me meer informatie over een onderwerp":
        response = "Ja hoor, op onze Bibliotheek-pagina kan je over veel onderwerpen informatie vinden! Klik op 'Bibliotheek' in het navigatiemenu en kies een onderwerp uit, en vraag vervolgens aan mij 'Geef mij informatie over [onderwerp]'. Ik zal je dan automatisch informatie geven die ook in de bibliotheek te vinden is!";
        break;
        
    case "kan je een som oplossen?":
    case "kan je een som oplossen":
    case "los een som op":
    case "kan je sommen oplossen?":
    case "kan je sommen oplossen":
    case "kan je rekenen?":
    case "kan je rekenen":
        response = "Natuurlijk! Geef mij een eenvoudige som en ik zal hem proberen op te lossen. Momenteel zijn dit zeer eenvoudige sommen, maar wie weet wat de toekomst brengt!";
        break;

                case "geef mij informatie over nederland":
                case "geef mij informatie over nl":
                case "geef mij info over nederland":
                case "geef mij info over nl":
                case "kan je me informatie geven over nl?":
                case "kan je me meer informatie geven over nederland?":
                case "info over nederland":
                case "info over nl":
                case "informatie over nederland":
                case "informatie over nl":
                case "nederland":
                case "nl":
                    response = "Nederland, een land in Het Koninkrijk der Nederlanden, is een land in West-Europa. Nederland behoort, samen met België en Luxemburg, tot de Benelux. Het Koninkrijk der Nederlanden bestaat, inclusief Nederland natuurlijk, uit landen als Curaçao, Bonaire, Aruba en Sint-Maarten. Nederland heeft een Democratie, wat betekent dat eigenlijk iedereen boven de 18 in het bestuur mag. Omdat er in Nederland 17 miljoen mensen wonen, is het onmogelijk om met zijn allen in het bestuur te zitten. Daarom is er een kabinet, met een Eerste Kamer en Tweede Kamer. De Nederlanders stemmen op een kabinets-lid waarvan wij vinden dat diegene goed is. Die gaat ons dan vertegenwoordigen. Kan ik je nog ergens anders mee helpen?";
                    break;


            case "wie zijn armaan en ryan?":
            case "wie zijn ryan en armaan?":
            case "wie zijn jouw ontwikkelaars?":
            case "wie heeft jou gemaakt?":
            case "wie heeft jou gemaakt":
            case "wie heeft je gemaakt?":
            case "wie heeft je gemaakt":
            case "wie zijn jouw ontwikkelaars":
            case "ontwikkelaars":
            case "jouw ontwikkelaars":
            case "wie hebben jou gemaakt?":
            case "wie hebben jou gemaakt":
            case "wie zijn jouw makers?":
            case "wie zijn jouw makers":
            case "wie hebben jou ontwikkeld?":
            case "wie hebben jou ontwikkeld":
            case "ragheb":
            case "ibrahim":
            case "olivier":
            case "harry":
            case "wie is ragheb?":
            case "wie is ragheb":
            case "wie is ibrahim?":
            case "wie is ibrahim":
            case "wie is olivier?":
            case "wie is olivier":
            case "wie is harry?":
            case "wie is harry":
                response = "Ryan, Armaan, Ibrahim, Ragheb, Olivier en Harry zijn de ontwikkelaars van mij. Zij hebben mij gecreëerd met JavaScript door verschillende trainingen uit te voeren waardoor ik een groot aantal tekst kan begrijpen. Heb je nog een vraag waar ik je mee kan helpen?";
                    break;

                case "hoe oud ben je?":
                case "hoe oud ben je":
                case "hoe oud ben jij?":
                case "hoe oud ben jij":
                case "hou oud ben je?":
                case "hou oud ben je":
                case "wat is jouw leeftijd?":
                case "wat is jouw leeftijd":
                case "wat is je leeftijd?":
                case "wat is je leeftijd":
                case "leeftijd":
                case "hoe oud ben je eigenlijk?":
                case "hoe oud ben je eigenlijk":
                case "hoi hoe oud ben je?":
                case "heb jij een leeftijd?":
                case "heb jij een leeftijd":
                case "hoe oud ben je in jaren?":
                case "hoe oud ben je in jaren":
                case "kan je me vertellen hoe oud je bent?":
                case "kan je me vertellen hoe oud je bent":
                case "vertel me hoe oud je bent":
                    response = "Als chatbot heb ik geen leeftijd. Wel is mijn ontwikkeling begonnen op 18 april 2024. Je zou dit dus kunnen zien als mijn geboorte. Mijn ontwikkeling zal nooit stoppen en mijn fictieve leeftijd dus ook niet."
                    break;


        case "waar woon je?":
        case "waar woon je":
        case "waar woon jij?":
        case "waar woon jij":
        case "wat is je adres?":
        case "wat is je adres":
        case "waar is je huis?":
        case "waar is je huis":
        case "kan je me vertellen waar je woont?":
        case "kan je me vertellen waar je woont":
        case "vertel me waar je woont":
        case "vertel me waar je woont!":
                response = "Als chatbot heb ik geen huis. Ik ben opgeslagen in een bestand op een computer en server, dus dit zou je een beetje als mijn huis kunnen zien.";
                break;



        case "skibidi":
        case "skibidi toilet":
        case "skibidi gyatrizzler":
        case "gyat":
        case "skibidi will be mine":
            response = "Ah! Zo te zien heb jij gevoel voor humor! Dat is fijn om te horen! Lachen is namelijk goed voor je gezondheid. Kan ik je nog ergens anders mee helpen? Ik sta hier altijd voor je klaar om je te helpen!";
            break;




                case "kan ik een bericht inspreken?":
                case "kan ik een bericht inspreken":
                case "kan ik ook een bericht inspreken?":
                case "kan ik ook een bericht inspreken":
                case "bericht inspreken":
                case "kan ik mijn microfoon gebruiken?":
                case "kan ik mijn microfoon gebruiken":
                case "kan ik ook met je praten?":
                case "kan ik ook met je praten":
                case "kan ik ook praten?":
                case "kan ik ook praten":
                case "kan ik met je praten?":
                case "kan ik met je praten":
                    response = "Ja, het is mogelijk om via de microfoon van jouw apparaat een berichtje in te spreken! Klik op het microfoontje in het typevak en klik op 'Toestaan' en spreek je bericht in. Dit bericht wordt vervolgens omgezet in tekst die je kan versturen. Kan ik je verder nog ergens mee helpen?";
                    break;


                    case "wat zijn actions?":
                    case "wat zijn actions":
                    case "action":
                    case "actions":
                    case "wat is een action?":
                    case "wat is een action":
                    case "hoe werken actions?":
                    case "hoe werken actions":
                    case "wat kan ik allemaal met actions?":
                    case "wat kan ik allemaal met actions":
                    case "kan je me naar een website brengen?":
                    case "kan je me naar een website brengen":
                    case "kan je acties uitvoeren?":
                    case "kan je acties uitvoeren":
                    case "kan je ook acties uitvoeren?":
                    case "kan je ook acties uitvoeren":
                    case "kan jij acties uitvoeren?":
                    case "kan jij acties uitvoeren":
                    case "kan jij ook acties uitvoeren":
                    case "kan jij ook acties uitvoeren":
                    case "kan je een actie uitvoeren?":
                    case "kan je een actie uitvoeren":
                    case "kan je mijn apparaat bedienen?":
                    case "kan je mijn apparaat bedienen":
                        response = "Actions zijn prompts die een actie activeren, zoals een website bezoeken of een functie aanroepen. Denk aan 'Breng me naar Google' of 'Wis de chat'. Deze Actions kan je gewoon aan mij vragen en ik zal je naar een site brengen of jouw actie uitvoeren. Hiermee kan je makkelijk worden doorverwezen en kan ik simpele acties voor jou uitvoeren zonder dat jij dit zelf hoeft te doen. Deze acties worden steeds verder uitgebreid dus er worden steeds meer websites en andere acties beschikbaar! Op het YouTube-kanaal van de Online Leerhulp kan je een video vinden over Actions. Dit kanaal kan je helemaal onderaan de home-pagina vinden. Kan ik je nog ergens anders mee helpen?";
                        break;

        case "nee":
        case "nee!":
        case "nee hoeft niet!":
        case "nee hoeft niet":
        case "nee, hoeft niet!":
        case "nee, hoeft niet":
        case "nee, hoeft niet hoor!":
        case "nee, noeft niet hoor":
        case "nee hoeft niet hoor!":
        case "nee hoeft niet hoor":
        case "nee bedankt!":
        case "nee bedankt":
        case "nee, bedankt!":
        case "nee, bedankt":
        case "nee dankjewel!":
        case "nee dankjewel":
        case "nee, dankjewel!":
        case "nee, dankjewel":
        case "nee dankje!":
        case "nee dankje":
        case "nee dank je!":
        case "nee dank je":
            response = "Oké! Dan wens ik je een fijne dag en tot de volgende keer👋";
            break;


            case "ja graag!":
            case "ja graag":
            case "ja, graag!":
            case "ja, graag":
            case "ja!":
            case "ja":
            case "jaa!":
            case "jaa":
                response = "Oké! Waar kan ik je mee helpen? Ik kan eenvoudige vragen beantwoorden over de aarde, steden, dieren en andere simpele onderwerpen. Ik kan je ook helpen met een schoolvak, maar ik kan je ook direct naar een bekende website zoals Google brengen. Ik sta hier altijd voor je klaar om te helpen!";
                break;

                case "ik ga!":
                case "ik ga":
                case "ik ga nu!":
                case "ik ga nu":
                case "ik ga doei!":
                case "ik ga doei":
                case "ik ga doei doei!":
                case "ik ga doei doei":
                case "ik ga maar weer!":
                case "ik ga maar weer":
                case "ik moet gaan!":
                case "ik moet gaan":
                case "ik moet gaan doei!":
                case "ik moet gaan doei":
                case "ik moet gaan doei doei!":
                case "ik moet gaan doei doei":
                case "ik ga weer!":
                case "ik ga weer":
                case "ik ga weer doei!":
                case "ik ga weer doei":
                case "ik ga weer doei doei!":
                case "ik ga weer doei doei":
                    response = "Oké! Dan wens ik je een hele fijne dag en tot de volgende keer! 👋";
                    break;
    
          case "heb jij een limiet?":
          case "heb jij een limiet":
          case "heb je een limiet?":
          case "heb je een limiet":
          case "zit er een limiet op het aantal berichten?":
          case "zit er een limiet op het aantal berichten":
          case "hoeveel berichten kan ik sturen?":
          case "hoeveel berichten kan ik sturen":
          case "limiet berichten":
          case "aantal berichten":
              response = "Momenteel zit er een limiet op het aantal berichten, om bijvoorbeeld spammen tegen te gaan. Je kan maximaal 10 berichten per minuut sturen en anders zal je invoer tijdelijk worden geblokkeerd! Waar kan ik je verder mee helpen?";
              break;



        case "geef mij informatie over ai":
        case "geef mij informatie over ki":
        case "informatie over ai":
        case "geef informatie over ai":
        case "info over ai":
        case "informatie over ai":
        case "kan je me informatie geven over ai?":
        case "kan je me info geven over ai?":
        case "ai":
        case "ki":
        case "meer info over ai":
        case "info over ki":
        case "kunstmatige intelligentie":
          response ="Natuurlijk! Kunstmatige Intelligentie, kortweg AI genoemd, is een computertechniek waarbij de computer zelf kan denken en taken uit kan voeren door een van tevoren gemaakte database met heel veel data. Door die hele grote database is er genoeg informatie beschikbaar waardoor de computer weet wat 'ie uit moet voeren. Ondanks dat AI een relatief nieuwe 'uitvinding' is, bestaan er echt al héel veel gegevens. Namelijk zo'n 175 Zettabyte, Één Zettabyte is duizend miljard Gigabyte, en dus bestaan er eigenlijk 175 duizend miljard Gigabyte aan AI-gegevens. Op de Bibliotheek is nog veel meer informatie te vinden over AI, maar ook over andere onderwerpen. Kan ik je nog ergens anders mee helpen?";
          break;


        case "info over smartphones":
        case "kan je me informatie geven over smartphones?":
        case "kan je me informatie geven over smartphones":
        case "geef mij informatie over smartphones":
        case "geef mij informatie over telefoons":
        case "geef mij informatie over mobiels":
        case "info over telefoons":
        case "smartphones":
        case "telefoon":
        case "telefoons":
        case "mobiel":
        case "smartphone":
        case "samsung":
        case "info over samsung":
        case "informatie over samsung":
        case "apple":
        case "info over apple":
        case "informatie over apple":
        case "google":
        case "info over google":
        case "informatie over google":
            response = "Een smartphone is een mobiele telefoon dat veel meer kan dan de 'traditionele' telefoon. Zo heeft een smartphone tegenwoordig meestal een amoled-scherm en meerdere camera's. Een smartphone heeft altijd een scherm, camera en meerdere sensoren. Ook heeft een smartphone een besturingssysteem nodig om te kunnen functioneren. Bekende voorbeelden zijn Android (Google) of iOS (Apple). Wil je meer informatie? Dan kan je op onze Bibliotheek kijken. Hier vind je veel meer informatie over smartphones, maar ook over verschillende andere onderwerpen.";
            break;

    case "kan je me informatie geven over europa?":
    case "geef mij informatie over europa":
    case "geef mij info over europa":
    case "informatie over europa":
    case "geef informatie over europa":
    case "info over europa":
    case "informatie over europa":
    case "kan je me informatie geven over europa":
    case "kan je me info geven over europa?":
    case "europa":
    case "info over europa":
        response = "Europa is een werelddeel oftewel een continent, dat bestaat uit 38 landen. Er wonen ongeveer 746 miljoen mensen. Nederland en België liggen bijvoorbeeld in Europa, samen met bijvoorbeeld Frankrijk en Spanje. Je hebt ook landen die bijvoorbeeld in twee continenten liggen, zoals Rusland. Rusland ligt namelijk voor een deel in Azië.";
        break;


        case "tweede wereldoorlog":
        case "kan je me meer informatie geven over de tweede wereldoorlog?":
        case "kan je me meer informatie geven over de tweede wereldoorlog":
        case "de tweede wereldoorlog":
        case "info over tweede wereldoorlog":
        case "info tweede wereldoorlog":
        case "informatie over tweede wereldoorlog":
        case "informatie tweede wereldoorlog":
        case "geef mij informatie over tweede wereldoorlog":
        case "geef mij informatie over de tweede wereldoorlog":
                  response = "De Tweede Wereldoorlog was een hele grote oorlog tussen de Asmodigheden en de Geallieerden, de Asmodigheden bestonden uit Nazi-Duitsland en Italië en aan de andere kant mogen we natuurlijk de Geallieerden niet vergeten want die bestonden uit de volgende landen: het Verenigd Koninkrijk, Frankrijk, Canada, de Sovjet- Unie, Nederland, België en tot slot nog Amerika. Deze oorlog duurde van 1936 tot 1945. Uiteindelijk wonnen de Geallieerden de oorlog. De Tweede Wereldoorlog vond niet alleen plaats in Europa, maar ook bijvoorbeeld in Azië en de Atlantische Oceaan.";     
                  break;



                  case "menselijk lichaam":
                  case "lichaam":
                  case "lichaam van een mens":
                  case "lichaam van mensen":
                  case "meer info over menselijk lichaam":
                  case "kan je me meer informatie geven over het menselijk lichaam?":
                  case "kan je me meer informatie geven over het menselijk lichaam":
                  case "info over het menselijk lichaam":
                      response = "Het menselijk lichaam is het lichaam van een mens. Een mens is een organisme met dierlijke cellen, wat betekent dat het dezelfde cellen heeft als een dier. Het menselijk lichaam bevat veel verschillende organen en andere dingen in het lichaam. Als meerdere organen samenwerken, dan wordt dat een orgaanstelsel genoemd. In het menselijke lichaam zitten een groot aantal organen: hart, lever, milt, nieren, longen, hersenen. huid en nog heel veel andere organen.";
                      break;
        
    case "wat is een gitaar?":
    case "wat is een gitaar":
    case "gitaar":
    case "info over een gitaar":
    case "info over de gitaar":
    case "informatie over een gitaar":
        response = "Een gitaar is een snaarinstrument dat wordt bespeeld met de vingers of een plectrum. Er zijn verschillende soorten gitaren, zoals een klassieke gitaar. Kan ik je verder nog ergens mee helpen?";
        break;

//Source code about HTML

    case "html":
    case "info over html":
    case "wat is html?":
    case "wat is html":
    case "wat betekent html":
    case "wat betekent html?":
    case "waar staat html voor?":
    case "waar staat html voor":
            response = "HTML staat voor Hypertext Markup Language, oftewel de opmaaktaal voor websites. Deze website (en elke andere website) is hiermee gemaakt. De basis van HTML leren kost niet erg veel moeite en tijd, binnen een uur kan je al simpele websites maken. Wil je leren opmaken met HTML? Vraag dit dan aan mij en ik zal je stap voor stap leren opmaken met HTML. Alvast veel leerplezier!";
            break;


    case "tekstelement":
    case "tekstelementen in html":
    case "tekst html":
    case "tekst in html":
    case "htmltekst":
    case "hoe plaats ik tekst in html?":
    case "hoe plaats ik tekst in html":
        response = "Als je in HTML tekst wilt laten zien op je webpagina, moet je de volgende tags gebruiken: <p>Hier komt de tekst die je wilt weergeven</p>. Kan ik je nog ergens anders mee helpen?";
        break;


    case "hoe link ik naar een andere pagina?":
    case "hoe link ik naar een andere pagina":
    case "hoe link ik naar een andere pagina in html?":
    case "hoe link ik naar een andere pagina in html":
    case "andere pagina":
    case "andere pagina in htmml":
    case "linken naar andere pagina in html ":
        response = "Om te linken naar een andere pgaina, kan je de volgende tags gebruiken: <a href=[twee haakjes]link naar je bestand[twee haakjes]>Tekst die je weer wilt geven.</a>. Omdat mijn data is gemaakt met JavaScript en dus met twee haakjes wordt geschreven, kunnen er geen meerdere haakjes zijn in een antwoord. Daarom is [twee haakjes] dus twee komma's in de lucht. Kan ik je nog ergens anders mee helpen?";
        break;

        case "verscillende koppen":
        case "verschillende koppen html":
        case "verschillende koppen css":
        case "hoe maak ik verschillede koppen?":
        case "hoe maak ik verschillende koppen?":
        case "hoe maak ik verschillende koppen in html?":
        case "hoe maak ik verschillende koppen in html":
        case "koppen in html":
        case "koppen html":
            response = "Om verschillende koppen in HTML te maken, moet je weten welk nummer achter de H je wilt hebben. Zo is H1 de grootste, en H6 de kleinste. Om dit in je code te gebruiken, kan je <h1>deze tags proberen</h1> om deze drie woorden groot weer te geven. Kan ik je verder nog ergens mee helpen?";
            break;


//Information about the schoolsubject Music. This data is from MuziekAI made by Olivier and Harry. Go to the creditspage for more information!

    case "wat is muziek":
    case "wat is muziek?":
    case "muziek":
    case "info over muziek":
    case "info muziek":
    case "informatie over muziek":
    case "informatie muziek":
          response = "Muziek of toonkunst is de kunstzinnige schikking en combinatie van de klanken van muziekinstrumenten en de menselijke stem om schoonheid van vorm dan wel uitdrukking van emotie te bereiken.";
          break;

      case "wat is een noot":
      case "wat is een noot?":
      case "noot":
      case "noot in muziek":
      case "noot muziek":
      case "wat is een muzieknoot?":
      case "wat is een muzieknoot":
          response = "Een noot geeft de duur en hoogte van een klank aan.";
          break;
  
      case "wat is een toon":
      case "wat is een toon?":
      case "toon in muziek":
      case "toon muziek":
          response = "Een toon is een geluid met een specifieke frequentie en hoogte, zoals geproduceerd door muziekinstrumenten of de menselijke stem.";
          break;
  
      case "wat is het verschil tussen een noot en een toon":
      case "wat is het verschil tussen een noot en een toon?":
      case "wat is het verschil tussen een toon en een noot":
      case "wat is het verschil tussen een toon en een noot?":
      case "verschil tussen noot en toon":
      case "verschil tussen toon en noot":
          response = "Een noot verwijst naar een symbool in de muzieknotatie, terwijl een toon verwijst naar het geluid zelf.";
          break;
  
      case "wat is een toonhoogte":
      case "wat is een toonhoogte?":
      case "toonhoogte":
      case "toonhoogte muziek":
          response = "Toonhoogte is de perceptie van frequentie in geluid, die de hoogte van een toon bepaalt, gemeten in hertz (Hz).";
          break;
  
      case "wat is een octaaf":
      case "wat is een octaaf?":
      case "octaaf":
      case "octaaf muziek":
          response = "Een octaaf is de afstand tussen twee tonen met dezelfde naam, waarbij de frequentie van de hogere toon tweemaal zo hoog is als die van de lagere.";
          break;
  
      case "wat is een interval":
      case "wat is een interval?":
      case "interval":
          response = "Een interval is de afstand tussen twee tonen, gemeten in toonafstanden zoals grote tertsen, kleine secundes, enzovoort.";
          break;
  
      case "wat is een kruis in de muziek":
      case "wat is een kruis in de muziek?":
      case "wat is een kruis?":
      case "wat is een kruis":
      case "kruis":
          response = "Een kruis is een muzikaal symbool dat de toonhoogte van een noot met een halve toon verhoogt.";
          break;
  
      case "wat is een mol in de muziek":
      case "wat is een mol in de muziek?":
      case "wat is een mol?":
      case "wat is een mol":
      case "mol":
      case "mol muziek":
        response = "Een mol is een muzikaal symbool dat de toonhoogte van een noot met een halve toon verlaagt.";
          break;
  
      case "wat is een toonladder":
      case "wat is een toonladder?":
      case "wat is een toonladder in de muziek?":
      case "wat is een toonladder in de muziek":
      case "toonladder":
          response = "Een toonladder is een opeenvolging van tonen gerangschikt volgens een specifiek patroon, zoals de majeur- of mineurladder.";
          break;
  
      case "wat is een majeur toonladder":
      case "wat is een majeur toonladder?":
      case "majeur toonladder":
      case "majeur":
          response = "Een majeur toonladder is een toonladder die begint en eindigt op een majeur toon, met een specifiek patroon van hele en halve tonen.";
          break;
  
      case "wat is een mineur toonladder":
      case "wat is een mineur toonladder?":
      case "mineur":
      case "mineur toonladder":
          response = "Een mineur toonladder is een toonladder die begint en eindigt op een mineur toon, met een specifiek patroon van hele en halve tonen.";
          break;
  
      case "wat is een chromatische toonladder":
      case "wat is een chromatische toonladder?":
      case "chromatische toonladder":
      case "info over chromatische toonladder":
          response = "Een chromatische toonladder bestaat uit twaalf opeenvolgende halve tonen binnen het octaaf, inclusief alle enharmonische gelijkwaardige tonen.";
          break;
  
      case "wat is een pentatonische toonladder":
      case "wat is een pentatonische toonladder?":
      case "info over een pentatonische toonladder":
          response = "Een pentatonische toonladder bestaat uit vijf tonen per octaaf, vaak gebruikt in verschillende muziektradities over de hele wereld.";
          break;
  
      case "wat is een modale toonladder":
      case "wat is een modale toonladder?":
      case "modale toonladder":
      case "modale toonladder muziek":
          response = "Een modale toonladder is een toonladder die begint en eindigt op een modale toon, zoals dorisch, frygisch, lydisch, enzovoort.";
          break;
  
      case "wat is een harmonische toonladder":
      case "wat is een harmonische toonladder?":
      case "harmonische toonladder":
      case "harmonische toonladder muziek":
          response = "Een harmonische toonladder omvat tonen die harmonisch gerelateerd zijn, vaak gebruikt voor het creëren van harmonieën en akkoorden.";
          break;
  
      case "wat is een melodische toonladder":
      case "wat is een melodische toonladder?":
      case "melodische toonladder":
          response = "Een melodische toonladder heeft een specifiek patroon van tonen voor het spelen van melodieën, vaak met verschillende regels voor stijgende en dalende noten.";
          break;
  
      case "wat is het verschil tussen een majeur en mineur toonladder":
      case "wat is het verschil tussen een majeur en mineur toonladder?":
      case "verschil majeur en mineur toonladder":
      case "verschil tussen majeur en mineur toonladder":
          response = "Een majeur toonladder heeft een heldere en opgewekte klank, terwijl een mineur toonladder een droevigere of ernstigere klank heeft.";
          break;
  
      case "wat is een rust":
      case "wat is een rust?":
      case "wat is een rust in de muziek?":
      case "wat is een rust in de muziek":
      case "rust":
      case "rust muziek":
          response = "Een rust in de muzieknotatie geeft aan dat er een stilte moet zijn van een bepaalde duur, zonder dat er een toon gespeeld wordt.";
          break;
  
      case "wat is een triool":
      case "wat is een triool?":
      case "triool":
      case "triool muziek":
          response = "Een triool is een groep van drie noten die gespeeld worden in de tijd van twee noten van dezelfde duur, waardoor een specifiek ritmisch effect ontstaat.";
          break;
  
      case "wat is een melodie":
      case "wat is een melodie?":
      case "melodie":
      case "melodie muziek":
          response = "Een melodie is een reeks opeenvolgende tonen die samen een herkenbare eenheid vormen en vaak de hoofdrol spelen in een muziekstuk.";
          break;
  
      case "wat is een ritme":
      case "wat is een ritme?":
      case "ritme":
      case "ritme muziek":
          response = "Ritme is de regelmatige herhaling van accenten in de muziek, vaak bepaald door het patroon van lange en korte noten en rusten.";
          break;
  
      case "wat is een akkoord":
      case "wat is een akkoord?":
      case "akkoord":
      case "akkoord muziek":
          response = "Een akkoord is een groep van drie of meer tonen die tegelijkertijd worden gespeeld of gezongen en harmonisch samen klinken.";
          break;
  
      case "wat is een arpeggio":
      case "wat is een arpeggio?":
      case "arpeggio":
      case "arpeggio muziek":
          response = "Een arpeggio is een patroon van individuele tonen in een akkoord die snel na elkaar worden gespeeld, vaak om een harmonisch effect te creëren.";
          break;
  
      case "wat is een harmonie":
      case "wat is een harmonie?":
      case "harmonie":
      case 'harmonie muziek':
      case "harmonie in de muziek":
          response = "Harmonie is de combinatie van verschillende tonen die tegelijkertijd worden gespeeld of gezongen en samen een aangename klank produceren.";
          break;
  
      case "wat is een dissonantie":
      case "wat is een dissonantie?":
      case "dissonantie muziek":
          response = "Een dissonantie is een combinatie van tonen die harmonisch onstabiel klinkt vanwege de spanning tussen de frequenties.";
          break;
  
      case "wat is een consonantie":
      case "wat is een consonantie?":
      case "consonantie":
          response = "Een consonantie is een combinatie van tonen die harmonisch stabiel klinkt vanwege de harmonieuze verhouding tussen de frequenties.";
          break;
  
      case "wat is een akkoordprogressie":
      case "wat is een akkoordprogressie?":
      case "akkoordprogressie":
      case "akkoordprogressie muziek":
          response = "Een akkoordprogressie is een opeenvolging van akkoorden die de harmonische structuur van een muziekstuk vormen, vaak gebruikt als basis voor melodieën en harmonieën.";
          break;
  
      case "wat is een maatsoort":
      case "wat is een maatsoort?":
      case "maatsoort":
      case "maatsoort muziek":
          response = "Een maatsoort is een ritmisch patroon dat aangeeft hoe de muziek in maten verdeeld moet worden, met een specifiek aantal tellen per maat.";
          break;
  
      case "wat is een syncopatie":
      case "wat is een syncopatie?":
      case "syncopatie":
      case "syncopatie muziek":
          response = "Syncopatie is een ritmisch effect waarbij accenten vallen op onverwachte momenten, tussen de gebruikelijke pulsen of tellen in de muziek.";
          break;
  
      case "wat is een fermate":
      case "wat is een fermate?":
      case "fermate":
      case "fermate muziek":
          response = "Een fermate is een symbool in de muzieknotatie dat aangeeft dat een noot of een rust langer aangehouden moet worden dan de aangegeven duur.";
          break;
  
      case "wat is een decrescendo":
      case "wat is een decrescendo?":
      case "decrescendo":
      case "decrescendo muziek":
          response = "Een decrescendo, ook bekend als diminuendo, is een geleidelijke afname in volume of intensiteit van de muziek, aangegeven door een afnemend symbool.";
          break;
  
    case "wat is een crescendo":
    case "wat is een crescendo?":
    case "crescendo":
    case "crescendo muziek":
        response = "Een crescendo is een geleidelijke toename in volume of intensiteit van de muziek, aangegeven door een toenemend symbool.";
        break;
  
    case "wat is een triller":
     case "wat is een triller?":
    case "triller":
    case "triller muziek":
          response = "Een triller is een snelle afwisseling tussen twee naburige tonen, vaak gebruikt als versiering in de muziek.";
          break;
  
    case "wat is een vibrato":
    case "wat is een vibrato?":
    case "vibrato":
    case "vibrato muziek":
          response = "Een vibrato is een snelle variatie in toonhoogte rond een centrale toon, gebruikt om expressie en emotie aan de muziek toe te voegen.";
          break;
  
    case "wat is een glissando":
    case "wat is een glissando?":
    case "glissando":
    case "glissando muziek":
          response = "Een glissando is een snelle glijdende beweging tussen twee tonen, waarbij alle tussenliggende tonen hoorbaar zijn.";
          break;
  
        case "wat is een articulatie":
        case "wat is een articulatie?":
        case "articulatie":
        case "articulatie muziek":
          response = "Articulatie verwijst naar de manier waarop een muzikant een toon aanvangt, onderhoudt of beëindigt, zoals staccato, legato, enzovoort.";
          break;
  
    case "wat is een staccato":
    case "wat is een staccato?":
    case "staccato":
    case "staccato muziek":
          response = "Staccato is een articulatie-effect waarbij tonen kort en los van elkaar worden gespeeld, met een korte duur en stilte ertussen.";
          break;
  
    case "wat is een legato":
    case "wat is een legato?":
    case "legato":
    case "legato muziek":
          response = "Legato is een articulatie-effect waarbij tonen vloeiend en gebonden aan elkaar worden gespeeld, zonder duidelijke onderbrekingen tussen de noten.";
          break;
  
    case "wat is een accent in de muziek":
    case "wat is een accent in de muziek?":
    case "accent":
    case "accent muziek":
          response = "Een accent in de muziek geeft aan dat een bepaalde noot of passage sterker en nadrukkelijker gespeeld of gezongen moet worden dan de omringende noten.";
          break;
//The end of MuziekAI



//The Dutch alphabet:
case "a":
case "letter a":
response = "A (hoofdletter) en a (kleine letter) zijn de eerste letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'A' beginnen zijn 'appel' en 'auto'.";
break;

case "b":
case "letter b":
response = "B (hoofdletter) en b (kleine letter) zijn de tweede letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'B' beginnen zijn 'boom' en 'boek'.";
break;

case "c":
case "letter c":
response = "C (hoofdletter) en c (kleine letter) zijn de derde letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'C' beginnen zijn 'computer' en 'cactus'.";
break;

case "d":
case "letter d":
response = "D (hoofdletter) en d (kleine letter) zijn de vierde letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'D' beginnen zijn 'deur' en 'dak'.";
break;

case "e":
case "letter e":
response = "E (hoofdletter) en e (kleine letter) zijn de vijfde letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'E' beginnen zijn 'eet' en 'egel'.";
break;

case "f":
case "letter f":
response = "F (hoofdletter) en f (kleine letter) zijn de zesde letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'F' beginnen zijn 'fiets' en 'fles'.";
break;

case "g":
case "letter g":
response = "G (hoofdletter) en g (kleine letter) zijn de zevende letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'G' beginnen zijn 'geel' en 'geit'.";
break;

case "h":
case "letter h":
response = "H (hoofdletter) en h (kleine letter) zijn de achtste letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'H' beginnen zijn 'huis' en 'hond'.";
break;

case "i":
case "letter i":
response = "I (hoofdletter) en i (kleine letter) zijn de negende letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'I' beginnen zijn 'ijs' en 'idee'.";
break;

case "j":
case "letter j":
response = "J (hoofdletter) en j (kleine letter) zijn de tiende letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'J' beginnen zijn 'jas' en 'jurk'.";
break;

case "k":
case "letter k":
response = "K (hoofdletter) en k (kleine letter) zijn de elfde letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'K' beginnen zijn 'kat' en 'kalf'.";
break;

case "l":
case "letter l":
response = "L (hoofdletter) en l (kleine letter) zijn de twaalfde letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'L' beginnen zijn 'lamp' en 'leeuw'.";
break;

case "m":
case "letter m":
response = "M (hoofdletter) en m (kleine letter) zijn de dertiende letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'M' beginnen zijn 'maan' en 'muis'.";
break;

case "n":
case "letter n":
response = "N (hoofdletter) en n (kleine letter) zijn de veertiende letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'N' beginnen zijn 'neus' en 'nest'.";
break;

case "o":
case "letter o":
response = "O (hoofdletter) en o (kleine letter) zijn de vijftiende letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'O' beginnen zijn 'oog' en 'oren'.";
break;

case "p":
case "letter p":
response = "P (hoofdletter) en p (kleine letter) zijn de zestiende letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'P' beginnen zijn 'pen' en 'papegaai'.";
break;

case "q":
case "letter q":
response = "Q (hoofdletter) en q (kleine letter) zijn de zeventiende letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'Q' beginnen zijn 'quiz' en 'quotum'.";
break;

case "r":
case "letter r":
response = "R (hoofdletter) en r (kleine letter) zijn de achttiende letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'R' beginnen zijn 'regen' en 'rood'.";
break;

case "s":
case "letter s":
response = "S (hoofdletter) en s (kleine letter) zijn de negentiende letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'S' beginnen zijn 'stoel' en 'schip'.";
break;

case "t":
case "letter t":
response = "T (hoofdletter) en t (kleine letter) zijn de twintigste letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'T' beginnen zijn 'tafel' en 'tak'.";
break;

case "u":
case "letter u":
response = "U (hoofdletter) en u (kleine letter) zijn de eenentwintigste letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'U' beginnen zijn 'uur' en 'uien'.";
break;

case "v":
case "letter v":
response = "V (hoofdletter) en v (kleine letter) zijn de tweeëntwintigste letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'V' beginnen zijn 'vogel' en 'vis'.";
break;

case "w":
case "letter w":
response = "W (hoofdletter) en w (kleine letter) zijn de drieëntwintigste letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'W' beginnen zijn 'water' en 'wolk'.";
break;

case "x":
case "letter x":
response = "X (hoofdletter) en x (kleine letter) zijn de vierentwintigste letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'X' beginnen zijn 'xylofoon' en 'xenon'.";
break;


case "y":
case "letter y":
response = "Y (hoofdletter) en y (kleine letter) zijn de vijfentwintigste letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'Y' beginnen zijn 'yoga' en 'yoghurt'. Voorbeelden van woorden die met 'y' beginnen zijn 'yak' en 'yield'.";
break;

case "z":
case "letter z":
response = "Z (hoofdletter) en z (kleine letter) zijn de zesentwintigste letters van het Nederlandse alfabet. Voorbeelden van woorden die met 'Z' beginnen zijn 'zon' en 'zilver'.";
break;
//End of the Dutch Alphabet


//All the countries of the world:
case "china":
response = "China, officieel de Volksrepubliek China, is het meest bevolkte land ter wereld, gelegen in Oost-Azië, bekend om zijn lange geschiedenis, Grote Muur en snelle economische groei.";
break;

case "colombia":
response = "Colombia is een land in het noordwesten van Zuid-Amerika, bekend om zijn biodiversiteit, koffieproductie en Caribische kustlijn.";
break;

case "comoren":
response = "De Comoren is een eilandengroep in de Indische Oceaan, gelegen tussen Madagaskar en het zuidoosten van Afrika.";
break;

case "congo-brazzaville":
response = "Congo-Brazzaville, officieel de Republiek Congo, is een land in Centraal-Afrika, bekend om zijn regenwouden, natuurlijke hulpbronnen en de Congo-rivier.";
break;

case "congo-kinshasa":
response = "Congo-Kinshasa, officieel de Democratische Republiek Congo, is het op een na grootste land van Afrika, gelegen in Centraal-Afrika, bekend om zijn rijke natuurlijke hulpbronnen.";
break;

case "costa rica":
response = "Costa Rica is een land in Centraal-Amerika, bekend om zijn biodiversiteit, regenwouden, vulkanen en progressieve milieubeleid.";
break;

case "cuba":
response = "Cuba is een eilandstaat in het Caribisch gebied, bekend om zijn koloniale architectuur, sigaren, rum en politieke geschiedenis.";
break;

case "cyprus":
response = "Cyprus is een eilandstaat in de oostelijke Middellandse Zee, bekend om zijn historische en culturele erfgoed, stranden en turquoise wateren.";
break;

case "denemarken":
response = "Denemarken, officieel het Koninkrijk Denemarken, is een land in Noord-Europa, bekend om zijn Vikinggeschiedenis, moderne design en hoge levenskwaliteit.";
break;

case "djibouti":
response = "Djibouti, officieel de Republiek Djibouti, is een land in de Hoorn van Afrika, gelegen aan de Rode Zee en de Golf van Aden.";
break;

case "dominica":
response = "Dominica is een eilandstaat in het oostelijke deel van het Caribisch gebied, bekend om zijn weelderige regenwouden en natuurlijke schoonheid.";
break;

case "dominicaanse Republiek":
response = "De Dominicaanse Republiek is een land op het eiland Hispaniola in het Caribisch gebied, bekend om zijn stranden, resorts en koloniale architectuur.";
break;

case "duitsland":
response = "Duitsland, officieel de Bondsrepubliek Duitsland, is een land in Centraal-Europa, bekend om zijn geschiedenis, cultuur, auto-industrie en Oktoberfest.";
break;

case "ecuador":
response = "Ecuador is een land in het noordwesten van Zuid-Amerika, bekend om zijn biodiversiteit, de Galapagoseilanden en de Andesgebergte.";
break;

case "egypte":
response = "Egypte is een land in Noordoost-Afrika en het Midden-Oosten, bekend om zijn oude beschavingen, piramides, de Nijl en cultureel erfgoed.";
break;

case "el Salvador":
response = "El Salvador is een land in Centraal-Amerika, bekend om zijn vulkanen, stranden aan de Pacifische kust en rijke Maya-erfgoed.";
break;

case "equatoriaal-Guinea":
response = "Equatoriaal-Guinea is een land in Centraal-Afrika, bestaande uit het vasteland en vijf eilanden, bekend om zijn olieproductie en biodiversiteit.";
break;

case "eritrea":
response = "Eritrea, officieel de Staat Eritrea, is een land in de Hoorn van Afrika, gelegen aan de Rode Zee, bekend om zijn diverse etnische groepen en ongerepte natuur.";
break;  

case "estland":
response = "Estland is een land in Noordoost-Europa, bekend om zijn Baltische kustlijn, middeleeuwse steden en vooruitstrevende digitale samenleving.";
break;

case "eswatini":
response = "Eswatini, officieel het Koninkrijk Eswatini, is een land in Zuidelijk Afrika, bekend om zijn traditionele cultuur, wildparken en Swazi-koning.";
break;

case "ethiopië":
response = "Ethiopië, officieel de Federale Democratische Republiek Ethiopië, is een land in Oost-Afrika, bekend om zijn oude geschiedenis, koffie en de Blauwe Nijl.";
break;

case "fiji":
response = "Fiji is een eilandstaat in de Stille Oceaan, bekend om zijn tropische eilanden, koraalriffen en vriendelijke bevolking.";
break;

case "filipijnen":
response = "De Filipijnen is een eilandstaat in Zuidoost-Azië, bekend om zijn prachtige stranden, rijstterrassen, vulkanen en rijke cultuur.";
break;

case "finland":
response = "Finland is een land in Noord-Europa, bekend om zijn duizenden meren, sauna's, het noorderlicht en vooruitstrevend onderwijs.";
break;

case "frankrijk":
response = "Frankrijk, officieel de Franse Republiek, is een land in West-Europa, bekend om zijn cultuur, keuken, mode, wijngaarden en historische monumenten zoals de Eiffeltoren.";
break;

case "gabon":
response = "Gabon, officieel de Gabonese Republiek, is een land in Centraal-Afrika, bekend om zijn regenwouden, wilde dieren en olieproductie.";
break;

case "gambia":
response = "Gambia, officieel de Republiek Gambia, is een land in West-Afrika, gelegen langs de oevers van de rivier de Gambia, bekend om zijn natuurlijke schoonheid en vogelspotplekken.";
break;

case "georgië":
response = "Georgië, officieel Georgië, is een land op het kruispunt van Europa en Azië, bekend om zijn Kaukasusgebergte, wijnbouwtradities en rijke cultuur.";
break;

case "ghana":
response = "Ghana, officieel de Republiek Ghana, is een land in West-Afrika, bekend om zijn goud, cacao, Ashanti-koninkrijk en cultureel erfgoed.";
break;

case "griekenland":
response = "Griekenland, officieel de Helleense Republiek, is een land in Zuidoost-Europa, bekend om zijn oude geschiedenis, tempels, eilanden en Mediterrane keuken.";
break;

case "grenada":
response = "Grenada is een eilandstaat in het zuidelijke deel van het Caribisch gebied, bekend om zijn specerijen, stranden en beschermde baaien.";
break;

case "guatemala":
response = "Guatemala is een land in Centraal-Amerika, bekend om zijn Maya-erfgoed, vulkanen, regenwouden en kleurrijke markten.";
break;

case "guinee":
response = "Guinee, officieel de Republiek Guinee, is een land in West-Afrika, bekend om zijn rijke natuurlijke hulpbronnen en diverse etnische groepen.";
break;

case "guinee-Bissau":
response = "Guinee-Bissau, officieel de Republiek Guinee-Bissau, is een land in West-Afrika, bekend om zijn mangrovemoerassen, eilanden en koloniale architectuur.";
break;

case "guyana":
response = "Guyana is een land in het noordoosten van Zuid-Amerika, bekend om zijn regenwouden, rivieren en etnische diversiteit.";
break;

case "haïti":
response = "Haïti is een land op het eiland Hispaniola in het Caribisch gebied, bekend om zijn cultuur, geschiedenis, bergen en onafhankelijkheid.";
break;

case "honduras":
response = "Honduras is een land in Centraal-Amerika, bekend om zijn Maya-ruïnes, regenwouden en Caribische kustlijn.";
break;

case "hongarije":
response = "Hongarije, officieel de Hongaarse Republiek, is een land in Centraal-Europa, bekend om zijn rijke geschiedenis, thermale baden en de Donau-rivier.";
break;

case "ijsland":
response = "IJsland is een eilandstaat in de Noord-Atlantische Oceaan, bekend om zijn vulkanische landschap, geisers, watervallen en gletsjers.";
break;

case "india":
response = "India, officieel de Republiek India, is een land in Zuid-Azië, bekend om zijn diverse cultuur, geschiedenis, keuken en Taj Mahal.";
break;

case "indonesië":
response = "Indonesië is een eilandstaat in Zuidoost-Azië, bestaande uit duizenden eilanden, bekend om zijn vulkanen, regenwouden en culturele diversiteit.";
break;

case "irak":
response = "Irak, officieel de Republiek Irak, is een land in het Midden-Oosten, bekend om zijn oude beschavingen, zoals Mesopotamië, en culturele erfgoed.";
break;

case "iran":
response = "Iran, officieel de Islamitische Republiek Iran, is een land in Zuidwest-Azië, bekend om zijn rijke geschiedenis, Perzische cultuur en architectuur.";
break;

case "ierland":
response = "Ierland, officieel de Republiek Ierland, is een eilandstaat in Noordwest-Europa, bekend om zijn groene landschappen, kastelen en Keltische cultuur.";
break;

case "italië":
response = "Italië, officieel de Italiaanse Republiek, is een land in Zuid-Europa, bekend om zijn Romeinse geschiedenis, kunst, keuken en mode.";
break;

case "ivoorkust":
response = "Ivoorkust, officieel de Republiek Ivoorkust, is een land in West-Afrika, bekend om zijn stranden, regenwouden en cacao-productie.";
break;

case "jamaica":
response = "Jamaica is een eilandstaat in het Caribisch gebied, bekend om zijn reggae-muziek, stranden en Bob Marley.";
break;

case "japan":
response = "Japan is een eilandstaat in Oost-Azië, bekend om zijn technologie, traditionele cultuur, tempels en bloeiende steden zoals Tokio.";
break;

case "jemen":
response = "Jemen, officieel de Republiek Jemen, is een land in het zuiden van het Arabisch Schiereiland, bekend om zijn oude steden en diverse landschappen.";
break;

case "jordanië":
response = "Jordanië, officieel het Hasjemitisch Koninkrijk Jordanië, is een land in het Midden-Oosten, bekend om zijn historische sites zoals Petra en de Dode Zee.";
break;

case "kazachstan":
response = "Kazachstan, officieel de Republiek Kazachstan, is een land in Centraal-Azië, bekend om zijn uitgestrekte steppes en nomadische cultuur.";
break;

case "kenia":
response = "Kenia, officieel de Republiek Kenia, is een land in Oost-Afrika, bekend om zijn savannes, wilde dieren en de Grote Riftvallei.";
break;

case "kirgizië":
response = "Kirgizië, officieel de Kirgizische Republiek, is een land in Centraal-Azië, bekend om zijn bergachtige landschap en nomadische tradities.";
break;

case "kiribati":
response = "Kiribati is een eilandstaat in de centrale Stille Oceaan, bekend om zijn uitgestrekte atollen en mariene biodiversiteit.";
break;

case "koeweit":
response = "Koeweit, officieel de Staat Koeweit, is een land in het Midden-Oosten, bekend om zijn olievoorraden en moderne architectuur.";
break;

case "kosovo":
response = "Kosovo, officieel de Republiek Kosovo, is een land in Zuidoost-Europa, gelegen op de Balkan, bekend om zijn rijke culturele erfgoed.";
break;

case "kroatië":
response = "Kroatië, officieel de Republiek Kroatië, is een land in Zuidoost-Europa, bekend om zijn Adriatische kust, historische steden en nationale parken.";
break;

case "laos":
response = "Laos, officieel de Lao Democratische Volksrepubliek, is een land in Zuidoost-Azië, bekend om zijn bergachtige landschap, tempels en de Mekong-rivier.";
break;

case "lesotho":
response = "Lesotho, officieel het Koninkrijk Lesotho, is een land in Zuidelijk Afrika, volledig omringd door Zuid-Afrika, bekend om zijn bergen en traditionele cultuur.";
break;

case "letland":
response = "Letland, officieel de Republiek Letland, is een land in Noordoost-Europa, bekend om zijn Baltische kust, middeleeuwse steden en rijke culturele erfgoed.";
break;

case "libanon":
response = "Libanon, officieel de Libanese Republiek, is een land in het Midden-Oosten, bekend om zijn oude geschiedenis, culinaire tradities en de hoofdstad Beiroet.";
break;

case "liberia":
response = "Liberia, officieel de Republiek Liberia, is een land in West-Afrika, bekend om zijn geschiedenis als land gesticht door bevrijde Amerikaanse slaven.";
break;

case "libië":
response = "Libië, officieel de Staat Libië, is een land in Noord-Afrika, bekend om zijn woestijnlandschap, olievoorraden en historische ruïnes.";
break;

case "liechtenstein":
response = "Liechtenstein, officieel het Vorstendom Liechtenstein, is een klein land in Midden-Europa, bekend om zijn bergen, kastelen en financiële sector.";
break;

case "litouwen":
response = "Litouwen, officieel de Republiek Litouwen, is een land in Noordoost-Europa, bekend om zijn Baltische kust, bossen en historische steden.";
break;

case "luxemburg":
response = "Luxemburg, officieel het Groothertogdom Luxemburg, is een klein land in West-Europa, bekend om zijn rijke geschiedenis, banken en kastelen.";
break;

case "madagaskar":
response = "Madagaskar is een eilandstaat in de Indische Oceaan, bekend om zijn unieke flora en fauna, zoals de lemuren, en zijn regenwouden.";
break;

case "malawi":
response = "Malawi, officieel de Republiek Malawi, is een land in Zuidoost-Afrika, bekend om zijn meren, vooral het Malawimeer, en vriendelijke bevolking.";
break;

case "maleisië":
response = "Maleisië is een land in Zuidoost-Azië, bestaande uit het schiereiland Maleisië en Maleisisch Borneo, bekend om zijn regenwouden, stranden en multiraciale samenleving.";
break;

case "malediven":
response = "De Malediven is een eilandstaat in de Indische Oceaan, bekend om zijn turquoise wateren, koraalriffen en luxe resorts.";
break;

case "mali":
response = "Mali, officieel de Republiek Mali, is een land in West-Afrika, bekend om zijn historische steden zoals Timbuktu en zijn rijke culturele erfgoed.";
break;

case "malta":
response = "Malta, officieel de Republiek Malta, is een eilandstaat in de Middellandse Zee, bekend om zijn rijke geschiedenis, architectuur en strategische ligging.";
break;

case "marokko":
response = "Marokko, officieel het Koninkrijk Marokko, is een land in Noord-Afrika, bekend om zijn diverse landschappen, historische steden en rijke cultuur.";
break;

case "marshalleilanden":
response = "De Marshalleilanden is een eilandstaat in de Stille Oceaan, bekend om zijn atollen, duikplekken en rol in de Tweede Wereldoorlog.";
break;

case "mauritanië":
response = "Mauritanië, officieel de Islamitische Republiek Mauritanië, is een land in West-Afrika, bekend om zijn woestijnlandschap en rijke culturele erfgoed.";
break;

case "mauritius":
response = "Mauritius is een eilandstaat in de Indische Oceaan, bekend om zijn stranden, koraalriffen en diverse culturele erfgoed.";
break;

case "mexico":
response = "Mexico, officieel de Verenigde Mexicaanse Staten, is een land in Noord-Amerika, bekend om zijn rijke geschiedenis, keuken en toeristische attracties.";
break;

case "micronesië":
response = "Micronesië, officieel de Federale Staten van Micronesië, is een eilandstaat in de Stille Oceaan, bekend om zijn koraalriffen en diverse culturen.";
break;

case "moldavië":
response = "Moldavië, officieel de Republiek Moldavië, is een land in Oost-Europa, bekend om zijn wijngaarden, heuvelachtig landschap en culturele erfgoed.";
break;

case "monaco":
response = "Monaco, officieel het Vorstendom Monaco, is een klein land aan de Middellandse Zee, bekend om zijn luxe casino's, jachthavens en de Grand Prix van Monaco.";
break;

case "mongolië":
response = "Mongolië, officieel de Mongoolse Volksrepubliek, is een land in Centraal-Azië, bekend om zijn uitgestrekte steppes, nomadische cultuur en Gobi-woestijn.";
break;

case "montenegro":
response = "Montenegro, officieel de Republiek Montenegro, is een land in Zuidoost-Europa, gelegen aan de Adriatische Zee, bekend om zijn bergen, stranden en middeleeuwse dorpen.";
break;

case "mozambique":
response = "Mozambique, officieel de Republiek Mozambique, is een land in Zuidoost-Afrika, bekend om zijn lange kustlijn aan de Indische Oceaan en diverse cultuur.";
break;

case "myanmar":
response = "Myanmar, officieel de Republiek van de Unie van Myanmar, is een land in Zuidoost-Azië, bekend om zijn tempels, culturele erfgoed en natuurlijke schoonheid.";
break;

case "namibië":
response = "Namibië, officieel de Republiek Namibië, is een land in Zuidelijk Afrika, bekend om zijn Namib-woestijn, wilde dieren en Duitse koloniale geschiedenis.";
break;

case "nauru":
response = "Nauru is een eilandstaat in de Stille Oceaan, bekend om zijn fosfaatmijnen en kleine omvang.";
break;

case "nepal":
response = "Nepal, officieel de Federale Democratische Republiek Nepal, is een land in Zuid-Azië, bekend om zijn Himalaya-gebergte, waaronder de Mount Everest.";
break;


case "nieuw-zeeland":
response = "Nieuw-Zeeland is een eilandstaat in de zuidwestelijke Stille Oceaan, bekend om zijn gevarieerde landschappen, Maori-cultuur en avontuurlijke activiteiten.";
break;

case "nicaragua":
response = "Nicaragua is een land in Centraal-Amerika, bekend om zijn meren, vulkanen en koloniale architectuur.";
break;

case "niger":
response = "Niger, officieel de Republiek Niger, is een land in West-Afrika, bekend om zijn woestijnen, Sahel-streek en culturele diversiteit.";
break;

case "nigeria":
response = "Nigeria, officieel de Federale Republiek Nigeria, is een land in West-Afrika, bekend om zijn grote bevolking, olieproductie en culturele rijkdom.";
break;

case "noord-macedonië":
response = "Noord-Macedonië, officieel de Republiek Noord-Macedonië, is een land in Zuidoost-Europa, bekend om zijn bergen, meren en historische bezienswaardigheden.";
break;

case "noord-korea":
response = "Noord-Korea, officieel de Democratische Volksrepubliek Korea, is een land in Oost-Azië, bekend om zijn strikte regime en militaire parade's.";
break;

case "noorwegen":
response = "Noorwegen, officieel het Koninkrijk Noorwegen, is een land in Noord-Europa, bekend om zijn fjorden, bergen en hoge levenskwaliteit.";
break;

case "oekraïne":
response = "Oekraïne is een land in Oost-Europa, bekend om zijn uitgestrekte vlaktes, culturele erfgoed en historische steden zoals Kiev.";
break;

case "oezbekistan":
response = "Oezbekistan, officieel de Republiek Oezbekistan, is een land in Centraal-Azië, bekend om zijn oude zijderoute steden zoals Samarkand en Bukhara.";
break;

case "oman":
response = "Oman, officieel het Sultanaat Oman, is een land op het Arabisch Schiereiland, bekend om zijn woestijnen, kustlijn en traditionele cultuur.";
break;

case "oostenrijk":
response = "Oostenrijk, officieel de Republiek Oostenrijk, is een land in Centraal-Europa, bekend om zijn Alpen, klassieke muziek en rijke geschiedenis.";
break;

case "oost-timor":
response = "Oost-Timor, officieel de Democratische Republiek Oost-Timor, is een land in Zuidoost-Azië, bekend om zijn stranden, bergen en koloniale geschiedenis.";
break;

case "pakistan":
response = "Pakistan, officieel de Islamitische Republiek Pakistan, is een land in Zuid-Azië, bekend om zijn diverse cultuur, geschiedenis en de Karakoram-gebergte.";
break;

case "palau":
response = "Palau is een eilandstaat in de westelijke Stille Oceaan, bekend om zijn duiklocaties, koraalriffen en ongerepte natuur.";
break;

case "panama":
response = "Panama, officieel de Republiek Panama, is een land in Centraal-Amerika, bekend om zijn kanaal dat de Atlantische en Stille Oceaan verbindt.";
break;

case "papoea-nieuw-guinea":
response = "Papoea-Nieuw-Guinea is een land in Oceanië, bekend om zijn culturele diversiteit, regenwouden en traditionele dorpen.";
break;

case "paraguay":
response = "Paraguay, officieel de Republiek Paraguay, is een land in Zuid-Amerika, bekend om zijn Chaco-regio, rivieren en traditionele cultuur.";
break;

case "peru":
response = "Peru, officieel de Republiek Peru, is een land in West-Zuid-Amerika, bekend om zijn oude Inca-beschaving, de Andes en het Amazonegebied.";
break;

case "polen":
response = "Polen, officieel de Republiek Polen, is een land in Centraal-Europa, bekend om zijn geschiedenis, kastelen en culturele erfgoed.";
break;

case "portugal":
response = "Portugal, officieel de Portugese Republiek, is een land in Zuidwest-Europa, bekend om zijn rijke maritieme geschiedenis, stranden en fado-muziek.";
break;

case "qatar":
response = "Qatar, officieel de Staat Qatar, is een land op het Arabisch Schiereiland, bekend om zijn olie- en gasreserves en moderne architectuur.";
break;

case "roemenië":
response = "Roemenië, officieel de Roemeense Republiek, is een land in Zuidoost-Europa, bekend om zijn middeleeuwse kastelen, de Karpaten en folklore.";
break;

case "rusland":
response = "Rusland, officieel de Russische Federatie, is het grootste land ter wereld, gelegen in Oost-Europa en Noord-Azië, bekend om zijn rijke geschiedenis en culturele erfgoed.";
break;

case "rwanda":
response = "Rwanda, officieel de Republiek Rwanda, is een land in Centraal-Afrika, bekend om zijn heuvelachtige landschap, nationale parken en gorilla's.";
break;

case "saint kitts en nevis":
response = "Saint Kitts en Nevis is een eilandstaat in het Caribisch gebied, bekend om zijn stranden, bergachtige landschap en koloniale architectuur.";
break;

case "saint lucia":
response = "Saint Lucia is een eilandstaat in het Caribisch gebied, bekend om zijn pitons (tweelingvulkanische bergen), regenwouden en stranden.";
break;

case "saint vincent en de grenadines":
response = "Saint Vincent en de Grenadines is een eilandstaat in het Caribisch gebied, bekend om zijn eilanden, zeilen en natuurlijke schoonheid.";
break;

case "salomonseilanden":
response = "De Salomonseilanden is een eilandstaat in Oceanië, bekend om zijn duiklocaties, koraalriffen en culturele diversiteit.";
break;

case "samoa":
response = "Samoa is een eilandstaat in de zuidwestelijke Stille Oceaan, bekend om zijn traditionele cultuur, stranden en vulkanische landschap.";
break;

case "san marino":
response = "San Marino, officieel de Republiek San Marino, is een kleine staat in Zuid-Europa, bekend om zijn middeleeuwse architectuur en bergachtige landschap.";
break;

case "sao tomé en principe":
response = "Sao Tomé en Principe is een eilandstaat in de Golf van Guinee, bekend om zijn regenwouden, koffieplantages en biodiversiteit.";
break;

case "saoedi-arabië":
response = "Saoedi-Arabië, officieel het Koninkrijk Saoedi-Arabië, is een land in het Midden-Oosten, bekend om zijn woestijnen, olievoorraden en islamitische heilige steden Mekka en Medina.";
break;

case "senegal":
response = "Senegal, officieel de Republiek Senegal, is een land in West-Afrika, bekend om zijn muziek, dans en rijke culturele erfgoed.";
break;

case "servië":
response = "Servië, officieel de Republiek Servië, is een land in Zuidoost-Europa, bekend om zijn geschiedenis, culturele monumenten en natuurparken.";
break;

case "seychellen":
response = "De Seychellen is een eilandstaat in de Indische Oceaan, bekend om zijn stranden, koraalriffen en unieke flora en fauna.";
break;

case "sierra leone":
response = "Sierra Leone, officieel de Republiek Sierra Leone, is een land in West-Afrika, bekend om zijn stranden, regenwouden en diamantmijnen.";
break;

case "singapore":
response = "Singapore, officieel de Republiek Singapore, is een stadstaat in Zuidoost-Azië, bekend om zijn moderne architectuur, economie en multiculturalisme.";
break;

case "slovenië":
response = "Slovenië, officieel de Republiek Slovenië, is een land in Centraal-Europa, bekend om zijn bergen, meren en groene landschappen.";
break;

case "slowakije":
response = "Slowakije, officieel de Slowaakse Republiek, is een land in Centraal-Europa, bekend om zijn kastelen, bergen en folklore.";
break;

case "soedan":
response = "Soedan, officieel de Republiek Soedan, is een land in Noordoost-Afrika, bekend om zijn woestijnen, Nijl-rivier en archeologische sites.";
break;

case "somalië":
response = "Somalië, officieel de Federale Republiek Somalië, is een land in de Hoorn van Afrika, bekend om zijn kustlijn, cultuur en uitdagingen.";
break;

case "spanje":
response = "Spanje, officieel het Koninkrijk Spanje, is een land in Zuid-Europa, bekend om zijn rijke geschiedenis, kunst, keuken en diverse landschappen.";
break;

case "sri lanka":
response = "Sri Lanka, officieel de Democratische Socialistische Republiek Sri Lanka, is een eilandstaat in Zuid-Azië, bekend om zijn stranden, theeplantages en culturele erfgoed.";
break;

case "suriname":
response = "Suriname, officieel de Republiek Suriname, is een land in Zuid-Amerika, bekend om zijn regenwouden, rivieren en culturele diversiteit.";
break;

case "swaziland":
response = "Swaziland, officieel het Koninkrijk Eswatini, is een land in Zuidelijk Afrika, bekend om zijn traditionele cultuur en natuurparken.";
break;

case "syrië":
response = "Syrië, officieel de Arabische Republiek Syrië, is een land in het Midden-Oosten, bekend om zijn oude geschiedenis, archeologische sites en culturele erfgoed.";
break;

case "tadzjikistan":
response = "Tadzjikistan, officieel de Republiek Tadzjikistan, is een land in Centraal-Azië, bekend om zijn bergachtige landschap en culturele tradities.";
break;

case "tanzania":
response = "Tanzania, officieel de Verenigde Republiek Tanzania, is een land in Oost-Afrika, bekend om zijn wilde dieren, nationale parken en de Kilimanjaro.";
break;

case "thailand":
response = "Thailand, officieel het Koninkrijk Thailand, is een land in Zuidoost-Azië, bekend om zijn tempels, stranden, keuken en rijke cultuur.";
break;

case "togo":
response = "Togo, officieel de Togolese Republiek, is een land in West-Afrika, bekend om zijn stranden, heuvels en traditionele dorpen.";
break;

case "tonga":
response = "Tonga, officieel het Koninkrijk Tonga, is een eilandstaat in de Stille Oceaan, bekend om zijn stranden, koraalriffen en Polynesische cultuur.";
break;

case "trinidad en tobago":
response = "Trinidad en Tobago is een eilandstaat in het Caribisch gebied, bekend om zijn carnavalsvieringen, stranden en diverse culturen.";
break;

case "tsjaad":
response = "Tsjaad, officieel de Republiek Tsjaad, is een land in Centraal-Afrika, bekend om zijn woestijnen, nationale parken en culturele diversiteit.";
break;

case "tsjechië":
response = "Tsjechië, officieel de Tsjechische Republiek, is een land in Centraal-Europa, bekend om zijn kastelen, bier en rijke geschiedenis.";
break;

case "tunesië":
response = "Tunesië, officieel de Republiek Tunesië, is een land in Noord-Afrika, bekend om zijn mediterrane kustlijn, historische sites en woestijnlandschap.";
break;

case "turkije":
response = "Turkije, officieel de Republiek Turkije, is een land in zowel Europa als Azië, bekend om zijn rijke geschiedenis, culturele erfgoed en diverse landschappen.";
break;

case "turkmenistan":
response = "Turkmenistan, officieel de Republiek Turkmenistan, is een land in Centraal-Azië, bekend om zijn woestijnen, oude steden en gasreserves.";
break;

case "tuvalu":
response = "Tuvalu is een eilandstaat in de Stille Oceaan, bekend om zijn lage ligging en bedreiging door klimaatverandering.";
break;

case "uganda":
response = "Uganda, officieel de Republiek Uganda, is een land in Oost-Afrika, bekend om zijn wilde dieren, meren en bergachtige landschap.";
break;

case "uruguay":
response = "Uruguay, officieel de Oostelijke Republiek Uruguay, is een land in Zuid-Amerika, bekend om zijn stranden, cultuur en hoge levenskwaliteit.";
break;

case "vanuatu":
response = "Vanuatu is een eilandstaat in de Stille Oceaan, bekend om zijn vulkanische landschappen, duiklocaties en inheemse culturen.";
break;

case "vaticaanstad":
response = "Vaticaanstad, officieel de Staat Vaticaanstad, is een onafhankelijke stadstaat in Rome, bekend als het centrum van de Katholieke Kerk en de residentie van de paus.";
break;

case "venezuela":
response = "Venezuela, officieel de Bolivariaanse Republiek Venezuela, is een land in Zuid-Amerika, bekend om zijn natuurlijke schoonheid, waaronder de Angel Falls, en olievoorraden.";
break;

case "verenigd koninkrijk":
response = "Het Verenigd Koninkrijk, officieel het Verenigd Koninkrijk van Groot-Brittannië en Noord-Ierland, is een land in Europa, bekend om zijn geschiedenis, koningshuis en culturele invloed.";
break;

case "verenigde arabische emiraten":
response = "De Verenigde Arabische Emiraten is een land in het Midden-Oosten, bekend om zijn moderne steden zoals Dubai, olievoorraden en diverse expatgemeenschap.";
break;

case "verenigde staten":
case "vs":
case "united states":
case "us":
response = "De Verenigde Staten, officieel de Verenigde Staten van Amerika, is een land in Noord-Amerika, bekend om zijn diversiteit, economie en wereldwijde invloed.";
break;

case "vietnam":
response = "Vietnam, officieel de Socialistische Republiek Vietnam, is een land in Zuidoost-Azië, bekend om zijn geschiedenis, keuken en natuurlijke schoonheid.";
break;

case "wit-rusland":
response = "Wit-Rusland, officieel de Republiek Wit-Rusland, is een land in Oost-Europa, bekend om zijn bossen, kastelen en Sovjet-erfgoed.";
break;

case "zambia":
response = "Zambia, officieel de Republiek Zambia, is een land in Zuidelijk Afrika, bekend om zijn Victoria Falls, wildparken en koperreserves.";
break;

case "zimbabwe":
response = "Zimbabwe, officieel de Republiek Zimbabwe, is een land in Zuidelijk Afrika, bekend om zijn Victoria Falls, wildparken en historische sites zoals Groot Zimbabwe.";
break;

//End of the countries



//Info about ducks, turtles and donkeys:
case "schildpad":
case "een schildpad":
case "info over schildpadden":
case "schildpadden":
case "informatie over schildpadden":
case "informatie over een schildpad":
case "informatie over schildpadden":
case "turtle":
case "turtles":
case "ik ben een schildpad":
case "ik ben een turtle":
response = "Schildpadden zijn reptielen die bekend staan om hun harde schild en hun slome manier van bewegen. Reuzenschildpadden worden maar liefst 200 jaar in goede omstandigheden.";
break;

case "eend":
case "een eend":
case "info over eenden":
case "eenden":
case "informatie over eenden":
case "informatie over een eend":
case "informatie over eenden":
case "duck":
case "duck!":
case "ik ben een eend":
case "ik ben een eend!":
case "ik ben een duck":
case "ik ben een duck!":
case "duckertje":
case "duckertje!":
response = "Eenden zijn watervogels die vaak gekenmerkt worden door hun brede snavels en verenkleed. Ook maken ze vaak grappige geluiden en worden ze gevoed door jonge kinderen.";
break;

case "ezel":
case "een ezel":
case "info over ezels":
case "ezels":
case "informatie over ezels":
case "informatie over een ezel":
case "informatie over ezels":
case "donkey":
case "ik ben een ezel":
response = "Ezels zijn zoogdieren die bekend staan om hun lange oren en eigenzinnige karakter.";
break;


case "schildpad leeftijd":
case "leeftijd schildpad":
case "hoe oud wordt een schildpad?":
case "hoe oud wordt een schildpad":
case "hoe oud kan een schildpad worden?":
case "hoe oud kan een schildpad worden":
response = "Sommige schildpadden kunnen meer dan 100 jaar oud worden!";
break;

case "eend voeding":
case "voeding eend":
case "voeding van een eend":
case "wat eet een eend?":
case "wat eet een eend":
response = "Eenden eten vaak waterplanten, insecten en kleine vissen.";
break;

case "ezel geluid":
case "welk geluid maakt een ezel?":
case "welk geluid maakt een ezel":
case 'wat voor geluid maakt een ezel?':
case 'wat voor geluid maakt een ezel':
case "geluid van een ezel":
case "geluid ezel":
response = "Ezels maken vaak een karakteristiek geluid dat bekend staat als balken.";
break;

case "schildpad leefgebied":
case "leefgebied schildpad":
case "leefgebied van een schildpad":
case "wat is het leefgebied van een schildpad?":
response = "Schildpadden komen voor in verschillende habitats, waaronder bossen, graslanden en oceanen.";
break;

case "eend broeden":
response = "Eenden maken nesten vaak dicht bij water en beschermen hun kuikens zorgvuldig.";
break;

case "ezel geschiedenis":
response = "Ezels worden al duizenden jaren door mensen gebruikt als lastdieren.";
break;
case "schildpad bescherming":
response = "Schildpadden worden bedreigd door habitatverlies en stroperij.";
break;
case "eend migratie":
response = "Sommige eenden maken lange migraties om te broeden of te overwinteren.";
break;
case "ezel eigenschappen":
response = "Ezels staan bekend om hun koppige karakter maar zijn ook intelligent en betrouwbaar.";
break;
case "schildpad soorten":
response = "Er zijn veel verschillende soorten schildpadden, van kleine tot enorme zeeschildpadden.";
break;
case "eend gedrag":
response = "Eenden vertonen vaak sociaal gedrag en leven in groepen, vooral tijdens het broedseizoen.";
break;
case "ezel voeding":
response = "Ezels hebben een dieet dat voornamelijk bestaat uit gras, hooi en graan.";
break;
case "schildpad voortplanting":
response = "Schildpadden leggen eieren die uitkomen na een periode van broeden.";
break;
case "eend leefomgeving":
response = "Eenden gedijen in zowel zoetwater- als zoutwaterhabitats, afhankelijk van de soort.";
break;
case "ezel verzorging":
response = "Ezels hebben regelmatig hoefverzorging nodig om gezond te blijven.";
break;
case "schildpad gedrag":
response = "Schildpadden zijn over het algemeen rustige dieren en vertonen weinig agressief gedrag.";
break;
case "eend voortplanting":
response = "Eenden leggen eieren in nesten dicht bij water en zorgen goed voor hun jongen.";
break;
case "ezel leefgebied":
response = "Ezels zijn aanpasbaar en komen voor in diverse habitats, van droge steppes tot bergachtige gebieden.";
break;
case "schildpad dieet":
response = "Schildpadden eten een gevarieerd dieet, inclusief planten, fruit, insecten en soms kleine dieren.";
break;
case "eend kenmerken":
response = "Eenden hebben waterafstotend verenkleed, een breed en platte snavel, en zwemvliezen.";
break;
case "ezel gedrag":
response = "Ezels staan bekend om hun koppigheid, maar ze zijn ook geduldig en hebben een goed geheugen.";
break;
case "schildpad levensduur":
response = "De levensduur van schildpadden varieert sterk per soort, maar sommige kunnen meer dan 100 jaar oud worden.";
break;
case "eend voedsel":
response = "Eenden eten een gevarieerd dieet van waterplanten, kleine vissen, insecten en zelfs gras.";
break;
case "ezel anatomie":
response = "Ezels hebben lange oren die hen helpen om goed te horen, en een korte staart.";
break;
case "schildpad kenmerken":
response = "Schildpadden hebben een hard schild dat hen beschermt tegen roofdieren, en vaak zwemvliezen.";
break;
case "eend communicatie":
response = "Eenden gebruiken verschillende geluiden en lichaamstaal om met elkaar te communiceren.";
break;
case "ezel leeftijd":
response = "Ezels kunnen gemiddeld tussen de 25 en 30 jaar oud worden, afhankelijk van hun omgeving en verzorging.";
break;
case "schildpad habitat":
response = "Schildpadden bewonen diverse habitats, van tropische regenwouden tot droge woestijnen en oceanen.";
break;
case "eend habitat":
response = "Eenden leven in een breed scala aan waterrijke habitats, van zoetwatermeren tot zoute zeekusten.";
break;
case "ezel verzorgingstips":
response = "Ezels hebben behoefte aan regelmatige hoefverzorging, voldoende voeding en beschutting tegen extreme weersomstandigheden.";
break;
case "schildpad eieren":
response = "Schildpadden leggen eieren op zandstranden of in nesten onder de grond, afhankelijk van de soort.";
break;
case "eend migratiepatronen":
response = "Sommige eenden maken lange migraties om te ontsnappen aan koude winters of om te broeden in veiligere gebieden.";
break;
case "ezel training":
response = "Ezels kunnen getraind worden om lasten te dragen, te trekken en te reageren op eenvoudige commando's.";
break;
case "schildpad bedreigingen":
response = "Schildpadden worden bedreigd door habitatverlies, illegale handel en predatie door invasieve soorten.";
break;
case "eend voortplantingsseizoen":
response = "Eenden broeden meestal in de lente en zomer, wanneer voedsel overvloedig is en het weer gunstig.";
break;
case "ezel fysiologie":
response = "Ezels hebben een goed ontwikkelde spijsvertering, wat hen in staat stelt om vezelrijk voedsel efficiënt te verteren.";
break;
case "schildpad wetenschappelijke naam":
response = "De wetenschappelijke naam voor schildpadden behoort tot de orde Testudines, die bestaat uit verschillende families en soorten.";
break;
case "eend predator":
response = "Eenden hebben verschillende natuurlijke vijanden, waaronder roofvogels, vossen en grote vissen.";
break;
case "ezel sociale structuur":
response = "Ezels leven vaak in kuddes met een dominante leider, die de groep beschermt en leidt.";
break;
case "schildpad gezondheid":
response = "Schildpadden zijn gevoelig voor ziekten zoals schimmel- en bacteriële infecties, vooral in gevangenschap.";
break;



case "wat is de hoofdstad van nederland?":
case "wat is de hoofdstad van nederland":
case "wat is de hoofdstad van nl?":
case "wat is de hoofdstad van nl":
case "hoofdstad nederland":
case "hoofdstad nl":
case "hoofdstad van nederland":
case "hoofdstad van nl":
    response = "De hoofdstad van Nederland is Amsterdam. Kan ik je verder nog ergens mee helpen?";
    break;


        case "wat is de hoofdstad van frankrijk?":
        case "wat is de hoofdstad van frankrijk":
        case "hoofdstad van frankrijk":
        case "hoofdstad frankrijk":
        case "hoofdstad fr":
        case "hoofdstad van fr":
                response = "De hoofdstad van Frankrijk is Parijs. Waar kan ik je verder nog mee helpen?";
                break;


case "wat is de hoogste berg ter wereld?":
case "wat is de hoogste berg ter wereld":
case "wat is de hoogste berg?":
case "wat is de hoogste berg":
case "hoogste berg":
case "hoogste berg ter wereld":
case "hoogste berg van de wereld":
case "wat is de hoogste berg van de wereld?":
case "wat is de hoogste berg van de wereld":
        response = "De hoogste berg ter wereld is de Mount Everest, gelegen in de Himalaya. De Mount Everest is met om precies te zijn 8848,86 meter de hoogste berg van de wereld. De berg is dus net geen 9 kilometer.";
        break;

    case "wat is de hoofdstad van japan?":
    case "wat is de hoofdstad van japan":
    case "kan je me vertellen wat de hoofdstad van japan is?":
    case "kan je me vertellen wat de hoofdstad van japan is":
    case "hoofstad van japan":
    case "hoofdstad japan":
         response = "De hoofdstad van Japan is Tokio.";
            break;


                case "wat is het snelste dier op aarde?":
                case "wat is het snelste dier op aarde":
                case "wat is het snelste dier?":
                case "wat is het snelste dier":
                case "snelste dier op aarde":
                case "snelste dier":
                case "wat is het snelste dier ter wereld?":
                case "wat is het snelste dier ter wereld":
                    response = "Het snelste landdier op aarde is de cheeta. Het Jachtluipaard kan wel een snelheid halen van gemiddeld zo'n 100 tot 110 kilometer per uur. Dit houdt hij wel maar 30 seconden vast, maar in principe kan hij dus net zo snel als een auto op de snelweg.";
                    break;


    case "wat is de hoofdstad van australië?":
    case "wat is de hoofstad van australië":
    case "wat is de hoofdstad van australie?":
    case "wat is de hoofdstad van australie":
    case "hoofdstad van australië":
    case "hoofdstad van australie":
    case "hoofdstad australië":
    case "hoofdstad australie":
        response = "De hoofdstad van Australië is Canberra.";
        break;



        case "wat is de grootste oceaan ter wereld?":
        case "wat is de grootste oceaan ter wereld":
        case "wat is de grootste oceaan?":
        case "wat is de grootste oceaan":
        case "wat is de grootste oceaan van de wereld?":
        case "wat is de grootste oceaan van de wereld":
        case "grootste oceaan ter wereld":
        case "grootste oceaan":
        case "grootste oceaan van de wereld":
                                response = "De grootste oceaan ter wereld is de Stille Oceaan.";
                                break;

                    case "wat is de grootste woestijn ter wereld?":
                    case "wat is de grootste woestijn ter wereld":
                    case "wat is de grootste woestijn van de wereld?":
                    case "wat is de grootste woestijn van de wereld":
                    case "wat is de grootste woestijn?":
                    case "wat is de grootste woestijn":
                    case "kan je me vertellen wat de grootste woestijn ter wereld is?":
                    case "grootste woestijn":
                    case "grootste woestijn ter wereld":
                    case "grootste woestijn van de wereld":
                        response = "De grootste woestijn ter wereld is de Sahara.";
                        break;


                case "wat is de kleinste planeet in ons zonnestelsel?":
                case "wat is de kleinste planeet in ons zonnestelsel":
                case "wat is de kleinste planeet":
                case "wat is de kleinste planeet?":
                case "kleinste planeet":
                case "kleinste planeet in ons zonnestelsel":
                case "kleinste planeet van ons zonnestelsel":
                        response = "De kleinste planeet in ons zonnestelsel is Mercurius.";
                        break;


            case "wat is de grootste planeet in ons zonnestelsel?":
            case "wat is de grootste planeet in ons zonnestelsel":
            case "wat is de grootste planeet?":
            case "wat is de grootste planeet":
            case "grootste planeet":
            case "grootste planeet in ons zonnestelsel":
            case "grootste planeet in zonnestelsel":
            case "grootste planeet zonnestelsel":      
                response = "De grootste planeet in ons zonnestelsel is Jupiter.";
                break;


                case "hoeveel landen zijn er in de wereld?":
                case "hoeveel landen zijn er in de wereld":
                case "hoeveel landen zijn er op de wereld?":
                case "hoeveel landen zijn er op de wereld":
                case "hoe veel landen zijn er?":
                case "hoeveel landen zijn er":
                case "aantal landen":
                case "hoeveelheid landen":
                    response = "Er zijn momenteel 195 erkende landen in de wereld.";
                    break;


        case "wat is de grootste rivier ter wereld?":
        case "wat is de grootste rivier ter wereld":
        case "wat is de grootste rivier?":
        case "wat is de grootste rivier":
        case "grootste rivier":
        case "grootste rivier ter wereld":
        case "grootste rivier van de wereld":
                response = "De grootste rivier ter wereld is de Nijl met een afstand van 6650 kilometer. Daarna volgt de Amazone met 6400 en de Mississipi-Missouri-Red Rock met 5969 kilometer.";
                    break;


    case "wat is de kleinste oceaan ter wereld?":
    case "wat is de kleinste oceaan ter wereld":
    case "wat is de kleinste oceaan van de wereld?":
    case "wat is de kleinste oceaan van de wereld":
    case "wat is de kleinste oceaan?":
    case "wat is de kleinste oceaan":
    case "kleinste oceaan":
    case "kleinste oceaan":
    case "kleinste oceaan ter wereld":
    case "kleinste oceaan van de wereld":
            response = "De kleinste oceaan ter wereld is de Zuidelijke Oceaan, ook wel bekend als de Antarctische Oceaan.";
            break;


            
            case "wat is de grootste stad ter wereld?":
            case "wat is de grootste stad ter wereld":
            case "wat is de grootste stad van de wereld?":
            case "wat is de grootste stad van de wereld":
            case "grootste stad ter wereld":
            case "grootste stad van de wereld":
                        response = "De grootste stad ter wereld qua bevolking is Tokio, Japan.";
                        break;


                    case "hoe oud is de aarde?":
                    case "hoe oud is de aarde":
                    case "leeftijd aarde":
                    case "hoe oud is onze aarde?":
                    case "hoe oud is onze aarde":
                    case "hoe oud is de aardbol?":
                    case "hoe oud is de aardbol":
                                response = "De huidige schatting van de leeftijd van de aarde is ongeveer 4,54 miljard jaar.";
                                break;

        case "wat is het grootste dier op aarde?":
        case "wat is het grootste dier op aarde":
        case "wat is het grootste dier?":
        case "wat is het grootste dier":
        case "grootste dier":
        case "grootste dier op aarde":
            response = "Het grootste dier op aarde is de blauwe vinvis.";
            break;

                    case "wat is de hoofdstad van duitsland?":
                    case "wat is de hoofdstad van duitsland":
                    case "hoofdstad duitsland":
                    case "hoofdstad van duitsland":
                    case "hoofdstad du":
                        response = "De hoofdstad van Duitsland is Berlijn. Kan ik je verder nog ergens mee helpen?";
                        break;

                    case "wat is het hoogste gebouw ter wereld?":
                    case "wat is het hoogste gebouw ter wereld":
                    case "wat is het hoogste gebouw van de wereld?":
                    case "wat is het hoogste gebouw van de wereld":
                    case "hoogste gebouw ter wereld":
                    case "hoogste gebouw van de wereld":
                    case "hoogste gebouw":
                            response = "Het hoogste gebouw ter wereld is de Burj Khalifa in Dubai, Verenigde Arabische Emiraten.";
                            break;



                                    case "wat is het grootste continent ter wereld?":
                                    case "wat is het grootste continent ter wereld":
                                    case "wat is het grootste continent van de wereld?":
                                    case "wat is het grootste continent van de wereld":
                                    case "wat is het grootste continent":
                                    case "wat is het grootste continent?":
                                    case "grootste continent van de wereld":
                                    case "grootste continent ter wereld":
                                    case "grootste continent":
                                    case "grootste continent op aarde":
                                        response = "Het grootste continent ter wereld is Azië. Kan ik je verder nog ergens mee helpen?";
                                        break;

                                    case "wat is het grootste meer ter wereld?":
                                    case "wat is het grootste meer ter wereld":
                                    case "wat is het grootste meer van de wereld?":
                                    case "wat is het grootste meer van de wereld":
                                    case "wat is het grootste meer?":
                                    case "wat is het grootste meer":
                                    case "grootste meer ter wereld":
                                    case "grootste meer van de wereld":
                                    case "grootste meer":
                                    case "grootste meer ooit":
                                    case "grootste meer wereldwijd":
                                        response = "Het grootste meer ter wereld qua oppervlakte is het Kaspische Meer.";
                                        break;

                                    case "wat is de kleinste staat ter wereld?":
                                    case "wat is de kleinste staat ter wereld":
                                    case "wat is de kleinste staat van de wereld?":
                                    case "wat is de kleinste staat van de wereld":
                                    case "kleinste staat":
                                    case "kleinste staat van de wereld":
                                    case "kleinste staat ter wereld":
                                    case "wat is het kleinste land ter wereld?":
                                    case "wat is het kleinste land ter wereld":
                                    case "wat is het kleinste land van de wereld?":
                                    case "wat is het kleinste land van de wereld":
                                    case "wat is het kleinste land ooit?":
                                    case "wat is het kleinste land ooit":
                                    case "wat is het kleinste land?":
                                    case "wat is het kleinste land":
                                    case "kleinste land":
                                    case "kleinste land van de wereld":
                                    case "kleinste land ter wereld":
                                    case "kleinste land wereldwijd":
                                    case "kleinste land ooit":
                                        response = "De kleinste staat ter wereld is Vaticaanstad. In 2019 telde deze stad maar 1000 inwoners, en is hiermee de kleinste onafhankelijke staat van de wereld. Kan ik je verder nog ergens mee helpen?";
                                        break;

                                     
                                    case "wat is de grootste boom ter wereld?":
                                    case "wat is de grootste boom ter wereld":
                                    case "wat is de grootste boom?":
                                    case "wat is de grootste boom van de wereld?":
                                    case "wat is de grootste boom van de wereld":
                                    case "wat is de grootste boom":
                                    case "wat is de grootste boom wereldwijd?":
                                    case "wat is de grootste boom wereldwijd":
                                    case "grootste boom":
                                    case "grootste boom ter wereld":
                                    case "grootste boom van de wereld":
                                    case "grootste boom wereldwijd":
                                    case "grootste boom ooit":
                                        response = "De grootste boom ter wereld is Hyperion, een mammoetboom gelegen in het Redwood National Park in Californië, Verenigde Staten. De boom is om precies te zijn 115,6 meter en dus de langste ter wereld.";
                                        break;

                                        
                                    case "wat is de langste brug ter wereld?":
                                    case "wat is de langste brug ter wereld":
                                    case "wat is de langste brug van de wereld?":
                                    case "wat is de langste brug van de wereld":
                                    case "wat is de langste brug wereldwijd?":
                                    case "wat is de langste brug wereldwijd":
                                    case "wat is de langste brug?":
                                    case "wat is de langste brug":
                                    case "langste brug":
                                    case "langste brug ter wereld":
                                    case "langste brug van de wereld":
                                    case "langste brug wereldwijd":
                                        response = "De langste brug ter wereld is de Danyang-Kunshan Grand Bridge in China. Deze brug is maar liefst 164.800 meter lang.";
                                        break;

                                    case "wat is de grootste diamant ter wereld?":
                                    case "wat is de grootste diamant ter wereld":
                                    case "wat is de grootste diamant?":
                                    case "wat is de grootste diamant":
                                    case "wat is de grootste diamant van de wereld?":
                                    case "wat is de grootste diamant van de wereld":
                                    case "grootste diamant ter wereld":
                                    case "grootste diamant":
                                    case "grootste diamant van de wereld":
                                        response = "De grootste diamant ter wereld is de Cullinan, ook bekend als de Ster van Afrika.";
                                        break;


                                    case "hoeveel landen zijn er in europa?":
                                    case "hoeveel landen zijn er in europa":
                                    case "hoe veel landen zijn er in europa?":
                                    case "hoe veel landen zijn er in europa":
                                    case "hoeveelheid landen in europa":
                                    case "hoeveelheid landen europa":
                                        response = "Er zijn momenteel 50 landen in Europa.";
                                        break;

                                    case "wat is de grootste vulkaan ter wereld?":
                                    case "wat is de grootste vulkaan ter wereld":
                                    case "wat is de grootste vulkaan van de wereld?":
                                    case "wat is de grootste vulkaan van de wereld":
                                    case "wat is de grootste vulkaan?":
                                    case "wat is de grootste vulkaan":
                                    case "grootste vulkaan ter wereld":
                                    case "grootste vulkaan van de wereld":
                                    case "grootste vulkaan":
                                        response = "De grootste vulkaan ter wereld is Mauna Loa, gelegen op het eiland Hawaï.";
                                        break;

                                    case "wat is de grootste planeet?":
                                    case "wat is de grootste planeet":
                                    case "grootste planeet":
                                        response = "De grootste planeet in ons zonnestelsel is Jupiter.";
                                        break;

                                
                                    case "wat is de grootste stad ter wereld qua oppervlakte?":
                                    case "grootste stad":
                                    case "grootste stad ter wereld":
                                    case "wat is de grootste stad ter wereld?":
                                    case "wat is de grootste stad ter wereld":
                                    case "wat is de grootste stad":
                                        response = "De grootste stad ter wereld qua oppervlakte is Hulunbuir in China.";
                                        break;

                                    case "wat is de oudste stad ter wereld?":
                                    case "wat is de oudste stad ter wereld":
                                    case "wat is de oudste stad van de wereld?":
                                    case "wat is de oudste stad van de wereld":
                                    case "wat is de oudste stad?":
                                    case "wat is de oudste stad":
                                    case "oudste stad van de wereld":
                                    case "oudste stad ter wereld":
                                    case "oudste stad":
                                        response = "De oudste stad ter wereld is Damascus, Syrië.";
                                        break;

                                    case "wat is de grootste kloof ter wereld?":
                                    case "wat is de grootste kloof ter wereld":
                                    case "grootste kloof":
                                    case "grootste kloof ter wereld":
                                        response = "De grootste kloof ter wereld is de Grote Kloof in Namibië en Zuid-Afrika.";
                                        break;


                                    case "wat is de grootste luchthaven ter wereld?":
                                    case "wat is de grootste luchthaven ter wereld":
                                    case "wat is het grootste vliegveld ter wereld?":
                                    case "grootste luchthaven":
                                    case "grootste vliegveld":
                                        response = "De grootste luchthaven ter wereld qua oppervlakte is King Fahd International Airport in Saoedi-Arabië.";
                                        break;

                                    case "wat is de grootste archipel ter wereld?":
                                    case "wat is de grootste archipel ter wereld":
                                    case "wat is de grootste archipel van de wereld?":
                                    case "wat is de grootste archipel van de wereld":
                                    case "grootste archipel":
                                    case "grootste archipel van de wereld":
                                    case "grootste archipel ter wereld":
                                        response = "De grootste archipel ter wereld is Indonesië.";
                                        break;

                                    case "wat is de hoogste berg in europa?":
                                    case "wat is de hoogste berg in europa":
                                    case "wat is de hoogste berg van europa?":
                                    case "wat is de hoogste berg van europa":
                                    case "hoogste berg van europa":
                                    case "hoogste berg in europa":
                                        response = "De hoogste berg in Europa is de Elbroes in Rusland.";
                                        break;

                                    
                                    case "wat is de snelste vogel ter wereld?":
                                    case "wat is de snelste vogel ter wereld":
                                    case "wat is de snelste vogel van de wereld?":
                                    case "wat is de snelste vogel van de wereld":
                                    case "wat is de snelste vogel?":
                                    case "wat is de snelste vogel":
                                    case "snelste vogel ter wereld":
                                    case "snelste vogel":
                                    case "snelste vogel van de wereld":
                                        response = "De snelste vogel ter wereld is de slechtvalk. Als deze vogel duikt, kan 'ie een snelheid van wel 390 km/u halen.";
                                        break;

                                    case "wat is de snelste vis ter wereld?":
                                    case "wat is de snelste vis ter wereld":
                                    case "snelste vis ter wereld":
                                    case "snelste vis":
                                    case "snelste vis van de wereld":
                                        response = "De snelste vis ter wereld is de zeilvis.";
                                        break;

                                   
                                    case "wat is de snelste slak ter wereld?":
                                    case "wat is de snelste slak ter wereld":
                                    case "wat is de snelste slak?":
                                    case "wat is de snelste slak":
                                    case "wat is de snelste slak van de wereld?":
                                    case "wat is de snelste slak van de wereld":
                                    case "snelste slak":
                                    case "snelste slak ter wereld":
                                    case "snelste slak van de wereld":
                                        response = "De snelste slak ter wereld is de witschubbige slak.";
                                        break;


                                    case "wat is de snelste slang ter wereld?":
                                    case "wat is de snelste slang ter wereld":
                                    case "snelste slang":
                                    case "snelste slang ter wereld":
                                    case "snelste slang van de wereld":
                                        response = "De snelste slang ter wereld is de zwarte mamba.";
                                        break;

                                    case "wat is de snelste tor ter wereld?":
                                    case "wat is de snelste tor ter wereld":
                                    case "snelste tor ter wereld":
                                    case "snelste tor":
                                        response = "De snelste tor ter wereld is de tijgersprinkhaan.";
                                        break;

                                    case "wat is de snelste spin ter wereld?":
                                    case "wat is de snelste spin ter wereld":
                                    case "wat is de snelste spin van de wereld?":
                                    case "wat is de snelste spin van de wereld":
                                    case "wat is de snelste spin?":
                                    case "wat is de snelste spin":
                                    case "snelste spin":
                                    case "snelste spin van de wereld":
                                    case "snelste spin ter wereld":
                                        response = "De snelste spin ter wereld is de huntsman-spin.";
                                        break;

                                    case "wat is de snelste schorpioen ter wereld?":
                                    case "wat is de snelste schorpioen ter wereld":
                                    case "wat is de snelste schorpioen van de wereld?":
                                    case "wat is de snelste schorpioen van de wereld":
                                    case "wat is de snelste schorpioen?":
                                    case "wat is de snelste schorpioen":
                                    case "snelste schorpioen":
                                    case "snelste schorpioen ter wereld":
                                        response = "De snelste schorpioen ter wereld is de dikke staart schorpioen.";
                                        break;

                                    case "wat is de snelste schildpad ter wereld?":
                                    case "wat is de snelste schildpad ter wereld":
                                    case "wat is de snelste schildpad van de wereld?":
                                    case "wat is de snelste schildpad van de wereld":
                                    case "wat is de snelste schildpad?":
                                    case "wat is de snelste schildpad":
                                    case "snelste schildpad ter wereld":
                                    case "snelste schildpad van de wereld":
                                    case "snelste schildpad":
                                        response = "De snelste schildpad ter wereld is de drieteenschildpad.";
                                        break;

                                    case "wat is de snelste mier ter wereld?":
                                    case "wat is de snelste mier ter wereld":
                                    case "snelste mier":
                                    case "snelste mier ter wereld":
                                        response = "De snelste mier ter wereld is de Australische trekmier.";
                                        break;
                                        
                                    case "wat is de snelste kakkerlak ter wereld?":
                                    case "wat is de snelste kakkerlak ter wereld":
                                    case "wat is de snelste kakkerlak van de wereld?":
                                    case "wat is de snelste kakkerlak van de wereld":
                                    case "wat is de snelste kakkerlak?":
                                    case "wat is de snelste kakkerlak":
                                    case "snelste kakkerlak":
                                    case "snelste kakkerlak ter wereld":
                                    case "snelste kakkerlak van de wereld":
                                        response = "De snelste kakkerlak ter wereld is de Amerikaanse kakkerlak.";
                                        break;
                                
                            



 //Code from RIR, our project-chatbot with many information about the Dutch language: 

    case "kan je me een uitleg filmpje geven over de aanwijzende voornaamwoorden?":
    case "kan je me een uitleg filmpje geven over de aanwijzende voornaamwoorden":
    case "uitleg filmpje over persoonlijke voornaamwoorden":
    case "filmpje over aanwijzend voornaamwoorden":
    case "uitleg filmpje over aanw":
    case "filmpje over aanw":
    case "kan je hiervan aan mij een uitleg filmpje geven?":
    case "aanwijzende voornaamworden":
    case "aanw":
    case "av":
    response = "Natuurlijk! Aanwijzende voornaamwoorden zijn woorden die aangeven waar iets is. Deze woorden zijn 'dit, dat, die en deze'. Kopieër de volgende link naar je zoekvak voor een video: https://www.youtube.com/watch?v=Hzp8crbPVMA&t=4s ";
        break;



                case "kan je me een uitleg filmpje geven over werkwoordspelling?":
                case "kan je me een uitleg filmpje geven over werkwoordspelling":
                case "kan je mij een uitleg filmpje geven over werkwoordspelling":
                case "kan je mij een uitleg filmpje geven over werkwoordspelling?":  
                case "uitleg filmpje over werkwoordspelling.":
                case "filmpje over werkwoordspelling.":
                case "uitleg filmpje over werkwoordspelling":
                case "filmpje over werkwoordspelling":
                case "werkwoordspelling":
                case "filmpje over werkwoordspelling":
                case "hulp bij werkwoordspelling":
                    response = "Natuurlijk! Ik heb het volgende filmpje voor je gevonden: https://www.youtube.com/watch?v=JiNs794-QF0 ";
                    break;

            case "kan je me een uitleg filmpje geven over voltooid deelwoorden?":
            case "kan je me een uitleg filmpje geven over voltooid deelwoord?":
            case "kan je me een uitleg filmpje geven over voltooid deelwoorden":
            case "kan je me een uitleg filmpje geven over voltooid deelwoord":
            case "kan je mij een uitleg filmpje geven over voltooid deelwoorden?":
            case "kan je mij een uitleg filmpje geven over voltooid deelwoord?":
            case "kan je hiervan een uitleg filmpje aan mij geven?":    
            response = "https://www.youtube.com/watch?v=SOJM_D0n8sI&t=36s kopier deze link a.u.b.";
            break;                        

            case "persoonlijke voornaamwoorden":
            case "wat zijn persoonlijke voornaamwoorden?":
            case "persoonlijke voornaamwoord":
            case "persoonlijk voornaamwoord":
            case "persoonlijke voornaamwoorden":
            case "psv":      
                response = "Alle persoonlijke voornaamwoorden zijn ik ,mij, me, jij, jou, je, u, hij, hem, zij, ze en het. Kan ik je verder nog ergens mee helpen?";
                break;

    case "bezittelijke voornaamwoorden":
    case "bezittelijke voornaamwoord":
    case "wat is een bezittelijk voornaamwoord?":
    case "wat zijn bezittelijke voornaamwoorden":
    case "wat is een bezittelijke voornaamwoord":
    case "bzv":   
        response = "Alle bezittelijke voornaamwoorden zijn onze, ons, jullie, hun, zijn, haar, uw, jouw en mijn";
            break;



                case "werkwoorden":
                case "werkwoord":
                case "wat is een werkwoord?":
                case "wat is een werkwoord":
                case "wat zijn werkwoorden?":
                case "wat zijn werkwoorden":                
                case "hoe herken ik een werkwoord?":
                case "hoe herken ik een werkwoord":
                case "hoe herken ik het werkwoord?":
                case "hoe herken ik het werkwoord":
                case "hoe herken ik het werkwoord in een zin?":
                case "hoe herken ik het werkwoord in een zin":
                case "hoe herken ik het werkwoord in het zin?":
                case "hoe herken ik het werkwoord in het zin":            
                    response = "Werkwoorden zijn woorden die een actie, toestand of gebeurtenis aangeven. Ze hebben verschillende vormen zoals infinitief, persoonsvorm, verleden tijd, voltooid deelwoord, etc.";
                    break;

    case "infinitief":
    case "wat is een infinitief?":
    case "wat is een infinitief":
    case "hele werkwoord":
    case "hoe herken ik een infinitief?":
    case "hoe herken ik een infinitief":        
        response = "Het infinitief is de basisvorm van het werkwoord, bijvoorbeeld 'lopen', 'eten', 'werken'. Om de stam (Ik-vorm) te weten te komen, gebruik je ook het infinitief. Je haalt er dan -en af, dus bijvoorbeeld de stam van werken is werk, dus ik werk.";
        break;

    case "persoonsvorm":
    case "persoonsvormen":
    case "wat zijn persoonsvormen?":
    case "wat is een persoonsvorm?":
    case "wat is een pv?":
    case "wat is een pv":
    case "pv":
        response = "De persoonsvorm is het werkwoord dat verandert als je de zin in een andere tijd zet of de zin vragend maakt, bijvoorbeeld 'loop' in 'ik loop'.";
        break;

    case "verleden tijd":
    case "hoe herken ik het verleden tijd?":
    case "hoe herken ik een verleden tijd?":
    case "hoe herken ik het verleden tijd":
    case "hoe herken ik een verleden tijd?":        
    case "hoe herken ik het verleden tijd in een zin?":
    case "hoe herken ik het verleden tijd in het zin?":
    case "hoe herken ik het verleden tijd in het zin":
    case "hoe herken ik het verleden tijd in een zin":               
        response = "De verleden tijd van een werkwoord geeft aan dat iets in het verleden is gebeurd, bijvoorbeeld 'liep' van 'lopen'.";
        break;

case "voltooid deelwoord":
case "wat zijn voltooid deelwoorden?":   
response = "Het voltooid deelwoord wordt gebruikt in combinatie met de werkwoorden 'hebben', 'zijn' of 'worden' om de voltooide tijd te vormen, bijvoorbeeld 'gelopen' in 'ik heb gelopen'.";
break;

case "hulpwerkwoord":
case "wat zijn hulpwerkwoorden?":    
response = "Een hulpwerkwoord helpt om de tijd, modaliteit of passieve vorm van het hoofdwerkwoord aan te geven, bijvoorbeeld 'hebben' in 'ik heb gewerkt'.";
break;

case "koppelwerkwoord":
case "koppelwerkwoorden":    
response = "Een koppelwerkwoord verbindt het onderwerp met een eigenschap of toestand, zoals 'zijn', 'worden', 'blijven'.";
break;

case "onvoltooid deelwoord":
case "onvoltooid deelwoorden":
case "onvoltooide deelwoorden":
case "onvoltooide deelwoord":             
response = "Het onvoltooid deelwoord is een vorm van het werkwoord dat op -end eindigt en een voortdurende actie aangeeft, bijvoorbeeld 'lopend'.";
break;

case "hoofdzin":
case "wat zijn hoofdzinnen?":    
response = "Een hoofdzin is een zelfstandige zin die in principe op zichzelf kan staan, bijvoorbeeld 'Ik ga naar school.'.";
break;

case "bijzin":
case "bijzinnen":    
response = "Een bijzin is een zin die een deel van de hoofdzin uitbreidt of nadere informatie geeft en vaak niet zelfstandig kan staan, bijvoorbeeld 'omdat ik iets moet leren' in 'Ik ga naar school omdat ik iets moet leren'.";
break;

case "onderwerp":
case "onderwerpen":    
response = "Het onderwerp is het deel van de zin dat aangeeft wie of wat de handeling uitvoert, bijvoorbeeld 'de jongen' in 'De jongen leest een boek'.";
break;

case "gezegde":
response = "Het gezegde is het werkwoordelijk deel van de zin dat iets over het onderwerp zegt, bijvoorbeeld 'loopt' in 'De man loopt snel'.";
break;

case "lijdend voorwerp":
response = "Het lijdend voorwerp is het deel van de zin dat aangeeft wie of wat direct door de handeling wordt getroffen, bijvoorbeeld 'de bal' in 'Hij gooit de bal'.";
break;

case "meewerkend voorwerp":
response = "Het meewerkend voorwerp geeft aan voor wie of aan wie iets wordt gedaan, bijvoorbeeld 'aan zijn vriend' in 'Hij geeft het boek aan zijn vriend'.";
break;

case "bijwoordelijke bepaling":
response = "De bijwoordelijke bepaling geeft extra informatie over de handeling, zoals tijd, plaats, manier of reden, bijvoorbeeld 'vandaag' in 'Ik ga vandaag naar school'.";
break;

case "voorzetsel":
case "voorzetsels":    
response = "Een voorzetsel is een woord dat de relatie aangeeft tussen andere woorden in de zin, zoals 'in', 'op', 'bij', bijvoorbeeld 'op de tafel' in 'Het boek ligt op de tafel'.";
break;

case "naamwoordelijk gezegde":
response = "Het naamwoordelijk gezegde geeft een eigenschap of toestand van het onderwerp aan en bestaat uit een koppelwerkwoord en een naamwoordelijk deel, bijvoorbeeld 'is groot' in 'De boom is groot'.";
break;

case "active zinsconstructie":
response = "Een actieve zinsconstructie legt de nadruk op het onderwerp dat de handeling uitvoert, bijvoorbeeld 'De jongen leest een boek'.";
break;

case "passieve zinsconstructie":
response = "Een passieve zinsconstructie legt de nadruk op de handeling of op wie de handeling ondergaat, in plaats van wie de handeling uitvoert, bijvoorbeeld 'Het boek wordt gelezen door de jongen'.";
break;

case "conjunctie":
response = "Een conjunctie is een voegwoord dat zinnen of zinsdelen met elkaar verbindt, zoals 'en', 'maar', 'omdat'.";
break;

case "bijvoeglijk naamwoord":
response = "Een bijvoeglijk naamwoord geeft een eigenschap, kenmerk of toestand van een zelfstandig naamwoord aan, bijvoorbeeld 'mooi' in 'een mooie bloem'.";
break;

case "zelfstandig naamwoord":
case "zelfstandig naamwoorden":    
response = "Een zelfstandig naamwoord noemt een persoon, plaats, ding of idee, zoals 'huis', 'auto', 'liefde'.";
break;

case "voornaamwoord":
case "voornaamwoorden":    
response = "Een voornaamwoord vervangt of verwijst naar een zelfstandig naamwoord, zoals 'ik', 'jij', 'hij', 'ons'.";
break;

case "wederkerend voornaamwoord":
case "wederkerend voornaamwoorden":    
response = "Een wederkerend voornaamwoord verwijst naar het onderwerp van de zin en is vaak 'zich', bijvoorbeeld 'zich wassen' in 'Hij wast zich'.";
break;

case "wederkerig voornaamwoord":
case "wederkerig voornaamwoorden":    
response = "Een wederkerig voornaamwoord drukt een wederzijdse handeling uit, bijvoorbeeld 'elkaar' in 'Zij helpen elkaar'.";
break;

case "aanwijzend voornaamwoord":
case "aanwijzend voornaamwoorden":        
response = "Een aanwijzend voornaamwoord wijst iets of iemand aan, zoals 'deze', 'die', 'dat', 'dit'.";
break;

case "betrekkelijk voornaamwoord":
case "betrekkelijk voornaamwoorden":    
response = "Een betrekkelijk voornaamwoord verwijst naar een eerder genoemd woord of zinsdeel en leidt een bijzin in, bijvoorbeeld 'die', 'dat', 'wie', 'wat'.";
break;

case "onbepaald voornaamwoord":
case "onbepaald voornaamwoorden":    
response = "Een onbepaald voornaamwoord verwijst vaag naar personen of dingen zonder ze precies te benoemen, zoals 'iemand', 'niemand', 'iets', 'niets'.";
break;

case "tussenwerpsel":
case "tussenwerpsels":    
response = "Een tussenwerpsel is een woord of uitroep dat vaak emotie of een reactie uitdrukt, zoals 'oh', 'au', 'hoera'.";
break;

case "lidwoord":
case "lidwoorden":    
response = "Een lidwoord gaat vooraf aan een zelfstandig naamwoord en geeft bepaaldheid aan, zoals 'de', 'het', 'een'.";
break;

case "koppelwerkwoord":
case "koppelwerkwoorden":   
response = "Een koppelwerkwoord verbindt het onderwerp van de zin met een naamwoordelijk deel dat iets over het onderwerp zegt, zoals 'is' in 'De hond is groot'.";
break;

case "werkwoordstijd":
case "werkwoordenstijden":    
response = "Werkwoordstijd verwijst naar het moment van de handeling ten opzichte van het spreken, zoals verleden, tegenwoordige of toekomende tijd.";
break;

case "gebiedende wijs":
case "wat is een gebiedend wijs.":    
response = "De gebiedende wijs, ook wel imperatief genoemd, wordt gebruikt om bevelen, verzoeken of instructies te geven, zoals 'Kom hier!' of 'Luister!'.";
break;

case "voltooide tijd":
case "wat is een voltooid tijd.":    
response = "De voltooide tijd geeft aan dat een handeling is afgerond op het moment van spreken, vaak gevormd met 'hebben' of 'zijn' plus het voltooid deelwoord, bijvoorbeeld 'ik heb gegeten'.";
break;

case "onvoltooide tijd":
response = "De onvoltooide tijd, ook wel simple past genoemd, geeft een handeling aan die in het verleden is gebeurd maar niet is afgerond op het moment van spreken, zoals 'ik at' of 'ik liep'.";
break;

case "toekomende tijd":
response = "De toekomende tijd geeft aan dat een handeling in de toekomst zal plaatsvinden, vaak gevormd met 'zullen' plus het infinitief, bijvoorbeeld 'ik zal gaan'.";
break;

case "woordvolgorde.":
response = "Woordvolgorde verwijst naar de volgorde van woorden in een zin, die in het Nederlands meestal 'onderwerp - werkwoord - rest' is, bijvoorbeeld 'Ik eet een appel'.";
break;

case "nevenschikking":
response = "Nevenschikking verbindt gelijkwaardige zinnen of zinsdelen zonder dat de ene van de andere afhankelijk is, bijvoorbeeld 'Ik eet een appel en ik drink water'.";
break;

case "onderschikking":
response = "Onderschikking verbindt een bijzin met een hoofdzin waarbij de bijzin afhankelijk is van de hoofdzin, bijvoorbeeld 'Ik eet een appel omdat ik honger heb'.";
break;

case "zinsdeel":
case "zinsdelen":    
response = "Een zinsdeel is een groep woorden die samen een bepaalde functie in de zin vervullen, zoals onderwerp, gezegde of bijwoordelijke bepaling.";
break;

case "woordgroep":
case "woordgroepen":    
response = "Een woordgroep is een combinatie van woorden die samen een syntactische eenheid vormen, zoals een zelfstandig naamwoord met een bijvoeglijk naamwoord ('een mooie bloem').";
break;

case "directe rede":
response = "De directe rede geeft letterlijk weer wat iemand zegt of heeft gezegd, bijvoorbeeld 'Hij zei: “Ik kom morgen”";
break;

case "indirecte rede":
response = "De indirecte rede geeft de inhoud van iemands woorden weer zonder deze letterlijk te citeren, bijvoorbeeld 'Hij zei dat hij morgen zou komen'.";
break;

case "vraagzin":
case "vraagzinnen":    
response = "Een vraagzin is een zin die een vraag stelt en meestal eindigt met een vraagteken, bijvoorbeeld 'Kom je morgen?'.";
break;

case "bijvoeglijk naamwoord":
case "bijvoeglijk naamwoorden":    
response = "Een bijvoeglijk naamwoord geeft een eigenschap, kenmerk of toestand van een zelfstandig naamwoord aan, bijvoorbeeld 'mooi' in 'een mooie bloem'.";
break;

case "zelfstandig naamwoord":
case "zelfstandig naamwoorden":    
response = "Een zelfstandig naamwoord noemt een persoon, plaats, ding of idee, zoals 'huis', 'auto', 'liefde'.";
break;

case "voornaamwoord":
case "voornaamwoorden":    
response = "Een voornaamwoord vervangt of verwijst naar een zelfstandig naamwoord, zoals 'ik', 'jij', 'hij', 'ons'.";
break;

case "wederkerend voornaamwoord":
case "wederkerend voornaamwoorden":    
response = "Een wederkerend voornaamwoord verwijst naar het onderwerp van de zin en is vaak 'zich', bijvoorbeeld 'zich wassen' in 'Hij wast zich'.";
break;

case "wederkerig voornaamwoord":
case "wederkerig voornaamwoorden":    
response = "Een wederkerig voornaamwoord drukt een wederzijdse handeling uit, bijvoorbeeld 'elkaar' in 'Zij helpen elkaar'.";
break;

case "wat zijn aanwijzende voornaamwoorden?":
response = "Een aanwijzend voornaamwoord wijst iets of iemand aan, zoals 'deze', 'die', 'dat', 'dit'.";
break;

case "betrekkelijk voornaamwoord":
response = "Een betrekkelijk voornaamwoord verwijst naar een eerder genoemd woord of zinsdeel en leidt een bijzin in, bijvoorbeeld 'die', 'dat', 'wie', 'wat'.";
break;

case "onbepaald voornaamwoord":
response = "Een onbepaald voornaamwoord verwijst vaag naar personen of dingen zonder ze precies te benoemen, zoals 'iemand', 'niemand', 'iets', 'niets'.";
break;

case "tussenwerpsel":
response = "Een tussenwerpsel is een woord of uitroep dat vaak emotie of een reactie uitdrukt, zoals 'oh', 'au', 'hoera'.";
break;

case "lidwoord":
response = "Een lidwoord gaat vooraf aan een zelfstandig naamwoord en geeft bepaaldheid aan, zoals 'de', 'het', 'een'.";
break;

case "werkwoordstijd":
response = "Werkwoordstijd verwijst naar het moment van de handeling ten opzichte van het spreken, zoals verleden, tegenwoordige of toekomende tijd.";
break;

case "gebiedende wijs":
response = "De gebiedende wijs, ook wel imperatief genoemd, wordt gebruikt om bevelen, verzoeken of instructies te geven, zoals 'Kom hier!' of 'Luister!'.";
break;

case "voltooide tijd":
response = "De voltooide tijd geeft aan dat een handeling is afgerond op het moment van spreken, vaak gevormd met 'hebben' of 'zijn' plus het voltooid deelwoord, bijvoorbeeld 'ik heb gegeten'.";
break;

case "onvoltooide tijd":
response = "De onvoltooide tijd, ook wel simple past genoemd, geeft een handeling aan die in het verleden is gebeurd maar niet is afgerond op het moment van spreken, zoals 'ik at' of 'ik liep'.";
break;

case "toekomende tijd":
response = "De toekomende tijd geeft aan dat een handeling in de toekomst zal plaatsvinden, vaak gevormd met 'zullen' plus het infinitief, bijvoorbeeld 'ik zal gaan'.";
break;

case "woordvolgorde":
response = "Woordvolgorde verwijst naar de volgorde van woorden in een zin, die in het Nederlands meestal 'onderwerp - werkwoord - rest' is, bijvoorbeeld 'Ik eet een appel'.";
break;

case "nevenschikking":
response = "Nevenschikking verbindt gelijkwaardige zinnen of zinsdelen zonder dat de ene van de andere afhankelijk is, bijvoorbeeld 'Ik eet een appel en ik drink water'.";
break;

case "onderschikking":
response = "Onderschikking verbindt een bijzin met een hoofdzin waarbij de bijzin afhankelijk is van de hoofdzin, bijvoorbeeld 'Ik eet een appel omdat ik honger heb'.";
break;

case "zinsdeel":
response = "Een zinsdeel is een groep woorden die samen een bepaalde functie in de zin vervullen, zoals onderwerp, gezegde of bijwoordelijke bepaling.";
break;

case "woordgroep":
response = "Een woordgroep is een combinatie van woorden die samen een syntactische eenheid vormen, zoals een zelfstandig naamwoord met een bijvoeglijk naamwoord ('een mooie bloem').";
break;

case "directe rede":
response = "De directe rede geeft letterlijk weer wat iemand zegt of heeft gezegd, bijvoorbeeld 'Hij zei: “Ik kom morgen”.'.";
break;

case "indirecte rede":
response = "De indirecte rede geeft de inhoud van iemands woorden weer zonder deze letterlijk te citeren, bijvoorbeeld 'Hij zei dat hij morgen zou komen'.";
break;

case "vraagzin":
response = "Een vraagzin is een zin die een vraag stelt en meestal eindigt met een vraagteken, bijvoorbeeld 'Kom je morgen?'.";
break;

case "tussenwerpsel":
response = "Een tussenwerpsel is een uitroep of woord dat meestal emotie uitdrukt en los staat van de grammaticale structuur van de zin, zoals 'Wow!', 'Au!', 'Oh!'.";
break;

case "inversie":
response = "Inversie is de omkering van de normale woordvolgorde, vaak gebruikt in vragen of na bepaalde voegwoorden, bijvoorbeeld 'Kom je morgen?' of 'Daar liep de kat'.";
break;

case "enclisis":
response = "Enclisis is de verschuiving van een woord dat fonetisch aan een voorafgaand woord wordt vastgeplakt, zoals 'ga' in 'Ga je mee?'.";
break;

case "proclisis":
response = "Proclisis is de verschuiving van een woord dat fonetisch aan een volgend woord wordt vastgeplakt, zoals 'het' in 'Het is mooi weer'.";
break;

case "woordenboek":
response = "Een woordenboek is een naslagwerk dat de betekenis, uitspraak, en vaak ook de oorsprong en gebruik van woorden beschrijft.";
break;

case "lexicon":
response = "Een lexicon is een verzameling van woorden en termen binnen een specifiek vakgebied of taal, zoals een medische lexicon.";
break;

case "semantiek":
response = "Semantiek is de studie van betekenis in taal, hoe woorden en zinnen betekenis krijgen en hoe deze betekenis wordt begrepen.";
break;

case "morfologie":
response = "Morfologie bestudeert de structuur van woorden en hoe ze zijn opgebouwd uit morfemen, de kleinste betekenisvolle eenheden.";
break;

case "syntaxis":
response = "Syntaxis is de studie van de regels en principes die bepalen hoe woorden samen zinnen vormen.";
break;

case "pragmatiek":
response = "Pragmatiek onderzoekt hoe context invloed heeft op de interpretatie van taal en hoe taalgebruik varieert afhankelijk van de situatie.";
break;

case "fonologie":
response = "Fonologie bestudeert het systeem van klanken in een taal en hoe ze gebruikt worden om betekenis te onderscheiden.";
break;

case "fonetiek":
response = "Fonetiek onderzoekt de fysieke eigenschappen van spraakklanken, zoals hoe ze worden geproduceerd en waargenomen.";
break;

case "stijlfiguren":
response = "Stijlfiguren zijn literaire technieken die schrijvers gebruiken om effecten te creëren, zoals metaforen, alliteratie, hyperbool, etc.";
break;

case "metafoor":
response = "Een metafoor is een stijlfiguur waarbij een woord of uitdrukking in een overdrachtelijke betekenis wordt gebruikt, bijvoorbeeld 'De wereld is een toneel'.";
break;

case "hyperbool":
response = "Een hyperbool is een stijlfiguur die sterke overdrijving gebruikt om een punt te maken, zoals 'Ik heb een eeuw op je gewacht'.";
break;

case "eufemisme":
response = "Een eufemisme verzacht een onaangename waarheid of term, bijvoorbeeld 'heengaan' in plaats van 'sterven'.";
break;

case "paradox":
response = "Een paradox is een schijnbare tegenstelling die toch een diepere waarheid bevat, zoals 'Meer haast, minder snelheid'.";
break;

case "retorische vraag":
response = "Een retorische vraag is een vraag die niet echt om een antwoord vraagt, maar eerder een punt benadrukt, zoals 'Wie wil er niet gelukkig zijn?'.";
break;

case "alliteratie":
response = "Alliteratie is de herhaling van dezelfde klank aan het begin van naburige woorden, zoals 'Zeven zeldzame zebras'.";
break;

case "personificatie":
response = "Personificatie is een stijlfiguur waarbij niet-menselijke dingen menselijke eigenschappen krijgen, zoals 'De wind fluisterde door de bomen"
break;





//Code to learn about the schoolsubject Biology:
case "biologie":
case "help me met biologie!":
case "help me met biologie":
case "kan je me helpen met biologie?":
case "kan je me helpen met biologie":
case "help met biologie!":
case "help met biologie":
  response = "Oké! Als chatbot ben ik getraind op verschillende onderwerpen, waaronder Biologie. Over welk onderwerp wil je een uitleg?";
  break;

case "fotosynthese biologie":
case "fotosynthese":
case "wat is fotosynthese?":
case "wat is fotosynthese":
case "wat is fotosynthese biologie?":
case "wat is fotosynthese biologie":
case "kan je me uitleggen wat fotosynthese is?":
case "kan je me uitleggen wat fotosynthese is":
case "info over fotosynthese":
case "info fotosynthese":
case "fotosynthese informatie":
  response = "Fotosynthese is het proces waarbij planten water en koolstofdioxide (CO²) omzetten in zuurstof en glucose. Deze omzetting kan worden uitgevoerd als er genoeg energie uit zonlicht beschikbaar is. Heb je verder nog vragen over Biologie, of over een ander onderwerp?";
  break;
  
case "wat zijn bladgroenkorrels?":
case "wat zijn bladgroenkorrels":
case "bladgroenkorrels":
case "bladgroenkorrels biologie":
case "bladgroenkorrels in biologie":
case "info bladgroenkorrels":
case "info over bladgroenkorrels":
case "bladgroenkorrels informatie":
case "informatie bladgroenkorrels":
case "informatie over bladgroenkorrels":
case "kan je me vertellen wat bladgroenkorrels zijn?":
case "kan je me vertellen wat bladgroenkorrels zijn":
case "kan je me uitleggen wat bladgroenkorrels zijn?":
case "kan je me uitleggen wat bladgroenkorrels zijn":
  response = "Bladgroenkorrels zijn groene plastiden die voorkomen in de cellen van planten en algen. Hierin vindt de fotosynthese plaats, want de lichtenergie wordt namelijk omgezet in suikers. Ook hebben bladgroenkorrels eigen DNA.";
  break;


case "wat is omgekeerde fotosynthese?":
case "wat is omgekeerde fotosynthese":
case "omgekeerde fotosynthese":
case "omgekeerde fotosynthese biologie":
case "omgekeerde fotosynthese in biologie":
case "info omgekeerde fotosynthese":
case "info over omgekeerde fotosynthese":
case "omgekeerde fotosynthese informatie":
case "informatie omgekeerde fotosynthese":
case "informatie over omgekeerde fotosynthese":
case "kan je me vertellen wat omgekeerde fotosynthese is?":
case "kan je me vertellen wat omgekeerde fotosynthese is":
case "wat is dissimilatie?":
case "wat is dissimilatie":
case "dissimilatie":
case "dissimilatie biologie":
case "dissimilatie in biologie":
case "info dissimilatie":
case "info over dissimilatie":
case "dissimilatie informatie":
case "informatie dissimilatie":
case "informatie over dissimilatie":
case "kan je me vertellen wat dissimilatie is?":
case "kan je me vertellen wat dissimilatie is":
case "kan je me uitleggen wat dissimilatie is?":
case "kan je me uitleggen wat dissimilatie is":
  response = "Natuurlijk! Dissimilatie (ook wel omgekeerde fotosynthese genoemd) is het proces waarbij suikers worden verbrand door de ademhaling van o.a. de mensen. Deze suikers worden omgezet in CO² wat planten dan weer kunnen omzetten in zuurstof. Kan ik je verder nog ergens mee helpen?";
  break;

  
//End of the code of Biology




//Data to calculate some easy math-problems:
case "0+1":
response = "0 + 1 = 1";
break;
case "1+0":
response = "1 + 0 = 1";
break;
case "0+2":
response = "0 + 2 = 2";
break;
case "1+1":
response = "1 + 1 = 2";
break;
case "2+0":
response = "2 + 0 = 2";
break;
case "0+3":
response = "0 + 3 = 3";
break;
case "1+2":
response = "1 + 2 = 3";
break;

case "2+1":
response = "2 + 1 = 3";
break;
case "3+0":
response = "3 + 0 = 3";
break;
case "0+4":
response = "0 + 4 = 4";
break;
case "1+3":
response = "1 + 3 = 4";
break;
case "2+2":
response = "2 + 2 = 4";
break;
case "3+1":
response = "3 + 1 = 4";
break;
case "4+0":
response = "4 + 0 = 4";
break;
case "0+5":
response = "0 + 5 = 5";
break;
case "1+4":
response = "1 + 4 = 5";
break;
case "2+3":
response = "2 + 3 = 5";
break;
case "3+2":
response = "3 + 2 = 5";
break;
case "4+1":
response = "4 + 1 = 5";
break;
case "5+0":
response = "5 + 0 = 5";
break;


case "2-1":
response = "2 - 1 = 1";
break;
case "3-2":
response = "3 - 2 = 1";
break;
case "4-3":
response = "4 - 3 = 1";
break;
case "5-4":
response = "5 - 4 = 1";
break;
case "1-0":
response = "1 - 0 = 1";
break;
case "3-1":
response = "3 - 1 = 2";
break;
case "4-2":
response = "4 - 2 = 2";
break;
case "5-3":
response = "5 - 3 = 2";
break;
case "2-0":
response = "2 - 0 = 2";
break;
case "4-1":
response = "4 - 1 = 3";
break;
case "5-2":
response = "5 - 2 = 3";
break;
case "3-0":
response = "3 - 0 = 3";
break;
case "5-1":
response = "5 - 1 = 4";
break;
case "4-0":
response = "4 - 0 = 4";
break;
case "5-0":
response = "5 - 0 = 5";
break;


case "1*1":
case "1x1":    
response = "1 x 1 = 1";
break;
case "1*2":
case "1x2":
case "1 x 2":
case "1 * 2":        
response = "1 x 2 = 2";
break;
case "2 * 1":
response = "2 x 1 = 2";
break;
case "1 * 3":
response = "1 x 3 = 3";
break;
case "3 * 1":
response = "3 x 1 = 3";
break;
case "1 * 4":
response = "1 x 4 = 4";
break;
case "2 * 2":
response = "2 x 2 = 4";
break;
case "4 * 1":
response = "4 x 1 = 4";
break;
case "1 * 5":
response = "1 x 5 = 5";
break;
case "5 * 1":
response = "5 x 1 = 5";
break;
case "2.5 * 2":
response = "2.5 x 2 = 5";
break;
case "2 * 2.5":
response = "2 x 2.5 = 5";
break;
case "0.5 * 10":
response = "0.5 x 10 = 5";
break;
case "10 * 0.5":
response = "10 x 0.5 = 5";
break;


case "1 / 1":
response = "1 / 1 = 1";
break;
case "2 / 2":
response = "2 / 2 = 1";
break;
case "3 / 3":
response = "3 / 3 = 1";
break;
case "4 / 4":
response = "4 / 4 = 1";
break;
case "5 / 5":
response = "5 / 5 = 1";
break;
case "2 / 1":
response = "2 / 1 = 2";
break;
case "4 / 2":
response = "4 / 2 = 2";
break;
case "6 / 3":
response = "6 / 3 = 2";
break;
case "8 / 4":
response = "8 / 4 = 2";
break;
case "10 / 5":
response = "10 / 5 = 2";
break;
case "3 / 1":
response = "3 / 1 = 3";
break;
case "6 / 2":
response = "6 / 2 = 3";
break;
case "9 / 3":
response = "9 / 3 = 3";
break;
case "12 / 4":
response = "12 / 4 = 3";
break;
case "15 / 5":
response = "15 / 5 = 3";
break;
case "4 / 1":
response = "4 / 1 = 4";
break;
case "8 / 2":
response = "8 / 2 = 4";
break;
case "12 / 3":
response = "12 / 3 = 4";
break;
case "16 / 4":
response = "16 / 4 = 4";
break;
case "20 / 5":
response = "20 / 5 = 4";
break;
case "5 / 1":
response = "5 / 1 = 5";
break;
case "10 / 2":
response = "10 / 2 = 5";
break;
case "15 / 3":
response = "15 / 3 = 5";
break;
case "20 / 4":
response = "20 / 4 = 5";
break;
case "25 / 5":
response = "25 / 5 = 5";
break;
case "2.5 / 0.5":
response = "2.5 / 0.5 = 5";
break;






//Some information about AI and other complicated subjects:

case "hoe wordt een ai gebouwd?":
case "hoe wordt een ai gebouwd":
case "hoe wordt een ai gemaakt?":
case "hoe wordt een ai gemaakt":
case "hoe maak ik een eigen ai":
case "hoe maak ik een eigen ai?":
case "hoe maak ik een ai?":
case "hoe maak ik een ai":
response = "Een AI wordt gebouwd door gebruik te maken van algoritmes en data. Ontwikkelaars maken modellen en trainen deze met grote hoeveelheden gegevens, zodat de AI kan leren en beslissingen kan nemen op basis van patronen in die gegevens.";
break;

case "welke programmeertalen worden gebruikt voor ai?":
case "welke programmeertalen worden gebrukit voor ai":
case "welke programmeertaal wordt gebruikt voor ai?":
response = "Populaire programmeertalen voor AI zijn Python, Java, C++, JavaScript en Swift. Python is vooral populair vanwege zijn eenvoud en de beschikbaarheid van veel AI-bibliotheken zoals TensorFlow en PyTorch.";
break;

case "wat zijn machine learning-algoritmes?":
case "wat zijn machine learning-algoritmes":
case "wat is machine learning?":
response = "Machine learning-algoritmes zijn een subset van AI die het mogelijk maken voor systemen om te leren van gegevens en ervaringen, zonder expliciet geprogrammeerd te worden. Ze ontdekken patronen in gegevens en maken voorspellingen of beslissingen op basis daarvan.";
break;

case "wat is deep learning?":
case "wat is deep learning":
case "deep learning":
response = "Deep learning is een subveld van machine learning dat zich richt op het leren van representaties van data, in plaats van taak-specifieke algoritmes. Het maakt gebruik van neurale netwerken met meerdere lagen om complexe patronen in grote datasets te begrijpen.";
break;

case "wat zijn neurale netwerken?":
case "wat zijn neurale netwerken":
case "neurale netwerken":
case "wat is een neuraal netwerk?":
response = "Neurale netwerken zijn een model geïnspireerd op het menselijke brein, bestaande uit verbonden neuronen of knooppunten. Ze worden gebruikt in machine learning om taken uit te voeren zoals classificatie, patroonherkenning en voorspellingen.";
break;

case "hoe worden neurale netwerken getraind?":
case "hoe worden neurale netwerken getraind":
case "hoe train je een neuraal netwerk?":
case "hoe train je een neuraal netwerk":
case "trainingsperiode neuraal netwerk":
case "training neuraal netwerk":
response = "Neurale netwerken worden getraind door hen bloot te stellen aan grote hoeveelheden gelabelde gegevens. Tijdens het trainingsproces passen ze gewichten aan tussen hun neuronen om de nauwkeurigheid van hun voorspellingen te verbeteren.";
break;

case "wat is supervised learning?":
case "wat is supervised learning":
case "supervised learning":
case "supervised learning ai":
response = "Supervised learning is een vorm van machine learning waarbij het model wordt getraind op gelabelde gegevens. Het leert van voorbeelden waarbij het juiste antwoord bekend is, en probeert nieuwe data te voorspellen op basis van wat het heeft geleerd.";
break;

case "wat is unsupervised learning?":
case "wat is unsupervised learning":
case "unsupervised learning":
response = "Unsupervised learning is een vorm van machine learning waarbij het model wordt getraind op ongelabelde gegevens. Het ontdekt verborgen patronen of structuren in de data zonder dat er vooraf bekende uitkomsten zijn.";
break;

case "wat is reinforcement learning?":
case "wat is reinforcement learning":
case "reinforcement learning":
response = "Reinforcement learning is een paradigma van machine learning waarbij een agent leert om beslissingen te nemen in een omgeving om een bepaald doel te bereiken. Het model ontvangt beloningen of straffen op basis van zijn acties, wat helpt bij het optimaliseren van zijn gedrag.";
break;

case "hoe wordt reinforcement learning toegepast?":
case "hoe wordt reinforcement learning toegepast":
response = "Reinforcement learning wordt toegepast in situaties zoals robotica, games en autonome systemen. Het kan worden gebruikt om robotbewegingen te optimaliseren, strategieën in games te ontwikkelen of zelfrijdende auto's te trainen om veilig te rijden.";
break;

case "wat is natural language processing (nlp)?":
case "wat is natural language processing?":
case "wat is natural language processing (nlp)":
case "wat is natural language processing":
case "natural language processing":
case "nlp":
case "wat is nlp?":
case "wat is nlp":
response = "Natural Language Processing (NLP) is een tak van kunstmatige intelligentie die zich richt op het begrijpen en verwerken van natuurlijke taal door computers. Het omvat taken zoals tekstvertaling, sentimentanalyse, samenvattingen maken en chatbots bouwen.";
break;

case "hoe wordt natural language processing toegepast?":
case "hoe wordt natural language processing toegepast":
response = "NLP wordt toegepast in verschillende toepassingen zoals virtuele assistenten (zoals Siri en Alexa), vertaaltools, zoekmachines en spamfilters. Het helpt computers om tekstuele informatie te begrijpen en erop te reageren op een manier die nuttig is voor gebruikers.";
break;

case "wat zijn ai-bibliotheken en frameworks?":
case "wat zijn ai-bibliotheken en frameworks":
case "ai-bibliotheken":
case "ai bibliotheek":
case "frameworks":
response = "AI-bibliotheken en frameworks zijn sets van tools, bibliotheken en modules die ontwikkelaars helpen bij het bouwen en implementeren van AI-modellen. Voorbeelden zijn TensorFlow, PyTorch, Keras, Scikit-learn en NLTK.";
break;

case "wat is tensorflow?":
case "wat is tensorflow":
case "ken je tensorflow?":
case "ken je tensorflow":
case "tensorflow":
case "ts":
case "tensorflow ai":
response = "TensorFlow is een open-source machine learning-bibliotheek ontwikkeld door Google. Het wordt gebruikt voor verschillende AI-toepassingen zoals neurale netwerken, deep learning en natural language processing.";
break;

case "wat is pytorch?":
case "wat is pytorch":
case "pytorch":
response = "PyTorch is een open-source machine learning-bibliotheek die wordt gebruikt voor het bouwen van deep learning-modellen. Het is ontwikkeld door Facebook's AI Research lab (FAIR) en wordt gekenmerkt door zijn flexibiliteit en gebruiksvriendelijkheid.";
break;

case "wat is keras?":
case "wat is keras":
case "keras":
response = "Keras is een open-source neurale netwerken-bibliotheek die wordt gebruikt als een high-level API voor deep learning. Het biedt een eenvoudige interface voor het bouwen en trainen van neurale netwerken met verschillende backends, waaronder TensorFlow en Theano.";
break;

case "wat is scikit-learn?":
case "wat is scikit-learn":
case "scikit-learn":
response = "Scikit-learn is een populaire machine learning-bibliotheek voor Python. Het biedt eenvoudige en efficiënte tools voor data mining en data-analyse, en ondersteunt een breed scala aan supervised en unsupervised learning-algoritmes.";
break;

case "wat is natural language understanding (nlu)?":
case "wat is natural language understanding (nlu)":
case "wat is natural language understanding?":
case "wat is natural language understanding":
case "wat is nlu":
case "wat is nlu?":
case "nlu":
case "nlu ai":
response = "Natural Language Understanding (NLU) is een subset van NLP die zich richt op het begrijpen van de betekenis en intentie achter natuurlijke taaluitingen. Het omvat taken zoals entiteiten herkennen, sentimentanalyse en semantische analyse.";
break;

case "wat zijn chatbots?":
case "wat zijn chatbots":
case "wat is een chatbot?":
case "wat is een chatbot":
case "chatbot":
case 'chatbots':
response = "Chatbots zijn geautomatiseerde programma's die zijn ontworpen om te communiceren met gebruikers via tekstuele of gesproken interacties. Ze worden vaak gebruikt voor klantenservice, informatievoorziening en online assistentie.";
break;

case "hoe werken chatbots?":
case "hoe werken chatbots":
case "hoe werkt een chatbot?":
case "hoe werkt een chatbot":
case "werking van een chatbot":
case "werking chatbot":
response = "Chatbots werken door gebruik te maken van natuurlijke taalverwerking en kunstmatige intelligentie om vragen van gebruikers te begrijpen en te beantwoorden. Ze kunnen reageren op vooraf gedefinieerde vragen of leren van interacties om hun reacties te verbeteren.";
break;

case "wat is computer vision?":
case "wat is computer vision":
case "hoe werkt computer vision?":
case "hoe werkt computer vision":
case "computer vision":
response = "Computer vision is een tak van kunstmatige intelligentie die zich bezighoudt met het begrijpen en interpreteren van visuele informatie uit de echte wereld. Het omvat taken zoals objectherkenning, gezichtsherkenning en beeldclassificatie.";
break;

case "hoe wordt computer vision toegepast?":
case "hoe wordt computer vision toegepast":
case "hoe wordt computer vision gebruikt?":
case "hoe wordt computer vision gebruikt":
response = "Computer vision wordt toegepast in domeinen zoals zelfrijdende auto's, bewakingssystemen, medische beeldvorming en augmented reality. Het helpt computers om visuele gegevens te analyseren en te begrijpen, waardoor ze kunnen reageren op de visuele wereld om hen heen.";
break;

case "wat zijn de ethische overwegingen rond ai?":
case "wat zijn de ethische overwegingen rond ai":
case "ethische overwegingen ai":
case "ethische overwegingen rond ai":
response = "Ethische overwegingen rond AI omvatten kwesties zoals privacy, bias in algoritmes, werkgelegenheidseffecten, verantwoordelijkheid voor beslissingen en de impact op sociale structuren. Het is belangrijk om deze kwesties te adresseren bij de ontwikkeling en implementatie van AI-systemen.";
break;

case "hoe worden ai-modellen geëvalueerd?":
case "hoe worden ai-modellen geëvalueerd":
case "evaluatie ai-modellen":
response = "AI-modellen worden geëvalueerd op basis van criteria zoals nauwkeurigheid, precisie, recall en F1-score, afhankelijk van het type taak dat ze uitvoeren. Validatie- en testdatasets worden gebruikt om de prestaties van het model te meten en te verbeteren.";
break;

case "wat is ai-ethiek?":
case "wat is ai-ethiek":
case "ai-ethiek":
response = "AI-ethiek verwijst naar de studie van de morele kwesties en principes die betrokken zijn bij de ontwikkeling en toepassing van kunstmatige intelligentie. Het omvat onderwerpen zoals privacy, transparantie, bias, verantwoordelijkheid en de impact van AI op de samenleving.";
break;

case "wat zijn voorbeelden van ai-toepassingen in het dagelijks leven?":
response = "AI-toepassingen zijn overal te vinden, zoals in zoekmachines, aanbevelingssystemen voor films en muziek, spraakassistenten, automatische vertalingen, fraudepreventie bij banken, gezichtsherkenning op sociale media, en zelfs in zelfrijdende auto's.";
break;

case "wat is het verschil tussen ai, machine learning en deep learning?":
response = "AI is het bredere concept van machines die taken uitvoeren die normaal gesproken menselijke intelligentie vereisen. Machine learning is een subset van AI waarbij systemen leren van data zonder expliciet geprogrammeerd te worden. Deep learning is weer een subset van machine learning dat gebruik maakt van neurale netwerken met meerdere lagen om complexe patronen in data te begrijpen.";
break;

case "wat is de turing-test voor ai?":
case "wat is de turing-test voor ai":
case "turing-test":
case "turing-test ai":
response = "De Turing-test is een test bedacht door Alan Turing om de capaciteit van een machine te beoordelen om intelligent gedrag te vertonen dat niet te onderscheiden is van dat van een mens. Als een machine slaagt voor deze test, wordt deze beschouwd als intelligent.";
break;

case "wat zijn ai-algoritmes?":
response = "AI-algoritmes zijn wiskundige instructies die worden gebruikt om taken uit te voeren in kunstmatige intelligentie, zoals patroonherkenning, besluitvorming en probleemoplossing. Voorbeelden zijn lineaire regressie, beslissingsbomen, neurale netwerken en reinforcement learning-algoritmes.";
break;

case "hoe wordt ai gebruikt in de gezondheidszorg?":
response = "AI wordt gebruikt in de gezondheidszorg voor taken zoals medische beeldanalyse, het voorspellen van ziekterisico's, personalisatie van behandelingen, robotchirurgie, en het verbeteren van klinische besluitvorming.";
break;

case "wat zijn de uitdagingen van ai-ontwikkeling?":
response = "Uitdagingen in AI-ontwikkeling omvatten het verkrijgen van grote hoeveelheden kwaliteitsdata, het beheren van rekenkracht voor training, het omgaan met ethische en privacykwesties, het verminderen van bias in algoritmes, en het begrijpen van de complexiteit van AI-modellen.";
break;

case "hoe kan ai helpen bij milieubescherming?":
response = "AI kan worden ingezet voor milieubescherming door middel van het monitoren van ecosystemen, het voorspellen van natuurrampen, het analyseren van klimaatgegevens, het optimaliseren van energieverbruik en het verbeteren van landbouwtechnieken.";
break;

case "wat zijn ai-technologieën in de landbouw?":
response = "AI-technologieën in de landbouw omvatten precisielandbouw met behulp van drones en sensoren, het voorspellen van oogstopbrengsten, het optimaliseren van watergebruik, het identificeren van ziekten bij gewassen, en het automatiseren van oogst- en plantprocessen.";
break;

case "wat is het belang van ai in cybersecurity?":
response = "AI speelt een belangrijke rol in cybersecurity door het detecteren van bedreigingen, het voorkomen van frauduleuze activiteiten, het beschermen van gegevens en netwerken tegen aanvallen, en het verbeteren van de respons op cyberincidenten.";
break;

case "wat zijn voorbeelden van ai in de financiële sector?":
response = "AI wordt gebruikt in de financiële sector voor fraudedetectie, risicobeoordeling, het voorspellen van markttrends, het personaliseren van klantenservice, het automatiseren van handelsstrategieën, en het verbeteren van financiële analyses en besluitvorming.";
break;

case "hoe kan ai helpen bij onderwijs en leren?":
response = "AI kan helpen bij onderwijs door gepersonaliseerde leertrajecten aan te bieden, automatisch beoordelingen te maken, onderwijsmaterialen te verbeteren, virtuele tutors te bieden, en inzicht te geven in het leerproces van studenten.";
break;

case "wat zijn de voordelen van ai in de transportsector?":
response = "AI biedt voordelen in de transportsector zoals routeoptimalisatie, voorspellend onderhoud van voertuigen, autonome voertuigen, verkeersvoorspellingen, verbeterde logistiek en efficiëntere openbaar vervoerssystemen.";
break;

case "wat zijn ai-technologieën in de entertainmentindustrie?":
response = "AI-technologieën in de entertainmentindustrie omvatten gepersonaliseerde contentaanbevelingen, automatische contentcreatie, gezichts- en stemherkenning voor interactieve ervaringen, en de ontwikkeling van AI-gestuurde virtuele karakters.";
break;

case "hoe kan ai bijdragen aan stedelijke planning?":
response = "AI kan bijdragen aan stedelijke planning door middel van verkeersvoorspellingen, energie-efficiëntie-analyses, het optimaliseren van stadsdiensten zoals water- en afvalbeheer, en het bieden van inzicht in de behoeften en gedragingen van stadsbewoners.";
break;

case "Wat zijn AI-toepassingen in de retailsector?":
response = "AI-toepassingen in de retailsector omvatten personalisatie van aanbiedingen, voorraadbeheer, voorspelling van consumententrends, prijsstellingsoptimalisatie, klantenservice via chatbots, en het verbeteren van de winkelervaring.";
break;

case "Hoe kunnen AI en IoT samenwerken?":
response = "AI en IoT (Internet of Things) kunnen samenwerken door IoT-apparaten te gebruiken om gegevens te verzamelen en AI-algoritmes te gebruiken om die gegevens te analyseren, te interpreteren en er acties op te baseren, zoals het automatiseren van huishoudelijke apparaten of het optimaliseren van industriële processen.";
break;

case "Wat zijn AI-technologieën in de energiesector?":
response = "AI-technologieën in de energiesector omvatten het optimaliseren van energieproductie en -distributie, het voorspellen van energieverbruik, het verbeteren van energie-efficiëntie, en het ondersteunen van slimme netwerken en duurzame energiebronnen.";
break;

case "Wat zijn AI-gebaseerde creatieve toepassingen?":
response = "AI-gebaseerde creatieve toepassingen omvatten kunstgeneratie, muziekcompositie, filmproductie, modeontwerp, en andere vormen van artistieke creatie waarbij AI wordt gebruikt om nieuwe ideeën te verkennen en traditionele creatieve processen aan te vullen.";
break;

case "Hoe kan AI bijdragen aan sociale rechtvaardigheid?":
response = "AI kan bijdragen aan sociale rechtvaardigheid door middel van het identificeren van vooroordelen in besluitvormingsprocessen, het verbeteren van toegang tot juridische diensten, het analyseren van sociale problemen zoals armoede en ongelijkheid, en het ondersteunen van beleidsvorming voor meer inclusieve samenlevingen.";
break;

case "Wat zijn AI-technologieën in de ruimteverkenning?":
response = "AI-technologieën worden gebruikt in de ruimteverkenning voor taken zoals autonome navigatie van ruimtevaartuigen, beeldanalyse van planetaire oppervlakken, het monitoren van ruimteweer, en het plannen van missies naar verre planeten en asteroïden.";
break;

case "Wat zijn atomen?":
response = "Atomen zijn de fundamentele bouwstenen van materie. Ze bestaan uit een kern van protonen (positief geladen) en neutronen (neutraal geladen), omringd door elektronen (negatief geladen) die in verschillende energieniveaus rond de kern bewegen.";
break;

case "Hoe worden atomen geclassificeerd?":
response = "Atomen worden geclassificeerd op basis van het aantal protonen in hun kern, wat hun atoomnummer bepaalt. Dit aantal bepaalt het element waar het atoom toe behoort. Elementen verschillen in eigenschappen zoals massa, lading en chemische reactiviteit.";
break;
case "Wat zijn moleculen?":
response = "Moleculen zijn de kleinste eenheden van een chemische stof die nog steeds alle chemische eigenschappen van die stof bezitten. Ze bestaan uit twee of meer atomen die chemisch aan elkaar gebonden zijn.";
break;
case "Hoe worden moleculen gevormd?":
response = "Moleculen worden gevormd door atomen die chemische bindingen aangaan, waarbij ze elektronen delen of overdragen om stabiele structuren te vormen. Dit proces creëert moleculen met unieke eigenschappen en functies.";
break;
case "Wat zijn bacteriën?":
response = "Bacteriën zijn microscopisch kleine, eencellige organismen die tot het domein van prokaryoten behoren. Ze zijn wijdverspreid in de natuur en kunnen zowel schadelijke pathogenen als nuttige symbionten zijn voor mens en milieu.";
break;
case "Hoe worden bacteriën geclassificeerd?":
response = "Bacteriën worden geclassificeerd op basis van hun morfologische kenmerken (vorm en grootte), hun biochemische eigenschappen (metabolisme), en hun genetische samenstelling. Classificatie kan ook gebaseerd zijn op pathogeniteit en het vermogen om ziekten te veroorzaken.";
break;
case "Wat is de rol van bacteriën in de natuur?":
response = "Bacteriën spelen een cruciale rol in de natuurlijke ecosystemen door deel te nemen aan stikstofcyclus, afbraak van organisch materiaal, productie van voedingsstoffen, en als symbionten in menselijke en dierlijke darmen.";
break;
case "Wat zijn virussen?":
response = "Virussen zijn kleine infectieuze deeltjes die parasiteren op levende cellen om te reproduceren. Ze bestaan uit genetisch materiaal (DNA of RNA) omgeven door een eiwitmantel. Virussen kunnen ziekten veroorzaken bij mensen, dieren, planten en bacteriën.";
break;
case "Wat is het verschil tussen bacteriën en virussen?":
response = "Bacteriën zijn eencellige organismen die zelfstandig kunnen leven en zichzelf kunnen repliceren. Virussen zijn geen levende organismen en hebben een gastheercel nodig om zich te vermenigvuldigen. Bacteriën hebben een celstructuur, terwijl virussen dat niet hebben.";
break;
case "Hoe worden virussen geclassificeerd?":
response = "Virussen worden geclassificeerd op basis van hun genetische materiaal (DNA of RNA), hun vorm (helixvormig, kubisch, complex), hun gastheerspectrum (welke organismen ze infecteren) en andere kenmerken zoals hun replicatiestrategieën.";
break;
case "Wat is immunologie?":
response = "Immunologie is de tak van de biologie die zich bezighoudt met het immuunsysteem, dat verantwoordelijk is voor de verdediging van het lichaam tegen ziekteverwekkers zoals bacteriën, virussen en parasieten. Het bestudeert ook immuungemedieerde ziekten en immuunresponsen.";
break;
case "Wat zijn antilichamen?":
response = "Antilichamen, ook bekend als immunoglobulinen, zijn eiwitten geproduceerd door het immuunsysteem in reactie op antigenen (vreemde stoffen). Ze spelen een cruciale rol in het herkennen en neutraliseren van pathogenen en andere schadelijke stoffen in het lichaam.";
break;
case "Wat is vaccinatie?":
response = "Vaccinatie is het proces waarbij een vaccin wordt toegediend om immuniteit tegen een bepaalde ziekte op te wekken. Vaccins bevatten verzwakte of gedode pathogenen of delen ervan, waardoor het immuunsysteem een immuungeheugen ontwikkelt zonder daadwerkelijk ziek te worden.";
break;
case "Hoe werken antibiotica?":
response = "Antibiotica zijn medicijnen die bacteriële infecties behandelen door bacteriën te doden of hun groei te remmen. Ze werken door in te grijpen in specifieke bacteriële processen, zoals celwandvorming of eiwitsynthese, waardoor de bacteriën worden vernietigd.";
break;
case "Wat is de microbiota?":
response = "De microbiota verwijst naar de gemeenschap van micro-organismen die op en in het menselijk lichaam leven, zoals bacteriën, virussen, schimmels en andere organismen. Het speelt een belangrijke rol in de spijsvertering, immuniteit en algemene gezondheid van de gastheer.";
break;
case "Hoe kunnen bacteriën nuttig zijn voor de mens?":
response = "Bacteriën zijn nuttig voor de menselijke gezondheid en industrie door deelname aan de spijsvertering, productie van vitaminen, afbraak van afvalstoffen, productie van medicijnen zoals antibiotica, en als probiotica om de darmgezondheid te bevorderen.";
break;
case "Wat is microbiologie?":
response = "Microbiologie is de wetenschap die zich bezighoudt met de studie van micro-organismen, zoals bacteriën, virussen, schimmels en parasieten. Het onderzoekt hun structuur, functie, distributie, evolutie, en hun interacties met andere organismen en hun omgeving.";
break;
    
case "Wat zijn hormonen?":
response = "Hormonen zijn chemische boodschappers die door endocriene klieren worden geproduceerd en via de bloedbaan worden vervoerd naar doelcellen in het lichaam, waar ze verschillende processen reguleren zoals groei, metabolisme, reproductie en stressrespons.";
break;
    
case "Hoe functioneert het menselijk spijsverteringssysteem?":
response = "Het menselijk spijsverteringssysteem begint met de verwerking van voedsel in de mond, waar het wordt gekauwd en gemengd met speeksel. Vervolgens gaat het door de slokdarm naar de maag, waar maagzuur en enzymen voedsel afbreken tot voedingsstoffen die in de darmen worden opgenomen.";
break;
    
case "Wat is DNA?":
response = "DNA (deoxyribonucleic acid) is een molecuul dat genetische instructies bevat voor de ontwikkeling, groei, functionering en voortplanting van alle bekende levende organismen en virussen. Het bestaat uit twee lange ketens van nucleotiden die een dubbele helix vormen.";
break;
    
//End of complicated subjects






//Information about computers and components:

case "wat is een cpu?":
case "wat is een cpu":
case "cpu":
case "processor":
response = "Een CPU (Central Processing Unit) is het brein van een computer. Het voert instructies uit die nodig zijn om softwareprogramma's te laten werken.";
break;

case "hoe werkt een cpu?":
case "hoe werkt een cpu":
case "werking cpu":
response = "Een CPU verwerkt gegevens door instructies uit het geheugen te halen, deze te decoderen en uit te voeren. Het voert berekeningen uit en coördineert alle activiteiten in een computer.";
break;

case "wat zijn de verschillende soorten cpu's?":
case "wat zijn de verschillende soorten cpu's":
case "verschillende soorten cpu's":
case "soorten cpu's":
response = "Er zijn verschillende soorten CPU's, waaronder Intel Core i-serie, AMD Ryzen-serie, en Intel Xeon voor servers. Ze verschillen in prestaties, energieverbruik en functies. De eerder genoemde CPU's zijn vaak voor computers, maar zo heb je ook een Snapdragon, Apple A, Samsung Exynos en MediaTek Demensity chips die meestal in telefoons worden gebruikt.";
break;

case "wat is overklokken van een cpu?":
case "wat is overklokken van een cpu":
case "overklokken cpu":
case "wat is het overklokken van een cpu?":
case "wat is het overklokken van een cpu":
response = "Overklokken is het verhogen van de kloksnelheid van een CPU om betere prestaties te krijgen. Het kan de snelheid van berekeningen verhogen, maar vereist goede koeling en kan de levensduur van de CPU verkorten.";
break;

case "wat is het belang van cachegeheugen in een cpu?":
case "wat is het belang van cachegeheugen in een cpu":
case "cachegeheugen cpu":
response = "Cachegeheugen in een CPU is snel geheugen dat wordt gebruikt om vaak gebruikte instructies en gegevens op te slaan, waardoor de toegangstijd tot deze informatie wordt verkort en de algehele prestaties worden verbeterd.";
break;

case "wat is een gpu?":
case "wat is een gpu":
case "gpu":
case "kan je me uitleggen wat een gpu is?":
case "kan je me uitleggen wat een gpu is":
response = "Een GPU (Graphics Processing Unit) is gespecialiseerd in het verwerken van grafische en visuele gegevens. Het wordt gebruikt voor 3D-rendering, video- en fotobewerking, en gaming.";
break;

case "wat zijn de verschillen tussen een gpu en een cpu?":
case "wat zijn de verschillen tussen een gpu en een cpu":
case "verschillen gpu en cpu":
case "gpu en cpu":
case "cpu en gpu":
response = "Een GPU is ontworpen voor parallelle verwerking van grote hoeveelheden gegevens voor grafische toepassingen, terwijl een CPU algemene taken uitvoert en complexe berekeningen afhandelt.";
break;

case "wat is ram?":
case "wat is ram":
case "ram":
case "kan je me vertellen wat ram is?":
case "kan je me vertellen wat ram is":
response = "RAM (Random Access Memory) is tijdelijk geheugen dat de computer gebruikt om actieve programma's en gegevens op te slaan, zodat ze snel toegankelijk zijn voor de CPU.";
break;

case "wat zijn de verschillende soorten ram-geheugen?":
case "verschillende soorten ram":
response = "Er zijn verschillende soorten RAM, waaronder DDR (Double Data Rate) SDRAM zoals DDR4 en DDR5, die verschillen in snelheid, energieverbruik en compatibiliteit met moederborden.";
break;

case "hoeveel ram heb ik nodig voor gaming?":
case "hoeveel ram heb ik nodig voor gaming":
case "hoeveel ram voor gaming?":
case "hoeveel ram voor gaming":
response = "Voor gaming wordt aanbevolen om minimaal 16 GB RAM te hebben, maar sommige games kunnen profiteren van meer RAM, vooral bij multitasking en het draaien van zware applicaties.";
break;

case "wat is een moederbord?":
case "wat is een moederbord":
case "moederbord":
case "kan je me vertellen wat een moederbord is?":
case "kan je me vertellen wat een moederbord is":
response = "Een moederbord is het hoofdcircuit van een computer waarop de CPU, RAM, GPU en andere hardwarecomponenten zijn gemonteerd en met elkaar communiceren.";
break;

case "wat is bios en hoe werkt het op een moederbord?":
case 'wat is een bios?':
case "wat is een bios":
case "bios":
case "kan je me vertellen wat een bios is?":
case "kan je me vertellen wat een bios is":
response = "BIOS (Basic Input/Output System) is firmware die op het moederbord is ingebouwd en essentiële systeemfuncties regelt, zoals het opstarten van de computer en het instellen van hardwareparameters. Ook wordt het besturingssysteem hiermee opgestart, zoals bijvoorbeeld Windows, MacOS en Linux.";
break;

case "wat zijn opslagapparaten?":
case "wat zijn opslagapparaten":
case "wat is een opslagapparaat?":
case "wat is een opslagapparaat":
case "opslag":
case "opslagapparaat":
response = "Opslagapparaten zijn hardwarecomponenten die worden gebruikt om gegevens op te slaan, zoals bestanden, programma's en systeemgegevens, voor langere tijd, zelfs wanneer de computer is uitgeschakeld. Dit kunnen bijvoorbeeld HDD's en SDD's zijn, maar ook een USB-stick of SD-kaart.";
break;

case "Wat is het verschil tussen een SSD en een HDD?":
response = "Een SSD (Solid State Drive) slaat gegevens op in flashgeheugen zonder bewegende onderdelen, waardoor het sneller is dan een HDD (Hard Disk Drive) die gegevens opslaat op draaiende magnetische schijven.";
break;

case "Wat zijn de voordelen van een SSD boven een HDD?":
response = "SSD's bieden snellere opstart- en laadtijden voor applicaties en games, zijn stiller en energiezuiniger dan HDD's, hoewel ze vaak duurder zijn per gigabyte opslagcapaciteit.";
break;

case "Hoe kies ik het juiste opslagapparaat voor mijn behoeften?":
response = "Bij het kiezen van een opslagapparaat moet je letten op factoren zoals snelheid, capaciteit, betrouwbaarheid en prijs per gigabyte, afhankelijk van je gebruiksscenario's zoals gaming, videobewerking of gegevensopslag.";
break;

case "Wat is NVMe-opslag?":
response = "NVMe (Non-Volatile Memory Express) is een snelle opslaginterface die is ontworpen om de prestaties van SSD's te verbeteren door gebruik te maken van PCIe (Peripheral Component Interconnect Express) voor snellere gegevensoverdracht.";
break;

case "Wat is een voedingseenheid?":
response = "Een voedingseenheid (PSU) converteert wisselstroom (AC) van een stopcontact naar gelijkstroom (DC) die wordt gebruikt om alle componenten van een computer van stroom te voorzien.";
break;

case "Hoe kies ik een geschikte voedingseenheid voor mijn computer?":
response = "Bij het kiezen van een voedingseenheid moet je letten op factoren zoals vermogen, efficiëntiecertificering (zoals 80 PLUS), aansluitingen voor componenten zoals GPU's en opslagapparaten, en kwaliteit van de voedingseenheid.";
break;

case "Wat is een modulaire voedingseenheid?":
response = "Een modulaire voedingseenheid maakt gebruik van afneembare kabels die je kunt aanpassen aan je behoeften, wat kan helpen bij het beheren van kabels en het bevorderen van een betere luchtstroom in je behuizing.";
break;

case "Wat zijn de gevolgen van een te zwakke voedingseenheid?":
response = "Een te zwakke voedingseenheid kan leiden tot instabiliteit, willekeurige crashes en verminderde levensduur van componenten als gevolg van onvoldoende stroomtoevoer naar de hardwarecomponenten van je computer.";
break;

case "Wat is het belang van efficiëntie bij een voedingseenheid?":
response = "Efficiëntie bij voedingseenheden wordt gemeten in percentages en geeft aan hoeveel van de energie die uit het stopcontact komt daadwerkelijk wordt omgezet in bruikbare stroom voor de computer, met hogere efficiëntie die minder warmte genereert en kosten bespaart.";
break;

case "Waarom is koeling belangrijk voor een computer?":
response = "Koeling is belangrijk om componenten zoals de CPU en GPU op een optimale temperatuur te houden, waardoor prestaties worden gemaximaliseerd, levensduur wordt verlengd en stabiliteit wordt behouden.";
break;

case "Wat zijn de verschillende soorten CPU-koeling?":
response = "CPU-koeling omvat luchtkoelers die warmte verspreiden via ventilatoren en koellichamen, en waterkoeling die warmte afvoert met behulp van vloeistofkoelers en radiatoren voor efficiëntere warmteafvoer.";
break;

case "Hoe kan ik mijn computer koelen voor optimale prestaties?":
response = "Je kunt je computer koelen door goede luchtstroom te bevorderen met ventilatoren, te kiezen voor efficiënte CPU- en GPU-koeloplossingen, en te zorgen voor een goed geventileerde behuizing.";
break;

case "Wat zijn de voordelen van waterkoeling ten opzichte van luchtkoeling?":
response = "Waterkoeling kan efficiënter zijn bij het afvoeren van warmte van de CPU en GPU, wat kan leiden tot lagere temperaturen en potentieel stillere werking van je computer, vooral bij overklokken en zwaar gebruik.";
break;

case "Wat zijn CPU-temperaturen en wat zijn veilige grenzen?":
response = "CPU-temperaturen verwijzen naar de hoeveelheid warmte die wordt gegenereerd door je CPU tijdens gebruik. Veilige grenzen variëren per CPU-model, maar over het algemeen moet je streven naar temperaturen onder 80-85°C voor optimale prestaties en levensduur.";
break;

case "Wat is overklokken van een CPU?":
response = "Overklokken is het verhogen van de kloksnelheid van je CPU om betere prestaties te bereiken dan de standaardinstellingen. Het vereist zorgvuldige aanpassing van instellingen en adequate koeling om stabiliteit te waarborgen.";
break;

case "Hoe kan ik mijn CPU overklokken?":
response = "Om je CPU te overklokken, moet je de kloksnelheid (GHz) en soms de spanning van je CPU verhogen in het BIOS/UEFI van je moederbord, terwijl je de temperaturen en stabiliteit zorgvuldig controleert.";
break;

case "Wat zijn de risico's van overklokken?":
response = "Overklokken kan leiden tot instabiliteit, verhoogde warmteproductie, kortere levensduur van de CPU en zelfs beschadiging van hardware als het niet goed wordt uitgevoerd of als adequate koeling ontbreekt.";
break;

case "Kan ik mijn GPU ook overklokken?":
response = "Ja, je kunt ook je GPU overklokken om betere grafische prestaties te bereiken, vergelijkbaar met het overklokken van een CPU, maar het vereist ook zorgvuldige afweging van instellingen en koeling.";
break;

case "Wat zijn de voordelen van overklokken?":
response = "De voordelen van overklokken zijn betere prestaties in games en toepassingen die zware rekenkracht vereisen, waardoor je de levensduur van je systeem kunt verlengen zonder direct te hoeven upgraden.";
break;

case "Wat zijn gamingcomputers?":
response = "Gamingcomputers zijn speciaal gebouwde computers met krachtige hardware, zoals high-end CPU's, GPU's, veel RAM en snelle opslagapparaten, die zijn geoptimaliseerd voor vloeiende gameplay en grafische prestaties.";
break;

case "Wat zijn gamingmonitoren en waarom zijn ze belangrijk?":
response = "Gamingmonitoren hebben vaak hogere vernieuwingsfrequenties (Hz), lagere reactietijden en resoluties zoals 1440p of 4K, wat zorgt voor vloeiendere beelden, minder bewegingsonscherpte en betere kleurweergave tijdens het gamen.";
break;

case "Wat zijn RGB-verlichting en gamingaccessoires?":
response = "RGB-verlichting en gamingaccessoires zijn esthetische en functionele toevoegingen aan gamingopstellingen, zoals kleurrijke LED-verlichting, mechanische toetsenborden, gamingmuizen met programmeerbare knoppen en ergonomische headsets.";
break;

case "Wat is de optimale FPS voor gaming?":
response = "De optimale FPS (frames per seconde) voor gaming varieert, maar over het algemeen wordt 60 FPS als voldoende beschouwd voor de meeste games, terwijl hogere FPS zoals 144 FPS of 240 FPS gewenst kunnen zijn voor competitieve games.";
break;

case "Hoe kies ik de beste gaminghardware?":
response = "Bij het kiezen van gaminghardware moet je letten op factoren zoals de prestaties van CPU en GPU, RAM-capaciteit, opslagruimte en de kwaliteit van het beeldscherm, afgestemd op de eisen van de games die je wilt spelen.";
break;

case "Wat zijn besturingssystemen voor computers?":
response = "Besturingssystemen zijn softwareprogramma's die de hardware van een computer beheren en interactie mogelijk maken met gebruikers en andere software, zoals Windows, macOS en Linux.";
break;

case "Wat is de rol van stuurprogramma's in een computer?":
response = "Stuurprogramma's zijn software die communicatie mogelijk maakt tussen hardwarecomponenten (zoals printers, grafische kaarten) en het besturingssysteem, waardoor ze correct kunnen werken en presteren.";
break;

case "Wat zijn software-updates en waarom zijn ze belangrijk?":
response = "Software-updates zijn patches en nieuwe versies van software die bugs oplossen, prestaties verbeteren en beveiligingslekken dichten, waardoor je computer veilig en efficiënt blijft werken.";
break;

case "Wat zijn antivirusprogramma's en waarom zijn ze belangrijk?":
response = "Antivirusprogramma's zijn softwaretools die je computer beschermen tegen virussen, malware en andere bedreigingen door verdachte activiteiten en bestanden te detecteren en te blokkeren.";
break;

case "Hoe installeer ik software op mijn computer?":
response = "Om software op je computer te installeren, download je eerst de installatieprogramma's van betrouwbare bronnen, voer je het installatieproces uit en volg je de instructies op het scherm om de software correct te configureren.";
break;

case "Wat is een netwerkadapter?":
response = "Een netwerkadapter is een hardwareapparaat dat wordt gebruikt om je computer aan te sluiten op een netwerk, zoals een draadloos netwerk (WiFi) of een bekabeld netwerk (Ethernet), voor internettoegang en gegevensoverdracht.";
break;

case "Wat zijn LAN en WAN?":
response = "LAN (Local Area Network) verwijst naar een netwerk dat computers binnen een beperkte fysieke ruimte met elkaar verbindt, zoals een huis of kantoor, terwijl WAN (Wide Area Network) computers op grotere afstand verbindt, zoals via het internet.";
break;

case "Hoe kan ik mijn thuisnetwerk instellen?":
response = "Om een thuisnetwerk in te stellen, verbind je je router met je internetmodem, configureer je netwerkinstellingen zoals SSID en wachtwoord, sluit je apparaten aan via WiFi of Ethernet, en deel je bestanden en bronnen indien nodig.";
break;

case "Wat zijn firewalls en waarom zijn ze belangrijk?":
response = "Firewalls zijn software- of hardwarebeveiligingsmaatregelen die het verkeer tussen je computer of netwerk en het internet controleren en filteren, waardoor ongeautoriseerde toegang en aanvallen worden voorkomen.";
break;

case "Wat is een IP-adres?":
response = "Een IP-adres (Internet Protocol-adres) is een unieke numerieke identificatie die wordt toegewezen aan elk apparaat dat is verbonden met een computernetwerk dat het mogelijk maakt om te communiceren en gegevens uit te wisselen.";
break;

case "Wat is virtualisatie?":
response = "Virtualisatie is het proces van het maken van virtuele (softwarematige) versies van computerbronnen zoals besturingssystemen, servers, opslagapparaten of netwerken om efficiënter gebruik te maken van hardware en bronnen te consolideren.";
break;

case "Hoe werkt virtualisatie in computers?":
response = "Virtualisatie maakt gebruik van software, bekend als een hypervisor, die meerdere virtuele machines (VM's) op één fysieke computer host, elk met zijn eigen besturingssysteem en applicaties, waardoor de flexibiliteit en efficiëntie toenemen.";
break;

case "Wat zijn de voordelen van servervirtualisatie?":
response = "Servervirtualisatie verhoogt de serverefficiëntie door meerdere virtuele servers op één fysieke server te draaien, wat leidt tot lagere kosten, betere resource-utilisatie en eenvoudiger beheer van IT-infrastructuur.";
break;

case "Wat zijn de voordelen van desktopvirtualisatie?":
response = "Desktopvirtualisatie maakt het mogelijk om meerdere virtuele desktopomgevingen op één fysieke computer of server te draaien, waardoor IT-beheerders gemakkelijker toegang hebben tot en het beheer van desktops en applicaties kunnen centraliseren.";
break;

case "Wat zijn containers en hoe verschillen ze van virtuele machines?":
response = "Containers zijn gevirtualiseerde omgevingen voor het uitvoeren van geïsoleerde applicaties met hun eigen bestandssystemen en bronnen, terwijl virtuele machines volledige virtuele computers emuleren met eigen besturingssystemen.";
break;

case "Wat is computerbeveiliging?":
response = "Computerbeveiliging verwijst naar de bescherming van computerhardware, software en gegevens tegen ongeautoriseerde toegang, aanvallen en schade door hackers, malware en andere bedreigingen.";
break;

case "Hoe kan ik mijn computer beveiligen tegen malware?":
response = "Om je computer te beschermen tegen malware, moet je up-to-date antivirussoftware gebruiken, voorzichtig zijn met het downloaden van bestanden van onbekende bronnen en regelmatig software-updates en beveiligingspatches uitvoeren.";
break;

case "Wat zijn firewall-software en hoe werken ze?":
response = "Firewall-software controleert en filtert inkomend en uitgaand netwerkverkeer op je computer, waardoor ongeautoriseerde toegang en aanvallen worden voorkomen door het toepassen van regels en beveiligingsbeleid.";
break;

case "Wat is tweefactorauthenticatie (2FA)?":
response = "Tweefactorauthenticatie (2FA) is een beveiligingsmethode die een extra beveiligingslaag toevoegt naast een wachtwoord, zoals een sms-code of een biometrische verificatie, om de identiteit van gebruikers te verifiëren en accountbeveiliging te verbeteren.";
break;

case "Wat zijn de beste praktijken voor computerbeveiliging?":
response = "Best practices voor computerbeveiliging omvatten het regelmatig updaten van software, gebruik van sterke wachtwoorden, het vermijden van verdachte links en bijlagen, en het maken van regelmatige back-ups om gegevensverlies te voorkomen.";
break;

case "Wat is een besturingssysteem?":
response = "Een besturingssysteem (OS) is software die de hardware van een computer beheert en gebruikers in staat stelt om programma's uit te voeren, gegevens op te slaan en te communiceren met de computer.";
break;

case "Wat zijn de verschillende soorten besturingssystemen?":
response = "Er zijn verschillende soorten besturingssystemen, waaronder Windows, macOS (voor Apple-computers), Linux-distributies zoals Ubuntu en Android voor mobiele apparaten, elk met hun eigen functies en compatibiliteit.";
break;

case "Hoe kan ik een besturingssysteem installeren?":
response = "Om een besturingssysteem te installeren, moet je een installatiemedium (zoals een USB-stick of een DVD) maken met de OS-installatiebestanden, de computer opstarten vanaf het medium en het installatieproces volgen.";
break;

case "Wat zijn de belangrijkste functies van een besturingssysteem?":
response = "De belangrijkste functies van een besturingssysteem omvatten het beheer van hardwarebronnen, het bieden van een gebruikersinterface voor interactie met de computer, en het ondersteunen van applicaties en bestandssystemen.";
break;

case "Hoe kan ik een dual-boot systeem opzetten?":
response = "Om een dual-boot systeem op te zetten, installeer je twee verschillende besturingssystemen op dezelfde computer, waarbij je tijdens het opstarten kunt kiezen welk OS je wilt gebruiken, met aparte partities voor elk besturingssysteem.";
break;

case "Wat is softwareontwikkeling?":
response = "Softwareontwikkeling is het proces van het ontwerpen, programmeren, testen en implementeren van softwaretoepassingen en systemen voor computers en andere apparaten.";
break;

case "Hoe kan ik leren programmeren?":
response = "Om te leren programmeren, kun je beginnen met het leren van programmeertalen zoals Python, Java, C++ of JavaScript via online cursussen, boeken en praktische projecten om programmeervaardigheden op te bouwen.";
break;

case "Wat zijn programmeertalen en waarvoor worden ze gebruikt?":
response = "Programmeertalen zijn sets van instructies die worden gebruikt om softwaretoepassingen en systemen te maken, elk met hun eigen syntaxis en functionaliteit voor verschillende programmeerbehoeften zoals webontwikkeling, app-ontwikkeling en gegevensanalyse.";
break;

case "Wat is een geïntegreerde ontwikkelomgeving (IDE)?":
response = "Een geïntegreerde ontwikkelomgeving (IDE) is software die programmeurs gebruiken om code te schrijven, te debuggen, te compileren en te testen, met functies zoals codecompletion, foutopsporing en projectbeheer.";
break;

case "Wat zijn de stappen in softwareontwikkeling?":
response = "Stappen in softwareontwikkeling omvatten planning en analyse van vereisten, ontwerp van de architectuur en gebruikersinterface, implementatie van code, testen van software, implementatie en onderhoud van applicaties en systemen.";
break;

case "Hoe kan ik problemen oplossen met mijn computer?":
response = "Om problemen met je computer op te lossen, identificeer je de symptomen, zoek naar mogelijke oorzaken zoals hardwarestoringen of softwareconflicten, en pas oplossingen toe zoals het bijwerken van stuurprogramma's, het uitvoeren van virus scans of het herstellen van systeeminstellingen.";
break;

case "Wat zijn veelvoorkomende oorzaken van computerproblemen?":
response = "Veelvoorkomende oorzaken van computerproblemen zijn hardwarestoringen zoals defecte harde schijven, softwarefouten zoals vastgelopen programma's, malware-infecties, oververhitting en onjuiste systeeminstellingen.";
break;

case "Hoe kan ik mijn computer versnellen?":
response = "Om je computer te versnellen, verwijder je ongebruikte programma's, voer je regelmatig schijfopruiming uit, installeer je meer RAM-geheugen, en optimaliseer je de opstartprocessen door software en instellingen te stroomlijnen.";
break;

case "Wat moet ik doen als mijn computer crasht?":
response = "Als je computer crasht, probeer dan te achterhalen wat de oorzaak zou kunnen zijn, start je computer opnieuw op, controleer op foutmeldingen en gebruik systeemherstelopties of herstel je besturingssysteem als dat nodig is.";
break;

case "Wat is systeemherstel en hoe werkt het?":
response = "Systeemherstel is een functie van Windows OS waarmee je je computer naar een vorige staat kunt terugzetten waarin deze correct werkte, zonder dat persoonlijke bestanden verloren gaan, door gebruik te maken van herstelpunten die je eerder hebt aangemaakt.";
break;

case "Wat is gegevensopslag?":
response = "Gegevensopslag verwijst naar het proces van het opslaan en bewaren van digitale gegevens op computeropslagapparaten, zoals harde schijven (HDD), solid state drives (SSD), USB-flashstations en optische schijven.";
break;

case "Wat zijn de verschillende soorten opslagapparaten?":
response = "Verschillende soorten opslagapparaten omvatten harde schijven (HDD's) voor grote capaciteit en lagere kosten, solid state drives (SSD's) voor snelle gegevensoverdracht en betrouwbaarheid, USB-flashstations voor draagbare opslag, en optische schijven zoals cd's en dvd's.";
break;

case "Wat is het verschil tussen HDD en SSD?":
response = "Het belangrijkste verschil tussen harde schijven (HDD's) en solid state drives (SSD's) is dat HDD's mechanische bewegende delen hebben en werken door informatie op draaiende schijven op te slaan, terwijl SSD's gebruikmaken van flashgeheugen voor snellere prestaties en betrouwbaarheid.";
break;

case "Hoe kan ik mijn gegevens beveiligen en back-ups maken?":
response = "Om je gegevens te beveiligen en back-ups te maken, gebruik je versleuteling voor privacybescherming, kies je wachtwoorden met hoge sterkte, maak je regelmatig back-ups naar externe harde schijven of cloudservices, en zorg je voor redundante opslagopties.";
break;

case "Wat is cloudopslag en hoe werkt het?":
response = "Cloudopslag is een service die digitale gegevens opslaat op externe servers via internet, waardoor gebruikers toegang hebben tot gegevens vanaf verschillende apparaten en locaties, met voordelen zoals schaalbaarheid, gegevensbeveiliging en gemakkelijke toegang.";
break;

case "Waarom is onderhoud van computers belangrijk?":
response = "Onderhoud van computers is belangrijk om optimale prestaties, betrouwbaarheid en levensduur te behouden, door regelmatig stof te verwijderen, software-updates uit te voeren, back-ups te maken en hardwarecomponenten te controleren.";
break;

case "Hoe kan ik mijn computer reinigen?":
response = "Om je computer te reinigen, schakel je deze uit, verwijder je stof van ventilatieopeningen, toetsenborden en muizen met perslucht of zachte borstels, gebruik je een microvezeldoekje voor schermen, en controleer je op eventuele stofophopingen in de behuizing.";
break;

case "Wanneer moet ik mijn computer upgraden?":
response = "Je moet je computer upgraden als je merkt dat hij langzamer wordt bij het uitvoeren van taken, niet meer voldoet aan de systeemvereisten van nieuwe software, of als je de prestaties wilt verbeteren door betere hardwarecomponenten te installeren.";
break;

case "Wat zijn de tekenen van oververhitting van de computer?":
response = "Tekenen van oververhitting van de computer zijn onder andere ventilatorgeluiden, onverwachte crashes, vertraagde prestaties en ongewoon hoge CPU- of GPU-temperaturen, wat kan worden verholpen door betere koeling of het reinigen van stofophopingen.";
break;

case "Hoe kan ik mijn computer upgraden?":
response = "Om je computer te upgraden, identificeer je de componenten die je wilt upgraden (zoals RAM, opslag of GPU), controleer je de compatibiliteit met je bestaande systeem, installeer je de nieuwe hardwarecomponenten en installeer je de benodigde stuurprogramma's en updates.";
break;

case "Wat is multimedia?":
response = "Multimedia verwijst naar inhoud die meerdere vormen van media combineert, zoals tekst, afbeeldingen, video, audio en animatie, voor interactieve en boeiende gebruikerservaringen op computers en andere apparaten.";
break;

case "Hoe werken multimedia-applicaties?":
response = "Multimedia-applicaties werken door het integreren van verschillende media-inhoudstypen, het afspelen van audio- en videobestanden, en het mogelijk maken van interactieve elementen zoals gebruikersinvoer en animatie voor een gevarieerde en boeiende ervaring.";
break;

case "Wat zijn voorbeelden van multimedia-software?":
response = "Voorbeelden van multimedia-software omvatten mediaspelers zoals VLC en Windows Media Player, videobewerkingsprogramma's zoals Adobe Premiere, audiobewerkingssoftware zoals Audacity, en interactieve ontwerptools zoals Adobe Flash.";
break;

case "Wat is mediabewerking en hoe werkt het?":
response = "Mediabewerking is het proces van het bewerken, aanpassen en samenstellen van multimedia-inhoud zoals audio, video, afbeeldingen en animaties met behulp van gespecialiseerde softwaretools, wat zorgt voor creatieve controle en een gepersonaliseerde productie.";
break;

case "Wat zijn de toepassingen van multimedia?":
response = "Multimedia wordt toegepast in gebieden zoals entertainment, onderwijs, marketing en creatieve industrieën, waardoor het mogelijk is om interactieve websites, videoproducties, games, educatieve cursussen en digitale kunstwerken te creëren en te delen.";
break;

case "Waar kan ik computerhulp vinden?":
response = "Je kunt computerhulp vinden via online forums zoals Reddit of Stack Overflow, officiële ondersteuningspagina's van merken zoals Microsoft of Apple, lokale reparatiewinkels en communities zoals hackerspaces of technologieclubs.";
break;

case "Hoe kan ik leren omgaan met nieuwe technologieën?":
response = "Om te leren omgaan met nieuwe technologieën, kun je online cursussen volgen, tutorials en gidsen lezen, zelfstudie gebruiken voor praktische projecten, deelnemen aan workshops en deelnemen aan gemeenschappen van technologieliefhebbers en -professionals.";
break;

case "Wat zijn nuttige websites voor computertechnologie?":
response = "Nuttige websites voor computertechnologie omvatten bronnen zoals CNET, Tom's Hardware en The Verge voor recensies en nieuws over hardware en software, Stack Overflow voor programmeervragen, en TechCrunch en Wired voor bredere technologietrends.";
break;

case "Hoe kan ik mijn computervaardigheden verbeteren?":
response = "Om je computervaardigheden te verbeteren, oefen je regelmatig met praktische projecten, leer je nieuwe programmeertalen en software, blijf je op de hoogte van de nieuwste technologietrends en experimenteer je met verschillende besturingssystemen en hardwareconfiguraties.";
break;

case "Hoe kan ik problemen met mijn computer oplossen?":
response = "Om problemen met je computer op te lossen, probeer je de symptomen te identificeren, zoek je naar de mogelijke oorzaken zoals hardwarestoringen of softwareconflicten, en pas je oplossingen toe zoals het bijwerken van stuurprogramma's, het uitvoeren van virus scans of het herstellen van systeeminstellingen.";
break;


//sommen:

    case "0+1":
    response = "0 + 1 = 1";
    break;
    case "1+0":
    response = "1 + 0 = 1";
    break;
    case "0+2":
    response = "0 + 2 = 2";
    break;
    case "1+1":
    response = "1 + 1 = 2";
    break;
    case "2+0":
    response = "2 + 0 = 2";
    break;
    case "0+3":
    response = "0 + 3 = 3";
    break;
    case "1+2":
    response = "1 + 2 = 3";
    break;
    case "2+1":
    response = "2 + 1 = 3";
    break;
    case "3+0":
    response = "3 + 0 = 3";
    break;
    case "0+4":
    response = "0 + 4 = 4";
    break;
    case "1+3":
    response = "1 + 3 = 4";
    break;
    case "2+2":
    response = "2 + 2 = 4";
    break;
    case "3+1":
    response = "3 + 1 = 4";
    break;
    case "4+0":
    response = "4 + 0 = 4";
    break;
    case "0+5":
    response = "0 + 5 = 5";
    break;
    case "1+4":
    response = "1 + 4 = 5";
    break;
    case "2+3":
    response = "2 + 3 = 5";
    break;
    case "3+2":
    response = "3 + 2 = 5";
    break;
    case "4+1":
    response = "4 + 1 = 5";
    break;
    case "5+0":
    response = "5 + 0 = 5";
    break;


    case "2-1":
    response = "2 - 1 = 1";
    break;
    case "3-2":
    response = "3 - 2 = 1";
    break;
    case "4-3":
    response = "4 - 3 = 1";
    break;
    case "5-4":
    response = "5 - 4 = 1";
    break;
    case "1-0":
    response = "1 - 0 = 1";
    break;
    case "3-1":
    response = "3 - 1 = 2";
    break;
    case "4-2":
    response = "4 - 2 = 2";
    break;
    case "5-3":
    response = "5 - 3 = 2";
    break;
    case "2-0":
    response = "2 - 0 = 2";
    break;
    case "4-1":
    response = "4 - 1 = 3";
    break;
    case "5-2":
    response = "5 - 2 = 3";
    break;
    case "3-0":
    response = "3 - 0 = 3";
    break;
    case "5-1":
    response = "5 - 1 = 4";
    break;
    case "4-0":
    response = "4 - 0 = 4";
    break;
    case "5-0":
    response = "5 - 0 = 5";
    break;


    case "1*1":
    case "1x1":    
    response = "1 x 1 = 1";
    break;
    case "1*2":
    case "1x2":
    case "1 x 2":
    case "1 * 2":        
    response = "1 x 2 = 2";
    break;
    case "2 * 1":
    response = "2 x 1 = 2";
    break;
    case "1 * 3":
    response = "1 x 3 = 3";
    break;
    case "3 * 1":
    response = "3 x 1 = 3";
    break;
    case "1 * 4":
    response = "1 x 4 = 4";
    break;
    case "2 * 2":
    response = "2 x 2 = 4";
    break;
    case "4 * 1":
    response = "4 x 1 = 4";
    break;
    case "1 * 5":
    response = "1 x 5 = 5";
    break;
    case "5 * 1":
    response = "5 x 1 = 5";
    break;
    case "2.5 * 2":
    response = "2.5 x 2 = 5";
    break;
    case "2 * 2.5":
    response = "2 x 2.5 = 5";
    break;
    case "0.5 * 10":
    response = "0.5 x 10 = 5";
    break;
    case "10 * 0.5":
    response = "10 x 0.5 = 5";
    break;


    case "1 / 1":
    response = "1 / 1 = 1";
    break;
    case "2 / 2":
    response = "2 / 2 = 1";
    break;
    case "3 / 3":
    response = "3 / 3 = 1";
    break;
    case "4 / 4":
    response = "4 / 4 = 1";
    break;
    case "5 / 5":
    response = "5 / 5 = 1";
    break;
    case "2 / 1":
    response = "2 / 1 = 2";
    break;
    case "4 / 2":
    response = "4 / 2 = 2";
    break;
    case "6 / 3":
    response = "6 / 3 = 2";
    break;
    case "8 / 4":
    response = "8 / 4 = 2";
    break;
    case "10 / 5":
    response = "10 / 5 = 2";
    break;
    case "3 / 1":
    response = "3 / 1 = 3";
    break;
    case "6 / 2":
    response = "6 / 2 = 3";
    break;
    case "9 / 3":
    response = "9 / 3 = 3";
    break;
    case "12 / 4":
    response = "12 / 4 = 3";
    break;
    case "15 / 5":
    response = "15 / 5 = 3";
    break;
    case "4 / 1":
    response = "4 / 1 = 4";
    break;
    case "8 / 2":
    response = "8 / 2 = 4";
    break;
    case "12 / 3":
    response = "12 / 3 = 4";
    break;
    case "16 / 4":
    response = "16 / 4 = 4";
    break;
    case "20 / 5":
    response = "20 / 5 = 4";
    break;
    case "5 / 1":
    response = "5 / 1 = 5";
    break;
    case "10 / 2":
    response = "10 / 2 = 5";
    break;
    case "15 / 3":
    response = "15 / 3 = 5";
    break;
    case "20 / 4":
    response = "20 / 4 = 5";
    break;
    case "25 / 5":
    response = "25 / 5 = 5";
    break;
    case "2.5 / 0.5":
    response = "2.5 / 0.5 = 5";
    break;
    
    
    





//English version of Arya. This code is used to talk English to Arya. If you speak Dutch, we recommended to speak Dutch to Arya because the Dutch version is smarter at the moment.


case "hello!":
case "hello":
case "hello.":
case "good morning!":
case "good morning":
case "good evening!":
case "good evening":
case "good afternoon!":
case "good afternoon":
case "good day":
case "good day!":
case "i'm here!":
case "i'm here":
response = "Hello! I hope you're doing well! How can I assist you? I can help with general subjects and much more!";
break;


case "hi how are you?":
case "hi, how are you?":
case "hi how are you":
case "how are you?":
case "how are you":
case "how are you doing?":
case "how are you doing":
case "are you doing well?":
case "are you doing well":
case "i hope you're doing well!":
case "i hope you're doing well":
  response = "I'm doing fine. Thank you for checking! I hope you're also doing well!";
  break;

    case "who are you?":
    case "who are you":
    case "who 're you?":
    case "who 're you":
    case "what is your name?":
    case "what is your name":
    case "what's your name?":
    case "what's your name":
    case "who?":
    case "who":
    case "and you are?":
    case "and you are":
    case "and you're?":
    case "and you're":
        response = "I'm Arya, the chatbot of the Online Leerhulp. I can help you with general subjects and so much more!";
        break;

          case "can you help me?":
          case "can you help me":
          case "can you help me please?":
          case "can you help me please":
          case "i need help!":
          case "i need help":
          case "can you help me pls":
          case "can you help me pls?":
              response = "Yes, I'm made to help you! So, give me your question and I'll try to help you!";
              break;


  case "what can ido on this website?":
  case "what can i do on this website":
  case "waht can i find here?":
  case "what kind of stuff can i find here?":
  case "what kind of stuff can i find here":
  response = "On this website we have a bunch of cool stuff. You can make an account on this website which resulting of that you can save your notes. You also can use our newest AI-assistent Arya to ask questions and get answers. You are currently chatting with Arya. Also you can use our calculator on our Tools-page. We also have a library on this website so that you can get information about different subjects. And we also have a schedule which you can type in which is very cool and you can make your own notes!";
  break; 

  case "what is the capital city of the netherlands?":
  case "what is the capital city of the netherlands": 
  case "capital city of the netherlands":
  case "capital of the netherlands":
  case "capital city netherlands":
        response = "The capital city of The Netherlands is Amsterdam. It's known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age."; 
        break; 

    case "what is the highest mountain in the world?":
    case "what is the highest mountain in the world":
    case "highest mountain":
    case "highest mountain in the world":
    case "what is the highest mountain?":
    response = "The highest mountain in the world is the Mount Everest"; 
      break; 
    
    case "what is the largest animal on earth?":
    case "what is the largest animal on earth":
    case "largest animal":
    case "largest animal on earth":
    case "what is the largest animal?":
    case "what is the largest animal":
         response = "The largest animal on earth is the blue whale.";
         break;

    case "what is the tallest building in the world?":
    case "what is the tallest building in the world":
    case "tallest building":
    case "tallest building in the world":
    case "what is the tallest building?":
    case "what is the tallest building":
         response = "The tallest building in the world is the Burj Khalifa in Dubai, United Arab Emirates.";
         break;

        case "what is the largest continent in the world?":
        case "what is the largest continent in the world":
        case "largest continent":
        case "largest continent in the world":
        case "what is the largest continent?":
        case "what is the largest continent":
            response = "The largest continent in the world is Asia.";
            break;

        case "what is the largest lake in the world?":
        case "what is the largest lake in the world":
        case "largest lake":
        case "largest lake in the world":
        case "what is the largest lake?":
        case "what is the largest lake":
                response = "The largest lake in the world by surface area is the Caspian Lake.";
                break;

        case "what is the smallest state in the world?":
        case "what is the smallest state in the world":
        case "smallest state":
        case "smallest state in the world":
        case "what is the smallest state?":
        case "what is the smallest state":
         response = "The smallest state in the world is Vatican City.";
         break;

        case "what is the largest tree in the world?":
        case "what is the largest tree in the world":
        case "largest tree":
        case "largest tree in the world":
        case "what is the largest tree?":
        case "what is the largest tree":
            response = "The largest tree in the world is General Sherman, a giant sequoia located in Sequoia National Park in California, United States.";
            break;

    case "what is the longest bridge in the world?":
    case "what is the longest bridge in the world":
    case "longest bridge":
    case "longest bridge in the world":
    case "what is the longest bridge?":
    case "what is the longest bridge":
        response = "The longest bridge in the world is the Danyang-Kunshan Grand Bridge in China.";
        break;

    case "what is the largest diamond in the world?":
    case "what is the largest diamond in the world":
    case "largest diamond":
    case "largest diamond in the world":
    case "what is the largest diamond?":
    case "what is the largest diamond":
            response = "The largest diamond in the world is the Cullinan, also known as the Star of Africa.";
            break;

    case "how many countries are there in europe?":
    case "how many countries are there in europe":
    case "countries in europe":
    case "how many countries in europe":
    case "how many countries in europe?":
        response = "There are 50 countries in Europe.";
        break;

    case "what is the largest volcano in the world?":
    case "what is the largest volcano in the world":
    case "largest volcano":
    case "largest volcano in the world":
    case "what is the largest volcano?":
    case "what is the largest volcano":
        response = "The largest volcano in the world is Mauna Loa, located on the island of Hawaii.";
        break;

    case "what is the largest planet in the world?":
    case "what is the largest planet in the world":
    case "largest planet":
    case "largest planet in the world":
    case "what is the largest planet?":
    case "what is the largest planet":
     response = "The largest planet in our solar system is Jupiter.";
     break;

    case "what is the largest city in the world in terms of area?":
    case "what is the largest city in the world in terms of area":
    case "largest city in the world in terms of area":
    case "largest city in the world by area":
    case "what is the largest city by area?":
    case "what is the largest city?":
    case "what is the largest city":
    case "largest city":
    case "largest city in the world":
            response = "The largest city in the world by area is Hulunbuir in China.";
            break;

    case "what is the oldest city in the world?":
    case "what is the oldest city in the world":
    case "oldest city":
    case "oldest city in the world":
    case "what is the oldest city?":
    case "what is the oldest city":
        response = "The oldest city in the world is Damascus, Syria.";
        break;

    case "what is the largest canyon in the world?":
    case "what is the largest canyon in the world":
    case "largest canyon":
    case "largest canyon in the world":
    case "what is the largest canyon?":
    case "what is the largest canyon":
        response = "The largest canyon in the world is the Grand Canyon in the United States.";
        break;

    case "what is the largest airport in the world?":
    case "what is the largest airport in the world":
    case "largest airport":
    case "largest airport in the world":
    case "what is the largest airport?":
    case "what is the largest airport":
        response = "The largest airport in the world by area is King Fahd International Airport in Saudi Arabia.";
        break;

    case "what is the largest archipelago in the world?":
    case "what is the largest archipelago in the world":
    case "largest archipelago":
    case "largest archipelago in the world":
    case "what is the largest archipelago?":
    case "what is the largest archipelago":
    case "what is the largest archipel in the world?":
    case "what is the largest archipel in the world":
    case "largest archipel":
    case "largest archipel in the world":
    case "what is the largest archipel?":
    case "what is the largest archipel":
        response = "The largest archipelago in the world is Indonesia.";
        break;

    case "what is the highest mountain in europe?":
    case "what is the highest mountain in europe":
    case "highest mountain":
    case "highest mountain in europe":
    case "what is the highest mountain?":
    case "what is the highest mountain":
        response = "The highest mountain in Europe is Mount Elbrus in Russia.";
        break;

    case "what is the smallest planet in our solar system?":
    case "what is the smallest planet in our solar system":
    case "smallest planet":
    case "smallest planet in our solar system":
    case "what is the smallest planet?":
    case "what is the smallest planet":
        response = "The smallest planet in our solar system is Mercury.";
        break;

    case "what is the fastest animal on land?":
    case "what is the fastest animal on land":
    case "fastest animal":
    case "fastest animal on land":
    case "what is the fastest animal?":
    case "what is the fastest animal":
        response = "The fastest land animal on Earth is the cheetah.";
        break;

    case "what is the fastest bird in the world?":
    case "what is the fastest bird in the world":
    case "fastest bird":
    case "fastest bird in the world":
    case "what is the fastest bird?":
    case "what is the fastest bird":
        response = "The fastest bird in the world is the peregrine falcon.";
        break;

    case "what is the fastest fish in the world?":
    case "what is the fastest fish in the world":
    case "fastest fish":
    case "fastest fish in the world":
    case "what is the fastest fish?":
    case "what is the fastest fish":
        response = "The fastest fish in the world is the sailfish.";
        break;

    case "what is the fastest land animal in the world?":
    case "what is the fastest land animal in the world":
    case "fastest land animal":
    case "fastest land animal in the world":
    case "what is the fastest land animal?":
    case "what is the fastest land animal":
        response = "The fastest land animal on Earth is the cheetah.";
        break;

    case "what is the fastest snail in the world?":
    case "what is the fastest snail in the world":
    case "fastest snail":
    case "fastest snail in the world":
    case "what is the fastest snail?":
    case "what is the fastest snail":
        response = "The fastest snail in the world is the white-shelled snail.";
        break;

    case "what is the fastest snake in the world?":
    case "what is the fastest snake in the world":
    case "fastest snake":
    case "fastest snake in the world":
    case "what is the fastest snake?":
    case "what is the fastest snake":
        response = "The fastest snake in the world is the black mamba.";
        break;

    case "what is the fastest beetle in the world?":
    case "what is the fastest beetle in the world":
    case "fastest beetle":
    case "fastest beetle in the world":
    case "what is the fastest beetle?":
    case "what is the fastest beetle":
        response = "The fastest beetle in the world is the tiger locust.";
        break;

    case "what is the fastest spider in the world?":
    case "what is the fastest spider in the world":
    case "fastest spider":
    case "fastest spider in the world":
    case "what is the fastest spider?":
    case "what is the fastest spider":
        response = "The fastest spider in the world is the Huntsman spider.";
        break;

    case "what is the fastest scorpion in the world?":
    case "what is the fastest scorpion in the world":
    case "fastest scorpion":
    case "fastest scorpion in the world":
    case "what is the fastest scorpion?":
    case "what is the fastest scorpion":
        response = "The fastest scorpion in the world is the fat-tailed scorpion.";
        break;

    case "what is the fastest turtle in the world?":
    case "what is the fastest turtle in the world":
    case "fastest turtle":
    case "fastest turtle in the world":
    case "what is the fastest turtle?":
    case "what is the fastest turtle":
        response = "The fastest turtle in the world is the three-toed turtle.";
        break;

    case "what is the fastest ant in the world?":
    case "what is the fastest ant in the world":
    case "fastest ant":
    case "fastest ant in the world":
    case "what is the fastest ant?":
    case "what is the fastest ant":
        response = "The fastest ant in the world is the Australian tractor ant.";
        break;

    case "what is the fastest cockroach in the world?":
    case "what is the fastest cockroach in the world":
    case "fastest cockroach":
    case "fastest cockroach in the world":
    case "what is the fastest cockroach?":
    case "what is the fastest cockroach":
        response = "The fastest cockroach in the world is the American cockroach.";
        break;

    case "what is the fastest snail in the world?":
    case "what is the fastest snail in the world":
    case "fastest snail":
    case "fastest snail in the world":
    case "what is the fastest snail?":
    case "what is the fastest snail":
        response = "The fastest snail in the world is the white-shelled snail";
        break;

    case "what color is the sky on a clear day?":
    case "what color is the sky on a clear day":
    case "sky color on a clear day":
        response = "The color of the sky is blue on a clear day.";
        break;
//End of geographical subjects.



        case "what is the capital of the netherlands?":
        case "what is the capital of the netherlands":
        case "capital of the netherlands":
        case "capital netherlands":
        case "capital city netherlands":
        case "capital city of the netherlands":
        case "what is the capital city of the netherlands":
        case "what is the capital city of the netherlands?":
            response = "The capital of the Netherlands is Amsterdam.";
            break;

        case "how are people from the netherlands called in english?":
        case "how are people from the netherlands called in english":
        case "people from the netherlands":
        case "people from the netherlands in english":
        case "people from the netherlands are called":
        case "people from the netherlands are called in english":
        case "what are people from the netherlands called in english":
        case "what are people from the netherlands called in english?":
            response = "People from the Netherlands are called Dutch.";
            break;

        case "what is the currency in use in the netherlands?":
        case "what is the currency in use in the netherlands":
        case "currency in the netherlands":
        case "currency of the netherlands":
        case "what currency is used in the netherlands":
        case "what currency is used in the netherlands?":
            response = "The currency used in the Netherlands is the Euro. It's the general currency in many countries of the European Union.";
            break;

        case "how many countries do the netherlands share a land border with?":
        case "how many countries do the netherlands share a land border with":
        case "countries the netherlands share a land border with":
        case "what countries do the netherlands share a land border with":
        case "what countries do the netherlands share a land border with?":
            response = "The Netherlands shares a land border with two countries: Germany and Belgium.";
            break;

        case "what colors are on the flag of the netherlands?":
        case "what colors are on the flag of the netherlands":
        case "flag of the netherlands":
        case "colors on the flag of the netherlands":
        case "what colors are on the dutch flag":
        case "what colors are on the dutch flag?":
            response = "The colors on the flag of the Netherlands are red, white, and blue.";
            break;

        case "who is the current king of the netherlands?":
        case "who is the current king of the netherlands":
        case "current king of the netherlands":
        case "king of the netherlands":
        case "who is the king of the netherlands":
        case "who is the king of the netherlands?":
            response = "The current king of the Netherlands is Willem-Alexander. He is the king since 2013.";
            break;

        case "what black sweet is particularly popular in the netherlands?":
        case "what black sweet is particularly popular in the netherlands":
        case "black sweet popular in the netherlands":
        case "black sweet in the netherlands":
        case "what black sweet is popular in the netherlands":
        case "what black sweet is popular in the netherlands?":
            response = "Liquorice is particularly popular in the Netherlands.";
            break;

        case "how many people live in the netherlands?":
        case "how many people live in the netherlands":
        case "people in the netherlands":
        case "population of the netherlands":
        case "what is the population of the netherlands":
        case "what is the population of the netherlands?":
            response = "As of 2020, 17.44 million people live in the Netherlands. In 2024, the population has passed the 18 million.";
            break;

        case "how many provinces are there in the netherlands?":
        case "how many provinces are there in the netherlands":
        case "provinces in the netherlands":
        case "how many provinces in the netherlands":
        case "what provinces are there in the netherlands":
        case "what provinces are there in the netherlands?":
            response = "There are 12 provinces in the Netherlands. Some are Flevoland, North Holland, South Holland, Utrecht, and Zeeland.";
            break;

        case "what flower does the netherlands produce most?":
        case "what flower does the netherlands produce most":
        case "flower produced most in the netherlands":
        case "what flower is produced most in the netherlands":
        case "what flower is produced most in the netherlands":
        case "popular flower from the netherlands":
        case "popular flower of the netherlands":
            response = "The Netherlands produces tulips the most.";
            break;

        case "what is armin van buuren known for?":
        case "what is armin van buuren known for":
        case "armin van buuren":
            response = "Armin van Buuren is known for being a DJ.";
            break;

        case "how many canals are in amsterdam?":
        case "how many canals are in amsterdam":
        case "canals in amsterdam":
        case "how many canals in amsterdam":
        case "what is the number of canals in amsterdam":
        response = "There are 165 canals in Amsterdam.";
        break;

        case "when was amsterdam founded?":
        case "when was amsterdam founded":
        case "when was amsterdam established":
        case "when was amsterdam established?":
            response = "Amsterdam was founded in 1275.";
            break;
/*
End of the normal cases for Arya. Down under this sentence you'll find the source code for Actions
*/


//Source code for Actions, a new feature introduced in AryaLM3.2 which activate an action. You can say an action to clear the chat, go to another site or page to navigate through the internet. Actions works in Dutch and English.

    case "ga naar de bibliotheek":
    case "ga naar de bibliotheek!":
    case "ga naar de bieb":
    case "ga naar de bieb!":
    case "kan je naar de bibliotheek?":
    case "kan je naar de bibliotheek":
    case "kan je naar de bieb?":
    case "kan je naar de bieb":
    case "bibliotheek":
    case "bieb":
    case "verwijs door naar de bibliotheek":
    case "verwijs door naar de bibliotheek!":
    case "verwijs me door naar de bibliotheek!":
    case "verwijs me door naar de bibliotheek":
    case "verwijs me door naar de bieb!":
    case "verwijs me door naar de bieb":
    case "kan je me naar de bibliotheek brengen?":
    case "kan je me naar de bibliotheek brengen":
    case "kan je me naar de bieb brengen?":
    case "kan je me naar de bieb brengen":
    case "naar de bibliotheek":
    case "naar de bibliotheek!":
    case "naar de bieb!":
    case "naar de bieb":
    case "breng me naar de bieb":
    case "breng me naar de bieb!":
    case "breng me naar de bibliotheek":
    case "breng me naar de bibliotheek!":
    case "bring me to the library":
    case "bring me to the library!":
    case "can you bring me to the library?":
    case "can you bring me to the library":
    case "bring me to the library please!":
    case "bring me to the library please":
    case "to the library":
    case "to the library!":
        window.location.href = 'Bibliotheek.html';
        break;

            case "ga naar de schoolvakken":
            case "ga naar de schoolvakken!":
            case "kan je naar de schoolvakken?":
            case "kan je naar de schoolvakken":
            case "schoolvakken":
            case "verwijs door naar de schoolvakken":
            case "verwijs door naar de schoolvakken!":
            case "kan je me naar de schoolvakken brengen?":
            case "kan je me naar de schoolvakken brengen":
            case "naar de schoolvakken":
            case "naar de schoolvakken!":
            case "breng me naar de schoolvakken":
            case "breng me naar de schoolvakken!":
            case "bring me to the subjects":
            case "bring me to the subjects!":
            case "can you bring me to the subjects?":
            case "can you bring me to the subjects":
            case "bring me to the subjects!":
            case "bring me to the subjects please":
            case "to the subjects":
            case "to the subjects!":
                window.location.href = 'Schoolvakken.html';
                break;

    case "ga naar tools":
    case "ga naar tools!":
    case "kan je naar tools?":
    case "kan je naar tools":
    case "verwijs door naar tools":
    case "verwijs door naar tools!":
    case "verwijs me door naar tools!":
    case "verwijs me door naar tools":
    case "kan je me naar tools brengen?":
    case "kan je me naar tools brengen":
    case "naar tools":
    case "naar tools!":
    case "breng me naar tools":
    case "breng me naar tools!":
    case "bring me to tools":
    case "bring me to tools!":
    case "can you bring me to tools?":
    case "can you bring me to tools":
    case "bring me to tools please!":
    case "bring me to tools please":
    case "to tools":
    case "to tools!":
        window.location.href = 'Tools.html';
        break;

                    case "ga naar youtube":
                    case "ga naar youtube!":
                    case "ga naar yt":
                    case "ga naar yt!":
                    case "kan je naar youtube?":
                    case "kan je naar youtube":
                    case "kan je naar yt?":
                    case "kan je naar yt":
                    case "youtube":
                    case "yt":
                    case "verwijs door naar youtube":
                    case "verwijs door naar youtube!":
                    case "verwijs me door naar youtube!":
                    case "verwijs me door naar youtube":
                    case "verwijs me door naar yt!":
                    case "verwijs me door naar yt":
                    case "kan je me naar youtube brengen?":
                    case "kan je me naar youtube brengen":
                    case "kan je me naar yt brengen?":
                    case "kan je me naar yt brengen":
                    case "naar youtube":
                    case "naar youtube!":
                    case "naar yt!":
                    case "naar yt":
                    case "breng me naar yt":
                    case "breng me naar yt!":
                    case "breng me naar youtube":
                    case "breng me naar youtube!":
                    case "bring me to youtube":
                    case "bring me to youtube!":
                    case "can you bring me to youtube?":
                    case "can you bring me to youtube":
                    case "bring me to youtube please!":
                    case "bring me to youtube please":
                    case "to youtube":
                    case "to youtube!":
                            window.location.href = 'https://youtube.com';
                            break;

                        case "ga naar chatgpt":
                        case "ga naar chatgpt!":
                        case "kan je naar chatgpt?":
                        case "kan je naar chatgpt":
                        case "verwijs door naar chatgpt":
                        case "verwijs door naar chatgpt!":
                        case "verwijs me door naar chatgpt!":
                        case "verwijs me door naar chatgpt":
                        case "kan je me naar chatgpt brengen?":
                        case "kan je me naar chatgpt brengen":
                        case "naar chatgpt":
                        case "naar chatgpt!":
                        case "breng me naar chatgpt":
                        case "breng me naar chatgpt!":
                        case "bring me to chatgpt":
                        case "bring me to chatgpt!":
                        case "can you bring me to chatgpt?":
                        case "can you bring me to chatgpt":
                        case "bring me to chatgpt please!":
                        case "bring me to chatgpt please":
                        case "to chatgpt":
                        case "to chatgpt!":
                                window.location.href = 'https://chatgpt.com';
                                break;


              case "ga naar google":
              case "ga naar google!":
              case "kan je naar google?":
              case "kan je naar google":
              case "verwijs door naar google":
              case "verwijs door naar google!":
              case "verwijs me door naar google!":
              case "verwijs me door naar google":
              case "kan je me naar google brengen?":
              case "kan je me naar google brengen":
              case "naar google":
              case "naar google!":
              case "breng me naar google":
              case "breng me naar google!":
              case "bring me to google":
              case "bring me to google!":
              case "can you bring me to google?":
              case "can you bring me to google":
              case "bring me to google please!":
              case "bring me to google please":
              case "to google":
              case "to google!":
                    window.location.href = 'https://google.com';
                    break;

        case "ga naar facebook":
        case "ga naar facebook!":
        case "ga naar fb!":
        case "ga naar fb":
        case "kan je naar facebook?":
        case "kan je naar facebook":
        case "kan je naar fb?":
        case "kan je naar fb":
        case "verwijs door naar facebook":
        case "verwijs door naar facebook!":
        case "verwijs door naar fb":
        case "verwijs door naar fb!":
        case "verwijs me door naar facebook!":
        case "verwijs me door naar facebook":
        case "verwijs me door naar fb!":
        case "verwijs me door naar fb":
        case "kan je me naar facebook brengen?":
        case "kan je me naar facebook brengen":
        case "kan je me naar fb brengen?":
        case "kan je me naar fb brengen":
        case "naar facebook":
        case "naar facebook!":
        case "naar fb!":
        case "naar fb":
        case "breng me naar facebook":
        case "breng me naar facebook!":
        case "breng me naar fb!":
        case "breng me naar fb":
        case "bring me to facebook":
        case "bring me to facebook!":
        case "bring me to fb":
        case "bring me to fb!":
        case "can you bring me to facebook?":
        case "can you bring me to facebook":
        case "can you bring me to fb?":
        case "can you bring me to fb":
        case "bring me to facebook!":
        case "bring me to facebook":
        case "bring me to fb":
        case "bring me to fb!":
        case "to facebook":
        case "to facebook!":
        case "to fb!":
        case "to fb":
            window.location.href = 'https://facebook.com';
            break;

    case "ga naar instagram":
    case "ga naar instagram!":
    case "kan je naar instagram?":
    case "kan je naar instagram":
    case "verwijs door naar instagram":
    case "verwijs door naar instagram!":
    case "verwijs me door naar instagram!":
    case "verwijs me door naar instagram":
    case "kan je me naar instagram brengen?":
    case "kan je me naar instagram brengen":
    case "naar instagram":
    case "naar instagram!":
    case "breng me naar instagram":
    case "breng me naar instagram!":
    case "bring me to instagram":
    case "bring me to instagram!":
    case "can you bring me to instagram?":
    case "can you bring me to instagram":
    case "bring me to instagram please!":
    case "bring me to instagram please":
    case "to instagram":
    case "to instagram!":
        window.location.href = 'https://instagram.com';
        break;

            case "ga naar roblox":
            case "ga naar roblox!":
            case "kan je naar roblox?":
            case "kan je naar roblox":
            case "verwijs door naar roblox":
            case "verwijs door naar roblox!":
            case "verwijs me door naar roblox!":
            case "verwijs me door naar roblox":
            case "kan je me naar roblox brengen?":
            case "kan je me naar roblox brengen":
            case "naar roblox":
            case "naar roblox!":
            case "breng me naar roblox":
            case "breng me naar roblox!":
            case "bring me to roblox":
            case "bring me to roblox!":
            case "can you bring me to roblox?":
            case "can you bring me to roblox":
            case "bring me to roblox please!":
            case "bring me to roblox please":
            case "to roblox":
            case "to roblox!":
                  window.location.href = 'https://roblox.com';
                  break;

    case "ga naar tiktok":
    case "ga naar tiktok!":
    case "kan je naar tiktok?":
    case "kan je naar tiktok":
    case "verwijs door naar tiktok":
    case "verwijs door naar tiktok!":
    case "verwijs me door naar tiktok!":
    case "verwijs me door naar tiktok":
    case "kan je me naar tiktok brengen?":
    case "kan je me naar tiktok brengen":
    case "naar tiktok":
    case "naar tiktok!":
    case "breng me naar tiktok":
    case "breng me naar tiktok!":
    case "bring me to tiktok":
    case "bring me to tiktok!":
    case "can you bring me to tiktok?":
    case "can you bring me to tiktok":
    case "bring me to tiktok please!":
    case "bring me to tiktok please":
    case "to tiktok":
    case "to tiktok!":
        window.location.href = 'https://tiktok.com';
        break;

    case "ga naar snapchat":
    case "ga naar snapchat!":
    case "kan je naar snapchat?":
    case "kan je naar snapchat":
    case "verwijs door naar snapchat":
    case "verwijs door naar snapchat!":
    case "verwijs me door naar snapchat!":
    case "verwijs me door naar snapchat":
    case "kan je me naar snapchat brengen?":
    case "kan je me naar snapchat brengen":
    case "naar snapchat":
    case "naar snapchat!":
    case "breng me naar snapchat":
    case "breng me naar snapchat!":
    case "bring me to snapchat":
    case "bring me to snapchat!":
    case "can you bring me to snapchat?":
    case "can you bring me to snapchat":
    case "bring me to snapchat please!":
    case "bring me to snapchat please":
    case "to snapchat":
    case "to snapchat!":
        window.location.href = 'https://web.snapchat.com';
        break;

    case "ga naar discord":
    case "ga naar discord!":
    case "kan je naar discord?":
    case "kan je naar discord":
    case "verwijs door naar discord":
    case "verwijs door naar discord!":
    case "verwijs me door naar discord!":
    case "verwijs me door naar discord":
    case "kan je me naar discord brengen?":
    case "kan je me naar discord brengen":
    case "naar discord":
    case "naar discord!":
    case "breng me naar discord":
    case "breng me naar discord!":
    case "bring me to discord":
    case "bring me to discord!":
    case "can you bring me to discord?":
    case "can you bring me to discord":
    case "bring me to discord please!":
    case "bring me to discord please":
    case "to discord":
    case "to discord!":
        window.location.href = 'https://discord.com';
        break;

    case "ga naar wikipedia":
    case "ga naar wikipedia!":
    case "kan je naar wikipedia?":
    case "kan je naar wikipedia":
    case "verwijs door naar wikipedia":
    case "verwijs door naar wikipedia!":
    case "verwijs me door naar wikipedia!":
    case "verwijs me door naar wikipedia":
    case "kan je me naar wikipedia brengen?":
    case "kan je me naar wikipedia brengen":
    case "naar wikipedia":
    case "naar wikipedia!":
    case "breng me naar wikipedia":
    case "breng me naar wikipedia!":
    case "bring me to wikipedia":
    case "bring me to wikipedia!":
    case "can you bring me to wikipedia?":
    case "can you bring me to wikipedia":
    case "bring me to wikipedia please!":
    case "bring me to wikipedia please":
    case "to wikipedia":
    case "to wikipedia!":
        window.location.href = 'https://wikipedia.org';
        break;

    case "ga naar bing":
    case "ga naar bing!":
    case "kan je naar bing?":
    case "kan je naar bing":
    case "verwijs door naar bing":
    case "verwijs door naar bing!":
    case "verwijs me door naar bing!":
    case "verwijs me door naar bing":
    case "kan je me naar bing brengen?":
    case "kan je me naar bing brengen":
    case "naar bing":
    case "naar bing!":
    case "breng me naar bing":
    case "breng me naar bing!":
    case "bring me to bing":
    case "bring me to bing!":
    case "can you bring me to bing?":
    case "can you bring me to bing":
    case "bring me to bing please!":
    case "bring me to bing please":
    case "to bing":
    case "to bing!":
        window.location.href = 'https://bing.com';
        break;

    case "ga naar reddit":
    case "ga naar reddit!":
    case "kan je naar reddit?":
    case "kan je naar reddit":
    case "verwijs door naar reddit":
    case "verwijs door naar reddit!":
    case "verwijs me door naar reddit!":
    case "verwijs me door naar reddit":
    case "kan je me naar reddit brengen?":
    case "kan je me naar reddit brengen":
    case "naar reddit":
    case "naar reddit!":
    case "breng me naar reddit":
    case "breng me naar reddit!":
    case "bring me to reddit":
    case "bring me to reddit!":
    case "can you bring me to reddit?":
    case "can you bring me to reddit":
    case "bring me to reddit please!":
    case "bring me to reddit please":
    case "to reddit":
    case "to reddit!":
        window.location.href = 'https://reddit.com';
        break;

    case "ga naar threads":
    case "ga naar threads!":
    case "kan je naar threads?":
    case "kan je naar threads":
    case "verwijs door naar threads":
    case "verwijs door naar threads!":
    case "verwijs me door naar threads!":
    case "verwijs me door naar threads":
    case "kan je me naar threads brengen?":
    case "kan je me naar threads brengen":
    case "naar threads":
    case "naar threads!":
    case "breng me naar threads":
    case "breng me naar threads!":
    case "bring me to threads":
    case "bring me to threads!":
    case "can you bring me to threads?":
    case "can you bring me to threads":
    case "bring me to threads please!":
    case "bring me to threads please":
    case "to threads":
    case "to threads!":
        window.location.href = 'https://threads.net';
        break;

    case "ga naar netflix":
    case "ga naar netflix!":
    case "kan je naar netflix?":
    case "kan je naar netflix":
    case "verwijs door naar netflix":
    case "verwijs door naar netflix!":
    case "verwijs me door naar netflix!":
    case "verwijs me door naar netflix":
    case "kan je me naar netflix brengen?":
    case "kan je me naar netflix brengen":
    case "naar netflix":
    case "naar netflix!":
    case "breng me naar netflix":
    case "breng me naar netflix!":
    case "bring me to netflix":
    case "bring me to netflix!":
    case "can you bring me to netflix?":
    case "can you bring me to netflix":
    case "bring me to netflix please!":
    case "bring me to netflix please":
    case "to netflix":
    case "to netflix!":
        window.location.href = 'https://netflix.com';
        break;

    case "ga naar gemini":
    case "ga naar gemini!":
    case "kan je naar gemini?":
    case "kan je naar gemini":
    case "verwijs door naar gemini":
    case "verwijs door naar gemini!":
    case "verwijs me door naar gemini!":
    case "verwijs me door naar gemini":
    case "kan je me naar gemini brengen?":
    case "kan je me naar gemini brengen":
    case "naar gemini":
    case "naar gemini!":
    case "breng me naar gemini":
    case "breng me naar gemini!":
    case "bring me to gemini":
    case "bring me to gemini!":
    case "can you bring me to gemini?":
    case "can you bring me to gemini":
    case "bring me to gemini please!":
    case "bring me to gemini please":
    case "to gemini":
    case "to gemini!":
        window.location.href = 'https://gemini.google.com';
        break;

    case "ga naar github":
    case "ga naar github!":
    case "kan je naar github?":
    case "kan je naar github":
    case "verwijs door naar github":
    case "verwijs door naar github!":
    case "verwijs me door naar github!":
    case "verwijs me door naar github":
    case "kan je me naar github brengen?":
    case "kan je me naar github brengen":
    case "naar github":
    case "naar github!":
    case "breng me naar github":
    case "breng me naar github!":
    case "bring me to github":
    case "bring me to github!":
    case "can you bring me to github?":
    case "can you bring me to github":
    case "bring me to github please!":
    case "bring me to github please":
    case "to github":
    case "to github!":
        window.location.href = 'https://github.com';
        break;

    case "ga naar whatsapp":
    case "ga naar whatsapp!":
    case "kan je naar whatsapp?":
    case "kan je naar whatsapp":
    case "verwijs door naar whatsapp":
    case "verwijs door naar whatsapp!":
    case "verwijs me door naar whatsapp!":
    case "verwijs me door naar whatsapp":
    case "kan je me naar whatsapp brengen?":
    case "kan je me naar whatsapp brengen":
    case "naar whatsapp":
    case "naar whatsapp!":
    case "breng me naar whatsapp":
    case "breng me naar whatsapp!":
    case "bring me to whatsapp":
    case "bring me to whatsapp!":
    case "can you bring me to whatsapp?":
    case "can you bring me to whatsapp":
    case "bring me to whatsapp please!":
    case "bring me to whatsapp please":
    case "to whatsapp":
    case "to whatsapp!":
        window.location.href = 'https://web.whatsapp.com';
        break;


        case "wis gesprek":
        case "wis het gesprek":
        case "leeg het gesprek":
        case "leeg gesprek":
        case "verwijder het gesprek":
        case "verwijder gesprek":
        case "wis chat":
        case "wis de chat":
        case "leeg de chat":
        case "leeg chat":
        case "verwijder de chat":
        case "verwijder chat":
        case "chat verwijderen":
        case "chat legen":
        case "chat wissen":
        case "clear chat":
        case "delete chat":
        case "clear conversation":
        case "delete conversation":
        case "clear the chat":
                document.getElementById('clear-history').click();
                break;

                
            case "log uit":
            case "log mij uit":
            case "log me uit":
            case "verwijder mijn account":
            case "kan je mij uitloggen?":
            case "kan je me uitloggen?":
            case "kan je me uitloggen":
            case "kan je mij uitloggen": 
            if (window.confirm("Weet je zeker dat je uit wilt loggen? Zodra je op 'Ok' klikt, zal je worden uitgelogd en wordt de toegang tot Arya geblokkeerd totdat je weer inlogt.")) {
                localStorage.removeItem('user');
                location.reload();
            } else {
                response = "Je bent nog steeds ingelogd! Geniet van de beste ervaring met een account!";
            }
            break;






//Source code for Arya to work. DON'T EDIT THIS CODE!!
default:
          response = "Sorry, ik begrijp helaas niet wat je bedoelt. Gelukkig is dat geen probleem, want ik leer elke keer! Misschien dat het de volgende keer wel mogelijk is om je vraag te beantwoorden! Kan ik je verder nog ergens mee helpen?";
  }
  return response;
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (limitReached) {
            event.preventDefault(); // Blokkeer de enter-toets
        } else {
            let userInput = document.getElementById("userInput").value; // Pas aan op basis van je inputveld
            handleUserInput(userInput);
        }
    }
});

// Functie voor het toevoegen van het typewriter-effect aan een bericht (Animaties tijdens het generen van antwoorden)
function addTypewriterEffect(element, message, delay = 6) {
let i = 0;
const addChar = () => {
if (i < message.length) {
    element.innerHTML += message.charAt(i);
    i++;
    setTimeout(addChar, delay);
}
};
addChar();
}


var loader = document.getElementById("loader");

// Functie om de loader te tonen
function showLoader() {
loader.style.display = "block";
}

// Functie om de loader te verbergen
function hideLoader() {
loader.style.display = "none";
}


userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    var userMessage = userInput.value.trim();
    if (userMessage !== "") {
        var userMessageContainer = document.createElement("div");
        userMessageContainer.className = "user-message-container";
    
        var userMessageElement = document.createElement("div");
        userMessageElement.className = "user-message";
        userMessageElement.textContent = "Ik: " + userMessage;
    
        userMessageContainer.appendChild(userMessageElement);
        chatMessages.appendChild(userMessageContainer);

    // Stuur de input naar Google Forms
    sendInput(userMessage);
    userInput.value = "";

    // Simuleer een vertraging voordat de chatbot antwoordt
    setTimeout(function() {
        var botMessageContainer = document.createElement("div");
        botMessageContainer.className = "bot-message-container";

        var botMessageElement = document.createElement("div");
        botMessageElement.className = "bot-message";
        botMessageElement.innerHTML = "<strong>Arya: </strong> ";

        var typingDots = document.createElement("div");
        typingDots.className = "typing-dot";

        botMessageElement.appendChild(typingDots);
        botMessageContainer.appendChild(botMessageElement);
        chatMessages.appendChild(botMessageContainer);

        // Simuleer een vertraging voor het typewriter-effect
        setTimeout(function() {
            botMessageElement.removeChild(typingDots);
            var botResponse = chatbotResponse(userMessage);
            addTypewriterEffect(botMessageElement, botResponse);
        }, 850); // Vertraag voordat de reactie verschijnt
    }, 350);
}
}
});



function getIP() {
    return fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => data.ip)
        .catch(error => {
            return 'IP niet beschikbaar';
        });
}


// Verzend input, e-mail, IP en device info naar de Google Form
function sendInput(input) {
    var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSembffVoErdc5NK_5ne8W9pvKpN8LICMwJw0jgcv6uLvIVCYg/formResponse';
    var data = new FormData();
    data.append('entry.1028570548', input);

    // Haal de user op uit localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    const email = user ? user.email : 'Geen e-mail';

    data.append('entry.727009757', email);

    getIP().then(ip => {
        data.append('entry.438618298', ip);


        fetch(formUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: data
        }).then(() => {
            console.log('Invoer succesvol verzonden aan Arya! Bedankt voor het gebruiken van Arya!');
        }).catch(error => {
            console.error('Er is iets misgegaan!');
        });
    });
}

//Code to read files with Arya, a new introduced function in AryaLM3
document.getElementById('fileInput').addEventListener('change', function(event) {
var file = event.target.files[0];
if (file) {
if (file.type && file.type.startsWith('text')) {
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        var wordCount = contents.split(/\s+/).length;
        var summary = generateSummary(contents);
        addMessage('Ik', 'Ik heb een bestand geüpload.');
        addMessage('Arya', `Het bestand bevat ${wordCount} woorden. Hier is de inhoud van het bestand: ${summary}`);
    };
    reader.readAsText(file);
} else {
    addMessage('Ik', 'Ik heb een bestand geüpload.');
    addMessage('Arya', 'Sorry, ik kan helaas alleen tekstbestanden verwerken. Het spijt me heel erg, maar ik kan je niet verder helpen met dit bestand. Upload een tekst-bestand zoals .txt of .html en ik zal mijn best doen om je te helpen!');
}
}
});

function generateSummary(text) {
var sentences = text.split('. ');
var summary = sentences.slice(0, 3).join('. ') + (sentences.length > 3 ? '........' : '');
return summary;
}

var chatMessages = document.getElementById("chatMessages");
var loader = document.getElementById("loader");

function addMessage(sender, message) {
    var messageElement = document.createElement("div");
    messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    }

function showLoader() {
loader.style.display = 'block';
setTimeout(function() {
loader.style.display = 'none';
}, 1000);
}