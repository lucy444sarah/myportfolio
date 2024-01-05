import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    Jahr: '2022',
    Titel: 'CEO / Gründer von Trouver La Mode',
    Dauer: '1,25 Jahre',
    Details: 'Gründer und Leitung einer erfolgreichen Online-Boutique, die sich auf Damenbekleidung und einzigartige Grafik-T-Shirts (Unisex) spezialisiert hat. Entworfene Originalgrafiken für bedruckte T-Shirts; kuratierte eine stilvolle Kollektion. Kleidung aus aller Welt aus den USA, Australien, Spanien, Frankreich und Kanada sowie Malbücher für Erwachsene aus Deutschland und humorvolle Postsendungen und Notizbücher aus Großbritannien. Umstellung von WordPress + WooCommerce auf die Shopify-Commerce-Plattform für erweiterte Funktionalität. Kontakt: info@dankenewton.com Entdecken Sie die Sammlung: trouverlamode.com',
    Begabungen_und_Fähigkeiten: 'Social Media Management | Kommunikation | WordPress | Webdesign | UI/UX-Design | Social-Media-Marketing | Englisch | Resilienz | Shopify'
  },
  {
    Jahr: '2021',
    Titel: 'Praktikant Produktionsassistent',
    Dauer: '5 Monate',
    Details: 'In meiner Funktion bei Escha hatte ich die Möglichkeit, an der Produktion hochwertiger Verbindungstechnik für die Automatisierungsindustrie und den Maschinenbau mitzuwirken. Während mein formaler Hintergrund im Ingenieurwesen liegt, habe ich die praktische Erfahrung beim Zusammenbau komplizierter Komponenten und der Sicherstellung des reibungslosen Ablaufs verschiedener Prozesse genutzt. Gemeinsam übernahm ich Aufgaben wie Montage, Montage und Maschinenbedienung, um die Erstellung maßgeschneiderter Verbindungslösungen zu unterstützen. Meine Zeit bei Escha lieferte wertvolle Einblicke in die Fertigungsbranche der Branche und ich bin dankbar für die Erfahrungen, die ich bei der Gewährleistung der Zuverlässigkeit und Sicherheit von Verkabelungssystemen gesammelt habe. Diese praktische Erfahrung ergänzte meinen technischen Hintergrund und vertiefte mein Verständnis für die praktischen Aspekte der Erstellung optimaler Lösungen für individuelle Anwendungen. Ich schätze den Einblick in verschiedene Facetten des Produktionsprozesses und die Chance, zum Engagement des Unternehmens beizutragen, qualitativ hochwertige Produkte für die Automatisierungs- und Maschinenbaubranche zu liefern.',
    Begabungen_und_Fähigkeiten: 'Montage | Maschinenbedienung | Qualitätskontrolle | Herstellungsprozesse Kommunikation | Englische Sprache | Verbesserungsgeist | Teamarbeit | Deutsche Sprache'
  },
  {
    Jahr: '2016 - 2020',
    Titel: 'Verwaltungsassistent',
    Dauer: '4 Jahre',
    Details: 'Als Verwaltungsassistentin für Aresi fungierte ich als wichtiger Vermittler zwischen Versicherern und Anwohnern und war auf die Lösung von Vorfällen und das Gemeindemanagement spezialisiert. Zu meinen Aufgaben gehörte die Moderation monatlicher Gemeindevorstandssitzungen, bei denen ich die Ergebnisse registrierte und dokumentierte, um eine transparente Kommunikation und eine effiziente Nachbereitung sicherzustellen. Diese Rolle ermöglichte es mir, eine entscheidende Rolle bei der Aufrechterhaltung eines harmonischen Wohnumfelds zu spielen, indem ich auf die Anliegen der Bewohner einging, Lösungen mit Versicherungsanbietern koordinierte und das allgemeine Wohlergehen der Gemeinschaft überwachte. Kompetent in der Vermittlung und Lösung von Konflikten zwischen Bewohnern und Versicherungsanbietern, um wirksame Lösungen für verschiedene Probleme sicherzustellen.',
    Begabungen_und_Fähigkeiten: 'Konfliktlösung | Dokumentation | Kommunikation und Koordination | Problemlösung'
  },
  {
    Jahr: '2012 - 2014',
    Titel: 'Vertriebsberater-Ingenieur',
    Dauer: '2 Jahre 11 Monate',
    Details: 'Als Vertriebsberater-Ingenieur bei Caterpillar Inc. übernahm ich eine dynamische Rolle im Verkauf schwerer Industriemaschinen und war auf CAT-Ausrüstung (Caterpillar), Dieselmotoren und internationale Lkw spezialisiert. Über einen Zeitraum von zwei Jahren und 11 Monaten war ich als einer von nur zwei Schwermaschinenverkäufern für die gesamte Region Honduras tätig und musste dabei ausgedehnte Reisen durch das Land unternehmen. Diese herausfordernde und lohnende Position erforderte nicht nur ein tiefes Verständnis der technischen Aspekte von CAT und NAVISTAR Trucks, sondern auch die Fähigkeit, Kunden kompetent zu beraten. Als zwingende Voraussetzung für die Stelle brachte ich meinen technischen Hintergrund in den Vordergrund, bestand erfolgreich strenge Tests und absolvierte Spezialkurse in den Bereichen Lean Manufacturing, Six Sigma, Kanban und Dieselmotoren. Mein Engagement für kontinuierliches Lernen und mein Engagement für Spitzenleistungen ermöglichten es mir, Kunden, die in schwere Industrieausrüstung investieren möchten, fundierte Beratung anzubieten. Diese Erfahrung hat nicht nur mein technisches Wissen vertieft, sondern auch meine Kommunikationsfähigkeiten verfeinert, da ich den Kunden komplexe technische Details effektiv kommuniziert habe. Wichtigsten Erfolge: Alleinige Verantwortung für den Verkauf von Schwermaschinen in Honduras, der das gesamte Gebiet abdeckt. Umfangreiche Schulung in den Bereichen Lean Manufacturing, Six Sigma, Kanban und Dieselmotoren erfolgreich abgeschlossen. Kompetente Beratung der Kunden, Erleichterung des erfolgreichen Gerätekaufs.',
    Begabungen_und_Fähigkeiten: 'Vertriebstechnik | Schwermaschinenverkauf | Technische Beratung | Lean Manufacturing | Six Sigma | Kanban | Dieselmotoren | Mehrsprachige Kommunikation | Kundenbeziehungsmanagement'
  }
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Berufserfahrung</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          Jahr={item.Jahr}
          Titel={item.Titel}
          Dauer={item.Dauer}
          Details={item.Details}
        />
      ))}
    </div>
  );
}

export default Work;

