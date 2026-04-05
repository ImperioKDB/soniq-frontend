import { Check, X } from 'lucide-react';

const tableData = [
  { feature: "AI Audiobook Generation", opti: true, others: false },
  { feature: "Offline Question Database", opti: true, others: false },
  { feature: "Smart Summary Synthesis", opti: true, others: true },
  { feature: "Smooth UI on Budget Phones", opti: true, others: false },
];

export default function Compare() {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">Why Optilearn Crushes Competitors</h2>
        <p className="text-slate-400">Stop paying for slow, single-feature study tools.</p>
      </div>

      <div className="glass overflow-hidden rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/50">
              <th className="py-4 px-6 text-slate-400 font-medium">Capabilities</th>
              <th className="py-4 px-6 text-neon-cyan font-bold">Optilearn</th>
              <th className="py-4 px-6 text-slate-500 font-medium">Standard Apps</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} className="border-b border-slate-900/50 hover:bg-white/[0.01]">
                <td className="py-4 px-6 text-white font-medium text-sm md:text-base">{row.feature}</td>
                <td className="py-4 px-6">
                  <Check className="w-5 h-5 text-neon-cyan" />
                </td>
                <td className="py-4 px-6">
                  {row.others ? <Check className="w-5 h-5 text-slate-600" /> : <X className="w-5 h-5 text-red-900" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
      }
