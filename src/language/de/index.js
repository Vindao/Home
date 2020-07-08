module.exports = {
  Navigation: {
    home: 'Home',
    about: 'Über uns',
    services: 'Leistungen',
    contact: 'Kontakt',
    agb: 'AGB',
    impressum: 'Impressum'
  },

  Forms: {
    name: {
      label: 'Name',
      errors: {
        REQUIRED: 'Sie müssen einen Namen angeben',
        TOOLONG: 'Der Name darf nicht mehr als 20 Zeichen enthalten'
      }
    },
    email: {
      label: 'Email',
      errors: {
        REQUIRED: 'Sie müssen eine Emailadresse angeben',
        INVALID: 'Bitte benutzen sie eine gültige Emailadresse'
      }
    },
    company: {
      label: 'Firma',
      errors: { TOOLONG: 'Der Firmenname darf nicht mehr als 20 Zeichen enthalten' }
    },
    phone: {
      label: 'Telefon',
      errors: { INVALID: 'Bitte benutzen sie eine gültige Telefonnummer' }
    },
    message: {
      label: 'Nachricht',
      placeholder: 'Bitte erklären sie kurz ihr Vorhaben'
    },
    stepper: {
      send: 'Nachricht senden',
      info: 'Generelle Informationen'
    },
    acceptPrivacyPolicy: {
      start: `Ich habe die `,
      link: 'Datenschutzerklärung',
      end: ` zur Kenntnis genommen. 
      Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden.
      `,
      note: `Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an support@vindao.io widerrufen.`
    },
    BTNS: {
      next: 'Weiter',
      back: 'Zurück',
      send: 'Senden'
    }
  },
  errors: {
    // login: {
    //   server: 'Leider ist ein Fehler aufgetreten. Bitte versuchen sie es später erneut.',
    //   cred: 'Diese Zugangsdaten sind uns nicht bekannt.'
    // },
    // register: {
    //   server:
    //     'Es gab ein problem mit ihrer Registrierung. Bitte versuchen sie es später noch einmal.',
    //   name: {
    //     REQUIRED: 'Ein Name ist erforderlich.'
    //   },
    //   email: {
    //     INVALID: 'Bitte benutzen sie eine gültige Emailadresse'
    //   },
    //   company: {
    //     NOSPACES: 'Die Firma darf keine Leerzeichen enthalten'
    //   },
    //   phone: {
    //     INVALID: 'Bitte benutzen sie eine gültige Telefonnummer'
    //   },
    //   password: {
    //     LOWER: 'Benutzen sie mindestens einen Kleinbuchstaben',
    //     UPPER: 'Benutzen sie mindestens einen Großbuchstaben',
    //     NUMBER: 'Benutzen sie mindestens eine Zahl',
    //     MINCHAR: 'Das Passwort muss mindestens 8 Zeichen lang sein'
    //   },
    //   confPassword: {
    //     INVALID: 'Die Passwörter stimmen nicht überein'
    //   }
    // }
    sendMessage: 'Oops, da ist wohl was schief gelaufen. Bitte versuchen sie es später noch einmal.'
  },
  Footer: {
    contactInfo: {
      email: 'contact@vindao.io',
      phone: '+49 1782838557',
      adress: {
        line1: 'Kolpingstr.',
        line2: '86504',
        line3: 'Merching',
        line4: 'Deutschland'
      }
    },
    Impressum: {
      label: 'Impressum',
      title: 'Impressum',
      html: `

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>Vincent Schmitt<br />
      Kolpingstraße, 24<br />
      86504 Merching</p>
      
      <h2>Kontakt</h2>
      <p>Telefon: 01782838557<br />
      E-Mail: support@vindao.io</p>
      
      <h2>EU-Streitschlichtung</h2>
      <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
      
      <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2><p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      
      <h3>Haftung für Inhalte</h3> <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p> <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p> <h3>Haftung für Links</h3> <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p> <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p> <h3>Urheberrecht</h3> <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p> <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
      
      
      `
    },
    Datenschutz: {
      label: 'Datenschutz',
      title: 'Datenschutzerklärung',
      html: `
<p>Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der Vindao. Eine Nutzung der Internetseiten der Vindao ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.</p>

<p>Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und in Übereinstimmung mit den für die Vindao geltenden landesspezifischen Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung möchte unser Unternehmen die Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.</p>

<p>Die Vindao hat als für die Verarbeitung Verantwortlicher zahlreiche technische und organisatorische Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der über diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch können Internetbasierte Datenübertragungen grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu übermitteln.</p>

<h4>1. Begriffsbestimmungen</h4>
<p>Die Datenschutzerklärung der Vindao beruht auf den Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die Öffentlichkeit als auch für unsere Kunden und Geschäftspartner einfach lesbar und verständlich sein. Um dies zu gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten erläutern.</p>

<p>Wir verwenden in dieser Datenschutzerklärung unter anderem die folgenden Begriffe:</p>

<ul style="list-style: none">
<li><h4>a)    personenbezogene Daten</h4>
<p>Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.</p>
</li>
<li><h4>b)    betroffene Person</h4>
<p>Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.</p>
</li>
<li><h4>c)    Verarbeitung</h4>
<p>Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.</p>
</li>
<li><h4>d)    Einschränkung der Verarbeitung</h4>
<p>Einschränkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.</p>
</li>
<li><h4>e)    Profiling</h4>
<p>Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere, um Aspekte bezüglich Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, persönlicher Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.</p>
</li>
<li><h4>f)     Pseudonymisierung</h4>
<p>Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.</p>
</li>
<li><h4>g)    Verantwortlicher oder für die Verarbeitung Verantwortlicher</h4>
<p>Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.</p>
</li>
<li><h4>h)    Auftragsverarbeiter</h4>
<p>Auftragsverarbeiter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</p>
</li>
<li><h4>i)      Empfänger</h4>
<p>Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger.</p>
</li>
<li><h4>j)      Dritter</h4>
<p>Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.</p>
</li>
<li><h4>k)    Einwilligung</h4>
<p>Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.</p>
</li>
</ul>

<h4>2. Name und Anschrift des für die Verarbeitung Verantwortlichen</h4>
<p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist die:</p>

<p>Vindao</p>
<p>Kolpingstraße 24</p>
<p>86504 Merching</p>
<p>Germany</p>
<p>Tel.: +4915170006343</p>
<p>E-Mail: contact@vindao.io</p>
<p>Website: www.vindao.io</p>

<h4>3. Cookies</h4>
<p>Die Internetseiten der Vindao verwenden Cookies. Cookies sind Textdateien, welche über einen Internetbrowser auf einem Computersystem abgelegt und gespeichert werden.</p>

<p>Zahlreiche Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist eine eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge, durch welche Internetseiten und Server dem konkreten Internetbrowser zugeordnet werden können, in dem das Cookie gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten und Servern, den individuellen Browser der betroffenen Person von anderen Internetbrowsern, die andere Cookies enthalten, zu unterscheiden. Ein bestimmter Internetbrowser kann über die eindeutige Cookie-ID wiedererkannt und identifiziert werden.</p>

<p>Durch den Einsatz von Cookies kann die Vindao den Nutzern dieser Internetseite nutzerfreundlichere Services bereitstellen, die ohne die Cookie-Setzung nicht möglich wären.</p>

<p>Mittels eines Cookies können die Informationen und Angebote auf unserer Internetseite im Sinne des Benutzers optimiert werden. Cookies ermöglichen uns, wie bereits erwähnt, die Benutzer unserer Internetseite wiederzuerkennen. Zweck dieser Wiedererkennung ist es, den Nutzern die Verwendung unserer Internetseite zu erleichtern. Der Benutzer einer Internetseite, die Cookies verwendet, muss beispielsweise nicht bei jedem Besuch der Internetseite erneut seine Zugangsdaten eingeben, weil dies von der Internetseite und dem auf dem Computersystem des Benutzers abgelegten Cookie übernommen wird. Ein weiteres Beispiel ist das Cookie eines Warenkorbes im Online-Shop. Der Online-Shop merkt sich die Artikel, die ein Kunde in den virtuellen Warenkorb gelegt hat, über ein Cookie.</p>

<p>Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite jederzeit mittels einer entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft widersprechen. Ferner können bereits gesetzte Cookies jederzeit über einen Internetbrowser oder andere Softwareprogramme gelöscht werden. Dies ist in allen gängigen Internetbrowsern möglich. Deaktiviert die betroffene Person die Setzung von Cookies in dem genutzten Internetbrowser, sind unter Umständen nicht alle Funktionen unserer Internetseite vollumfänglich nutzbar.</p>

<h4>4. Erfassung von allgemeinen Daten und Informationen</h4>
<p>Die Internetseite der Vindao erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle von Angriffen auf unsere informationstechnologischen Systeme dienen.</p>

<p>Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die Vindao keine Rückschlüsse auf die betroffene Person. Diese Informationen werden vielmehr benötigt, um (1) die Inhalte unserer Internetseite korrekt auszuliefern, (2) die Inhalte unserer Internetseite sowie die Werbung für diese zu optimieren, (3) die dauerhafte Funktionsfähigkeit unserer informationstechnologischen Systeme und der Technik unserer Internetseite zu gewährleisten sowie (4) um Strafverfolgungsbehörden im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen bereitzustellen. Diese anonym erhobenen Daten und Informationen werden durch die Vindao daher einerseits statistisch und ferner mit dem Ziel ausgewertet, den Datenschutz und die Datensicherheit in unserem Unternehmen zu erhöhen, um letztlich ein optimales Schutzniveau für die von uns verarbeiteten personenbezogenen Daten sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt von allen durch eine betroffene Person angegebenen personenbezogenen Daten gespeichert.</p>

<h4>5. Kontaktmöglichkeit über die Internetseite</h4>
<p>Die Internetseite der Vindao enthält aufgrund von gesetzlichen Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Solche auf freiwilliger Basis von einer betroffenen Person an den für die Verarbeitung Verantwortlichen übermittelten personenbezogenen Daten werden für Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen Daten an Dritte.</p>

<h4>6. Routinemäßige Löschung und Sperrung von personenbezogenen Daten</h4>
<p>Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen der für die Verarbeitung Verantwortliche unterliegt, vorgesehen wurde.</p>

<p>Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.</p>

<h4>7. Rechte der betroffenen Person</h4>
<ul style="list-style: none;">
<li><h4>a)    Recht auf Bestätigung</h4>
<p>Jede betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber eingeräumte Recht, von dem für die Verarbeitung Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden. Möchte eine betroffene Person dieses Bestätigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p>
</li>
<li><h4>b)    Recht auf Auskunft</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, jederzeit von dem für die Verarbeitung Verantwortlichen unentgeltliche Auskunft über die zu seiner Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten. Ferner hat der Europäische Richtlinien- und Verordnungsgeber der betroffenen Person Auskunft über folgende Informationen zugestanden:</p>

<ul style="list-style: none;">
<li>die Verarbeitungszwecke</li>
<li>die Kategorien personenbezogener Daten, die verarbeitet werden</li>
<li>die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern oder bei internationalen Organisationen</li>
<li>falls möglich die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer</li>
<li>das Bestehen eines Rechts auf Berichtigung oder Löschung der sie betreffenden personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung</li>
<li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde</li>
<li>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle verfügbaren Informationen über die Herkunft der Daten</li>
<li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Abs.1 und 4 DS-GVO und — zumindest in diesen Fällen — aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person</li>

</ul>
<p>Ferner steht der betroffenen Person ein Auskunftsrecht darüber zu, ob personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt wurden. Sofern dies der Fall ist, so steht der betroffenen Person im Übrigen das Recht zu, Auskunft über die geeigneten Garantien im Zusammenhang mit der Übermittlung zu erhalten.</p>

<p>Möchte eine betroffene Person dieses Auskunftsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p>
</li>
<li><h4>c)    Recht auf Berichtigung</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die unverzügliche Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen. Ferner steht der betroffenen Person das Recht zu, unter Berücksichtigung der Zwecke der Verarbeitung, die Vervollständigung unvollständiger personenbezogener Daten — auch mittels einer ergänzenden Erklärung — zu verlangen.</p>

<p>Möchte eine betroffene Person dieses Berichtigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p></li>
<li>
<h4>d)    Recht auf Löschung (Recht auf Vergessen werden)</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen zu verlangen, dass die sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der folgenden Gründe zutrifft und soweit die Verarbeitung nicht erforderlich ist:</p>

<ul style="list-style: none;">
<li>Die personenbezogenen Daten wurden für solche Zwecke erhoben oder auf sonstige Weise verarbeitet, für welche sie nicht mehr notwendig sind.</li>
<li>Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
<li>Die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO Widerspruch gegen die Verarbeitung ein, und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die betroffene Person legt gemäß Art. 21 Abs. 2 DS-GVO Widerspruch gegen die Verarbeitung ein.</li>
<li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
<li>Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.</li>
<li>Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DS-GVO erhoben.</li>

</ul>
<p>Sofern einer der oben genannten Gründe zutrifft und eine betroffene Person die Löschung von personenbezogenen Daten, die bei der Vindao gespeichert sind, veranlassen möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der Vindao wird veranlassen, dass dem Löschverlangen unverzüglich nachgekommen wird.</p>

<p>Wurden die personenbezogenen Daten von der Vindao öffentlich gemacht und ist unser Unternehmen als Verantwortlicher gemäß Art. 17 Abs. 1 DS-GVO zur Löschung der personenbezogenen Daten verpflichtet, so trifft die Vindao unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um andere für die Datenverarbeitung Verantwortliche, welche die veröffentlichten personenbezogenen Daten verarbeiten, darüber in Kenntnis zu setzen, dass die betroffene Person von diesen anderen für die Datenverarbeitung Verantwortlichen die Löschung sämtlicher Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat, soweit die Verarbeitung nicht erforderlich ist. Der Mitarbeiter der Vindao wird im Einzelfall das Notwendige veranlassen.</p>
</li>
<li><h4>e)    Recht auf Einschränkung der Verarbeitung</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:</p>

<ul style="list-style: none;">
<li>Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person bestritten, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen.</li>
<li>Die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt die Löschung der personenbezogenen Daten ab und verlangt stattdessen die Einschränkung der Nutzung der personenbezogenen Daten.</li>
<li>Der Verantwortliche benötigt die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger, die betroffene Person benötigt sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
<li>Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1 DS-GVO eingelegt und es steht noch nicht fest, ob die berechtigten Gründe des Verantwortlichen gegenüber denen der betroffenen Person überwiegen.</li>

</ul>
<p>Sofern eine der oben genannten Voraussetzungen gegeben ist und eine betroffene Person die Einschränkung von personenbezogenen Daten, die bei der Vindao gespeichert sind, verlangen möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der Vindao wird die Einschränkung der Verarbeitung veranlassen.</p>
</li>
<li><h4>f)     Recht auf Datenübertragbarkeit</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die sie betreffenden personenbezogenen Daten, welche durch die betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Sie hat außerdem das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern die Verarbeitung auf der Einwilligung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b DS-GVO beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt, sofern die Verarbeitung nicht für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, welche dem Verantwortlichen übertragen wurde.</p>

<p>Ferner hat die betroffene Person bei der Ausübung ihres Rechts auf Datenübertragbarkeit gemäß Art. 20 Abs. 1 DS-GVO das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen an einen anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist und sofern hiervon nicht die Rechte und Freiheiten anderer Personen beeinträchtigt werden.</p>

<p>Zur Geltendmachung des Rechts auf Datenübertragbarkeit kann sich die betroffene Person jederzeit an einen Mitarbeiter der Vindao wenden.</p>

</li>
<li>
<h4>g)    Recht auf Widerspruch</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.</p>

<p>Die Vindao verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die den Interessen, Rechten und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>

<p>Verarbeitet die Vindao personenbezogene Daten, um Direktwerbung zu betreiben, so hat die betroffene Person das Recht, jederzeit Widerspruch gegen die Verarbeitung der personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen. Dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Widerspricht die betroffene Person gegenüber der Vindao der Verarbeitung für Zwecke der Direktwerbung, so wird die Vindao die personenbezogenen Daten nicht mehr für diese Zwecke verarbeiten.</p>

<p>Zudem hat die betroffene Person das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, gegen die sie betreffende Verarbeitung personenbezogener Daten, die bei der Vindao zu wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gemäß Art. 89 Abs. 1 DS-GVO erfolgen, Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe erforderlich.</p>

<p>Zur Ausübung des Rechts auf Widerspruch kann sich die betroffene Person direkt an jeden Mitarbeiter der Vindao oder einen anderen Mitarbeiter wenden. Der betroffenen Person steht es ferner frei, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen technische Spezifikationen verwendet werden.</p>
</li>
<li><h4>h)    Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt, sofern die Entscheidung (1) nicht für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist, oder (2) aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder (3) mit ausdrücklicher Einwilligung der betroffenen Person erfolgt.</p>

<p>Ist die Entscheidung (1) für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich oder (2) erfolgt sie mit ausdrücklicher Einwilligung der betroffenen Person, trifft die Vindao angemessene Maßnahmen, um die Rechte und Freiheiten sowie die berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.</p>

<p>Möchte die betroffene Person Rechte mit Bezug auf automatisierte Entscheidungen geltend machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p>

</li>
<li><h4>i)      Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, eine Einwilligung zur Verarbeitung personenbezogener Daten jederzeit zu widerrufen.</p>

<p>Möchte die betroffene Person ihr Recht auf Widerruf einer Einwilligung geltend machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p>

</li>
</ul>
<h4>8. Datenschutzbestimmungen zu Einsatz und Verwendung von Facebook</h4>
<p>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Komponenten des Unternehmens Facebook integriert. Facebook ist ein soziales Netzwerk.</p>

<p>Ein soziales Netzwerk ist ein im Internet betriebener sozialer Treffpunkt, eine Online-Gemeinschaft, die es den Nutzern in der Regel ermöglicht, untereinander zu kommunizieren und im virtuellen Raum zu interagieren. Ein soziales Netzwerk kann als Plattform zum Austausch von Meinungen und Erfahrungen dienen oder ermöglicht es der Internetgemeinschaft, persönliche oder unternehmensbezogene Informationen bereitzustellen. Facebook ermöglicht den Nutzern des sozialen Netzwerkes unter anderem die Erstellung von privaten Profilen, den Upload von Fotos und eine Vernetzung über Freundschaftsanfragen.</p>

<p>Betreibergesellschaft von Facebook ist die Facebook, Inc., 1 Hacker Way, Menlo Park, CA 94025, USA. Für die Verarbeitung personenbezogener Daten Verantwortlicher ist, wenn eine betroffene Person außerhalb der USA oder Kanada lebt, die Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.</p>

<p>Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die durch den für die Verarbeitung Verantwortlichen betrieben wird und auf welcher eine Facebook-Komponente (Facebook-Plug-In) integriert wurde, wird der Internetbrowser auf dem informationstechnologischen System der betroffenen Person automatisch durch die jeweilige Facebook-Komponente veranlasst, eine Darstellung der entsprechenden Facebook-Komponente von Facebook herunterzuladen. Eine Gesamtübersicht über alle Facebook-Plug-Ins kann unter https://developers.facebook.com/docs/plugins/?locale=de_DE abgerufen werden. Im Rahmen dieses technischen Verfahrens erhält Facebook Kenntnis darüber, welche konkrete Unterseite unserer Internetseite durch die betroffene Person besucht wird.</p>

<p>Sofern die betroffene Person gleichzeitig bei Facebook eingeloggt ist, erkennt Facebook mit jedem Aufruf unserer Internetseite durch die betroffene Person und während der gesamten Dauer des jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete Unterseite unserer Internetseite die betroffene Person besucht. Diese Informationen werden durch die Facebook-Komponente gesammelt und durch Facebook dem jeweiligen Facebook-Account der betroffenen Person zugeordnet. Betätigt die betroffene Person einen der auf unserer Internetseite integrierten Facebook-Buttons, beispielsweise den „Gefällt mir“-Button, oder gibt die betroffene Person einen Kommentar ab, ordnet Facebook diese Information dem persönlichen Facebook-Benutzerkonto der betroffenen Person zu und speichert diese personenbezogenen Daten.</p>

<p>Facebook erhält über die Facebook-Komponente immer dann eine Information darüber, dass die betroffene Person unsere Internetseite besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei Facebook eingeloggt ist; dies findet unabhängig davon statt, ob die betroffene Person die Facebook-Komponente anklickt oder nicht. Ist eine derartige Übermittlung dieser Informationen an Facebook von der betroffenen Person nicht gewollt, kann diese die Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf unserer Internetseite aus ihrem Facebook-Account ausloggt.</p>

<p>Die von Facebook veröffentlichte Datenrichtlinie, die unter https://de-de.facebook.com/about/privacy/ abrufbar ist, gibt Aufschluss über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten durch Facebook. Ferner wird dort erläutert, welche Einstellungsmöglichkeiten Facebook zum Schutz der Privatsphäre der betroffenen Person bietet. Zudem sind unterschiedliche Applikationen erhältlich, die es ermöglichen, eine Datenübermittlung an Facebook zu unterdrücken. Solche Applikationen können durch die betroffene Person genutzt werden, um eine Datenübermittlung an Facebook zu unterdrücken.</p>

<h4>9. Datenschutzbestimmungen zu Einsatz und Verwendung von Google Analytics (mit Anonymisierungsfunktion)</h4>
<p>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite die Komponente Google Analytics (mit Anonymisierungsfunktion) integriert. Google Analytics ist ein Web-Analyse-Dienst. Web-Analyse ist die Erhebung, Sammlung und Auswertung von Daten über das Verhalten von Besuchern von Internetseiten. Ein Web-Analyse-Dienst erfasst unter anderem Daten darüber, von welcher Internetseite eine betroffene Person auf eine Internetseite gekommen ist (sogenannte Referrer), auf welche Unterseiten der Internetseite zugegriffen oder wie oft und für welche Verweildauer eine Unterseite betrachtet wurde. Eine Web-Analyse wird überwiegend zur Optimierung einer Internetseite und zur Kosten-Nutzen-Analyse von Internetwerbung eingesetzt.</p>

<p>Betreibergesellschaft der Google-Analytics-Komponente ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.</p>

<p>Der für die Verarbeitung Verantwortliche verwendet für die Web-Analyse über Google Analytics den Zusatz "_gat._anonymizeIp". Mittels dieses Zusatzes wird die IP-Adresse des Internetanschlusses der betroffenen Person von Google gekürzt und anonymisiert, wenn der Zugriff auf unsere Internetseiten aus einem Mitgliedstaat der Europäischen Union oder aus einem anderen Vertragsstaat des Abkommens über den Europäischen Wirtschaftsraum erfolgt.</p>

<p>Der Zweck der Google-Analytics-Komponente ist die Analyse der Besucherströme auf unserer Internetseite. Google nutzt die gewonnenen Daten und Informationen unter anderem dazu, die Nutzung unserer Internetseite auszuwerten, um für uns Online-Reports, welche die Aktivitäten auf unseren Internetseiten aufzeigen, zusammenzustellen, und um weitere mit der Nutzung unserer Internetseite in Verbindung stehende Dienstleistungen zu erbringen.</p>

<p>Google Analytics setzt ein Cookie auf dem informationstechnologischen System der betroffenen Person. Was Cookies sind, wurde oben bereits erläutert. Mit Setzung des Cookies wird Google eine Analyse der Benutzung unserer Internetseite ermöglicht. Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die durch den für die Verarbeitung Verantwortlichen betrieben wird und auf welcher eine Google-Analytics-Komponente integriert wurde, wird der Internetbrowser auf dem informationstechnologischen System der betroffenen Person automatisch durch die jeweilige Google-Analytics-Komponente veranlasst, Daten zum Zwecke der Online-Analyse an Google zu übermitteln. Im Rahmen dieses technischen Verfahrens erhält Google Kenntnis über personenbezogene Daten, wie der IP-Adresse der betroffenen Person, die Google unter anderem dazu dienen, die Herkunft der Besucher und Klicks nachzuvollziehen und in der Folge Provisionsabrechnungen zu ermöglichen.</p>

<p>Mittels des Cookies werden personenbezogene Informationen, beispielsweise die Zugriffszeit, der Ort, von welchem ein Zugriff ausging und die Häufigkeit der Besuche unserer Internetseite durch die betroffene Person, gespeichert. Bei jedem Besuch unserer Internetseiten werden diese personenbezogenen Daten, einschließlich der IP-Adresse des von der betroffenen Person genutzten Internetanschlusses, an Google in den Vereinigten Staaten von Amerika übertragen. Diese personenbezogenen Daten werden durch Google in den Vereinigten Staaten von Amerika gespeichert. Google gibt diese über das technische Verfahren erhobenen personenbezogenen Daten unter Umständen an Dritte weiter.</p>

<p>Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite, wie oben bereits dargestellt, jederzeit mittels einer entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft widersprechen. Eine solche Einstellung des genutzten Internetbrowsers würde auch verhindern, dass Google ein Cookie auf dem informationstechnologischen System der betroffenen Person setzt. Zudem kann ein von Google Analytics bereits gesetzter Cookie jederzeit über den Internetbrowser oder andere Softwareprogramme gelöscht werden.</p>

<p>Ferner besteht für die betroffene Person die Möglichkeit, einer Erfassung der durch Google Analytics erzeugten, auf eine Nutzung dieser Internetseite bezogenen Daten sowie der Verarbeitung dieser Daten durch Google zu widersprechen und eine solche zu verhindern. Hierzu muss die betroffene Person ein Browser-Add-On unter dem Link https://tools.google.com/dlpage/gaoptout herunterladen und installieren. Dieses Browser-Add-On teilt Google Analytics über JavaScript mit, dass keine Daten und Informationen zu den Besuchen von Internetseiten an Google Analytics übermittelt werden dürfen. Die Installation des Browser-Add-Ons wird von Google als Widerspruch gewertet. Wird das informationstechnologische System der betroffenen Person zu einem späteren Zeitpunkt gelöscht, formatiert oder neu installiert, muss durch die betroffene Person eine erneute Installation des Browser-Add-Ons erfolgen, um Google Analytics zu deaktivieren. Sofern das Browser-Add-On durch die betroffene Person oder einer anderen Person, die ihrem Machtbereich zuzurechnen ist, deinstalliert oder deaktiviert wird, besteht die Möglichkeit der Neuinstallation oder der erneuten Aktivierung des Browser-Add-Ons.</p>

<p>Weitere Informationen und die geltenden Datenschutzbestimmungen von Google können unter https://www.google.de/intl/de/policies/privacy/ und unter http://www.google.com/analytics/terms/de.html abgerufen werden. Google Analytics wird unter diesem Link https://www.google.com/intl/de_de/analytics/ genauer erläutert.</p>

<h4>10. Datenschutzbestimmungen zu Einsatz und Verwendung von Google+</h4>
<p>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite als Komponente die Google+ Schaltfläche integriert. Google+ ist ein sogenanntes soziales Netzwerk. Ein soziales Netzwerk ist ein im Internet betriebener sozialer Treffpunkt, eine Online-Gemeinschaft, die es den Nutzern in der Regel ermöglicht, untereinander zu kommunizieren und im virtuellen Raum zu interagieren. Ein soziales Netzwerk kann als Plattform zum Austausch von Meinungen und Erfahrungen dienen oder ermöglicht es der Internetgemeinschaft, persönliche oder unternehmensbezogene Informationen bereitzustellen. Google+ ermöglicht den Nutzern des sozialen Netzwerkes unter anderem die Erstellung von privaten Profilen, den Upload von Fotos und eine Vernetzung über Freundschaftsanfragen.</p>

<p>Betreibergesellschaft von Google+ ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.</p>

<p>Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die durch den für die Verarbeitung Verantwortlichen betrieben wird und auf welcher eine Google+ Schaltfläche integriert wurde, wird der Internetbrowser auf dem informationstechnologischen System der betroffenen Person automatisch durch die jeweilige Google+ Schaltfläche veranlasst, eine Darstellung der entsprechenden Google+ Schaltfläche von Google herunterzuladen. Im Rahmen dieses technischen Verfahrens erhält Google Kenntnis darüber, welche konkrete Unterseite unserer Internetseite durch die betroffene Person besucht wird. Genauere Informationen zu Google+ sind unter https://developers.google.com/+/ abrufbar.</p>

<p>Sofern die betroffene Person gleichzeitig bei Google+ eingeloggt ist, erkennt Google mit jedem Aufruf unserer Internetseite durch die betroffene Person und während der gesamten Dauer des jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete Unterseite unserer Internetseite die betroffene Person besucht. Diese Informationen werden durch die Google+ Schaltfläche gesammelt und durch Google dem jeweiligen Google+-Account der betroffenen Person zugeordnet.</p>

<p>Betätigt die betroffene Person einen der auf unserer Internetseite integrierten Google+-Buttons und gibt damit eine Google+1 Empfehlung ab, ordnet Google diese Information dem persönlichen Google+-Benutzerkonto der betroffenen Person zu und speichert diese personenbezogenen Daten. Google speichert die Google+1-Empfehlung der betroffenen Person und macht diese in Übereinstimmung mit den von der betroffenen Person diesbezüglich akzeptierten Bedingungen öffentlich zugänglich. Eine von der betroffenen Person auf dieser Internetseite abgegebene Google+1-Empfehlung wird in der Folge zusammen mit anderen personenbezogenen Daten, wie dem Namen des von der betroffenen Person genutzten Google+1-Accounts und dem in diesem hinterlegten Foto in anderen Google-Diensten, beispielsweise den Suchmaschinenergebnissen der Google-Suchmaschine, dem Google-Konto der betroffenen Person oder an sonstigen Stellen, beispielsweise auf Internetseiten oder im Zusammenhang mit Werbeanzeigen, gespeichert und verarbeitet. Ferner ist Google in der Lage, den Besuch auf dieser Internetseite mit anderen bei Google gespeicherten personenbezogenen Daten zu verknüpfen. Google zeichnet diese personenbezogenen Informationen ferner mit dem Zweck auf, die unterschiedlichen Dienste von Google zu verbessern oder zu optimieren.</p>

<p>Google erhält über die Google+-Schaltfläche immer dann eine Information darüber, dass die betroffene Person unsere Internetseite besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei Google+ eingeloggt ist; dies findet unabhängig davon statt, ob die betroffene Person die Google+-Schaltfläche anklickt oder nicht.</p>

<p>Ist eine Übermittlung personenbezogener Daten an Google von der betroffenen Person nicht gewollt, kann diese eine solche Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf unserer Internetseite aus ihrem Google+-Account ausloggt.</p>

<p>Weitere Informationen und die geltenden Datenschutzbestimmungen von Google können unter https://www.google.de/intl/de/policies/privacy/ abgerufen werden. Weitere Hinweise von Google zur Google+1-Schaltfläche können unter https://developers.google.com/+/web/buttons-policy abgerufen werden.</p>

<h4>11. Datenschutzbestimmungen zu Einsatz und Verwendung von Instagram</h4>
<p>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Komponenten des Dienstes Instagram integriert. Instagram ist ein Dienst, der als audiovisuelle Plattform zu qualifizieren ist und den Nutzern das Teilen von Fotos und Videos und zudem eine Weiterverbreitung solcher Daten in anderen sozialen Netzwerken ermöglicht.</p>

<p>Betreibergesellschaft der Dienste von Instagram ist die Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland.</p>

<p>Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die durch den für die Verarbeitung Verantwortlichen betrieben wird und auf welcher eine Instagram-Komponente (Insta-Button) integriert wurde, wird der Internetbrowser auf dem informationstechnologischen System der betroffenen Person automatisch durch die jeweilige Instagram-Komponente veranlasst, eine Darstellung der entsprechenden Komponente von Instagram herunterzuladen. Im Rahmen dieses technischen Verfahrens erhält Instagram Kenntnis darüber, welche konkrete Unterseite unserer Internetseite durch die betroffene Person besucht wird.</p>

<p>Sofern die betroffene Person gleichzeitig bei Instagram eingeloggt ist, erkennt Instagram mit jedem Aufruf unserer Internetseite durch die betroffene Person und während der gesamten Dauer des jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete Unterseite die betroffene Person besucht. Diese Informationen werden durch die Instagram-Komponente gesammelt und durch Instagram dem jeweiligen Instagram-Account der betroffenen Person zugeordnet. Betätigt die betroffene Person einen der auf unserer Internetseite integrierten Instagram-Buttons, werden die damit übertragenen Daten und Informationen dem persönlichen Instagram-Benutzerkonto der betroffenen Person zugeordnet und von Instagram gespeichert und verarbeitet.</p>

<p>Instagram erhält über die Instagram-Komponente immer dann eine Information darüber, dass die betroffene Person unsere Internetseite besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei Instagram eingeloggt ist; dies findet unabhängig davon statt, ob die betroffene Person die Instagram-Komponente anklickt oder nicht. Ist eine derartige Übermittlung dieser Informationen an Instagram von der betroffenen Person nicht gewollt, kann diese die Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf unserer Internetseite aus ihrem Instagram-Account ausloggt.</p>

<p>Weitere Informationen und die geltenden Datenschutzbestimmungen von Instagram können unter https://help.instagram.com/155833707900388 und https://www.instagram.com/about/legal/privacy/ abgerufen werden.</p>

<h4>12. Datenschutzbestimmungen zu Einsatz und Verwendung von LinkedIn</h4>
<p>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Komponenten der LinkedIn Corporation integriert. LinkedIn ist ein Internetbasiertes soziales Netzwerk, das eine Konnektierung der Nutzer mit bestehenden Geschäftskontakten sowie das Knüpfen von neuen Businesskontakten ermöglicht. Über 400 Millionen registrierte Personen nutzen LinkedIn in mehr als 200 Ländern. Damit ist LinkedIn derzeit die größte Plattform für Businesskontakte und eine der meistbesuchten Internetseiten der Welt.</p>

<p>Betreibergesellschaft von LinkedIn ist die LinkedIn Corporation, 2029 Stierlin Court Mountain View, CA 94043, USA. Für Datenschutzangelegenheiten außerhalb der USA ist LinkedIn Ireland, Privacy Policy Issues, Wilton Plaza, Wilton Place, Dublin 2, Ireland, zuständig.</p>

<p>Bei jedem einzelnen Abruf unserer Internetseite, die mit einer LinkedIn-Komponente (LinkedIn-Plug-In) ausgestattet ist, veranlasst diese Komponente, dass der von der betroffenen Person verwendete Browser eine entsprechende Darstellung der Komponente von LinkedIn herunterlädt. Weitere Informationen zu den LinkedIn-Plug-Ins können unter https://developer.linkedin.com/plugins abgerufen werden. Im Rahmen dieses technischen Verfahrens erhält LinkedIn Kenntnis darüber, welche konkrete Unterseite unserer Internetseite durch die betroffene Person besucht wird.</p>

<p>Sofern die betroffene Person gleichzeitig bei LinkedIn eingeloggt ist, erkennt LinkedIn mit jedem Aufruf unserer Internetseite durch die betroffene Person und während der gesamten Dauer des jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete Unterseite unserer Internetseite die betroffene Person besucht. Diese Informationen werden durch die LinkedIn-Komponente gesammelt und durch LinkedIn dem jeweiligen LinkedIn-Account der betroffenen Person zugeordnet. Betätigt die betroffene Person einen auf unserer Internetseite integrierten LinkedIn-Button, ordnet LinkedIn diese Information dem persönlichen LinkedIn-Benutzerkonto der betroffenen Person zu und speichert diese personenbezogenen Daten.</p>

<p>LinkedIn erhält über die LinkedIn-Komponente immer dann eine Information darüber, dass die betroffene Person unsere Internetseite besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufes unserer Internetseite gleichzeitig bei LinkedIn eingeloggt ist; dies findet unabhängig davon statt, ob die betroffene Person die LinkedIn-Komponente anklickt oder nicht. Ist eine derartige Übermittlung dieser Informationen an LinkedIn von der betroffenen Person nicht gewollt, kann diese die Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf unserer Internetseite aus ihrem LinkedIn-Account ausloggt.</p>

<p>LinkedIn bietet unter https://www.linkedin.com/psettings/guest-controls die Möglichkeit, E-Mail-Nachrichten, SMS-Nachrichten und zielgerichtete Anzeigen abzubestellen sowie Anzeigen-Einstellungen zu verwalten. LinkedIn nutzt ferner Partner wie Quantcast, Google Analytics, BlueKai, DoubleClick, Nielsen, Comscore, Eloqua und Lotame, die Cookies setzen können. Solche Cookies können unter https://www.linkedin.com/legal/cookie-policy abgelehnt werden. Die geltenden Datenschutzbestimmungen von LinkedIn sind unter https://www.linkedin.com/legal/privacy-policy abrufbar. Die Cookie-Richtlinie von LinkedIn ist unter https://www.linkedin.com/legal/cookie-policy abrufbar.</p>

<h4>13. Rechtsgrundlage der Verarbeitung</h4>
<p>Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt für solche Verarbeitungsvorgänge die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur unseren Produkten oder Leistungen. Unterliegt unser Unternehmen einer rechtlichen Verpflichtung durch welche eine Verarbeitung von personenbezogenen Daten erforderlich wird, wie beispielsweise zur Erfüllung steuerlicher Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c DS-GVO. In seltenen Fällen könnte die Verarbeitung von personenbezogenen Daten erforderlich werden, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein Besucher in unserem Betrieb verletzt werden würde und daraufhin sein Name, sein Alter, seine Krankenkassendaten oder sonstige lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder sonstige Dritte weitergegeben werden müssten. Dann würde die Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen.
Letztlich könnten Verarbeitungsvorgänge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage basieren Verarbeitungsvorgänge, die von keiner der vorgenannten Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich ist, sofern die Interessen, Grundrechte und Grundfreiheiten des Betroffenen nicht überwiegen. Solche Verarbeitungsvorgänge sind uns insbesondere deshalb gestattet, weil sie durch den Europäischen Gesetzgeber besonders erwähnt wurden. Er vertrat insoweit die Auffassung, dass ein berechtigtes Interesse anzunehmen sein könnte, wenn die betroffene Person ein Kunde des Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DS-GVO).
</p>

<h4>14. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem Dritten verfolgt werden</h4>
<p>Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser berechtigtes Interesse die Durchführung unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer Mitarbeiter und unserer Anteilseigner.</p>

<h4>15. Dauer, für die die personenbezogenen Daten gespeichert werden</h4>
<p>Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind.</p>

<h4>16. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen Daten; Erforderlichkeit für den Vertragsabschluss; Verpflichtung der betroffenen Person, die personenbezogenen Daten bereitzustellen; mögliche Folgen der Nichtbereitstellung</h4>
<p>Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann.
Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass eine betroffene Person uns personenbezogene Daten zur Verfügung stellt, die in der Folge durch uns verarbeitet werden müssen. Die betroffene Person ist beispielsweise verpflichtet uns personenbezogene Daten bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag abschließt. Eine Nichtbereitstellung der personenbezogenen Daten hätte zur Folge, dass der Vertrag mit dem Betroffenen nicht geschlossen werden könnte.
Vor einer Bereitstellung personenbezogener Daten durch den Betroffenen muss sich der Betroffene an einen unserer Mitarbeiter wenden. Unser Mitarbeiter klärt den Betroffenen einzelfallbezogen darüber auf, ob die Bereitstellung der personenbezogenen Daten gesetzlich oder vertraglich vorgeschrieben oder für den Vertragsabschluss erforderlich ist, ob eine Verpflichtung besteht, die personenbezogenen Daten bereitzustellen, und welche Folgen die Nichtbereitstellung der personenbezogenen Daten hätte.
</p>

<h4>17. Bestehen einer automatisierten Entscheidungsfindung</h4>
<p>Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.</p>

<p>Diese Datenschutzerklärung wurde durch den Datenschutzerklärungs-Generator der DGD Deutsche Gesellschaft für Datenschutz GmbH, die als <a href="https://dg-datenschutz.de/datenschutz-dienstleistungen/externer-datenschutzbeauftragter/">Externer Datenschutzbeauftragter Rosenheim</a> tätig ist, in Kooperation mit dem <a href="https://www.wbs-law.de/it-recht/datenschutzrecht/">Anwalt für IT- und Datenschutzrecht</a> Christian Solmecke erstellt.
</p>


      `
    }
  },
  Home: {
    Slogan: "Die nächste Generation hybrider App's",
    paragraph:
      "Wir haben uns in der Entwicklung von hybriden Applikationen spezialisiert. Hybride Applikation basieren auf dem Grundgedanken dass sie auf allen herkömmlichen Betriebssystemen laufen. Das hat unter anderem den Vorteil dass diese Applikationen auf allen Geräten der gleichen 'CodeBase' unterliegen, und deshalb ein sehr Konstantes Nutzererlebnis kreieren.",
    bgImage: {
      alt: 'Ein einfacher grüner Hintergrund'
    },
    seeMore: 'Mehr entdecken'
  },
  Services: {
    Hero: {
      title: 'Progressive web Applikationen, die nächste generation hybrider Apps.',
      text: `Progressive web Applikationen (PWA's) sind Applikationen die über einen Browser zugänglich gemacht werden. 
              Im Gegensatz zu herkömmlichen Applikationen laufen PWA's auf jedem Endgerät. Anstatt eine eigene Applikation für jedes Betriebssystem zu kreieren, deckt eine App das gesamte Spektrum ab. 
              Kurz gesagt, PWA's sind hybride Applikationen die über den Browser Zugänglich sind.`
    },
    Cards: [
      {
        id: 1,
        title: 'Eine Applikation für alle Endgeräte',
        text: `Da PWA's auf modernen Webtechnologien basieren, sind sie Zugänglich für jedes Browserfähige Gerät. Das kreiert viele Vorteile gegenüber Applikationen die über den Betriebssystem internen App-store zugänglich sind. Neben der einfacheren Zugänglichkeit und die damit verbundene Mehrzahl an potentiellen Benutzern, ist die Applikation auch konsistenter zwischen den verschiedenen Endgeräten. Das wechseln vom Smartphone auf ihren Laptop ist dadürch beinahe unmerklich. 
          Natürlich gibt es visuelle Unterschiede zwischen der Applikation auf einem Smartphone zu einem 4k Bildschirm an einem Desktop PC. Jedoch ist das design und die funktionalität beinahe identisch.
          Ein weiterer großer Unterschied zu herkömmlichen Applikationen ist der Finanzielle und Zeitliche Aufwand der mit der Entwicklung der Applikation einhergeht. 
          Da nur eine Aplikation erstellt werden muss, liegt die finanzielle Investition bei ca. 60% - 80% der kosten einer App für IOS und Android, und die PWA deckt nicht nur smartphones, sondern auch alle desktop Betriebssysteme und auch moderne smart-TV's ab.`,
        image: {
          alt: 'All die unterschiedlichen Endgeräte',
          name: 'responsive.png'
        }
      },
      {
        id: 2,
        title: 'Installierbar',
        text: `Eine PWA kann auf einem Smartphone, Laptop, Desktop, sowie auf modernen smart-TV's installiert werden. Nach der Installation ist die App auf dem gleichen Wege zugänglich wie alle anderen Applikationen. Zum beispiel kann die Anwendung auf einem Smartphone über den Homebildschirm gestartet werden.`,
        image: {
          alt: 'Jemand benutzt eine App',
          name: 'ehr.jpg'
        }
      },
      {
        id: 3,
        title: 'Auch offline nutzbar',
        text: `Durch intelligente Caching mechanismen sind all unsere Anwendungen auch offline nutzbar. Das bedeutet, nach dem ersten laden der Applikation ist sie nicht mehr auf eine funktionierende Internetverbindung angewiesen. 
         Das kreiert ein hervorragendes Erlebnis, vorallem für mobile Nutzer, da die Geschwindigkeit der Anwendung nicht von der Internetverbindung abhängig ist. 
         Natürlich gibt es funktionalitäten einer Applikation die auf eine funktionierende Internetverbindung angewiesen sind, wie zum Beispiel das senden von Nachrichten, das kreieren von Benutzerprofilen, das Herunterladen von Echtzeitdaten etc. .
         Diese Funktionalitäten können selbstverständlich nicht ohne eine funktionierende Internetverbindung gewährleistet werden. Jedoch sind unsere Applikationen in der Lage diese Anfragen zu speichern und sie, sobald eine Internetverbindung besteht, auszuführen.`,
        image: {
          alt: 'Ein Auto an einem verlassenem Strand',
          name: 'horizon.jpg'
        }
      },

      {
        id: 4,
        title: 'Schnell',
        text: `
        Da keine installationspflicht besteht ist die erste Interaktion mit progressiven web Applikationen sehr viel schneller möglich als mit traditionellen Apps.
        Vom Zeitpunkt des öffnens der Webseite bis zur vollständigen Interaktionsfähigkeit, vergehen in der Regel wenige Sekunden. Im gegensatz dazu liegt die Zeitspanne bei Applikationen aus dem privaten App-store des Betriebssystems bei Sekunden im zweistelligen bereich und oftmals sogar Minuten.
        Neben der schenller ersten Interaktion, sind unsere Applikationen auch nach der ersten Interaktion mindestens genauso schnell wie ihre nativen Gegenstücke. 
        Durch moderne Web technologien, wie "Webassembly" können unsere Apps sogar in einigen Fällen die Leistung nativer Apps überschreiten.
        `,
        image: {
          alt: 'Ein Skifahrer im steilen Tiefschneehang',
          name: 'freerider.jpg'
        }
      },
      {
        id: 5,
        title: 'Einfacher zu finden',
        text: `
        Da PWA's über den browser zu erreichen sind, können sie von jeder Webseite sowie Suchmaschienen verlinkt werden. 
        Das hilft Benutzern ihre Applikation zu finden und öffnet viele Türen für eine effektieve Monetarisierung.
        `,
        image: {
          alt: 'Ein junger Mann der in die Landschaft blickt',
          name: 'discover.jpg'
        }
      },
      {
        id: 6,
        title: 'Integriert',
        text: `
        PWA’s können auf Funktionalitäten aller Geräte zugreifen. Zum Beispiel ist eine PWA in der Lage auf die Kamera, das Mikrofon, die Lautsprecher, etc. ihres Geräts zuzugreifen.
        Das macht es möglich integrierte Applikationen zu schreiben. Selbstverständlich ist eine PWA auch in der Lage die Funktionalitäten ihres Geräts zu ermitteln, und kann bei dem fehlen einer Funktionalität, welche für die Anwendung genutzt wird entsprechend reagieren.
        `,
        image: {
          alt: 'Zwei sich treffende Hände, mit einer verbindenden Sonne im Hintergrund',
          name: 'integrated.jpg'
        }
      }

      // {
      //   id: 1,
      //   title: 'Eine App für alle Endgeräte',
      //   text: `Progressive-web-applikationen sind eine neue Technologie, die es
      //   möglich macht Applikationen für alle Endgeräte über den Browser bereit zu
      //   stellen. Das ist ein großer Schritt, da nun Applikationen für alle Geräte auf
      //   der Basis von einer CodeBase kreiert werden können.`,
      //   image: {
      //     alt: 'all the different devices',
      //     src: require('../../assets/images/responsive.png?resize'),
      //     placeholder: require('../../assets/images/responsive.png?lqip')
      //   }
      // },
      // {
      //   id: 2,

      //   title: 'Funktioniert Offline',
      //   text: `Mit Hilfe von intelligenten caching Techniken sind wir in der Lage die
      //   Applikationen komplett offline zur verfügung zu stellen. Das hat den Vorteil,
      //   dass sie nach dem ersten laden beziehungsweise installieren der Applikation,
      //   nicht mehr auf eine funktionierende Internetverbindung angewiesen sind. Das
      //   macht das benutzen der App vorallem auf dem Mobilen Endgerät um einiges
      //   angenehmer.`,
      //   image: {
      //     alt: 'A car at a remote area',
      //     src: require('../../assets/images/horizon.jpg?resize'),
      //     placeholder: require('../../assets/images/horizon.jpg?sqip')
      //   }
      // },
      // {
      //   id: 3,

      //   title: 'Installierbar',
      //   text: `Eine progressive-web-applikation kann wie jede herkümmliche Applikation
      //   auf ihrem Endgerät installiert werden. Nach der Installation ist diese über
      //   den Applikationslauncher ihres Geräts verfügbar. Zum beispiel können sie die
      //   App auf ihrem Smartphone über den Homescreen erreichen.`,
      //   image: {
      //     alt: 'Someone using an App',
      //     src: require('../../assets/images/ehr.jpg?resize'),
      //     placeholder: require('../../assets/images/ehr.jpg?sqip')
      //   }
      // },
      // {
      //   id: 4,
      //   title: 'Konsistent',
      //   text: `Da progressive-web-applikationen für alle Geräte auf dem gleichen Code
      //   basieren sind diese zwischen den Geräten sehr  ähnlich aufgebaut. Dies macht
      //   das benutzen der Applikation auf unterschiedlichen Geräten einfacher.
      //   Natürlich müssen die Applikationen eine teilweise andere Darstellung haben
      //   wenn sie sie auf ihrem 4k Computerbildschirm öffnen als wenn sie sie auf einem
      //   smartphone öffnen. Jedoch ist eine Kosistenz des Designs und der
      //   Funktionsweise immer gegeben.`,
      //   image: {
      //     alt: "A blackboard with 'The next step' written on it",
      //     src: require('../../assets/images/board.jpg?resize'),
      //     placeholder: require('../../assets/images/board.jpg?sqip')
      //   }
      // }
    ]
  },
  About: {
    hero: {
      title: 'Collaborative development',
      paragraph: `We offer professional application development services. Our applications not only meet the industry standards, but go far beyond your expectations. By utilizing internal motivations we are able to create awesome products, while maintaining a pleasurable working experiences for all participants. Through modern communication we are able to guarantee amazing results, and offer high customization even during the development process. Our goal is to create a collaborative working environment instead of ticking of tasks from a list. We belief in the power of individuals who are incentivized to create good work instead of working off their hours. Therefore we’ve created a unique payment system for our collaborators. This system is based on actual value rather than hours and is backed by a secret evaluation system, which creates an equal chance for everyone while encouraging fairness. 
      All of those efforts are made to create the best possible product for your business and a pleasurable collaboration between our businesses.`
    },
    technologies: {
      title: 'Technologies',
      technologies: [
        {
          id: 1,
          title: 'JavaScript',
          text:
            'Javascript ist die meist benutzte Sprache in moderner web entwicklung, und wird bei nahezu jedem web-projekt gebraucht.',
          link: 'https://de.wikipedia.org/wiki/JavaScript',
          icon: 'JavaScript.svg'
        },
        {
          id: 2,
          title: 'NodeJS',
          text:
            'In der Regel benutzen wir ein NodeJS Back-End, da es die Interaction mit Front-End Javascript Frameworks vereinfacht.',
          link: 'https://nodejs.org',
          icon: 'NodeJS.svg'
        },
        {
          id: 3,
          title: 'React',
          text:
            'React ist das Front-End Framework mit dem wir am effizientesten arbeiten. Wir benutzen es für fast jedes Projekt was etwas mehr Complexität beinhaltet.',
          link: 'https://reactjs.org',
          icon: 'React.svg'
        },
        {
          id: 4,
          title: 'Vue',
          text: 'Vue is a great alternative to React, especially for smaller projects.',
          link: 'https://vuejs.org',
          icon: 'Vue.svg'
        },
        {
          id: 5,
          title: 'Typescript',
          text:
            'Wir benutzen Typescript in all unseren Projekten, da es dem entstehen von Bugs enorm vorbeugt.',
          link: 'https://www.typescriptlang.org',
          icon: 'Typescript.svg'
        },
        {
          id: 6,
          title: 'HTML5',
          text:
            'Modernes HTML ist ein Muss für aktuelle Webseiten und kann nicht vernachlässigt werden.',
          link: 'https://de.wikipedia.org/wiki/HTML5',
          icon: 'HTML5.svg'
        },
        {
          id: 7,
          title: 'CSS3',
          text: 'Modernes CSS ist eine Basisfähigkeit von jedem web-developer.',
          link: 'https://de.wikipedia.org/wiki/Cascading_Style_Sheets',
          icon: 'CSS3.svg'
        },
        {
          id: 8,
          title: 'MongoDB',
          text:
            'MongoDB ist die meist benutzte non-relational Datenbank. Wir benutzen sie für fast alle unsere Projekte.',
          link: 'https://www.mongodb.com',
          icon: 'MongoDB.svg'
        },
        {
          id: 9,
          title: 'Netlify',
          text:
            'Netlify ist ein super host für moderne applicationen. Neben unglaublich schnellen servern stellt Netlify sehr viele Tools für uns Entwickler bereit. Dadurch haben wir mehr Zeit für die Entwicklung ihrer Applikation.',
          link: 'https://www.netlify.com',
          icon: 'Netlify.svg'
        }
      ]
    }
  }
};
