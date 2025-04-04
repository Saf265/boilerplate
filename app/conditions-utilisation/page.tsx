import Link from "next/link";

export default function ConditionsUtilisation() {
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
            <h1>Conditions d&apos;Utilisation</h1>
            <p>
              Dernière mise à jour: {new Date().toLocaleDateString("fr-FR")}
            </p>

            <h2>1. Acceptation des conditions</h2>
            <p>
              En accédant à ce site web, vous acceptez d&apos;être lié par ces
              conditions d&apos;utilisation, toutes les lois et réglementations
              applicables, et vous acceptez que vous êtes responsable du respect
              des lois locales applicables. Si vous n&apos;acceptez pas
              l&apos;une de ces conditions, il vous est interdit d&apos;utiliser
              ou d&apos;accéder à ce site. Les matériaux contenus dans ce site
              web sont protégés par le droit d&apos;auteur et le droit des
              marques.
            </p>

            <h2>2. Licence d&apos;utilisation</h2>
            <p>
              La permission est accordée de télécharger temporairement une copie
              des matériaux (informations ou logiciels) sur le site web de
              QuickTome AI AI pour une visualisation transitoire personnelle et
              non commerciale uniquement. Il s&apos;agit de l&apos;octroi
              d&apos;une licence, et non d&apos;un transfert de titre, et sous
              cette licence, vous ne pouvez pas:
            </p>
            <ul>
              <li>Modifier ou copier les matériaux;</li>
              <li>
                Utiliser les matériaux à des fins commerciales ou pour toute
                présentation publique (commerciale ou non commerciale);
              </li>
              <li>
                Tenter de décompiler ou de désosser tout logiciel contenu sur le
                site web de QuickTome AI AI;
              </li>
              <li>
                Supprimer tout droit d&apos;auteur ou autres notations de
                propriété des matériaux; ou
              </li>
              <li>
                Transférer les matériaux à une autre personne ou
                &quot;miroir&quot; les matériaux sur tout autre serveur.
              </li>
            </ul>
            <p>
              Cette licence sera automatiquement résiliée si vous violez
              l&apos;une de ces restrictions et peut être résiliée par QuickTome
              AI Inc. à tout moment. À la fin de votre visionnage de ces
              matériaux ou à la fin de cette licence, vous devez détruire tous
              les matériaux téléchargés en votre possession, que ce soit sous
              format électronique ou imprimé.
            </p>

            <h2>3. Avis de non-responsabilité</h2>
            <p>
              Les matériaux sur le site web de QuickTome AI AI sont fournis
              &quot;tels quels&quot;. QuickTome AI AI ne donne aucune garantie,
              expresse ou implicite, et décline et nie par la présente toutes
              les autres garanties, y compris, sans limitation, les garanties
              implicites ou conditions de qualité marchande, d&apos;adéquation à
              un usage particulier, ou de non-violation de la propriété
              intellectuelle ou autre violation des droits.
            </p>
            <p>
              En outre, QuickTome AI AI ne garantit pas et ne fait aucune
              représentation concernant l&apos;exactitude, les résultats
              probables, ou la fiabilité de l&apos;utilisation des matériaux sur
              son site web ou autrement liés à ces matériaux ou sur tout site
              lié à ce site.
            </p>

            <h2>4. Limitations</h2>
            <p>
              En aucun cas, QuickTome AI AI ou ses fournisseurs ne seront
              responsables de tout dommage (y compris, sans limitation, les
              dommages pour perte de données ou de profit, ou en raison
              d&apos;une interruption d&apos;activité) découlant de
              l&apos;utilisation ou de l&apos;incapacité d&apos;utiliser les
              matériaux sur le site web de QuickTome AI AI, même si QuickTome AI
              AI ou un représentant autorisé de QuickTome AI AI a été notifié
              oralement ou par écrit de la possibilité de tels dommages.
            </p>

            <h2>5. Révisions et errata</h2>
            <p>
              Les matériaux apparaissant sur le site web de QuickTome AI AI
              peuvent inclure des erreurs techniques, typographiques ou
              photographiques. QuickTome AI AI ne garantit pas que l&apos;un des
              matériaux sur son site web est exact, complet ou à jour. QuickTome
              AI AI peut apporter des modifications aux matériaux contenus sur
              son site web à tout moment sans préavis. QuickTome AI AI ne
              s&apos;engage toutefois pas à mettre à jour les matériaux.
            </p>

            <h2>6. Liens</h2>
            <p>
              QuickTome AI AI n&apos;a pas examiné tous les sites liés à son
              site web et n&apos;est pas responsable du contenu de ces sites
              liés. L&apos;inclusion de tout lien n&apos;implique pas
              l&apos;approbation par QuickTome AI AI du site. L&apos;utilisation
              de tout site web lié est aux risques et périls de
              l&apos;utilisateur.
            </p>

            <h2>7. Modifications des conditions d&apos;utilisation du site</h2>
            <p>
              QuickTome AI AI peut réviser ces conditions d&apos;utilisation de
              son site web à tout moment sans préavis. En utilisant ce site web,
              vous acceptez d&apos;être lié par la version alors en vigueur de
              ces conditions d&apos;utilisation.
            </p>

            <h2>8. Loi applicable</h2>
            <p>
              Toute réclamation relative au site web de QuickTome AI AI sera
              régie par les lois de la France sans égard à ses dispositions en
              matière de conflit de lois.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
