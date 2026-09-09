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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
function celluleMeteo(colspan, cheminMeteociel, nom, latitude, longitude) {
    const urlMeteociel =`https://www.meteociel.fr/previsions-arome-1h/${cheminMeteociel}`;
    const urlMeteoParapente =`https://meteo-parapente.com/#/${latitude},${longitude},9`;
    const urlWindy =`https://www.windy.com/plugin/sdg/aromeFrance/${latitude}/${longitude}?aromeFrance,clouds,${latitude},${longitude},10,i:pressure,p:wind`;
    const urlVelivole =`https://www.velivole.fr/profile?lat=${latitude}&long=${longitude}&model=AROME`;
    const urlSondage =`https://www.meteociel.fr/modeles/sondage2arome.php?mode=0&lon=${longitude}&lat=${latitude}&ech=0&map=0`;
    // &emsp; 1 em ; &ensp; 0,5 em ; &nbsp; 0,25-0,33 em ; &thinsp;  0,16-0,20 em ; &hairsp; 0,08-0,10 em
    return `
        <td colspan="${colspan}">
            <a href="${urlMeteociel}">${nom}</a>
            <br>
            <div style="height: 10px;"></div>
            <a href="${urlMeteoParapente}" target="_blank" class="big">🪂</a>
            &thinsp;
            <a href="${urlVelivole}" target="_blank" class="big">📊</a>
            <br>
            <div style="height: 10px;"></div>
            <a href="${urlWindy}" target="_blank" class="big">📈</a>
            &thinsp;
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
                <a href="https://weather.metoffice.gov.uk/maps-and-charts/surface-pressure">Fronts</a>
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
            <td colspan=3">
                <a href="https://www.windy.com/fr/-Nuages-clouds?iconEu,clouds,47.758,1.455,5,i:deg0,p:wind">Nuages</a>
            </td>
            <td colspan="3">
                <a href="https://www.velivole.fr/?center_lat=49.82&center_long=10.75&zoom=5.3">Velivole</a>
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
                <a href="bfk.html">Bzh</a>
            </td>
            <td colspan="2">
                <a href="clecy.html">Normandie</a>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <a href="plaine.html">Plaine</a>
            </td>
            <td colspan="2">
                <a href="mc.html">Massif Central</a>
            </td>
            <td colspan="2">
                <a href="ardeche.html">Ardèche</a>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                <a href="baf.html">BAF</a>
            </td>
            <td colspan="3">
                <a href="sh.html">St Hilaire</a>
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
                <a href="vj.html">Vosges Jura</a>
            </td>
        </tr>
    `;
}
