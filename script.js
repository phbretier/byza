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
    const urlWindy =`https://www.windy.com/plugin/sdg/aromeFrance/${latitude}/${longitude}?aromeFrance,clouds,${latitude},${longitude},10,i:pressure,p:wind`;
    const urlVelivole =`https://www.velivole.fr/profile?lat=${latitude}&long=${longitude}&model=AROME`;
    const urlSondage =`https://www.meteociel.fr/modeles/sondage2arome.php?mode=0&lon=${longitude}&lat=${latitude}&ech=0&map=0`;
    return `
        <td colspan="${colspan}">
            <a href="${urlMeteociel}">${nom}</a>
            <br>
            <div style="height: 10px;"></div>
            <a href="${urlWindy}" target="_blank" class="big">📈</a>
            &hairsp;
            <a href="${urlVelivole}" target="_blank" class="big">📊</a>
            &hairsp;
            <a href="${urlSondage}" target="_blank" class="big">📉</a>
            <div style="height: 10px;"></div>
        </td>
    `;
}
function liens() {
    return `
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
            <td colspan="3">
                <a href="plaine.html">Plaine</a>
            </td>
            <td colspan="3">
                <a href="mc.html">Massif<br>Central</a>
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
                <a href="vj.html">Vosges<br>Jura</a>
            </td>
        </tr>
    `;
}
