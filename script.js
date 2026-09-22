document.write(`
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.1, maximum-scale=4.0">
    <link rel="icon" href="favicon.png" type="image/png" />
    <link rel="stylesheet" href="https://phbretier.github.io/byza/style.css">
`);

const iconMP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA/1BMVEVHcExGqupApts/pdpFq+lHwOg+otA6lco7nNA4i8c5lM1Jw+Y/p9M9os87m844lMc3kMU2iMU5jM85kc0ze78ydrkwb7s0gMtAq9Y9pdI+pNQ7m843jMM1hcA1hMA0fr4xdrkvbrUvbbUxcL9Gv+U/qdJAqeA5jM0zer8yer8ua7EsY65EuOFArNUtZrErYq0tZLBFuuZBrdRCs+E+ndwtZ7EsYbRFveBCttpBsNUubLYwcbZKzetIxeVEu9xEuNxEteMqXqpFvuIsYq9GwuBEu91JxuhHwuJFvuFGvuA3hMkwcbQvbLVCsthDteNAqNwxdrc/q9U7m80yecYyeMYiESjjAAAAVXRSTlMABCY8CSiKyOGSOjPQ/////2Q7Z5OuWhnc9ZVB8v/p+v7uwEZ6/2ku2MX/8Nqn4/8yEf51S9momfv/eA8Ysf7QV/+EUf7kQ2LJ3UH5t6xxcvj19jksLdNDuQAAARdJREFUeAG10QMWxDAABNBkbdu2bdvo/a9SGw+LqfvjgB8EqtRqlUbetDq9waA3muTMbLHabHaHQ+90uT1ej8/PMxiwBkNhkzsSjcXiiUQimUpzmMkGc8QzH4lG44ViolQq+1isZKvUiztqhPgjXauXG+SPpjnTyrYpbHaoZ6Nb7xGltP3BkEU2o3p9DMBkOhvMq9WFCNO1ZQPA1Wyw0jab4uk3uss1aG5mfRbENc2b7U4MbJ/7zUErW5EY7W5zlNQc+31dcp6TzSwjMr+nWCrVfBAAOJ0d91CAp8T5fFmT/8zH2fa6ut3ueHIUPs4jP1UO7ub4Cj2DwdfrZWPwzTYzyRyyWSuxnyIU5Z+YLxQQRdS83xrwXTAYoyu/SVqBpwAAAABJRU5ErkJggg==";
const iconMC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAvVBMVEX5yADzwQD/0AD/2ADzygrAthuqqyDTvBfiwhC4siLsxwrw2xShpieSkiXPwSHYyyAlPCgFEBJCWC364Al8eSANGBgMGCBKXSkACBMAAAsYJyIhLRgAAABZYSBEVSNSaCw1QiFDTSQAABQQFw66ui87QBb/6BAAByXg1CEZIRAAIS0sOyMAIjcRGxCgqzNzcSEYOzGCii0VQjyKnTc1UC46XTdLWStXcDSHkSxidjBugTAAABpjYxp0fyjr0BPBaBuqAAAAv0lEQVR4AS0PgwHDQPAaO7XN2Nb+Y/V1NgBghpkKLIHjOcRIABEgiJLMKZKqgW6YForY88Vytd5sRX23PxxVFDid5/rlfLDMw/V2uK9QYHG0H8/X+zPXv7efA7breaofhNEm5kE2BHDc5JjOs1e+X/MAHKBAMS/n5St/ogCHA2G1DOb1grSojYACl/bw6A7vz0n/Vr2DWobmfEnp2vNjBc72Ej1Hs1f16kkOE0xVaWQ5VbiJng48x4g+R4FjjOAPaXYS8eHdAVwAAAAASUVORK5CYII=";
const iconW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAk1BMVEWkBACkAwClAwClBAClBQCkAgClAQCkAACgAAClKiqhAACkHR3mxcT////r0tK4WliwPTubAADjzs7mysmhFhW1VFPZqKfz3t27cXHPi4qsJCGjCgixMzDBgIDIeXi7VFGkAQDZtrbEfHuaAADZrq3Cbm2nJyfQk5K/aWjTnZuvRkX++PimMDD27u725+bJiIesQUAvwJxAAAABsUlEQVR4AT1SCZYqMQgEYkKMn3bcZ5+0+673P90v7KclzYMqNrWJmJ6Ql3MwhBACBYIF2CtB2EPMFJlhj4fYgbCLKHB4Noh3y3MQUuRA0vTwvfAEokcZ2NzPKmUwKOKd4DDOD5Iomv9Zk8vQbFiiCHOCF44RO0UHZvY2GptNRiBFonuAiEmnEGcuznMQApSSC9QjrFyYvbv44WII+vn1reIHSRDstJ8R3G9BGkL+m/7VThTOrdlytTbbFCxj7W9+tgqe/AcpG7Pdame2L/7r5MPgUBQC9QD9NluvNi4iS/31cVecR6efe7LFauZjA4dRe27PykHQiY/kiV1GRyzOFMqw3TZZewQwIHlup++vqx0ya77221t+8CQsVcobukaNjUcyWrfn01QDeOk6NTfW4NxFHu1Oo8U6c2CACBbo8avf7dT/sdnBtpUAdkN3TLnFSfhz7LCzW8Ew8WtrjTXGqtOFXSZml8bWWZ3kWrGzdva1NmsWZgdo3IF8c/DZmqeDnAfTrL4ItOCY18spqimpCnnuDDhH5591r4BSTSnicXiAvDqVJCY/iKSysFtA6pEb8B9ycRvIbx48pwAAAABJRU5ErkJggg==";
const iconFX = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%3e%3cdefs%3e%3clinearGradient%20id='a'%3e%3cstop%20offset='0'%20stop-color='%23259f4a'/%3e%3cstop%20offset='1'%20stop-color='%23124c25'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23a'%20id='d'%20x1='74.5'%20x2='83.8'%20y1='64.3'%20y2='75.8'%20gradientTransform='matrix(4.45%200%200%204.45%20-806%20-26)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23a'%20id='b'%20x1='76.9'%20x2='90.2'%20y1='83.5'%20y2='101.1'%20gradientTransform='matrix(4.45%200%200%204.45%20-806%20-26)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23a'%20id='c'%20x1='74.5'%20x2='83.8'%20y1='64.3'%20y2='75.8'%20gradientTransform='matrix(4.45%200%200%204.45%20-806%20-26)'%20gradientUnits='userSpaceOnUse'/%3e%3c/defs%3e%3cg%20paint-order='stroke%20markers%20fill'%3e%3cpath%20fill='none'%20stroke='%23ececec'%20stroke-linejoin='round'%20stroke-width='5'%20d='m501%2062-99%2028-13%204-4%201-6%202-75%2021-263%2073-31%2045%20187%2055%2090%2099%2023-34%20114%2093%2063-42%202-49v-5l7-178%201-17z'/%3e%3cpath%20fill='%235e5e5e'%20d='m197%20291%2090%2099L501%2062Z'/%3e%3cpath%20fill='url(%23b)'%20d='m292%20356%208%2062L527%2070z'%20transform='matrix(.94%200%200%20.94%205%20-3)'/%3e%3cpath%20fill='%23d8d8d8'%20d='m10%20236%2031-45L501%2062%20197%20291Z'/%3e%3cpath%20fill='%232fcc5e'%20d='m41%20191%20217%2046L501%2062Z'/%3e%3cpath%20fill='%23d8d8d8'%20d='m280%20332%20144%20117%2063-42%2014-345Z'/%3e%3cpath%20fill='url(%23c)'%20d='m269%20255%2046%2073L527%2070Z'%20transform='matrix(.94%200%200%20.94%205%20-3)'/%3e%3cpath%20fill='url(%23d)'%20d='m328%20282%202%2027L527%2070z'%20transform='matrix(.94%200%200%20.94%205%20-3)'/%3e%3cpath%20fill='%238d7363'%20d='m496%20175-9%20232-173-145%2080-86Z'/%3e%3cpath%20fill='%232799df'%20d='m304%20118%2029%2065%2067-48-21-38z'/%3e%3cpath%20fill='%23e4b119'%20d='m379%2097%2023-7%2018%2031-20%2014z'/%3e%3cpath%20fill='%238d7363'%20d='m402%2090%2018%2031%2081-59z'/%3e%3cpath%20fill='%231b70a4'%20d='m333%20183-34%20118%203%204%2014-17-3-26%2075-79%2012-48z'/%3e%3cpath%20fill='%23a88212'%20d='m400%20135%2020-14-10%2039-22%2023z'/%3e%3cpath%20fill='%2353443a'%20d='m420%20121%2081-59-91%2098Z'/%3e%3cpath%20fill='%23e4b119'%20d='m497%20158-87%202-16%2016%20102-1zm-95%20178%2088-1-1%2023-60%201z'/%3e%3cpath%20fill='%232fcc5e'%20d='m429%20359%2060-1-2%2049z'/%3e%3cpath%20fill-opacity='.7'%20d='m41%20191%20217%2046%2044%2068-3%203-41-63zm275%2097-3-26%20174%20145-163-129z'/%3e%3cpath%20fill='%232fcc5e'%20d='m497%20158%204-96-91%2098Z'/%3e%3c/g%3e%3c/svg%3e";
const iconMF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAALVBMVEVHcEwBWZMBWZMBWZMBWZMBWZMBWZMBWZMBWZMBWZMBWZMBWZMBWZMBWZMBWZO8sJi+AAAADnRSTlMA6tIlinPz5BKguVfXQEh1n8AAAADpSURBVDiNrdPbtsQQDADQVBKJ6/9/7ilDK8xa52XyRG0VAcAvgtwSmUuebR7j1QTmt00diBm/dOlIB5cBxKveQaQEKdbq/VdA2rqsQFH9CQR7r9Sa7/TxAALLnm6LfgM6wJ1B9QApXBakWbU2UVwVskv4p6wjYQ/OgDDHnzIlNuBZAScIaABOUCZw8A/IFpRjiagG8AE4GeD2bVaNtlC4gQDbWeQJ8qhT3A9rlir0ceXzuIdouUXgbxfG9Tw0E35+c4B7ZmqHXsLz4biTbf/rK/gAe+0F186b9xvnwwGS6w3PyY+mEPwi/gB4VBsEeA1nNgAAAABJRU5ErkJggg==";
const iconMB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAdVBMVEUUSGYWSGcJQ2MORmRviJnQ2NyMpbMARGOEmaf4+fmousMAQWH29/crWXRPcYdVdostXnk+ZX1HbIIfUm5phZe7yNDa4OTg5umarLhefZDW3uK0wcn+/f3p7e/v8vIAPF4pVHB2k6OAlqVCaIAbVHHCz9aovMY1LWdqAAAA9klEQVR4AdSRVWLEIBBAJ0wcsrEGHWT1/kdspG7/xeExDv+gZX8wxtivDPOi/E04q+qm/fSAjLNVZldY1aLNGMNXRdid+gE4jP1Y4QZhnObqhT4tUhXaaKtsDbwWi7bWmUPQSPKShA9SUchjHURQgYrTZmluaZmSpqYdBkeuWuG5M1JcVp8xuXDmvFOq53GgAupmAY6aNMAO8wqTlVfGhqa4raFkmJWkZ/wBCg0I5c+SF7EAB00lfoez8T4f8tWhaodihZ1U0wpJzslRkIGWcZOcy7tBTA93Zdjd25kNWgZbDkcCedz+HGvkuC3r2691Q3zeIE2HAADXFCy2Gj9GAAAAAElFTkSuQmCC";
const iconVV = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAP1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC6E+JdAAAAFXRSTlMADgYq31o4/XZQRhrroYOPuc7VZfKE94RIAAAAz0lEQVR4AXRQBQKAIBCjB8LJifz/q3bHTBbExBNSiV9oY/9FB/9JB3kmm3DTlMdMSBent030WK11i2l+wTjxRk5IJEWI9xwDJht0xIC+JwISEyfQvJlUHgfo3Ex3aQ75KRq13tvgbSYNWqxWtaWElcrgzdWBsw6wwua8+F2B2c/ccwdTEIVQah5Hrl4eVSg1eemy0fbRYzoJX8NdVIVF3LZqn2I0JEu/dZNI3kSPIJnWqGor2eZAyJWliHuD0ifUA6h0b126/kAzDpiIhiEAAIYTCNDs4bFsAAAAAElFTkSuQmCC";


