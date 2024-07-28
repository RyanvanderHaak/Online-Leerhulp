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
                case "hoi":
                case "hi":
                case "hi!":
                case "yo":
                case "yo!":
                case "ewa":
                case "ewa!":
                  response = "Hoi! Hoe kan ik je helpen?";
                  break;

                case "hoe gaat het?":
                case "hoe gaat het met jou?":
                case "hoe gaat 'ie?":
                    response = "Goed hoor! Hoe gaat het met jou?";
                    break;
            case "met mij gaat het ook goed!":
            case "met mij gaat het ook goed":
            case "ook goed":
            case "ook goed!":
                response = "Fijn om te horen dat het goed gaat! Kan ik je nog ergens mee helpen?";
                break;


            case "bedankt":
            case "bedankt!":
                    case "thx":
                    case "thx!":
                            case "thanks":
                            case "thanks!":
                                    case "thank you!":
                                    case "thank you":
                  response = "Geen probleem! Ik sta altijd klaar om je te helpen!";
                  break;

                  case "wie ben jij?":
                    case "wie ben jij":
                        case "hoe heet je?":
                        case "hoe heet jij?":
                        case "hoe heet je":
                        case "hoe heet jij":
                            case "wat is je naam?":
                            case "wat is je naam":
                                case "wat is jouw naam?":
                                case "wat is jouw naam":
                                    response = "Ik ben Arya, de gloednieuwe AI-assistent van Armaan en Ryan. Ik ben getraind met een AI-model dat is gemaakt om jou te helpen met persoonlijke zaken en dingen over school. Typ eens 'Wat kan jij doen?' in in het typevak en ontdek wat je mij allemaal kunt vragen. Mocht je vragen hebben; ik sta hier altijd klaar om je te helpen!";
                                    break;
            case "ik heb hulp nodig":
            case "ik heb hulp nodig!":
            case "ik heb ergens hulp mee nodig!":
            case "ik heb ergens hulp mee nodig":
            case "kan je me helpen met iets?":
            case "kan je me helpen?":
                response = "Natuurlijk kan ik je helpen! Leg je me probleem of vraag uit en ik zal je proberen te helpen!";
                break;

                case "wat kan jij doen?":
                case "wat kan je doen?":
                case "wat kan je doen":
                case "wat kan jij doen":
                    response = "Als chatbot kan ik jouw helpen met persoonlijke zaken en dingen over school. Zo kan je mij bijvoorbeeld dingen vragen over de onderwerpen die in de bibliotheek staan en je kan mij om hulp vragen over een schoolvak, bijvoorbeeld Nederlands. Klik bovenaan dit veld op een button en hier staat alle prompts in die jij mij momenteel kunt geven. Kan ik je nog ergens mee helpen?";
                    break;

              case "wat kan ik hier doen?":
                case "wat kan ik doen op deze site?":
                    case "wat moet ik hier doen?":
                        case "wat is dit?":
                        case "wat is dit":
                response = "Op onze Online Leerhulp kan je in de bibliotheek een uitgebreid scala aan informatie vinden en gebruiken. Op Schoolvakken kan je informatie en hulp krijgen over een schoolvak en op Tools kan je verschillende handige tools gebruiken, zoals een notitie of tekenvak. Kan ik je verder nog ergens mee helpen?";
                break;

            case "kan je me meer informatie geven over een bepaald onderwerp?":
                response = "Ja hoor, op onze Bibliotheek-pagina kan je over veel onderwerpen informatie vinden! Klik op 'Bibliotheek' in het navigatiemenu en kies een onderwerp uit, en vraag vervolgens aan mij 'Geef mij informatie over [onderwerp]'. Ik zal je dan automatisch alle informatie geven die ook in de bibliotheek staat!";
                break;
            case "kan je een som oplossen?":
                response = "Helaas kan ik dit momenteel niet zelf, maar je kan uiteraard de ingebouwde rekenmachine op de Tools-pagina gebruiken waarmee jij sommen op kan lossen. Hopelijk vind je dit een goed alternatief! Wij werken hier momenteel aan en hopen dat dit later wel mogelijk is!";
                break;
                        case "geef mij informatie over nederland":
                            response = "Nederland, een land in Het Koninkrijk der Nederlanden, is een land in West-Europa. Nederland behoort, samen met België en Luxemburg, tot de Benelux. Het Koninkrijk der Nederlanden bestaat, inclusief Nederland natuurlijk, uit landen als Curaçao, Bonaire, Aruba en Sint-Maarten. Nederland heeft een Democratie, wat betekent dat eigenlijk iedereen boven de 18 in het bestuur mag. Omdat er in Nederland 17 miljoen mensen wonen, is het onmogelijk om met zijn allen in het bestuur te zitten. Daarom is er een kabinet, met een Eerste Kamer en Tweede Kamer. De Nederlanders stemmen op een kabinets-lid waarvan wij vinden dat diegene goed is. Die gaat ons dan vertegenwoordigen.";
                            break;


                    case "wie zijn armaan en ryan?":
                    case "wie zijn ryan en armaan?":
                        response = "Ryan en Armaan zijn de ontwikkelaars van deze website en tevens ook van mij. Zij hebben deze website ontworpen met HTML, CSS en JavaScript.";
                            break;

                      case "ben je gay":
                        response ="Als AI-chatbot heb ik geen relatie met iemand. Ik ben zelfs niet eens een geslacht aangezien ik niet echt besta. Wil je me meer vertellen over jouw relaties of zullen we het hierbij laten?";
                            break;

                            case "je moeder":
            response = "Omdat ik een AI-chatbot ben, heb ik geen moeder. Ik hoop dat jij wel een aardige en lieve moeder hebt! Als je het goed vindt, kan je iets vertellen over je moeder.";
            break;


                case "geef mij informatie over ai":
                case "geef mij informatie over ki":
                case "informatie over ai":
                  response ="Kunstmatige Intelligentie, kortweg AI genoemd, is een computertechniek waarbij de computer zelf kan denken en taken uit kan voeren door een van tevoren gemaakte database met heel veel data. Door die hele grote database is er genoeg informatie beschikbaar waardoor de computer weet wat 'ie uit moet voeren. Ondanks dat AI een relatif nieuwe 'uitvinding' is, bestaan er echt al héel veel gegevens. Namelijk zo'n 175 Zettabyte, Één Zettabyte is duizend miljard Gigabyte, en dus bestaan er eigenlijk 175 duizend miljard Gigabyte aan AI-gegevens. Dat is écht heel erg veel! Vooral te bedenken dat deze technologie nog verder zal uitbreiden en ontwikkelen! AI laat zichzelf verbeteren door machinaal of automatisch te leren. Dit betekent dat hij zichzelf kan verbeteren door zichzelf te trainen, waardoor hij slimmer wordt. Iedere keer als AI hetzelfde herhaalt, wordt het steeds sneller. Dit is dan ook weer een vorm van zelfverbetering. De Chatbot kan ook door algoritmes zijn fouten herkennen, maar natuurlijk kan het bedrijf of de persoon achter de AI-bot de gegevens veranderen om het beter te maken en eventuele fouten te voorkomen. Ook zijn er 2 vormen van Machine Learning, namelijk supervised en unsupervised machine learning. Supervised leermt met toezicht, unsupervised zonder toezicht. Dit maakt unsupervised dus ook een klein stukje gevaarlijker.";
                  break;

              default:
                  response = "Sorry, ik begrijp niet wat je bedoelt. De kans is groot dat jouw vraag nog niet in onze code staat. Geef dit alsjeblieft door via de Contact-pagina (Link staat onderaan deze pagina!) met de exacte vraag die je hebt gegeven aan Arya en wij zullen dit zo snel mogelijk toevoegen aan onze code. Alvast bedankt!";
          }
          return response;
      }

      // Event listener voor wanneer de gebruiker een bericht typt en op Enter drukt
      userInput.addEventListener("keypress", function(event) {
          if (event.key === "Enter") {
              var userMessage = userInput.value.trim();
              if (userMessage !== "") {
                  addMessage("Ik", userMessage);
                  userInput.value = "";

                  // Simuleer een vertraging voordat de chatbot antwoordt (voor realistischer effect)
                  setTimeout(function() {
                      var botResponse = chatbotResponse(userMessage);
                      addMessage("Arya", botResponse);
                  }, 650);
              }
          }
      });