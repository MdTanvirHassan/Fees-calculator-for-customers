import React from 'react';

const FaqPage = () => {
  return (
    <div className="container max-w-[1240px] m-auto py-20">
      {/* <div className="max-w-3xl mx-auto py-16 sm:py-24"> */}
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
          Häufig gestellte Fragen
        </h1>
        <div className="mt-6  pt-10">
          <div className="divide-y divide-gray-200">
            <div className="space-y-8">
              <div>
                <div className="text-lg leading-6 font-medium text-gray-900">
                Was ist PayPal und warum werden Gebühren erhoben?
                </div>
                <div className="mt-2 text-base text-gray-500">
                  PayPal ist ein beliebtes Online-Zahlungssystem, das es Einzelpersonen und Unternehmen ermöglicht,
                   Zahlungen sicher über das Internet zu senden und zu empfangen. PayPal erhebt für jede Transaktion
                   Gebühren, um die Kosten für die Abwicklung von Zahlungen und die Erbringung seiner Dienste zu
                    decken.
                 </div>
              </div>
              <div>
                <div className="text-lg leading-6 font-medium text-gray-900">
                    Wie funktioniert Ihr PayPal-Gebührenrechner?
                </div>
                <div className="mt-2 text-base text-gray-500">
                  Unser PayPal-Gebührenrechner ist ein einfaches und benutzerfreundliches Tool, mit dem Sie Ihre
                  PayPal-Gebühren in Sekundenschnelle berechnen können. Alles, was Sie tun müssen, ist, den Betrag
                  einzugeben, den Sie erhalten möchten, und unser Tool zeigt Ihnen die genauen Gebühren an, die Sie
                 zahlen werden, einschließlich etwaiger Währungsumrechnungsgebühren.
              </div>
              </div>
              <div>
                <div className="text-lg leading-6 font-medium text-gray-900">
                Gibt es versteckte Gebühren oder Kosten für die Nutzung Ihres PayPal-Gebührenrechners?
                </div>
                <div className="mt-2 text-base text-gray-500">
                Nein, unser PayPal-Gebührenrechner ist völlig kostenlos. Es gibt keine versteckten Gebühren oder
                Gebühren, und Sie müssen kein Konto erstellen oder persönliche Informationen angeben, um das Tool zu
                verwenden.
                </div>
              </div>
              <div>
                <div className="text-lg leading-6 font-medium text-gray-900">
                Unterstützt Ihr PayPal-Gebührenrechner verschiedene Währungen?
                </div>
                <div className="mt-2 text-base text-gray-500">
                Ja, unser PayPal-Gebührenrechner unterstützt mehrere Währungen, sodass Sie Ihre Gebühren
                unabhängig vom Standort Ihrer Kunden berechnen können
                </div>
              </div>
              <div>
                <div className="text-lg leading-6 font-medium text-gray-900">
                Kann Ihr PayPal-Gebührenrechner für Privatkonten oder nur für Geschäftskonten verwendet werden?
                </div>
                <div className="mt-2 text-base text-gray-500">
                Unser PayPal-Gebührenrechner kann sowohl für Privat- als auch für Geschäftskonten verwendet werden
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default FaqPage;