function balise(colspan, nom, cheminSpotair) {
    document.write(`
        <td colspan="${colspan}">
            ${nom}
            <br>
            <iframe width="75" height="75" frameborder="0" src="https://www.spotair.mobi/widget/wind/${cheminSpotair}?mode=free_flight&unit=kmh&name=false&quadrant=false&windValues=true&dark=true"></iframe>
        </td>
    `);
}

function SectionWebcams() {
    document.write(`
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
    `);
}

function webcam(colspan, nom, url) {
    document.write(`
        <td colspan="${colspan}">
            <a href="${url}">${nom}</a>
        </td>
    `);
}

function SectionPrevisions() {
    document.write(`
        <tr>
            <td class="section" colspan="6">
                Prévisions
            </td>
        </tr>
    `);
}

function previsions(colspan, cheminMeteociel, nom, lat, lon) {
    const urlMeteociel =`https://www.meteociel.fr/previsions-arome-1h/${cheminMeteociel}`;
    const urlMeteoParapente =`https://meteo-parapente.com/#/${lat},${lon},9`;
    const urlFlyXCSounding =`https://www.windy.com/plugin/sdg/aromeFrance/${lat}/${lon}?aromeFrance,clouds,${lat},${lon},10,i:pressure,p:wind`;
    const urlWindyAirgram =`https://www.windy.com/${lat}/${lon}/airgram?clouds,${lat},${lon},10,i:temp,p:wind`;
    const urlVelivole =`https://www.velivole.fr/profile?lat=${lat}&long=${lon}&model=AROME`;
    const urlSondage =`https://www.meteociel.fr/modeles/sondage2arome.php?mode=0&lon=${lon}&lat=${lat}&ech=0&map=0`;
    // &emsp; 1 em ; &ensp; 0,5 em ; &nbsp; 0,25-0,33 em ; &thinsp; &#8239; 0,16-0,20 em ; &hairsp; 0,08-0,10 em
    document.write(`
        <td colspan="${colspan}">
            <a href="${urlMeteociel}">${nom}</a>
            <br>
            <div style="height: 10px;"></div>
            <a href="${urlMeteoParapente}" target="_blank" class="big"><img src="https://meteo-parapente.com/v5/icons/icon-180.png" alt="🪂" width="24px"/></a>
            &#8239;
            <a href="${urlWindyAirgram}" target="_blank" class="big"><img src="https://www.windy.com/favicon.ico" alt="⛅" width="24px"/></a>
            &#8239;
            <a href="${urlVelivole}" target="_blank" class="big"><img src="${iconVV}" style="filter: invert(1);" alt="📊" width="24px"/></a>
            <br>
            <div style="height: 10px;"></div>
            <a href="meteoblue.html#${encodeURIComponent(nom.replace(/<[^>]*>/g, ' '))}/${lat}/${lon}" target="_blank" class="big"><img src="https://www.meteoblue.com/favicon.ico" alt="🌎" width="24px"/></a>
            &#8239;
            <a href="${urlFlyXCSounding}" target="_blank" class="big"><img src="https://flyxc.app/static/img/jumoplane.svg" alt="📈" width="24px"/></a>
            &#8239;
            <a href="${urlSondage}" target="_blank" class="big"><img src="https://meteofrance.fr/sites/default/files/favicon_0.png" alt="📉" width="24px"/></a>
            <div style="height: 10px;"></div>
        </td>
    `);
}

