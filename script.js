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

const menu = "data:image/png;base64,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";

// Entête SVG
const svgHeader = `
<svg width="63.5mm" height="63.5mm" version="1.1" viewBox="9.22 -0.24 63.5 63.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- <g id="Pin" transform="translate(-75.09 -138.1)">
    <path d="m116.06 139.85a29.766 29.766 0 0 0-29.766 29.766 29.766 29.766 0 0 0 5.3041 16.901h-0.0403l0.55294 0.71727a29.766 29.766 0 0 0 1.0387 1.3462l22.91 29.708 22.657-29.381a29.766 29.766 0 0 0 1.4113-1.8299l0.43201-0.56017h-6e-3a29.766 29.766 0 0 0 5.2715-16.902 29.766 29.766 0 0 0-29.766-29.766z" fill="#0b81b6" stroke="#444" stroke-linejoin="round" stroke-width="3.5"/>
  </g> -->
  <g id="Cercle" transform="translate(.49998 .49961)">
    <circle cx="40.469" cy="31.016" r="30" fill="#0b81b6" stroke="#444" stroke-linejoin="round" stroke-width="3.5"/>
    <circle cx="40.469" cy="31.016" r="24.5" fill="#f0f0f0" stroke-width=".2674"/>
  </g>
`;

// Fin du SVG
const svgFooter = `
  <g id="Parapente" transform="matrix(.2606 0 0 .2606 28.276 15.312)" fill="#444" opacity="0.5">
    <path transform="translate(-100.38 -42.825)" d="m119.19 31.859c17.363-4.0685 35.203-9.5501 39.688 0-16.054 10.621-15.642 59.945-23.812 71.438h-15.875c-3.2061-24.251-6.9504-66.709 0-71.438z" />
    <path transform="translate(-100.38 -42.825)" d="m159.75 35.675c-11.395 10.997-13.085 43.123-16.748 54.392h6.6146c5.0759-2.3814 12.601-27.837 10.134-54.392z" />
    <path transform="translate(-100.38 -42.825)" d="m124.29 156.88h10.583l3.1598 3.0958 41.77 11.615c3.0748 0.91545 5.0609 10.249 0.0491 11.748-9.52 0.49884-14.889-0.95547-22.327-1.4371-11.073 0.49191-17.205 1.3-29.043 0.13876-5.8349-0.83535-10.87-11.572-11.549-23.598 0.72446-1.8042 4.8873 0.7007 7.3571 1.0837z" />
    <path transform="translate(-100.38 -42.825)" d="m137.76 149.08a6.6146 6.6146 0 0 1-6.4127 6.6115 6.6146 6.6146 0 0 1-6.8042-6.2079 6.6146 6.6146 0 0 1 5.9974-6.9904 6.6146 6.6146 0 0 1 7.1702 5.7812z" />
  </g>
</svg>
`;

