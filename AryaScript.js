
      // JavaScript code voor de chatbot
      var chatMessages = document.getElementById("chatMessages");
      var userInput = document.getElementById("userInput");

      // Functie om een bericht aan de chat toe te voegen
      function addMessage(sender, message) {
          var messageElement = document.createElement("div");
          messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
          chatMessages.appendChild(messageElement);
      }

      // Functie om een antwoord van de chatbot te geven
      function chatbotResponse(message) {
          var response;
          switch (message.toLowerCase()) {


                case "hallo":
                case "hallo!":
                case "hey!":
                case "hey":
                case  "hoi!":
                case "hoi!!":
                case "hoi!!!":
                case "hoi":
                case "hi":
                case "hi!":
                case "yo":
                case "yo!":
                case "ewa":
                case "ewa!":
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
                case "hey daar!":
                case "hallo, hoe gaat het?":
                case "hoi, fijn je te ontmoeten!":
                case "hey, alles goed?":
                case "hallo, alles goed?":
                case "hoi, wat leuk je te zien!":
                case "goedendag!":
                case "dag!":
                case "hey, hoe gaat het vandaag?":
                case "hallo, hoe is het met jou?":
                  response = "Hoi! Hoe kan ik je helpen? Ik sta hier altijd voor je klaar!";
                  break;

                case "hoe gaat het?":
                case "hoe gaat het":
                case "hoe gaat het??":
                case "hoe gaat het met jou?":
                case "hoe gaat het met jou":
                case "hoe gaat het met jou??":
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
                    response = "Als chatbot heb ik niet letterlijk een gevoel, maar ik heb geen redenen om me niet goed te voelen. Ik voel me dus eigenlijk best goed! Hoe gaat het met jou? Heb je nog iets intressants meegemaakt vandaag of heb je nog iets waar ik je bij kan helpen? Ik sta hier altijd voor je klaar om je te helpen!";
                    break;

            case "met mij gaat het ook goed!":
            case "met mij gaat het ook goed":
            case "ook goed":
            case "ook goed!":
            case "goed!":
            case "goed":
            case "prima!":
            case "prima":
            case "met mij gaat het prima!":
            case "met mij gaat het prima":
                response = "Fijn om te horen dat het goed met je gaat! Kan ik je nog ergens mee helpen?";
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
            case "dankuwel!":
            case "dankuwel":
            case "thx":
            case "thx!":
            case "thanks":
            case "thanks!":
            case "thank you!":
            case "thank you":
                    response = "Graag gedaan! Ik vond het leuk dat ik je kon helpen! Heb je nog meer dingen waar ik je mee kan helpen? Ik kan algemene vragen voor je beantwoorden, je een uitleg geven over een schoolvak, code schrijven en nog veel meer!";
                    break;

                case "wie ben jij?":
                case "wie ben jij":
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
                case "en jij bent?":
                case "en jij bent":
                case "stel je eens voor!":
                case "stel je eens voor":
                case "stel jezelf eens voor!":
                case "stel jezelf eens voor":
                case "kan je jezelf voorstellen?":
                case "kan je jezelf eens voorstellen":
                        response = "Ik ben Arya, de chatbot van op de Online Leerhulp van Armaan en Ryan. Ik ben ontwikkeld met een taalmodel dat ervoor is gemaakt om jou te helpen met persoonlijke zaken en dingen over school. Typ eens 'Wat kan jij doen?' in in het typevak en ontdek wat je mij allemaal kunt vragen. Mocht je vragen hebben; ik sta hier altijd klaar om je te helpen!";
                        break;


            case "ik heb hulp nodig":
            case "ik heb hulp nodig!":
            case "ik heb ergens hulp mee nodig!":
            case "ik heb ergens hulp mee nodig":
            case "kan je me helpen met iets?":
            case "kan je me helpen?":
            case "help me!":
            case "help!":
                response = "Natuurlijk kan ik je helpen! Leg je me probleem of vraag uit en ik zal je proberen te helpen! Houd er wel rekening mee dat ik nog in ontwikkeling ben en dus niet alles begrijp.";
                break;


                case "ik heb een probleem!":
                case "ik heb een probleem":
                case "ik heb een probleempje!":
                case "ik heb een probleempje":
                    response = "Dat kan! Leg me je probleem uit en ik zal je proberen te helpen. Ik ben nog in ontwikkeling dus ik kan niet garanderen dat ik een antwoord voor je heb!";
                    break;

                case "welke talen spreek je?":
                case "welke talen spreek je":
                case "welke talen kan je?":
                case "welke talen kan je":
                case "kan je engels?":
                case "kan je engels":
                case "kan je nederlands?":
                case "kan je nederlands":
                    response = "Momenteel spreek ik Nederlands en een heel klein beetje Engels. Mijn woordenschat en kennis van de taal zal steeds worden verbeterd d.m.v. updates. Ik kan het best Nederlands, maar sommige specifieke Engelse zinnen zal ik ook begrijpen.";
                    break;


        
            case "je bent echt dom!":
            case "je bent echt dom":
            case "je bent echt zo dom!":
            case "je bent echt zo dom":
            case "je bent echt super dom!":
            case "je bent echt super dom":
            case "je snapt echt niks!":
            case "je snapt echt niks":
            case "je snapt echt helemaal niks!":
            case "je snapt echt helemaal niks":
                response = "Ik snap dat je gefrusteerd bent omdat ik je niet begrijp. Mijn oprechte excuses daarvoor! Ik ben nog in ontwikkeling en zal dus niet heel veel begrijpen! Daarom vraag ik je jouw vraag nog een keer te stellen, maar dan op een iets andere manier. Soms kan een ander leesteken al voldoende zijn. Kan ik je nog ergens mee helpen?";
                break;



                case "ben je gay?":
                case "ben je gay":
                case "ben je gay!":
                case "ben je gay??":
                case "gay":
                case "gaytje":
                    response = "Het is belangrijk om iedereen te respecteren! Nu ben ik een chatbot en snap ik niet letterlijk wat je hebt gevraagd, maar bij sommige mensen kan dit kwetsend aankomen en dus is het niet verstandig om dit te vragen. Kan ik je nog bij iets normaals helpen?";
                    break;



                case "wat kan jij doen?":
                case "wat kan je doen?":
                case "wat kan je doen":
                case "wat kan jij doen":
                case "wat kan je?":
                case "wat kan je":
                case "wat kan jij":
                case "wat kan jij?":
                    response = "Als chatbot kan ik jouw helpen met persoonlijke zaken en dingen over school. Zo kan je mij bijvoorbeeld dingen vragen over de onderwerpen die in de bibliotheek staan en je kan mij om hulp vragen over een schoolvak, bijvoorbeeld Nederlands. Ik zal algemene vragen waarschijnlijk snappen, maar met het huidig taalmodel is het lastig om uitgebreidere zinnen te begrijpen. Kan ik je nog ergens mee helpen? Ik sta hier altijd voor je klaar!";
                    break;

              case "wat kan ik hier doen?":
                case "wat kan ik doen op deze site?":
                    case "wat moet ik hier doen?":
                        case "wat is dit?":
                        case "wat is dit":
                response = "Op onze Online Leerhulp kan je in de bibliotheek een uitgebreid scala aan informatie vinden en gebruiken. Op Schoolvakken kan je informatie en hulp krijgen over een schoolvak en op Tools kan je verschillende handige tools gebruiken, zoals een notitie of tekenvak. Kan ik je verder nog ergens mee helpen?";
                break;

                case "begrijp jij context?":
                case "begrijp jij context":
                case "begrijp je context?":
                case "begrijp je context":
                case "snap je context?":
                    response = "Nee, als chatbot kan ik momenteel geen context begrijpen. Daarom kan ik meestal ook niet doorvragen en ik onthoud dus ook niet wat je eerder hebt gezegd. Mijn ontwikkelaars werken hier wel hard aan!";
                    break;


            case "kan je me meer informatie geven over een bepaald onderwerp?":
            case "meer info over onderwerp":
                response = "Ja hoor, op onze Bibliotheek-pagina kan je over veel onderwerpen informatie vinden! Klik op 'Bibliotheek' in het navigatiemenu en kies een onderwerp uit, en vraag vervolgens aan mij 'Geef mij informatie over [onderwerp]'. Ik zal je dan automatisch alle informatie geven die ook in de bibliotheek staat!";
                break;
                
            case "kan je een som oplossen?":
            case "kan je een som oplossen":
            case "los een som op":
                response = "Helaas kan ik dit momenteel niet zelf, maar je kan uiteraard de ingebouwde rekenmachine op de Tools-pagina gebruiken waarmee jij sommen op kan lossen. Hopelijk vind je dit een goed alternatief! Mijn ontwikkelaars werken hier momenteel hard aan en hopen dat dit later wel mogelijk is!";
                break;
                        case "geef mij informatie over nederland":
                        case "info over nederland":
                        case "info over nl":
                            response = "Nederland, een land in Het Koninkrijk der Nederlanden, is een land in West-Europa. Nederland behoort, samen met België en Luxemburg, tot de Benelux. Het Koninkrijk der Nederlanden bestaat, inclusief Nederland natuurlijk, uit landen als Curaçao, Bonaire, Aruba en Sint-Maarten. Nederland heeft een Democratie, wat betekent dat eigenlijk iedereen boven de 18 in het bestuur mag. Omdat er in Nederland 17 miljoen mensen wonen, is het onmogelijk om met zijn allen in het bestuur te zitten. Daarom is er een kabinet, met een Eerste Kamer en Tweede Kamer. De Nederlanders stemmen op een kabinets-lid waarvan wij vinden dat diegene goed is. Die gaat ons dan vertegenwoordigen.";
                            break;


                    case "wie zijn armaan en ryan?":
                    case "wie zijn ryan en armaan?":
                    case "wie zijn jouw ontwikkelaars?":
                    case "wie heeft jou gemaakt?":
                    case "wie heeft jou gemaakt":
                    case "wie zijn jouw ontwikkelaars":
                    case "ontwikkelaars":
                    case "jouw ontwikkelaars":
                        response = "Ryan en Armaan zijn de ontwikkelaars van deze website en ook van mij. Zij hebben deze website ontworpen met HTML, CSS en JavaScript.";
                            break;

                      case "hoe oud ben je?":
                    case "hoe oud ben je":
                        case "hoe oud ben jij?":
                        case "hoe oud ben jij":
                        case "wat is jouw leeftijd?":
                        case "wat is jouw leeftijd":
                            case "wat is je leeftijd?":
                            case "wat is je leeftijd":
                                case "leeftijd":
                                response = "Als chatbot heb ik geen leeftijd. Wel is mijn ontwikkeling begonnen op 18 April 2024. Je zou dit dus kunnen zien als mijn geboorte. Mijn ontwikkeling zal nooit stoppen en mijn fictieve leeftijd dus ook niet."
                                  break;


                case "waar woon je?":
                case "waar woon je":
                case "waar woon jij?":
                case "waar woon jij":
                        response = "Als chatbot heb ik geen huis. Ik ben opgeslagen in een bestand op een computer en server, dus dit zou je een beetje als mijn huis kunnen zien.";
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
                  response ="Natuurlijk! Kunstmatige Intelligentie, kortweg AI genoemd, is een computertechniek waarbij de computer zelf kan denken en taken uit kan voeren door een van tevoren gemaakte database met heel veel data. Door die hele grote database is er genoeg informatie beschikbaar waardoor de computer weet wat 'ie uit moet voeren. Ondanks dat AI een relatif nieuwe 'uitvinding' is, bestaan er echt al héel veel gegevens. Namelijk zo'n 175 Zettabyte, Één Zettabyte is duizend miljard Gigabyte, en dus bestaan er eigenlijk 175 duizend miljard Gigabyte aan AI-gegevens. Op de Bibliotheek is nog veel meer informatie te vinden over AI, maar ook over andere onderwerpen. Kan ik je nog ergens anders mee helpen?";
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
                    response = "Een smartphone is een mobiele telefoon dat veel meer kan dan de 'traditionele' telefoon. Zo heeft een smartphone tegenwoordig meestal een amoled-scherm en meerdere camera's. Een smartphone heeft altijd een scherm, camera en meerdere sensoren. Ook heeft een smartphone een besturingssysteem nodig om te kunnen functioneren. Bekende voorbeelden zijn Android (Google) of iOS (Apple). Wil je meer informatie? Dan kan je op onze Bibliotheek kijken. Hier vind je veel meer informatie over smartphones, maar ook over verschillende andere onderwerpen.";
                    break;



//Source code for our free HTML-course in Dutch

            case "html":
            case "info over html":
            case "wat is html?":
            case "wat is html":
            case "wat betekent html":
            case "wat betekent html?":
                    response = "HTML staat voor Hypertext Markup Language, oftewel de opmaaktaal voor websites. Deze website (en elke andere website) is hiermee gemaakt. De basis van HTML leren kost niet erg veel moeite en tijd, binnen een uur kan je al simpele websites maken. Wil je leren opmaken met HTML? Vraag dit dan aan mij en ik zal je stap voor stap leren opmaken met HTML. Alvast veel leerplezier!";
                    break;



                case "wat is de hoofdstad van frankrijk?":
                case "wat is de hoofdstad van frankrijk":
                case "hoofdstad van frankrijk":
                case "hoofdstad frankrijk":
                        response = "De hoofdstad van Frankrijk is Parijs.";
                        break;


        case "wat is de hoogste berg ter wereld?":
        case "wat is de hoogste berg ter wereld":
        case "wat is de hoogste berg?":
        case "wat is de hoogste berg":
        case "hoogste berg":
        case "hoogste berg ter wereld":
        case "hoogste berg van de wereld":
                response = "De hoogste berg ter wereld is de Mount Everest, gelegen in de Himalaya. De Mount Everest is met om precies te zijn 8848,86 meter de hoogste berg van de wereld. De berg is dus net geen 9 kilometer.";
                break;
            case "wat is de hoofdstad van japan?":
            case "wat is de hoofdstad van japan":
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
                            case "grootste oceaan ter wereld":
                            case "grootste oceaan":
                                        response = "De grootste oceaan ter wereld is de Stille Oceaan.";
                                        break;

                                    case "wat is de grootste woestijn ter wereld?":
                                    case "wat is de grootste oceaan ter wereld":
                                    case "grootste oceaan":
                                    case "grootste oceaan ter wereld":
                                            response = "De grootste woestijn ter wereld is de Sahara.";
                                            break;


                                            case "wat is de kleinste planeet in ons zonnestelsel?":
                                            case "wat is de kleinste planeet?":
                                            case "kleinste planeet":
                                            case "kleinste planeet in ons zonnestelsel":
                                                    response = "De kleinste planeet in ons zonnestelsel is Mercurius.";
                                                                     break;
                     case "wat is de grootste planeet in ons zonnestelsel?":
                        case "wat is de grootste planeet in ons zonnestelsel":
                            case "wat is de grootste planeet?":
                                case "wat is de grootste planeet":
                                    case "grootste planeet":
                                        case "grootste planeet in ons zonnestelsel":
                                    
                                                    response = "De grootste planeet in ons zonnestelsel is Jupiter.";
                                                        break;


                        case "hoeveel landen zijn er in de wereld?":
                        case "hoeveel landen zijn er in de wereld":
                        case "hoe veel landen zijn er?":
                        case "hoeveel landen zijn er":
                        case "aantal landen":
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
    response = "De kleinste oceaan ter wereld is de Zuidelijke Oceaan, ook wel bekend als de Antarctische Oceaan.";
    break;
case "wat is de grootste stad ter wereld?":
    response = "De grootste stad ter wereld qua bevolking is Tokio, Japan.";
    break;
                            case "hoe oud is de aarde?":
                            case "hou oud is de aarde":
                            case "leeftijd aarde":
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
                                            case "wat is de hoofdstad van rusland?":
                                            case "wat is de hoofdstad van rusland":
                                            case "hoofdstad rusland":
                                            case "hoofdstad van rusland":
                                                response = "De hoofdstad van Rusland is Moskou.";
                                                break;
                                            case "wat is het hoogste gebouw ter wereld?":
                                            case "wat is het hoogste gebouw ter wereld":
                                            case "hoogste gebouw ter wereld":
                                            case "hoogste gebouw van de wereld":
                                                response = "Het hoogste gebouw ter wereld is de Burj Khalifa in Dubai, Verenigde Arabische Emiraten.";
                                                break;



                                            case "wat is het grootste continent ter wereld?":
                                            case "wat is het grootste continent ter wereld":
                                            case "wat is het grootste continent van de wereld?":
                                            case "wat is het grootste continent van de wereld":
                                            case "grootste continent van de wereld":
                                            case "grootste continent ter wereld":
                                            case "grootste continent":
                                                response = "Het grootste continent ter wereld is Azië.";
                                                break;

                                            case "wat is het grootste meer ter wereld?":
                                            case "wat is het grootste meer ter wereld":
                                            case "grootste meer ter wereld":
                                                response = "Het grootste meer ter wereld qua oppervlakte is het Kaspische Meer.";
                                                break;

                                            case "wat is de kleinste staat ter wereld?":
                                            case "wat is de kleinste staat ter wereld":
                                            case "wat is de kleinste staat van de wereld?":
                                            case "wat is de kleinste staat van de wereld":
                                            case "kleinste staat":
                                            case "kleinste staat van de wereld":
                                            case "kleinste staat ter wereld":
                                                response = "De kleinste staat ter wereld is Vaticaanstad.";
                                                break;

                                             
                                            case "wat is de grootste boom ter wereld?":
                                            case "wat is de grootste boom ter wereld":
                                            case "wat is de grootste boom?":
                                            case "wat is de grootste boom van de wereld?":
                                            case "wat is de grootste boom van de wereld":
                                            case "wat is de grootste boom":
                                                response = "De grootste boom ter wereld is General Sherman, een reuzensequoia gelegen in het Sequoia National Park in Californië, Verenigde Staten.";
                                                break;

                                                
                                            case "wat is de langste brug ter wereld?":
                                            case "wat is de langste brug ter wereld":
                                            case "langste brug":
                                                response = "De langste brug ter wereld is de Danyang-Kunshan Grand Bridge in China.";
                                                break;

                                            case "wat is de grootste diamant ter wereld?":
                                            case "wat is de grootste diamant ter wereld":
                                            case "grootste diamant ter wereld":
                                            case "grootste diamant":
                                                response = "De grootste diamant ter wereld is de Cullinan, ook bekend als de Ster van Afrika.";
                                                break;


                                            case "hoeveel landen zijn er in europa?":
                                            case "hoeveel landen zijn er in europa":
                                                response = "Er zijn momenteel 50 landen in Europa.";
                                                break;

                                            case "wat is de grootste vulkaan ter wereld?":
                                            case "grootste vulkaan ter wereld":
                                                response = "De grootste vulkaan ter wereld is Mauna Loa, gelegen op het eiland Hawaï.";
                                                break;

                                            case "wat is de grootste planeet ter wereld?":
                                            case "wat is de grootste planeet ter wereld":
                                            case "grootste planeet ter wereld":
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
                                            case "wat is de oudste stad van de wereld":
                                            case "wat is de oudste stad?":
                                            case "oudste stad van de wereld":
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
                                                response = "De grootste archipel ter wereld is Indonesië.";
                                                break;

                                            case "wat is de hoogste berg in europa?":
                                            case "wat is de hoogste berg in europa":
                                            case "hoogste berg van europa":
                                                response = "De hoogste berg in Europa is de Elbroes in Rusland.";
                                                break;

                                            
                                            case "wat is de snelste vogel ter wereld?":
                                            case "snelste vogel ter wereld":
                                            case "snelste vogel":
                                                response = "De snelste vogel ter wereld is de slechtvalk.";
                                                break;

                                            case "wat is de snelste vis ter wereld?":
                                            case "wat is de snelste vis ter wereld":
                                                response = "De snelste vis ter wereld is de zeilvis.";
                                                break;

                                           
                                            case "wat is de snelste slak ter wereld?":
                                                response = "De snelste slak ter wereld is de witschubbige slak.";
                                                break;

                                            case "wat is de snelste slang ter wereld?":
                                                response = "De snelste slang ter wereld is de zwarte mamba.";
                                                break;

                                            case "wat is de snelste tor ter wereld?":
                                                response = "De snelste tor ter wereld is de tijgersprinkhaan.";
                                                break;

                                            case "wat is de snelste spin ter wereld?":
                                                response = "De snelste spin ter wereld is de huntsman-spin.";
                                                break;

                                            case "wat is de snelste schorpioen ter wereld?":
                                                response = "De snelste schorpioen ter wereld is de dikke staart schorpioen.";
                                                break;

                                            case "wat is de snelste schildpad ter wereld?":
                                                response = "De snelste schildpad ter wereld is de drieteenschildpad.";
                                                break;

                                            case "wat is de snelste mier ter wereld?":
                                                response = "De snelste mier ter wereld is de Australische trekmier.";
                                                break;
                                                
                                            case "wat is de snelste kakkerlak ter wereld?":
                                                response = "De snelste kakkerlak ter wereld is de Amerikaanse kakkerlak.";
                                                break;
                                        
                                    

                                




//English version of Arya. This code is used to talk English to Arya. If you speak Dutch, we recommended to speak Dutch to Arya because the Dutch version is smarter at the moment.

case "hi how are you?":
case "hi, how are you?":
case "hi how are you":
case "how are you?": 

response  = "I'm doing fine. How are you?"; 
break;


case "what can ido on this website?":
case "what can i do on this website":
case "waht can i find here?":

response = "On this website we have a bunch of cool stuff. You can make an account on this website which resulting of that you can save your notes. You also can use our newest AI-assistent Arya to ask questions and get answers. You are currently chatting with Arya. Also you can use our calculator on our Tools-page. We also have a library on this website so that you can get information about different subjects. And we also have a schedule which you can type in which is very cool and you can make your own notes!";
break; 

case "what is the capital city of the netherlands?":
case "what is the capital city of the netherlands": 

response = "The capital city of The Netherlands is Amsterdam."; 
break; 

case "what is the highest mountain in the world?": 

response = "The highest mountain in the world is the Mount Everest"; 
break; 

case "what is the largest animal on earth?":
             response = "The largest animal on earth is the blue whale.";
             break;
         case "what is the capital of russia?":
             response = "The capital of Russia is Moscow.";
             break;
         case "what is the tallest building in the world?":
             response = "The tallest building in the world is the Burj Khalifa in Dubai, United Arab Emirates.";
             break;
         case "what is the largest continent in the world?":
             response = "The largest continent in the world is Asia.";
             break;
         case "what is the largest lake in the world?":
             response = "The largest lake in the world by surface area is the Caspian Lake.";
             break;
         case "what is the smallest state in the world?":
             response = "The smallest state in the world is Vatican City.";
             break;
         case "what is the largest tree in the world?":
             response = "The largest tree in the world is General Sherman, a giant sequoia located in Sequoia National Park in California, United States.";
             break;
         case "what is the longest bridge in the world?":
             response = "The longest bridge in the world is the Danyang-Kunshan Grand Bridge in China.";
             break;
         case "what is the largest diamond in the world?":
             response = "The largest diamond in the world is the Cullinan, also known as the Star of Africa.";
             break;
         case "how many countries are there in europe?":
             response = "There are 50 countries in Europe.";
             break;
         case "what is the largest volcano in the world?":
             response = "The largest volcano in the world is Mauna Loa, located on the island of Hawaii.";
             break;
         case "what is the largest planet in the world?":
             response = "The largest planet in our solar system is Jupiter.";
             break;
         case "what is the largest city in the world in terms of area?":
             response = "The largest city in the world by area is Hulunbuir in China.";
             break;
         case "what is the oldest city in the world?":
             response = "The oldest city in the world is Damascus, Syria.";
             break;
         case "what is the largest canyon in the world?":
             response = "The largest rift in the world is the Great Divide in Namibia and South Africa.";
             break;
         case "what is the largest airport in the world?":
             response = "The largest airport in the world by area is King Fahd International Airport in Saudi Arabia.";
             break;
         case "what is the largest archipelago in the world?":
             response = "The largest archipelago in the world is Indonesia.";
             break;
         case "what is the highest mountain in europe?":
             response = "The highest mountain in Europe is Mount Elbrus in Russia.";
             break;
         case "what is the smallest planet in our solar system?":
             response = "The smallest planet in our solar system is Mercury.";
             break;
         case "what is the fastest animal on land?":
             response = "The fastest land animal on Earth is the cheetah.";
             break;
         case "what is the fastest bird in the world?":
             response = "The fastest bird in the world is the peregrine falcon.";
             break;
         case "what is the fastest fish in the world?":
             response = "The fastest fish in the world is the sailfish.";
             break;
         case "what is the fastest land animal in the world?":
             response = "The fastest land animal on Earth is the cheetah.";
             break;
         case "what is the fastest snail in the world?":
             response = "The fastest snail in the world is the white-shelled snail.";
             break;
         case "what is the fastest snake in the world?":
             response = "The fastest snake in the world is the black mamba.";
             break;
         case "what is the fastest beetle in the world?":
             response = "The fastest beetle in the world is the tiger locust.";
             break;
         case "what is the fastest spider in the world?":
             response = "The fastest spider in the world is the Huntsman spider.";
             break;
         case "what is the fastest scorpion in the world?":
             response = "The fastest scorpion in the world is the fat-tailed scorpion.";
             break;
         case "what is the fastest turtle in the world?":
             response = "The fastest turtle in the world is the three-toed turtle.";
             break;
         case "what is the fastest ant in the world?":
             response = "The fastest ant in the world is the Australian tractor ant.";
             break;
         case "what is the fastest cockroach in the world?":
             response = "The fastest cockroach in the world is the American cockroach.";
             break;
         case "what is the fastest snail in the world?":
             response = "The fastest snail in the world is the white-shelled snail";
break;
case "what color is the sky on a clear day?":

  response = "Blue";

  break;
 
case "what shape is a stop sign?":

  response = "Octagon";

  break;
 
case "how many legs does a spider have?":

  response = "Eight";

  break;
 
case "what do bees make?":

  response = "Honey";

  break;
 
case "what is the opposite of hot?":

  response = "Cold";

  break;
 
case "what do you use to write on a blackboard?":

  response = "Chalk";

  break;
 
case "what fruit do raisins come from?":

  response = "Grapes";

  break;
 
case "what is 2 + 2?":

  response = "4";

  break;
 
case "what color are bananas?":

  response = "Yellow";

  break;
 
case "what do you call a baby dog?":

  response = "Puppy";

  break;
 
case "what is the opposite of fast?":

  response = "Slow";

  break;
 
case "what do you use to cut paper?":

  response = "Scissors";

  break;
 
case "what is the color of snow?":

  response = "White";

  break;
 
case "what sound does a cow make?":

  response = "Moo";

  break;
 
case "what do you call a house made of ice?":

  response = "Igloo";

  break;
 
case "what is the opposite of wrong?":

  response = "Right";

  break;
 
case "what do you call a baby cat?":

  response = "Kitten";

  break;
 
case "what is the color of grass?":

  response = "Green";

  break;
 
case "what do you call the place where you buy groceries?":

  response = "Supermarket";

  break;
 
case "what is the opposite of day?":

  response = "Night";

  break;

  case "what is the capital of the netherlands?":
    response = "The capital of the Netherlands is Amsterdam.";
    break;
  case "how are people from the netherlands called in english?":
    response = "People from the Netherlands are called Dutch.";
    break;
  case "what is the currency in use in the netherlands?":
    response = "The currency used in the Netherlands is the Euro.";
    break;
  case "how many countries do the netherlands share a land border with?":
    response = "The Netherlands shares a land border with two countries: Germany and Belgium.";
    break;
  case "what colors are on the flag of the netherlands?":
    response = "The colors on the flag of the Netherlands are red, white, and blue.";
    break;
  case "what animal is miffy?":
    response = "Miffy is a rabbit.";
    break;
  case "what sport is ruud gullit known for?":
    response = "Ruud Gullit is known for football.";
    break;
  case "which famous dutch dancer was convicted of being a spy for germany during ww1?":
    response = "The famous Dutch dancer convicted of being a spy for Germany during WW1 was Mata Hari.";
    break;
  case "who is the current king of the netherlands?":
    response = "The current king of the Netherlands is Willem-Alexander.";
    break;
  case "what black sweet is particularly popular in the netherlands?":
    response = "Liquorice is particularly popular in the Netherlands.";
    break;
  case "how many people live in the netherlands as of 2020?":
    response = "As of 2020, 17.44 million people live in the Netherlands.";
    break;
  case "how many provinces are there in the netherlands?":
    response = "There are 12 provinces in the Netherlands.";
    break;
  case "which of the following is not part of the kingdom of the netherlands?":
    response = "Guadeloupe is not part of the kingdom of the Netherlands.";
    break;
  case "which of the following was not painted by vincent van gogh?":
    response = "Guernica was not painted by Vincent Van Gogh.";
    break;
  case "which of the following is not a dutch beer?":
    response = "Duvel is not a Dutch beer.";
    break;
  case "what flower does the netherlands produce most?":
    response = "The Netherlands produces tulips the most.";
    break;
  case "how many times did johan cruyff win the ballon d'or?":
    response = "Johan Cruyff won the Ballon D'or three times.";
    break;
  case "what is armin van buuren known for?":
    response = "Armin van Buuren is known for being a DJ.";
    break;
  case "how many canals are in amsterdam?":
    response = "There are 165 canals in Amsterdam.";
    break;
  case "when was amsterdam founded?":
    response = "Amsterdam was founded in 1275.";
    break;

    case "what is the capital of palestine?":
    response = "The capital of Palestine is East Jerusalem.";
    break;
 
case "what year was the palestinian authority established?":
    response = "The Palestinian Authority was established in 1994.";
    break;
 
case "what is the significance of the oslo accords?":
    response = "The Oslo Accords were significant because they were the first direct, face-to-face agreement between Israel and the PLO.";
    break;
 
case "what is the population of palestine?":
    response = "The estimated population of Palestine is around 5 million.";
    break;
 
case "what are the official languages of palestine?":
    response = "The official languages of Palestine are Arabic and Hebrew.";
    break;
 
case "what currency is used in palestine?":
    response = "The currency used in Palestine is the Israeli new shekel.";
    break;
 
case "what is the name of the palestinian legislative body?":
    response = "The Palestinian legislative body is called the Palestinian Legislative Council.";
    break;
 
case "what is the largest city in palestine?":
    response = "The largest city in Palestine is Gaza City.";
    break;
 
case "what is the main religion practiced in palestine?":
    response = "The main religion practiced in Palestine is Islam.";
    break;
 
case "what is the name of the barrier separating parts of palestine and israel?":
    response = "The barrier is commonly referred to as the West Bank barrier or the separation wall.";
    break;
 
case "what is the historical significance of the city of bethlehem?":
    response = "Bethlehem is historically significant as the birthplace of Jesus according to Christian tradition.";
    break;
 
case "what is the dominant political party in the palestinian territories?":
    response = "The dominant political party is Fatah.";
    break;
 
case "what is the name of the palestinian president as of 2024?":
    response = "The name of the Palestinian president as of 2024 is not available in my current dataset.";
    break;
 
case "what are the colors of the palestinian flag?":
    response = "The colors of the Palestinian flag are black, white, green, and red.";
    break;
 
case "what is the status of palestine in the united nations?":
    response = "Palestine has a non-member observer state status in the United Nations.";
    break;
 
case "what is the significance of the dome of the rock?":
    response = "The Dome of the Rock is significant as an Islamic shrine located on the Temple Mount in the Old City of Jerusalem.";
    break;
 
case "what is the main agricultural product of palestine?":
    response = "The main agricultural product of Palestine is olives.";
    break;
 
case "what body of water borders the gaza strip?":
    response = "The Mediterranean Sea borders the Gaza Strip.";
    break;
 
case "what is the palestinian diaspora?":
    response = "The Palestinian diaspora refers to the dispersion of Palestinian people outside their homeland.";
    break;
 
case "what is the significance of the right of return for palestinians?":
    response = "The Right of Return is significant for Palestinians as it is the assertion of their right to return to the land from which they were displaced.";
    break;







//Source code for Arya to work. DON'T EDIT THIS CODE!!
    default:
                  response = "Sorry, ik begrijp helaas niet wat je bedoelt. De kans is groot dat jouw vraag nog niet in onze code staat. Geef dit alsjeblieft door via het contact-formulier onderaan deze pagina met de exacte vraag die je hebt gegeven aan Arya en wij zullen dit zo snel mogelijk toevoegen aan onze code. Alvast bedankt!";
          }
          return response;
      }




// Functie voor het toevoegen van het typewriter-effect aan een bericht (Animaties tijdens het generen van antwoorden)
function addTypewriterEffect(element, message, delay = 12) {
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

// Event listener voor het verzenden van een bericht wanneer de gebruiker op Enter drukt
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        var userMessage = userInput.value.trim();
        if (userMessage !== "") {
            addMessage("Ik", userMessage);
            userInput.value = "";

            // Simuleer een vertraging voordat de chatbot antwoordt (voor realistischer effect)
            setTimeout(function() {
                var botResponse = chatbotResponse(userMessage);
                var responseElement = document.createElement("div");
                responseElement.innerHTML = "<strong>Arya:</strong> ";
                chatMessages.appendChild(responseElement);
                addTypewriterEffect(responseElement, botResponse);
            }, 275);
        }
    }
});
