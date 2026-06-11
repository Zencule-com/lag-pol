import Link from 'next/link';

interface FooterProps {
  showTrainingLinks?: boolean;
}

export default function Footer({ showTrainingLinks = true }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Lean Agile Groep</h3>
            <p className="text-gray-100 mb-4">Praktijkgerichte Agile trainingen voor de politie.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-100 mb-2">📞 088-5326720</p>
            <p className="text-gray-100">info@lssg.nl</p>
          </div>
          {showTrainingLinks && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Trainingen</h3>
              <ul className="text-gray-100 space-y-2">
                <li><Link href="/scrum-master" className="hover:text-white transition-colors">Scrum Master Basis</Link></li>
                <li><Link href="/scrum-master-vervolg" className="hover:text-white transition-colors">Scrum Master Verdiept</Link></li>
                <li><Link href="/product-owner" className="hover:text-white transition-colors">Product Owner Basis</Link></li>
                <li><Link href="/product-owner-vervolg" className="hover:text-white transition-colors">Product Owner Verdiept</Link></li>
                <li><Link href="/agile-coach" className="hover:text-white transition-colors">Agile Coach</Link></li>
                <li><Link href="/agile-leiderschap" className="hover:text-white transition-colors">Agile Leiderschap</Link></li>
                <li><Link href="/sturen-met-obeya" className="hover:text-white transition-colors">Sturen met Obeya</Link></li>
                <li><Link href="/facilitator-in-obeya" className="hover:text-white transition-colors">Facilitator in Obeya</Link></li>
                <li><Link href="/team-trajecten" className="hover:text-white transition-colors">Team Trajecten</Link></li>
              </ul>
            </div>
          )}
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-200">
            Lean Agile Groep ©2025
          </p>
        </div>
      </div>
    </footer>
  );
}
