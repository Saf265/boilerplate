import Link from "next/link";

export default function PolitiqueDeConfidentialite() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-xl">QuickTome AI</span>
          <span className="sr-only">QuickTome AI</span>
        </Link>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="prose prose-gray dark:prose-invert mx-auto">
            <h1>Politique de Confidentialité</h1>
            <p>
              Dernière mise à jour: {new Date().toLocaleDateString("fr-FR")}
            </p>

            <h2>1. Introduction</h2>
            <p>
              Bienvenue sur la page de politique de confidentialité de QuickTome
              AI. Votre vie privée est importante pour nous. Cette politique de
              confidentialité explique comment nous collectons, utilisons,
              divulguons, transférons et stockons vos informations.
            </p>

            <h2>2. Informations que nous collectons</h2>
            <p>
              Nous pouvons collecter les types d&apos;informations suivants:
            </p>
            <ul>
              <li>
                <strong>Informations personnelles</strong>: Comme votre nom,
                adresse e-mail, numéro de téléphone, et autres informations
                similaires.
              </li>
              <li>
                <strong>Informations d&apos;utilisation</strong>: Données sur la
                façon dont vous utilisez notre site web ou nos services.
              </li>
              <li>
                <strong>Informations techniques</strong>: Adresse IP, type de
                navigateur, fournisseur de services Internet, pages de
                référence/sortie, système d&apos;exploitation, horodatage et
                données de navigation.
              </li>
            </ul>

            <h2>3. Comment nous utilisons vos informations</h2>
            <p>Nous utilisons les informations que nous collectons pour:</p>
            <ul>
              <li>Fournir, exploiter et maintenir notre site web</li>
              <li>Améliorer, personnaliser et développer notre site web</li>
              <li>
                Comprendre et analyser comment vous utilisez notre site web
              </li>
              <li>
                Développer de nouveaux produits, services, fonctionnalités et
                fonctionnalités
              </li>
              <li>
                Communiquer avec vous, soit directement, soit par
                l&apos;intermédiaire de l&apos;un de nos partenaires, y compris
                pour le service client
              </li>
              <li>Vous envoyer des e-mails</li>
              <li>Trouver et prévenir la fraude</li>
            </ul>

            <h2>4. Partage de vos informations</h2>
            <p>
              Nous ne vendons, n&apos;échangeons ni ne transférons de quelque
              autre manière vos informations personnelles identifiables à des
              tiers sans votre consentement, sauf dans les cas décrits dans
              cette politique de confidentialité.
            </p>

            <h2>5. Sécurité</h2>
            <p>
              La sécurité de vos informations personnelles est importante pour
              nous, mais rappelez-vous qu&apos;aucune méthode de transmission
              sur Internet ou méthode de stockage électronique n&apos;est sûre à
              100%. Bien que nous nous efforcions d&apos;utiliser des moyens
              commercialement acceptables pour protéger vos informations
              personnelles, nous ne pouvons garantir leur sécurité absolue.
            </p>

            <h2>6. Modifications de cette politique de confidentialité</h2>
            <p>
              Nous pouvons mettre à jour notre politique de confidentialité de
              temps à autre. Nous vous informerons de tout changement en
              publiant la nouvelle politique de confidentialité sur cette page.
            </p>

            <h2>7. Contact</h2>
            <p>
              Si vous avez des questions concernant cette politique de
              confidentialité, veuillez nous contacter:
            </p>
            <ul>
              <li>Par e-mail: quicktome.ai@gmail.com</li>
              <li>Par téléphone: +33 06 98 96 43 83</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