// Dictionnaire avec chaque ligne de path
const PathsDict = {
  "NE":  `<path id="NE" transform="rotate(247.5)" d="m-27.47 43.114a24.5  24.5 0 0 1-17.324 7.176v-24.5z"/>`,
  "E":   `<path id="E"  transform="rotate(-67.5)" d="m3.8861 67.235a24.5  24.5 0 0 1-17.324 7.176v-24.5z"/>`,
  "SE":  `<path id="SE" transform="rotate(-22.5)" d="m43.114 62.119a24.5  24.5 0 0 1-17.324 7.176v-24.5z"/>`,
  "S":   `<path id="S"  transform="rotate(22.5)"  d="m67.235 30.763a24.5  24.5 0 0 1-17.324 7.176v-24.5z"/>`,
  "SO":  `<path id="SO" transform="rotate(67.5)"  d="m62.119-8.4656a24.5  24.5 0 0 1-17.324 7.176v-24.5z"/>`,
  "N":   `<path id="N"  transform="rotate(202.5)" d="m-32.586 3.8861a24.5 24.5 0 0 1-17.324 7.176v-24.5z"/>`,
  "O":   `<path id="O"  transform="rotate(112.5)" d="m30.763-32.586a24.5  24.5 0 0 1-17.324 7.176v-24.5z"/>`,
  "NO":  `<path id="NO" transform="rotate(157.5)" d="m-8.4656-27.47a24.5  24.5 0 0 1-17.324 7.176v-24.5z"/>`,
  "NNE": `<path id="NNE" d="M 54.707 51.806 C 52.311 53.611 48.751 54.955 45.612 55.578 L 40.969 31.516 Z" transform="rotate(225, 40.969 31.516)" />`,
  "ENE": `<path id="ENE" d="M 54.707 51.806 C 52.311 53.611 48.751 54.955 45.612 55.578 L 40.969 31.516 Z" transform="rotate(270, 40.969 31.516)" />`,
  "ESE": `<path id="ESE" d="M 54.707 51.806 C 52.311 53.611 48.751 54.955 45.612 55.578 L 40.969 31.516 Z" transform="rotate(315, 40.969 31.516)" />`,
  "SSE": `<path id="SSE" d="M 54.707 51.806 C 52.311 53.611 48.741 54.926 45.612 55.578 L 40.969 31.516 Z"/>`,
  "SSO": `<path id="SSO" d="M 54.707 51.806 C 52.311 53.611 48.751 54.955 45.612 55.578 L 40.969 31.516 Z" transform="rotate( 45, 40.969 31.516)" />`,
  "OSO": `<path id="OSO" d="M 54.707 51.806 C 52.311 53.611 48.751 54.955 45.612 55.578 L 40.969 31.516 Z" transform="rotate( 90, 40.969 31.516)" />`,
  "ONO": `<path id="ONO" d="M 54.707 51.806 C 52.311 53.611 48.751 54.955 45.612 55.578 L 40.969 31.516 Z" transform="rotate(135, 40.969 31.516)" />`,
  "NNO": `<path id="NNO" d="M 54.707 51.806 C 52.311 53.611 48.751 54.955 45.612 55.578 L 40.969 31.516 Z" transform="rotate(180, 40.969 31.516)" />`,
};

// Fonction pour générer le SVG avec les chemins sélectionnés
function generateSVG(orientations) {
    var svgString = svgHeader;
    Object.entries(orientations).forEach(([couleur, liste]) => {
        const paths = Object.entries(PathsDict)
            .filter(([id]) => liste.split("-").includes(id))
            .map(([_, pathLine]) => pathLine);
        svgString += `<g fill="#${(couleur == 'vert') ? '42b018' : 'FF8020'}" stroke-width=".2674"> ${paths} </g>`;
    });
    svgString += svgFooter;
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgString)))}`;
}

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
            <a href="${url}" target="_blank">${nom}</a>
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
    const urlSondage =`https://www.meteociel.fr/modeles/sondage2arome.php?mode=0&lat=${lat}&lon=${lon}&ech=0&map=0`;
    // &emsp; 1 em ; &ensp; 0,5 em ; &nbsp; 0,25-0,33 em ; &thinsp; &#8239; 0,16-0,20 em ; &hairsp; 0,08-0,10 em
    document.write(`
        <td colspan="${colspan}">
            <a href="${urlMeteociel}" target="_blank">${nom}</a>
            <br>
            <div style="height: 10px;"></div>
            <a href="${urlMeteoParapente}" target="_blank" class="big"><img src="https://meteo-parapente.com/v5/icons/icon-180.png" alt="🪂" width="24px"/></a>
            &#8239;
            <a href="${urlWindyAirgram}" target="_blank" class="big"><img src="https://www.windy.com/favicon.ico" alt="⛅" width="24px"/></a>
            &#8239;
            <a href="${urlVelivole}" target="_blank" class="big"><img src="${iconVV}" style="filter: invert(1);" alt="📊" width="24px"/></a>
            <br>
            <div style="height: 10px;"></div>
            <a href="meteoblue.html#${encodeURIComponent(nom.replace(/<[^>]*>/g, ' ').trim())}/${lat}/${lon}" target="_blank" class="big"><img src="https://www.meteoblue.com/favicon.ico" alt="🌎" width="24px"/></a>
            &#8239;
            <a href="${urlFlyXCSounding}" target="_blank" class="big"><img src="https://flyxc.app/static/img/jumoplane.svg" alt="📈" width="24px"/></a>
            &#8239;
            <a href="${urlSondage}" target="_blank" class="big"><img src="https://meteofrance.fr/sites/default/files/favicon_0.png" alt="📉" width="24px"/></a>
            <div style="height: 10px;"></div>
        </td>
    `);
}

