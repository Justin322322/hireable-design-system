interface VariantDefinition {
  name: string;
  description: string;
  useCase: string;
}

interface VariantsTableProps {
  title: string;
  variants: VariantDefinition[];
}

export function VariantsTable({ title, variants }: VariantsTableProps) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left font-medium">Variant</th>
              <th className="py-3 text-left font-medium">Description</th>
              <th className="py-3 text-left font-medium">Use Case</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {variants.map((variant) => (
              <tr key={variant.name} className="border-b">
                <td className="py-3 font-mono text-foreground">{variant.name}</td>
                <td className="py-3">{variant.description}</td>
                <td className="py-3">{variant.useCase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
