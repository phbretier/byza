document.write(`
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.1, maximum-scale=4.0">
    <link rel="icon" href="https://png.pngtree.com/png-vector/20240529/ourlarge/pngtree-colorful-logo-design-for-paragliding-png-image_6963179.png" type="image/png" />
    <link rel="stylesheet" href="https://phbretier.github.io/byza/style.css">
`); 


function test(colspan, nom) {
    return `
        <td colspan="${colspan}">
            <a href="#" class="open-menu">${nom}</a>
        </td>
    `;
}

function test2() {
    return `
        <script>
            document.querySelectorAll('.open-menu').forEach(link => {
              link.addEventListener('click', function(e) {
                // remplace le click 
                e.preventDefault();
                // ferme si déjà ouvert et fin
                if (this.nextElementSibling && this.nextElementSibling.classList.contains('menu-opened')) {
                  this.nextElementSibling.remove();
                  return;
                }
                // ferme ceux déjà ouverts
                document.querySelectorAll('.menu-opened').forEach(menu_opened => {
                    menu_opened.remove()
                }
            
                // le container à ouvrir
                const container = document.createElement('div');
                container.className = 'menu-opened';

                const htmlContent = \`
                  <a href="https://meteo-parapente.com/#/\${this.dataset.lat},\${this.dataset.lon},9" target="_blank" class="big">🪂</a>
                  &#8239;
                  <a href="https://www.windy.com/\${this.dataset.lat}/\${this.dataset.lon}/airgram?clouds,\${this.dataset.lat},\${this.dataset.lon},10,i:temp,p:wind" target="_blank" class="big">⛅</a>
                  &#8239;
                  <a href="https://www.velivole.fr/profile?lat=\${this.dataset.lat}&long=\${this.dataset.lon}&model=AROME" target="_blank" class="big">📊</a>
                  <br>
                  <div style="height: 10px;"></div>
                  <a href="meteoblue.html#\${this.dataset.nom}/\${this.dataset.lat}/\${this.dataset.lon}" target="_blank" class="big">🌎</a>
                  &#8239;
                  <a href="https://www.windy.com/plugin/sdg/aromeFrance/\${this.dataset.lat}/\${this.dataset.lon}?aromeFrance,clouds,\${this.dataset.lat},\${this.dataset.lon},10,i:pressure,p:wind" target="_blank" class="big">📈</a>
                  &#8239;
                  <a href="https://www.meteociel.fr/modeles/sondage2arome.php?mode=0&lon=\${this.dataset.lat}&lat=\${this.dataset.lon}&ech=0&map=0" target="_blank" class="big">📉</a>
                  <div style="height: 10px;"></div>
                \`;
                // Insérer le contenu HTML dans le container
                container.innerHTML = htmlContent;

                // Insère le container juste en dessous
                this.after(container);
              });
            });
        </script>
    `;
}