function previsionsMenu(colspan, cheminMeteociel, nom, lat, lon, orientations=null, fiche=null) {
    const urlMeteociel =`https://www.meteociel.fr/previsions-arome-1h/${cheminMeteociel}`;
    var td = `
        <td colspan="${colspan}">
            <a href="${urlMeteociel}">${nom}</a>
            <br>
            <div style="height: 5px;"></div>
    `;
    if (orientations !== null) {
        const alt = (Object.hasOwn(orientations, 'vert')) ? orientations['vert'].split('-').join('-') : '🧭';
        var img = `<img src="${generateSVG(orientations)}" alt="(${alt})" width="50px"/>`
        if (fiche !== null) {
            img = `<a href="https://www.spotair.mobi/spot/${fiche}" target="_blank">${img}</a>`
        } 
        td += ` ${img} &#8239; `;
    }
    td += `
            <a href="#" class="open-menu" data-nom="${nom.replace(/<[^>]*>/g, ' ').trim()}" data-lat="${lat}" data-lon="${lon}"><img src="${menu}" alt="🍔" width="24px"/></a>
        </td>
    `;
    document.write(td);
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

            // le container
            const container = document.createElement('div');
            container.className = 'menu-opened';
            container.style.fontSize = 'small';
            container.style.textAlign = 'left';
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
                <a href="meteoblue.html#${encodeURIComponent(this.dataset.nom)}/${this.dataset.lat}/${this.dataset.lon}" target="_blank" class="big">
                    <img src="https://www.meteoblue.com/favicon.ico" alt="🌎" width="24px"/> MétéoBlue
                </a>
                <br><div style="height: 7px;"></div>
                <a href="https://www.windy.com/plugin/sdg/aromeFrance/${this.dataset.lat}/${this.dataset.lon}?aromeFrance,clouds,${this.dataset.lat},${this.dataset.lon},10,i:pressure,p:wind" target="_blank" class="big">
                    <img src="https://flyxc.app/static/img/jumoplane.svg" alt="📈" width="24px"/> Émagramme
                </a>
                <br><div style="height: 7px;"></div>
                <a href="https://www.meteociel.fr/modeles/sondage2arome.php?mode=0&lat=${this.dataset.lat}&lon=${this.dataset.lon}&ech=0&map=0" target="_blank" class="big">
                    <img src="https://meteofrance.fr/sites/default/files/favicon_0.png" alt="📉" width="24px"/> Émagramme
                </a>
                <br><div style="height: 10px;"></div>
            `;
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
                <a href="https://weather.metoffice.gov.uk/maps-and-charts/surface-pressure" target="_blank">Fronts UK</a>
                <br>
                <a href="https://meteofrance.com/isofronts" target="_blank">Fronts MF</a>
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
                <a href="https://www.velivole.fr/?center_lat=49.82&center_long=10.75&zoom=5.3" target="_blank">Velivole</a>
            </td>
            <td colspan="2">
                <a href="https://www.meteoblue.com/fr/meteo/cartes#map=windAnimation~rainbow~auto~10%20m%20above%20gnd~pressure2mOverlay&coords=3.84/45.19/1" target="_blank">Meteoblue</a>
            </td>
        </tr>

        <tr>
            <td class="section" colspan="6">
                Autres sites <a href="https://puretrack.io/#philippe-bretier" target="_blank">📍</a>
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