function previsionsMenu(colspan, cheminMeteociel, nom, lat, lon) {
    const urlMeteociel =`https://www.meteociel.fr/previsions-arome-1h/${cheminMeteociel}`;
    document.write(`
        <td colspan="${colspan}">
            <a href="${urlMeteociel}">${nom}</a>
            <br>
            <div style="height: 10px;"></div>
            <a href="#" class="open-menu" data-nom="${nom}" data-lat="${lat}" data-lon="${lat}">⫶☰</a>
        </td>
    `);
}

function BasDePage() {
    document.querySelectorAll('.open-menu').forEach(link => {
        link.addEventListener('click', function(e) {
            // remplace le click
            e.preventDefault();
            // ferme si déjà ouvert et fin
            if (this.nextElementSibling && this.nextElementSibling.classList.contains('menu-opened')) {
                console.log("un menu-opened a supprimer");
                this.nextElementSibling.remove();
                return;
            }
            // ferme ceux déjà ouverts
            document.querySelectorAll('.menu-opened').forEach(menu_opened => {
                console.log("un menu-opened a supprimer");
                menu_opened.remove();
            });

            // le container à ouvrir
            const container = document.createElement('div');
            container.className = 'menu-opened';
            container.style.fontSize = 'small';
            container.style.textAlign = 'left';


            // &emsp; 1 em ; &ensp; 0,5 em ; &nbsp; 0,25-0,33 em ; &thinsp; &#8239; 0,16-0,20 em ; &hairsp; 0,08-0,10 em
            const htmlContent = `
                <div style="height: 10px;"></div>
                <a href="https://meteo-parapente.com/#/${this.dataset.lat},${this.dataset.lon},9" target="_blank" class="big">
                    <img src="https://meteo-parapente.com/v5/icons/icon-180.png" alt="🪂" width="24px"/> MétéoParap.
                </a>
                <br><div style="height: 7px;"></div>
                <a href="https://www.windy.com/${this.dataset.lat}/${this.dataset.lon}/airgram?clouds,${this.dataset.lat},${this.dataset.lon},10,i:temp,p:wind" target="_blank" class="big">
                    <img src="https://www.windy.com/favicon.ico" alt="⛅" width="24px"/> AirGram
                </a>
                <br><div style="height: 7px;"></div>
                <a href="https://www.velivole.fr/profile?lat=${this.dataset.lat}&long=${this.dataset.lon}&model=AROME" target="_blank" class="big">
                    <img src="${iconVV}" style="filter: invert(1);" alt="📊" width="24px"/> Coupe
                </a>
                <br><div style="height: 7px;"></div>
                <a href="meteoblue.html#${this.dataset.nom}/${this.dataset.lat}/${this.dataset.lon}" target="_blank" class="big">
                    <img src="https://www.meteoblue.com/favicon.ico" alt="🌎" width="24px"/> MétéoBlue
                </a>
                <br><div style="height: 7px;"></div>
                <a href="https://www.windy.com/plugin/sdg/aromeFrance/${this.dataset.lat}/${this.dataset.lon}?aromeFrance,clouds,${this.dataset.lat},${this.dataset.lon},10,i:pressure,p:wind" target="_blank" class="big">
                    <img src="https://flyxc.app/static/img/jumoplane.svg" alt="📈" width="24px"/> Émagramme
                </a>
                <br><div style="height: 7px;"></div>
                <a href="https://www.meteociel.fr/modeles/sondage2arome.php?mode=0&lon=${this.dataset.lat}&lat=${this.dataset.lon}&ech=0&map=0" target="_blank" class="big">
                    <img src="https://meteofrance.fr/sites/default/files/favicon_0.png" alt="📉" width="24px"/> Émagramme
                </a>
                <br><div style="height: 10px;"></div>
            `;

            // Insérer le contenu HTML dans le container
            container.innerHTML = htmlContent;

            // Insère le container juste en dessous
            this.after(container);
        });
    });

    document.write(`
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
    `);
}

//// LEGACY ////

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
