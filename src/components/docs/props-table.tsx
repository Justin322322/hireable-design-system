interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface PropsTableProps {
  title: string;
  props: PropDefinition[];
}

export function PropsTable({ title, props }: PropsTableProps) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left font-medium">Prop</th>
              <th className="py-3 text-left font-medium">Type</th>
              <th className="py-3 text-left font-medium">Default</th>
              <th className="py-3 text-left font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {props.map((prop) => (
              <tr key={prop.name} className="border-b">
                <td className="py-3 font-mono text-foreground">{prop.name}</td>
                <td className="py-3 font-mono">{prop.type}</td>
                <td className="py-3">{prop.default ?? "-"}</td>
                <td className="py-3">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
