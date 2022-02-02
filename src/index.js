import { endent, join } from '@dword-design/functions'
import * as personalData from '@dword-design/personal-data'

export default (locale, config) => {
  config = {
    contact: false,
    cookies: true,
    firebaseAnalytics: false,
    firebaseAuthentication: false,
    firebaseCloudFirestore: false,
    firebaseCloudFunctions: false,
    firebaseCloudStorage: false,
    googleAnalytics: true,
    newsletter: false,
    registration: false,
    serverData: true,
    ...config,
  }

  const addressMarkup = endent`
    ${personalData.name}<br>
    ${personalData.street}<br>
    ${personalData.postalCode} ${personalData.city}<br>
    ${locale === 'de' ? 'Deutschland' : 'Germany'}
  `

  return (
    [
      locale === 'de'
        ? endent`
        <h2>Datenschutzerklärung</h2>
        <p>Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.</p>
        <p>Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt), gilt als „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.</p>
        <p>Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit wir entweder allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu Optimierungszwecken sowie zur Steigerung der Nutzungsqualität eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum eigener Verantwortung verarbeiten.</p>
        <p>Unsere Datenschutzerklärung ist wie folgt gegliedert:</p>
        <p>I. Informationen über uns als Verantwortliche<br>II. Rechte der Nutzer und Betroffenen<br>III. Informationen zur Datenverarbeitung</p>
        <h3>I. Informationen über uns als Verantwortliche</h3>
        <p>Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne ist:</p>
        <p>${addressMarkup}</p>
        <p>
          Telefon: ${personalData.phoneNumber}<br>
          E-Mail: ${personalData.email}
        </p>
        <p>Datenschutzbeauftragte/r beim Anbieter ist:</p>
        <p>${addressMarkup}</p>
        <p>
          Telefon: ${personalData.phoneNumber}<br>
          E-Mail: ${personalData.email}
        </p>
        <h3>II. Rechte der Nutzer und Betroffenen</h3>
        <p>Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die Nutzer und Betroffenen das Recht</p>
        <ul>
          <li>auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);</li>
          <li>auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16 DSGVO);</li>
          <li>auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;</li>
          <li>auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);</li>
          <li>auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).</li>
        </ul>
        <p>Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede Berichtigung oder Löschung von Daten oder die Einschränkung der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über diese Empfänger.</p>
        <p><strong>Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.</strong></p>
        <h3>III. Informationen zur Datenverarbeitung</h3>
        <p>Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der Löschung der Daten keine gesetzlichen Aufbewahrungspflichten entgegenstehen und nachfolgend keine anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht werden.</p>
      `
        : endent`
        <h2>Privacy Policy</h2>
        <p>Personal data (usually referred to just as "data" below) will only be processed by us to the extent necessary and for the purpose of providing a functional and user-friendly website, including its contents, and the services offered there.</p>
        <p>Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of operations such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or destruction performed on personal data, whether by automated means or not.</p>
        <p>The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and legal basis for the processing of such data either under our own control or in conjunction with others. We also inform you below about the third-party components we use to optimize our website and improve the user experience which may result in said third parties also processing data they collect and control.</p>
        <p>Our privacy policy is structured as follows:</p>
        <p>I. Information about us as controllers of your data<br>II. The rights of users and data subjects<br>III. Information about the data processing</p>
        <h3>I. Information about us as controllers of your data</h3>
        <p>The party responsible for this website (the "controller") for purposes of data protection law is:</p>
        <p>${addressMarkup}</p>
        <p>
          Phone: ${personalData.phoneNumber}<br>
          Email: ${personalData.email}
        </p>
        <p>The controller's data protection officer is:</p>
        <p>${addressMarkup}</p>
        <p>
          Phone: ${personalData.phoneNumber}<br>
          Email: ${personalData.email}
        </p>
        <h3>II. The rights of users and data subjects</h3>
        <p>With regard to the data processing to be described in more detail below, users and data subjects have the right</p>
        <ul type="disc">
          <li>to confirmation of whether data concerning them is being processed, information about the data being processed, further information about the nature of the data processing, and copies of the data (cf. also Art. 15 GDPR);</li>
          <li>to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);</li>
          <li>to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per Art. 18 GDPR;</li>
          <li>to receive copies of the data concerning them and/or provided by them and to have the same transmitted to other providers/controllers (cf. also Art. 20 GDPR);</li>
          <li>to file complaints with the supervisory authority if they believe that data concerning them is being processed by the controller in breach of data protection provisions (see also Art. 77 GDPR).</li>
        </ul>
        <p>In addition, the controller is obliged to inform all recipients to whom it discloses data of any such corrections, deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR. However, this obligation does not apply if such notification is impossible or involves a disproportionate effort. Nevertheless, users have a right to information about these recipients.</p>
        <p><strong>Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controller's future processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing for the purpose of direct advertising is permissible.</strong></p>
        <h3>III. Information about the data processing</h3>
        <p>Your data processed when using our website will be deleted or blocked as soon as the purpose for its storage ceases to apply, provided the deletion of the same is not in breach of any statutory storage obligations or unless otherwise stipulated below.</p>
      `,
      ...(config.serverData
        ? [
            locale === 'de'
              ? endent`
          <h4>Serverdaten</h4>
          <p>Aus technischen Gründen, insbesondere zur Gewährleistung eines sicheren und stabilen Internetauftritts, werden Daten durch Ihren Internet-Browser an uns bzw. an unseren Webspace-Provider übermittelt. Mit diesen sog. Server-Logfiles werden u.a. Typ und Version Ihres Internetbrowsers, das Betriebssystem, die Website, von der aus Sie auf unseren Internetauftritt gewechselt haben (Referrer URL), die Website(s) unseres Internetauftritts, die Sie besuchen, Datum und Uhrzeit des jeweiligen Zugriffs sowie die IP-Adresse des Internetanschlusses, von dem aus die Nutzung unseres Internetauftritts erfolgt, erhoben.</p>
          <p>Diese so erhobenen Daten werden vorrübergehend gespeichert, dies jedoch nicht gemeinsam mit anderen Daten von Ihnen.</p>
          <p>Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Verbesserung, Stabilität, Funktionalität und Sicherheit unseres Internetauftritts.</p>
          <p>Die Daten werden spätestens nach sieben Tage wieder gelöscht, soweit keine weitere Aufbewahrung zu Beweiszwecken erforderlich ist. Andernfalls sind die Daten bis zur endgültigen Klärung eines Vorfalls ganz oder teilweise von der Löschung ausgenommen.</p>
        `
              : endent`
          <h4>Server data</h4>
          <p>For technical reasons, the following data sent by your internet browser to us or to our server provider will be collected, especially to ensure a secure and stable website: These server log files record the type and version of your browser, operating system, the website from which you came (referrer URL), the webpages on our site visited, the date and time of your visit, as well as the IP address from which you visited our site.</p>
          <p>The data thus collected will be temporarily stored, but not in association with any other of your data.</p>
          <p>The basis for this storage is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the improvement, stability, functionality, and security of our website.</p>
          <p>The data will be deleted within no more than seven days, unless continued storage is required for evidentiary purposes. In which case, all or part of the data will be excluded from deletion until the investigation of the relevant incident is finally resolved.</p>
        `,
          ]
        : []),
      ...(config.cookies
        ? [
            locale === 'de'
              ? endent`
          <h4>Cookies</h4>
          <h5>a) Sitzungs-Cookies/Session-Cookies</h5>
          <p>Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind kleine Textdateien oder andere Speichertechnologien, die durch den von Ihnen eingesetzten Internet-Browser auf Ihrem Endgerät ablegt und gespeichert werden. Durch diese Cookies werden im individuellen Umfang bestimmte Informationen von Ihnen, wie beispielsweise Ihre Browser- oder Standortdaten oder Ihre IP-Adresse, verarbeitet. &nbsp;</p>
          <p>Durch diese Verarbeitung wird unser Internetauftritt benutzerfreundlicher, effektiver und sicherer, da die Verarbeitung bspw. die Wiedergabe unseres Internetauftritts in unterschiedlichen Sprachen oder das Angebot einer Warenkorbfunktion ermöglicht.</p>
          <p>Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO, sofern diese Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung verarbeitet werden.</p>
          <p>Falls die Verarbeitung nicht der Vertragsanbahnung oder Vertragsabwicklung dient, liegt unser berechtigtes Interesse in der Verbesserung der Funktionalität unseres Internetauftritts. Rechtsgrundlage ist in dann Art. 6 Abs. 1 lit. f) DSGVO.</p>
          <p>Mit Schließen Ihres Internet-Browsers werden diese Session-Cookies gelöscht.</p>
          <h5>b) Drittanbieter-Cookies</h5>
          <p>Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von Partnerunternehmen, mit denen wir zum Zwecke der Werbung, der Analyse oder der Funktionalitäten unseres Internetauftritts zusammenarbeiten, verwendet.</p>
          <p>Die Einzelheiten hierzu, insbesondere zu den Zwecken und den Rechtsgrundlagen der Verarbeitung solcher Drittanbieter-Cookies, entnehmen Sie bitte den nachfolgenden Informationen.</p>
          <h5>c) Beseitigungsmöglichkeit</h5>
          <p>Sie können die Installation der Cookies durch eine Einstellung Ihres Internet-Browsers verhindern oder einschränken. Ebenfalls können Sie bereits gespeicherte Cookies jederzeit löschen. Die hierfür erforderlichen Schritte und Maßnahmen hängen jedoch von Ihrem konkret genutzten Internet-Browser ab. Bei Fragen benutzen Sie daher bitte die Hilfefunktion oder Dokumentation Ihres Internet-Browsers oder wenden sich an dessen Hersteller bzw. Support. Bei sog. Flash-Cookies kann die Verarbeitung allerdings nicht über die Einstellungen des Browsers unterbunden werden. Stattdessen müssen Sie insoweit die Einstellung Ihres Flash-Players ändern. Auch die hierfür erforderlichen Schritte und Maßnahmen hängen von Ihrem konkret genutzten Flash-Player ab. Bei Fragen benutzen Sie daher bitte ebenso die Hilfefunktion oder Dokumentation Ihres Flash-Players oder wenden sich an den Hersteller bzw. Benutzer-Support.</p>
          <p>Sollten Sie die Installation der Cookies verhindern oder einschränken, kann dies allerdings dazu führen, dass nicht sämtliche Funktionen unseres Internetauftritts vollumfänglich nutzbar sind.</p>
        `
              : endent`
          <h4>Cookies</h4>
          <h5>a) Session cookies</h5>
          <p>We use cookies on our website. Cookies are small text files or other storage technologies stored on your computer by your browser. These cookies process certain specific information about you, such as your browser, location data, or IP address. &nbsp;</p>
          <p>This processing makes our website more user-friendly, efficient, and secure, allowing us, for example, to display our website in different languages or to offer a shopping cart function.</p>
          <p>The legal basis for such processing is Art. 6 Para. 1 lit. b) GDPR, insofar as these cookies are used to collect data to initiate or process contractual relationships.</p>
          <p>If the processing does not serve to initiate or process a contract, our legitimate interest lies in improving the functionality of our website. The legal basis is then Art. 6 Para. 1 lit. f) GDPR.</p>
          <p>When you close your browser, these session cookies are deleted.</p>
          <h5>b) Third-party cookies</h5>
          <p>If necessary, our website may also use cookies from companies with whom we cooperate for the purpose of advertising, analyzing, or improving the features of our website.</p>
          <p>Please refer to the following information for details, in particular for the legal basis and purpose of such third-party collection and processing of data collected through cookies.</p>
          <h5>c) Disabling cookies</h5>
          <p>You can refuse the use of cookies by changing the settings on your browser. Likewise, you can use the browser to delete cookies that have already been stored. However, the steps and measures required vary, depending on the browser you use. If you have any questions, please use the help function or consult the documentation for your browser or contact its maker for support. Browser settings cannot prevent so-called flash cookies from being set. Instead, you will need to change the setting of your Flash player. The steps and measures required for this also depend on the Flash player you are using. If you have any questions, please use the help function or consult the documentation for your Flash player or contact its maker for support.</p>
          <p>If you prevent or restrict the installation of cookies, not all of the functions on our site may be fully usable.</p>
        `,
          ]
        : []),
      ...(config.contact
        ? [
            locale === 'de'
              ? endent`
          <h4>Kontaktaufnahme</h4>
          <p>Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und Beantwortung Ihre Anfrage erforderlich - ohne deren Bereitstellung können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.</p>
          <p>Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.</p>
          <p>Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen, wie bspw. bei einer sich etwaig anschließenden Vertragsabwicklung.</p>
        `
              : endent`
          <h4>Contact</h4>
          <p>If you contact us via email or the contact form, the data you provide will be used for the purpose of processing your request. We must have this data in order to process and answer your inquiry; otherwise we will not be able to answer it in full or at all.</p>
          <p>The legal basis for this data processing is Art. 6 Para. 1 lit. b) GDPR.</p>
          <p>Your data will be deleted once we have fully answered your inquiry and there is no further legal obligation to store your data, such as if an order or contract resulted therefrom.</p>
        `,
          ]
        : []),
      ...(config.registration
        ? [
            locale === 'de'
              ? endent`
          <h4>Registrierfunktion</h4>
          <p>Falls Sie über unseren Internetauftritt ein Kundenkonto bei uns anlegen, werden wir die von Ihnen bei der Registrierung eingegebenen Daten (also bspw. Ihren Namen, Ihre Anschrift oder Ihre E-Mail-Adresse) ausschließlich für vorvertragliche Leistungen, für die Vertragserfüllung oder zum Zwecke der Kundenpflege (bspw. um Ihnen eine Übersicht über Ihre bisherigen Bestellungen bei uns zur Verfügung zu stellen oder um Ihnen die sog. Merkzettelfunktion anbieten zu können) erheben und speichern. Gleichzeitig speichern wir dann die IP-Adresse und das Datum Ihrer Registrierung nebst Uhrzeit. Eine Weitergabe dieser Daten an Dritte erfolgt natürlich nicht.</p>
          <p>Im Rahmen des weiteren Anmeldevorgangs wird Ihre Einwilligung in diese Verarbeitung eingeholt und auf diese Datenschutzerklärung verwiesen. Die dabei von uns erhobenen Daten werden ausschließlich für die Zurverfügungstellung des Kundenkontos verwendet.&nbsp;</p>
          <p>Soweit Sie in diese Verarbeitung einwilligen, ist Art. 6 Abs. 1 lit. a) DSGVO Rechtsgrundlage für die Verarbeitung.</p>
          <p>Sofern die Eröffnung des Kundenkontos zusätzlich auch vorvertraglichen Maßnahmen oder der Vertragserfüllung dient, so ist Rechtsgrundlage für diese Verarbeitung auch noch Art. 6 Abs. 1 lit. b) DSGVO.</p>
          <p>Die uns erteilte Einwilligung in die Eröffnung und den Unterhalt des Kundenkontos können Sie gemäß Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft widerrufen. Hierzu müssen Sie uns lediglich über Ihren Widerruf in Kenntnis setzen.</p>
          <p>Die insoweit erhobenen Daten werden gelöscht, sobald die Verarbeitung nicht mehr erforderlich ist. Hierbei müssen wir aber steuer- und handelsrechtliche Aufbewahrungsfristen beachten.</p>
        `
              : endent`
          <h4>Registration</h4>
          <p>If you create a customer account with us via our website, we will use the data you entered during registration (e.g. your name, your address, or your email address) exclusively for services leading up to your potential placement of an order or entering some other contractual relationship with us, to fulfill such orders or contracts, and to provide customer care (e.g. to provide you with an overview of your previous orders or to be able to offer you a wishlist function). We also store your IP address and the date and time of your registration. This data will not be transferred to third parties.</p>
          <p>During the registration process, your consent will be obtained for this processing of your data, with reference made to this privacy policy. The data collected by us will be used exclusively to provide your customer account.&nbsp;</p>
          <p>If you give your consent to this processing, Art. 6 Para. 1 lit. a) GDPR is the legal basis for this processing.</p>
          <p>If the opening of the customer account is also intended to lead to the initiation of a contractual relationship with us or to fulfill an existing contract with us, the legal basis for this processing is also Art. 6 Para. 1 lit. b) GDPR.</p>
          <p>You may revoke your prior consent to the processing of your personal data at any time under Art. 7 Para. 3 GDPR with future effect. All you have to do is inform us that you are revoking your consent.</p>
          <p>The data previously collected will then be deleted as soon as processing is no longer necessary. However, we must observe any retention periods required under tax and commercial law.</p>
        `,
          ]
        : []),
      // https://www.striveworkouts.com/privacy/
      ...(config.firebaseAuthentication
        ? [
            '<h4>Firebase Authentication</h4>',
            locale === 'de'
              ? endent`
          <p>Firebase Authentication ist ein von Google Ireland Limited bereitgestellter Registrierungs- und Anmeldedienst. Um den Anmelde- und Anmeldeprozess zu vereinfachen, kann Firebase Authentication Identitätsdienste von Drittparteien benutzen und die Informationen auf ihrer Plattform speichern.</p>
          <p>Verarbeitete personenbezogene Daten: E-Mail; Konten in den sozialen Netzwerken; Nachname; Nutzername; Passwort; Profilbild; Telefonnummer; Vorname.</p>
          <p>Rechtsgrundlage der Verarbeitung: Vertrag.</p>
          <p>Verarbeitungsort: Irland – <a href="https://policies.google.com/privacy" target="_blank">Datenschutzerklärung.</a></p>
          <p>Rechtsgrundlage für die Übermittlung der Daten außerhalb der EU: Von der EU Kommission erlassene Standarddatenschutzklauseln.</p>
          <p>Speicherdauer: Aufbewahrung der Daten für die Dauer des Vertrages.</p>
        `
              : endent`
          <p>Firebase Authentication is a registration and authentication service provided by Google LLC or by Google Ireland Limited, depending on the location Strive is accessed from. To simplify the registration and authentication process, Firebase Authentication can make use of third-party identity providers and save the information on its platform.</p>
          <p>Personal Data processed: email address; username.</p>
          <p>Place of processing: Ireland – <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>.</p>
          <p>Category of personal information collected according to CCPA: identifiers.</p>
          <p>This processing constitutes a sale based on the definition under the CCPA. In addition to the information in this clause, the User can find information regarding how to opt out of the sale in the section detailing the rights of Californian consumers.</p>
        `,
          ]
        : []),
      ...(config.newsletter
        ? [
            locale === 'de'
              ? endent`
          <h4>Newsletter</h4>
          <p>Falls Sie sich für unseren kostenlosen Newsletter anmelden, werden die von Ihnen hierzu abgefragten Daten, also Ihre E-Mail-Adresse sowie - optional - Ihr Name und Ihre Anschrift, an uns übermittelt. Gleichzeitig speichern wir die IP-Adresse des Internetanschlusses von dem aus Sie auf unseren Internetauftritt zugreifen sowie Datum und Uhrzeit Ihrer Anmeldung. Im Rahmen des weiteren Anmeldevorgangs werden wir Ihre Einwilligung in die Übersendung des Newsletters einholen, den Inhalt konkret beschreiben und auf diese Datenschutzerklärung verwiesen. Die dabei erhobenen Daten verwenden wir ausschließlich für den Newsletter-Versand – sie werden deshalb insbesondere auch nicht an Dritte weitergegeben.</p>
          <p>Rechtsgrundlage hierbei ist Art. 6 Abs. 1 lit. a) DSGVO.</p>
          <p>Die Einwilligung in den Newsletter-Versand können Sie gemäß Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft widerrufen. Hierzu müssen Sie uns lediglich über Ihren Widerruf in Kenntnis setzen oder den in jedem Newsletter enthaltenen Abmeldelink betätigen.</p>
        `
              : endent`
          <h4>Newsletter</h4>
          <p>If you register for our free newsletter, the data requested from you for this purpose, i.e. your email address and, optionally, your name and address, will be sent to us. We also store the IP address of your computer and the date and time of your registration. During the registration process, we will obtain your consent to receive this newsletter and the type of content it will offer, with reference made to this privacy policy. The data collected will be used exclusively to send the newsletter and will not be passed on to third parties.</p>
          <p>The legal basis for this is Art. 6 Para. 1 lit. a) GDPR.</p>
          <p>You may revoke your prior consent to receive this newsletter under Art. 7 Para. 3 GDPR with future effect. All you have to do is inform us that you are revoking your consent or click on the unsubscribe link contained in each newsletter.</p>
        `,
          ]
        : []),
      ...(config.firebaseCloudFirestore
        ? [
            '<h4>Firebase Cloud Firestore</h4>',
            locale === 'de'
              ? endent`
          <p>Firebase Cloud Firestore ist ein Webhosting und Backend Dienst, bereitgestellt von Google Ireland Limited.</p>
          <p>Verarbeitete personenbezogene Daten: Nutzungsdaten; verschiedene Datenarten, wie in der Datenschutzerklärung des Dienstes beschrieben.</p>
          <p>Rechtsgrundlage der Verarbeitung: Vertrag.</p>
          <p>Verarbeitungsort: Irland – <a href="https://policies.google.com/privacy" target="_blank">Datenschutzerklärung</a>.</p>
          <p>Rechtsgrundlage für die Übermittlung der Daten außerhalb der EU: Von der EU Kommission erlassene Standarddatenschutzklauseln.</p>
        ` // https://www.patientenverfuegung.digital/datenschutzerklaerung
              : endent`
          <p>Firebase Cloud Firestore is a hosting and backend service provided by Google LLC or by Google Ireland Limited, depending on the location Strive is accessed from.</p>
          <p>Personal Data processed: Usage Data; various types of Data as specified in the privacy policy of the service.</p>
          <p>Place of processing: Ireland – <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>.</p>
          <p>Category of personal information collected according to CCPA: internet information.</p>
        `, // https://www.striveworkouts.com/privacy/
          ]
        : []),
      ...(config.firebaseCloudStorage
        ? [
            '<h4>Firebase Cloud Storage</h4>',
            locale === 'de'
              ? endent`
          <p>Firebase Cloud Storage ist ein Webhosting Dienst, bereitgestellt von Google Ireland Limited.</p>
          <p>Verarbeitete personenbezogene Daten: Nutzungsdaten; verschiedene Datenarten, wie in der Datenschutzerklärung des Dienstes beschrieben.</p>
          <p>Rechtsgrundlage der Verarbeitung: Vertrag.</p>
          <p>Verarbeitungsort: Irland – <a href="https://policies.google.com/privacy" target="_blank">Datenschutzerklärung</a>.</p>
          <p>Rechtsgrundlage für die Übermittlung der Daten außerhalb der EU: Von der EU Kommission erlassene Standarddatenschutzklauseln.</p>
          <p>Speicherdauer: Aufbewahrung der Daten für die Dauer des Vertrages.</p>
        ` // https://www.patientenverfuegung.digital/datenschutzerklaerung
              : endent`
          <p>Firebase Cloud Storage is a hosting service provided by Google LLC or by Google Ireland Limited, depending on the location Strive is accessed from.</p>
          <p>Personal Data processed: Usage Data; various types of Data as specified in the privacy policy of the service.</p>
          <p>Place of processing: Ireland – <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>.</p>
          <p>Category of personal information collected according to CCPA: internet information.</p>
        `, // https://www.striveworkouts.com/privacy/
          ]
        : []),
      ...(config.firebaseCloudFunctions
        ? [
            '<h4>Firebase Cloud Functions</h4>',
            locale === 'de'
              ? endent`
          <p>Firebase Cloud Functions ist ein Webhosting und Backend Dienst, bereitgestellt von Google Ireland Limited.</p>
          <p>Verarbeitete personenbezogene Daten: Nutzungsdaten; verschiedene Datenarten, wie in der Datenschutzerklärung des Dienstes beschrieben.</p>
          <p>Rechtsgrundlage der Verarbeitung: Vertrag.</p>
          <p>Verarbeitungsort: Irland – <a href="<a href="https://policies.google.com/privacy" target="_blank">Datenschutzerklärung</a>.</p>
          <p>Rechtsgrundlage für die Übermittlung der Daten außerhalb der EU: Von der EU Kommission erlassene Standarddatenschutzklauseln.</p>
        ` // https://www.patientenverfuegung.digital/datenschutzerklaerung
              : endent`
          <p>Firebase Cloud Functions is a hosting and backend service provided by Google LLC or by Google Ireland Limited, depending on the location Strive is accessed from.</p>
          <p>Personal Data processed: Usage Data; various types of Data as specified in the privacy policy of the service.</p>
          <p>Place of processing: Ireland – <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>.</p>
          <p>Category of personal information collected according to CCPA: internet information.</p>
        `, // https://www.striveworkouts.com/privacy/
          ]
        : []),
      ...(config.googleAnalytics
        ? [
            endent`
        <h4>Google Analytics</h4>
        <p>We use Google Analytics on our website. This is a web analytics service provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (hereinafter: Google).</p>
        <p>The Google Analytics service is used to analyze how our website is used. The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the analysis, optimization, and economic operation of our site.</p>
        <p>Usage and user-related information, such as IP address, place, time, or frequency of your visits to our website will be transmitted to a Google server in the United States and stored there. However, we use Google Analytics with the so-called anonymization function, whereby Google truncates the IP address within the EU or the EEA before it is transmitted to the US.</p>
        <p>The data collected in this way is in turn used by Google to provide us with an evaluation of visits to our website and what visitors do once there. This data can also be used to provide other services related to the use of our website and of the internet in general.</p>
        <p>Google states that it will not connect your IP address to other data. In addition, Google provides further information with regard to its data protection practices at</p>
        <p><a href="https://www.google.com/intl/de/policies/privacy/partners" target="_blank" rel="noopener">https://www.google.com/intl/de/policies/privacy/partners</a>,</p>
        <p>including options you can exercise to prevent such use of your data.</p>
        <p>In addition, Google offers an opt-out add-on at</p>
        <p><a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener">https://tools.google.com/dlpage/gaoptout?hl=en</a></p>
        <p>in addition with further information. This add-on can be installed on the most popular browsers and offers you further control over the data that Google collects when you visit our website. The add-on informs Google Analytics' JavaScript (ga.js) that no information about the website visit should be transmitted to Google Analytics. However, this does not prevent information from being transmitted to us or to other web analytics services we may use as detailed herein.</p>
      `,
          ]
        : []),
      ...(config.firebaseAnalytics
        ? [
            '<h4>Google Analytics for Firebase</h4>',
            locale === 'de'
              ? endent`
          <p>Google Analytics für Firebase oder Firebase Analytics ist ein Analyse-Dienst von Google Ireland Limited.</p>
          <p>Weitere Informationen zur Verwendung von Daten bei Google sind in der Partner-Richtlinie von Google einsehbar. Firebase Analytics kann Daten mit anderen von Firebase bereitgestellten Tools wie Crash Reporting, Authentication, Remote Config oder Notifications gemeinsam nutzen. Der Nutzer kann diese Datenschutzerklärung überprüfen, um eine ausführliche Erläuterung zu den anderen vom Eigentümer verwendeten Tools zu finden. Diese Website verwendet Identifikatoren für mobile Geräte und Cookie-ähnliche Technologien für die Ausführung des Google Analytics for Firebase-Dienstes. Nutzer können sich über die entsprechenden Geräteeinstellungen mobiler Geräte von bestimmten Firebase-Funktionen abmelden, wie etwa über die Werbeeinstellungen für mobile Geräte, oder indem sie gegebenenfalls den Anweisungen anderer Abschnitte dieser Datenschutzrichtlinie bezüglich Firebase folgen.</p>
          <p>Verarbeitete personenbezogene Daten: Anwendung-Ausführungen; Anwendung-Updates; Anzahl der Nutzer; Anzahl der Sitzungen; App-Starts; Betriebssysteme; Eindeutige Gerätekennzeichnung für Werbung (Google-Werbe-ID oder IDFA, beispielsweise); Geräteinformationen; In-App-Käufe; Nutzungsdaten; Region; Sitzungsdauer; Tracker.</p>
          <p>Verarbeitungsort: Irland – <a href="https://policies.google.com/privacy" target="_blank">Datenschutzerklärung</a>.</p>
        ` // https://www.unifox.de/datenschutzerklarung.html
              : endent`
          <p>Google Analytics for Firebase or Firebase Analytics is an analytics service provided by Google LLC or by Google Ireland Limited, depending on the location Strive is accessed from.</p>
          <p>In order to understand Google's use of Data, consult <a href="https://www.google.com/policies/privacy/partners/" target="_blank">Google's partner policy</a>. Firebase Analytics may share Data with other tools provided by Firebase, such as Crash Reporting, Authentication, Remote Config or Notifications. The User may check this privacy policy to find a detailed explanation about the other tools used by the Owner. Strive uses identifiers for mobile devices and technologies similar to cookies to run the Firebase Analytics service. Users may opt-out of certain Firebase features through applicable device settings, such as the device advertising settings for mobile phones or by following the instructions in other Firebase related sections of this privacy policy, if available.</p>
          <p>Personal Data processed: Application opens; Application updates; device information; geography/region; In-app purchases; launches; number of sessions; operating systems; session duration; Tracker; unique device identifiers for advertising (Google Advertiser ID or IDFA, for example); Usage Data.</p>
          <p>Place of processing: Ireland – <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>.</p>
          <p>Category of personal information collected according to CCPA: identifiers; commercial information; internet information; geolocation data.</p>
        `, // https://www.striveworkouts.com/privacy/
          ]
        : []),
      ...(config.googleTagManager ||
      config.googleAnalytics ||
      config.firebaseAnalytics
        ? [
            '<h4>Google Tag Manager</h4>',
            locale === 'de'
              ? endent`
                <p>Google Tag Manager ist ein von Google Ireland Limited bereitgestellter Dienst zur Verwaltung von Tags.</p>
                <p>Verarbeitete personenbezogene Daten: Nutzungsdaten.</p>
                <p>Verarbeitungsort: Irland – <a href="https://policies.google.com/privacy" target="_blank">Datenschutzerklärung</a>.</p>
                <p>Rechtsgrundlage für die Übermittlung der Daten außerhalb der EU: Von der EU Kommission erlassene Standarddatenschutzklauseln.</p>
                <p>Speicherdauer: 18 Monate.</p>
              `
              : endent`
                <p>Google Tag Manager is a service provided by Google LLC or by Google Ireland Limited to manage tags.</p>
                <p>Personal Data processed: User data.</p>
                <p>Place of processing: Irland – <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>.</p>
                <p>Category of personal information collected according to CCPA: internet information.</p>
                <p>Storage period: 18 months.</p>
              `,
          ]
        : []),
      locale === 'de'
        ? '<p><a href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html" target="_blank" rel="noopener">Muster-Datenschutzerklärung</a> der <a href="https://www.ratgeberrecht.eu/datenschutz/datenschutzerklaerung-generator-dsgvo.html" target="_blank" rel="noopener">Anwaltskanzlei Weiß &amp; Partner</a></p>'
        : '<p><a href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html" target="_blank" rel="noopener">Model Data Protection Statement</a> for <a href="https://www.ratgeberrecht.eu/" target="_blank" rel="noopener">Anwaltskanzlei Weiß &amp; Partner</a></p>',
    ] |> join('\n')
  )
}