function celluleBalise(colspan, nom, cheminSpotair) {
    const urlSpotair = `https://www.spotair.mobi/widget/wind/${cheminSpotair}?mode=free_flight&unit=kmh&name=false&quadrant=false&windValues=true&dark=true`;
    return `
        <td colspan="${colspan}">
            ${nom}
            <br>
            <iframe width="75" height="75" frameborder="0" src="${urlSpotair}"></iframe>
        </td>
    `;
}
function webcams() {
    return `
        <tr>
            <td>&ensp;&ensp;&ensp;&ensp;&ensp;</td>
            <td>&ensp;&ensp;&ensp;&ensp;&ensp;</td>
            <td>&ensp;&ensp;&ensp;&ensp;&ensp;</td>
            <td>&ensp;&ensp;&ensp;&ensp;&ensp;</td>
            <td>&ensp;&ensp;&ensp;&ensp;&ensp;</td>
            <td>&ensp;&ensp;&ensp;&ensp;&ensp;</td>
        </tr>
        <tr>
            <td class="section" colspan="6">
                Webcams
            </td>
        </tr>
    `;
}
function previs() {
    return `
        <tr>
            <td class="section" colspan="6">
                Prévisions
            </td>
        </tr>
    `;
}
function celluleMeteo(colspan, cheminMeteociel, nom, lat, lon) {
    const urlMeteociel =`https://www.meteociel.fr/previsions-arome-1h/${cheminMeteociel}`;
    const urlMeteoParapente =`https://meteo-parapente.com/#/${lat},${lon},9`;
    const urlFlyXCSounding =`https://www.windy.com/plugin/sdg/aromeFrance/${lat}/${lon}?aromeFrance,clouds,${lat},${lon},10,i:pressure,p:wind`;
    const urlWindyAirgram =`https://www.windy.com/${lat}/${lon}/airgram?clouds,${lat},${lon},10,i:temp,p:wind`;
    const urlVelivole =`https://www.velivole.fr/profile?lat=${lat}&long=${lon}&model=AROME`;
    const urlSondage =`https://www.meteociel.fr/modeles/sondage2arome.php?mode=0&lon=${lon}&lat=${lat}&ech=0&map=0`;
    // &emsp; 1 em ; &ensp; 0,5 em ; &nbsp; 0,25-0,33 em ; &thinsp; &#8239; 0,16-0,20 em ; &hairsp; 0,08-0,10 em
    return `
        <td colspan="${colspan}">
            <a href="${urlMeteociel}">${nom}</a>
            <br>
            <div style="height: 10px;"></div>
            <a href="${urlMeteoParapente}" target="_blank" class="big">🪂</a>
            &#8239;
            <a href="${urlWindyAirgram}" target="_blank" class="big">⛅</a>
            &#8239;
            <a href="${urlVelivole}" target="_blank" class="big">📊</a>
            <br>
            <div style="height: 10px;"></div>
            <a href="${urlFlyXCSounding}" target="_blank" class="big">📈</a>
            &nbsp;
            <a href="${urlSondage}" target="_blank" class="big">📉</a>
            <div style="height: 10px;"></div>
        </td>
    `;
}
function liens() {
    return `
        <tr>
            <td class="section" colspan="6">
                Prévisions Générales
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <a href="https://weather.metoffice.gov.uk/maps-and-charts/surface-pressure">Fronts UK</a>
                <br>
                <a href="https://meteofrance.com/isofronts">Fronts MF</a>
            </td>
            <td colspan="2">
                <a href="https://www.windy.com/fr/-Temp%C3%A9rature-temp?500h,temp,52.000,-3.500,3,i:gh,p:wind">Géopot.</a>
                <br>
                <a href="https://www.windy.com/fr/-Temp%C3%A9rature-temp?500h,temp,52.000,-3.500,3,i:gh,p:wind">500hPa</a>
            </td>
            <td colspan="2">
                <a href="https://www.windy.com/fr/-Temp%C3%A9rature-temp?850h,temp,52.000,-3.500,3,i:temp,p:temp">Temp.</a>
                <br>
                <a href="https://www.windy.com/fr/-Temp%C3%A9rature-temp?850h,temp,52.000,-3.500,3,i:temp,p:temp">850hPa</a>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <a href="https://www.windy.com/fr/-Pression-pressure?pressure,52.000,-3.500,3,i:pressure,p:wind">Pression</a>
            </td>
            <td colspan="2">
                <a href="https://www.windy.com/fr/-Satellite-satellite?satellite,47.758,1.455,5,i:pressure,p:wind">Satellite</a>
            </td>
            <td colspan="2">
                <a href="https://www.windy.com/fr/-Thermiques-ccl?ccl,47.758,1.455,5,i:deg0,p:wind">Plafonds</a>
            </td>
        </tr>
        <tr>
            <td colspan=2">
                <a href="https://www.windy.com/fr/-Nuages-clouds?iconEu,clouds,47.758,1.455,5,i:deg0,p:wind">Nuages</a>
            </td>
            <td colspan="2">
                <a href="https://www.velivole.fr/?center_lat=49.82&center_long=10.75&zoom=5.3">Velivole</a>
            </td>
            <td colspan="2">
                <a href="https://www.meteoblue.com/fr/meteo/cartes#map=windAnimation~rainbow~auto~10%20m%20above%20gnd~pressure2mOverlay&coords=3.84/45.19/1">Meteoblue</a>
            </td>
        </tr>
    
        <tr>
            <td class="section" colspan="6">
                Autres sites <a href="https://puretrack.io/#philippe-bretier">📍</a>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <a href="index.html">Trégor</a>
            </td>
            <td colspan="2">
                <a href="bzh.html">Bzh</a>
            </td>
            <td colspan="2">
                <a href="normandie.html">Normandie</a>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <a href="plaine.html">plaine</a>
            </td>
            <td colspan="2">
                <a href="mc.html">Massif Central</a>
            </td>
            <td colspan="2">
                <a href="ardeche.html">Ardèche</a>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <a href="baf.html">BAF</a>
            </td>
            <td colspan="2">
                <a href="sh.html">St Hilaire</a>
            </td>
            <td colspan="2">
                <a href="jura.html">Jura</a>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <a href="pyr.html">Pyrénées</a>
            </td>
            <td colspan="2">
                <a href="millau.html">Millau</a>
            </td>
            <td colspan="2">
                <a href="vosges.html">Vosges</a>
            </td>
        </tr>
    `;
}
