interface PropertyDefinition {
  name: string;
  type: string;
  description: string;
}

interface InterfaceTableProps {
  title: string;
  properties: PropertyDefinition[];
}

export function InterfaceTable({ title, properties }: InterfaceTableProps) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left font-medium">Property</th>
              <th className="py-3 text-left font-medium">Type</th>
              <th className="py-3 text-left font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {properties.map((prop) => (
              <tr key={prop.name} className="border-b">
                <td className="py-3 font-mono text-foreground">{prop.name}</td>
                <td className="py-3 font-mono">{prop.type}</td>
                <td className="py-3">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
