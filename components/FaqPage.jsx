
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FaqPage = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const toggleQuestion = (index) => {
    setExpandedQuestion(index === expandedQuestion ? null : index);
  };
  
  const questions = [
    {
      title: 'Was ist PayPal und warum werden Gebühren erhoben?',
      content: 'PayPal ist ein beliebtes Online-Zahlungssystem, das es Einzelpersonen und Unternehmen ermöglicht, Zahlungen sicher über das Internet zu senden und zu empfangen. PayPal erhebt für jede Transaktion Gebühren, um die Kosten für die Abwicklung von Zahlungen und die Erbringung seiner Dienste zu decken.',
    },
    {
      title: 'Wie funktioniert Ihr PayPal-Gebührenrechner?',
      content: 'Unser PayPal-Gebührenrechner ist ein einfaches und benutzerfreundliches Tool, mit dem Sie Ihre PayPal-Gebühren in Sekundenschnelle berechnen können. Alles, was Sie tun müssen, ist, den Betrag einzugeben, den Sie erhalten möchten, und unser Tool zeigt Ihnen die genauen Gebühren an, die Sie zahlen werden, einschließlich etwaiger Währungsumrechnungsgebühren.',
    },
    {
      title: 'Gibt es versteckte Gebühren oder Kosten für die Nutzung Ihres PayPal-Gebührenrechners?',
      content: 'Nein, unser PayPal-Gebührenrechner ist völlig kostenlos. Es gibt keine versteckten Gebühren oderGebühren, und Sie müssen kein Konto erstellen oder persönliche Informationen angeben, um das Tool zu verwenden.',
    },
    {
      title: 'Unterstützt Ihr PayPal-Gebührenrechner verschiedene Währungen?',
      content: 'Ja, unser PayPal-Gebührenrechner unterstützt mehrere Währungen, sodass Sie Ihre Gebühren unabhängig vom Standort Ihrer Kunden berechnen können',
    },
    {
      title: ' Kann Ihr PayPal-Gebührenrechner für Privatkonten oder nur für Geschäftskonten verwendet werden?',
      content: 'Unser PayPal-Gebührenrechner kann sowohl für Privat- als auch für Geschäftskonten verwendet werden',
    },
  ];

  return (
    <div className="container max-w-[1240px] m-auto py-20">
      <div className="p-10 pt-0">
        <h1 className="text-4xl text-center font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none">
          Häufig gestellte Fragen
        </h1>
        <div className="mt-6 border-t  pt-10">
          <div className="divide-y divide-gray-200">
            <div className="space-y-8">
          
              {questions.map((question, index) => (
                 <div key={index} onClick={() => toggleQuestion(index)}>
                     <div className="flex items-center   bg-slate-200 p-5">
                     <div className="flex items-center justify-center w-8 h-8  cursor-pointer">
                          {expandedQuestion === index ? (
                           <FaMinus size={18} /> ) : ( <FaPlus size={18} />  )}
                       </div>
                       <div className="text-lg mx-5  cursor-pointer font-bold text-gray-800 leading-6 ">
                         {question.title}
                       </div>
            </div>
            {expandedQuestion === index && (
               <div className="mt-2 text-base text-gray-700">
              {question.content}
              </div>
                  )}
             </div>
               ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;

